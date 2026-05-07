import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/lead'

/**
 * Lead API
 * - Accepts JSON matching `leadSchema`
 * - Validates server-side
 * - Forwards via Resend when RESEND_API_KEY + LEAD_FORM_TO_EMAIL are set
 * - Optionally pings a Slack webhook when SLACK_LEAD_WEBHOOK_URL is set
 * - Always returns a generic JSON success/failure shape
 *
 * In-memory rate limiter: 5 submissions / IP / 10 minutes. For Vercel/edge,
 * swap with Upstash Redis (keep the same interface).
 */

export const runtime = 'nodejs'

const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 5
const buckets = new Map<string, { count: number; reset: number }>()

function getClientIp(req: Request) {
  const fwd = req.headers.get('x-forwarded-for') || ''
  return fwd.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'
}

function rateLimit(ip: string) {
  const now = Date.now()
  const bucket = buckets.get(ip)
  if (!bucket || bucket.reset < now) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS })
    return true
  }
  if (bucket.count >= LIMIT) return false
  bucket.count += 1
  return true
}

async function sendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_FORM_TO_EMAIL
  const from = process.env.LEAD_FORM_FROM_EMAIL || 'leads@modernspaceexterior.com'
  if (!apiKey || !to) return { skipped: true as const }

  const html = `
    <h2>New website lead</h2>
    <table style="font-family:system-ui;border-collapse:collapse">
      ${Object.entries(payload)
        .map(
          ([k, v]) => `
        <tr>
          <td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666">${k}</td>
          <td style="padding:6px 12px;border-bottom:1px solid #eee">${String(v ?? '')}</td>
        </tr>`,
        )
        .join('')}
    </table>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Modern Space Leads <${from}>`,
      to: [to],
      subject: `New lead — ${payload.fullName} (${payload.service})`,
      reply_to: String(payload.email || ''),
      html,
    }),
  })

  return { ok: res.ok, status: res.status }
}

async function pingSlack(payload: Record<string, unknown>) {
  const url = process.env.SLACK_LEAD_WEBHOOK_URL
  if (!url) return { skipped: true as const }
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text:
        `*New website lead*\n` +
        `*Name:* ${payload.fullName}\n*Phone:* ${payload.phone}\n*Email:* ${payload.email}\n` +
        `*Service:* ${payload.service}\n*Address:* ${payload.address}\n` +
        (payload.message ? `*Message:* ${payload.message}` : ''),
    }),
  })
  return { ok: true as const }
}

export async function POST(req: Request) {
  const ip = getClientIp(req)
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please try again in a few minutes.' },
      { status: 429 },
    )
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Validation failed.',
        issues: parsed.error.issues.map((i) => ({ path: i.path, message: i.message })),
      },
      { status: 400 },
    )
  }

  // Honeypot — silently accept to avoid signaling bots
  if (parsed.data._company) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const payload = {
    fullName: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    address: parsed.data.address,
    service: parsed.data.service,
    message: parsed.data.message || '',
    sourceIp: ip,
    submittedAt: new Date().toISOString(),
  }

  // Forward to email + Slack in parallel; never block the user on a slow upstream.
  await Promise.allSettled([sendEmail(payload), pingSlack(payload)])

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: 'Lead endpoint live. POST a JSON payload.' },
    { status: 200 },
  )
}

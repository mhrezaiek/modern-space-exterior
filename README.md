# Modern Space Exterior — Production Website

Apple-grade lead-generation site for **Modern Space Exterior Inc.**, the GTA's specialist in ACM cladding, metal facades, and exterior systems.

> Built for: high local SEO visibility, fast Lighthouse scores, and end-to-end lead capture.

---

## Stack

| Layer            | Choice                                                      |
| ---------------- | ----------------------------------------------------------- |
| Framework        | **Next.js 15** (App Router, RSC, Metadata API)              |
| Language         | **TypeScript** (strict)                                     |
| Styling          | **Tailwind CSS 3** + custom Apple-grade tokens              |
| UI primitives    | **Radix** (Accordion, Dialog) + **shadcn**-style components |
| Animation        | **Framer Motion** + GSAP available                          |
| Forms            | **React Hook Form** + **Zod**                               |
| Icons            | **lucide-react**                                            |
| Email forwarding | **Resend** (drop-in; pluggable)                             |
| Tests            | **Vitest** (unit) + **Playwright** (E2E)                    |
| CI               | GitHub Actions (typecheck, lint, unit, build, E2E)          |
| Deploy           | **Vercel** (one click) — works on any Node host             |

---

## Quick start

```bash
npm install
cp .env.example .env.local           # fill in real values when you have them
npm run dev                          # → http://localhost:3000
```

### Verify before pushing

```bash
npm run verify            # typecheck + lint + unit tests
npm run test:e2e          # builds + runs Playwright
```

### Build & run production

```bash
npm run build
npm run start
```

---

## Project structure

```
app/
  layout.tsx                Root layout, header/footer/JSON-LD/skip-link
  page.tsx                  Home (Hero → Services → Featured → Process → Stats → Reviews → FAQ → CTA)
  portfolio/page.tsx        Filterable masonry gallery with lightbox
  about-us/page.tsx         Story · Stats · Values · Leadership
  contact/page.tsx          Lead form + NAP + map + hours
  api/lead/route.ts         Server-side validation + email + Slack
  sitemap.ts                Dynamic sitemap.xml
  robots.ts                 robots.txt
  manifest.ts               PWA manifest
  privacy/, terms/          Stub legal pages
  not-found.tsx, error.tsx  Branded 404 / error UI
components/
  layout/                   Header, Footer, Logo, MobileCtaBar
  home/                     All home sections
  portfolio/                Gallery + lightbox
  contact/                  LeadForm
  motion/                   Reveal, Stagger, NumberCounter, Marquee
  seo/                      JsonLd
  ui/                       Button, Section, Container, IconTile
lib/
  business.ts               Single source of truth (NAP, services, team, stats)
  lead.ts                   Lead Zod schema (shared client/server)
  projects.ts               Portfolio data (drop-in)
  schema.ts                 LocalBusiness / Organization / FAQ / Breadcrumb / Service
  seo.ts                    Default + per-page metadata factories
  utils.ts                  cn(), formatPhoneDisplay(), absoluteUrl()
tests/
  unit/                     leadSchema, schema generators, utils
  e2e/                      home, contact, seo essentials
.github/workflows/ci.yml    GitHub Actions
vercel.json                 Vercel hardening
next-sitemap.config.js      Optional fallback sitemap
playwright.config.ts        Desktop + mobile viewports
```

---

## SEO checklist (already wired)

- [x] Per-page `<title>` + meta description with **GTA + service** keywords
- [x] Canonical URLs everywhere
- [x] Open Graph + Twitter card metadata
- [x] **JSON-LD**: `LocalBusiness`, `Organization`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Service`, `AggregateRating`
- [x] Dynamic `sitemap.xml` and `robots.txt`
- [x] Web App Manifest + favicon
- [x] Hardened security headers (HSTS, X-Frame, Permissions-Policy)
- [x] Image optimization (AVIF/WebP), responsive sizes
- [x] Mobile-first layout, sticky mobile CTA bar, accessible (skip-link, focus rings, prefers-reduced-motion)
- [x] Lighthouse-friendly: fonts via system stack, lazy-loaded images, minimal JS

### After deployment

1. Submit `https://www.modernspaceexterior.com/sitemap.xml` to Google Search Console.
2. Add the GSC verification meta tag in `lib/seo.ts` (`verification.google`).
3. Claim & complete your **Google Business Profile**, add 5+ photos, ensure NAP matches `lib/business.ts` exactly.
4. Add Local Service Ads (Google Guaranteed) — pre-qualifies you for the top of search.
5. Connect Google Analytics or Plausible by setting `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.

---

## Lead pipeline

The contact form (`/contact`) submits to `/api/lead`, which:

1. Validates with the same Zod schema used on the client.
2. Honeypot + IP-based rate limiting (5 / 10 minutes).
3. Forwards to **Resend** when `RESEND_API_KEY` and `LEAD_FORM_TO_EMAIL` are configured.
4. Optionally pings a **Slack** webhook (`SLACK_LEAD_WEBHOOK_URL`) for instant phone alerts.
5. Returns a stable `{ ok }` JSON shape to the client.

Swap Resend for SendGrid/Postmark by changing `sendEmail()` in `app/api/lead/route.ts`.

---

## Deploying to Vercel

```bash
# Option A — CLI
npm i -g vercel
vercel link
vercel env add NEXT_PUBLIC_SITE_URL    # https://www.modernspaceexterior.com
vercel env add RESEND_API_KEY
vercel env add LEAD_FORM_TO_EMAIL
vercel --prod

# Option B — push to GitHub, import the repo on vercel.com
```

Then in DNS:

```
Type   Name   Value
A      @      76.76.21.21         (Vercel)
CNAME  www    cname.vercel-dns.com
```

---

## Changing copy / images / brand

| What                 | Where                                         |
| -------------------- | --------------------------------------------- |
| Phone, email, hours  | `lib/business.ts`                             |
| Service descriptions | `lib/business.ts`                             |
| Team bios            | `lib/business.ts`                             |
| Portfolio projects   | `lib/projects.ts`                             |
| FAQ                  | `components/home/Faq.tsx`                     |
| Hero copy            | `components/home/Hero.tsx`                    |
| Brand color          | `tailwind.config.ts` → `colors.accent`        |
| Logo mark            | `components/layout/Logo.tsx` + `public/`      |
| Hero / project photo | Drop into `public/photos/` and update sources |

---

## Performance budget

| Metric (mobile) | Target |
| --------------- | ------ |
| Performance     | ≥ 95   |
| Accessibility   | ≥ 95   |
| Best Practices  | ≥ 95   |
| SEO             | 100    |
| LCP             | < 2.0s |
| CLS             | < 0.05 |
| INP             | < 200ms|

Run `npm run build` then test against your deployed URL with [PageSpeed Insights](https://pagespeed.web.dev/).

---

## License

© Modern Space Exterior Inc. All rights reserved.

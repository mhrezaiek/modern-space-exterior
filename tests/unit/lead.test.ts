import { describe, expect, it } from 'vitest'
import { leadSchema } from '@/lib/lead'

describe('leadSchema', () => {
  const valid = {
    fullName: 'Jane Architect',
    email: 'jane@example.com',
    phone: '(416) 555-0101',
    address: '200 Bay St, Toronto',
    service: 'ACM Installation' as const,
    message: 'Three-storey rear addition',
    consent: true,
    _company: '',
  }

  it('accepts a complete, valid submission', () => {
    expect(leadSchema.safeParse(valid).success).toBe(true)
  })

  it('rejects missing name', () => {
    const r = leadSchema.safeParse({ ...valid, fullName: '' })
    expect(r.success).toBe(false)
  })

  it('rejects bad email', () => {
    const r = leadSchema.safeParse({ ...valid, email: 'notanemail' })
    expect(r.success).toBe(false)
  })

  it('requires consent', () => {
    const r = leadSchema.safeParse({ ...valid, consent: false })
    expect(r.success).toBe(false)
  })

  it('rejects phone with bad characters', () => {
    const r = leadSchema.safeParse({ ...valid, phone: 'call me!' })
    expect(r.success).toBe(false)
  })

  it('rejects unknown service value', () => {
    const r = leadSchema.safeParse({ ...valid, service: 'rocket-launch' })
    expect(r.success).toBe(false)
  })

  it('honeypot must be empty', () => {
    const r = leadSchema.safeParse({ ...valid, _company: 'Acme' })
    expect(r.success).toBe(false)
  })
})

import { describe, expect, it } from 'vitest'
import { localBusinessSchema, organizationSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { business } from '@/lib/business'

describe('schema.org generators', () => {
  it('localBusiness schema includes NAP + areaServed', () => {
    const s = localBusinessSchema() as any
    expect(s['@type']).toContain('LocalBusiness')
    expect(s.telephone).toBe(business.phone)
    expect(s.email).toBe(business.email)
    expect(s.areaServed.length).toBeGreaterThan(5)
  })

  it('organization schema is parseable JSON-LD', () => {
    const s = organizationSchema()
    const json = JSON.stringify(s)
    expect(JSON.parse(json)['@type']).toBe('Organization')
  })

  it('faq schema renders the right number of questions', () => {
    const s = faqSchema([
      { question: 'A?', answer: 'A.' },
      { question: 'B?', answer: 'B.' },
    ]) as any
    expect(s.mainEntity).toHaveLength(2)
  })

  it('breadcrumb schema preserves order', () => {
    const s = breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]) as any
    expect(s.itemListElement[0].position).toBe(1)
    expect(s.itemListElement[1].name).toBe('Contact')
  })
})

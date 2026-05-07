import { describe, expect, it } from 'vitest'
import { cn, formatPhoneDisplay, absoluteUrl } from '@/lib/utils'

describe('utils', () => {
  it('cn merges tailwind classes (later wins)', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
    expect(cn('text-sm', false && 'text-lg', 'font-bold')).toContain('font-bold')
  })

  it('formatPhoneDisplay formats 10-digit phone', () => {
    expect(formatPhoneDisplay('+12895525404')).toBe('(289) 552-5404')
    expect(formatPhoneDisplay('2895525404')).toBe('(289) 552-5404')
    expect(formatPhoneDisplay('xx')).toBe('xx')
  })

  it('absoluteUrl resolves to a fully-qualified URL', () => {
    expect(absoluteUrl('/contact')).toMatch(/^https?:\/\/.*\/contact$/)
  })
})

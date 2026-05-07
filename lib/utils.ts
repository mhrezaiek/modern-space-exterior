import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path = '/') {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.modernspaceexterior.com'
  return new URL(path, base).toString()
}

export function formatPhoneDisplay(phone: string) {
  // expects +1XXXXXXXXXX or 1XXXXXXXXXX
  const digits = phone.replace(/\D/g, '').replace(/^1/, '')
  if (digits.length !== 10) return phone
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

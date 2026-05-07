'use client'

import { Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { business } from '@/lib/business'
import { cn } from '@/lib/utils'

export function MobileCtaBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-ink-100 bg-white p-2 shadow-apple-lg transition-[transform,opacity] duration-500 md:hidden',
        show ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0',
      )}
    >
      <a
        href={`tel:${business.phone}`}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-50 py-3 text-[15px] font-medium text-ink-900"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 py-3 text-[15px] font-medium text-white"
      >
        <MessageSquare className="h-4 w-4" /> Free Estimate
      </Link>
    </div>
  )
}

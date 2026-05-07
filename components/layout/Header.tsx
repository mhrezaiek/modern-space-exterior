'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './Logo'
import { LinkButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { business } from '@/lib/business'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about-us', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500',
          scrolled
            ? 'glass border-b border-ink-100'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-[68px] md:px-8">
          <Logo />

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors',
                        active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900',
                      )}
                    >
                      {item.label}
                      {active ? (
                        <span className="absolute inset-x-3 -bottom-px h-px bg-ink-900" />
                      ) : null}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[14px] font-medium text-ink-700 transition-colors hover:text-ink-900"
            >
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              {business.phoneDisplay}
            </a>
            <LinkButton href="/contact" variant="primary" size="md">
              Free Estimate
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-900 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="m"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white md:hidden"
            role="dialog"
            aria-modal
            aria-label="Mobile menu"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-5 pt-6">
              <ul className="flex flex-col gap-2">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-2xl border border-ink-100 bg-ink-50/50 px-5 py-5 text-2xl font-medium text-ink-900"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <LinkButton href="/contact" size="lg" className="w-full">
                  Get a Free Estimate
                </LinkButton>
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-200 px-6 py-4 text-base font-medium text-ink-900"
                >
                  <Phone className="h-4 w-4" />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

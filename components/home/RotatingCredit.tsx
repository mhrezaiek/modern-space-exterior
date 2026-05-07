'use client'

import * as React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export type CreditItem = {
  title: string
  meta: string
  city: string
  year: string
}

const FEATURED: CreditItem[] = [
  {
    title: 'Yorkville Residence',
    meta: 'ACM rainscreen · custom black anodized',
    city: 'Toronto · ON',
    year: '2025',
  },
  {
    title: 'King West Mixed-Use',
    meta: 'Dual-tone champagne / graphite',
    city: 'Toronto · ON',
    year: '2024',
  },
  {
    title: 'Mississauga Logistics',
    meta: 'Industrial metal cladding · 38,000 sq ft',
    city: 'Mississauga · ON',
    year: '2024',
  },
  {
    title: 'Vaughan Family Estate',
    meta: 'ACM + standing-seam aluminum',
    city: 'Vaughan · ON',
    year: '2025',
  },
]

const ROTATE_MS = 6000

/**
 * RotatingCredit — slowly cycles through featured projects in the corner of
 * the Hero, the way an architectural film credits its location each scene.
 *
 * - Crossfade + tiny slide-up on transition (framer-motion AnimatePresence)
 * - Index pips below; current pip glows
 * - Auto-pauses on hover so reading isn't interrupted
 * - Respects prefers-reduced-motion (no animation, no auto-rotation)
 */
export function RotatingCredit({
  items = FEATURED,
  intervalMs = ROTATE_MS,
  className,
}: {
  items?: CreditItem[]
  intervalMs?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const safeItems = items.length > 0 ? items : FEATURED
  const current = safeItems[index] ?? safeItems[0]!

  React.useEffect(() => {
    if (reduced || paused || safeItems.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeItems.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [reduced, paused, safeItems.length, intervalMs])

  return (
    <div
      role="region"
      aria-label="Featured project of the month"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={className}
    >
      {/* Header label */}
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
        <span aria-hidden className="h-px w-6 bg-white/35" />
        Featured project
      </div>

      {/* Crossfading body */}
      <div className="relative mt-3 h-[58px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.title}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 text-right"
          >
            <p className="text-[15px] font-semibold leading-tight text-white">
              {current.title}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
              {current.meta}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-white/35">
              {current.city} · {current.year}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Index pips */}
      <div className="mt-3 flex items-center justify-end gap-1.5">
        {safeItems.map((it, i) => {
          const isActive = i === index
          return (
            <button
              key={it.title}
              type="button"
              aria-label={`Show ${it.title}`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={`h-[3px] transition-all duration-500 ${
                isActive
                  ? 'w-7 bg-white'
                  : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

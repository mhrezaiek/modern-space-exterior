'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PROJECT_CATEGORIES, PROJECTS, type Project, type ProjectCategory } from '@/lib/projects'

export function Gallery() {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all')
  const [open, setOpen] = useState<Project | null>(null)

  const filtered = useMemo(
    () => (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {PROJECT_CATEGORIES.map((c) => {
          const isActive = active === c.id
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                isActive
                  ? 'border-ink-900 bg-ink-900 text-white'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-ink-900 hover:text-ink-900',
              )}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <LayoutGroup>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.slug}
                layout
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
                onClick={() => setOpen(p)}
                className={cn(
                  'group relative block overflow-hidden rounded-apple-lg bg-ink-100 text-left',
                  i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]',
                )}
              >
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.scope}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-eyebrow uppercase text-white/70">
                    {p.city} · {p.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{p.scope}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal
            aria-label={open.title}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-apple-lg bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close"
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink-900 backdrop-blur hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={open.image}
                alt={open.title}
                className="h-[55vh] w-full object-cover"
              />
              <div className="p-7 md:p-9">
                <p className="text-eyebrow uppercase text-ink-500">
                  {open.city} · {open.year} · {open.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink-900 md:text-3xl">
                  {open.title}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-ink-700">{open.scope}</p>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-500">
                  {open.summary}
                </p>
                <a
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white hover:bg-ink-700"
                >
                  Start a similar project →
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

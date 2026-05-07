'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import Link from 'next/link'
import { LinkButton } from '@/components/ui/button'
import { business } from '@/lib/business'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      {/* Background photograph (use Unsplash or local /public) */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            srcSet="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80"
            media="(min-width: 768px)"
          />
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
            alt="Modern architectural facade with metal cladding panels"
            className="h-full w-full object-cover opacity-60"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/60 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,113,227,0.18),transparent_60%)]" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:min-h-[88vh] md:px-8 md:pb-24 md:pt-32">
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" /> Booking GTA installs · Q2 / Q3 2026
        </motion.span>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl text-display-2xl text-white"
        >
          Exteriors,
          <br />
          <span className="text-gradient-invert">engineered to last.</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Modern Space Exterior is the GTA’s specialist in ACM cladding, metal facades, and
          full exterior systems — for commercial, residential, and industrial buildings that
          deserve to look as precise in year ten as they do on day one.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <LinkButton href="/contact" variant="invert" size="xl" className="group">
            Get a free estimate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </LinkButton>
          <LinkButton href="/portfolio" variant="outline" size="xl" className="border-white/20 bg-white/5 text-white hover:border-white">
            See our work
          </LinkButton>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 grid w-full max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-6 text-sm text-white/70 sm:grid-cols-3"
        >
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-white" />
            <span>4.9 / 5 from 128 reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-white" />
            <span>Insured · WSIB-cleared</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-white">{business.stats.projects}+</span>
            <span>projects since {business.founded}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 right-6 hidden text-xs text-white/50 hover:text-white md:inline-block"
      >
        ↓ Explore
      </Link>
    </section>
  )
}

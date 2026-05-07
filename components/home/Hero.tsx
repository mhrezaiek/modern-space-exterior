'use client'

import * as React from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import { ArrowRight, ShieldCheck, Star, Phone } from 'lucide-react'
import Link from 'next/link'
import { LinkButton } from '@/components/ui/button'
import { RotatingCredit } from '@/components/home/RotatingCredit'
import { business } from '@/lib/business'

/**
 * Hero — editorial / architectural cinema treatment, v2.
 *
 * Background composition (from back to front):
 *   1. <motion.div>   — scroll-driven Y parallax (translates only)
 *   2.   .animate-kenburns — slow scale + pan loop (~32s)
 *   3.     <video>    — autoplaying drone footage with photo poster
 *
 * The photo `poster` attribute means: if the video file is missing
 * or still loading, the user always sees the high-res photo. There is
 * NO broken state.
 *
 * Drop your hero footage at /public/videos/hero.mp4 (and optionally
 * /public/videos/hero.webm for smaller payload). Aim for 8–15 seconds,
 * silent, 1920×1080+, slow drone or dolly across an architectural facade.
 */
export function Hero() {
  const reduced = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0])

  const POSTER =
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=85'

  return (
    <section
      ref={ref}
      aria-label="Modern Space Exterior — premium ACM cladding & exterior facade systems"
      className="relative isolate overflow-hidden bg-ink-900 text-white film-grain film-vignette"
    >
      {/* ── Background: scroll parallax (Y only) ── */}
      <motion.div
        style={reduced ? undefined : { y }}
        className="absolute inset-0 -z-20 will-change-transform"
      >
        {/* Ken Burns wrapper — slow scale+pan that composes with parallax */}
        <div className="absolute inset-0 animate-kenburns">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER}
            aria-hidden
            className="h-full w-full object-cover"
          >
            {/* Drop your real footage at these paths.
                Until then the <video> falls back to the poster image. */}
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Layered gradients for editorial depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/55 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(0,113,227,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(10,132,255,0.10),transparent_55%)]" />
      </div>

      {/* ── Foreground content ── */}
      <motion.div
        style={reduced ? undefined : { opacity }}
        className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:min-h-[92svh] md:px-8 md:pb-24 md:pt-32"
      >
        {/* Live status pill */}
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur"
        >
          <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success/70 pulse-dot text-success" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          Now booking GTA installs · Q2 / Q3 2026
        </motion.span>

        {/* Display headline */}
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 max-w-5xl text-display-2xl text-white"
        >
          Exteriors,
          <br />
          <span className="text-gradient-invert">engineered to last.</span>
        </motion.h1>

        {/* Lede */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          Modern Space Exterior is the GTA&rsquo;s specialist in ACM cladding,
          metal facades, and full exterior systems &mdash; for buildings that
          deserve to look as precise in year ten as they do on day one.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticCta>
            <LinkButton href="/contact" variant="invert" size="xl" className="group">
              Get a free estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LinkButton>
          </MagneticCta>
          <LinkButton
            href={`tel:${business.phone}`}
            variant="outline"
            size="xl"
            className="border-white/20 bg-white/5 text-white hover:border-white"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{business.phoneDisplay}</span>
            <span className="sm:hidden">Call now</span>
          </LinkButton>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-white/70 sm:grid-cols-3"
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
      </motion.div>

      {/* Rotating featured project credit (desktop only — keeps mobile clean) */}
      <RotatingCredit className="pointer-events-auto absolute bottom-8 right-8 hidden w-[280px] md:block" />

      {/* Scroll cue */}
      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white md:flex"
      >
        <span className="h-px w-8 bg-white/40" />
        Scroll
      </Link>
    </section>
  )
}

/**
 * MagneticCta — wraps a CTA button so it gently translates toward the cursor.
 * Falls back to no-op for reduced-motion users.
 */
function MagneticCta({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 })
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left - rect.width / 2
    const cy = e.clientY - rect.top - rect.height / 2
    x.set(cx * 0.18)
    y.set(cy * 0.18)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

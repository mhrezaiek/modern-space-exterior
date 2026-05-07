'use client'

import * as React from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ClipboardList, Pencil, Wrench, CheckCircle2, type LucideIcon } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'

type Step = {
  n: string
  title: string
  body: string
  icon: LucideIcon
  duration: string
}

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Site walk & scope',
    body:
      'On-site assessment with our technical team. We document substructure, drainage, and finish intent — and return a fixed-scope estimate within 48 hours.',
    icon: ClipboardList,
    duration: 'Within 48h',
  },
  {
    n: '02',
    title: 'Engineering & shop drawings',
    body:
      'Detailed drawings, panel layout, thermal & moisture management, and material specs — coordinated with your architect or PM before fabrication begins.',
    icon: Pencil,
    duration: '1–3 weeks',
  },
  {
    n: '03',
    title: 'Fabrication & QA',
    body:
      'Panels CNC-routed and pre-assembled at our shop. Each panel is QA-checked against tolerance specs before it leaves for site.',
    icon: Wrench,
    duration: '2–6 weeks',
  },
  {
    n: '04',
    title: 'Installation & commissioning',
    body:
      'Certified installers execute on schedule. Joint, seal, and alignment inspections at each elevation — followed by a written commissioning sign-off.',
    icon: CheckCircle2,
    duration: 'Per schedule',
  },
]

export function Process() {
  const reduced = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 30%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Section
      tone="dark"
      className="relative py-24 md:py-32"
      aria-label="Our four-step process"
    >
      {/* Architectural grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 architectural-grid mask-fade-y"
      />
      <Container>
        <SectionHeading
          invert
          eyebrow="How we work"
          title={
            <>
              A four-step process,
              <br />
              <span className="text-white/50">built for predictability.</span>
            </>
          }
          description="No surprises, no scope-drift. Every project follows the same disciplined sequence — that's why our schedules hold."
        />

        <div ref={ref} className="relative mt-20">
          {/* Vertical drawing rail (mobile + tablet) */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-white/10 md:block lg:hidden" />
          <motion.div
            aria-hidden
            className="absolute left-[27px] top-0 hidden w-px origin-top bg-gradient-to-b from-accent via-accent-glow to-accent/40 md:block lg:hidden"
            style={reduced ? { height: '100%' } : { height: lineHeight }}
          />

          {/* Horizontal drawing rail (desktop) */}
          <div className="absolute left-0 top-[60px] hidden h-px w-full bg-white/10 lg:block" />
          <motion.div
            aria-hidden
            className="absolute left-0 top-[60px] hidden h-px origin-left bg-gradient-to-r from-accent via-accent-glow to-accent/40 lg:block"
            style={reduced ? { width: '100%' } : { width: lineHeight }}
          />

          {/* Steps */}
          <ol className="grid gap-10 md:gap-12 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.n} delay={i * 0.08}>
                  <li className="relative flex gap-6 md:gap-8 lg:flex-col lg:gap-0">
                    {/* Numeral + node */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <span className="font-display absolute -top-3 left-full ml-3 hidden text-[40px] font-bold leading-none tracking-tight text-white/15 lg:block">
                        {s.n}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex-1 lg:mt-8">
                      <div className="flex items-baseline gap-3 lg:hidden">
                        <span className="font-display text-3xl font-bold tracking-tight text-white/25">
                          {s.n}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-glow">
                          {s.duration}
                        </span>
                      </div>
                      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-glow lg:inline">
                        {s.duration}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-2xl lg:mt-2">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </Container>
    </Section>
  )
}

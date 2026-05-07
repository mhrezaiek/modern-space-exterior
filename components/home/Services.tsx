import {
  Building2,
  Hammer,
  HardHat,
  Layers,
  Home,
  Factory,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'
import { IconTile } from '@/components/ui/icon-tile'
import { business } from '@/lib/business'
import Link from 'next/link'

const ICONS: Record<string, LucideIcon> = {
  'acm-installation': Layers,
  'metal-cladding': Hammer,
  'exterior-facade-systems': Building2,
  commercial: HardHat,
  residential: Home,
  industrial: Factory,
}

export function Services() {
  return (
    <Section tone="light" className="py-24 md:py-32" aria-labelledby="services-title">
      <Container>
        <div id="services" />
        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              Six disciplines.
              <br />
              <span className="text-ink-400">One uncompromising standard.</span>
            </>
          }
          description="Every facade we deliver is engineered, fabricated, and installed by the same accountable team — with one shared bar for finish quality."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {business.services.map((s, i) => {
            const Icon = ICONS[s.slug] ?? Layers
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <article
                  id={`service-${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-apple-lg border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-apple-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <IconTile Icon={Icon} />
                  <h3 className="mt-6 text-[22px] font-semibold leading-tight tracking-tight text-ink-900">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-ink-700">{s.tagline}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                    {s.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-1 text-[14px] font-medium text-ink-900 transition-colors group-hover:gap-2"
                  >
                    Request scope <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

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
import Link from 'next/link'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'
import { Spotlight } from '@/components/motion/Spotlight'
import { business } from '@/lib/business'

const ICONS: Record<string, LucideIcon> = {
  'acm-installation': Layers,
  'metal-cladding': Hammer,
  'exterior-facade-systems': Building2,
  commercial: HardHat,
  residential: Home,
  industrial: Factory,
}

/**
 * Each service gets a service-appropriate hero photo behind the card.
 * Sourced via Unsplash, swap-in real photos from /public when available.
 */
const SERVICE_IMAGES: Record<string, string> = {
  'acm-installation':
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80',
  'metal-cladding':
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
  'exterior-facade-systems':
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
  commercial:
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80',
  residential:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  industrial:
    'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1400&q=80',
}

export function Services() {
  return (
    <Section
      tone="light"
      className="py-24 md:py-32"
      aria-labelledby="services-title"
    >
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

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {business.services.map((s, i) => {
            const Icon = ICONS[s.slug] ?? Layers
            const featured = i === 0
            return (
              <Reveal
                key={s.slug}
                delay={i * 0.05}
                className={featured ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-2'}
              >
                <Link
                  href="/contact"
                  id={`service-${s.slug}`}
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-apple-lg border border-ink-100 bg-white text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-apple-lg"
                >
                  {/* Background image */}
                  <img
                    src={SERVICE_IMAGES[s.slug]}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  {/* Tint + gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/85 to-ink-900/55 transition-opacity duration-500 group-hover:from-ink-900 group-hover:via-ink-900/75 group-hover:to-ink-900/40" />
                  {/* Mouse-follow spotlight */}
                  <Spotlight intensity="subtle" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white backdrop-blur">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                        {String(i + 1).padStart(2, '0')} / {String(business.services.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className={
                        featured
                          ? 'mt-auto pt-12 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl'
                          : 'mt-auto pt-10 text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl'
                      }
                    >
                      {s.name}
                    </h3>
                    <p
                      className={
                        featured
                          ? 'mt-3 text-[15px] font-medium text-white/80 md:text-base'
                          : 'mt-2 text-[14px] font-medium text-white/75'
                      }
                    >
                      {s.tagline}
                    </p>
                    {featured ? (
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                        {s.description}
                      </p>
                    ) : null}

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/85 transition-colors group-hover:text-white">
                        Request scope
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                        {featured ? 'Lead service' : 'Specialty'}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

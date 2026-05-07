import { ArrowRight, Phone, Star, ShieldCheck, Clock4 } from 'lucide-react'
import { Container, Section } from '@/components/ui/section'
import { LinkButton } from '@/components/ui/button'
import { business } from '@/lib/business'

const BENEFITS = [
  { icon: Clock4, text: 'Fixed-scope estimate inside 48 hours' },
  { icon: ShieldCheck, text: '$5M liability · WSIB-cleared on every site' },
  { icon: Star, text: '4.9 / 5 across 128 verified GTA reviews' },
]

export function FinalCta() {
  return (
    <Section
      tone="dark"
      className="relative isolate py-28 md:py-36 film-grain"
      aria-label="Start a project"
    >
      {/* Background imagery */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=85"
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
      </div>
      {/* Gradient veil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/90 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,113,227,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(10,132,255,0.15),transparent_55%)]" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Trust micro-badges above headline */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-current" />
              4.9 stars
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              {business.stats.projects}+ projects delivered
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" />
              Insured · WSIB
            </span>
          </div>

          <span className="mt-8 text-eyebrow uppercase text-white/55">
            Start a project
          </span>
          <h2 className="mt-5 text-display-xl text-white">
            Ready when you are.
            <br />
            <span className="text-white/45">Free estimate inside 48 hours.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Tell us about your project — we&rsquo;ll do a site walk, hand you a fixed-scope number,
            and a schedule you can actually plan around.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/contact" variant="invert" size="xl" className="group">
              Get a free estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LinkButton>
            <LinkButton
              href={`tel:${business.phone}`}
              variant="outline"
              size="xl"
              className="border-white/20 bg-white/5 text-white hover:border-white"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </LinkButton>
          </div>

          {/* Benefit row */}
          <ul className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-left sm:grid-cols-3 sm:gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon
              return (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[14px] leading-relaxed text-white/75"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-accent-glow">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {b.text}
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

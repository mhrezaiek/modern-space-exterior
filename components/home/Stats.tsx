import { Container, Section } from '@/components/ui/section'
import { NumberCounter } from '@/components/motion/NumberCounter'
import { Reveal } from '@/components/motion/Reveal'
import { business } from '@/lib/business'

type Stat = {
  value: number
  suffix: string
  label: string
  caption: string
}

export function Stats() {
  const stats: Stat[] = [
    {
      value: business.stats.projects,
      suffix: '+',
      label: 'Projects completed',
      caption: 'Commercial, residential and industrial envelopes across the GTA.',
    },
    {
      value: business.stats.customers,
      suffix: '+',
      label: 'Repeat clients',
      caption: 'Architects, builders and homeowners who keep coming back.',
    },
    {
      value: business.stats.yearsExperience,
      suffix: '+',
      label: 'Years in the trade',
      caption: `Building exteriors across Toronto since ${business.founded}.`,
    },
    {
      value: business.stats.teamSize,
      suffix: '+',
      label: 'On the crew',
      caption: 'Engineers, fabricators, certified installers — one accountable team.',
    },
  ]

  return (
    <Section
      tone="dark"
      className="relative py-24 md:py-32"
      aria-label="Company performance"
    >
      {/* Decorative blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 architectural-grid mask-fade-y opacity-60"
      />
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(0,113,227,0.18),transparent_60%)]"
      />

      <Container>
        {/* Editorial kicker */}
        <Reveal>
          <div className="mb-14 flex flex-col items-start gap-3 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-glow">
                By the numbers
              </span>
              <h2 className="mt-3 max-w-2xl text-display-md text-white">
                A decade of facades,
                <br />
                <span className="text-white/45">measured in finished walls.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
              Every figure on this page is verifiable. Reviews, project counts and
              client list available on request.
            </p>
          </div>
        </Reveal>

        {/* Stat row */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-apple-lg border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="relative flex h-full flex-col bg-ink-900 p-8 md:p-10">
                <span className="font-display block text-[clamp(3.25rem,6vw,5.5rem)] font-bold leading-none tracking-tight text-white">
                  <NumberCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/85">
                  {s.label}
                </span>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                  {s.caption}
                </p>
                {/* Index marker */}
                <span className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

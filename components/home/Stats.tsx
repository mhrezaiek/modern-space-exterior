import { Container, Section } from '@/components/ui/section'
import { NumberCounter } from '@/components/motion/NumberCounter'
import { business } from '@/lib/business'

export function Stats() {
  const stats = [
    { value: business.stats.projects, suffix: '+', label: 'Projects completed' },
    { value: business.stats.customers, suffix: '+', label: 'Happy customers' },
    { value: business.stats.yearsExperience, suffix: '+', label: 'Years in the GTA' },
    { value: business.stats.teamSize, suffix: '+', label: 'On the team' },
  ]
  return (
    <Section tone="light" className="py-20 md:py-24" aria-label="Company performance">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 rounded-apple-lg border border-ink-100 bg-ink-50/60 p-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="font-display text-5xl font-bold tracking-tight text-ink-900 md:text-6xl">
                <NumberCounter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-sm font-medium text-ink-500">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

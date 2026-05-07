import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Site walk & scope',
    body:
      'On-site assessment with our technical team. We document substructure, drainage, and finish intent — and return a fixed-scope estimate within 48 hours.',
  },
  {
    n: '02',
    title: 'Engineering & shop drawings',
    body:
      'Detailed drawings, panel layout, thermal & moisture management, and material specs — coordinated with your architect or PM before fabrication begins.',
  },
  {
    n: '03',
    title: 'Fabrication & QA',
    body:
      'Panels CNC-routed and pre-assembled at our shop. Each panel is QA-checked against tolerance specs before it leaves for site.',
  },
  {
    n: '04',
    title: 'Installation & commissioning',
    body:
      'Certified installers execute on schedule. Joint, seal, and alignment inspections at each elevation — followed by a written commissioning sign-off.',
  },
]

export function Process() {
  return (
    <Section tone="dark" className="py-24 md:py-32">
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
          description="No surprises, no scope-drift. Every project follows the same disciplined sequence — that’s why our schedules hold."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-apple-lg border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="flex h-full flex-col bg-ink-900 p-8">
                <span className="font-display text-5xl font-bold tracking-tight text-white/20">
                  {s.n}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

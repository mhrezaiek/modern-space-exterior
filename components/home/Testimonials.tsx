import { Star } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'

const TESTIMONIALS = [
  {
    quote:
      'The crispest ACM install I’ve commissioned in fifteen years of running residential projects. Modern Space delivered on every reveal, every joint, every deadline.',
    author: 'M. Habib',
    role: 'General Contractor · Vaughan',
  },
  {
    quote:
      'They were the only contractor in the GTA who walked the site with engineered drawings already prepared. We re-hired them on three subsequent buildings.',
    author: 'D. Reilly',
    role: 'PM · Mixed-Use Development, Toronto',
  },
  {
    quote:
      'Beautiful finish. Quiet inside the wall. Two winters in and the panels still read as flat as the day they went up.',
    author: 'A. Mansoori',
    role: 'Homeowner · Markham',
  },
]

export function Testimonials() {
  return (
    <Section tone="light" className="py-24 md:py-32" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading
          eyebrow="Client trust"
          title={
            <>
              4.9 stars across
              <br />
              <span className="text-ink-400">128 verified reviews.</span>
            </>
          }
          description="What architects, builders and homeowners across the GTA say after we hand the project back."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-apple-lg border border-ink-100 bg-white p-8 shadow-apple-sm">
                <div className="flex items-center gap-1 text-ink-900">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 text-[17px] leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-ink-100 pt-5 text-sm">
                  <div className="font-semibold text-ink-900">{t.author}</div>
                  <div className="text-ink-500">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

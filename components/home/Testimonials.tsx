import { Star, Quote } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'

type Testimonial = {
  quote: string
  author: string
  role: string
  initial: string
  project?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The crispest ACM install I’ve commissioned in fifteen years of running residential projects. Modern Space delivered on every reveal, every joint, every deadline.',
    author: 'M. Habib',
    role: 'General Contractor · Vaughan',
    initial: 'M',
    project: 'Custom residence · Vaughan',
  },
  {
    quote:
      'They were the only contractor in the GTA who walked the site with engineered drawings already prepared. We re-hired them on three subsequent buildings.',
    author: 'D. Reilly',
    role: 'PM · Mixed-Use Development',
    initial: 'D',
    project: 'Three commercial builds',
  },
  {
    quote:
      'Beautiful finish. Quiet inside the wall. Two winters in and the panels still read as flat as the day they went up.',
    author: 'A. Mansoori',
    role: 'Homeowner · Markham',
    initial: 'A',
    project: 'Custom home · Markham',
  },
]

export function Testimonials() {
  const hero = TESTIMONIALS[0]!
  const rest = TESTIMONIALS.slice(1)
  return (
    <Section
      tone="light"
      className="py-24 md:py-32"
      aria-labelledby="testimonials-title"
    >
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

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {/* Hero pull-quote — wide editorial card */}
          <Reveal delay={0} className="lg:col-span-7">
            <PullQuote item={hero} featured />
          </Reveal>

          {/* Two stacked supporting quotes */}
          <div className="grid gap-5 lg:col-span-5">
            {rest.map((t, i) => (
              <Reveal key={t.author} delay={0.1 + i * 0.06}>
                <PullQuote item={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function PullQuote({ item, featured = false }: { item: Testimonial; featured?: boolean }) {
  return (
    <figure
      className={`relative flex h-full flex-col overflow-hidden rounded-apple-lg border border-ink-100 bg-white p-8 shadow-apple-sm md:p-10 ${
        featured ? 'md:p-12' : ''
      }`}
    >
      {/* Oversized decorative quote mark */}
      <Quote
        aria-hidden
        className={
          featured
            ? 'pointer-events-none absolute -right-2 -top-2 h-32 w-32 rotate-180 text-ink-100 md:h-40 md:w-40'
            : 'pointer-events-none absolute -right-2 -top-2 h-20 w-20 rotate-180 text-ink-100'
        }
        strokeWidth={1}
      />

      {/* Star rating */}
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <blockquote
        className={
          featured
            ? 'relative mt-6 text-[20px] leading-relaxed text-ink-800 md:text-[24px]'
            : 'relative mt-6 text-[16px] leading-relaxed text-ink-700 md:text-[17px]'
        }
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-4 border-t border-ink-100 pt-6">
        <div
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-base font-semibold text-white"
        >
          {item.initial}
        </div>
        <div className="text-sm">
          <div className="font-semibold text-ink-900">{item.author}</div>
          <div className="text-ink-500">{item.role}</div>
        </div>
        {item.project ? (
          <span className="ml-auto hidden rounded-full border border-ink-100 bg-ink-50/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-600 md:inline-block">
            {item.project}
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}

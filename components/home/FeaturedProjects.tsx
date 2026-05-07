import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'
import { LinkButton } from '@/components/ui/button'

const FEATURED = [
  {
    title: 'Yorkville Residence',
    location: 'Toronto · ON',
    scope: 'ACM facade · custom black anodized',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Mississauga Logistics',
    location: 'Mississauga · ON',
    scope: 'Industrial metal cladding · 38,000 sq ft',
    image:
      'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'King West Mixed-Use',
    location: 'Toronto · ON',
    scope: 'ACM rainscreen · dual-tone champagne',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Vaughan Family Estate',
    location: 'Vaughan · ON',
    scope: 'Mixed material facade · ACM + standing seam',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
  },
]

export function FeaturedProjects() {
  return (
    <Section tone="cream" className="py-24 md:py-32" aria-labelledby="featured-title">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Buildings we’re
                <br />
                <span className="text-ink-400">proud to put our name on.</span>
              </>
            }
            description="Four hand-picked projects from across the GTA. Click any to start a similar scope of your own."
          />
          <LinkButton href="/portfolio" variant="ghost" className="hidden md:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FEATURED.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Link
                href="/portfolio"
                className="group relative block aspect-[4/3] overflow-hidden rounded-apple-lg bg-ink-100"
              >
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.scope}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="text-eyebrow uppercase text-white/70">{p.location}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{p.scope}</p>
                </div>
                <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all group-hover:bg-white group-hover:text-ink-900">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex md:hidden">
          <LinkButton href="/portfolio" variant="primary" className="w-full">
            View full portfolio <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </Container>
    </Section>
  )
}

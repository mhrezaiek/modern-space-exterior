import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'
import { LinkButton } from '@/components/ui/button'

type FeaturedItem = {
  title: string
  location: string
  scope: string
  year: string
  size?: string
  image: string
}

const FEATURED: FeaturedItem[] = [
  {
    title: 'Yorkville Residence',
    location: 'Toronto · ON',
    scope: 'ACM facade · custom black anodized',
    year: '2025',
    size: '4,800 sq ft',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=85',
  },
  {
    title: 'Mississauga Logistics',
    location: 'Mississauga · ON',
    scope: 'Industrial metal cladding',
    year: '2024',
    size: '38,000 sq ft',
    image:
      'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'King West Mixed-Use',
    location: 'Toronto · ON',
    scope: 'ACM rainscreen · dual-tone',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Vaughan Family Estate',
    location: 'Vaughan · ON',
    scope: 'ACM + standing seam',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=85',
  },
]

export function FeaturedProjects() {
  const hero = FEATURED[0]!
  const rest = FEATURED.slice(1)
  return (
    <Section
      tone="cream"
      className="py-24 md:py-32"
      aria-labelledby="featured-title"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Buildings we&rsquo;re
                <br />
                <span className="text-ink-400">proud to put our name on.</span>
              </>
            }
            description="Hand-picked projects from across the GTA. Click any to start a similar scope of your own."
          />
          <LinkButton href="/portfolio" variant="ghost" className="hidden md:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Hero project — spans 7 cols, taller aspect */}
          <Reveal delay={0} className="lg:col-span-7">
            <ProjectCard item={hero} aspect="aspect-[16/12] md:aspect-[16/13]" featured />
          </Reveal>

          {/* Right rail — 3 stacked cards */}
          <div className="grid gap-5 lg:col-span-5">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.06}>
                <ProjectCard item={p} aspect="aspect-[16/9]" />
              </Reveal>
            ))}
          </div>
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

function ProjectCard({
  item,
  aspect,
  featured = false,
}: {
  item: FeaturedItem
  aspect: string
  featured?: boolean
}) {
  return (
    <Link
      href="/portfolio"
      className={`group relative block w-full overflow-hidden rounded-apple-lg bg-ink-100 ${aspect}`}
    >
      <img
        src={item.image}
        alt={`${item.title} — ${item.scope}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
      />

      {/* Year + size pills */}
      <div className="pointer-events-none absolute left-5 top-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
          {item.year}
        </span>
        {item.size ? (
          <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            {item.size}
          </span>
        ) : null}
      </div>

      {/* Gradient veil for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/35 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-6 bottom-6 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
          {item.location}
        </p>
        <h3
          className={
            featured
              ? 'mt-2 text-3xl font-semibold tracking-tight md:text-5xl'
              : 'mt-2 text-2xl font-semibold tracking-tight md:text-3xl'
          }
        >
          {item.title}
        </h3>
        <p className={featured ? 'mt-2 text-base text-white/75' : 'mt-1 text-sm text-white/75'}>
          {item.scope}
        </p>
      </div>

      {/* Arrow chip */}
      <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-ink-900">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  )
}

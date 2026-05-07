import type { Metadata } from 'next'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Gallery } from '@/components/portfolio/Gallery'
import { FinalCta } from '@/components/home/FinalCta'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Portfolio · ACM Cladding & Facade Projects Across the GTA',
  description:
    'A curated portfolio of recent ACM cladding, metal facade, and exterior projects delivered by Modern Space Exterior across Toronto, Mississauga, Vaughan, Markham, Oakville and the wider GTA.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <Section tone="light" className="pb-12 pt-28 md:pt-36">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Buildings we’re proud to
                <br />
                <span className="text-ink-400">put our name on.</span>
              </>
            }
            description="A selection of ACM cladding, metal facades, and full exterior systems we’ve delivered across the Greater Toronto Area."
          />
        </Container>
      </Section>

      <Section tone="light" className="py-12 md:py-16">
        <Container>
          <Gallery />
        </Container>
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])}
        id="ld-breadcrumb-portfolio"
      />
    </>
  )
}

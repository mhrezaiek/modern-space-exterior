import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { Services } from '@/components/home/Services'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Process } from '@/components/home/Process'
import { Stats } from '@/components/home/Stats'
import { Testimonials } from '@/components/home/Testimonials'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Premium ACM Cladding & Exterior Facade Systems | Modern Space Exterior',
  description:
    'Toronto/GTA specialists in ACM panel installation, metal cladding, and full exterior facade systems for commercial, residential, and industrial buildings. 300+ projects, 4.9-star verified reviews, free estimates.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedProjects />
      <Process />
      <Stats />
      <Testimonials />
      <Faq />
      <FinalCta />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Home', path: '/' }])}
        id="ld-breadcrumb-home"
      />
    </>
  )
}

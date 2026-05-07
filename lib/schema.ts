import { business } from './business'
import { absoluteUrl } from './utils'

const dayMap: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

function openingHoursSpecification() {
  return Object.entries(business.hours)
    .filter(([, range]) => range !== 'Closed')
    .map(([day, range]) => {
      const [opens, closes] = range.split('-')
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[day],
        opens,
        closes,
      }
    })
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}#localbusiness`,
    name: business.legalName,
    alternateName: business.brandName,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    image: absoluteUrl('/og/og-default.jpg'),
    logo: absoluteUrl('/logo.svg'),
    description:
      'Modern Space Exterior specializes in ACM panel installation, metal cladding, and exterior facade systems for commercial, residential, and industrial buildings across the Greater Toronto Area.',
    foundingDate: `${business.founded}-01-01`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.serviceArea.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: Object.values(business.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: 128,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exterior Cladding & Facade Services',
      itemListElement: business.services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          serviceType: s.name,
          provider: { '@id': `${business.url}#localbusiness` },
        },
      })),
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${business.url}#organization`,
    name: business.legalName,
    url: business.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.svg'),
      width: 512,
      height: 512,
    },
    sameAs: Object.values(business.social),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: business.phone,
        contactType: 'sales',
        email: business.email,
        availableLanguage: ['English'],
        areaServed: 'CA',
      },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${business.url}#website`,
    name: business.brandName,
    url: business.url,
    publisher: { '@id': `${business.url}#organization` },
    inLanguage: 'en-CA',
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function serviceSchema(slug: string) {
  const s = business.services.find((x) => x.slug === slug)
  if (!s) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.name,
    description: s.description,
    provider: { '@id': `${business.url}#localbusiness` },
    areaServed: business.serviceArea,
    url: absoluteUrl(`/#service-${s.slug}`),
  }
}

import type { Metadata } from 'next'
import { business } from './business'
import { absoluteUrl } from './utils'

const defaultDescription =
  'Modern Space Exterior is a Toronto/GTA contractor specializing in ACM cladding, metal facades, and exterior systems for commercial, residential, and industrial buildings. 300+ completed projects, certified crews, free estimates.'

export const baseMetadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Modern Space Exterior — Premium ACM Cladding & Facade Systems | GTA',
    template: '%s · Modern Space Exterior',
  },
  description: defaultDescription,
  applicationName: business.brandName,
  authors: [{ name: business.legalName, url: business.url }],
  creator: business.legalName,
  publisher: business.legalName,
  category: 'Construction',
  keywords: [
    'ACM panel installation Toronto',
    'aluminum composite material cladding GTA',
    'metal cladding contractor Toronto',
    'exterior facade systems Ontario',
    'commercial siding Toronto',
    'residential metal cladding GTA',
    'architectural cladding installer',
    'rainscreen facade Toronto',
    'industrial cladding Ontario',
    'Modern Space Exterior',
  ],
  formatDetection: { email: false, telephone: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: { 'en-CA': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: business.url,
    siteName: business.brandName,
    title: 'Modern Space Exterior — Premium ACM Cladding & Facade Systems',
    description: defaultDescription,
    images: [
      {
        url: '/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Space Exterior — Premium exterior cladding systems for the GTA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Space Exterior — Premium Cladding & Facade Systems',
    description: defaultDescription,
    images: ['/og/og-default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: undefined, // set after GSC verification
  },
}

export function pageMetadata(opts: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = absoluteUrl(opts.path)
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      ...baseMetadata.openGraph,
      url,
      title: opts.title,
      description: opts.description,
      images: opts.image
        ? [{ url: opts.image, width: 1200, height: 630, alt: opts.title }]
        : baseMetadata.openGraph?.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: opts.title,
      description: opts.description,
      images: opts.image ? [opts.image] : baseMetadata.twitter?.images,
    },
  }
}

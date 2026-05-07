import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCtaBar } from '@/components/layout/MobileCtaBar'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import { JsonLd } from '@/components/seo/JsonLd'
import { baseMetadata } from '@/lib/seo'
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = baseMetadata

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <JsonLd id="ld-localbusiness" data={localBusinessSchema()} />
        <JsonLd id="ld-organization" data={organizationSchema()} />
        <JsonLd id="ld-website" data={websiteSchema()} />
      </head>
      <body className="bg-white text-ink-900 antialiased">
        <a
          href="#main"
          className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" className="pt-16 md:pt-[68px]">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  )
}

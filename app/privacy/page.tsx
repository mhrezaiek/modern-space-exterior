import type { Metadata } from 'next'
import { Container, Section } from '@/components/ui/section'
import { pageMetadata } from '@/lib/seo'
import { business } from '@/lib/business'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Modern Space Exterior collects, uses, and protects your information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <Section tone="light" className="pb-24 pt-28 md:pt-36">
      <Container size="narrow">
        <h1 className="text-display-md text-ink-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-500">
          Last updated {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg mt-10 max-w-none text-ink-700">
          <p>
            {business.legalName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;) respects your privacy. This page describes
            what we collect through{' '}
            <a href={business.url}>{new URL(business.url).hostname}</a> and how we use it.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit our quote/estimate form we collect your name, email, phone number, project
            address, and any details you provide about your project. We use this information solely to
            respond to your enquiry and provide our services.
          </p>
          <h2>Cookies & analytics</h2>
          <p>
            We may use Google Analytics or Plausible to understand site traffic. No personally
            identifiable information is shared with these providers.
          </p>
          <h2>Data sharing</h2>
          <p>
            We never sell your information. We share it only with members of our team needed to deliver
            an estimate or service, and with email-delivery providers (e.g. Resend) used to forward your
            enquiry.
          </p>
          <h2>Your rights</h2>
          <p>
            You can request access, correction, or deletion of your data at any time by emailing{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
          <h2>Contact</h2>
          <p>
            {business.legalName} · {business.phoneDisplay} ·{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
      </Container>
    </Section>
  )
}

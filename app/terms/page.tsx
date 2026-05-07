import type { Metadata } from 'next'
import { Container, Section } from '@/components/ui/section'
import { pageMetadata } from '@/lib/seo'
import { business } from '@/lib/business'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Use',
  description: 'Terms of use governing the Modern Space Exterior website.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <Section tone="light" className="pb-24 pt-28 md:pt-36">
      <Container size="narrow">
        <h1 className="text-display-md text-ink-900">Terms of Use</h1>
        <div className="prose prose-lg mt-10 max-w-none text-ink-700">
          <p>
            By using {new URL(business.url).hostname} you agree to use the site for lawful purposes only.
            Project pricing and timelines provided through the site are estimates and only become binding
            upon a signed written agreement.
          </p>
          <p>
            All content, photography and trademarks on this site are the property of {business.legalName}
            and may not be reproduced without written permission.
          </p>
          <p>
            For full terms and specific project agreements, contact{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  )
}

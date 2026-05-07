import Link from 'next/link'
import { Container, Section } from '@/components/ui/section'
import { LinkButton } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Section tone="light" className="py-32 md:py-40">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center">
          <span className="font-display text-display-2xl text-ink-900">404</span>
          <h1 className="mt-4 text-display-md text-ink-900">We couldn’t find that page.</h1>
          <p className="mt-3 text-lg text-ink-500">
            The link may be old, mistyped, or the page has moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/" variant="primary" size="lg">Back to home</LinkButton>
            <Link
              href="/portfolio"
              className="rounded-full px-6 py-3 text-sm font-medium text-ink-700 hover:text-ink-900"
            >
              See our work →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}

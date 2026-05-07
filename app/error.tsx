'use client'

import { useEffect } from 'react'
import { Container, Section } from '@/components/ui/section'
import { Button, LinkButton } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Unhandled error:', error)
  }, [error])

  return (
    <Section tone="light" className="py-32">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-display-md text-ink-900">Something went wrong.</h1>
          <p className="mt-3 max-w-prose text-lg text-ink-500">
            We’ve logged the error. Try again, or reach us directly.
          </p>
          <div className="mt-8 flex gap-3">
            <Button onClick={() => reset()}>Try again</Button>
            <LinkButton href="/contact" variant="outline">Contact us</LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}

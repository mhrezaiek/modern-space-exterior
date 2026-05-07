import { ArrowRight, Phone } from 'lucide-react'
import { Container, Section } from '@/components/ui/section'
import { LinkButton } from '@/components/ui/button'
import { business } from '@/lib/business'

export function FinalCta() {
  return (
    <Section tone="dark" className="relative isolate py-28 md:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(0,113,227,0.18),transparent_60%)]" />
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="text-eyebrow uppercase text-white/50">Start a project</span>
          <h2 className="mt-6 text-display-xl text-white">
            Ready when you are.
            <br />
            <span className="text-white/40">Free estimate inside 48 hours.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Tell us about your project — we’ll do a site walk, hand you a fixed-scope number,
            and a schedule you can actually plan around.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/contact" variant="invert" size="xl" className="group">
              Get a free estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LinkButton>
            <LinkButton
              href={`tel:${business.phone}`}
              variant="outline"
              size="xl"
              className="border-white/20 bg-white/5 text-white hover:border-white"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}

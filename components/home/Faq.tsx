'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus, ArrowRight, Phone } from 'lucide-react'
import { Container, Section } from '@/components/ui/section'
import { LinkButton } from '@/components/ui/button'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/schema'
import { business } from '@/lib/business'

export const FAQS = [
  {
    question: 'What is ACM cladding and why use it?',
    answer:
      'Aluminum Composite Material (ACM) is two thin aluminum skins bonded to a non-aluminum core. It delivers a true-flat, architect-grade finish with excellent weather resistance, light weight, and superior longevity vs. painted siding — making it the standard for premium commercial and residential facades across the GTA.',
  },
  {
    question: 'Do you serve only Toronto, or all of the GTA?',
    answer:
      'We serve the entire Greater Toronto Area: Toronto, Mississauga, Vaughan, Markham, Brampton, Richmond Hill, Oakville, Burlington, Pickering, Ajax, Whitby, Oshawa and surrounding municipalities. For larger commercial/industrial scopes we also travel further across Southern Ontario.',
  },
  {
    question: 'How long does a typical ACM facade install take?',
    answer:
      'For a single-family residence, expect 3–6 weeks from shop drawings to commissioning. Commercial buildings depend on elevation count and substructure complexity — most fall between 8 and 20 weeks. We provide a fixed schedule with milestone dates inside our written estimate.',
  },
  {
    question: 'Do you handle engineering and shop drawings?',
    answer:
      'Yes. We provide full design-assist: panel layout, substructure engineering, thermal break detailing, water management, and stamped drawings where required. Our scope replaces the architect’s envelope detailing burden — coordinated with your design team.',
  },
  {
    question: 'Are you insured and WSIB-cleared?',
    answer:
      'Always. We carry $5M commercial general liability, current WSIB clearance certificates, and complete COR-aligned safety documentation. We can issue any insurance/SDS package your GC, owner, or municipality requires before mobilization.',
  },
  {
    question: 'How much does ACM siding cost in Toronto?',
    answer:
      'Costs vary with system selection (rainscreen vs direct-fix), elevation count, substructure, and finish (standard PVDF vs anodized vs custom). For ballpark planning, current GTA market rates for installed ACM systems range $42–$95 per sq ft. We provide a fixed lump-sum after a 30-minute site walk.',
  },
]

export function Faq() {
  return (
    <Section tone="cream" className="py-24 md:py-32" aria-labelledby="faq-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail — heading + sticky CTA */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="text-eyebrow uppercase text-ink-500">
                Common questions
              </span>
              <h2
                id="faq-title"
                className="mt-5 text-display-md text-gradient md:text-display-lg"
              >
                Answers, <br />
                <span className="text-ink-400">before you ask.</span>
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500 md:text-lg">
                If your question isn&rsquo;t covered, we typically respond inside two business hours.
              </p>

              {/* CTA card */}
              <div className="mt-10 rounded-apple-lg border border-ink-100 bg-white p-6 shadow-apple-sm">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-700">
                  Still have a question?
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                  Call our team or send a quick scope and we&rsquo;ll have an
                  answer for you the same day.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <LinkButton href="/contact" variant="primary" className="group">
                    Ask the team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </LinkButton>
                  <LinkButton href={`tel:${business.phone}`} variant="ghost">
                    <Phone className="h-4 w-4" />
                    {business.phoneDisplay}
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>

          {/* Right rail — accordion */}
          <div className="lg:col-span-7">
            <Accordion.Root
              type="multiple"
              className="divide-y divide-ink-200 border-y border-ink-200"
            >
              {FAQS.map((f) => (
                <Accordion.Item
                  key={f.question}
                  value={f.question}
                  className="group/item transition-colors hover:bg-white/60"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink-900 transition-colors data-[state=open]:text-ink-900 md:py-7 md:text-xl">
                      {f.question}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-ink-900 group-data-[state=open]:bg-ink-900 group-data-[state=open]:text-white">
                        <Plus className="h-4 w-4" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-[16px] leading-relaxed text-ink-500 data-[state=closed]:animate-[accordion-up_0.25s_ease-out] data-[state=open]:animate-[accordion-down_0.3s_ease-out]">
                    <p className="pb-7 pr-12">{f.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </Container>
      <JsonLd data={faqSchema(FAQS)} />
    </Section>
  )
}

'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/schema'

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
      <Container size="narrow">
        <SectionHeading
          eyebrow="Common questions"
          title="Answers, before you ask."
          description="If your question isn’t covered, we typically respond inside two business hours."
        />

        <Accordion.Root type="multiple" className="mt-12 divide-y divide-ink-200 border-y border-ink-200">
          {FAQS.map((f) => (
            <Accordion.Item key={f.question} value={f.question}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink-900 transition-colors data-[state=open]:text-ink-900 md:text-xl">
                  {f.question}
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-[16px] leading-relaxed text-ink-500 data-[state=closed]:animate-[accordion-up_0.25s_ease-out] data-[state=open]:animate-[accordion-down_0.3s_ease-out]">
                <p className="pb-7 pr-10">{f.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
      <JsonLd data={faqSchema(FAQS)} />
    </Section>
  )
}

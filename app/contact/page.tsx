import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { LeadForm } from '@/components/contact/LeadForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { business } from '@/lib/business'

export const metadata: Metadata = pageMetadata({
  title: 'Contact · Free Estimate · Modern Space Exterior (GTA)',
  description:
    'Request a free fixed-scope estimate from Modern Space Exterior. ACM cladding, metal facades, and exterior systems across Toronto and the Greater Toronto Area. We typically reply within 2 business hours.',
  path: '/contact',
})

const HOURS_DISPLAY = [
  { label: 'Mon – Fri', value: '8:00 — 18:00' },
  { label: 'Saturday', value: '9:00 — 15:00' },
  { label: 'Sunday', value: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      <Section tone="light" className="pb-12 pt-28 md:pt-36">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Start a project"
            title={
              <>
                Tell us about your build.
                <br />
                <span className="text-ink-400">We’ll respond inside 2 hours.</span>
              </>
            }
            description="Share a few details and we’ll come back with next steps — usually a 30-minute site walk and a fixed-scope estimate within 48 hours."
          />
        </Container>
      </Section>

      <Section tone="light" className="pb-24 pt-6">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-6 rounded-apple-lg border border-ink-100 bg-ink-50/60 p-7 md:p-9">
                <ContactRow
                  Icon={Phone}
                  label="Phone"
                  value={business.phoneDisplay}
                  href={`tel:${business.phone}`}
                />
                <ContactRow
                  Icon={Mail}
                  label="Email"
                  value={business.email}
                  href={`mailto:${business.email}`}
                />
                <ContactRow
                  Icon={MapPin}
                  label="Service area"
                  value="Greater Toronto Area"
                  caption="Toronto · Mississauga · Vaughan · Markham · Brampton · Oakville · Burlington · Pickering · Ajax · Whitby · Oshawa"
                />
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-ink-100 bg-white text-ink-900">
                    <Clock className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-eyebrow uppercase text-ink-500">Hours</span>
                    <ul className="space-y-1 text-[15px] text-ink-700">
                      {HOURS_DISPLAY.map((h) => (
                        <li key={h.label} className="flex items-center justify-between gap-6">
                          <span>{h.label}</span>
                          <span className="font-medium text-ink-900">{h.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 overflow-hidden rounded-apple-lg border border-ink-100">
                <iframe
                  title="Modern Space Exterior service area map"
                  src={
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
                    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d369128.4!2d-79.6!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1700000000000'
                  }
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-apple-lg border border-ink-100 bg-white p-7 shadow-apple-sm md:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-ink-900">
                  Free estimate request
                </h3>
                <p className="mt-2 text-[15px] text-ink-500">
                  All fields validated, all data encrypted in transit. No spam.
                </p>
                <div className="mt-7">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
        id="ld-breadcrumb-contact"
      />
    </>
  )
}

function ContactRow({
  Icon,
  label,
  value,
  href,
  caption,
}: {
  Icon: typeof Phone
  label: string
  value: string
  href?: string
  caption?: string
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a className="flex flex-1 items-center gap-1 text-ink-900 hover:underline" href={href}>
        {children} <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
      </a>
    ) : (
      <span className="text-ink-900">{children}</span>
    )
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-ink-100 bg-white text-ink-900">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-eyebrow uppercase text-ink-500">{label}</span>
        <Wrapper>{value}</Wrapper>
        {caption ? <span className="text-[13px] leading-relaxed text-ink-400">{caption}</span> : null}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { Award, Compass, ShieldCheck, Sparkles } from 'lucide-react'
import { Container, Section, SectionHeading } from '@/components/ui/section'
import { Reveal } from '@/components/motion/Reveal'
import { IconTile } from '@/components/ui/icon-tile'
import { FinalCta } from '@/components/home/FinalCta'
import { Stats } from '@/components/home/Stats'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { business } from '@/lib/business'

export const metadata: Metadata = pageMetadata({
  title: 'About · Modern Space Exterior — GTA ACM Cladding Specialists',
  description:
    'Modern Space Exterior is a Toronto-based exterior cladding contractor. Founded in 2015, we deliver ACM panel installation, metal cladding, and exterior facade systems across the GTA.',
  path: '/about-us',
})

const VALUES = [
  {
    icon: Compass,
    title: 'Engineered, not assembled',
    body: 'Every facade starts with engineering — substructure, water management, thermal performance — before a single panel is cut.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability, end-to-end',
    body: 'One team owns the project from estimate to commissioning. No finger-pointing between subcontractors.',
  },
  {
    icon: Sparkles,
    title: 'Architect-grade finish',
    body: 'Crisp reveals. True-flat panels. Joints that read as straight in year ten as they did on day one.',
  },
  {
    icon: Award,
    title: 'Schedule integrity',
    body: 'We say what we’ll do, and we do it on the date we said we’d do it. That’s the entire reason GCs re-hire us.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Story / hero */}
      <Section tone="light" className="pb-16 pt-28 md:pt-36">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="About Modern Space Exterior"
            title={
              <>
                We build the
                <br />
                <span className="text-ink-400">outsides of buildings.</span>
              </>
            }
            description="Founded in 2015, Modern Space Exterior is a GTA-based contractor specializing in ACM cladding, metal facades, and exterior systems. We exist to raise the standard of finish on the buildings around us — one elevation at a time."
          />

          <Reveal>
            <div className="mt-14 grid gap-8 rounded-apple-lg border border-ink-100 bg-ink-50/60 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="eyebrow">Our story</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink-900 md:text-3xl">
                  From a single residential ACM job to 300+ envelopes across the GTA.
                </h3>
              </div>
              <div className="space-y-4 text-[16px] leading-relaxed text-ink-500 md:text-[17px]">
                <p>
                  We started in {business.founded} with a simple bet: that homeowners and developers
                  in the GTA would pay a premium for a cladding contractor who treated facade work
                  like architecture, not siding.
                </p>
                <p>
                  Eleven years later, we’re a {business.stats.teamSize}-person team that has shipped
                  more than {business.stats.projects} projects across Toronto and the surrounding
                  region — from single-family ACM installs in Forest Hill to 38,000 sq ft industrial
                  envelopes in Mississauga.
                </p>
                <p>
                  The bet held: when finish quality is the differentiator, people will hire the team
                  that takes finish quality seriously.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Stats />

      {/* Values */}
      <Section tone="cream" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title={<>Four standards. Non-negotiable.</>}
            description="The bar we hold internally — visible in the finish, the schedule, and the relationship after handover."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-apple-lg border border-ink-100 bg-white p-7">
                  <IconTile Icon={v.icon} />
                  <h3 className="mt-6 text-lg font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section tone="light" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title={<>The people behind every elevation.</>}
            description="Three principals. One accountable team. You’ll work directly with at least one of us on every project."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {business.team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="flex h-full flex-col overflow-hidden rounded-apple-lg border border-ink-100 bg-white">
                  <div className="aspect-[4/5] w-full bg-gradient-to-br from-ink-100 via-ink-50 to-ink-200">
                    {/* Replace with real headshots in /public/team/ */}
                    <div className="flex h-full w-full items-end justify-center p-6 text-ink-400">
                      <span className="font-display text-9xl font-bold tracking-tight">
                        {m.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-7">
                    <span className="text-eyebrow uppercase text-ink-500">{m.role}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-ink-900">{m.name}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about-us' },
        ])}
        id="ld-breadcrumb-about"
      />
    </>
  )
}

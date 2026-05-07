import { Marquee } from '@/components/motion/Marquee'

const TRUST_ITEMS = [
  'Toronto · Mississauga · Vaughan · Markham · Brampton · Oakville',
  'Aluminum Composite Material · Metal Cladding · Rainscreen Facades',
  'Commercial · Residential · Industrial',
  'BIM-coordinated · WSIB-cleared · Fully insured',
  'Architect-grade detailing · Engineered substructures · Tight tolerances',
  '$5M Commercial General Liability · COR-aligned safety',
]

/**
 * TrustBar — editorial "as seen in / as built for" strip.
 * Left rail carries the section label; right side runs the marquee.
 * Matches the architectural-magazine aesthetic of the rest of the home.
 */
export function TrustBar() {
  return (
    <section
      aria-label="Trusted across the GTA"
      className="relative border-y border-ink-100 bg-ink-50/70 py-7"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 md:px-8">
        {/* Section label */}
        <div className="hidden shrink-0 items-center gap-3 border-r border-ink-200 pr-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-700 md:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink-900" />
          Trusted across the GTA
        </div>

        {/* Marquee items */}
        <Marquee
          speed="slow"
          items={TRUST_ITEMS.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-6 text-[12.5px] font-medium uppercase tracking-[0.20em] text-ink-600"
            >
              {t}
              <span aria-hidden className="h-1 w-1 rounded-full bg-ink-300" />
            </span>
          ))}
        />
      </div>
    </section>
  )
}

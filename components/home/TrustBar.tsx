import { Marquee } from '@/components/motion/Marquee'

const TRUST_ITEMS = [
  'Toronto · Mississauga · Vaughan · Markham · Brampton · Oakville',
  'Aluminum Composite Material · Metal Cladding · Rainscreen Facades',
  'Commercial · Residential · Industrial',
  'BIM-coordinated · WSIB-cleared · Fully insured',
  'Architect-grade detailing · Engineered substructures · Tight tolerances',
]

export function TrustBar() {
  return (
    <section aria-label="Trust bar" className="border-y border-ink-100 bg-ink-50/60 py-6">
      <Marquee
        speed="slow"
        items={TRUST_ITEMS.map((t, i) => (
          <span key={i} className="text-[13px] font-medium uppercase tracking-[0.18em]">
            {t}
          </span>
        ))}
      />
    </section>
  )
}

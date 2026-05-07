import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react'
import { Logo } from './Logo'
import { business } from '@/lib/business'

export function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Logo invert />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
              Premium Aluminum Composite Material cladding, metal facades, and exterior
              systems — engineered, fabricated, and installed across the Greater Toronto
              Area since {business.founded}.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={business.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={business.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <h3 className="text-eyebrow uppercase text-white/40">Site</h3>
            <ul className="mt-5 flex flex-col gap-3 text-[15px]">
              <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link href="/portfolio" className="text-white/80 hover:text-white">Portfolio</Link></li>
              <li><Link href="/about-us" className="text-white/80 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-eyebrow uppercase text-white/40">Services</h3>
            <ul className="mt-5 flex flex-col gap-3 text-[15px]">
              {business.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/#service-${s.slug}`} className="text-white/80 hover:text-white">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-eyebrow uppercase text-white/40">Contact</h3>
            <ul className="mt-5 flex flex-col gap-3 text-[15px]">
              <li>
                <a className="inline-flex items-start gap-2 text-white/80 hover:text-white" href={`tel:${business.phone}`}>
                  <Phone className="mt-0.5 h-4 w-4" /> {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="inline-flex items-start gap-2 text-white/80 hover:text-white" href={`mailto:${business.email}`}>
                  <Mail className="mt-0.5 h-4 w-4" /> {business.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4" /> Serving the GTA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span className="h-3 w-px bg-white/10" />
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span className="h-3 w-px bg-white/10" />
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

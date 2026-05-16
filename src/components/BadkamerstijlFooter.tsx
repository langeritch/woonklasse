'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Stijlen', path: '/stijlen' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Diensten', path: '/diensten' },
  { title: 'Prijzen', path: '/prijzen' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/adviesgesprek' },
];

// Mounted once from the Badkamerstijl layout, so it covers every
// /badkamerstijl/* route (and every clean path that rewrites into it on
// badkamerstijl.nl). Several Badkamerstijl pages already end with their own
// bespoke footer (home, bedankt, blog, blog article, city, prijzen) - this
// shared footer only renders on the pages that lack one, matched by the last
// path segment so it works for both the clean live URLs (/stijlen) and the
// internal routes (/badkamerstijl/stijlen).
const PAGES_WITHOUT_OWN_FOOTER = new Set([
  'stijlen',
  'portfolio',
  'diensten',
  'kosten',
  'adviesgesprek',
]);

export default function BadkamerstijlFooter() {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop() ?? '';
  if (!PAGES_WITHOUT_OWN_FOOTER.has(lastSegment)) {
    return null;
  }

  return (
    <footer className="bg-bsv2-charcoal text-bsv2-cream mt-auto border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-cormorant text-2xl font-light tracking-wide mb-4">
              Badkamerstijl
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Luxe badkamers op maat, van ontwerp in 3D tot oplevering door
              eigen vakmensen.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={CONTACT_BADKAMERSTIJL.telefoonLink}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_BADKAMERSTIJL.telefoon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_BADKAMERSTIJL.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_BADKAMERSTIJL.email}
                </a>
              </li>
              <li>{CONTACT_BADKAMERSTIJL.adres.straat}</li>
              <li>
                {CONTACT_BADKAMERSTIJL.adres.postcode}{' '}
                {CONTACT_BADKAMERSTIJL.adres.plaats}
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/35 mb-2">
                Zusterbedrijf
              </p>
              <Link
                href="/woonklasse"
                className="text-xs tracking-[0.2em] uppercase text-bsv2-teal hover:opacity-70 transition-opacity"
              >
                Woonklasse verbouwingen &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Badkamerstijl. Alle rechten voorbehouden.
          </p>
          <p className="text-white/25 text-xs">
            KVK {CONTACT_BADKAMERSTIJL.kvk} | BTW {CONTACT_BADKAMERSTIJL.btw}
          </p>
          <div className="flex gap-6 text-white/25 text-xs">
            <Link href="/privacybeleid" className="hover:text-white/50 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-white/50 transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

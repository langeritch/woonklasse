'use client';

import Link from 'next/link';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';
import BadkamerstijlLogo from '@/components/BadkamerstijlLogo';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Stijlen', path: '/stijlen' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Diensten', path: '/diensten' },
  { title: 'Prijzen', path: '/prijzen' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/adviesgesprek' },
];

// Mounted once from the Badkamerstijl layout, so it is the single shared
// footer for every Badkamerstijl route (including the clean paths that
// rewrite into /badkamerstijl/* on badkamerstijl.nl). The per-page bespoke
// inline footers were removed in favour of this one for visual consistency.
export default function BadkamerstijlFooter() {
  return (
    <footer className="bg-bs26-ink text-bs26-cream mt-auto border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <BadkamerstijlLogo className="h-12 text-bs26-cream mb-5" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Luxe badkamers op maat, van ontwerp in 3D tot oplevering door
              eigen vakmensen.
            </p>
            <a
              href="https://woonklasse.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 text-xs tracking-[0.15em] uppercase text-white/45 hover:text-white transition-colors"
            >
              Zusterbedrijf: Woonklasse
              <span aria-hidden="true">&rarr;</span>
            </a>
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

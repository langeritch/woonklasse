'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT } from '@/data/contact';

const BADKAMER_CLEAN_PATHS = new Set(['/stijlen', '/portfolio', '/diensten', '/adviesgesprek', '/prijzen']);

export default function Footer() {
  const pathname = usePathname();
  if (
    pathname === '/' ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/badkamerstijl') ||
    pathname.startsWith('/blog') ||
    BADKAMER_CLEAN_PATHS.has(pathname)
  ) {
    return null;
  }

  const links = [
    { title: 'Home', path: '/woonklasse' },
    { title: 'Diensten', path: '/woonklasse/diensten' },
    { title: 'Prijzen', path: '/woonklasse/prijzen' },
    { title: 'Projecten', path: '/woonklasse/projecten' },
    { title: 'Over Ons', path: '/woonklasse/over-ons' },
    { title: 'Contact', path: '/woonklasse/offerte' },
  ];

  // ==========================================
  // WOONKLASSE FOOTER — Dark, cinematic, giant typography
  // ==========================================
  return (
    <footer className="bg-woon-dark text-white mt-auto relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Woonklasse</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Jouw droomwoning begint hier. Kwaliteit, vakmanschap en persoonlijke aandacht in elk project.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6">Navigatie</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href={CONTACT.telefoonLink} className="hover:text-white transition-colors">{CONTACT.telefoon}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a></li>
              <li>{CONTACT.adres.straat}</li>
              <li>{CONTACT.adres.postcode} {CONTACT.adres.plaats}</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/35 mb-2">Zusterbedrijf</p>
              <Link href="/badkamerstijl" className="text-xs tracking-[0.2em] uppercase text-woon-accent hover:opacity-70 transition-opacity">
                Badkamerstijl &mdash; luxe badkamers &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} Woonklasse. Alle rechten voorbehouden.</p>
          <p className="text-white/20 text-xs">KVK {CONTACT.kvk} | BTW {CONTACT.btw}</p>
          <div className="flex gap-6 text-white/20 text-xs">
            <Link href="/privacybeleid" className="hover:text-white/40 transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-white/40 transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

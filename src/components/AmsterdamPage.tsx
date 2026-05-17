import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { WoonklasseCity } from '@/data/woonklasse-cities';

// Drie interieurfoto's naast elkaar. Per stad later te overschrijven;
// nu de gedeelde galerijfoto's hergebruikt.
const GALLERY = [
  'penthouse-amsterdam-1.jpg',
  'apartment-amsterdam-2.jpg',
  'canal-residence-1.jpg',
];

function CtaButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
    >
      Plan een vrijblijvend gesprek
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

export default function AmsterdamPage({
  city,
  ctaHref = '/woonklasse/offerte',
}: {
  city: WoonklasseCity;
  ctaHref?: string;
}) {
  const heroImage = city.heroImage ?? '/woonklasse/villa-bergen-1.jpg';
  const lead = city.intro ?? city.description;

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden bg-woon-dark">
        <Image
          src={heroImage}
          alt={`Aannemer voor verbouwing en renovatie in ${city.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium">
            <span className="w-8 h-px bg-woon-accent/60" />
            {city.province}
          </span>
          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[1.02] tracking-tight text-white">
            Aannemer in {city.name}
          </h1>
        </div>
      </section>

      {/* ═══════════════ TEKST + CTA ═══════════════ */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-16 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl lg:text-[2.4rem] font-light leading-[1.45] text-woon-dark/90">
            {lead}
          </p>
          <div className="mt-12">
            <CtaButton href={ctaHref} />
          </div>
        </div>
      </section>

      {/* ═══════════════ 3 FOTO'S NAAST ELKAAR ═══════════════ */}
      <section className="py-6 md:py-8 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((file) => (
              <div
                key={file}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-woon-cream"
              >
                <Image
                  src={`/woonklasse/${file}`}
                  alt={`Interieur in ${city.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STAD-SPECIFIEKE TEKST + H2 (SEO) ═══════════════ */}
      <section className="pt-20 md:pt-28 pb-4 md:pb-6 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[820px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-woon-secondary mb-6 font-medium">
            Woonklasse in {city.province}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-woon-dark mb-8">
            Verbouwen in {city.name}
          </h2>
          {city.intro && (
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed">
              {city.description}
            </p>
          )}
          <p className="mt-6 text-woon-secondary text-base md:text-lg leading-relaxed">
            Veel gevraagd in {city.name}: {city.context}. Actief in{' '}
            {city.areas.join(', ')} en de omliggende wijken.
          </p>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="pt-14 md:pt-16 pb-24 md:pb-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[820px] mx-auto text-center">
          <CtaButton href={ctaHref} />
        </div>
      </section>
    </main>
  );
}

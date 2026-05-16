import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Bestaande interieurfoto's uit de galerij, hergebruikt, geen nieuwe foto's.
const GALLERY = [
  'penthouse-amsterdam-1.jpg',
  'apartment-amsterdam-2.jpg',
  'canal-residence-1.jpg',
  'penthouse-amsterdam-3.jpg',
  'apartment-amsterdam-4.jpg',
  'canal-residence-4.jpg',
];

export default function AmsterdamPage({
  ctaHref = '/woonklasse/offerte',
}: {
  ctaHref?: string;
}) {
  return (
    <main className="min-h-screen bg-woon-light text-woon-dark overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden bg-woon-dark">
        <Image
          src="/woonklasse/amsterdam-hero.avif"
          alt="Amsterdam"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium">
            <span className="w-8 h-px bg-woon-accent/60" />
            Noord-Holland
          </span>
          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[1.02] tracking-tight text-white">
            Amsterdam
          </h1>
        </div>
      </section>

      {/* ═══════════════ GALERIJ ═══════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((file) => (
              <div
                key={file}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-woon-cream"
              >
                <Image
                  src={`/woonklasse/${file}`}
                  alt="Interieur in Amsterdam"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COPY ═══════════════ */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl lg:text-[2.4rem] font-light leading-[1.45] text-woon-dark/90">
            Veel appartementen hier, weinig ruimte om fouten te maken. Met de juiste styling en
            renovatie wordt elke vierkante meter beter. Wij kennen Amsterdam en weten welke details
            het verschil maken. Laten we van jouw plek iets moois maken.
          </p>
          <Link
            href={ctaHref}
            className="group mt-12 inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
          >
            Plan een vrijblijvend gesprek
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}

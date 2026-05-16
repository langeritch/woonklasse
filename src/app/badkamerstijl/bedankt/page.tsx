import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, Check } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';

const SITE_URL = 'https://badkamerstijl.nl';
const PAGE_URL = `${SITE_URL}/bedankt`;

const TITLE = 'Bedankt voor je aanvraag | Badkamerstijl';
const DESCRIPTION =
  'Bedankt voor je adviesaanvraag bij Badkamerstijl. Wij nemen binnen 2 werkdagen telefonisch contact met je op om jouw droombadkamer te bespreken.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Badkamerstijl',
  },
};

export default function BedanktPage() {
  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden min-h-screen">
      <BadkamerstijlFloatingNav />

      {/* Hero / Confirmation */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            {/* LEFT: Confirmation copy */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-12 rounded-full bg-bsv2-teal/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-bsv2-teal" strokeWidth={2.5} />
                </span>
                <span className="text-bsv2-grey text-[11px] tracking-[0.2em] uppercase">
                  Aanvraag ontvangen
                </span>
              </div>

              <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.015em] mb-8">
                Bedankt voor je
                <br />
                <span className="italic">aanvraag</span>
              </h1>

              <p className="text-bsv2-grey text-base md:text-lg leading-relaxed max-w-xl mb-8">
                We hebben je adviesaanvraag goed ontvangen. Een van onze adviseurs neemt
                <strong className="text-bsv2-charcoal"> binnen 2 werkdagen</strong> telefonisch
                contact met je op om jouw wensen te bespreken en een afspraak in te plannen.
              </p>

              <div className="bg-white border border-bsv2-charcoal/10 rounded-2xl p-6 md:p-8 mb-10">
                <span className="text-bsv2-grey text-[11px] tracking-[0.15em] uppercase mb-4 block">
                  Wat gebeurt er nu?
                </span>
                <ol className="space-y-4 text-sm md:text-base text-bsv2-charcoal/80 leading-relaxed">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bsv2-charcoal text-white text-xs flex items-center justify-center font-medium">1</span>
                    <span>Je ontvangt direct een bevestigingsmail (kijk eventueel in je spamfolder).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bsv2-charcoal text-white text-xs flex items-center justify-center font-medium">2</span>
                    <span>Onze adviseur belt je binnen 2 werkdagen op een tijdstip dat jou uitkomt.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bsv2-charcoal text-white text-xs flex items-center justify-center font-medium">3</span>
                    <span>We plannen een gratis adviesgesprek bij jou thuis of in onze showroom.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bsv2-charcoal text-white text-xs flex items-center justify-center font-medium">4</span>
                    <span>Binnen 5 werkdagen na de opname ontvang je een gespecificeerde offerte met vaste prijs.</span>
                  </li>
                </ol>
              </div>

              {/* Direct contact */}
              <div className="border-t border-bsv2-charcoal/10 pt-8">
                <span className="text-bsv2-grey text-[11px] tracking-[0.15em] uppercase mb-4 block">
                  Liever direct contact?
                </span>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a
                    href="tel:+31302072388"
                    className="inline-flex items-center gap-2 text-bsv2-charcoal hover:text-bsv2-teal transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +31 30 207 23 88
                  </a>
                  <a
                    href="mailto:info@badkamerstijl.nl"
                    className="inline-flex items-center gap-2 text-bsv2-charcoal hover:text-bsv2-teal transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@badkamerstijl.nl
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="hidden lg:block">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="/badkamerstijl/2200xxsxm(27).jpg"
                  alt="Badkamerstijl droombadkamer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue exploring */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Verder kijken)
          </span>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-12 max-w-2xl">
            Terwijl je wacht, laat
            <br />
            <span className="italic">je inspireren</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Link
              href="/portfolio"
              className="group block p-7 md:p-8 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Portfolio
              </span>
              <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-tight mb-3">
                Recente projecten
              </h3>
              <p className="text-sm text-bsv2-grey group-hover:text-white/70 leading-relaxed">
                Bekijk gerealiseerde luxe badkamers in heel Nederland, van moderne minimalistische ontwerpen tot warme, klassieke retraites.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Bekijken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/stijlen"
              className="group block p-7 md:p-8 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Stijlen
              </span>
              <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-tight mb-3">
                Welke stijl past bij jou?
              </h3>
              <p className="text-sm text-bsv2-grey group-hover:text-white/70 leading-relaxed">
                Modern, klassiek, warm natuurlijk of boutique hotel. Ontdek de zes hoofdstijlen die wij realiseren.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Bekijken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/blog"
              className="group block p-7 md:p-8 bg-bsv2-cream rounded-2xl border border-bsv2-charcoal/[0.08] hover:bg-bsv2-charcoal hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-bsv2-grey group-hover:text-white/50 mb-3 block">
                Blog
              </span>
              <h3 className="font-cormorant text-2xl md:text-[1.75rem] font-light leading-tight mb-3">
                Tips & inspiratie
              </h3>
              <p className="text-sm text-bsv2-grey group-hover:text-white/70 leading-relaxed">
                Trends, kosten, materiaalkeuze en praktische tips. Lees onze gidsen over badkamerrenovatie.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Bekijken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

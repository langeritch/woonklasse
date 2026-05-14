import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, Check } from 'lucide-react';
import { CONTACT } from '@/data/contact';

const SITE_URL = 'https://woonklasse.nl';
const PAGE_URL = `${SITE_URL}/bedankt`;

const TITLE = 'Bedankt voor je aanvraag | Woonklasse';
const DESCRIPTION =
  'Bedankt voor je aanvraag bij Woonklasse. Wij nemen binnen 2 werkdagen telefonisch contact met je op om je verbouwing te bespreken.';

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
    siteName: 'Woonklasse',
  },
};

export default function BedanktPage() {
  return (
    <main className="min-h-screen bg-woon-light text-woon-primary overflow-x-hidden">
      {/* Hero / Confirmation */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            {/* LEFT: Confirmation copy */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-12 rounded-full bg-woon-accent/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-woon-accent" strokeWidth={2.5} />
                </span>
                <span className="text-woon-secondary text-[11px] tracking-[0.2em] uppercase">
                  Aanvraag ontvangen
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.015em] mb-8">
                Bedankt voor uw
                <br />
                <span className="italic font-light">aanvraag</span>
              </h1>

              <p className="text-woon-secondary text-base md:text-lg leading-relaxed max-w-xl mb-8">
                We hebben uw aanvraag goed ontvangen. Een van onze projectleiders neemt
                <strong className="text-woon-primary"> binnen 2 werkdagen</strong> telefonisch
                contact met u op om uw wensen te bespreken en een vrijblijvende opname in te plannen.
              </p>

              <div className="bg-white border border-woon-primary/10 rounded-2xl p-6 md:p-8 mb-10">
                <span className="text-woon-secondary text-[11px] tracking-[0.15em] uppercase mb-4 block">
                  Wat gebeurt er nu?
                </span>
                <ol className="space-y-4 text-sm md:text-base text-woon-primary/85 leading-relaxed">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-woon-primary text-woon-light text-xs flex items-center justify-center font-medium">1</span>
                    <span>U ontvangt direct een bevestigingsmail (kijk eventueel in uw spamfolder).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-woon-primary text-woon-light text-xs flex items-center justify-center font-medium">2</span>
                    <span>Onze projectleider belt u binnen 2 werkdagen op een tijdstip dat u uitkomt.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-woon-primary text-woon-light text-xs flex items-center justify-center font-medium">3</span>
                    <span>We plannen een gratis opname op locatie en komen langs om uw woning te bekijken.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-woon-primary text-woon-light text-xs flex items-center justify-center font-medium">4</span>
                    <span>Binnen 5 werkdagen na de opname ontvangt u een gespecificeerde offerte met vaste prijs.</span>
                  </li>
                </ol>
              </div>

              {/* Direct contact */}
              <div className="border-t border-woon-primary/10 pt-8">
                <span className="text-woon-secondary text-[11px] tracking-[0.15em] uppercase mb-4 block">
                  Liever direct contact?
                </span>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a
                    href={CONTACT.telefoonLink}
                    className="inline-flex items-center gap-2 text-woon-primary hover:text-woon-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {CONTACT.telefoon}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 text-woon-primary hover:text-woon-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="hidden lg:block">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="/woonklasse/villa-bergen-1.jpg"
                  alt="Woonklasse, gerealiseerd project"
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
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-woon-cream border-t border-woon-primary/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.15em] uppercase mb-6 block">
            Verder kijken
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-12 max-w-2xl">
            Terwijl u wacht, laat
            <br />
            <span className="italic font-light">u inspireren</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Link
              href="/woonklasse/projecten"
              className="group block p-7 md:p-8 bg-white rounded-2xl border border-woon-primary/[0.08] hover:bg-woon-primary hover:text-woon-light transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary group-hover:text-woon-light/60 mb-3 block">
                Projecten
              </span>
              <h3 className="font-heading text-2xl md:text-[1.75rem] font-bold leading-tight mb-3">
                Recente projecten
              </h3>
              <p className="text-sm text-woon-secondary group-hover:text-woon-light/70 leading-relaxed">
                Bekijk gerealiseerde verbouwingen, aanbouwen en complete renovaties door heel Nederland.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Bekijken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/woonklasse/diensten"
              className="group block p-7 md:p-8 bg-white rounded-2xl border border-woon-primary/[0.08] hover:bg-woon-primary hover:text-woon-light transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary group-hover:text-woon-light/60 mb-3 block">
                Diensten
              </span>
              <h3 className="font-heading text-2xl md:text-[1.75rem] font-bold leading-tight mb-3">
                Wat doen we precies?
              </h3>
              <p className="text-sm text-woon-secondary group-hover:text-woon-light/70 leading-relaxed">
                Van complete verbouwing tot dakkapel, aanbouw, keuken en badkamer, alles uit één hand.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Bekijken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/blog"
              className="group block p-7 md:p-8 bg-white rounded-2xl border border-woon-primary/[0.08] hover:bg-woon-primary hover:text-woon-light transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary group-hover:text-woon-light/60 mb-3 block">
                Blog
              </span>
              <h3 className="font-heading text-2xl md:text-[1.75rem] font-bold leading-tight mb-3">
                Tips &amp; gidsen
              </h3>
              <p className="text-sm text-woon-secondary group-hover:text-woon-light/70 leading-relaxed">
                Praktische gidsen over kosten, vergunningen, aannemers en duurzaam verbouwen.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Bekijken <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-woon-light border-t border-woon-primary/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 md:grid-cols-4 lg:grid-cols-7 text-sm text-woon-secondary mb-10">
            <Link href="/" className="hover:text-woon-primary transition-colors">Home</Link>
            <Link href="/woonklasse" className="hover:text-woon-primary transition-colors">Woonklasse</Link>
            <Link href="/woonklasse/diensten" className="hover:text-woon-primary transition-colors">Diensten</Link>
            <Link href="/woonklasse/projecten" className="hover:text-woon-primary transition-colors">Projecten</Link>
            <Link href="/blog" className="hover:text-woon-primary transition-colors">Blog</Link>
            <Link href="/woonklasse/over-ons" className="hover:text-woon-primary transition-colors">Over ons</Link>
            <Link href="/woonklasse/offerte" className="hover:text-woon-primary transition-colors">Offerte</Link>
          </div>
          <div className="pt-8 border-t border-woon-primary/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-woon-secondary">
            <p>&copy; 2026 Woonklasse. Alle rechten voorbehouden. KvK {CONTACT.kvk}.</p>
            <div className="flex gap-6">
              <Link href="/privacybeleid" className="hover:text-woon-primary transition-colors">Privacybeleid</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-woon-primary transition-colors">Voorwaarden</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

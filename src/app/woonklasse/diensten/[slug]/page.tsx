import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';
import { CONTACT } from '@/data/contact';
import { WOONKLASSE_CITIES } from '@/data/woonklasse-cities';
import { WOONKLASSE_SERVICES, getServiceBySlug } from '@/data/woonklasse-services';

export const dynamicParams = false;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const cities = WOONKLASSE_CITIES.filter((c) => service.relatedCities.includes(c.slug));
  const otherServices = WOONKLASSE_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark overflow-x-hidden">
      {/* Breadcrumb */}
      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-woon-accent transition-colors">Home</Link>
        <span className="text-white/30">/</span>
        <Link href="/woonklasse/diensten" className="hover:text-woon-accent transition-colors">Diensten</Link>
        <span className="text-white/30">/</span>
        <span className="text-white">{service.name}</span>
      </nav>

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden bg-woon-dark">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.name} — Woonklasse specialist`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/85" />

        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium">
            <span className="w-8 h-px bg-woon-accent/60" />
            {service.heroEyebrow}
          </span>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[1.02] tracking-tight text-white max-w-5xl">
            {service.heroTitle}<br />
            <span className="italic text-woon-accent">{service.heroTitleAccent}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed font-light">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-white/70 text-sm">
            <div>
              <span className="block text-[11px] tracking-[0.25em] uppercase text-woon-accent/70 mb-1">Prijsindicatie</span>
              <span className="font-display text-lg italic text-white">{service.averagePrice}</span>
            </div>
            <div>
              <span className="block text-[11px] tracking-[0.25em] uppercase text-woon-accent/70 mb-1">Doorlooptijd</span>
              <span className="font-display text-lg italic text-white">{service.averageDuration}</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/woonklasse/offerte"
              className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
            >
              Vraag offerte aan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={CONTACT.telefoonLink}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.telefoon}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Over deze dienst
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15]">
              {service.name}
              <br />
              <span className="not-italic font-medium text-woon-accent">van A tot Z</span>
            </h2>
          </div>
          <p className="font-display text-xl md:text-2xl lg:text-[1.65rem] font-light leading-[1.5] text-woon-dark/85">
            {service.longIntro}
          </p>
        </div>
      </section>

      {/* PRIJZEN / TIERS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Prijsindicatie
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-6 max-w-3xl">
            Wat kost {service.shortName.toLowerCase()}
            <br />
            <span className="not-italic font-medium text-woon-accent">in 2026?</span>
          </h2>
          <p className="text-woon-secondary text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
            Drie indicatieve niveaus. Tijdens een gratis opname op locatie maken wij een vaste prijsopgave op maat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.tiers.map((tier) => (
              <div
                key={tier.label}
                className={`p-7 md:p-8 rounded-2xl flex flex-col ${
                  tier.featured
                    ? 'bg-woon-dark text-white shadow-xl shadow-woon-dark/15'
                    : 'bg-white text-woon-dark border border-woon-dark/[0.06]'
                }`}
              >
                <span
                  className={`text-[11px] tracking-[0.25em] uppercase mb-4 font-medium ${
                    tier.featured ? 'text-woon-accent' : 'text-woon-secondary'
                  }`}
                >
                  {tier.label}
                </span>
                <p className="font-display text-2xl md:text-3xl font-light italic mb-4 leading-tight">
                  {tier.range}
                </p>
                <p className={`text-sm leading-relaxed mb-7 ${tier.featured ? 'text-white/70' : 'text-woon-secondary'}`}>
                  {tier.desc}
                </p>
                <ul className="space-y-2.5 mt-auto">
                  {tier.highlights.map((h) => (
                    <li
                      key={h}
                      className={`flex items-start gap-3 text-sm ${tier.featured ? 'text-white/85' : 'text-woon-dark/85'}`}
                    >
                      <span
                        className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          tier.featured ? 'bg-woon-accent' : 'bg-woon-accent/70'
                        }`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAT IS INBEGREPEN */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Inbegrepen
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-8">
              Alles uit
              <br />
              <span className="not-italic font-medium text-woon-accent">één hand</span>
            </h2>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed max-w-md">
              Van eerste opname tot oplevering — wat hieronder staat zit standaard in onze offerte. Geen meerwerk-verrassingen.
            </p>
          </div>
          <ul className="space-y-4">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-woon-dark/[0.08] pb-4">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-woon-accent/15 text-woon-accent flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-woon-dark/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCES */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-woon-dark">
        <div className="absolute inset-0">
          <Image src="/woonklasse/canal-residence-3.jpg" alt="" fill className="object-cover opacity-25" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-woon-dark via-woon-dark/95 to-woon-dark/95 z-10" />

        <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <span className="text-woon-accent text-[11px] tracking-[0.3em] uppercase mb-6 block font-medium">
            Werkwijze
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-white mb-16 max-w-3xl leading-[1.1]">
            Van intake tot
            <br />
            <span className="not-italic font-medium text-woon-accent">oplevering</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {service.process.map((step) => (
              <div key={step.step} className="border-t border-woon-accent/30 pt-6">
                <span className="text-woon-accent text-sm font-heading font-bold tracking-[0.2em]">{step.step}</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-3 mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Veelgestelde vragen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-14">
            Vragen over
            <br />
            <span className="not-italic font-medium text-woon-accent">{service.shortName.toLowerCase()}</span>
          </h2>

          <div className="divide-y divide-woon-dark/10 border-y border-woon-dark/10">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="group py-7">
                <summary className="cursor-pointer flex items-start justify-between gap-6 list-none">
                  <span className="font-display text-xl md:text-[1.4rem] font-light leading-snug pr-6 group-hover:text-woon-accent transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-1 w-9 h-9 rounded-full border border-woon-dark/20 flex items-center justify-center group-open:bg-woon-dark group-open:text-woon-accent group-open:border-woon-dark transition-colors">
                    <span className="text-lg leading-none group-open:hidden">+</span>
                    <span className="text-lg leading-none hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-4 text-woon-secondary text-base leading-relaxed max-w-3xl">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* STEDEN */}
      {cities.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-t border-woon-dark/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              {service.shortName} per stad
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] mb-12 max-w-3xl">
              {service.shortName} specialist in
              <br />
              <span className="not-italic font-medium text-woon-accent">heel Nederland</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/woonklasse/${c.slug}`}
                  className="group flex items-center justify-between gap-3 px-5 py-4 bg-woon-cream rounded-xl hover:bg-woon-dark hover:text-white transition-colors"
                >
                  <span className="font-medium text-sm">{c.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-woon-accent" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light border-t border-woon-dark/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
                Bekijk ook
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] max-w-3xl">
                Andere
                <br />
                <span className="not-italic font-medium text-woon-accent">diensten</span>
              </h2>
            </div>
            <Link
              href="/woonklasse/diensten"
              className="inline-flex items-center gap-2 text-woon-dark text-sm font-medium hover:text-woon-accent transition-colors whitespace-nowrap"
            >
              Alle diensten <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/woonklasse/diensten/${s.slug}`} className="group">
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-5 bg-woon-cream">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 group-hover:text-woon-accent transition-colors">
                  {s.name}
                </h3>
                <p className="text-woon-secondary text-sm leading-relaxed">{s.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-dark text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-woon-accent text-[11px] tracking-[0.3em] uppercase mb-6 block font-medium">
            Plan een opname
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-white leading-[1.1] mb-8">
            Klaar voor uw
            <br />
            <span className="not-italic font-medium text-woon-accent">{service.shortName.toLowerCase()} project?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Vraag een vrijblijvende opname aan. Binnen 10 werkdagen ontvangt u een complete offerte met vaste prijs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/woonklasse/offerte"
              className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
            >
              Offerte aanvragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={CONTACT.telefoonLink}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.telefoon}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

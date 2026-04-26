'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';

const faqs = [
  {
    question: 'Hoe lang duurt een gemiddelde badkamerrenovatie?',
    answer: 'Een volledige badkamerrenovatie duurt gemiddeld 3 tot 5 weken, afhankelijk van de omvang en complexiteit van het project. Wij plannen het hele traject zorgvuldig zodat je precies weet wanneer alles klaar is.',
  },
  {
    question: 'Kan ik vooraf materialen en kleuren bekijken?',
    answer: 'Absoluut. Tijdens het adviesgesprek nemen wij materiaalstalen, kleurkaarten en productcatalogi mee zodat je alles kunt zien en voelen voordat je een keuze maakt.',
  },
  {
    question: 'Wat kost een adviesgesprek?',
    answer: 'Het eerste adviesgesprek is altijd vrijblijvend en gratis. We bespreken jouw wensen, mogelijkheden en het verwachte budget zodat je een helder beeld krijgt.',
  },
  {
    question: 'Geven jullie garantie op het werk?',
    answer: 'Ja, op al onze renovaties geven wij garantie. We staan achter de kwaliteit van ons werk en lossen eventuele aandachtspunten na oplevering altijd snel en netjes op.',
  },
  {
    question: 'Leveren jullie ook het sanitair en de materialen?',
    answer: 'Ja, wij leveren alles — van tegels en sanitair tot kranen en accessoires. Via onze partners krijg je toegang tot de mooiste merken tegen concurrerende prijzen.',
  },
];

export default function AdviesgesprekPage() {
  const [contactForm, setContactForm] = useState({ naam: '', email: '', telefoon: '', bericht: '', website: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, formulier: 'adviesgesprek', brand: 'badkamerstijl' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.errors?.join(', ') || data.message || 'Verzenden mislukt');
      setContactStatus('success');
      setContactForm({ naam: '', email: '', telefoon: '', bericht: '', website: '' });
    } catch (err) {
      setContactStatus('error');
      setContactError(err instanceof Error ? err.message : 'Er is iets misgegaan');
    }
  };

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.default;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.sx-reveal').forEach((el) => {
          gsap.fromTo(el,
            { clipPath: 'inset(100% 0 0 0)' },
            {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            },
          );
        });
      });
    });

    return () => { ctx?.revert(); };
  }, []);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(31).jpg"
            alt="Adviesgesprek plannen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

        <div className="relative z-20 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-[11px] tracking-[0.15em] lowercase mb-6 block"
          >
            (Contact)
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white"
          >
            Laten we
            <br />
            <span className="italic">praten</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info + image */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] mb-10"
            >
              Vertel ons over jouw droombadkamer. Wij luisteren, denken mee
              en maken het <span className="italic">werkelijkheid.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4 text-bsv2-grey text-sm mb-12"
            >
              <p><strong className="text-bsv2-charcoal">Adres:</strong> Joop Geesinkweg 201, 1114 AB Amsterdam-Duivendrecht</p>
              <p><strong className="text-bsv2-charcoal">Telefoon:</strong> +31 30 207 23 88</p>
              <p><strong className="text-bsv2-charcoal">E-mail:</strong> info@badkamerstijl.nl</p>
              <p><strong className="text-bsv2-charcoal">Openingstijden:</strong> Ma-Vr: 08:00-17:00 | Za: op afspraak</p>
            </motion.div>

            <div className="sx-reveal aspect-[4/3] relative overflow-hidden">
              <Image
                src="/badkamerstijl/2200xxsxm(27).jpg"
                alt="Showroom Badkamerstijl"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col justify-center">
            {contactStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-bsv2-teal/30 rounded-xl p-10 text-center"
              >
                <h3 className="font-cormorant text-3xl font-light mb-3">Bedankt!</h3>
                <p className="text-bsv2-grey text-base mb-6">We nemen zo snel mogelijk contact met je op voor het inplannen van je adviesgesprek.</p>
                <button
                  onClick={() => setContactStatus('idle')}
                  className="text-sm text-bsv2-teal underline"
                >
                  Nog een bericht versturen
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleContactSubmit}>
                {/* Honeypot */}
                <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={contactForm.website} onChange={handleContactChange} />
                </div>

                <div>
                  <input
                    type="text"
                    name="naam"
                    required
                    placeholder="Volledige naam"
                    value={contactForm.naam}
                    onChange={handleContactChange}
                    className="w-full bg-transparent border-b border-bsv2-charcoal/15 focus:border-bsv2-teal pb-3 pt-2 text-bsv2-charcoal placeholder:text-bsv2-charcoal/30 outline-none transition-colors text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mailadres"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full bg-transparent border-b border-bsv2-charcoal/15 focus:border-bsv2-teal pb-3 pt-2 text-bsv2-charcoal placeholder:text-bsv2-charcoal/30 outline-none transition-colors text-base"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefoon"
                    required
                    placeholder="Telefoonnummer"
                    value={contactForm.telefoon}
                    onChange={handleContactChange}
                    className="w-full bg-transparent border-b border-bsv2-charcoal/15 focus:border-bsv2-teal pb-3 pt-2 text-bsv2-charcoal placeholder:text-bsv2-charcoal/30 outline-none transition-colors text-base"
                  />
                </div>
                <div>
                  <textarea
                    name="bericht"
                    rows={4}
                    placeholder="Vertel ons over je droombadkamer..."
                    value={contactForm.bericht}
                    onChange={handleContactChange}
                    className="w-full bg-transparent border-b border-bsv2-charcoal/15 focus:border-bsv2-teal pb-3 pt-2 text-bsv2-charcoal placeholder:text-bsv2-charcoal/30 outline-none transition-colors text-base resize-none"
                  />
                </div>
                {contactStatus === 'error' && (
                  <p className="text-red-500 text-sm">{contactError}</p>
                )}
                <button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="inline-flex items-center gap-3 bg-bsv2-teal text-white font-medium px-10 py-4 rounded-full transition-all hover:bg-bsv2-charcoal text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactStatus === 'loading' ? 'Bezig met verzenden...' : 'Adviesgesprek aanvragen'}
                  {contactStatus !== 'loading' && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Left heading */}
            <div>
              <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
                (Veelgestelde vragen)
              </span>
              <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light">
                Alles wat je
                <br />
                <span className="italic">wilt weten</span>
              </h2>
            </div>

            {/* Right — accordion */}
            <div className="divide-y divide-bsv2-charcoal/10">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="py-6"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-cormorant text-xl md:text-2xl font-light">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-bsv2-grey flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-bsv2-grey text-base leading-relaxed pt-4 max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-6xl font-light mb-6">
            Liever direct <span className="italic">bellen?</span>
          </h2>
          <p className="text-bsv2-grey text-base mb-8">
            Bel ons op <a href="tel:+31302072388" className="text-bsv2-teal hover:underline">+31 30 207 23 88</a> of
            mail naar <a href="mailto:info@badkamerstijl.nl" className="text-bsv2-teal hover:underline">info@badkamerstijl.nl</a>
          </p>
          <Link
            href="/"
            className="border border-bsv2-charcoal text-bsv2-charcoal text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
          >
            Terug naar home
          </Link>
        </div>
      </section>
    </main>
  );
}

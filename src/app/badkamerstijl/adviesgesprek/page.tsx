'use client';

import { motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';

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
    answer: 'Ja, wij leveren alles, van tegels en sanitair tot kranen en accessoires. Via onze partners krijg je toegang tot de mooiste merken tegen concurrerende prijzen.',
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

  const inputClass =
    'w-full bg-transparent border-b border-bs26-charcoal/15 focus:border-bs26-gold pb-3 pt-2 text-bs26-charcoal placeholder:text-bs26-charcoal/35 outline-none transition-colors text-base';

  return (
    <MotionConfig reducedMotion="user">
    <main className="bs26 overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="relative h-[60vh] md:h-[72vh] min-h-[480px] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-bs26-ink flex items-end">
          <Image
            src="/badkamerstijl/2200xxs(31).jpg"
            alt="Plan een vrijblijvend adviesgesprek met Badkamerstijl"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-14 md:pb-20 max-w-[1500px] mx-auto w-full">
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/65 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Adviesgesprek</span>
            </nav>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-bs26-gold-soft" />
              <span className="bs26-eyebrow text-white/75">Contact</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.0]"
            >
              Laten we
              <br />
              <span className="italic">praten</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left, info + image */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] mb-10"
            >
              Vertel ons over jouw droombadkamer. Wij luisteren, denken mee
              en maken het <span className="italic">werkelijkheid.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-body space-y-4 text-bs26-grey text-sm mb-12"
            >
              <p><strong className="text-bs26-charcoal">Adres:</strong> {CONTACT_BADKAMERSTIJL.adres.volledig}</p>
              <p><strong className="text-bs26-charcoal">Telefoon:</strong> <a href={CONTACT_BADKAMERSTIJL.telefoonLink} className="hover:text-bs26-gold transition-colors">{CONTACT_BADKAMERSTIJL.telefoon}</a></p>
              <p><strong className="text-bs26-charcoal">E-mail:</strong> <a href={`mailto:${CONTACT_BADKAMERSTIJL.email}`} className="hover:text-bs26-gold transition-colors">{CONTACT_BADKAMERSTIJL.email}</a></p>
              <p><strong className="text-bs26-charcoal">Openingstijden:</strong> {CONTACT_BADKAMERSTIJL.openingstijden}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] relative overflow-hidden rounded-[18px]"
            >
              <Image
                src="/badkamerstijl/2200xxsxm(27).jpg"
                alt="Showroom van Badkamerstijl"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Right, form */}
          <div className="flex flex-col justify-center">
            {contactStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-bs26-paper border border-bs26-charcoal/10 rounded-[18px] p-10 text-center"
              >
                <h3 className="font-display text-3xl font-light mb-3">Bedankt!</h3>
                <p className="font-body text-bs26-grey text-base mb-6">We nemen zo snel mogelijk contact met je op voor het inplannen van je adviesgesprek.</p>
                <button
                  onClick={() => setContactStatus('idle')}
                  className="text-sm text-bs26-gold underline underline-offset-2"
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
                  <label htmlFor="naam" className="sr-only">Volledige naam</label>
                  <input id="naam" type="text" name="naam" required placeholder="Volledige naam" value={contactForm.naam} onChange={handleContactChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">E-mailadres</label>
                  <input id="email" type="email" name="email" required placeholder="E-mailadres" value={contactForm.email} onChange={handleContactChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="telefoon" className="sr-only">Telefoonnummer</label>
                  <input id="telefoon" type="tel" name="telefoon" required placeholder="Telefoonnummer" value={contactForm.telefoon} onChange={handleContactChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="bericht" className="sr-only">Je bericht</label>
                  <textarea id="bericht" name="bericht" rows={4} placeholder="Vertel ons over je droombadkamer..." value={contactForm.bericht} onChange={handleContactChange} className={`${inputClass} resize-none`} />
                </div>
                {contactStatus === 'error' && (
                  <p className="text-red-500 text-sm" role="alert">{contactError}</p>
                )}
                <button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="inline-flex items-center gap-3 bg-bs26-ink text-white font-medium px-10 py-4 rounded-full transition-colors hover:bg-bs26-gold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
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
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-bs26-paper">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <span className="bs26-eyebrow text-bs26-gold mb-5 block">Veelgestelde vragen</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light">
                Alles wat je
                <br />
                <span className="italic">wilt weten</span>
              </h2>
            </div>

            <div className="flex flex-col">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} className="border-b border-bs26-charcoal/12 first:border-t">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`advies-faq-panel-${i}`}
                      id={`advies-faq-button-${i}`}
                      className="w-full flex items-center justify-between text-left gap-4 py-6 group"
                    >
                      <span className="font-display text-xl md:text-2xl font-medium group-hover:text-bs26-gold transition-colors">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-bs26-grey flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      id={`advies-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`advies-faq-button-${i}`}
                      className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-bs26-grey text-base leading-relaxed pb-6 max-w-2xl">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto text-center border-t border-bs26-charcoal/[0.08]">
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light mb-6">
          Liever direct <span className="italic">bellen?</span>
        </h2>
        <p className="font-body text-bs26-grey text-base mb-8">
          Bel ons op <a href={CONTACT_BADKAMERSTIJL.telefoonLink} className="text-bs26-gold hover:underline">{CONTACT_BADKAMERSTIJL.telefoon}</a> of
          mail naar <a href={`mailto:${CONTACT_BADKAMERSTIJL.email}`} className="text-bs26-gold hover:underline">{CONTACT_BADKAMERSTIJL.email}</a>
        </p>
        <Link
          href="/"
          className="border border-bs26-charcoal/40 text-bs26-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-ink hover:text-white hover:border-bs26-ink transition-colors duration-300 inline-flex items-center gap-2"
        >
          Terug naar home
        </Link>
      </section>
    </main>
    </MotionConfig>
  );
}

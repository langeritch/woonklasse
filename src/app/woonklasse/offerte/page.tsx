'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '@/data/contact';

const PROJECT_TYPES = [
  { id: 'totaal-renovatie', label: 'Totaal renovatie / nieuwbouw' },
  { id: 'complete', label: 'Complete renovatie' },
  { id: 'sanitair', label: 'Sanitair / badkamer specialist' },
  { id: 'keuken', label: 'Keuken renovatie' },
  { id: 'dakkapel', label: 'Dakkapel / dakwerk' },
  { id: 'onderhoud', label: 'Onderhoud / herstelwerk' },
  { id: 'orientatie', label: 'Nog oriënteren' },
];

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function OffertePage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [formData, setFormData] = useState({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    stad: '',
    type: '',
    bericht: '',
    website: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      // Capture UTMs + landing context from the browser at submit time.
      // Reading window.location avoids the Suspense requirement of useSearchParams.
      const params = typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();
      const utm = {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_content: params.get('utm_content') || undefined,
        utm_term: params.get('utm_term') || undefined,
      };
      const landing_page = typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}${window.location.search}`
        : undefined;
      const referrer = typeof document !== 'undefined' && document.referrer
        ? document.referrer
        : undefined;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formulier: 'offerte',
          brand: 'woonklasse',
          ...utm,
          landing_page,
          referrer,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.errors?.join(', ') || data.message || 'Verzenden mislukt');
      router.push('/bedankt');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Er is iets misgegaan');
    }
  };

  return (
    <main className="min-h-screen bg-woon-light text-woon-primary">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image src="/badkamerstijl/2200xxsxm(27).jpg" alt="Contact" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-woon-primary/30" />
        </motion.div>
        <div className="absolute inset-0 flex items-end pb-16 px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-[3.5rem] font-bold text-white"
          >
            Start uw project
          </motion.h1>
        </div>
      </section>

      {/* Content: offices + form side by side */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <FadeIn>
              <p className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-6">Contact</p>
              <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.2] mb-6">
                Vraag een offerte aan
              </h2>
              <p className="text-woon-secondary text-base leading-relaxed mb-12">
                Vertel ons over uw project en ontvang binnen 48 uur een vrijblijvende offerte op maat.
                Elk gesprek begint met luisteren.
              </p>
            </FadeIn>

            {/* Office info - BAMO style */}
            <FadeIn delay={0.1}>
              <div className="border-t border-woon-primary/10 pt-8 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-woon-secondary mb-2">Telefoon</h3>
                    <a href={CONTACT.telefoonLink} className="text-woon-primary hover:text-woon-accent transition-colors font-heading font-bold break-all">
                      {CONTACT.telefoon}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-woon-secondary mb-2">Mail</h3>
                    <a href={`mailto:${CONTACT.email}`} className="text-woon-primary hover:text-woon-accent transition-colors font-heading font-bold break-all">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-woon-secondary mb-2">Kantoor</h3>
                    <p className="text-woon-primary text-sm">{CONTACT.adres.straat}<br />{CONTACT.adres.postcode} {CONTACT.adres.plaats}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-woon-secondary mb-2">Bereikbaarheid</h3>
                    <p className="text-woon-primary text-sm">{CONTACT.openingstijden.replace(' | ', '\n').split('\n').map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Form */}
          <FadeIn delay={0.2}>
            <div className="bg-woon-cream p-8 md:p-12">
              <h3 className="font-heading text-xl font-bold mb-8">Projectaanvraag</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot - hidden from humans, bots fill this */}
                <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="naam" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Naam *</label>
                    <input
                      id="naam"
                      type="text"
                      name="naam"
                      required
                      autoComplete="name"
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="bedrijf" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Bedrijf</label>
                    <input
                      id="bedrijf"
                      type="text"
                      name="bedrijf"
                      autoComplete="organization"
                      value={formData.bedrijf}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Mailadres *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Telefoon *</label>
                    <input
                      id="telefoon"
                      type="tel"
                      name="telefoon"
                      required
                      autoComplete="tel"
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="stad" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Plaats / stad</label>
                    <input
                      id="stad"
                      type="text"
                      name="stad"
                      autoComplete="address-level2"
                      value={formData.stad}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Type project</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      aria-label="Type project"
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Selecteer...</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t.id} value={t.label}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="bericht" className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Projectdetails</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-3 bg-woon-primary text-woon-light font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 text-sm tracking-wide mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Bezig met verzenden...' : 'Verstuur aanvraag'}
                  {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

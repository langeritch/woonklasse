'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '@/data/contact';

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [formData, setFormData] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', type: '', bericht: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formulier: 'offerte', brand: 'woonklasse' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.errors?.join(', ') || data.message || 'Verzenden mislukt');
      setStatus('success');
      setFormData({ naam: '', bedrijf: '', email: '', telefoon: '', type: '', bericht: '', website: '' });
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
          {/* Left — Info */}
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

            {/* Office info — BAMO style */}
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
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-woon-secondary mb-2">E-mail</h3>
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

          {/* Right — Form */}
          <FadeIn delay={0.2}>
            <div className="bg-woon-cream p-8 md:p-12">
              <h3 className="font-heading text-xl font-bold mb-8">Projectaanvraag</h3>
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <p className="text-green-800 font-heading font-bold text-lg mb-2">Bedankt voor je aanvraag!</p>
                  <p className="text-green-700 text-sm">We nemen zo snel mogelijk contact met je op.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-woon-accent underline">Nog een aanvraag versturen</button>
                </div>
              ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot — hidden from humans, bots fill this */}
                <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Naam *</label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Bedrijf</label>
                    <input
                      type="text"
                      name="bedrijf"
                      value={formData.bedrijf}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Telefoon *</label>
                    <input
                      type="tel"
                      name="telefoon"
                      required
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Type project *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-woon-primary/20 focus:border-woon-accent pb-2 pt-1 text-woon-primary outline-none transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecteer...</option>
                    <option value="verbouwing">Complete verbouwing</option>
                    <option value="aanbouw">Aanbouw & uitbreiding</option>
                    <option value="veranda">Veranda</option>
                    <option value="dakkapel">Dakkapel & dakwerk</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block">Projectdetails</label>
                  <textarea
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
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

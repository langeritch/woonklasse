'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

// Hergebruik van het BESTAANDE normale badkamerstijl-contactformulier
// (zoals op /adviesgesprek): zelfde velden, zelfde honeypot, zelfde UTM-
// capture en dezelfde POST naar /api/contact. Geen nieuw meerstaps-formulier.
// Uitgelicht als losse component zodat de stadslandingspagina hetzelfde
// formulier twee keer kan tonen (hero + onderste CTA) zonder bestaande
// pagina's aan te raken.

const RENOVATION_TYPES = [
  { id: 'compleet', label: 'Complete renovatie' },
  { id: 'kleine', label: 'Kleine badkamer' },
  { id: 'luxe', label: 'Luxe / op maat' },
  { id: 'inloopdouche', label: 'Inloopdouche plaatsen' },
  { id: 'vrijstaand-bad', label: 'Vrijstaand bad' },
  { id: 'orientatie', label: 'Nog oriënteren' },
];

export default function BadkamerstijlContactForm({
  city = '',
  heading = 'Plan je gratis adviesgesprek',
  intro = 'Laat je gegevens achter, dan nemen wij binnen 2 werkdagen contact op om je badkamer door te spreken.',
}: {
  /** Stad vooringevuld in het formulier (komt uit de stad-parameter). */
  city?: string;
  heading?: string;
  intro?: string;
}) {
  const router = useRouter();
  const [contactForm, setContactForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    stad: city,
    type: '',
    bericht: '',
    website: '',
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState('');

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactError('');
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
          ...contactForm,
          formulier: 'adviesgesprek',
          brand: 'badkamerstijl',
          ...utm,
          landing_page,
          referrer,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.errors?.join(', ') || data.message || 'Verzenden mislukt');
      setContactStatus('success');
      setContactForm({ naam: '', email: '', telefoon: '', stad: city, type: '', bericht: '', website: '' });
      router.push('/bedankt');
    } catch (err) {
      setContactStatus('error');
      setContactError(err instanceof Error ? err.message : 'Er is iets misgegaan');
    }
  };

  const fieldClass =
    'w-full bg-transparent border-b border-bs26-charcoal/15 focus:border-bs26-gold pb-3 pt-2 text-bs26-charcoal placeholder:text-bs26-charcoal/30 outline-none transition-colors text-base';

  return (
    <div className="bs26 bg-bs26-paper rounded-[18px] border border-bs26-charcoal/10 shadow-[0_30px_70px_-40px_rgba(26,29,31,0.5)] p-7 sm:p-9">
      {contactStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6"
        >
          <h3 className="font-display text-3xl font-light mb-3 text-bs26-charcoal">Bedankt!</h3>
          <p className="text-bs26-grey text-base mb-6">
            We nemen zo snel mogelijk contact met je op voor het inplannen van je adviesgesprek.
          </p>
          <button
            type="button"
            onClick={() => setContactStatus('idle')}
            className="text-sm text-bs26-gold underline"
          >
            Nog een bericht versturen
          </button>
        </motion.div>
      ) : (
        <>
          <h3 className="font-display text-2xl md:text-3xl font-light text-bs26-charcoal leading-tight">
            {heading}
          </h3>
          <p className="text-bs26-grey text-sm mt-3 mb-7 leading-relaxed">{intro}</p>
          <form className="space-y-6" onSubmit={handleContactSubmit}>
            {/* Honeypot */}
            <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={contactForm.website}
                onChange={handleContactChange}
              />
            </div>

            <input
              type="text"
              name="naam"
              required
              placeholder="Volledige naam"
              value={contactForm.naam}
              onChange={handleContactChange}
              className={fieldClass}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="E-mailadres"
              value={contactForm.email}
              onChange={handleContactChange}
              className={fieldClass}
            />
            <input
              type="tel"
              name="telefoon"
              required
              placeholder="Telefoonnummer"
              value={contactForm.telefoon}
              onChange={handleContactChange}
              className={fieldClass}
            />
            <input
              type="text"
              name="stad"
              placeholder="Plaats / stad"
              autoComplete="address-level2"
              value={contactForm.stad}
              onChange={handleContactChange}
              className={fieldClass}
            />
            <select
              name="type"
              value={contactForm.type}
              onChange={handleContactChange}
              aria-label="Type renovatie"
              className={`${fieldClass} appearance-none cursor-pointer`}
            >
              <option value="">Type renovatie (optioneel)</option>
              {RENOVATION_TYPES.map((t) => (
                <option key={t.id} value={t.label}>{t.label}</option>
              ))}
            </select>
            <textarea
              name="bericht"
              rows={3}
              placeholder="Vertel ons over je droombadkamer..."
              value={contactForm.bericht}
              onChange={handleContactChange}
              className={`${fieldClass} resize-none`}
            />
            {contactStatus === 'error' && (
              <p className="text-red-500 text-sm">{contactError}</p>
            )}
            <button
              type="submit"
              disabled={contactStatus === 'loading'}
              className="inline-flex items-center gap-3 bg-bs26-ink text-white font-medium px-10 py-4 rounded-full transition-all hover:bg-bs26-gold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {contactStatus === 'loading' ? 'Bezig met verzenden...' : 'Adviesgesprek aanvragen'}
              {contactStatus !== 'loading' && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

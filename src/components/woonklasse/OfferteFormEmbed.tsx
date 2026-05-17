'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'totaal-renovatie', label: 'Totaal renovatie / nieuwbouw' },
  { id: 'complete', label: 'Complete renovatie' },
  { id: 'sanitair', label: 'Sanitair / badkamer specialist' },
  { id: 'keuken', label: 'Keuken renovatie' },
  { id: 'dakkapel', label: 'Dakkapel / dakwerk' },
  { id: 'onderhoud', label: 'Onderhoud / herstelwerk' },
  { id: 'orientatie', label: 'Nog oriënteren' },
];

export default function OfferteFormEmbed({ defaultStad = '' }: { defaultStad?: string }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    stad: defaultStad,
    type: '',
    bericht: '',
    website: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const params =
        typeof window !== 'undefined'
          ? new URLSearchParams(window.location.search)
          : new URLSearchParams();
      const utm = {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_content: params.get('utm_content') || undefined,
        utm_term: params.get('utm_term') || undefined,
      };
      const landing_page =
        typeof window !== 'undefined'
          ? `${window.location.origin}${window.location.pathname}${window.location.search}`
          : undefined;
      const referrer =
        typeof document !== 'undefined' && document.referrer ? document.referrer : undefined;

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
      if (!res.ok)
        throw new Error(data.errors?.join(', ') || data.message || 'Verzenden mislukt');
      router.push('/woonklasse/bedankt');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Er is iets misgegaan');
    }
  };

  const fieldClass =
    'w-full bg-transparent border-b border-woon-dark/20 focus:border-woon-accent pb-2 pt-1 text-woon-dark outline-none transition-colors text-sm';
  const labelClass =
    'text-[10px] tracking-[0.2em] uppercase text-woon-secondary mb-2 block';

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl border border-woon-dark/[0.06]">
      <h3 className="font-heading text-xl font-bold mb-8">Projectaanvraag</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Honeypot */}
        <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="ofe-naam" className={labelClass}>
              Naam *
            </label>
            <input
              id="ofe-naam"
              type="text"
              name="naam"
              required
              autoComplete="name"
              value={formData.naam}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="ofe-bedrijf" className={labelClass}>
              Bedrijf
            </label>
            <input
              id="ofe-bedrijf"
              type="text"
              name="bedrijf"
              autoComplete="organization"
              value={formData.bedrijf}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="ofe-email" className={labelClass}>
              Mailadres *
            </label>
            <input
              id="ofe-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="ofe-telefoon" className={labelClass}>
              Telefoon *
            </label>
            <input
              id="ofe-telefoon"
              type="tel"
              name="telefoon"
              required
              autoComplete="tel"
              value={formData.telefoon}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="ofe-stad" className={labelClass}>
              Plaats / stad
            </label>
            <input
              id="ofe-stad"
              type="text"
              name="stad"
              autoComplete="address-level2"
              value={formData.stad}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="ofe-type" className={labelClass}>
              Type project
            </label>
            <select
              id="ofe-type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              aria-label="Type project"
              className={`${fieldClass} appearance-none cursor-pointer`}
            >
              <option value="">Selecteer...</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t.id} value={t.label}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="ofe-bericht" className={labelClass}>
            Projectdetails
          </label>
          <textarea
            id="ofe-bericht"
            name="bericht"
            rows={4}
            value={formData.bericht}
            onChange={handleChange}
            className={`${fieldClass} resize-none`}
          />
        </div>
        {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-3 bg-woon-dark text-woon-light font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 text-sm tracking-wide mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Bezig met verzenden...' : 'Verstuur aanvraag'}
          {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}

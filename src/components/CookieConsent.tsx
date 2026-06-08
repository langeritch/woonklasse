'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * AVG-conforme cookie-consent. Google Analytics en Microsoft Clarity (tracking)
 * worden PAS geladen nadat de bezoeker toestemming heeft gegeven. De keuze wordt
 * in localStorage bewaard zodat de banner niet steeds terugkomt.
 */

const STORAGE_KEY = 'bks-cookie-consent';
const GA_ID = 'G-XKXE96N9P7';
const CLARITY_ID = 'ws4ssoyhmg';

function loadAnalytics() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ga-src')) return; // al geladen

  // Google Analytics
  const ga = document.createElement('script');
  ga.id = 'ga-src';
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(ga);

  const gaCfg = document.createElement('script');
  gaCfg.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
  document.head.appendChild(gaCfg);

  // Microsoft Clarity
  const clarity = document.createElement('script');
  clarity.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_ID}");`;
  document.head.appendChild(clarity);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(STORAGE_KEY);
    if (choice === 'accepted') {
      loadAnalytics();
    } else if (choice !== 'rejected') {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadAnalytics();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-toestemming"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[70] md:max-w-md bg-bs26-ink text-white rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] border border-white/10 p-6"
    >
      <h2 className="text-xl font-light mb-2" style={{ fontFamily: 'var(--font-display)' }}>Cookies</h2>
      <p className="font-body text-white/70 text-sm leading-relaxed mb-5">
        We gebruiken analytische cookies om de site te verbeteren. Die plaatsen we
        alleen met jouw toestemming. Lees meer in ons{' '}
        <Link href="/privacybeleid" className="underline underline-offset-2 hover:text-white">
          privacybeleid
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={accept}
          className="flex-1 bg-white text-bs26-ink text-sm font-medium px-5 py-3 rounded-full hover:bg-bs26-gold hover:text-white transition-colors"
        >
          Accepteren
        </button>
        <button
          type="button"
          onClick={reject}
          className="flex-1 border border-white/30 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          Alleen noodzakelijk
        </button>
      </div>
    </div>
  );
}

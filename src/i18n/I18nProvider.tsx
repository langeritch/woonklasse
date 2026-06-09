'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { EN } from '@/i18n/en';

export type Locale = 'nl' | 'en';

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (nl: string) => string;
};

const I18nContext = createContext<I18nValue>({
  locale: 'nl',
  setLocale: () => {},
  t: (nl) => nl,
});

const COOKIE = 'bks-locale';

function readCookie(): Locale {
  if (typeof document === 'undefined') return 'nl';
  const m = document.cookie.match(/(?:^|;\s*)bks-locale=(nl|en)/);
  return (m?.[1] as Locale) || 'nl';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Start at 'nl' on server + first client paint to avoid hydration mismatch;
  // read the saved locale after mount.
  const [locale, setLocaleState] = useState<Locale>('nl');

  useEffect(() => {
    const saved = readCookie();
    if (saved !== 'nl') setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    document.cookie = `${COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
    setLocaleState(l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  }, []);

  const t = useCallback(
    (nl: string) => (locale === 'en' ? EN[nl] ?? nl : nl),
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Privacybeleid van Woonklasse & Badkamerstijl. Lees hoe wij omgaan met uw persoonsgegevens.',
  openGraph: {
    title: 'Privacybeleid | Woonklasse & Badkamerstijl',
    description: 'Lees hoe wij omgaan met uw persoonsgegevens.',
  },
};

export default function PrivacybeleidLayout({ children }: { children: React.ReactNode }) {
  return children;
}

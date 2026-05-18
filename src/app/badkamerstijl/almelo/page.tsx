import CityLandingRoute, { cityLandingMetadata } from '@/components/badkamerstijl/cityLandingRoute';

// Dedicated stadspagina. Alle layout, formulieren, WhatsApp en SEO/schema
// komen uit het gedeelde template; per stad alleen de slug + de twee unieke
// teksten en de stadsfoto (zie cityLandingRoute.tsx).
const SLUG = 'almelo';

export const generateMetadata = () => cityLandingMetadata(SLUG);

export default function Page() {
  return <CityLandingRoute slug={SLUG} />;
}

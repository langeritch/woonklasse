type AdVariant = 'banner' | 'sidebar' | 'footer';

type AdPlacementProps = {
  slot: string;
  variant?: AdVariant;
  className?: string;
};

const VARIANT_CLASSES: Record<AdVariant, string> = {
  banner: 'w-full max-w-[1400px] mx-auto h-[120px] md:h-[160px]',
  sidebar: 'w-full h-[600px] max-h-[80vh]',
  footer: 'w-full max-w-[1400px] mx-auto h-[100px] md:h-[120px]',
};

export default function AdPlacement({
  slot,
  variant = 'banner',
  className = '',
}: AdPlacementProps) {
  return (
    <aside
      role="complementary"
      aria-label="Advertentie"
      data-ad-slot={slot}
      className={`relative flex items-center justify-center bg-bsv2-cream border border-bsv2-charcoal/10 rounded-2xl overflow-hidden ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <span className="absolute top-3 left-4 text-[10px] tracking-[0.2em] uppercase text-bsv2-grey/70">
        Advertentie
      </span>
      <span className="font-cormorant text-bsv2-grey/60 text-sm md:text-base italic">
        Ruimte gereserveerd voor advertentie
      </span>
    </aside>
  );
}

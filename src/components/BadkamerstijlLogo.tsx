/**
 * Badkamerstijl logo (waterdruppel + wordmerk).
 *
 * De SVG (public/badkamerstijl-logo.svg) wordt als CSS-mask gebruikt en met
 * `currentColor` ingevuld. Daardoor kleurt het logo automatisch mee met de
 * tekstkleur van de plek waar je het neerzet:
 *   - op een lichte achtergrond: geef een donkere text-kleur, bv. text-bs26-charcoal
 *   - op een donkere achtergrond: geef een lichte text-kleur, bv. text-bs26-cream / text-white
 *
 * Hoogte bepaal je met een height-class (bv. h-9 md:h-11); de breedte volgt
 * automatisch via de juiste aspect-ratio.
 */
export default function BadkamerstijlLogo({
  className = '',
  title = 'Badkamerstijl',
}: {
  className?: string;
  title?: string;
}) {
  return (
    <span
      role="img"
      aria-label={title}
      className={className}
      style={{
        display: 'inline-block',
        aspectRatio: '1586 / 658',
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(/badkamerstijl-logo.svg)',
        maskImage: 'url(/badkamerstijl-logo.svg)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}

/**
 * Kleine ronde vlag-iconen in de stijl van de site. 'nl' = Nederlandse driekleur,
 * 'gb' = Britse vlag (voor Engels).
 */
export default function Flag({
  country,
  className = '',
}: {
  country: 'nl' | 'gb';
  className?: string;
}) {
  if (country === 'nl') {
    return (
      <svg viewBox="0 0 60 60" className={className} role="img" aria-label="Nederlands" focusable="false">
        <defs>
          <clipPath id="flag-nl-clip">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
        </defs>
        <g clipPath="url(#flag-nl-clip)">
          <rect width="60" height="20" y="0" fill="#AE1C28" />
          <rect width="60" height="20" y="20" fill="#FFFFFF" />
          <rect width="60" height="20" y="40" fill="#21468B" />
        </g>
        <circle cx="30" cy="30" r="29" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 60 60" className={className} role="img" aria-label="English" focusable="false">
      <defs>
        <clipPath id="flag-gb-clip">
          <circle cx="30" cy="30" r="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-gb-clip)">
        <rect width="60" height="60" fill="#012169" />
        {/* witte diagonalen */}
        <path d="M0,0 L60,60 M60,0 L0,60" stroke="#FFFFFF" strokeWidth="12" />
        {/* rode diagonalen */}
        <path d="M0,0 L60,60 M60,0 L0,60" stroke="#C8102E" strokeWidth="5" />
        {/* wit kruis */}
        <rect x="24" y="0" width="12" height="60" fill="#FFFFFF" />
        <rect x="0" y="24" width="60" height="12" fill="#FFFFFF" />
        {/* rood kruis */}
        <rect x="26" y="0" width="8" height="60" fill="#C8102E" />
        <rect x="0" y="26" width="60" height="8" fill="#C8102E" />
      </g>
      <circle cx="30" cy="30" r="29" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    </svg>
  );
}

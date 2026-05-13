'use client';

import { usePathname } from 'next/navigation';

// WhatsApp goes to the mobile line (+31 6 50 42 46 83); the business
// landline (+31 30 207 23 88) is for calls only — wa.me requires a mobile
// number registered with WhatsApp.
const WHATSAPP_URL = 'https://wa.me/31650424683';

export default function WhatsAppFab() {
  const pathname = usePathname();

  // Hide on splash + admin
  if (pathname === '/') return null;
  if (pathname.startsWith('/admin')) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een WhatsApp bericht"
      title="WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7">
        <path d="M19.077 4.928A9.93 9.93 0 0 0 12.011 2C6.5 2 2.014 6.485 2.012 11.997c0 1.762.461 3.482 1.336 4.997L2 22l5.13-1.345a9.99 9.99 0 0 0 4.88 1.244h.004c5.51 0 9.997-4.485 9.999-9.997a9.93 9.93 0 0 0-2.936-7.074m-7.067 15.376h-.003a8.3 8.3 0 0 1-4.225-1.155l-.303-.18-3.045.797.812-2.967-.197-.314a8.26 8.26 0 0 1-1.266-4.395c.002-4.58 3.729-8.306 8.31-8.306a8.26 8.26 0 0 1 5.876 2.434 8.26 8.26 0 0 1 2.43 5.88c-.002 4.581-3.73 8.306-8.309 8.306m4.555-6.221c-.25-.125-1.478-.73-1.706-.813-.229-.084-.395-.125-.561.125-.167.25-.645.812-.79.979-.146.166-.292.187-.541.062-.25-.125-1.054-.388-2.007-1.239-.742-.661-1.243-1.477-1.39-1.727-.146-.25-.016-.385.109-.51.112-.112.25-.291.375-.437.124-.146.166-.25.25-.416.083-.166.041-.312-.02-.437-.063-.125-.562-1.353-.77-1.853-.203-.487-.41-.42-.562-.428a10 10 0 0 0-.479-.009.92.92 0 0 0-.666.312c-.229.25-.875.854-.875 2.082s.896 2.415 1.02 2.581c.125.167 1.762 2.69 4.269 3.771.596.258 1.062.412 1.425.527.599.19 1.143.163 1.573.099.48-.072 1.477-.604 1.685-1.187s.207-1.083.146-1.187c-.061-.105-.227-.166-.477-.291"/>
      </svg>
    </a>
  );
}

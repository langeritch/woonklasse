import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Login | Admin Portal',
  robots: { index: false, follow: false },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a1716',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}

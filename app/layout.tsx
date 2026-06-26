import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', preload: true });

export const metadata: Metadata = {
  metadataBase: new URL('https://veltrix.ai'),
  title: 'VELTRIX AI — Autonomous Intelligence For Modern Enterprises',
  description: 'VELTRIX AI helps organizations automate workflows, connect data, deploy AI agents, and analyze operations in real time.',
  alternates: { canonical: '/' },
  openGraph: { title: 'VELTRIX AI', description: 'Built for the Next Generation of Enterprise AI.', url: '/', siteName: 'VELTRIX AI', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'VELTRIX AI', description: 'Built for the Next Generation of Enterprise AI.' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#03050b' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body>{children}</body></html>;
}

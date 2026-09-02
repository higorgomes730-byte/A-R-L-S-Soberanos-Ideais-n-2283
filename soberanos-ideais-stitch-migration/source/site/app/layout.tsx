import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig, siteUrl } from './site-config';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.shortName,
  title: {
    default: `${siteConfig.name} — Sursum Corda`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'A∴R∴L∴S∴ Soberanos Ideais nº 2283',
    'Soberanos Ideais 2283',
    'Manaus, AM',
    'Sursum Corda',
    'GOBAM',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} — Sursum Corda`,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1440,
        height: 900,
        alt: 'Soberanos Ideais nº 2283 — Ideais que elevam. Valores que permanecem.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Sursum Corda`,
    description: siteConfig.description,
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/site/assets/brasao-oficial-transparente.png',
    apple: '/site/assets/brasao-oficial-transparente.png',
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#061432',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

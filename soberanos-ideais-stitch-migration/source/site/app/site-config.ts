const fallbackUrl = 'https://soberanos-ideais-2283-brandbook.higormartins.chatgpt.site';

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl);

export const siteConfig = {
  name: 'A∴R∴L∴S∴ Soberanos Ideais nº 2283',
  shortName: 'Soberanos Ideais 2283',
  description:
    'Site institucional da A∴R∴L∴S∴ Soberanos Ideais nº 2283, em Manaus, AM. História, princípios, orientação a maçons visitantes e contato.',
  email: 'loja2283.gobam@gmail.com',
  telephone: '+55 92 92988-2201',
  address: {
    streetAddress: 'Rua Carbonita, 5 · Parque 10',
    addressLocality: 'Manaus',
    addressRegion: 'AM',
    addressCountry: 'BR',
  },
} as const;

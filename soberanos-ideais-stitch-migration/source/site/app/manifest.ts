import type { MetadataRoute } from 'next';
import { siteConfig } from './site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#061432',
    theme_color: '#061432',
    lang: 'pt-BR',
    icons: [
      {
        src: '/site/assets/brasao-oficial-transparente.png',
        sizes: '701x701',
        type: 'image/png',
      },
    ],
  };
}

import type { MetadataRoute } from 'next';
import { siteUrl } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-01T00:00:00-04:00');

  return [
    {
      url: new URL('/', siteUrl).toString(),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/brandbook', siteUrl).toString(),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}

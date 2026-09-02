import type { MetadataRoute } from 'next';
import { siteUrl } from './site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/membros',
    },
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
    host: siteUrl.origin,
  };
}

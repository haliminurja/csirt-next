import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/error/', '/docs/'],
    },
    sitemap: 'https://csirt.unuja.ac.id/sitemap.xml',
  };
}

// File: src/app/sitemap.js

export default function sitemap() {
  const siteUrl = 'https://himalyantrails.com';

  // List all the static pages on your site
  const routes = [
    '/',
    '/gallery',
    '/accommodations',
    '/terms',
    '/privacy-policy',
    '/treks/uttarkashi-to-nag-tibba',
    '/treks/uttarkashi-to-gangotri',
  ];

  const routeEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  // You can add more dynamic entries here later, for example, from a blog
  
  return [...routeEntries];
}
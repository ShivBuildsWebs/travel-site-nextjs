// File: src/app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*', // This rule applies to all crawlers
      allow: '/',     // Allow them to crawl every page
    },
    sitemap: 'https://himalyantrails.com/sitemap.xml', // Points them to your sitemap
  };
}
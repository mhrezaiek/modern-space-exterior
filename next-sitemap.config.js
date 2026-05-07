/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.modernspaceexterior.com',
  generateRobotsTxt: false, // we ship app/robots.ts instead
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/api/*', '/server-sitemap.xml'],
}

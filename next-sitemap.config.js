/** @type {import('next-sitemap').IConfig} */

// your site here
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

module.exports = {
  siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/500', '/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/server-sitemap.xml`],
  },
  autoLastmod: true,
};

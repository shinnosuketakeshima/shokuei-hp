import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://shokuei-hp.web.app';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/lab-takeshima', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-kamoshita', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-kunii', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-iimura', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-kamiyama', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-ishii', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-komeichi', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-nakaoka', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-shibasaki', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-yamazaki', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-niikura', changefreq: 'monthly', priority: '0.8' },
  { path: '/lab-okamoto', changefreq: 'monthly', priority: '0.8' },
  { path: '/news', changefreq: 'daily', priority: '0.9' },
  { path: '/features', changefreq: 'monthly', priority: '0.7' },
  { path: '/qualifications', changefreq: 'monthly', priority: '0.7' },
  { path: '/support', changefreq: 'monthly', priority: '0.7' },
  { path: '/career', changefreq: 'monthly', priority: '0.7' },
  { path: '/campus-life', changefreq: 'monthly', priority: '0.7' },
  { path: '/voices', changefreq: 'monthly', priority: '0.7' },
  { path: '/koudai-project', changefreq: 'monthly', priority: '0.7' },
  { path: '/kokushi-report', changefreq: 'monthly', priority: '0.7' },
  { path: '/student-column-1', changefreq: 'monthly', priority: '0.6' },
  { path: '/student-column-3', changefreq: 'monthly', priority: '0.6' },
  { path: '/event-0531', changefreq: 'weekly', priority: '0.9' },
  { path: '/lab-kamiyama-report', changefreq: 'monthly', priority: '0.6' },
  { path: '/eiyo-app-report', changefreq: 'monthly', priority: '0.7' },
  { path: '/lab-takeshima-column', changefreq: 'monthly', priority: '0.6' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/sports-nutrition', changefreq: 'monthly', priority: '0.8' },
  { path: '/columns', changefreq: 'weekly', priority: '0.7' },
  { path: '/living-alone', changefreq: 'monthly', priority: '0.8' },
];

const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
};

const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, generateSitemap());
console.log(`✓ Generated sitemap.xml (${routes.length} routes, lastmod: ${today})`);

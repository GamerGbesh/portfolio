// generate-sitemap.ts
import { create } from 'xmlbuilder2';
import * as fs from 'fs';

const urls = [
    '',
];

const domain = 'https://portfolio-delta-amber-47.vercel.app';

const root = create({ version: '1.0' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
});

urls.forEach((path) => {
    root.ele('url').ele('loc').txt(`${domain}/${path}`);
});

const xml = root.end({ prettyPrint: true });
fs.writeFileSync('public/sitemap.xml', xml);

console.log('✅ Sitemap generated at public/sitemap.xml');

import { NextResponse } from 'next/server'

const baseUrl = 'https://egtafy.com'

const routes = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/rates',
  '/terms',
  '/blog/5-mistakes-islamic-home-financing',
  '/blog/can-you-pay-off-islamic-home-financing-early',
  '/blog/diminishing-musharaka-vs-ijara',
  '/blog/fixed-vs-variable-profit-rate',
  '/blog/how-much-down-payment-house-pakistan',
  '/blog/islamic-home-financing-for-overseas-pakistanis',
  '/blog/islamic-home-financing-pakistan',
  '/blog/mera-ghar-mera-ashiana',
  '/blog/off-plan-property-islamic-home-financing',
  '/blog/property-valuation-islamic-home-financing',
  '/blog/renting-vs-islamic-home-financing',
  '/blog/salaried-vs-self-employed-islamic-home-financing',
  '/blog/takaful-and-home-financing',
  '/blog/what-happens-if-you-miss-payment-islamic-home-financing',
  '/blog/why-islamic-home-financing-rejected',
]

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/blog' || route.startsWith('/blog/') ? '0.8' : '0.7'}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}

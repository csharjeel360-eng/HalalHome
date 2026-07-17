import type { Metadata } from 'next'
import Script from 'next/script'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://egtafy.com'),
  title: 'Islamic Home Financing Calculator Pakistan | Halal Mortgage Estimate',
  description:
    'Free Islamic home financing calculator for Pakistan. Estimate your monthly Diminishing Musharaka payment — no interest, no riba. Instant, accurate, easy to use.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'islamic mortgage calculator pakistan',
    'halal home financing calculator',
    'diminishing musharaka calculator',
    'ijara calculator pakistan',
    'islamic home loan calculator',
    'meezan bank home financing calculator',
  ],
  openGraph: {
    title: 'Islamic Home Financing Calculator | Halal Mortgage Estimate Pakistan',
    description:
      'Estimate your monthly Islamic home financing payment in seconds — riba-free, transparent, made for Pakistan.',
    url: 'https://egtafy.com',
    siteName: 'Halal Home Calculator',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.jpg.png',
        width: 1920,
        height: 1080,
        alt: 'Halal Home Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Home Financing Calculator Pakistan',
    description: 'Estimate your monthly halal home financing payment in seconds.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4145901573793792" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4145901573793792"
          crossOrigin="anonymous"
        />
        
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Islamic Home Financing Blog Pakistan | Halal Home Buying Guides',
  description:
    'Read practical Islamic home financing guides for Pakistan on Diminishing Musharaka, Murabaha, eligibility, Takaful, valuation, and halal home buying.',
  keywords: [
    'islamic home financing blog pakistan',
    'halal home financing articles',
    'diminishing musharaka explained',
    'islamic mortgage guide pakistan',
    'home financing eligibility pakistan',
  ],
  alternates: {
    canonical: 'https://www.egtafy.com/blog',
  },
  openGraph: {
    title: 'Islamic Home Financing Blog Pakistan',
    description:
      'Practical guides for Muslim home buyers in Pakistan on halal financing, eligibility, and property buying.',
    url: 'https://www.egtafy.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Home Financing Blog Pakistan',
    description: 'Practical halal home financing guides for buyers in Pakistan.',
  },
  robots: { index: true, follow: true },
}

const posts = [
  {
    title: 'Meezan Bank vs HBL vs Dubai Islamic Bank: Home Financing Compared',
    excerpt:
      'A practical comparison of Islamic home financing from Meezan Bank, HBL Islamic, and Dubai Islamic Bank Pakistan, including rates, down payments, and the real trade-offs.',
    href: '/blog/islamic-home-financing-pakistan',
  },
  {
    title: 'Diminishing Musharaka vs Ijara: What\'s the Real Difference?',
    excerpt:
      'A plain-language breakdown of Diminishing Musharaka vs Ijara, and which structure you are actually signing up for when you buy a home with an Islamic bank.',
    href: '/blog/diminishing-musharaka-vs-ijara',
  },
  {
    title: 'Mera Ghar Mera Ashiana Scheme Explained: Eligibility & How to Apply',
    excerpt:
      'A plain-language guide to who qualifies for Mera Ghar Mera Ashiana, what the 5% rate really covers, and how to apply through participating banks.',
    href: '/blog/mera-ghar-mera-ashiana',
  },
  {
    title: 'How Much Down Payment Do You Actually Need for a House in Pakistan?',
    excerpt:
      'A practical breakdown of down payments for bank financing, government schemes, and developer installment plans in Pakistan.',
    href: '/blog/how-much-down-payment-house-pakistan',
  },
  {
    title: '5 Mistakes People Make When Choosing Islamic Home Financing',
    excerpt:
      'A practical guide to the biggest mistakes buyers make with Islamic home financing, from early buyout terms to fee schedules and affordability.',
    href: '/blog/5-mistakes-islamic-home-financing',
  },
  {
    title: 'What Happens If You Miss a Payment on Islamic Home Financing?',
    excerpt:
      'A clear explanation of late fees, credit impact, restructuring options, and what really happens if you miss a payment on Islamic home financing.',
    href: '/blog/what-happens-if-you-miss-payment-islamic-home-financing',
  },
  {
    title: 'Can You Pay Off Islamic Home Financing Early? Here\'s How It Works',
    excerpt:
      'A practical guide to paying off Islamic home financing early, including partial settlement, bank-specific terms, and the real cost of buying out the bank\'s share.',
    href: '/blog/can-you-pay-off-islamic-home-financing-early',
  },
  {
    title: 'Islamic Home Financing for Overseas Pakistanis: Roshan Apna Ghar Explained',
    excerpt:
      'A practical guide to Islamic Roshan Apna Ghar for overseas Pakistanis, including how the Shariah-compliant structure works, who can apply, and what to watch for.',
    href: '/blog/islamic-home-financing-for-overseas-pakistanis',
  },
  {
    title: 'Renting vs Islamic Home Financing: Which Actually Makes Sense in Pakistan Right Now?',
    excerpt:
      'A practical comparison of renting versus Islamic home financing in Pakistan, including rates, affordability, and when each option makes more sense.',
    href: '/blog/renting-vs-islamic-home-financing',
  },
  {
    title: 'Fixed vs Variable Profit Rate: Which Islamic Home Financing Option Should You Pick?',
    excerpt:
      'A practical guide to choosing between fixed and variable profit rates for Islamic home financing, including the trade-offs, risks, and questions to ask.',
    href: '/blog/fixed-vs-variable-profit-rate',
  },
  {
    title: 'Takaful and Home Financing: Why Islamic Banks Require It (and What It Actually Costs)',
    excerpt:
      'A plain-language guide to Takaful in Islamic home financing, including why it is required, how it works, and what it costs.',
    href: '/blog/takaful-and-home-financing',
  },
  {
    title: 'Salaried vs Self-Employed: How Islamic Home Financing Eligibility Rules Differ',
    excerpt:
      'A practical guide to how salaried and self-employed applicants are assessed differently for Islamic home financing in Pakistan.',
    href: '/blog/salaried-vs-self-employed-islamic-home-financing',
  },
  {
    title: 'Off-Plan Property and Islamic Home Financing: What Buyers Need to Know Before Investing',
    excerpt:
      'A practical guide to off-plan property buying, how Islamic home financing differs from conventional mortgages, and what to check before investing.',
    href: '/blog/off-plan-property-islamic-home-financing',
  },
  {
    title: 'How Property Valuation Works in Islamic Home Financing — And Why Banks Might Offer You Less Than You Expect',
    excerpt:
      'A practical guide to property valuation in Islamic home financing, why banks may value a property lower than the purchase price, and what buyers can do about it.',
    href: '/blog/property-valuation-islamic-home-financing',
  },
  {
    title: 'Why Was My Islamic Home Financing Application Rejected?',
    excerpt:
      'Got rejected for Islamic home financing in Pakistan? Here is what usually causes rejections, including income ratio, credit history, valuation gaps, and paperwork issues.',
    href: '/blog/why-islamic-home-financing-rejected',
  },
]

export default function BlogPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'Islamic Home Financing Blog Pakistan',
    description:
      'Practical guides for Muslim home buyers in Pakistan on Islamic home financing, halal home ownership, eligibility, and property buying.',
    url: 'https://www.egtafy.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Halal Home Calculator',
      url: 'https://www.egtafy.com',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://www.egtafy.com${post.href}`,
    })),
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            Blog
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Guidance for Muslim home buyers in Pakistan
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Practical articles on Islamic home financing, halal home ownership, and the questions families often ask before buying a home.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <article className="overflow-hidden rounded-[2rem] border border-line bg-card shadow-[0_25px_70px_-35px_rgba(22,35,31,0.25)]">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">Featured article</p>
                <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  Why Was My Islamic Home Financing Application Rejected?
                </h2>
                <p className="mt-4 text-lg leading-8 text-ink/75">
                  Understand the common reasons applications get declined in Pakistan — from income ratios and credit history to valuation gaps and paperwork issues.
                </p>
                <Link
                  href="/blog/why-islamic-home-financing-rejected"
                  className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
                >
                  Read featured article
                </Link>
              </div>
              <div className="rounded-[1.5rem] border border-line/70 bg-cream/70 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sage">What you will learn</p>
                <ul className="mt-4 space-y-3 text-ink/75">
                  <li>• Why income-to-installment ratios can trigger rejections</li>
                  <li>• How credit history and eCIB records affect approval</li>
                  <li>• Why property valuation gaps can change the outcome</li>
                  <li>• What steps to take before reapplying</li>
                </ul>
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-2">
            {posts.filter((post) => post.href !== '/blog/why-islamic-home-financing-rejected').map((post) => (
              <article key={post.href} className="rounded-[2rem] border border-line bg-card p-8 shadow-[0_25px_70px_-35px_rgba(22,35,31,0.25)]">
                <h2 className="font-display text-2xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-4 text-ink/75">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

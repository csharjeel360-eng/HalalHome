import Link from 'next/link'

type RelatedPost = {
  title: string
  excerpt: string
  href: string
}

const posts: RelatedPost[] = [
  {
    title: 'Meezan Bank vs HBL vs Dubai Islamic Bank: Home Financing Compared',
    excerpt: 'A practical comparison of Islamic home financing options in Pakistan, from rate mechanics to down payment expectations.',
    href: '/blog/islamic-home-financing-pakistan',
  },
  {
    title: 'Diminishing Musharaka vs Ijara: What\'s the Real Difference?',
    excerpt: 'Understand how the most common Islamic home financing structures differ in practice and in cost.',
    href: '/blog/diminishing-musharaka-vs-ijara',
  },
  {
    title: '5 Mistakes People Make When Choosing Islamic Home Financing',
    excerpt: 'Avoid the common mistakes that can turn a good financing plan into a costly one.',
    href: '/blog/5-mistakes-islamic-home-financing',
  },
  {
    title: 'What Happens If You Miss a Payment on Islamic Home Financing?',
    excerpt: 'Learn what late payments can trigger, from fees to restructuring and recovery steps.',
    href: '/blog/what-happens-if-you-miss-payment-islamic-home-financing',
  },
  {
    title: 'Can You Pay Off Islamic Home Financing Early? Here\'s How It Works',
    excerpt: 'A helpful guide to early settlement, buyout terms, and the true cost of closing early.',
    href: '/blog/can-you-pay-off-islamic-home-financing-early',
  },
  {
    title: 'How Much Down Payment Do You Actually Need for a House in Pakistan?',
    excerpt: 'See what banks, government schemes, and developers typically expect upfront.',
    href: '/blog/how-much-down-payment-house-pakistan',
  },
  {
    title: 'Takaful and Home Financing: Why Islamic Banks Require It (and What It Actually Costs)',
    excerpt: 'Get a clear explanation of why Takaful is often mandatory and what it adds to the total cost.',
    href: '/blog/takaful-and-home-financing',
  },
  {
    title: 'Salaried vs Self-Employed: How Islamic Home Financing Eligibility Rules Differ',
    excerpt: 'See how eligibility, income verification, and debt ratios differ between salaried and self-employed applicants.',
    href: '/blog/salaried-vs-self-employed-islamic-home-financing',
  },
  {
    title: 'Off-Plan Property and Islamic Home Financing: What Buyers Need to Know Before Investing',
    excerpt: 'Understand the key Shariah and project risk considerations for buying off-plan with Islamic finance.',
    href: '/blog/off-plan-property-islamic-home-financing',
  },
  {
    title: 'How Property Valuation Works in Islamic Home Financing — And Why Banks Might Offer You Less Than You Expect',
    excerpt: 'Learn why bank valuations can be lower than the agreed price and what that means for your financing.',
    href: '/blog/property-valuation-islamic-home-financing',
  },
]

export default function RelatedPosts({ currentSlug }: { currentSlug?: string }) {
  const related = posts.filter((post) => post.href !== currentSlug).slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 sm:px-8 lg:pb-24">
      <div className="rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-sage">
          Related articles
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((post) => (
            <article key={post.href} className="rounded-[1.5rem] border border-line bg-cream p-6">
              <h3 className="font-display text-xl font-semibold text-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{post.excerpt}</p>
              <Link
                href={post.href}
                className="focus-ring mt-5 inline-flex items-center rounded-full bg-emerald px-4 py-2 text-sm font-medium text-cream transition hover:bg-emerald-light"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

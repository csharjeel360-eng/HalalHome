import Link from 'next/link'
import Footer from '@/components/Footer'

const posts = [
  {
    title: 'Is Islamic Home Financing Really Interest-Free? A Practical Guide for Pakistani Home Buyers',
    excerpt:
      'A clear, human guide to what Islamic home financing means in Pakistan, from diminishing musharaka to monthly payments and the questions to ask before you sign anything.',
    href: '/blog/islamic-home-financing-pakistan',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
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
      </section>

      <Footer />
    </main>
  )
}

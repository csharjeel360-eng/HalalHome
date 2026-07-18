import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Egtafy',
  description: 'Get in touch with Egtafy for questions about the calculator, blog content, or privacy matters.',
  alternates: {
    canonical: 'https://egtafy.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">Contact</p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Contact Egtafy
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            If you have a question about the calculator, the blog, or privacy matters, please get in touch.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_25px_70px_-35px_rgba(22,35,31,0.25)] sm:p-10">
          <form action="mailto:contact@egtafy.com" method="post" encType="text/plain" className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-full border border-line bg-cream px-4 py-3 text-base text-ink outline-none focus:border-emerald" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-full border border-line bg-cream px-4 py-3 text-base text-ink outline-none focus:border-emerald" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Message</label>
              <textarea id="message" name="message" rows={6} required className="w-full rounded-[1.5rem] border border-line bg-cream px-4 py-3 text-base text-ink outline-none focus:border-emerald" />
            </div>
            <button type="submit" className="inline-flex rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light">
              Send message
            </button>
          </form>

          <p className="mt-6 text-sm text-ink/70">
            Prefer email directly? <a href="mailto:contact@egtafy.com" className="font-medium text-emerald underline-offset-2 hover:underline">contact@egtafy.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

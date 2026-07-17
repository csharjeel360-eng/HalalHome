import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Egtafy',
  description: 'Privacy policy for Egtafy, the halal home financing calculator for Pakistan.',
  alternates: {
    canonical: 'https://www.egtafy.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">Privacy Policy</p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Privacy Policy for Egtafy
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Last updated: July 17, 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-lg leading-8 text-ink/80">
          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">What information we collect</h2>
            <p>
              Egtafy is designed as a calculator and informational website. The calculator runs entirely in your browser and does not transmit or store your input data on our servers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">Cookies and third-party services</h2>
            <p>
              Our site may use cookies and third-party services, including Google AdSense, to support site operation and show relevant advertisements. These services may use cookies to serve personalized ads and measure performance.
            </p>
            <p className="mt-4">
              You can review Google&apos;s advertising policies here: <a href="https://policies.google.com/technologies/ads" className="text-emerald underline-offset-2 hover:underline">https://policies.google.com/technologies/ads</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">How we use information</h2>
            <p>
              We use website analytics and advertising tools only to understand site performance and improve the user experience. We do not collect or store personal financial data entered into the calculator.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or your privacy choices, please contact us at <a href="mailto:contact@egtafy.com" className="text-emerald underline-offset-2 hover:underline">contact@egtafy.com</a>.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}

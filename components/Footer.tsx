const footerLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Calculator', href: '/#calculator' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-emerald-dark py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Halal Home Calculator. Estimates only, not financial advice.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring rounded transition hover:text-gold-light">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

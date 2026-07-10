import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import FamilySection from '@/components/FamilySection'
import Calculator from '@/components/Calculator'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="lattice-divider bg-cream" />
      <HowItWorks />
      <Calculator />
      <FamilySection />
      <div className="lattice-divider bg-cream" />
      <FAQ />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import ShoeCarousel from '@/components/ShoeCarousel'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-gradient">
      <Navbar />
      <ShoeCarousel />
      <FeaturesSection />
      <Footer />
    </main>
  )
}

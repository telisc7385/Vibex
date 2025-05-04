// Components
import About from "@/Components/about"
import WhatsAppButton from "@/Components/CommonComponent.tsx/WhatsappIntegration"
import Contact from "@/Components/contact"
import Footer from "@/Components/footer"
import Hero from "@/Components/hero"
import Navbar from "@/Components/navbar"
import Services from "@/Components/services"
import WhatWeDo from "@/Components/whatWeDo"
import WorkProcess from "@/Components/work-process"
import Portfolio from "@/Components/portfolio"
import Pricing from "@/Components/pricing"
import Testimonials from '@/Components/testimonial'
import { getsectionWitSpreadSheetApi } from '@/apiCall/getSection'

export default async function Home() {
  const response = await getsectionWitSpreadSheetApi()
  const config = response.params

  console.log("response",response)

  if (!config) return <p className="text-center mt-10">Loading...</p>

  return (
    <main className="min-h-screen">
      {config.showNavbar && <Navbar />}
      {config.showHero && <Hero />}
      {config.showWhatWeDo && <WhatWeDo />}
      {config.showServices && <Services />}
      {config.showAbout && <About />}
      {config.showWorkProcess && <WorkProcess />}
      {config.showPortfolio && <Portfolio />}
      {config.showTestimonials && <Testimonials />}
      {config.showPricing && <Pricing />}
      {config.showContact && <Contact />}
      {config.showWhatsApp && <WhatsAppButton />}
      {config.showFooter && <Footer />}
    </main>
  )
}

import About from "@/Components/about";
import WhatsAppButton from "@/Components/CommonComponent.tsx/WhatsappIntegration";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";
import Hero from "@/Components/hero";
import Navbar from "@/Components/navbar";
import Services from "@/Components/services";
import WhatWeDo from "@/Components/whatWeDo";
import WorkProcess from "@/Components/work-process";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      
      {/* <Technologies /> */}
      <About />
      <WorkProcess />
      {/* <Portfolio /> */}
      {/* <Testimonials />
      <Pricing /> */}
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}

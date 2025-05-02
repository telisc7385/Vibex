import Contact from "@/Components/contact";
import Footer from "@/Components/footer";
import Hero from "@/Components/hero";
import Navbar from "@/Components/navbar";
import Portfolio from "@/Components/portfolio";
import Pricing from "@/Components/pricing";
import Services from "@/Components/services";
import Technologies from "@/Components/technologies";
import Testimonials from "@/Components/testimonial";
import WorkProcess from "@/Components/work-process";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* <Technologies /> */}
      <WorkProcess />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

import { Code, ShoppingCart, Globe, Smartphone, Layers, Server } from 'lucide-react'
import Label from './CommonComponent.tsx/Label'
import Image from 'next/image'

const services = [
  {
    icon: <Code className="w-10 h-10 text-[var(--primaryDarkGreen)]" />,
    title: "React & Next.js",
    description:
      "Modern, fast, and SEO-friendly web applications built with the latest React and Next.js technologies.",
    image: '/nextLogo.png'
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-[var(--primaryDarkGreen)]" />,
    title: "Shopify Development",
    description:
      "Custom Shopify stores and themes that convert visitors into customers and boost your e-commerce business.",
    image: '/shopifynewlogo.png'
  },
  {
    icon: <Globe className="w-10 h-10 text-[var(--primaryDarkGreen)]" />,
    title: "WordPress Solutions",
    description:
      "Custom WordPress themes and plugins that give you complete control over your content and design.",
    image: '/wordpressLogo.png'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-[var(--primaryDarkGreen)]" />,
    title: "Flutter Apps",
    description:
      "Cross-platform mobile applications that work seamlessly on iOS and Android with a single codebase.",
    image: '/flutterLogo.png'
  },
  {
    icon: <Layers className="w-10 h-10 text-[var(--primaryDarkGreen)]" />,
    title: "Full-Stack Development",
    description:
      "End-to-end solutions that combine beautiful frontends with powerful backend systems.",
    image: '/fullstack logo.png'
  },
  {
    icon: <Server className="w-10 h-10 text-[var(--primaryDarkGreen)]" />,
    title: "Deployment & Maintenance",
    description:
      "Professional deployment services and ongoing maintenance to keep your applications running smoothly.",
    image: '/deploymentLogo.png'
  },
]

export default function Services() {
  return (
    <section id="services" className="sm:py-20 py-8 bg-white dark:bg-gray-900 bg-[url('/service-bg.c4b5343e.png')] bg-center bg-contain">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Label label={'Our Services'} />
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Expert Solutions For Your Digital Needs</h2>
          <p className="text-gray-600 text-xl dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-3 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:shadow-none shadow-md rounded-lg sm:p-12 p-6 transition-shadow"
            >
              <div className="mb-4 h-[100px] w-[100px] mx-auto flex justify-center relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                />
              </div>
              <h3 className="text-2xl text-center my-3 font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

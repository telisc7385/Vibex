import { Code, ShoppingCart, Globe, Smartphone, Layers, Server } from 'lucide-react'

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "React & Next.js",
    description:
      "Modern, fast, and SEO-friendly web applications built with the latest React and Next.js technologies.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    title: "Shopify Development",
    description:
      "Custom Shopify stores and themes that convert visitors into customers and boost your e-commerce business.",
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "WordPress Solutions",
    description:
      "Custom WordPress themes and plugins that give you complete control over your content and design.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Flutter Apps",
    description:
      "Cross-platform mobile applications that work seamlessly on iOS and Android with a single codebase.",
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: "Full-Stack Development",
    description:
      "End-to-end solutions that combine beautiful frontends with powerful backend systems.",
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: "Deployment & Maintenance",
    description:
      "Professional deployment services and ongoing maintenance to keep your applications running smoothly.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Solutions For Your Digital Needs</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

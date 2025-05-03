"use client"

import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Shopify",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce",
    description: "A custom Shopify store with advanced features and optimized for conversions.",
  },
  {
    title: "Corporate Website",
    category: "Next.js",
    image: "/placeholder.svg?height=400&width=600&text=Corporate",
    description: "A fast, responsive corporate website built with Next.js and Tailwind CSS.",
  },
  {
    title: "Mobile App",
    category: "Flutter",
    image: "/placeholder.svg?height=400&width=600&text=Mobile+App",
    description: "A cross-platform mobile application with a beautiful UI and seamless UX.",
  },
  {
    title: "Blog Platform",
    category: "WordPress",
    image: "/placeholder.svg?height=400&width=600&text=Blog",
    description: "A custom WordPress theme with advanced features and optimized for SEO.",
  },
  {
    title: "Dashboard Application",
    category: "React.js",
    image: "/placeholder.svg?height=400&width=600&text=Dashboard",
    description: "An interactive dashboard with data visualization and real-time updates.",
  },
  {
    title: "Landing Page",
    category: "Next.js",
    image: "/placeholder.svg?height=400&width=600&text=Landing+Page",
    description: "A high-converting landing page with optimized performance and SEO.",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="h-1 w-20 bg-[var(--primaryDarkGreen)] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Take a look at some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--primaryDarkGreen)]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-white text-[var(--primaryDarkGreen)] rounded-md font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[var(--primaryDarkGreen)] font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-6 py-3 rounded-md bg-[var(--primaryDarkGreen)] text-white hover:bg-[var(--primaryDarkGreen)]/90 transition-colors inline-block"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}

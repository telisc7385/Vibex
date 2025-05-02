"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--primaryDarkGreen)]/10 text-primary text-sm font-medium">
              Professional Web Development Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas into <span className="text-primary">Digital Reality</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              We craft beautiful, functional, and responsive websites and applications that help businesses grow and
              succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-3 rounded-md bg-[var(--primaryDarkGreen)] text-white hover:bg-[var(--primaryDarkGreen)]/90 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-3 rounded-md border border-gray-300 hover:border-primary hover:text-primary transition-colors text-center dark:border-gray-600"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/softwareimage.webp"
              alt="Web Development"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100% Client Satisfaction</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[var(--primaryDarkGreen)] rounded-full"></div>
                <span className="text-sm font-medium">Fast Turnaround Time</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-center text-gray-500 dark:text-gray-400 mb-8">Trusted by businesses worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=30&width=120&text=Client${i}`}
                alt={`Client ${i}`}
                width={120}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

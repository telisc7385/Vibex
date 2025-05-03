"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 sm:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bannerBackground2.jpeg"
          alt="Web Development Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/[0.8] dark:bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 sm:mt-20 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 h-full">
            <h1 className="text-4xl md:text-5xl lg:text-8xl sm:text-start text-center font-bold leading-tight text-white">
              Transforming Ideas <br /> Into Digital Reality.
            </h1>
            <p className="sm:text-2xl text-base sm:text-start text-center text-gray-200 max-w-xl">
              We craft beautiful, functional, and responsive websites and applications that help businesses grow and
              succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:w-full w-[200px] mx-auto">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="sm:px-8 sm:py-4 py-3 sm:text-2xl text-lg font-semibold rounded-md bg-white text-[var(--primaryDarkGreen)] text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Technologies", href: "#technologies" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm dark:bg-gray-900/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="DevCraft Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold text-primary">DevCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200 dark:hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#contact")
              }}
              className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Hire Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 mt-2 bg-white dark:bg-gray-900 rounded-md shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200 dark:hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#contact")
                }}
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-center"
              >
                Hire Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

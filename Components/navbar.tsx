"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#whatwedo" },
  { name: "Services", href: "#services" },
  // { name: "About Us", href: "#about" },
  { name: "Workflow", href: "#workprocess" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm dark:bg-gray-900/90" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-0 ">
        <div className="flex items-center justify-between py-2">
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            href="#home" className="flex items-center space-x-2 py-2 sm:w-[100px] w-[60px] sm:h-[80px] h-[50px] relative">
            <Image
              src={`${isScrolled ? '/WebLogoBlack.png' : '/WebLogoWhite.png'}`}
              alt="DevCraft Logo"
              fill
              className="rounded"
            />
            {/* <span className="text-xl font-bold text-[var(--primaryDarkGreen)]">DevCraft</span> */}
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
                className={`text-xl font-medium  ${isScrolled ? "text-gray-700 hover:text-[var(--primaryDarkGreen)]" : "text-white"}`}
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
              className="px-8 py-3 text-lg rounded-md bg-[var(--primaryDarkGreen)] border border-white text-white hover:bg-white hover:text-[var(--primaryDarkGreen)]"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
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
                  className="text-lg font-medium text-gray-700 hover:text-[var(--primaryDarkGreen)] transition-colors dark:text-gray-200 dark:hover:text-[var(--primaryDarkGreen)]"
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
                className="px-6 py-3 rounded-sm bg-[var(--primaryDarkGreen)] text-white hover:bg-white text-center"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

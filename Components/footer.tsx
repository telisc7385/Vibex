import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="DevCraft Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold text-primary">DevCraft</span>
            </Link>
            <p className="text-gray-400 mb-4">
              We craft beautiful, functional, and responsive websites and applications that help businesses grow and
              succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social}
                >
                  <span className="capitalize">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  WordPress
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Web Dev Street</li>
              <li>Tech City, TC 12345</li>
              <li>United States</li>
              <li className="pt-2">
                <a href="mailto:info@devcraft.com" className="hover:text-primary transition-colors">
                  info@devcraft.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} DevCraft. All rights reserved. Made with{" "}
            <Heart className="inline-block w-4 h-4 text-red-500" /> by DevCraft Team
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Heart, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--primaryDarkGreen)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-8 gap-2">
          <div className="md:col-span-1 flex justify-center">
            <Link href="#home" className="flex items-center space-x-2 mb-4 sm:h-[180px] h-[150px] sm:w-[220px] w-[180px] relative ">
              <Image
                src="/WebLogoWhite.png"
                alt="DevCraft Logo"
                fill
                className="rounded"
              />
            </Link>
          </div>

          <div className="flex sm:grid grid-cols-2  justify-between col-span-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white transition-colors">
                    WordPress
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:mt-0 mt-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li className="">
                <a href="mailto:telisuchit7385@gmail.com" className="text-white">
                  telisuchit7385@gmail.com
                </a>
              </li>
              <li className="">
                <a href="mailto:adarshsalgudi17@gmail.com" className="text-white">
                  adarshsalgudi17@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+7385347208" className="text-white">
                  +91 7385347208
                </a>
              </li>
              <li>
                <a href="tel:+7709574488" className="text-white">
                  +91 7709574488
                </a>
              </li>

              <li className="flex space-x-4">
                <a
                  href={'https://www.instagram.com/vibex_tech?igsh=MXR4eWl4c3ZxeWljcw=='}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primaryDarkGreen)] transition-colors"
                >
                  <span className="capitalize"> <Instagram /></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 sm:mt-12 mt-5 pt-8 text-center text-website">
          <p>
            © {currentYear} Vibex. All rights reserved. Made with{" "}
            <Heart className="inline-block w-4 h-4 text-white" /> by Vibex Team
          </p>
        </div>
      </div>
    </footer>
  )
}

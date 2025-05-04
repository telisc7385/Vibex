'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  const contacts = [
    {
      name: 'Suchit Teli',
      number: '917385347208',
      label: '+91 7385347208',
    },
    {
      name: 'Adarsh Salgudi',
      number: '917709574488',
      label: '+91 7709574488',
    },
  ]

  const getWhatsAppLink = (number: string) => {
    const message = encodeURIComponent("Hi, I'm interested in your services. Can we talk?")
    return `https://api.whatsapp.com/send?phone=${number}&text=${message}`
  }

  // 🧠 Detect outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-28 right-6 z-50">
      {isOpen && (
        <div
          ref={popupRef}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 mt-2 w-64"
        >
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Contact via WhatsApp</h4>
          <ul className="space-y-2">
            {contacts.map((contact) => (
              <li key={contact.number}>
                <a
                  href={getWhatsAppLink(contact.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-green-900/30 text-gray-800 dark:text-white"
                >
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</div>
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-gray-300 dark:border-gray-600 mt-3">
            <a
              href="https://www.instagram.com/vibex_technologies?igsh=cWJncWx6aGQzbmxj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-pink-100 dark:hover:bg-pink-900/30 text-gray-800 dark:text-white"
            >
              <Instagram />
              <span className="font-medium">Message us on Instagram</span>
            </a>
          </div>

        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 p-3 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
          aria-label="Open WhatsApp Options"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
            loading="lazy"
            className="h-9 w-9 lg:h-12 lg:w-12"
          />
        </button>
      </div>
    </div>
  )
}

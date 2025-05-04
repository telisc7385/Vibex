"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import Label from "./CommonComponent.tsx/Label"
import Link from "next/link"
import { googleEvent } from "@/app/gtag"

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    subject: "",
    message: "",
    phone: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const serviceTitles = [
    "React & Next.js",
    "Shopify Development",
    "WordPress Solutions",
    "Flutter Apps",
    "Full-Stack Development",
    "Deployment & Maintenance"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("https://sheetdb.io/api/v1/26d7bwczbvrpn", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [formData],
        }),
      })

      if (response.ok) {
        if (typeof window !== 'undefined') {
          googleEvent('contact_form_submission', {
            event_category: 'Contact',
            event_label: 'Contact Form',
            value: 1,
          })
        }
        setSubmitSuccess(true)
        setFormData({
          Name: "",
          email: "",
          subject: "",
          message: "",
          phone: '',
        })
      } else {
        setSubmitError("There was a problem submitting the form. Please try again.")
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <section id="contact" className="sm:py-20 py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-12 gap-5">
          {/* Left side - Contact Info */}
          <div>
            <Label label={'Contact Us'}
              position="left"
            />
            <h2 className="text-4xl md:text-6xl sm:text-start text-center font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="text-gray-600 sm:text-xl text-base sm:text-start text-center dark:text-gray-300 mb-8">
              Ready to bring your ideas to life? Get in touch with us today to discuss how we can help your business
              grow.
            </p>

            <div className="space-y-6">
              <div className="flex items-start bg-gray-100 p-5 rounded-sm sm:w-1/2 ">
                <div className="w-10 h-10 rounded-full bg-[var(--primaryDarkGreen)]/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-[var(--primaryDarkGreen)]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  {/* <a href="mailto:telisuchit7385@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primaryDarkGreen)]">
                    telisuchit7385@gmail.com
                  </a> <br />
                  <a href="mailto:adarshsalgudi17@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primaryDarkGreen)]">
                    adarshsalgudi17@gmail.com
                  </a> */}
                  <a href="mailto:vibextech15@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primaryDarkGreen)]">
                    vibextech15@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-gray-100 p-5 rounded-sm sm:w-1/2">
                <div className="w-10 h-10 rounded-full bg-[var(--primaryDarkGreen)]/10 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-[var(--primaryDarkGreen)]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <a href="tel:+7385347208" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primaryDarkGreen)]">
                    +91 7385347208
                  </a> <br />
                  <a href="tel:+7709574488" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primaryDarkGreen)]">
                    +91 7709574488
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:p-8 p-4 shadow-md flex flex-col justify-center items-center w-full">
            <h3 className="text-2xl font-semibold mb-2">Send Us a Message</h3>
            <p className="text-gray-600 sm:text-start text-center dark:text-gray-300 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-4 rounded-md w-full">
                <p>Thank you for your message! We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="w-full px-4 py-4 bg-white rounded-md focus:ring-2 focus:ring-[var(--primaryDarkGreen)] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 bg-white rounded-md focus:ring-2 focus:ring-[var(--primaryDarkGreen)] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-white rounded-md focus:ring-2 focus:ring-[var(--primaryDarkGreen)] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 text-black bg-white rounded-md focus:ring-2 focus:ring-[var(--primaryDarkGreen)] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="" disabled hidden className="text-gray-400">
                      Select a service
                    </option>
                    {serviceTitles.map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-4 bg-white rounded-md focus:ring-2 focus:ring-[var(--primaryDarkGreen)] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  ></textarea>

                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} />
                </div>

                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-md">
                    <p>{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[var(--primaryDarkGreen)] text-white rounded-md hover:bg-[var(--primaryDarkGreen)]/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

            )}
          </div>
        </div>
      </div>
    </section>
  )
}

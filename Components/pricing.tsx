"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "Mobile Optimization",
      "1 Month of Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses that need more features and customization.",
    features: [
      "Everything in Basic",
      "Up to 10 Pages",
      "Advanced SEO Setup",
      "Content Management System",
      "Blog Integration",
      "E-commerce Functionality (up to 50 products)",
      "Social Media Integration",
      "3 Months of Support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established businesses with complex requirements and custom needs.",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "Custom Functionality",
      "Advanced E-commerce Features",
      "Performance Optimization",
      "Third-party Integrations",
      "Priority Support",
      "6 Months of Support",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing Plans</h2>
          <div className="h-1 w-20 bg-[var(--primaryDarkGreen)] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Transparent pricing with no hidden fees. Choose the plan that works best for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow relative ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[var(--primaryDarkGreen)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500 dark:text-gray-400"> / project</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`w-full block text-center py-3 rounded-md transition-colors ${
                    plan.popular
                      ? "bg-[var(--primaryDarkGreen)] text-white hover:bg-[var(--primaryDarkGreen)]/90"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300">
            Need a custom solution? We offer tailored packages to meet your specific requirements.{" "}
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-primary hover:underline"
            >
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}

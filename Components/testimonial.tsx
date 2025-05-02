import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with this team was a game-changer for our business. They delivered a stunning website that perfectly captures our brand and has significantly increased our online conversions.",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, E-Shop",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The e-commerce platform they built for us has transformed our business. Sales have increased by 40% since launch, and the admin interface makes managing our store a breeze.",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, CreativeStudio",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Their attention to detail and creative approach to problem-solving is impressive. They didn't just build a website; they created a digital experience that our customers love.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
                <div className="bg-primary rounded-full p-2 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 mt-4 italic">{testimonial.quote}</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

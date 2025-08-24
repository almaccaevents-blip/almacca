"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Bride",
    image: "/images/logo.jpeg",
    rating: 5,
    text: "Al-Macca made our wedding day absolutely perfect! The food was exceptional and the service was flawless. Our guests are still talking about the delicious menu.",
  },
  {
    name: "Ahmed Khan",
    role: "Corporate Manager",
    image: "/images/logo.jpeg",
    rating: 5,
    text: "Professional service and outstanding quality. They catered our annual conference and exceeded all expectations. Highly recommended for corporate events.",
  },
  {
    name: "Fatima Ali",
    role: "Event Organizer",
    image: "/images/logo.jpeg",
    rating: 5,
    text: "Working with Al-Macca has been a pleasure. Their attention to detail and commitment to excellence makes them our go-to catering partner.",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header - Enhanced Mobile Typography */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonial Container - Enhanced Mobile Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-lg p-6 sm:p-8 md:p-12">
            <div className="text-center">
              {/* User Avatar - Mobile Responsive */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="rounded-full object-cover border-2 border-yellow-400"
                />
              </div>

              {/* Rating Stars - Mobile Optimized */}
              <div className="flex justify-center space-x-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text - Enhanced Mobile Typography */}
              <blockquote className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* User Info - Mobile Responsive */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation Arrows - Enhanced Mobile Design */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 sm:p-3 rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 sm:p-3 rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Testimonial Dots - Enhanced Mobile Layout */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-yellow-400" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How far in advance should I book your catering services?",
    answer:
      "We recommend booking at least 2-4 weeks in advance for regular events and 2-3 months for weddings or large celebrations. However, we also accommodate last-minute requests based on availability.",
  },
  {
    question: "Do you provide catering equipment and setup?",
    answer:
      "Yes, we provide all necessary catering equipment including tables, chairs, serving dishes, and decorations. Our team handles the complete setup and cleanup for your event.",
  },
  {
    question: "Can you accommodate dietary restrictions and special requests?",
    answer:
      "We can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and halal options. Please inform us about any special dietary needs when booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 48 hours before the event receive a full refund. Cancellations within 24-48 hours are subject to a 50% charge, and same-day cancellations are non-refundable.",
  },
  {
    question: "Do you offer tasting sessions before the event?",
    answer:
      "Yes, we offer complimentary tasting sessions for events with 50+ guests. For smaller events, tasting sessions are available at a nominal fee which is adjusted against your final bill.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Karachi and surrounding areas. For events outside our standard service area, additional travel charges may apply. Contact us to discuss your specific location.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our catering services and event planning.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 pb-6 rounded-b-lg shadow-md">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

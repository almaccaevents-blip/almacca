/**
 * SERVICE HIGHLIGHTS COMPONENT
 *
 * Features:
 * - Key service offerings
 * - Visual service cards
 * - Hover animations
 * - Perfect alignment
 * - Call-to-action integration
 */

"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our premium wedding catering services.",
    image: "/images/hero-food.jpeg",
    features: ["Custom Menu Planning", "Elegant Presentation", "Professional Staff", "Complete Setup"],
    link: "/packages",
  },
  {
    title: "Corporate Events",
    description: "Professional catering for business meetings, conferences, and corporate gatherings.",
    image: "/images/catering-service.png",
    features: ["Business Lunch Boxes", "Conference Catering", "Office Parties", "Meeting Refreshments"],
    link: "/services",
  },
  {
    title: "Special Occasions",
    description: "Birthday parties, anniversaries, and family celebrations made memorable.",
    image: "/images/food-display.jpeg",
    features: ["Birthday Parties", "Anniversary Celebrations", "Family Gatherings", "Religious Events"],
    link: "/contact",
  },
]

export default function ServiceHighlights() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-black mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            From intimate family gatherings to grand corporate events, we provide comprehensive catering solutions
            tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid-responsive">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-base group hover-lift"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Service Content */}
              <div className="card-padding">
                <h3 className="heading-sm text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-small text-gray-600 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.link}>
                  <Button className="btn-primary w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

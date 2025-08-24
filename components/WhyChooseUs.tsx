/**
 * WHY CHOOSE US COMPONENT
 *
 * Features:
 * - Compelling reasons to choose Al-Macca
 * - Icon-based feature highlights
 * - Scroll-triggered animations
 * - Perfect grid layout
 * - Professional design
 */

"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Utensils, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of excellence in catering services with hundreds of successful events.",
  },
  {
    icon: Utensils,
    title: "Authentic Cuisine",
    description: "Traditional Pakistani recipes prepared by expert chefs using fresh ingredients.",
  },
  {
    icon: Users,
    title: "Professional Service",
    description: "Trained staff ensuring seamless service from setup to cleanup.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Always on time, every time. We understand the importance of punctuality.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with highest food safety and hygiene standards.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Personalized service tailored to your specific needs and preferences.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
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
            Why Choose <span className="text-yellow-400">Al-Macca?</span>
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We're not just caterers – we're your partners in creating unforgettable experiences. Here's what sets us
            apart from the rest.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-base card-padding text-center group hover-lift"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-yellow-400 rounded-full flex-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-black" />
              </motion.div>

              {/* Content */}
              <h3 className="heading-sm text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-small text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

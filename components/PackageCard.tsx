"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Package {
  name: string
  price: string
  originalPrice?: string
  period: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  popular: boolean
  savings?: string
  minGuests: number
  maxGuests: number
}

interface PackageCardProps {
  package: Package
  index: number
}

export default function PackageCard({ package: pkg, index }: PackageCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: "border-blue-400",
          bg: "bg-blue-400",
          text: "text-blue-600",
          hover: "hover:bg-blue-500",
        }
      case "yellow":
        return {
          border: "border-yellow-400",
          bg: "bg-yellow-400",
          text: "text-yellow-600",
          hover: "hover:bg-yellow-500",
        }
      case "purple":
        return {
          border: "border-purple-400",
          bg: "bg-purple-400",
          text: "text-purple-600",
          hover: "hover:bg-purple-500",
        }
      default:
        return {
          border: "border-gray-400",
          bg: "bg-gray-400",
          text: "text-gray-600",
          hover: "hover:bg-gray-500",
        }
    }
  }

  const colors = getColorClasses(pkg.color)

  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
        pkg.popular ? `border-4 ${colors.border} transform scale-105` : "border border-gray-200"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      {pkg.popular && (
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${colors.bg} text-black px-6 py-2 rounded-b-lg font-semibold flex items-center gap-2`}
        >
          <Star className="w-4 h-4" />
          Most Popular
        </div>
      )}

      {pkg.savings && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {pkg.savings}
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div
            className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black`}
          >
            {pkg.icon}
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
          <p className="text-gray-600 text-sm">{pkg.description}</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold text-black">{pkg.price}</span>
            <span className="text-gray-600">{pkg.period}</span>
          </div>
          {pkg.originalPrice && <div className="text-gray-500 line-through text-lg">{pkg.originalPrice}</div>}
          <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>
              {pkg.minGuests}-{pkg.maxGuests} guests
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {pkg.features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={`${colors.bg} w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`}>
                <Check className="w-3 h-3 text-black" />
              </div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className={`w-full ${
              pkg.popular ? `${colors.bg} text-black ${colors.hover}` : "bg-black text-white hover:bg-gray-800"
            } py-3 font-semibold`}
          >
            Choose {pkg.name}
          </Button>
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-4">
          *Prices may vary based on location and specific requirements
        </p>
      </div>
    </motion.div>
  )
}

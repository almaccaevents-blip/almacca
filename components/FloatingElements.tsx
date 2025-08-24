"use client"

import { motion } from "framer-motion"
import { Utensils, Coffee, Cake, Wine } from "lucide-react"

export default function FloatingElements() {
  const elements = [
    { icon: Utensils, delay: 0, duration: 8 },
    { icon: Coffee, delay: 2, duration: 10 },
    { icon: Cake, delay: 4, duration: 12 },
    { icon: Wine, delay: 6, duration: 9 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-400/20"
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Element.duration,
            delay: Element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Element.icon className="w-12 h-12" />
        </motion.div>
      ))}
    </div>
  )
}

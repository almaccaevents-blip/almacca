"use client"

import { motion } from "framer-motion"
import { ChefHat, Star, Globe, Award } from "lucide-react"

export default function MenuHero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ChefHat className="w-16 h-16 text-yellow-400" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            International <span className="text-yellow-400">Menu</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover our carefully crafted dishes from around the world, made with the finest ingredients
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">15+</div>
              <div className="text-sm text-gray-400">Cuisines</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">200+</div>
              <div className="text-sm text-gray-400">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">5★</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <ChefHat className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">10+</div>
              <div className="text-sm text-gray-400">Expert Chefs</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

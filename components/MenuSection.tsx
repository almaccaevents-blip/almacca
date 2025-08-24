"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, Users, Flame, Leaf, Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface MenuItem {
  name: string
  price: string
  originalPrice?: string
  image: string
  description: string
  category: string
  spiceLevel: number
  isVegetarian: boolean
  isPopular?: boolean
  preparationTime: string
  servingSize: string
}

interface MenuCategory {
  title: string
  subtitle: string
  items: MenuItem[]
}

interface MenuSectionProps {
  category: MenuCategory
  index: number
}

export default function MenuSection({ category, index }: MenuSectionProps) {
  const [favorites, setFavorites] = useState<string[]>([])
  const [cart, setCart] = useState<string[]>([])

  const toggleFavorite = (itemName: string) => {
    setFavorites((prev) => (prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName]))
  }

  const addToCart = (itemName: string) => {
    setCart((prev) => [...prev, itemName])
    // Show toast notification here
  }

  const getSpiceIcons = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame key={i} className={`w-3 h-3 ${i < level ? "text-red-500" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">{category.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{category.subtitle}</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/images/menu-display.png"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.isPopular && (
                    <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  {item.isVegetarian && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Leaf className="w-3 h-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {item.originalPrice && (
                    <Badge variant="destructive" className="bg-red-500">
                      Sale
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={() => toggleFavorite(item.name)}
                    className={`p-2 rounded-full backdrop-blur-sm ${
                      favorites.includes(item.name)
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{item.preparationTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{item.servingSize}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">{item.price}</div>
                    {item.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                {/* Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Spice Level:</span>
                    <div className="flex gap-1">{getSpiceIcons(item.spiceLevel)}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                {/* Action Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => addToCart(item.name)}
                    className="w-full bg-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 group/btn"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                    Add to Order
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

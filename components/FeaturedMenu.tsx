"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Clock, Users, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "./CartProvider" // Import useCart

const featuredItems = [
  {
    id: 1,
    name: "Special Biryani Platter",
    description: "Aromatic basmati rice with tender meat, traditional spices, and garnished with fried onions",
    price: "Rs. 450",
    image: "/images/close-up-appetizing-ramadan-meal-min.jpg",
    rating: 4.9,
    prepTime: "45 mins",
    serves: "2-3 people",
    category: "Biryani",
  },
  {
    id: 2,
    name: "BBQ Mixed Grill",
    description: "Assorted grilled meats including seekh kebabs, chicken tikka, and lamb chops",
    price: "Rs. 650",
    image: "/images/grilled-spicy-chili-maha-min.jpg",
    rating: 4.8,
    prepTime: "30 mins",
    serves: "3-4 people",
    category: "BBQ",
  },
  {
    id: 3,
    name: "Traditional Feast",
    description: "Complete traditional meal with multiple curries, rice, bread, and dessert",
    price: "Rs. 850",
    image: "/images/family-having-indian-food-min.jpg",
    rating: 5.0,
    prepTime: "60 mins",
    serves: "4-5 people",
    category: "Complete Meal",
  },
  {
    id: 4,
    name: "Premium Appetizer Platter",
    description: "Elegant selection of appetizers perfect for special occasions and events",
    price: "Rs. 550",
    image: "/images/layered-stands-with-variety-sliced-meat-min.jpg",
    rating: 4.7,
    prepTime: "25 mins",
    serves: "6-8 people",
    category: "Appetizers",
  },
]

export default function FeaturedMenu() {
  const { addToCart } = useCart() // Use the useCart hook

  const handleAddToCart = (item: (typeof featuredItems)[0]) => {
    // Extract numeric price from string (e.g., "Rs. 450" -> 450)
    const priceMatch = item.price.match(/Rs\. (\d+)/)
    const price = priceMatch ? Number.parseFloat(priceMatch[1]) : 0

    addToCart({
      id: item.id,
      name: item.name,
      price: price,
      image: item.image,
      quantity: 1,
    })
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header - Enhanced Mobile Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight">
            Our <span className="text-yellow-400">Featured Menu</span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover our most popular dishes, crafted with authentic flavors and premium ingredients
          </p>
        </motion.div>

        {/* Menu Grid - Enhanced Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">{item.description}</p>

                    {/* Item Details - Mobile Optimized */}
                    <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span className="hidden sm:inline">{item.serves}</span>
                        <span className="sm:hidden">{item.serves.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action - Enhanced Mobile Layout */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600">{item.price}</div>
                    <Button
                      size="sm"
                      className="bg-gray-900 text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 px-2 sm:px-4 py-1 sm:py-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                      <span className="hidden sm:inline text-xs sm:text-sm">Add to Cart</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA - Enhanced Mobile Button */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto transition-colors"
            onClick={() => (window.location.href = "/menu")}
          >
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  )
}

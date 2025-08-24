"use client"

import { motion } from "framer-motion"
import { Star, Crown, Users, Check, ShoppingCart, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useCart } from "./CartProvider"
import UnifiedHero from "./UnifiedHero"
import { useState } from "react"

interface Package {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  features: string[]
  minGuests: number
  maxGuests: number
  popular?: boolean
}

interface AdditionalItem {
  id?: number
  name: string
  price: string
  description: string
  numericPrice?: number
}

interface PackagePageContentProps {
  title: string
  subtitle: string
  packages: Package[]
  additionalItems: AdditionalItem[]
  highlightWord: string
}

export default function PackagePageContent({
  title,
  subtitle,
  packages,
  additionalItems,
  highlightWord,
}: PackagePageContentProps) {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<number[]>([])

  const handleAddPackageToCart = (pkg: Package) => {
    addToCart({
      id: Date.now(),
      name: pkg.name,
      price: pkg.price,
      image: "/images/hero-food.jpeg",
      category: "Package",
    })
  }

  const handleAddAdditionalItemToCart = (item: AdditionalItem, index: number) => {
    // Extract numeric price from string (e.g., "Rs. 50" -> 50)
    const numericPrice = item.numericPrice || Number.parseInt(item.price.replace(/[^\d]/g, "")) || 0

    addToCart({
      id: Date.now() + index,
      name: item.name,
      price: numericPrice,
      image: "/images/menu-display.png",
      category: "Additional Item",
    })

    // Show visual feedback
    setAddedItems((prev) => [...prev, index])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((i) => i !== index))
    }, 2000)
  }

  const heroStats = [
    { number: `${packages.length}`, label: "Packages Available" },
    { number: `${additionalItems.length}`, label: "Add-on Services" },
    { number: "100%", label: "Satisfaction Guaranteed" },
  ]

  return (
    <>
      {/* Unified Hero Section */}
      <UnifiedHero title={title} subtitle={subtitle} highlightWord={highlightWord} stats={heroStats} />

      {/* Packages Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? "border-4 border-yellow-400 transform scale-105" : "border border-gray-200"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-b-lg font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Save Rs. {pkg.originalPrice - pkg.price}
                  </div>
                )}

                {/* Package Image */}
                <div className="relative h-40 sm:h-48">
                  <Image
                    src="/images/hero-food.jpeg"
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="bg-yellow-400 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-black">
                      <Crown className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-black">Rs. {pkg.price}</span>
                      <span className="text-gray-600 text-sm">per person</span>
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-gray-500 line-through text-base sm:text-lg">Rs. {pkg.originalPrice}</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>
                        {pkg.minGuests}-{pkg.maxGuests} guests
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Order Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleAddPackageToCart(pkg)}
                      className={`w-full ${
                        pkg.popular
                          ? "bg-yellow-400 text-black hover:bg-yellow-500"
                          : "bg-black text-white hover:bg-gray-800"
                      } py-3 font-semibold text-sm sm:text-base`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </motion.div>

                  <p className="text-center text-xs text-gray-500 mt-3 sm:mt-4">
                    *Prices may vary based on location and specific requirements
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Items Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Additional Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Enhance your event with our premium add-on services and create an unforgettable experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {additionalItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-32 sm:h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/menu-display.png"
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{item.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-yellow-600">{item.price}</span>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      onClick={() => handleAddAdditionalItemToCart(item, index)}
                      className={`${
                        addedItems.includes(index)
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-black hover:bg-yellow-500"
                      } transition-all duration-300 text-xs sm:text-sm`}
                      disabled={addedItems.includes(index)}
                    >
                      {addedItems.includes(index) ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3 mr-1" />
                          Add
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/**
 * ENHANCED ORDER PAGE COMPONENT
 *
 * This is the main ordering interface that provides three ways to order:
 * 1. Individual Menu Items - Browse and order specific dishes
 * 2. Pre-made Packages - Choose from Silver, Gold, Platinum packages
 * 3. Custom Package Builder - Create your own package step by step
 *
 * Features:
 * - Tab-based navigation between ordering methods
 * - Animated menu cards with hover effects
 * - Real-time pricing calculations
 * - Integration with Order Modal for checkout
 * - Responsive design for all devices
 */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Package, Wand2, Star, Clock, Users, Flame, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomPackageBuilder from "./CustomPackageBuilder"
import Image from "next/image"
import { useCart } from "./CartProvider"

// Menu items data - organized by category
const menuItems = {
  appetizers: [
    {
      id: "chicken-tikka",
      name: "Chicken Tikka Boti",
      price: 180,
      originalPrice: 220, // Shows discount
      image: "/images/menu-display.png",
      description: "Tender marinated chicken pieces grilled to perfection with aromatic spices",
      category: "appetizers",
      spiceLevel: 3, // 1-5 scale
      isVegetarian: false,
      isPopular: true, // Shows "Popular" badge
      preparationTime: "25 mins",
      servingSize: "6-8 pieces",
    },
    {
      id: "seekh-kebab",
      name: "Seekh Kebab Premium",
      price: 150,
      image: "/images/eid-special.png",
      description: "Hand-rolled spiced ground meat skewers with fresh herbs",
      category: "appetizers",
      spiceLevel: 2,
      isVegetarian: false,
      preparationTime: "20 mins",
      servingSize: "4 pieces",
    },
    {
      id: "samosas",
      name: "Samosa Chaat Special",
      price: 100,
      image: "/images/food-display.jpeg",
      description: "Crispy samosas topped with yogurt, chutneys, and fresh herbs",
      category: "appetizers",
      spiceLevel: 2,
      isVegetarian: true,
      isPopular: true,
      preparationTime: "15 mins",
      servingSize: "4 pieces",
    },
  ],
  mains: [
    {
      id: "chicken-biryani",
      name: "Chicken Biryani Hyderabadi",
      price: 350,
      originalPrice: 400,
      image: "/images/hero-food.jpeg",
      description: "Aromatic basmati rice layered with tender chicken and traditional spices",
      category: "mains",
      spiceLevel: 3,
      isVegetarian: false,
      isPopular: true,
      preparationTime: "45 mins",
      servingSize: "1 person",
    },
    {
      id: "mutton-karahi",
      name: "Mutton Karahi Premium",
      price: 550,
      image: "/images/menu-display.png",
      description: "Traditional mutton curry cooked in tomato base with fresh ginger",
      category: "mains",
      spiceLevel: 4,
      isVegetarian: false,
      preparationTime: "60 mins",
      servingSize: "2-3 people",
    },
  ],
  desserts: [
    {
      id: "gulab-jamun",
      name: "Gulab Jamun Premium",
      price: 80,
      image: "/images/food-display.jpeg",
      description: "Soft milk dumplings soaked in cardamom-flavored sugar syrup",
      category: "desserts",
      spiceLevel: 0, // Desserts have no spice
      isVegetarian: true,
      isPopular: true,
      preparationTime: "5 mins",
      servingSize: "2 pieces",
    },
  ],
}

// Pre-made package options
const packages = [
  {
    id: "silver",
    name: "Silver Package",
    price: 1200, // Per person
    originalPrice: 1500,
    description: "Perfect for intimate gatherings and small events",
    image: "/images/catering-service.png",
    features: [
      "5 Appetizer varieties",
      "3 Main course options",
      "2 Dessert selections",
      "Welcome drinks included",
      "Basic table setup",
      "Professional service staff",
      "4-hour event coverage",
    ],
    popular: false,
    minGuests: 25,
    maxGuests: 75,
  },
  {
    id: "gold",
    name: "Gold Package",
    price: 1800,
    originalPrice: 2200,
    description: "Our most popular choice for weddings and celebrations",
    image: "/images/hero-food.jpeg",
    features: [
      "8 Appetizer varieties",
      "5 Main course options",
      "3 Dessert selections",
      "Premium welcome cocktails",
      "Elegant table setup",
      "Live cooking stations",
      "6-hour event coverage",
      "Premium decoration package",
    ],
    popular: true, // This will be highlighted
    minGuests: 50,
    maxGuests: 200,
  },
  {
    id: "platinum",
    name: "Platinum Package",
    price: 2800,
    originalPrice: 3500,
    description: "Ultimate luxury experience for your most special occasions",
    image: "/images/food-display.jpeg",
    features: [
      "12 Appetizer varieties",
      "7 Main course options",
      "5 Dessert selections",
      "Premium bar service",
      "Luxury table settings",
      "Multiple live cooking stations",
      "8-hour event coverage",
      "Complete venue transformation",
    ],
    popular: false,
    minGuests: 100,
    maxGuests: 500,
  },
]

export default function EnhancedOrderPage() {
  // State management for the component
  const [selectedTab, setSelectedTab] = useState("menu") // Current active tab
  const { addToCart } = useCart()

  // Function to open order modal with either an item or package
  const handleAddToCart = (item: any) => {
    addToCart({
      id: Number.parseInt(item.id.replace(/\D/g, "") || Math.random() * 1000),
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  const handleAddPackageToCart = (pkg: any) => {
    addToCart({
      id: Number.parseInt(pkg.id.replace(/\D/g, "") || Math.random() * 1000),
      name: `${pkg.name} Package`,
      price: pkg.price,
      image: pkg.image,
      quantity: 1,
    })
  }

  // Helper function to display spice level as flame icons
  const getSpiceIcons = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame key={i} className={`w-3 h-3 ${i < level ? "text-red-500" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="menu" className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Menu Items
          </TabsTrigger>
          <TabsTrigger value="packages" className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Packages
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center gap-2">
            <Wand2 className="w-4 h-4" />
            Create Your Package
          </TabsTrigger>
        </TabsList>

        {/* MENU ITEMS TAB - Browse individual dishes */}
        <TabsContent value="menu" className="space-y-8">
          {Object.entries(menuItems).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Category Title */}
              <h2 className="text-3xl font-bold text-black capitalize">
                {category === "mains" ? "Main Courses" : category}
              </h2>

              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Item Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Badges (Popular, Vegetarian, Sale) */}
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

                      {/* Hover Overlay with Quick Info */}
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

                    {/* Item Details */}
                    <div className="p-6">
                      {/* Name and Price */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-yellow-600">Rs. {item.price}</div>
                          {item.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">Rs. {item.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                      {/* Spice Level and Category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Spice Level:</span>
                          <div className="flex gap-1">{getSpiceIcons(item.spiceLevel)}</div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>

                      {/* Order Button */}
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={() => handleAddToCart(item)}
                          className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 group/btn"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                          Add to Cart
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </TabsContent>

        {/* PACKAGES TAB - Pre-made catering packages */}
        <TabsContent value="packages" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Choose Your Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our carefully designed packages or customize one to fit your needs perfectly.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? "border-4 border-yellow-400 transform scale-105" : "border border-gray-200"
                }`}
                whileHover={{ y: -10 }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-b-lg font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save Rs. {pkg.originalPrice - pkg.price}
                  </div>
                )}

                {/* Package Image */}
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>

                <div className="p-6">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-black">Rs. {pkg.price}</span>
                      <span className="text-gray-600">per person</span>
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-gray-500 line-through text-lg">Rs. {pkg.originalPrice}</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>
                        {pkg.minGuests}-{pkg.maxGuests} guests
                      </span>
                    </div>
                  </div>

                  {/* Package Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                          <motion.div
                            className="w-2 h-2 bg-black rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                          />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Order Package Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleAddPackageToCart(pkg)}
                      className={`w-full py-3 font-semibold ${
                        pkg.popular
                          ? "bg-yellow-400 text-black hover:bg-yellow-500"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* CUSTOM PACKAGE TAB - Build your own package */}
        <TabsContent value="custom" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Create Your Custom Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Build your perfect catering package by selecting items from each category. See real-time pricing as you
              customize your order.
            </p>
          </div>

          {/* Custom Package Builder Component */}
          <CustomPackageBuilder />
        </TabsContent>
      </Tabs>
    </div>
  )
}

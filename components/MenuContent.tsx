"use client"
import { motion } from "framer-motion"
import { ShoppingCart, Clock, Users, Flame, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useCart } from "./CartProvider"
import UnifiedHero from "./UnifiedHero"

// Organized menu data by categories
const menuData = {
  biryani: [
    {
      id: 1,
      name: "Chicken Biryani Hyderabadi",
      price: 350,
      originalPrice: 400,
      image: "/images/hero-food.jpeg",
      description: "Aromatic basmati rice layered with tender chicken and traditional spices",
      spiceLevel: 3,
      isPopular: true,
      rating: 4.8,
      prepTime: "45 mins",
      serves: "1 person",
    },
    {
      id: 2,
      name: "Mutton Biryani Special",
      price: 450,
      image: "/images/menu-display.png",
      description: "Premium mutton pieces cooked with fragrant basmati rice and aromatic spices",
      spiceLevel: 3,
      isPopular: true,
      rating: 4.9,
      prepTime: "60 mins",
      serves: "1 person",
    },
    {
      id: 3,
      name: "Vegetable Biryani",
      price: 250,
      image: "/images/food-display.jpeg",
      description: "Mixed vegetables and paneer cooked with aromatic rice and traditional spices",
      spiceLevel: 2,
      isVeg: true,
      rating: 4.6,
      prepTime: "40 mins",
      serves: "1 person",
    },
    {
      id: 4,
      name: "Beef Pulao",
      price: 280,
      image: "/images/eid-special.png",
      description: "Fragrant rice cooked with tender beef pieces and aromatic spices",
      spiceLevel: 2,
      rating: 4.5,
      prepTime: "50 mins",
      serves: "1 person",
    },
  ],
  bbq: [
    {
      id: 5,
      name: "Chicken Tikka Boti",
      price: 180,
      originalPrice: 220,
      image: "/images/menu-display.png",
      description: "Tender marinated chicken pieces grilled to perfection",
      spiceLevel: 3,
      isPopular: true,
      rating: 4.7,
      prepTime: "25 mins",
      serves: "6-8 pieces",
    },
    {
      id: 6,
      name: "Seekh Kebab Premium",
      price: 150,
      image: "/images/eid-special.png",
      description: "Hand-rolled spiced ground meat skewers with fresh herbs",
      spiceLevel: 2,
      rating: 4.8,
      prepTime: "20 mins",
      serves: "4 pieces",
    },
    {
      id: 7,
      name: "Chicken Malai Boti",
      price: 200,
      image: "/images/hero-food.jpeg",
      description: "Creamy marinated chicken pieces grilled with mild spices",
      spiceLevel: 1,
      isPopular: true,
      rating: 4.6,
      prepTime: "30 mins",
      serves: "6 pieces",
    },
    {
      id: 8,
      name: "Beef Seekh Kebab",
      price: 170,
      image: "/images/food-display.jpeg",
      description: "Spiced ground beef skewers grilled over charcoal",
      spiceLevel: 3,
      rating: 4.5,
      prepTime: "25 mins",
      serves: "4 pieces",
    },
  ],
  curries: [
    {
      id: 9,
      name: "Mutton Karahi Special",
      price: 450,
      image: "/images/menu-display.png",
      description: "Traditional mutton curry cooked in tomato base with fresh ginger",
      spiceLevel: 4,
      isPopular: true,
      rating: 4.9,
      prepTime: "60 mins",
      serves: "2-3 people",
    },
    {
      id: 10,
      name: "Chicken Tikka Masala",
      price: 320,
      image: "/images/hero-food.jpeg",
      description: "Grilled chicken in rich tomato and cream sauce",
      spiceLevel: 3,
      rating: 4.7,
      prepTime: "35 mins",
      serves: "2 people",
    },
    {
      id: 11,
      name: "Dal Makhani",
      price: 200,
      image: "/images/food-display.jpeg",
      description: "Creamy black lentils slow-cooked with butter and spices",
      spiceLevel: 1,
      isVeg: true,
      rating: 4.7,
      prepTime: "30 mins",
      serves: "2-3 people",
    },
    {
      id: 12,
      name: "Fish Curry Deluxe",
      price: 380,
      image: "/images/eid-special.png",
      description: "Fresh fish cooked in rich coconut curry with traditional spices",
      spiceLevel: 3,
      rating: 4.6,
      prepTime: "35 mins",
      serves: "2 people",
    },
  ],
  salads: [
    {
      id: 13,
      name: "Garden Fresh Salad",
      price: 120,
      image: "/images/food-display.jpeg",
      description: "Mixed greens with cucumber, tomatoes, and house dressing",
      spiceLevel: 0,
      isVeg: true,
      rating: 4.4,
      prepTime: "10 mins",
      serves: "2 people",
    },
    {
      id: 14,
      name: "Chicken Caesar Salad",
      price: 180,
      image: "/images/menu-display.png",
      description: "Grilled chicken with romaine lettuce and caesar dressing",
      spiceLevel: 0,
      rating: 4.5,
      prepTime: "15 mins",
      serves: "1 person",
    },
    {
      id: 15,
      name: "Mediterranean Salad",
      price: 150,
      image: "/images/hero-food.jpeg",
      description: "Olives, feta cheese, tomatoes with olive oil dressing",
      spiceLevel: 0,
      isVeg: true,
      rating: 4.3,
      prepTime: "10 mins",
      serves: "2 people",
    },
  ],
  desserts: [
    {
      id: 16,
      name: "Gulab Jamun Premium",
      price: 80,
      image: "/images/food-display.jpeg",
      description: "Soft milk dumplings soaked in cardamom-flavored sugar syrup",
      spiceLevel: 0,
      isVeg: true,
      isPopular: true,
      rating: 4.9,
      prepTime: "15 mins",
      serves: "2 pieces",
    },
    {
      id: 17,
      name: "Traditional Kheer",
      price: 120,
      image: "/images/hero-food.jpeg",
      description: "Creamy rice pudding garnished with nuts and cardamom",
      spiceLevel: 0,
      isVeg: true,
      rating: 4.6,
      prepTime: "10 mins",
      serves: "1 bowl",
    },
    {
      id: 18,
      name: "Ras Malai Special",
      price: 150,
      image: "/images/menu-display.png",
      description: "Soft cottage cheese dumplings in sweetened milk with pistachios",
      spiceLevel: 0,
      isVeg: true,
      rating: 4.7,
      prepTime: "8 mins",
      serves: "3 pieces",
    },
    {
      id: 19,
      name: "Chocolate Lava Cake",
      price: 180,
      image: "/images/eid-special.png",
      description: "Warm chocolate cake with molten center served with vanilla ice cream",
      spiceLevel: 0,
      isVeg: true,
      rating: 4.5,
      prepTime: "12 mins",
      serves: "1 piece",
    },
  ],
}

const categoryTitles = {
  biryani: "Biryani & Rice Dishes",
  bbq: "BBQ & Grilled Items",
  curries: "Curries & Main Courses",
  salads: "Fresh Salads",
  desserts: "Desserts & Sweets",
}

export default function MenuContent() {
  const { addToCart } = useCart()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  const getSpiceIcons = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame key={i} className={`w-3 h-3 ${i < level ? "text-red-500" : "text-gray-300"}`} />
    ))
  }

  const heroStats = [
    { number: "20+", label: "Menu Items" },
    { number: "5", label: "Categories" },
    { number: "4.7", label: "Average Rating" },
  ]

  return (
    <>
      {/* Unified Hero Section */}
      <UnifiedHero
        title="Our Menu"
        subtitle="Discover our delicious selection of Pakistani and international cuisine"
        highlightWord="Menu"
        stats={heroStats}
      />

      {/* Menu Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {Object.entries(menuData).map(([categoryKey, items], categoryIndex) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              {/* Category Heading */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {categoryTitles[categoryKey as keyof typeof categoryTitles]}
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {item.isPopular && (
                          <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        {item.originalPrice && (
                          <Badge variant="destructive" className="bg-red-500">
                            Sale
                          </Badge>
                        )}
                        {item.isVeg && <Badge className="bg-green-500 text-white">Veg</Badge>}
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {item.rating}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-between text-white text-sm bg-black/70 rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{item.prepTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{item.serves}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="p-6">
                      {/* Name and Price */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-black group-hover:text-yellow-600 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-xl font-bold text-yellow-600">Rs. {item.price}</div>
                          {item.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">Rs. {item.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                      {/* Spice Level */}
                      {item.spiceLevel > 0 && (
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs text-gray-500">Spice Level:</span>
                          <div className="flex gap-1">{getSpiceIcons(item.spiceLevel)}</div>
                        </div>
                      )}

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
        </div>
      </section>
    </>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const cuisineTypes = [
  "All",
  "Pakistani",
  "Chinese",
  "Italian",
  "American",
  "Mediterranean",
  "Thai",
  "Japanese",
  "European",
  "International",
]

const dietaryOptions = ["All", "Vegetarian", "Non-Vegetarian", "Spicy", "Mild"]

export default function MenuFilters() {
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const [selectedDietary, setSelectedDietary] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Cuisine Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Cuisine:</span>
            <div className="flex flex-wrap gap-2">
              {cuisineTypes.map((cuisine) => (
                <Button
                  key={cuisine}
                  variant={selectedCuisine === cuisine ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`${
                    selectedCuisine === cuisine ? "bg-yellow-400 text-black hover:bg-yellow-500" : "hover:bg-yellow-50"
                  }`}
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          </div>

          {/* Dietary Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Diet:</span>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((option) => (
                <Button
                  key={option}
                  variant={selectedDietary === option ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDietary(option)}
                  className={`${
                    selectedDietary === option ? "bg-yellow-400 text-black hover:bg-yellow-500" : "hover:bg-yellow-50"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

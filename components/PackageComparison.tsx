"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface Package {
  name: string
  price: string
  features: string[]
  popular: boolean
}

interface PackageComparisonProps {
  packages: Package[]
}

const comparisonFeatures = [
  "Appetizer Varieties",
  "Main Course Options",
  "Dessert Selections",
  "Welcome Drinks",
  "Live Cooking Stations",
  "Event Coverage Hours",
  "Decoration Package",
  "Event Manager",
  "Photography Assistance",
  "Audio System",
  "Floral Arrangements",
  "Bar Service",
  "Valet Parking",
  "Custom Menu Creation",
  "Post-event Cleanup",
]

export default function PackageComparison({ packages }: PackageComparisonProps) {
  const getFeatureValue = (packageName: string, feature: string) => {
    // This would typically come from your data structure
    // For demo purposes, I'm creating a mapping
    const featureMap: Record<string, Record<string, string | boolean>> = {
      "Essential Package": {
        "Appetizer Varieties": "5",
        "Main Course Options": "3",
        "Dessert Selections": "2",
        "Welcome Drinks": true,
        "Live Cooking Stations": false,
        "Event Coverage Hours": "4",
        "Decoration Package": "Basic",
        "Event Manager": false,
        "Photography Assistance": false,
        "Audio System": false,
        "Floral Arrangements": false,
        "Bar Service": false,
        "Valet Parking": false,
        "Custom Menu Creation": false,
        "Post-event Cleanup": true,
      },
      "Premium Package": {
        "Appetizer Varieties": "8",
        "Main Course Options": "5",
        "Dessert Selections": "3",
        "Welcome Drinks": true,
        "Live Cooking Stations": true,
        "Event Coverage Hours": "6",
        "Decoration Package": "Premium",
        "Event Manager": true,
        "Photography Assistance": true,
        "Audio System": true,
        "Floral Arrangements": true,
        "Bar Service": false,
        "Valet Parking": false,
        "Custom Menu Creation": false,
        "Post-event Cleanup": true,
      },
      "Luxury Package": {
        "Appetizer Varieties": "12",
        "Main Course Options": "7",
        "Dessert Selections": "5",
        "Welcome Drinks": true,
        "Live Cooking Stations": true,
        "Event Coverage Hours": "8",
        "Decoration Package": "Luxury",
        "Event Manager": true,
        "Photography Assistance": true,
        "Audio System": true,
        "Floral Arrangements": true,
        "Bar Service": true,
        "Valet Parking": true,
        "Custom Menu Creation": true,
        "Post-event Cleanup": true,
      },
    }

    return featureMap[packageName]?.[feature] || false
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black mb-4">Package Comparison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare our packages side by side to find the perfect fit for your event
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-6 font-semibold text-gray-800">Features</th>
                {packages.map((pkg, index) => (
                  <th key={index} className="text-center p-6">
                    <div className={`${pkg.popular ? "bg-yellow-400" : "bg-gray-200"} rounded-lg p-4`}>
                      <div className="font-bold text-lg">{pkg.name}</div>
                      <div className="text-2xl font-bold mt-2">{pkg.price}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="p-4 font-medium text-gray-700">{feature}</td>
                  {packages.map((pkg, pkgIndex) => {
                    const value = getFeatureValue(pkg.name, feature)
                    return (
                      <td key={pkgIndex} className="p-4 text-center">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-gray-800">{value}</span>
                        )}
                      </td>
                    )
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

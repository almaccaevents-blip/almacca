import type { Metadata } from "next"
import PackagePageContent from "@/components/PackagePageContent"

export const metadata: Metadata = {
  title: "Farmhouse Packages - Al-Macca Caterers",
  description:
    "Outdoor farmhouse dining experiences with BBQ specialties and rustic ambiance for memorable gatherings.",
}

const packages = [
  {
    id: "farmhouse-basic",
    name: "Farmhouse Basic Package",
    price: 1500,
    originalPrice: 1700,
    description: "Authentic outdoor farmhouse dining experience with traditional BBQ and rustic charm",
    features: [
      "Outdoor BBQ Grill Setup & Live Cooking",
      "Traditional Pakistani Cuisine & Specialties",
      "Rustic Farmhouse Ambiance & Decoration",
      "Bonfire Arrangement & Setup",
      "Comfortable Outdoor Seating (Charpoys & Tables)",
      "Live Cooking Display & Chef Interaction",
      "Traditional Music & Folk Entertainment",
      "Fresh Naan & Tandoor Bread Station",
    ],
    minGuests: 80,
    maxGuests: 150,
    popular: false,
  },
  {
    id: "farmhouse-deluxe",
    name: "Farmhouse Deluxe Package",
    price: 2200,
    originalPrice: 2500,
    description: "Premium farmhouse experience with luxury amenities and international cuisine options",
    features: [
      "Premium BBQ & Grill Station with Multiple Meats",
      "International & Pakistani Cuisine Fusion",
      "Luxury Outdoor Setup with Premium Furniture",
      "Professional Entertainment & Live Music",
      "Premium Beverage Bar Setup (Non-Alcoholic)",
      "Outdoor Games & Activities (Cricket, Volleyball)",
      "Professional Photography & Videography",
      "Transportation Assistance & Coordination",
      "Starlight Decoration & Ambient Lighting",
      "Complimentary Hookah Corner",
    ],
    minGuests: 150,
    maxGuests: 300,
    popular: true,
  },
]

const additionalItems = [
  {
    id: 1,
    name: "Horse Riding Experience",
    price: "Rs. 300",
    numericPrice: 300,
    description: "Guided horse riding sessions for guests",
  },
  {
    id: 2,
    name: "Camel Ride Setup",
    price: "Rs. 400",
    numericPrice: 400,
    description: "Traditional camel rides for authentic experience",
  },
  {
    id: 3,
    name: "Outdoor Cinema Setup",
    price: "Rs. 600",
    numericPrice: 600,
    description: "Large screen movie setup under the stars",
  },
  {
    id: 4,
    name: "Traditional Games Package",
    price: "Rs. 200",
    numericPrice: 200,
    description: "Kabaddi, tug of war, and traditional sports",
  },
  {
    id: 5,
    name: "Premium Hookah Corner",
    price: "Rs. 150",
    numericPrice: 150,
    description: "Multiple flavored hookah setup with seating",
  },
  {
    id: 6,
    name: "Bonfire & Marshmallow",
    price: "Rs. 100",
    numericPrice: 100,
    description: "Evening bonfire with marshmallow roasting",
  },
  {
    id: 7,
    name: "Folk Dance Performance",
    price: "Rs. 500",
    numericPrice: 500,
    description: "Traditional Punjabi folk dance entertainment",
  },
  {
    id: 8,
    name: "Tractor Ride Experience",
    price: "Rs. 250",
    numericPrice: 250,
    description: "Fun tractor rides around the farmhouse",
  },
]

export default function FarmhousePage() {
  return (
    <PackagePageContent
      title="Farmhouse Packages"
      subtitle="Experience authentic outdoor dining with BBQ specialties and rustic farmhouse charm"
      packages={packages}
      additionalItems={additionalItems}
      highlightWord="Farmhouse"
    />
  )
}

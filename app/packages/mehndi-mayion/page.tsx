import type { Metadata } from "next"
import PackagePageContent from "@/components/PackagePageContent"

export const metadata: Metadata = {
  title: "Mehndi & Mayion Packages - Al-Macca Caterers",
  description:
    "Traditional mehndi and mayion celebration packages with authentic Pakistani cuisine and professional service.",
}

const packages = [
  {
    id: "mehndi-basic",
    name: "Mehndi Basic Package",
    price: 1200,
    originalPrice: 1400,
    description: "Perfect for intimate mehndi celebrations with traditional flavors",
    features: [
      "Traditional Henna Ceremony Setup",
      "Authentic Pakistani Cuisine (Biryani, Karahi, BBQ)",
      "Decorative Lighting & Ambiance",
      "Professional Music System",
      "Experienced Service Staff",
      "Traditional Sweets & Desserts Counter",
      "Welcome Drinks for Guests",
      "Basic Photography Assistance",
    ],
    minGuests: 50,
    maxGuests: 100,
    popular: false,
  },
  {
    id: "mehndi-premium",
    name: "Mehndi Premium Package",
    price: 1800,
    originalPrice: 2100,
    description: "Luxurious mehndi celebration with premium amenities and gourmet cuisine",
    features: [
      "Premium Professional Henna Artists",
      "Gourmet Pakistani & Continental Cuisine",
      "Elegant Floral Decorations & Stage Setup",
      "Professional Photography & Videography",
      "Live Traditional Music Performance",
      "Premium Dessert & Mithai Counter",
      "VIP Guest Seating Arrangements",
      "Bridal Room Setup & Assistance",
      "Complimentary Mehndi Favors",
    ],
    minGuests: 100,
    maxGuests: 200,
    popular: true,
  },
]

const additionalItems = [
  {
    id: 1,
    name: "Premium Henna Artists",
    price: "Rs. 150",
    numericPrice: 150,
    description: "Professional henna artists for intricate designs",
  },
  {
    id: 2,
    name: "Live Dhol Performance",
    price: "Rs. 300",
    numericPrice: 300,
    description: "Traditional dhol players for authentic celebration",
  },
  {
    id: 3,
    name: "Flower Jewelry Making",
    price: "Rs. 200",
    numericPrice: 200,
    description: "Fresh flower jewelry station for guests",
  },
  {
    id: 4,
    name: "Traditional Games Setup",
    price: "Rs. 100",
    numericPrice: 100,
    description: "Fun traditional games and activities",
  },
  {
    id: 5,
    name: "Premium Seating Upgrade",
    price: "Rs. 80",
    numericPrice: 80,
    description: "Luxury cushions and low seating arrangements",
  },
  {
    id: 6,
    name: "Extended Photography",
    price: "Rs. 500",
    numericPrice: 500,
    description: "Additional 2 hours of professional photography",
  },
]

export default function MehndiMayionPage() {
  return (
    <PackagePageContent
      title="Mehndi & Mayion Packages"
      subtitle="Traditional celebrations with authentic Pakistani flavors and cultural elegance"
      packages={packages}
      additionalItems={additionalItems}
      highlightWord="Mehndi"
    />
  )
}

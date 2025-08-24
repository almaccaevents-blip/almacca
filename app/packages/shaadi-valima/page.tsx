import type { Metadata } from "next"
import PackagePageContent from "@/components/PackagePageContent"

export const metadata: Metadata = {
  title: "Shaadi & Valima Packages - Al-Macca Caterers",
  description:
    "Premium wedding and valima packages with multi-course cuisine and luxury amenities for your special day.",
}

const packages = [
  {
    id: "shaadi-classic",
    name: "Shaadi Classic Package",
    price: 2500,
    originalPrice: 2800,
    description: "Traditional wedding package with authentic Pakistani cuisine and elegant setup",
    features: [
      "Multi-Course Pakistani Cuisine (Appetizers, Main Course, Desserts)",
      "Elegant Wedding Stage & Backdrop Decoration",
      "Professional Service Team & Coordination",
      "Traditional Music System & Sound Setup",
      "Bridal Room Setup & Assistance",
      "Welcome Drinks & Refreshments",
      "Photography Area Setup",
      "Guest Seating Arrangements",
      "Complimentary Bridal Bouquet",
    ],
    minGuests: 200,
    maxGuests: 400,
    popular: true,
  },
  {
    id: "valima-royal",
    name: "Valima Royal Package",
    price: 3200,
    originalPrice: 3600,
    description: "Royal valima celebration with premium international cuisine and luxury amenities",
    features: [
      "International & Pakistani Gourmet Cuisine",
      "Luxury Stage Setup & Premium Backdrop",
      "Premium Floral Arrangements & Centerpieces",
      "Live Cooking Stations (Pasta, BBQ, Chaat)",
      "Professional Photography & Videography",
      "VIP Guest Services & Concierge",
      "Premium Dessert Buffet & Ice Cream Station",
      "Complimentary Bridal Suite Access",
      "Red Carpet Entry Setup",
      "Premium Bar Setup (Non-Alcoholic)",
    ],
    minGuests: 300,
    maxGuests: 600,
    popular: false,
  },
]

const additionalItems = [
  {
    id: 1,
    name: "Live Cooking Station",
    price: "Rs. 400",
    numericPrice: 400,
    description: "Chef preparing fresh dishes in front of guests",
  },
  {
    id: 2,
    name: "Premium Floral Upgrade",
    price: "Rs. 600",
    numericPrice: 600,
    description: "Luxury flower arrangements and centerpieces",
  },
  {
    id: 3,
    name: "Extended Photography",
    price: "Rs. 800",
    numericPrice: 800,
    description: "Full day photography with edited album",
  },
  {
    id: 4,
    name: "Bridal Car Decoration",
    price: "Rs. 250",
    numericPrice: 250,
    description: "Beautiful car decoration for the couple",
  },
  {
    id: 5,
    name: "Guest Welcome Favors",
    price: "Rs. 120",
    numericPrice: 120,
    description: "Personalized welcome gifts for guests",
  },
  {
    id: 6,
    name: "Premium Sound System",
    price: "Rs. 350",
    numericPrice: 350,
    description: "High-quality audio system with microphones",
  },
  {
    id: 7,
    name: "Ice Sculpture Display",
    price: "Rs. 500",
    numericPrice: 500,
    description: "Custom ice sculpture centerpiece",
  },
  {
    id: 8,
    name: "Fireworks Display",
    price: "Rs. 1000",
    numericPrice: 1000,
    description: "Professional fireworks show for grand finale",
  },
]

export default function ShaadiValimaPage() {
  return (
    <PackagePageContent
      title="Shaadi & Valima Packages"
      subtitle="Make your wedding day unforgettable with our premium catering and luxury services"
      packages={packages}
      additionalItems={additionalItems}
      highlightWord="Wedding"
    />
  )
}

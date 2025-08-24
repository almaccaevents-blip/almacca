import type { Metadata } from "next"
import EnhancedOrderPage from "@/components/EnhancedOrderPage"
import UnifiedHero from "@/components/UnifiedHero"

export const metadata: Metadata = {
  title: "Online Order - Al-Macca Caterers & Event Planner",
  description: "Place your catering order online with our easy-to-use order system.",
}

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white">
       {/* Unified Hero Section */}
            <UnifiedHero
              title="Order"
              subtitle="Crafting memorable experiences through exceptional cuisine and professional service since 2010"
              highlightWord=" Now"
              
            />
      {/* Hero Section */}
      {/* <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Online <span className="text-yellow-400">Order</span>
            </h1>
            <p className="text-xl text-gray-300">Choose from our menu, packages, or create your own custom package</p>
          </div>
        </div>
      </section> */}

      {/* Enhanced Order System */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <EnhancedOrderPage />
        </div>
      </section>
    </div>
  )
}

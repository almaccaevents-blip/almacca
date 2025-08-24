import type { Metadata } from "next"
import { Clock, Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Special Offers - Al-Macca Caterers & Event Planner",
  description: "Check out our seasonal offers and limited-time deals on catering packages.",
}

const offers = [
  {
    title: "Early Bird Wedding Package",
    discount: "20% OFF",
    description: "Book your wedding catering 6 months in advance and save big!",
    validUntil: "Valid until March 31, 2024",
    features: ["Complete wedding menu", "Decoration included", "Free consultation", "Complimentary cake"],
    icon: <Gift className="w-8 h-8" />,
  },
  {
    title: "Corporate Lunch Deal",
    discount: "15% OFF",
    description: "Special rates for corporate events and office lunches.",
    validUntil: "Valid for bookings above 50 people",
    features: ["Buffet setup", "Professional service", "Flexible timing", "Custom menu options"],
    icon: <Star className="w-8 h-8" />,
  },
  {
    title: "Weekend Special",
    discount: "10% OFF",
    description: "Weekend party packages at discounted rates.",
    validUntil: "Valid for Saturday & Sunday events",
    features: ["Party decorations", "Music system", "Extended service hours", "Free delivery"],
    icon: <Clock className="w-8 h-8" />,
  },
]

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Special <span className="text-yellow-400">Offers</span>
            </h1>
            <p className="text-xl text-gray-300">Don't miss out on our limited-time deals and seasonal packages</p>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white border-2 border-yellow-400 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-yellow-400 text-black p-3 rounded-full">{offer.icon}</div>
                  <span className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold">{offer.discount}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-sm text-yellow-600 font-semibold mb-4">{offer.validUntil}</p>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800">Claim Offer</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Book?</h2>
          <p className="text-black mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your event requirements and take advantage of our special offers.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Contact Us Now</Button>
        </div>
      </section>
    </div>
  )
}

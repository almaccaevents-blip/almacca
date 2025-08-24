import type { Metadata } from "next"
import { Users, Building, Heart, Utensils, Calendar, MapPin } from "lucide-react"
import UnifiedHero from "@/components/UnifiedHero"

export const metadata: Metadata = {
  title: "Catering Services - Al-Macca Caterers & Event Planner | Professional Event Catering",
  description:
    "Comprehensive catering and event planning services for weddings, corporate events, and special occasions. Professional service since 2010.",
  keywords: ["catering services", "event planning", "wedding catering", "corporate catering", "party catering"],
}

const services = [
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our comprehensive wedding catering services.",
    features: ["Bridal menu tasting", "Custom wedding cakes", "Elegant presentation", "Full-day service"],
  },
  {
    icon: <Building className="w-12 h-12" />,
    title: "Corporate Events",
    description: "Professional catering for business meetings, conferences, and corporate celebrations.",
    features: ["Business lunch packages", "Conference catering", "Office parties", "Product launches"],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Private Parties",
    description: "Celebrate life's special moments with our personalized party catering services.",
    features: ["Birthday parties", "Anniversary celebrations", "Family gatherings", "Holiday parties"],
  },
  {
    icon: <Utensils className="w-12 h-12" />,
    title: "Buffet Services",
    description: "Extensive buffet setups with a wide variety of dishes for large gatherings.",
    features: ["Live cooking stations", "International cuisine", "Dietary accommodations", "Professional setup"],
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Event Planning",
    description: "Complete event planning and coordination services for stress-free celebrations.",
    features: ["Venue selection", "Decoration services", "Timeline management", "Vendor coordination"],
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Outdoor Catering",
    description: "Specialized outdoor catering for picnics, festivals, and open-air events.",
    features: ["Mobile kitchen setup", "Weather-resistant service", "Portable equipment", "Flexible locations"],
  },
]

export default function ServicesPage() {
  const heroStats = [
    { number: "6", label: "Service Categories" },
    { number: "500+", label: "Events Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Unified Hero Section */}
      <UnifiedHero
        title="Our Services"
        subtitle="Comprehensive catering and event planning solutions for every occasion"
        highlightWord="Services"
        stats={heroStats}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your event requirements and preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Custom menu creation and event timeline development</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Preparation</h3>
              <p className="text-gray-600">Fresh ingredient sourcing and professional cooking</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">Flawless service delivery on your special day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

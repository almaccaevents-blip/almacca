import { Heart, Building, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our comprehensive wedding catering services.",
  },
  {
    icon: <Building className="w-12 h-12" />,
    title: "Corporate Events",
    description: "Professional catering for business meetings, conferences, and corporate celebrations.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Private Parties",
    description: "Celebrate life's special moments with our personalized party catering services.",
  },
  {
    icon: <Utensils className="w-12 h-12" />,
    title: "Buffet Services",
    description: "Extensive buffet setups with a wide variety of dishes for large gatherings.",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive catering and event planning services to make your occasions memorable and
            stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">View All Services</Button>
        </div>
      </div>
    </section>
  )
}

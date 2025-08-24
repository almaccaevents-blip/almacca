import type { Metadata } from "next"
import Image from "next/image"
import { Users, Award, Clock, Heart } from "lucide-react"
import UnifiedHero from "@/components/UnifiedHero"

export const metadata: Metadata = {
  title: "About Us - Al-Macca Caterers & Event Planner | Serving Since 2010",
  description:
    "Learn about Al-Macca Caterers' story, mission, and commitment to providing exceptional catering services across Pakistan since 2010.",
  keywords: [
    "about al-macca caterers",
    "catering company history",
    "professional catering team",
    "event planning services",
  ],
}

export default function AboutPage() {
  const heroStats = [
    { number: "500+", label: "Events Catered" },
    { number: "14+", label: "Years Experience" },
    { number: "5.0", label: "Customer Rating" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Unified Hero Section */}
      <UnifiedHero
        title="About Al-Macca"
        subtitle="Crafting memorable experiences through exceptional cuisine and professional service since 2010"
        highlightWord="Al-Macca"
        stats={heroStats}
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 with a passion for culinary excellence, Al-Macca Caterers & Event Planner has been
                serving the community with authentic flavors and professional service for over a decade.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small family business has grown into one of the most trusted catering services in the
                region, known for our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                We believe that food brings people together, and every event is an opportunity to create lasting
                memories through exceptional cuisine and impeccable service.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/food-display.jpeg"
                alt="Al-Macca kitchen team preparing food"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our top priority in everything we do.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">We use only the finest ingredients and maintain the highest standards.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
              <p className="text-gray-600">Punctuality and reliability you can count on for your events.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">We pour our heart into every dish and every event we cater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="Chef Ahmad - Head Chef"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chef Ahmad</h3>
              <p className="text-yellow-600 mb-2">Head Chef & Founder</p>
              <p className="text-gray-600">
                15+ years of culinary expertise specializing in traditional Pakistani and modern fusion cuisine.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="Sarah Khan - Event Manager"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Khan</h3>
              <p className="text-yellow-600 mb-2">Event Manager</p>
              <p className="text-gray-600">
                Expert in event coordination and ensuring seamless execution of your special occasions.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="Ali Hassan - Operations Manager"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ali Hassan</h3>
              <p className="text-yellow-600 mb-2">Operations Manager</p>
              <p className="text-gray-600">Ensures quality control and smooth operations across all our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Al-Macca made our wedding day absolutely perfect. The food was exceptional and the service was
                flawless."
              </p>
              <div className="font-semibold">- Fatima & Ahmed</div>
              <div className="text-sm text-gray-500">March 2024</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional service and delicious food. They handled our corporate event with complete
                professionalism."
              </p>
              <div className="font-semibold">- Tech Solutions Ltd.</div>
              <div className="text-sm text-gray-500">February 2024</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Amazing biryani and excellent customer service. Highly recommend for any special occasion."
              </p>
              <div className="font-semibold">- Zara Khan</div>
              <div className="text-sm text-gray-500">January 2024</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

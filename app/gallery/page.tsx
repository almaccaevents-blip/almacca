import type { Metadata } from "next"
import ImageGallery from "@/components/ImageGallery"
import UnifiedHero from "@/components/UnifiedHero"

export const metadata: Metadata = {
  title: "Events Gallery - Al-Macca Caterers & Event Planner",
  description: "Browse our gallery of successful events, weddings, and corporate functions.",
}

const galleryImages = [
  { src: "/images/hero-food.jpeg", alt: "Food Display", category: "Food" },
  { src: "/images/eid-special.png", alt: "Eid Special Menu", category: "Food" },
  { src: "/images/catering-service.png", alt: "Catering Service", category: "Services" },
  { src: "/images/book-daig.png", alt: "Book Your Daig", category: "Services" },
  { src: "/images/menu-display.png", alt: "Menu Display", category: "Food" },
  { src: "/images/food-display.jpeg", alt: "Food Presentation", category: "Food" },
  { src: "/images/hero-food.jpeg", alt: "Buffet Setup", category: "Setup" },
  { src: "/images/eid-special.png", alt: "Conference Lunch", category: "Corporate" },
  { src: "/images/food-display.jpeg", alt: "Garden Party", category: "Parties" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
          <div className="min-h-screen bg-white">
                {/* Unified Hero Section */}
                     <UnifiedHero
                       title="Gallery"
                       subtitle="Crafting memorable experiences through exceptional cuisine and professional service since 2010"
                      //  highlightWord=" Us"
                      
                       
                     /> 
      {/* Hero Section */}
      {/* <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events <span className="text-yellow-400">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300">Explore our portfolio of successful events and celebrations</p>
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ImageGallery images={galleryImages} />
        </div>
      </section>
    </div>
    </div>
  )
}

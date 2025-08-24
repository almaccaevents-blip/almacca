"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import Image from "next/image"

export default function CallToAction() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi Al-Macca Caterers! 👋\n\nI'm interested in your catering services. Could you please provide more information about:\n\n• Available packages\n• Pricing details\n• Booking process\n\nThank you!",
    )
    window.open(`https://wa.me/923001234567?text=${message}`, "_blank")
  }

  const handlePhoneCall = () => {
    window.open("tel:+923001234567", "_self")
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src="/images/catering-service.png" alt="Catering Service" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Make Your
              <span className="text-orange-400"> Event Unforgettable?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust Al-Macca Caterers for their special occasions. Let's
              create magical moments together!
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-white">Events Catered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-white">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5★</div>
              <div className="text-white">Average Rating</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </Button>

            <Button
              onClick={handlePhoneCall}
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-black hover:text-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </Button>

            <Button
              onClick={() => (window.location.href = "/packages")}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              View Packages
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-4">Trusted by leading organizations:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span className="text-lg font-semibold">Wedding Planners</span>
              <span className="text-lg font-semibold">Corporate Events</span>
              <span className="text-lg font-semibold">Private Parties</span>
              <span className="text-lg font-semibold">Religious Ceremonies</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

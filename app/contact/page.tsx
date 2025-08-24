/**
 * CONTACT PAGE WITH GOOGLE MAPS INTEGRATION
 *
 * Features:
 * - Embedded Google Map showing exact business location
 * - Contact form functionality
 * - Business hours and contact information
 * - Professional layout and design
 */

import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import UnifiedHero from "@/components/UnifiedHero"

export const metadata: Metadata = {
  title: "Contact Us - Al-Macca Caterers & Event Planner",
  description: "Get in touch with us for your catering needs. Find our location, contact details, and business hours.",
}

export default function ContactPage() {
  return (
    
    <div className="min-h-screen bg-white">
          {/* Unified Hero Section */}
               <UnifiedHero
                 title="Contact"
                 subtitle="Crafting memorable experiences through exceptional cuisine and professional service since 2010"
                 highlightWord=" Us"
                 
               /> 

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300">Get in touch with us for your catering and event planning needs</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Address</h3>
                    <p className="text-gray-600">
                      B-543, Block-13 Gulburg
                      <br />
                      Opposite Madina Bakery, Karachi
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">
                      0333-3227339
                      <br />
                      0335-3454808
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@almaccacaterers.com
                      <br />
                      orders@almaccacaterers.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:00 AM - 10:00 PM
                      <br />
                      24/7 for emergency catering
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h3 className="font-semibold text-black mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6441234567!2d67.0731!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sBlock%2013%20Gulberg%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Al-Macca Caterers Location"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-2">Click on the map to get directions to our location</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, ArrowUp, Twitter, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  // Control scroll to top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-amber-600"></div>

      {/* Main Content - Enhanced Mobile Layout */}
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info - Enhanced Mobile Layout */}
          <div className="animate-fadeInUp sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Al-Macca Caterers"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-yellow-400 shadow-lg"
              />
              <div className="ml-3">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Al-Macca</h3>
                <p className="text-yellow-300 text-xs sm:text-sm">Caterers & Event Planner</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Creating memorable experiences through exceptional cuisine and professional service for over a decade. We
              bring your vision to life with our culinary expertise.
            </p>

            <div className="p-3 sm:p-4 bg-black/50 rounded-lg border border-yellow-500/20">
              <h4 className="text-yellow-400 font-medium mb-2 text-sm sm:text-base">Business Hours</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Monday - Sunday: 9:00 AM - 10:00 PM</p>
              <p className="text-gray-300 text-xs sm:text-sm">Special Events: 24/7 by appointment</p>
            </div>
          </div>

          {/* Quick Links - Enhanced Mobile Layout */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-yellow-400 border-b border-yellow-500/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-300 hover:text-yellow-400 transition-colors hover-lift text-sm sm:text-base">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Enhanced Mobile Layout */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-yellow-400 border-b border-yellow-500/30 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-300 flex items-center text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                Wedding Catering
              </li>
              <li className="text-gray-300 flex items-center text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                Corporate Events
              </li>
              <li className="text-gray-300 flex items-center text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                Private Parties
              </li>
              <li className="text-gray-300 flex items-center text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                Event Planning
              </li>
              <li className="text-gray-300 flex items-center text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                Outdoor Catering
              </li>
              <li className="text-gray-300 flex items-center text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                Custom Menu Design
              </li>
            </ul>

            <div className="mt-4 sm:mt-6 p-3 bg-gradient-to-br from-yellow-500/10 to-amber-600/10 rounded-lg border border-yellow-500/20">
              <p className="text-yellow-400 text-xs sm:text-sm font-medium">Need a custom service?</p>
              <Link href="/contact" className="text-white text-xs sm:text-sm hover:text-yellow-200 transition-colors">
                Contact us for details →
              </Link>
            </div>
          </div>

          {/* Contact Info - Enhanced Mobile Layout */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-yellow-400 border-b border-yellow-500/30 pb-2">
              Contact Info
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start hover-lift">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">B-543, Block-13 Gulburg, Opposite Madina Bakery, Karachi</span>
              </div>

              <div className="flex items-center hover-lift">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" />
                <a href="tel:+923333227339" className="text-gray-300 text-xs sm:text-sm hover:text-yellow-400 transition-colors">
                  0333-3227339
                </a>
              </div>

              <div className="flex items-center hover-lift">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" />
                <a href="tel:+923353454808" className="text-gray-300 text-xs sm:text-sm hover:text-yellow-400 transition-colors">
                  0335-3454808
                </a>
              </div>

              <div className="flex items-center hover-lift">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@almaccacaterers.com" className="text-gray-300 text-xs sm:text-sm hover:text-yellow-400 transition-colors">
                  info@almaccacaterers.com
                </a>
              </div>
            </div>

            {/* Newsletter - Enhanced Mobile Layout */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-black/50 rounded-lg border border-yellow-500/20">
              <h4 className="text-yellow-400 font-medium mb-2 text-sm sm:text-base">Subscribe to Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-md sm:rounded-l-md sm:rounded-r-none text-xs sm:text-sm flex-grow focus:outline-none focus:border-yellow-400 text-white"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-amber-600 px-3 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-black font-medium text-xs sm:text-sm hover:from-yellow-400 hover:to-amber-500 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright - Enhanced Mobile Layout */}
        <div className="border-t border-yellow-500/20 mt-8 sm:mt-10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center animate-fadeInUp">
          <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6 md:mb-0">
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 border border-yellow-500/30 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover-scale"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 border border-yellow-500/30 flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:text-white hover:border-transparent transition-all hover-scale"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 border border-yellow-500/30 flex items-center justify-center text-gray-300 hover:bg-sky-500 hover:text-white hover:border-transparent transition-all hover-scale"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 border border-yellow-500/30 flex items-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white hover:border-transparent transition-all hover-scale"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 border border-yellow-500/30 flex items-center justify-center text-gray-300 hover:bg-green-600 hover:text-white hover:border-transparent transition-all hover-scale"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
            © 2024 <span className="text-yellow-400">Al-Macca Caterers & Event Planner</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button - Enhanced Mobile Design */}
      <button
        className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover-scale ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-amber-600"></div>
    </footer>
  )
}

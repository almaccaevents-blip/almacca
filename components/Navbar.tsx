"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  {
    name: "Packages",
    href: "/packages",
    dropdown: [
      { name: "Mehndi & Mayion", href: "/packages/mehndi-mayion" },
      { name: "Shaadi & Valima", href: "/packages/shaadi-valima" },
      { name: "Farmhouse Packages", href: "/packages/farmhouse" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar - Enhanced Mobile Responsiveness */}
      <div className="bg-black text-white py-1 sm:py-2 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="tel:+923333227339" className="hover:text-yellow-400 transition-colors">
                <span className="hidden xs:inline">0333-3227339</span>
                <span className="xs:hidden">Call Us</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="mailto:info@almaccacaterers.com" className="hover:text-yellow-400 transition-colors">
                <span className="hidden sm:inline">info@almaccacaterers.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <span>Premium Catering Services | Serving Since 2010</span>
          </div>
          <div className="lg:hidden text-xs">
            <span>Since 2010</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced Mobile Layout */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo - Improved Mobile Sizing */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12">
              <Image
                src="/images/logo.jpeg"
                alt="Al-Macca Caterers Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-sm sm:text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Al-Macca Caterers
              </span>
              <span className={`text-xs sm:text-sm ${isScrolled ? "text-gray-600" : "text-gray-300"}`}>& Event Planner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors hover:text-yellow-400 flex items-center gap-1 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/order"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Order Button & Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              href="/order"
              className="bg-yellow-400 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-yellow-500 transition-colors"
            >
              Order
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced Layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="px-2 sm:px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-md font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1 border-l-2 border-yellow-400 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

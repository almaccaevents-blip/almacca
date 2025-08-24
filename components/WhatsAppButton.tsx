/**
 * PROFESSIONAL WHATSAPP BUTTON COMPONENT
 *
 * Features:
 * - Official WhatsApp green color and logo
 * - Floating button with pulse animation
 * - Tooltip on hover
 * - Direct link to business WhatsApp
 * - Professional design matching WhatsApp branding
 * - Enhanced mobile responsiveness
 */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  // Al-Macca's WhatsApp business number
  const whatsappNumber = "923333227339"

  // Pre-written message for customers
  const defaultMessage =
    "Hello Al-Macca Caterers! I'm interested in your catering services. Could you please provide more information about your packages and pricing?"

  const openWhatsApp = () => {
    try {
      const encodedMessage = encodeURIComponent(defaultMessage)
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
      window.open(`https://wa.me/${whatsappNumber}`, "_blank")
    }
  }

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
      <motion.div
        className="relative"
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Tooltip - Enhanced Mobile Support */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.8 }}
              className="absolute bottom-full left-0 mb-2 sm:mb-3 px-3 py-2 bg-gray-800 text-white text-xs sm:text-sm rounded-lg shadow-lg whitespace-nowrap z-50"
            >
              Chat with us on WhatsApp
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button - Enhanced Mobile Design */}
        <motion.button
          onClick={openWhatsApp}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          animate={{
            boxShadow: [
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label="Chat with us on WhatsApp"
        >
          {/* WhatsApp Icon - Mobile Optimized */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
          </svg>

          {/* Pulse Ring Animation - Mobile Responsive */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        {/* Online Status Indicator - Mobile Optimized */}
        <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white rounded-full">
          <motion.div
            className="w-full h-full bg-green-400 rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  )
}

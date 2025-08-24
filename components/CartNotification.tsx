"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"
import { useCart } from "./CartProvider"

export default function CartNotification() {
  const { totalItems } = useCart()
  const [showNotification, setShowNotification] = useState(false)
  const [prevItemCount, setPrevItemCount] = useState(0)

  useEffect(() => {
    if (totalItems > prevItemCount && totalItems > 0) {
      setShowNotification(true)
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
    setPrevItemCount(totalItems)
  }, [totalItems, prevItemCount])

  if (!showNotification) return null

  return (
    <div className="fixed top-24 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slideInUp">
      <CheckCircle className="w-5 h-5" />
      <span className="font-medium">Item added to cart!</span>
    </div>
  )
}

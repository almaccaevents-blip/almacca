"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X, Plus, Minus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./CartProvider"
import Image from "next/image"
import { Input } from "@/components/ui/input" // Assuming Input component is available from shadcn/ui
import { Label } from "@/components/ui/label" // Assuming Label component is available from shadcn/ui

export default function FloatingCart() {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [lastAddedItem, setLastAddedItem] = useState<string>("")
  const [deliveryDate, setDeliveryDate] = useState<string>("")
  const [deliveryTime, setDeliveryTime] = useState<string>("")
  const [formattedDeliveryDate, setFormattedDeliveryDate] = useState<string>("")
  const [formattedDeliveryTime, setFormattedDeliveryTime] = useState<string>("")

  useEffect(() => {
    if (totalItems > 0) {
      setShowSuccess(true)
      const timer = setTimeout(() => setShowSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [totalItems])

  useEffect(() => {
    if (deliveryDate) {
      setFormattedDeliveryDate(
        new Date(deliveryDate).toLocaleDateString("en-PK", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      )
    } else {
      setFormattedDeliveryDate("Not specified")
    }
  }, [deliveryDate])

  useEffect(() => {
    setFormattedDeliveryTime(deliveryTime || "Not specified")
  }, [deliveryTime])

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`
  }

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return

    // Generate a simple order ID (for demonstration, in a real app this would come from a backend)
    const orderId = `ALM-${Date.now().toString().slice(-6)}`

    // Create a clean, readable WhatsApp message
    let message = `🎉 *NEW ORDER from Al-Macca Caterers!* 🎉\n`
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    message += `📝 *Order ID:* ${orderId}\n`
    message += `📅 *Delivery Date:* ${formattedDeliveryDate}\n`
    message += `⏰ *Delivery Time:* ${formattedDeliveryTime}\n\n`
    message += `🍽️ *ORDER DETAILS:*\n`
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `   • Quantity: ${item.quantity}\n`
      message += `   • Price: ${formatPrice(item.price)} each\n`
      message += `   • Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`
    })

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
    message += `💰 *TOTAL AMOUNT: ${formatPrice(totalPrice)}*\n`
    message += `📦 *Total Items: ${totalItems}*\n\n`
    message += `📞 Please confirm this order and let me know the final details.\n\n`
    message += `Thank you for choosing Al-Macca Caterers! 🙏`

    const whatsappNumber = "923333227339"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {showSuccess && (
        <div className="fixed bottom-24 right-6 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slideInUp">
          ✅ Item added to cart!
        </div>
      )}

      {/* Floating Cart Button - Enhanced Mobile Design */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-yellow-400 hover:bg-yellow-500 text-black p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Cart Sidebar - Enhanced Mobile Layout */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header - Mobile Optimized */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b">
                <h2 className="text-lg sm:text-xl font-bold">Your Cart ({totalItems})</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Cart Items - Enhanced Mobile Scrolling */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {items.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 text-sm sm:text-base">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm sm:text-base line-clamp-2">{item.name}</h3>
                          <p className="text-yellow-600 font-bold text-sm sm:text-base">{formatPrice(item.price)}</p>
                          <div className="flex items-center gap-2 sm:gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <span className="font-medium text-sm sm:text-base min-w-[2rem] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Form & Checkout - Enhanced Mobile Layout */}
              {items.length > 0 && (
                <div className="border-t p-4 sm:p-6 space-y-4">
                  {/* Delivery Details - Mobile Optimized */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="delivery-date" className="text-xs sm:text-sm font-medium">
                        Delivery Date
                      </Label>
                      <Input
                        id="delivery-date"
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="mt-1 text-xs sm:text-sm"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="delivery-time" className="text-xs sm:text-sm font-medium">
                        Delivery Time
                      </Label>
                      <Input
                        id="delivery-time"
                        type="time"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="mt-1 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Total - Enhanced Mobile Display */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-base sm:text-lg font-medium">Total ({totalItems} items)</span>
                      <span className="text-lg sm:text-xl font-bold text-yellow-600">{formatPrice(totalPrice)}</span>
                    </div>

                    {/* Action Buttons - Mobile Optimized */}
                    <div className="space-y-2 sm:space-y-3">
                      <Button
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Order via WhatsApp
                      </Button>
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full py-2 sm:py-3 text-sm sm:text-base"
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/**
 * ORDER MODAL COMPONENT
 *
 * This is a popup modal that handles order placement. It can be opened with:
 * - A pre-selected menu item
 * - A pre-selected package
 * - Empty for custom orders
 *
 * Features:
 * - Customer information form
 * - Event details form
 * - Order summary with pricing
 * - WhatsApp integration for order submission
 * - Form validation
 * - Responsive design
 */

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Users, MessageSquare, ShoppingCart, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// TypeScript interfaces for type safety
interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  category: string
}

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedItem?: {
    id: string
    name: string
    price: number
    category: string
  }
  preSelectedPackage?: {
    name: string
    price: number
    items: string[]
  }
}

export default function OrderModal({ isOpen, onClose, preSelectedItem, preSelectedPackage }: OrderModalProps) {
  // State for customer and event information
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    eventTime: "",
    guests: "",
    eventType: "",
    venue: "",
    specialInstructions: "",
  })

  // State for selected individual items (if not using a package)
  const [selectedItems, setSelectedItems] = useState<OrderItem[]>(() => {
    // If a pre-selected item was passed, add it to the cart
    if (preSelectedItem) {
      return [
        {
          id: preSelectedItem.id,
          name: preSelectedItem.name,
          price: preSelectedItem.price,
          quantity: 1,
          category: preSelectedItem.category,
        },
      ]
    }
    return []
  })

  // Calculate total cost based on items and packages
  const calculateTotal = () => {
    // Calculate cost of individual items
    const itemsTotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    // Calculate cost of package (price per person × number of guests)
    const packageTotal = preSelectedPackage ? preSelectedPackage.price * Number.parseInt(orderData.guests || "1") : 0

    return itemsTotal + packageTotal
  }

  // Handle form submission - creates WhatsApp message and opens WhatsApp
  const handleSubmit = () => {
    const whatsappNumber = "923333227339" // Al-Macca's WhatsApp number

    // Build formatted message for WhatsApp
    let message = `🍽️ *CATERING ORDER REQUEST*\n\n`

    // Add customer details
    message += `👤 *Customer Details:*\n`
    message += `Name: ${orderData.name}\n`
    message += `Phone: ${orderData.phone}\n`
    message += `Email: ${orderData.email}\n\n`

    // Add event details
    message += `📅 *Event Details:*\n`
    message += `Date: ${orderData.eventDate}\n`
    message += `Time: ${orderData.eventTime}\n`
    message += `Guests: ${orderData.guests}\n`
    message += `Event Type: ${orderData.eventType}\n`
    message += `Venue: ${orderData.venue}\n\n`

    // Add package details if selected
    if (preSelectedPackage) {
      message += `📦 *Selected Package:*\n`
      message += `${preSelectedPackage.name} - Rs. ${preSelectedPackage.price} per person\n`
      message += `Items included: ${preSelectedPackage.items.join(", ")}\n\n`
    }

    // Add individual items if any
    if (selectedItems.length > 0) {
      message += `🍴 *Selected Items:*\n`
      selectedItems.forEach((item) => {
        message += `• ${item.name} x${item.quantity} - Rs. ${item.price * item.quantity}\n`
      })
      message += `\n`
    }

    // Add total cost
    message += `💰 *Total Estimated Cost:* Rs. ${calculateTotal().toLocaleString()}\n\n`

    // Add special instructions if provided
    if (orderData.specialInstructions) {
      message += `📝 *Special Instructions:*\n${orderData.specialInstructions}\n\n`
    }

    message += `Please confirm availability and provide final quotation. Thank you! 🙏`

    // Open WhatsApp with the formatted message
    try {
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
      onClose() // Close the modal after sending
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
      alert("Error opening WhatsApp. Please try again or contact us directly.")
    }
  }

  // Update quantity of individual items
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      setSelectedItems((prev) => prev.filter((item) => item.id !== itemId))
    } else {
      // Update quantity
      setSelectedItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        // Modal backdrop - clicking outside closes the modal
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal content - clicking inside doesn't close the modal */}
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-black" />
                  <h2 className="text-2xl font-bold text-black">Place Your Order</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
                  <X className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Summary Section */}
              {(preSelectedPackage || selectedItems.length > 0) && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">Order Summary</h3>

                  {/* Package Summary */}
                  {preSelectedPackage && (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800">{preSelectedPackage.name}</h4>
                      <p className="text-yellow-700">Rs. {preSelectedPackage.price} per person</p>
                      <p className="text-sm text-yellow-600 mt-1">Includes: {preSelectedPackage.items.join(", ")}</p>
                    </div>
                  )}

                  {/* Individual Items Summary */}
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2 border-b">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">Rs. {item.price} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Quantity controls */}
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Total Cost Display */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Total:</span>
                      <span className="text-yellow-600">Rs. {calculateTotal().toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      *Final price may vary based on consultation and additional requirements
                    </p>
                  </div>
                </div>
              )}

              {/* Customer Information Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Customer Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name *"
                    value={orderData.name}
                    onChange={(e) => setOrderData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={orderData.phone}
                    onChange={(e) => setOrderData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={orderData.email}
                    onChange={(e) => setOrderData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              {/* Event Details Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Event Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    placeholder="Event Date *"
                    value={orderData.eventDate}
                    onChange={(e) => setOrderData((prev) => ({ ...prev, eventDate: e.target.value }))}
                    required
                  />
                  <Input
                    type="time"
                    placeholder="Event Time *"
                    value={orderData.eventTime}
                    onChange={(e) => setOrderData((prev) => ({ ...prev, eventTime: e.target.value }))}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Number of Guests *"
                    value={orderData.guests}
                    onChange={(e) => setOrderData((prev) => ({ ...prev, guests: e.target.value }))}
                    min="1"
                    required
                  />
                  <Select onValueChange={(value) => setOrderData((prev) => ({ ...prev, eventType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Event Type *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="religious">Religious Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="Venue Address *"
                  value={orderData.venue}
                  onChange={(e) => setOrderData((prev) => ({ ...prev, venue: e.target.value }))}
                  rows={2}
                  required
                />
              </div>

              {/* Special Instructions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Special Instructions
                </h3>

                <Textarea
                  placeholder="Any special dietary requirements, decorations, or additional services..."
                  value={orderData.specialInstructions}
                  onChange={(e) => setOrderData((prev) => ({ ...prev, specialInstructions: e.target.value }))}
                  rows={3}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleSubmit}
                  disabled={!orderData.name || !orderData.phone || !orderData.eventDate || !orderData.guests}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Order via WhatsApp
                </Button>
                <Button onClick={onClose} variant="outline" className="px-6 py-3">
                  Cancel
                </Button>
              </div>

              {/* Contact Information */}
              <div className="text-center text-sm text-gray-500">
                <p>Or contact us directly:</p>
                <div className="flex justify-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    0333-3227339
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    info@almaccacaterers.com
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, CheckCircle } from "lucide-react"

const menuItems = [
  { id: "chicken-tikka", name: "Chicken Tikka", price: 150 },
  { id: "seekh-kebab", name: "Seekh Kebab", price: 120 },
  { id: "chicken-biryani", name: "Chicken Biryani", price: 300 },
  { id: "mutton-karahi", name: "Mutton Karahi", price: 450 },
  { id: "fish-curry", name: "Fish Curry", price: 350 },
  { id: "gulab-jamun", name: "Gulab Jamun", price: 60 },
]

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    guests: "",
    venue: "",
    specialRequests: "",
    selectedItems: {} as Record<string, number>,
  })

  const [total, setTotal] = useState(0)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleItemQuantityChange = (itemId: string, quantity: number) => {
    const newSelectedItems = { ...formData.selectedItems }
    if (quantity > 0) {
      newSelectedItems[itemId] = quantity
    } else {
      delete newSelectedItems[itemId]
    }

    setFormData((prev) => ({ ...prev, selectedItems: newSelectedItems }))

    // Calculate total
    const newTotal = Object.entries(newSelectedItems).reduce((sum, [itemId, qty]) => {
      const item = menuItems.find((i) => i.id === itemId)
      return sum + (item ? item.price * qty : 0)
    }, 0)
    setTotal(newTotal)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.eventDate ||
      !formData.eventType ||
      !formData.guests ||
      !formData.venue
    ) {
      alert("Please fill in all required fields")
      return
    }

    if (total === 0) {
      alert("Please select at least one menu item")
      return
    }

    // Simulate order submission
    setOrderSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setOrderSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventTime: "",
        eventType: "",
        guests: "",
        venue: "",
        specialRequests: "",
        selectedItems: {},
      })
      setTotal(0)
    }, 5000)
  }

  if (orderSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-black mb-4">Order Submitted Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for choosing Al-Macca Caterers. We have received your order request and will contact you within 24
          hours to confirm the details.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">What happens next?</h3>
          <ul className="text-sm text-yellow-700 space-y-1 text-left">
            <li>• Our team will call you within 24 hours</li>
            <li>• We'll discuss menu details and finalize pricing</li>
            <li>• Event logistics will be confirmed</li>
            <li>• Final confirmation 48 hours before your event</li>
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center text-yellow-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>0333-3227339 | 0335-3454808</span>
          </div>
          <div className="flex items-center justify-center text-yellow-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>info@almaccacaterers.com</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Event Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleInputChange("eventDate", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Time *</label>
              <Input
                type="time"
                value={formData.eventTime}
                onChange={(e) => handleInputChange("eventTime", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
              <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests *</label>
              <Input
                type="number"
                value={formData.guests}
                onChange={(e) => handleInputChange("guests", e.target.value)}
                required
                min="1"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Venue Address *</label>
              <Textarea
                value={formData.venue}
                onChange={(e) => handleInputChange("venue", e.target.value)}
                required
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Menu Selection */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Menu Selection</h3>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-yellow-600 font-bold">Rs. {item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleItemQuantityChange(item.id, Math.max(0, (formData.selectedItems[item.id] || 0) - 1))
                    }
                    className="bg-gray-200 text-black w-8 h-8 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{formData.selectedItems[item.id] || 0}</span>
                  <button
                    type="button"
                    onClick={() => handleItemQuantityChange(item.id, (formData.selectedItems[item.id] || 0) + 1)}
                    className="bg-yellow-400 text-black w-8 h-8 rounded-full hover:bg-yellow-500"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {total > 0 && (
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <div className="text-right">
                <p className="text-xl font-bold text-black">Estimated Total: Rs. {total}</p>
                <p className="text-sm text-gray-600">
                  *Final price may vary based on guest count and additional services
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Special Requests */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Special Requests</h3>
          <Textarea
            value={formData.specialRequests}
            onChange={(e) => handleInputChange("specialRequests", e.target.value)}
            placeholder="Any special dietary requirements, decorations, or additional services..."
            rows={4}
          />
        </div>

        {/* Submit Section */}
        <div className="text-center">
          <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500 px-12 py-3 text-lg">
            Submit Order Request
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            We will contact you within 24 hours to confirm details and pricing.
          </p>
        </div>
      </form>
    </div>
  )
}

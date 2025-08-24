"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus, Calculator, Users, Calendar, MessageSquare, Send, CheckCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// No longer using useCart as this component will handle direct WhatsApp order submission

interface MenuItem {
  id: string
  name: string
  price: number
  category: string
  description: string
  isVegetarian?: boolean
}

interface SelectedItem extends MenuItem {
  quantity: number
}

const menuCategories = {
  bbq: [
    {
      id: "chicken-tikka",
      name: "Chicken Tikka Boti",
      price: 180,
      category: "bbq",
      description: "Tender marinated chicken pieces",
      isVegetarian: false,
    },
    {
      id: "seekh-kebab",
      name: "Seekh Kebab Premium",
      price: 150,
      category: "bbq",
      description: "Hand-rolled spiced ground meat",
      isVegetarian: false,
    },
    {
      id: "malai-boti",
      name: "Chicken Malai Boti",
      price: 200,
      category: "bbq",
      description: "Creamy marinated chicken pieces",
      isVegetarian: false,
    },
  ],
  biryani: [
    {
      id: "chicken-biryani",
      name: "Chicken Biryani Hyderabadi",
      price: 350,
      category: "biryani",
      description: "Aromatic basmati rice with chicken",
      isVegetarian: false,
    },
    {
      id: "mutton-biryani",
      name: "Mutton Biryani Special",
      price: 450,
      category: "biryani",
      description: "Premium mutton with fragrant rice",
      isVegetarian: false,
    },
    {
      id: "veg-biryani",
      name: "Vegetable Biryani",
      price: 280,
      category: "biryani",
      description: "Aromatic rice with mixed vegetables",
      isVegetarian: true,
    },
  ],
  sweets: [
    {
      id: "gulab-jamun",
      name: "Gulab Jamun Premium",
      price: 80,
      category: "sweets",
      description: "Soft milk dumplings in syrup",
      isVegetarian: true,
    },
    {
      id: "kheer",
      name: "Kheer Special",
      price: 90,
      category: "sweets",
      description: "Traditional rice pudding",
      isVegetarian: true,
    },
    {
      id: "ras-malai",
      name: "Ras Malai",
      price: 150,
      category: "sweets",
      description: "Cottage cheese in sweetened milk",
      isVegetarian: true,
    },
  ],
  beverages: [
    {
      id: "mango-lassi",
      name: "Fresh Mango Lassi",
      price: 120,
      category: "beverages",
      description: "Creamy yogurt drink with mango",
      isVegetarian: true,
    },
    {
      id: "kashmiri-chai",
      name: "Kashmiri Chai",
      price: 80,
      category: "beverages",
      description: "Pink tea with almonds",
      isVegetarian: true,
    },
    {
      id: "fresh-juice",
      name: "Fresh Orange Juice",
      price: 100,
      category: "beverages",
      description: "Freshly squeezed orange juice",
      isVegetarian: true,
    },
  ],
}

const categoryTitles = {
  bbq: "BBQ & Grilled Items",
  biryani: "Biryani & Rice Dishes",
  sweets: "Desserts & Sweets",
  beverages: "Beverages & Drinks",
}

export default function CustomPackageBuilder() {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [guests, setGuests] = useState<number>(50)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  // State for customer and event information
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    venue: "",
    specialInstructions: "",
  })

  const handleOrderDataChange = (field: string, value: string) => {
    setOrderData((prev) => ({ ...prev, [field]: value }))
  }

  const addItem = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const existing = prev.find((selected) => selected.id === item.id)
      if (existing) {
        return prev.map((selected) =>
          selected.id === item.id ? { ...selected, quantity: selected.quantity + 1 } : selected,
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
  }

  const removeItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const existing = prev.find((selected) => selected.id === itemId)
      if (existing && existing.quantity > 1) {
        return prev.map((selected) =>
          selected.id === itemId ? { ...selected, quantity: selected.quantity - 1 } : selected,
        )
      } else {
        return prev.filter((selected) => selected.id !== itemId)
      }
    })
  }

  const getItemQuantity = (itemId: string) => {
    const item = selectedItems.find((selected) => selected.id === itemId)
    return item ? item.quantity : 0
  }

  const calculatePerPerson = () => {
    return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const calculateTotal = () => {
    const baseTotal = calculatePerPerson() * guests

    // Apply discount logic
    if (guests >= 200) {
      return baseTotal * 0.8 // 20% discount
    } else if (guests >= 100) {
      return baseTotal * 0.9 // 10% discount
    }
    return baseTotal
  }

  const getDiscount = () => {
    if (guests >= 200) return 20
    if (guests >= 100) return 10
    return 0
  }

  const handleSubmitOrder = () => {
    // Basic validation
    if (selectedItems.length === 0) {
      alert("Please select at least one item for your package.")
      return
    }
    if (!orderData.name || !orderData.phone || !orderData.eventDate || !guests || !orderData.venue) {
      alert("Please fill in all required customer and event details.")
      return
    }

    const whatsappNumber = "923333227339" // Al-Macca's WhatsApp number
    const orderId = `ALM-${Date.now().toString().slice(-6)}`

    let message = `🎉 *NEW CUSTOM PACKAGE ORDER from Al-Macca Caterers!* 🎉\n`
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    message += `📝 *Order ID:* ${orderId}\n`
    message += `🗓️ *Order Date:* ${new Date().toLocaleDateString("en-PK")}\n`
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`

    message += `👤 *CUSTOMER DETAILS:*\n`
    message += `Name: ${orderData.name}\n`
    message += `Phone: ${orderData.phone}\n`
    message += `Email: ${orderData.email || "N/A"}\n\n`

    message += `📅 *EVENT DETAILS:*\n`
    message += `Date: ${orderData.eventDate}\n`
    message += `Time: ${orderData.eventTime || "N/A"}\n`
    message += `Guests: ${guests}\n` // Use the 'guests' state directly
    message += `Event Type: ${orderData.eventType || "N/A"}\n`
    message += `Venue: ${orderData.venue}\n\n`

    message += `📋 *CUSTOM PACKAGE ITEMS:*\n\n`
    selectedItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `    • Quantity: ${item.quantity}\n`
      message += `    • Unit Price: Rs. ${item.price.toLocaleString()}\n`
      message += `    • Subtotal: Rs. ${(item.price * item.quantity).toLocaleString()}\n`
      message += `    ─────────────────────────────────────\n`
    })

    message += `\n💰 *ESTIMATED TOTAL: Rs. ${calculateTotal().toLocaleString()}*\n`
    if (getDiscount() > 0) {
      message += `    (Includes ${getDiscount()}% discount for ${guests}+ guests)\n`
    }
    message += `*Final price may vary based on consultation and additional requirements.*\n\n`

    if (orderData.specialInstructions) {
      message += `📝 *SPECIAL INSTRUCTIONS:*\n${orderData.specialInstructions}\n\n`
    }

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
    message += `📞 *NEXT STEPS:*\n`
    message += `• Our team will contact you shortly to confirm details.\n`
    message += `• Please be ready to discuss your event requirements.\n\n`

    message += `🙏 *Thank you for choosing Al-Macca Caterers!* 🙏\n`
    message += `We look forward to serving you.`

    try {
      const encodedMessage = encodeURIComponent(message)
      // Ensure the URL starts with https://
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
      setOrderSubmitted(true) // Show success message
      // Reset form after a short delay
      setTimeout(() => {
        setOrderSubmitted(false)
        setSelectedItems([])
        setGuests(50)
        setOrderData({
          name: "",
          phone: "",
          email: "",
          eventDate: "",
          eventTime: "",
          eventType: "",
          venue: "",
          specialInstructions: "",
        })
      }, 5000)
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
      alert("Error opening WhatsApp. Please try again or contact us directly.")
    }
  }

  if (orderSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-black mb-4">Custom Package Order Submitted!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for creating your custom package with Al-Macca Caterers. We have received your request and will
          contact you within 24 hours to confirm the details and finalize your order.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">What happens next?</h3>
          <ul className="text-sm text-yellow-700 space-y-1 text-left">
            <li>• Our team will call you within 24 hours to discuss your custom package.</li>
            <li>• We'll finalize menu details, pricing, and event logistics.</li>
            <li>• A final confirmation will be sent 48 hours before your event.</li>
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
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Menu Selection - All Categories */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {Object.entries(menuCategories).map(([categoryKey, items]) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold text-black mb-6">
                  {categoryTitles[categoryKey as keyof typeof categoryTitles]}
                </h3>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          {item.isVegetarian && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                              Veg
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <span className="text-xl font-bold text-yellow-600">Rs. {item.price} per person</span>
                      </div>

                      <div className="flex items-center gap-2 ml-4">
                        {getItemQuantity(item.id) > 0 ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                            >
                              <Minus className="w-4 h-4 mx-auto" />
                            </button>
                            <span className="w-8 text-center font-semibold">{getItemQuantity(item.id)}</span>
                            <button
                              onClick={() => addItem(item)}
                              className="w-8 h-8 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
                            >
                              <Plus className="w-4 h-4 mx-auto" />
                            </button>
                          </div>
                        ) : (
                          <Button
                            onClick={() => addItem(item)}
                            size="sm"
                            className="bg-yellow-400 text-black hover:bg-yellow-500"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Package Summary & Order Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6 space-y-6">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Custom Package Summary
            </h3>

            {/* Guest Count */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
              <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number.parseInt(e.target.value) || 1)}
                min="1"
                className="w-full"
              />
            </div>

            {/* Discount Information */}
            {guests >= 100 && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                  <span>🎉 Discount Applied!</span>
                </div>
                <p className="text-sm text-green-600">
                  {guests >= 200 ? "20% discount for 200+ guests" : "10% discount for 100+ guests"}
                </p>
              </div>
            )}

            {/* Selected Items */}
            <div className="space-y-3 mb-4">
              {selectedItems.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No items selected yet</p>
              ) : (
                selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">
                        Rs. {item.price} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold">Rs. {item.price * item.quantity}</span>
                  </div>
                ))
              )}
            </div>

            {/* Pricing */}
            {selectedItems.length > 0 && (
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between">
                  <span>Per Person:</span>
                  <span className="font-semibold">Rs. {calculatePerPerson().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-semibold">{guests}</span>
                </div>
                {getDiscount() > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({getDiscount()}%):</span>
                    <span className="font-semibold">
                      -Rs. {(calculatePerPerson() * guests * (getDiscount() / 100)).toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-yellow-600 pt-2 border-t">
                  <span>Total Estimated:</span>
                  <span>Rs. {calculateTotal().toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Final pricing may vary based on consultation.</p>
              </div>
            )}

            {/* Customer Information Form */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Customer Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  value={orderData.name}
                  onChange={(e) => handleOrderDataChange("name", e.target.value)}
                  required
                />
                <Input
                  placeholder="Phone Number *"
                  value={orderData.phone}
                  onChange={(e) => handleOrderDataChange("phone", e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={orderData.email}
                  onChange={(e) => handleOrderDataChange("email", e.target.value)}
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
                  onChange={(e) => handleOrderDataChange("eventDate", e.target.value)}
                  required
                />
                <Input
                  type="time"
                  placeholder="Event Time"
                  value={orderData.eventTime}
                  onChange={(e) => handleOrderDataChange("eventTime", e.target.value)}
                />
                <Select onValueChange={(value) => handleOrderDataChange("eventType", value)}>
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
                onChange={(e) => handleOrderDataChange("venue", e.target.value)}
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
                onChange={(e) => handleOrderDataChange("specialInstructions", e.target.value)}
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6">
              <Button
                onClick={handleSubmitOrder}
                disabled={
                  selectedItems.length === 0 ||
                  !orderData.name ||
                  !orderData.phone ||
                  !orderData.eventDate ||
                  !guests || // Ensure guests is not 0 or undefined
                  !orderData.venue
                }
                className="w-full bg-green-500 text-white hover:bg-green-600 py-3 font-semibold disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Custom Order via WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

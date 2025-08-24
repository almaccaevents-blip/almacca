"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Minus } from "lucide-react"

const dishCategories = {
  appetizers: [
    { id: "chicken-tikka", name: "Chicken Tikka", price: 150 },
    { id: "seekh-kebab", name: "Seekh Kebab", price: 120 },
    { id: "samosas", name: "Samosas", price: 80 },
    { id: "spring-rolls", name: "Spring Rolls", price: 100 },
  ],
  mains: [
    { id: "chicken-biryani", name: "Chicken Biryani", price: 300 },
    { id: "mutton-karahi", name: "Mutton Karahi", price: 450 },
    { id: "fish-curry", name: "Fish Curry", price: 350 },
    { id: "vegetable-pulao", name: "Vegetable Pulao", price: 200 },
  ],
  desserts: [
    { id: "gulab-jamun", name: "Gulab Jamun", price: 60 },
    { id: "kheer", name: "Kheer", price: 80 },
    { id: "ras-malai", name: "Ras Malai", price: 100 },
  ],
  beverages: [
    { id: "fresh-juice", name: "Fresh Juice", price: 80 },
    { id: "lassi", name: "Lassi", price: 60 },
    { id: "tea-coffee", name: "Tea/Coffee", price: 40 },
  ],
}

const additionalServices = [
  { id: "decoration", name: "Event Decoration", price: 5000 },
  { id: "photography", name: "Photography Service", price: 8000 },
  { id: "music", name: "Music System", price: 3000 },
  { id: "waiters", name: "Additional Waiters", price: 2000 },
]

export default function CustomPlanBuilder() {
  const [planData, setPlanData] = useState({
    eventType: "",
    guests: "",
    budget: "",
    selectedDishes: {} as Record<string, number>,
    selectedServices: [] as string[],
    specialRequests: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [totalCost, setTotalCost] = useState(0)

  const updateDishQuantity = (dishId: string, quantity: number) => {
    const newSelectedDishes = { ...planData.selectedDishes }
    if (quantity > 0) {
      newSelectedDishes[dishId] = quantity
    } else {
      delete newSelectedDishes[dishId]
    }

    setPlanData((prev) => ({ ...prev, selectedDishes: newSelectedDishes }))
    calculateTotal(newSelectedDishes, planData.selectedServices)
  }

  const toggleService = (serviceId: string) => {
    const newSelectedServices = planData.selectedServices.includes(serviceId)
      ? planData.selectedServices.filter((id) => id !== serviceId)
      : [...planData.selectedServices, serviceId]

    setPlanData((prev) => ({ ...prev, selectedServices: newSelectedServices }))
    calculateTotal(planData.selectedDishes, newSelectedServices)
  }

  const calculateTotal = (dishes: Record<string, number>, services: string[]) => {
    const dishTotal = Object.entries(dishes).reduce((sum, [dishId, quantity]) => {
      const dish = Object.values(dishCategories)
        .flat()
        .find((d) => d.id === dishId)
      return sum + (dish ? dish.price * quantity : 0)
    }, 0)

    const serviceTotal = services.reduce((sum, serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId)
      return sum + (service ? service.price : 0)
    }, 0)

    const guests = Number.parseInt(planData.guests) || 1
    setTotalCost(dishTotal * guests + serviceTotal)
  }

  const handleSubmit = () => {
    console.log("Custom plan submitted:", planData)
    alert("Your custom plan has been created! We will contact you soon with a detailed quote.")
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step <= currentStep ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Event Details */}
      {currentStep === 1 && (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Event Details</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <Select onValueChange={(value) => setPlanData((prev) => ({ ...prev, eventType: value }))}>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <Input
                  type="number"
                  value={planData.guests}
                  onChange={(e) => setPlanData((prev) => ({ ...prev, guests: e.target.value }))}
                  placeholder="Enter number of guests"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <Select onValueChange={(value) => setPlanData((prev) => ({ ...prev, budget: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget (Rs. 500-800 per person)</SelectItem>
                    <SelectItem value="standard">Standard (Rs. 800-1200 per person)</SelectItem>
                    <SelectItem value="premium">Premium (Rs. 1200-1800 per person)</SelectItem>
                    <SelectItem value="luxury">Luxury (Rs. 1800+ per person)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Menu Selection */}
      {currentStep === 2 && (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Select Your Menu</h3>
          {Object.entries(dishCategories).map(([category, dishes]) => (
            <div key={category} className="mb-8">
              <h4 className="text-xl font-semibold text-black mb-4 capitalize">{category}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {dishes.map((dish) => (
                  <div key={dish.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h5 className="font-medium">{dish.name}</h5>
                      <p className="text-yellow-600 font-bold">Rs. {dish.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateDishQuantity(dish.id, Math.max(0, (planData.selectedDishes[dish.id] || 0) - 1))
                        }
                        className="bg-gray-200 text-black w-8 h-8 rounded-full hover:bg-gray-300"
                      >
                        <Minus className="w-4 h-4 mx-auto" />
                      </button>
                      <span className="w-8 text-center">{planData.selectedDishes[dish.id] || 0}</span>
                      <button
                        type="button"
                        onClick={() => updateDishQuantity(dish.id, (planData.selectedDishes[dish.id] || 0) + 1)}
                        className="bg-yellow-400 text-black w-8 h-8 rounded-full hover:bg-yellow-500"
                      >
                        <Plus className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Step 3: Additional Services */}
      {currentStep === 3 && (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Additional Services</h3>
          <div className="space-y-4">
            {additionalServices.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={planData.selectedServices.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                  />
                  <div>
                    <h5 className="font-medium">{service.name}</h5>
                    <p className="text-yellow-600 font-bold">Rs. {service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
            <Textarea
              value={planData.specialRequests}
              onChange={(e) => setPlanData((prev) => ({ ...prev, specialRequests: e.target.value }))}
              placeholder="Any special requirements, dietary restrictions, or additional requests..."
              rows={4}
            />
          </div>
        </div>
      )}

      {/* Step 4: Contact & Summary */}
      {currentStep === 4 && (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input
                  type="text"
                  value={planData.contactInfo.name}
                  onChange={(e) =>
                    setPlanData((prev) => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, name: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  value={planData.contactInfo.email}
                  onChange={(e) =>
                    setPlanData((prev) => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, email: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input
                  type="tel"
                  value={planData.contactInfo.phone}
                  onChange={(e) =>
                    setPlanData((prev) => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, phone: e.target.value },
                    }))
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Plan Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Event Type:</span>
                <span className="font-semibold capitalize">{planData.eventType}</span>
              </div>
              <div className="flex justify-between">
                <span>Number of Guests:</span>
                <span className="font-semibold">{planData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Dishes:</span>
                <span className="font-semibold">{Object.keys(planData.selectedDishes).length}</span>
              </div>
              <div className="flex justify-between">
                <span>Additional Services:</span>
                <span className="font-semibold">{planData.selectedServices.length}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Estimated Total:</span>
                  <span className="text-yellow-600">Rs. {totalCost.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  *This is an estimated cost. Final pricing will be confirmed after consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          variant="outline"
        >
          Previous
        </Button>

        {currentStep < 4 ? (
          <Button
            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="bg-yellow-400 text-black hover:bg-yellow-500">
            Create Custom Plan
          </Button>
        )}
      </div>
    </div>
  )
}

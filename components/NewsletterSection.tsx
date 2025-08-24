"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Stay Updated with Our Latest Offers</h2>
          <p className="text-black mb-8">
            Subscribe to our newsletter and be the first to know about special deals, new menu items, and exclusive
            packages.
          </p>

          {isSubscribed ? (
            <div className="bg-black text-white p-4 rounded-lg">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm">You'll receive our latest updates and offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border-black"
              />
              <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

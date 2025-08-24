"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Play, Users, Calendar, Award, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Ahmed Hassan",
    event: "Wedding Reception",
    rating: 5,
    comment:
      "Outstanding service! The food was absolutely delicious and the presentation was perfect. Al-Macca Caterers made our wedding day truly special.",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Fatima Khan",
    event: "Corporate Event",
    rating: 5,
    comment:
      "Professional team with exceptional food quality. Our corporate event was a huge success thanks to their excellent catering services.",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    event: "Birthday Party",
    rating: 5,
    comment:
      "Amazing biryani and BBQ! The guests couldn't stop praising the food. Highly recommend Al-Macca Caterers for any event.",
    date: "January 2024",
  },
]

const stats = [
  { icon: Users, label: "Happy Customers", value: "1000+" },
  { icon: Calendar, label: "Events Catered", value: "500+" },
  { icon: Award, label: "Years Experience", value: "14+" },
  { icon: Star, label: "Average Rating", value: "4.9" },
]

export default function YouTubeReviewSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const loadVideo = () => {
    setVideoLoaded(true)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-yellow-400">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced our exceptional
            catering services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* YouTube Video */}
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {!videoLoaded ? (
                <div className="relative w-full h-full cursor-pointer group" onClick={loadVideo}>
                  <Image
                    src="https://img.youtube.com/vi/4G5S9sCVPqw/maxresdefault.jpg"
                    alt="Al-Macca Caterers Customer Review Video"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                      <Play className="w-8 sm:w-10 h-8 sm:h-10 text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-1">Customer Review</h3>
                    <p className="text-gray-200 text-sm">Click to watch our customer's experience</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/4G5S9sCVPqw?autoplay=1"
                  title="Al-Macca Caterers Customer Review"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-yellow-400 text-black px-3 sm:px-4 py-2 rounded-full font-semibold shadow-lg">
              <div className="flex items-center space-x-2">
                <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="text-sm sm:text-base">Customer Review</span>
              </div>
            </div>
          </div>

          {/* Video Info & Stats */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Real Customer Experiences</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Watch our customers share their experiences with Al-Macca Caterers. From wedding celebrations to
                corporate events, see how we make every occasion memorable with our authentic Pakistani cuisine and
                professional service.
              </p>
              <Button
                asChild
                className="bg-yellow-500 text-white hover:bg-yellow-600 w-full sm:w-auto"
                size="lg"
              >
                <a
                  href="https://www.youtube.com/@umaramirr/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch More Reviews
                </a>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
                  <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base leading-relaxed">"{review.comment}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-sm text-yellow-600">{review.event}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-yellow-600 text-white p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Create Your Own Success Story?</h3>
            <p className="text-yellow-100 mb-6 leading-relaxed">
              Join hundreds of satisfied customers who have trusted Al-Macca Caterers for their special events.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-yellow-600 hover:bg-gray-100 w-full sm:w-auto"
            >
              <a href="/order">Book Your Event Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

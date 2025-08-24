"use client"

import Image from "next/image"
import { Award, Users, Clock, Star, Heart, ChefHat } from 'lucide-react'
import { Button } from "@/components/ui/button"

const achievements = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Serving authentic Pakistani cuisine since 2010",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by families and businesses across Karachi",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available for all your catering needs anytime",
  },
  {
    icon: Star,
    title: "4.9/5 Rating",
    description: "Consistently rated excellent by our customers",
  },
]

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish prepared with passion and authentic traditional recipes",
  },
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Experienced culinary team with decades of combined expertise",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients and highest food safety standards",
  },
]

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Enhanced Mobile Layout */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight">
                About <span className="text-yellow-400">Al-Macca Caterers</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-6">
                Since 2010, Al-Macca Caterers has been the premier choice for authentic Pakistani cuisine in Karachi. We
                specialize in traditional recipes passed down through generations, using only the finest ingredients and
                time-honored cooking techniques.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                From intimate family gatherings to grand wedding celebrations, we bring the authentic taste of Pakistan
                to your special occasions. Our experienced team ensures every dish is prepared with love and served
                with excellence.
              </p>
            </div>

            {/* Features - Enhanced Mobile Grid */}
            <div className="space-y-3 sm:space-y-6 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 sm:w-12 h-8 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 sm:w-6 h-4 sm:h-6 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Grid - Enhanced Mobile Layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <achievement.icon className="w-5 sm:w-8 h-5 sm:h-8 text-yellow-500 mb-2 sm:mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base leading-tight">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Button - Mobile Optimized */}
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto transition-colors"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More About Us
            </Button>
          </div>

          {/* Image - Enhanced Mobile Layout */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/closed-metal-pots-min.jpg"
                alt="Professional catering setup with traditional serving dishes"
                width={600}
                height={500}
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority
              />

              {/* Floating Badge - Mobile Responsive */}
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-yellow-400 text-black rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm font-semibold">Years Serving</div>
                  <div className="text-xs sm:text-sm">Since 2010</div>
                </div>
              </div>

              {/* Decorative Elements - Mobile Responsive */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 sm:w-20 h-8 sm:h-20 bg-yellow-400/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

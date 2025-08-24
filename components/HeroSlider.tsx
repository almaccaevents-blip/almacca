"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Star,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/side-view-people-celebrating-eid-al-fitr-min.jpg",
    title: "Premium Catering Services",
    subtitle: "Authentic Pakistani Cuisine for Every Occasion",
    description:
      "Experience the finest traditional flavors with our professional catering services for weddings, corporate events, and special celebrations.",
    cta: "View Our Menu",
    link: "/menu",
    stats: { events: "500+", rating: "4.9", guests: "50K+" },
  },
  {
    id: 2,
    image: "/images/open-food-containers-min.jpg",
    title: "Professional Event Catering",
    subtitle: "Complete Event Management Solutions",
    description:
      "From intimate gatherings to grand celebrations, we provide comprehensive catering services with professional setup and exceptional service.",
    cta: "Our Packages",
    link: "/packages",
    stats: { events: "300+", rating: "5.0", guests: "25K+" },
  },
  {
    id: 3,
    image: "/images/top-view-eid-al-fitr-celebration-min.jpg",
    title: "Traditional Pakistani Feast",
    subtitle: "Celebrating Culture Through Food",
    description:
      "Indulge in authentic Pakistani cuisine prepared with traditional recipes and the finest ingredients for an unforgettable dining experience.",
    cta: "Order Now",
    link: "/order",
    stats: { events: "200+", rating: "4.8", guests: "15K+" },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (100 * 50ms)

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Floating Elements - Enhanced Mobile Responsiveness */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-2 sm:w-4 h-2 sm:h-4 bg-yellow-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-3 sm:w-6 h-3 sm:h-6 bg-yellow-400 rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-ping opacity-50" />
        <div className="absolute bottom-30 sm:bottom-60 right-5 sm:right-10 w-2 sm:w-5 h-2 sm:h-5 bg-yellow-400 rounded-full animate-pulse opacity-30" />
      </div>

      {/* Content - Enhanced Mobile Layout */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {index === currentSlide && (
                  <>
                    {/* Stats Bar - Enhanced Mobile Layout */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2">
                        <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                        <span className="text-white text-xs sm:text-sm font-medium">
                          {slide.stats.events} Events
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2">
                        <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-xs sm:text-sm font-medium">
                          {slide.stats.rating} Rating
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2">
                        <Users className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                        <span className="text-white text-xs sm:text-sm font-medium">
                          {slide.stats.guests} Served
                        </span>
                      </div>
                    </div>

                    {/* Main Content - Improved Mobile Typography */}
                    <div className="space-y-3 sm:space-y-6">
                      <div className="inline-block">
                        <span className="bg-yellow-400 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                          Serving Since 2010
                        </span>
                      </div>

                      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>

                      <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-yellow-400 font-semibold">
                        {slide.subtitle}
                      </h2>

                      <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>

                      {/* Buttons - Enhanced Mobile Layout */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <Button
                          asChild
                          size="lg"
                          className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto order-1"
                        >
                          <Link href={slide.link}>{slide.cta}</Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-transparent w-full sm:w-auto order-2"
                        >
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls - Enhanced Mobile Responsiveness */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-2 sm:space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3">

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            title={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-3 sm:w-5 h-3 sm:h-5" />
            ) : (
              <Play className="w-3 sm:w-5 h-3 sm:h-5" />
            )}
          </button>

          {/* Slide Indicators - Mobile Optimized */}
          <div className="flex space-x-1 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative w-6 sm:w-12 h-1 sm:h-2 bg-white/30 rounded-full overflow-hidden"
                aria-label={`Go to slide ${index + 1}`}
                title={`Slide ${index + 1}`}
              >
                <div
                  className={`absolute left-0 top-0 h-full bg-yellow-400 transition-all duration-100 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: index === currentSlide ? `${progress}%` : "0%",
                  }}
                />
                <div
                  className={`absolute left-0 top-0 h-full transition-all duration-300 ${
                    index === currentSlide ? "bg-yellow-400" : "bg-white/50"
                  }`}
                  style={{ width: index < currentSlide ? "100%" : "0%" }}
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Arrow Navigation - Mobile Optimized */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-1.5 sm:p-3 rounded-full hover:bg-white/20 transition-all"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-1.5 sm:p-3 rounded-full hover:bg-white/20 transition-all"
        aria-label="Next slide"
        title="Next slide"
      >
        <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6" />
      </button>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

// Static imports (no issues here)
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import CallToAction from "@/components/CallToAction";
// import HomePage from "@/components/HomePage";

// ✅ Dynamically import YouTubeReviewSection with SSR disabled
const YouTubeReviewSection = dynamic(
  () => import("@/components/YouTubeReviewSection").then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="min-h-[100svh] relative">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Featured Menu */}
      <FeaturedMenu />

      {/* YouTube Review Section - Lazy Loaded */}
      <YouTubeReviewSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <CallToAction />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Final Home Page Section */}
      {/* <HomePage /> */}
    </div>
  );
}

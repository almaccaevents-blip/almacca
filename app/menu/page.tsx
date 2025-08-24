/**
 * MENU PAGE - ENHANCED WITH WORKING FUNCTIONALITY
 *
 * Features:
 * - Working search functionality
 * - Simplified categories (removed unnecessary ones)
 * - Working "Order Now" buttons
 * - Responsive design
 * - Professional layout
 */

import type { Metadata } from "next"
import MenuContent from "@/components/MenuContent"

export const metadata: Metadata = {
  title: "Our Menu - Al-Macca Caterers & Event Planner",
  description:
    "Explore our delicious menu featuring Pakistani, Chinese, and international cuisine for all your catering needs.",
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <MenuContent />
    </div>
  )
}

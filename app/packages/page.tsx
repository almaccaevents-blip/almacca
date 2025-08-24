/**
 * PACKAGES PAGE - FULLY FUNCTIONAL
 *
 * Features:
 * - Interactive package cards with hover effects
 * - Working "Order Now" buttons that open order modal
 * - Package comparison functionality
 * - Responsive design for all devices
 * - Professional animations and transitions
 */

import type { Metadata } from "next"
import PackagesContent from "@/components/PackagesContent"

export const metadata: Metadata = {
  title: "Premium Packages - Al-Macca Caterers & Event Planner",
  description:
    "Choose from our carefully designed international catering packages for different event types and budgets.",
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PackagesContent />
    </div>
  )
}

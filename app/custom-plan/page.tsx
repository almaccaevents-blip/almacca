import type { Metadata } from "next"
import CustomPlanBuilder from "@/components/CustomPlanBuilder"

export const metadata: Metadata = {
  title: "Custom Plan Builder - Al-Macca Caterers & Event Planner",
  description: "Create your perfect catering package with our custom plan builder.",
}

export default function CustomPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Plan <span className="text-yellow-400">Builder</span>
            </h1>
            <p className="text-xl text-gray-300">Create your perfect catering package tailored to your needs</p>
          </div>
        </div>
      </section>

      {/* Custom Plan Builder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <CustomPlanBuilder />
        </div>
      </section>
    </div>
  )
}

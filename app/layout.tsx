import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/components/CartProvider"
import FloatingCart from "@/components/FloatingCart"
import CartNotification from "@/components/CartNotification"
import WhatsAppButton from "@/components/WhatsAppButton"
import { AnimationProvider } from "@/components/AnimationProvider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://almacca.com/"),
  title: {
    default: "Al-Macca Caterers & Event Planner - Premium Catering Services in Pakistan",
    template: "%s | Al-Macca Caterers",
  },
  description:
    "Al-Macca Caterers offers premium catering services for weddings, corporate events, and special occasions across Pakistan. Authentic Pakistani cuisine with professional service.",
  keywords: [
    "catering services Pakistan",
    "wedding catering",
    "corporate catering",
    "Pakistani food catering",
    "event planning",
    "Al-Macca caterers",
    "halal catering",
    "biryani catering",
    "desi food catering",
  ],
  authors: [{ name: "Al-Macca Caterers" }],
  creator: "Al-Macca Caterers & Event Planner",
  publisher: "Al-Macca Caterers",
  icons: {
    icon: "/images/logo.jpeg", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almacca.com/",
    title: "Al-Macca Caterers & Event Planner - Premium Catering Services",
    description:
      "Premium catering services for weddings, corporate events, and special occasions. Authentic Pakistani cuisine with professional service.",
    siteName: "Al-Macca Caterers",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Al-Macca Caterers - Premium Food Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Macca Caterers & Event Planner",
    description: "Premium catering services for all your special events",
    images: ["/images/logo.jpeg"],
    creator: "@almaccacaterers",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://almacca.com",
  },
  generator: "BSH SOLUTIONS",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <AnimationProvider>
            <Navbar />
            <main>{children}</main>
            <Analytics />
             <SpeedInsights />
            <Footer />
            <WhatsAppButton />
            <FloatingCart />
            <CartNotification />
          </AnimationProvider>
        </CartProvider>
      </body>
    </html>
  )
}

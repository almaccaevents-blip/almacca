"use client"

import Image from "next/image"

interface UnifiedHeroProps {
  title: string
  subtitle: string
  highlightWord?: string
  backgroundImage?: string
  stats?: Array<{
    number: string
    label: string
  }>
}

export default function UnifiedHero({ 
  title, 
  subtitle, 
  highlightWord, 
  backgroundImage = "/images/side-view-people-celebrating-eid-al-fitr-min.jpg",
  stats 
}: UnifiedHeroProps) {
  const renderTitle = () => {
    if (highlightWord) {
      const parts = title.split(highlightWord)
      return (
        <>
          {parts[0]}
          <span className="text-yellow-400">{highlightWord}</span>
          {parts[1]}
        </>
      )
    }
    return title
  }

  return (
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundImage || "/placeholder.svg"} 
          alt="Al-Macca Catering Background" 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Credibility Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <span className="text-yellow-400 font-semibold text-sm sm:text-base">✨ Serving Since 2010</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {renderTitle()}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

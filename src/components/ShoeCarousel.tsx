'use client'

import { useState, useEffect } from 'react'

interface Shoe {
  id: number
  name: string
  subtitle: string
  price: string
  color: string
  gradientFrom: string
  gradientTo: string
  sizes: number[]
  description: string
}

const shoes: Shoe[] = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    subtitle: 'React ENG',
    price: '$170',
    color: 'Red/Black',
    gradientFrom: '#e63946',
    gradientTo: '#ff006e',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: 'The Nike Air Max 270 React ENG combines lifestyle versatility with the comfort of React foam and Air Max 270.',
  },
  {
    id: 2,
    name: 'Nike Air Jordan 1',
    subtitle: 'Retro High OG',
    price: '$180',
    color: 'Blue/White',
    gradientFrom: '#4361ee',
    gradientTo: '#3a0ca3',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: 'The Air Jordan 1 Retro High OG brings a fresh perspective to the iconic silhouette that started it all.',
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    subtitle: "Low '07",
    price: '$110',
    color: 'White/White',
    gradientFrom: '#90e0ef',
    gradientTo: '#00b4d8',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: "The radiance lives on with the Air Force 1 '07, a clean recreation of the basketball original with premium leather.",
  },
  {
    id: 4,
    name: 'Nike Dunk Low',
    subtitle: 'Panda',
    price: '$110',
    color: 'Black/White',
    gradientFrom: '#2d2d2d',
    gradientTo: '#555555',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low Panda returns with crisp overlays.',
  },
  {
    id: 5,
    name: 'Nike Air Max 90',
    subtitle: 'Essential',
    price: '$130',
    color: 'Green/Black',
    gradientFrom: '#06d6a0',
    gradientTo: '#118ab2',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    description: 'Nothing as iconic satisfies like an original. The Air Max 90 stays true to its roots with waffle outsole and classic design.',
  },
]

export default function ShoeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const activeShoe = shoes[activeIndex]

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    setSelectedSize(null)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % shoes.length)
  }

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + shoes.length) % shoes.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <section className="min-h-screen bg-dark-gradient relative overflow-hidden pt-24 pb-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${activeShoe.gradientFrom}, transparent)` }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${activeShoe.gradientTo}, transparent)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="text-[20vw] font-black text-white/[0.02] tracking-wider">NIKE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8" key={activeShoe.id}>
            <div className="animate-slide-left">
              <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: activeShoe.gradientFrom }}>
                Just Do It
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                {activeShoe.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-white/60 mt-2">
                {activeShoe.subtitle}
              </h2>
            </div>

            <p className="text-white/50 text-lg max-w-md animate-slide-left" style={{ animationDelay: '0.2s' }}>
              {activeShoe.description}
            </p>

            <div className="animate-slide-left" style={{ animationDelay: '0.3s' }}>
              <span className="text-4xl font-bold text-white">{activeShoe.price}</span>
              <span className="text-white/40 ml-3 line-through text-lg">$220</span>
            </div>

            {/* Size selector */}
            <div className="animate-slide-left" style={{ animationDelay: '0.4s' }}>
              <p className="text-white/60 text-sm font-medium mb-3">Select Size (US)</p>
              <div className="flex flex-wrap gap-2">
                {activeShoe.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'text-white scale-105'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                    style={selectedSize === size ? { background: `linear-gradient(135deg, ${activeShoe.gradientFrom}, ${activeShoe.gradientTo})` } : {}}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 animate-slide-left" style={{ animationDelay: '0.5s' }}>
              <button
                className="px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 pulse-glow"
                style={{ background: `linear-gradient(135deg, ${activeShoe.gradientFrom}, ${activeShoe.gradientTo})` }}
              >
                Add to Cart
              </button>
              <button className="px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide border border-white/20 hover:bg-white/5 transition-all duration-300">
                View Details
              </button>
            </div>
          </div>

          {/* Right - Shoe Display */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full opacity-30 blur-2xl transition-all duration-1000"
              style={{ background: `radial-gradient(circle, ${activeShoe.gradientFrom}40, transparent 70%)` }}
            />
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center">
              <div className="animate-float shoe-shadow transition-all duration-700" key={`shoe-${activeShoe.id}`}>
                <svg width="420" height="280" viewBox="0 0 420 280" className="drop-shadow-2xl">
                  <ellipse cx="210" cy="240" rx="160" ry="20" fill="rgba(0,0,0,0.3)" />
                  <path d="M60 200 Q70 230 120 240 L300 240 Q350 230 360 200 L340 195 Q330 220 300 225 L120 225 Q90 220 80 195 Z" fill="#ffffff" opacity="0.9" />
                  <path d="M70 195 Q80 210 120 215 L300 215 Q340 210 350 195 L345 185 Q335 200 300 205 L120 205 Q85 200 75 185 Z" fill={activeShoe.gradientFrom} opacity="0.8" />
                  <path d="M80 185 Q90 120 150 90 L250 70 Q330 80 350 130 L355 185 Q345 190 300 195 L120 195 Q85 190 80 185 Z" fill={activeShoe.gradientFrom} />
                  <path d="M100 175 Q110 130 160 105 L240 85 Q310 95 335 140 L340 175 Q330 180 290 183 L130 183 Q105 180 100 175 Z" fill={activeShoe.gradientTo} opacity="0.7" />
                  <path d="M120 165 Q180 140 250 145 Q300 148 340 135 L335 140 Q295 155 245 152 Q180 148 130 170 Z" fill="#ffffff" opacity="0.9" />
                  <path d="M80 185 Q75 170 85 155 Q95 145 120 140 L140 140 Q110 150 100 165 Q92 175 95 185 Z" fill="rgba(255,255,255,0.2)" />
                  <path d="M330 130 Q345 135 355 155 L358 185 Q355 188 350 190 L348 155 Q345 140 332 135 Z" fill="rgba(0,0,0,0.2)" />
                  <path d="M280 70 Q320 72 340 90 Q350 100 350 120 L345 115 Q340 98 325 88 Q310 78 280 76 Z" fill="rgba(255,255,255,0.15)" />
                  <path d="M170 95 L175 90 M190 88 L195 83 M210 84 L215 79 M230 82 L235 77 M250 80 L255 75" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="absolute top-10 right-10 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: activeShoe.gradientFrom }} />
              <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeShoe.gradientTo, animationDelay: '0.5s' }} />
              <div className="absolute top-20 left-20 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeShoe.gradientFrom, animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Shoe thumbnails */}
          <div className="flex items-center gap-3">
            {shoes.map((shoe, index) => (
              <button
                key={shoe.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-xl overflow-hidden ${
                  index === activeIndex ? 'w-16 h-16 ring-2 scale-110' : 'w-12 h-12 opacity-50 hover:opacity-80'
                }`}
                style={index === activeIndex ? { '--tw-ring-color': shoe.gradientFrom } as React.CSSProperties : {}}
              >
                <div className="w-full h-full flex items-center justify-center rounded-xl" style={{ background: `linear-gradient(135deg, ${shoe.gradientFrom}40, ${shoe.gradientTo}40)` }}>
                  <svg width="40" height="26" viewBox="0 0 420 280" className="opacity-80">
                    <path d="M80 185 Q90 120 150 90 L250 70 Q330 80 350 130 L355 185 Q345 190 300 195 L120 195 Q85 190 80 185 Z" fill={shoe.gradientFrom} />
                    <path d="M120 165 Q180 140 250 145 Q300 148 340 135 L335 140 Q295 155 245 152 Q180 148 130 170 Z" fill="#ffffff" opacity="0.9" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Slide counter */}
          <div className="text-white/40 text-sm font-medium">
            <span className="text-white font-bold text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            <span>{String(shoes.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

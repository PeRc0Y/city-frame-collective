'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  onCityClick?: (city: string) => void
}

export default function Header({ onCityClick }: HeaderProps) {
  const [activeCity, setActiveCity] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const cities = ['Istanbul', 'Paris', 'New York', 'Tokyo']

  const handleCityClick = (city: string) => {
    setActiveCity(city)
    onCityClick?.(city)
    setMobileMenuOpen(false)
  }

  const handleClearFilter = () => {
    setActiveCity('')
    onCityClick?.('')
  }

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <button
          onClick={handleClearFilter}
          className="font-serif text-2xl md:text-3xl text-black tracking-tight hover:opacity-80 transition cursor-pointer"
        >
          City Frame Collective
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12 items-center">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`font-label-caps text-xs uppercase tracking-widest transition-colors ${
                activeCity === city
                  ? 'text-black border-b border-black pb-0.5'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {city}
            </button>
          ))}
          <button
            onClick={handleClearFilter}
            className="font-label-caps text-xs text-gray-600 hover:text-black transition-colors uppercase tracking-widest"
          >
            All
          </button>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.etsy.com/shop/CityFrameCollective"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-black text-white px-8 py-3 rounded-full font-label-caps text-xs hover:bg-gray-900 transition-all uppercase tracking-widest text-[9px]"
          >
            Visit Etsy
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`block w-full text-left font-label-caps text-sm uppercase tracking-widest py-2 transition-colors ${
                activeCity === city
                  ? 'text-black font-semibold'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {city}
            </button>
          ))}
          <button
            onClick={handleClearFilter}
            className="block w-full text-left font-label-caps text-sm uppercase tracking-widest py-2 text-gray-600 hover:text-black transition-colors"
          >
            All
          </button>
          <Link
            href="https://www.etsy.com/shop/CityFrameCollective"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4 bg-black text-white px-4 py-3 rounded text-center font-label-caps text-xs hover:bg-gray-900 transition-all uppercase tracking-widest"
          >
            Visit Etsy Store
          </Link>
        </div>
      )}
    </header>
  )
}

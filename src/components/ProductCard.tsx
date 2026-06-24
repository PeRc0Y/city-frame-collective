'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  city: string
  country: string
  series: string
  price: number
  description: string
  imageUrl: string
  etsyUrl: string
  tags: string[]
  onTagClick?: (tag: string) => void
}

export default function ProductCard({
  id,
  city,
  country,
  series,
  price,
  description,
  imageUrl,
  etsyUrl,
  tags,
  onTagClick,
}: ProductCardProps) {
  return (
    <div className="gallery-item flex flex-col group">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-orange-50 shadow-lg transition-shadow duration-500 group-hover:shadow-2xl relative">
        {imageUrl && imageUrl !== 'https://drive.google.com/uc?id=null' ? (
          <img
            src={imageUrl}
            alt={`${city} Travel Poster`}
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400"%3E%3Crect fill="%23f3e8d8" width="300" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="serif" font-size="18" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3E{city}%3C/text%3E%3C/svg%3E'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50">
            <svg
              className="w-16 h-16 text-orange-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="mt-6 flex flex-col items-center text-center">
        {/* Title */}
        <h3 className="text-2xl font-serif mb-4 text-black">{city}</h3>

        {/* Clickable Tags */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          <button
            onClick={() => onTagClick?.(country)}
            className="font-label-caps text-[9px] text-gray-600 tracking-widest uppercase px-3 py-1 border border-gray-300 rounded-full hover:border-black hover:text-black hover:bg-gray-50 transition cursor-pointer"
          >
            {country}
          </button>
          <button
            onClick={() => onTagClick?.(city)}
            className="font-label-caps text-[9px] text-gray-600 tracking-widest uppercase px-3 py-1 border border-gray-300 rounded-full hover:border-black hover:text-black hover:bg-gray-50 transition cursor-pointer"
          >
            {city}
          </button>
          <button
            onClick={() => onTagClick?.(series)}
            className="font-label-caps text-[9px] text-gray-600 tracking-widest uppercase px-3 py-1 border border-gray-300 rounded-full hover:border-black hover:text-black hover:bg-gray-50 transition cursor-pointer"
          >
            {series}
          </button>
        </div>

        {/* CTA Link */}
        <Link
          href={etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cf-link font-label-caps text-label-caps text-gray-700 hover:text-black transition-colors tracking-widest uppercase text-sm"
        >
          View on Etsy
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

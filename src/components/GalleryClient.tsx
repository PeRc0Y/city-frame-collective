'use client'

import { useState } from 'react'
import Header from './Header'
import Gallery from './Gallery'

interface Product {
  id: number
  city: string
  country: string
  series: string
  price: number
  description: string
  images: {
    hero: string
  }
  etsyUrl: string
  tags: string[]
}

interface GalleryClientProps {
  products: Product[]
}

export default function GalleryClient({ products }: GalleryClientProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  return (
    <>
      <Header onCityClick={setSelectedCity} />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl mb-12 text-center text-black">
              Our Collection
            </h2>
            <Gallery products={products} itemsPerPage={20} initialFilter={selectedCity} />
          </div>
        </section>
      </main>
    </>
  )
}

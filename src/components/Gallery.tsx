'use client'

import { useState, useMemo, useEffect } from 'react'
import ProductCard from './ProductCard'

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

interface GalleryProps {
  products: Product[]
  itemsPerPage?: number
  initialFilter?: string | null
}

export default function Gallery({
  products,
  itemsPerPage = 20,
  initialFilter = null,
}: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(initialFilter)

  // Update filter when initialFilter prop changes
  useEffect(() => {
    setSelectedFilter(initialFilter)
    setCurrentPage(1)
  }, [initialFilter])

  // Filter products based on selected tag
  const filteredProducts = useMemo(() => {
    if (!selectedFilter) return products
    return products.filter(
      (product) =>
        product.country === selectedFilter ||
        product.city === selectedFilter ||
        product.series === selectedFilter
    )
  }, [products, selectedFilter])

  // Reset to page 1 when filter changes
  const handleFilterChange = (tag: string) => {
    if (selectedFilter === tag) {
      setSelectedFilter(null)
    } else {
      setSelectedFilter(tag)
      setCurrentPage(1)
    }
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  // Generate page numbers (show current, neighbors, and edges)
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Show ellipsis if needed
      if (currentPage > 3) {
        pages.push('...')
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        pages.push('...')
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }, [currentPage, totalPages])

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products available</p>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found for this filter</p>
        <button
          onClick={() => setSelectedFilter(null)}
          className="mt-4 px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
        >
          Clear Filter
        </button>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Active Filter Display */}
      {selectedFilter && (
        <div className="mb-8 text-center">
          <p className="text-gray-600 mb-2">Active Filter:</p>
          <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
            <span className="font-label-caps text-sm font-semibold text-black">{selectedFilter}</span>
            <button
              onClick={() => setSelectedFilter(null)}
              className="text-gray-600 hover:text-black transition text-lg"
              title="Clear filter"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 mb-12">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            city={product.city}
            country={product.country}
            series={product.series}
            price={product.price}
            description={product.description}
            imageUrl={product.images.hero}
            etsyUrl={product.etsyUrl}
            tags={product.tags}
            onTagClick={handleFilterChange}
          />
        ))}
      </div>

      {/* Next Page Indicator */}
      {totalPages > 1 && currentPage < totalPages && (
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="group flex flex-col items-center gap-2 px-8 py-4 text-center"
          >
            <span className="font-label-caps text-sm text-gray-600 group-hover:text-black transition">
              Next Page
            </span>
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-black transition transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-8 border-t border-gray-200">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            aria-label="Previous page"
          >
            ←
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-2 text-gray-400">•••</span>
              ) : (
                <button
                  onClick={() => setCurrentPage(page as number)}
                  className={`w-10 h-10 rounded flex items-center justify-center font-medium transition ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              )}
            </div>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}

      {/* Info Text */}
      <div className="text-center text-sm text-gray-500 py-4">
        {totalPages > 1 && (
          <>
            Page <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
            {' '}
            (<strong>{filteredProducts.length}</strong> products)
          </>
        )}
      </div>
    </div>
  )
}

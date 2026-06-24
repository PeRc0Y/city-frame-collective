import GalleryClient from '@/components/GalleryClient'
import Footer from '@/components/Footer'

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

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('/data/products.json', {
      cache: 'no-store',
    })
    if (!res.ok) throw new Error('Failed to fetch products')
    const data = await res.json()
    return data.products || []
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Gallery with Header and Filter */}
      <GalleryClient products={products} />

      <Footer />
    </div>
  )
}

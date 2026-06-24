# Bileşenler Rehberi

City Frame Collective'in tüm React bileşenlerinin detaylı açıklaması.

## 📁 Bileşen Yapısı

```
src/components/
├── Header.tsx          # Üst navigasyon çubuğu
├── Footer.tsx          # Alt bilgi ve linkler
├── Gallery.tsx         # Ürün grid'i ve sayfalama
└── ProductCard.tsx     # Tek ürün kartı
```

---

## 🔧 Header Bileşeni

**Dosya:** `src/components/Header.tsx`

### Fonksiyonu
- Sitede sticky (yapışkın) navigasyon gösterir
- Logo ve marka adı gösterir
- Kategori linklerine erişim sağlar
- Etsy mağazasına direktlink

### Props
Hiçbiri (veya gereken veri hard-coded'dir)

### Özellikler
- ✅ Responsive: Desktop'ta menu, mobile'da hamburger
- ✅ Sticky top (sayfayı scroll ederken üstte kalır)
- ✅ Semi-transparent backdrop blur efekti

### Özelleştirme
```tsx
// src/components/Header.tsx satır 12-26
<Link href="#" className="...">
  Istanbul  // ← Kategori adını değiştir
</Link>
```

---

## 🎨 ProductCard Bileşeni

**Dosya:** `src/components/ProductCard.tsx`

### Fonksiyonu
- Tek bir ürünü görsel ve detaylarıyla gösterir
- Hover efektleri ekler
- Google Drive görselleri yükler
- Etsy linkine erişim sağlar

### Props
```tsx
interface ProductCardProps {
  id: number              // Ürün ID'si
  city: string            // Şehir adı (örn: Istanbul)
  country: string         // Ülke (örn: Turkey)
  series: string          // Seri adı (örn: Alaska)
  price: number           // Fiyat (örn: 349)
  description: string     // Açıklama metni
  imageUrl: string        // Google Drive görsel linki
  etsyUrl: string         // Etsy ürün sayfası
  tags: string[]          // Etiketler (örn: ["istanbul", "travel"])
}
```

### Özellikler
- ✅ 3:4 aspect ratio (poster boyutu)
- ✅ Grayscale hover efekti
- ✅ Shadow efekti hover'da artıyor
- ✅ Görsel yüklememe durumunda placeholder gösterir
- ✅ Mobil responsive

### Görsel Hata Yönetimi
```tsx
// Eğer resim yüklenemezse fallback gösterir
onError={(e) => {
  const img = e.target as HTMLImageElement
  img.src = 'data:image/svg+xml...' // Placeholder SVG
}}
```

---

## 📊 Gallery Bileşeni

**Dosya:** `src/components/Gallery.tsx`

### Fonksiyonu
- Tüm ürünleri grid formatında gösterir
- 20 ürün başına sayfalar oluşturur
- Sayfa navigasyonunu sağlar
- ProductCard bileşenlerini kullanır

### Props
```tsx
interface GalleryProps {
  products: Product[]     // Tüm ürün verisi
  itemsPerPage?: number   // Sayfa başına ürün (varsayılan: 20)
}
```

### Özellikler
- ✅ Otomatik sayfalama (20 ürün/sayfa)
- ✅ Sayfa numaralandırması (1, 2, 3...)
- ✅ Önceki/Sonraki butonları
- ✅ Akıllı sayı gösterme (ellipsis kullanır)
- ✅ Boş durum mesajı
- ✅ Responsive grid (1-2-4 sütun)

### Grid Düzeni
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
```

- **Mobile:** 1 sütun
- **Tablet:** 2 sütun (sm)
- **Desktop:** 4 sütun (lg)

### Sayfalama Mantığı
```tsx
// Örnek: 60 ürün ve itemsPerPage=20
totalPages = 3           // 60/20
startIndex = 0           // (1-1)*20
currentProducts = [0-19] // İlk 20 ürün
```

### Özelleştirme: Sayfa Başına Ürün Sayısını Değiştir

`src/app/page.tsx` dosyasını aç:
```tsx
<Gallery products={products} itemsPerPage={20} />
           // itemsPerPage'i değiştir
           // 12, 16, 24, 30 vb. olabilir
```

---

## 🏠 Footer Bileşeni

**Dosya:** `src/components/Footer.tsx`

### Fonksiyonu
- Footer gösterir
- Linkler ve bilgiler içerir
- Sosyal medya linklerine erişim
- Copyright bilgisi

### Props
Hiçbiri

### Özellikler
- ✅ Responsive 4-sütun grid
- ✅ Dinamik yıl gösterir
- ✅ Etsy mağazasına direktlink
- ✅ Sosyal medya linklerine erişim

---

## 🎯 Page (Ana Sayfa) Bileşeni

**Dosya:** `src/app/page.tsx`

### Fonksiyonu
- Ana sayfayı oluşturur
- Header + Hero + Gallery + Footer kombinasyonu
- Ürün verilerini yükler

### Server/Client
- **Server Component** (SSR)
- `getProducts()` fonksiyonu sunucuda çalışır
- Veriler build time'da veya runtime'da yüklenir

### Veri Yükleme
```tsx
async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/data/products.json', {
    cache: 'no-store',  // Her zaman yeni veri
  })
  return res.json()
}
```

### Layout
```
Header
  ↓
Hero Section (title + description)
  ↓
Gallery (ürünler + sayfalama)
  ↓
Footer
```

---

## 📝 Veri Tipöföleri

### Product Interface
```tsx
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
  version?: string
  sku?: string
}
```

---

## 🎨 Stil Sistemi

### Global Stiller
**Dosya:** `src/app/globals.css`

- Material Design 3 renk sistemi
- Animasyon sınıfları (gallery-item, cf-link)
- Tailwind directives

### Tailwind Config
**Dosya:** `tailwind.config.js`

- Font aileleri: Libre Caslon (serif), Hanken Grotesk (sans)
- Renk değişkenleri (CSS variables)
- Özel spacing ve transitionlar

### Material Design 3 Renkler
```css
--primary: #000000;           /* Siyah */
--secondary: #695c4d;         /* Kahve */
--tertiary: #000000;          /* Siyah */
--error: #ba1a1a;            /* Kırmızı */
--background: #fbf9f4;        /* Krem/Açık */
```

---

## 🔄 Bileşen Akışı

```
page.tsx (Ana Sayfa)
  └── Header
  └── Gallery
      ├── ProductCard (x20)
      ├── ProductCard (x20)
      └── Pagination
  └── Footer
```

---

## 🛠️ Ortak Özellikler

### Hover Efektleri
- **gallery-item**: Yukarı hareket (-12px mobile'da -8px)
- **cf-link**: Underline animasyonu

### Responsive Breakpoints
- **Mobile:** max-width: 640px (sm)
- **Tablet:** 768px - 1024px (md, lg)
- **Desktop:** 1024px+ (lg, xl)

### Animasyon Zamanlaması
```css
transition: 0.3s - 0.7s
cubic-bezier: material = (0.165, 0.84, 0.44, 1)
```

---

## 📦 Import Yapısı

```tsx
// Standart imports
import Link from 'next/link'
import Image from 'next/image'

// Client directives
'use client'

// React hooks
import { useState, useMemo } from 'react'

// Tipler
interface ProductCardProps { ... }

// Bileşen export
export default function ComponentName() { ... }
```

---

## ✅ Test Listesi

Yeni bileşen eklemeden önce kontrol et:

- [ ] TypeScript tipöföleri tanımlandı mı?
- [ ] Props interface'i yazıldı mı?
- [ ] 'use client' directive eklendi mi (interaktif ise)?
- [ ] Responsive tasarım sınanmış mı?
- [ ] Darkmode/lightmode uyumlu mu?
- [ ] Accessibility (a11y) kontrol edildi mi?
- [ ] Hata handling yapıldı mı?

---

## 🚀 Yeni Bileşen Ekleme

1. `src/components/NewComponent.tsx` dosyası oluştur
2. Interface yazı: `interface NewComponentProps { ... }`
3. Component function'u yazı
4. `'use client'` directive ekle (gerekirse)
5. Export et
6. Parent component'te import et

```tsx
// src/components/NewComponent.tsx
'use client'

interface NewComponentProps {
  title: string
  onClick: () => void
}

export default function NewComponent({ title, onClick }: NewComponentProps) {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  )
}

// Kullanım
import NewComponent from '@/components/NewComponent'

<NewComponent title="Hello" onClick={() => console.log('clicked')} />
```

---

Daha fazla bilgi için README.md'i kontrol et!

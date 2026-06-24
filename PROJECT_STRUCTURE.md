# City Frame Collective - Proje Yapısı

Tüm website dosyalarının organize edilmiş bir haritası.

```
City Frame Collective/
│
├── 📄 Konfigürasyon Dosyaları
│   ├── package.json              ← NPM bağımlılıkları ve scriptler
│   ├── next.config.js            ← Next.js ayarları (Google Drive config)
│   ├── tailwind.config.js        ← Tailwind CSS ve Material Design 3 renkler
│   ├── tsconfig.json             ← TypeScript ayarları
│   ├── postcss.config.js         ← PostCSS işlemcisi
│   └── .gitignore                ← Git ignore kuralları
│
├── 📚 Dokümantasyon
│   ├── README.md                 ← Genel bilgi ve özellikler
│   ├── SETUP.md                  ← Kurulum ve Vercel deploy rehberi
│   ├── COMPONENTS.md             ← Bileşen açıklamaları
│   └── PROJECT_STRUCTURE.md      ← Bu dosya
│
├── 📁 src/
│   │
│   ├── 📁 app/
│   │   ├── layout.tsx            ← Root layout (fonts, metadata)
│   │   ├── page.tsx              ← Ana sayfa (Hero + Gallery + Footer)
│   │   └── globals.css           ← Global stiller ve animasyonlar
│   │
│   └── 📁 components/
│       ├── Header.tsx            ← Üst navigasyon çubuğu
│       ├── Gallery.tsx           ← Ürün grid'i ve sayfalama (20/sayfa)
│       ├── ProductCard.tsx       ← Tek ürün kartı
│       └── Footer.tsx            ← Alt bilgi ve linkler
│
├── 📁 public/
│   └── 📁 data/
│       └── products.json         ← Tüm ürün verileri (20 ürün)
│
└── 📁 Eski Dosyalar (Referans İçin)
    ├── cityframe-collective-fikir-dokumani-2026-05-16.md
    ├── cityframe-collective-stratejik-playbook-2026-05-16.md
    └── n8n-etsy-workflow-fixed.json
```

---

## 📊 Dosya Açıklamaları

### 🔧 Konfigürasyon Dosyaları

#### `package.json`
```json
{
  "name": "city-frame-collective",
  "version": "1.0.0",
  "scripts": {
    "dev": "npm run dev",        // Development server
    "build": "next build",       // Production build
    "start": "next start",       // Production server
    "lint": "next lint"          // Code linting
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "tailwindcss": "^3.3.0"
  }
}
```

#### `next.config.js`
```javascript
// Google Drive görselleri yüklemeyi sağlar
// Unoptimized: true (Drive URL'leri doğrudan kullanabilmek için)
```

#### `tailwind.config.js`
```javascript
// Material Design 3 renk değişkenleri
// Font aileleri: Libre Caslon (serif), Hanken Grotesk (sans)
```

#### `tsconfig.json`
```json
// TypeScript konfigürasyonu
// Paths: "@/*" => "./src/*" (kısayol import için)
```

#### `postcss.config.js`
```javascript
// Tailwind CSS işleme
```

---

### 📚 Dokümantasyon Dosyaları

#### `README.md`
- Proje özeti
- Features (özellikler)
- Teknolojiler
- Deployment rehberi

#### `SETUP.md`
- Adım adım kurulum
- Google Drive'dan görsel ekleme
- Vercel'e deploy etme
- Sorun giderme

#### `COMPONENTS.md`
- Her bileşenin detaylı açıklaması
- Props ve özellikler
- Özelleştirme örnekleri

---

### 💻 Kaynak Kodu

#### `src/app/layout.tsx`
Root layout - tüm sayfalara uygulanır
- Metadata (başlık, açıklama)
- Google Fonts yükleme
- Material Symbols icon font

#### `src/app/page.tsx`
Ana sayfa
- Hero section (başlık + açıklama)
- Gallery bileşeni
- Footer bileşeni
- Ürün verisi yükleme

#### `src/app/globals.css`
Global stiller
- Material Design 3 renk sistemi (CSS variables)
- Animasyonlar (.gallery-item, .cf-link)
- Tailwind directives

#### `src/components/Header.tsx`
Üst navigasyon
- Logo ve marka adı
- Kategori linkler
- Etsy mağazasına link
- Responsive menu

#### `src/components/Gallery.tsx`
Ürün grid'i + Sayfalama
- 20 ürün başına sayfalar
- Sayfa numaralandırması
- Prev/Next butonları
- Responsive grid (1/2/4 sütun)

#### `src/components/ProductCard.tsx`
Tek ürün kartı
- 3:4 aspect ratio
- Grayscale hover efekti
- Google Drive görsel
- Etsy linki
- Hata handling

#### `src/components/Footer.tsx`
Alt bölüm
- Marka bilgisi
- Kategori linkler
- Sosyal medya
- Copyright

---

### 📦 Veri Dosyası

#### `public/data/products.json`
```json
{
  "products": [
    {
      "id": 1,
      "city": "Istanbul",
      "country": "Turkey",
      "series": "Alaska",
      "price": 349,
      "description": "Açıklama metni",
      "images": {
        "hero": "https://drive.google.com/uc?id=FILE_ID"
      },
      "etsyUrl": "https://www.etsy.com/listing/...",
      "tags": ["tag1", "tag2"]
    }
    // ... 20 ürün toplam
  ]
}
```

---

## 📐 Klasör Hiyerarşisi Açıklaması

### `/src` - Kaynak Kodu
```
src/
├── app/              → Next.js App Router sayfaları
│   ├── layout.tsx    → Root layout
│   ├── page.tsx      → / (Ana sayfa)
│   └── globals.css   → Global stiller
└── components/       → React bileşenleri
    ├── Header.tsx
    ├── Gallery.tsx
    ├── ProductCard.tsx
    └── Footer.tsx
```

### `/public` - Statik Dosyalar
```
public/
└── data/
    └── products.json → Ürün verileri
```

---

## 🚀 Kurulum Adımları

### 1. Bağımlılıkları Yükle
```bash
cd "City Frame Collective"
npm install
```

### 2. Development Server'ı Çalıştır
```bash
npm run dev
```

### 3. Tarayıcıda Aç
```
http://localhost:3000
```

---

## 🔄 Dosya Çıkmazları ve Bağımlılıklar

```
page.tsx (Main)
  ├── layout.tsx (Fonts, Metadata)
  ├── globals.css (Renkler, Animasyonlar)
  ├── Header.tsx
  │   └── (Hard-coded kategoriler)
  ├── Gallery.tsx
  │   ├── ProductCard.tsx (x20)
  │   │   ├── images from products.json
  │   │   └── globals.css (Animasyonlar)
  │   └── Pagination
  └── Footer.tsx

products.json (Veri)
  ├── id, city, country, series
  ├── price, description
  ├── images.hero (Google Drive URL)
  ├── etsyUrl
  └── tags
```

---

## 📝 Dosya Ekleme/Kaldırma Rehberi

### Yeni Bileşen Eklemek
```bash
src/components/NewComponent.tsx
```

### Yeni Sayfa Eklemek
```bash
src/app/about/page.tsx  → /about sayfası
src/app/blog/page.tsx   → /blog sayfası
```

### Statik Dosya Eklemek
```bash
public/images/logo.png  → /images/logo.png
public/favicon.ico      → Site icon
```

---

## ✅ Vercel Deployment Checklist

- [ ] `npm install` başarılı
- [ ] `npm run dev` çalışıyor
- [ ] `npm run build` başarılı
- [ ] `package.json` tüm dependencies'leri içeriyor
- [ ] GitHub repo'ya push ettim
- [ ] Vercel'de project oluşturdum
- [ ] Environment variables ayarladım (varsa)
- [ ] Deployment başarılı
- [ ] Live URL'de site çalışıyor

---

## 🎯 Dosya Boyutları ve Optimizasyon

```
src/app/layout.tsx       ~400 bytes
src/app/page.tsx         ~1.2 KB
src/app/globals.css      ~2.5 KB
src/components/          ~8 KB (4 component)
public/data/products.json ~15 KB (20 ürün)
package.json             ~800 bytes
-----
Toplam (kaynaklar)       ~28 KB (gzipped hariç)
```

---

## 🔐 Güvenlik Bilgileri

✅ Hiçbir API key repo'da yok
✅ Environment variables kullanılmadı
✅ Google Drive public links (paylaşılan herkes)
✅ Etsy affiliate links secure

---

## 📱 Responsive Breakpoints

```css
Mobile:  < 640px   (1 sütun)
Tablet:  640-1024px (2 sütun)
Desktop: > 1024px  (4 sütun)
```

---

## 🎨 Design Tokens

```
Colors:     src/app/globals.css (CSS variables)
Fonts:      tailwind.config.js
Spacing:    tailwind.config.js
Animations: src/app/globals.css
```

---

## 🔗 İlgili Linkler

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deploy: https://vercel.com/docs
- Google Drive API: https://developers.google.com/drive

---

**Son Güncelleme:** 2026-06-23
**Versiyon:** 1.0.0
**Durum:** Production Ready ✅

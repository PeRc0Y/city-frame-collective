# City Frame Collective - Setup Guide

Bu rehber adım adım sitenizi kurmak ve Vercel'e yayınlamak için gereken tüm adımları içerir.

## 📋 İhtiyaçlar

- Node.js 18+ ([indir](https://nodejs.org))
- npm (Node.js ile birlikte gelir)
- GitHub hesabı (Vercel deploy için)
- Google Drive hesabı (görseller için)

---

## ⚡ Hızlı Başlangıç (5 dakika)

### 1. Bağımlılıkları Yükle
```bash
npm install
```

### 2. Development Server'ı Başlat
```bash
npm run dev
```

Tarayıcıda açın: `http://localhost:3000`

### 3. Ürün Verilerini Güncelle
`public/data/products.json` dosyasını düzenle:

```json
{
  "id": 1,
  "city": "Istanbul",
  "country": "Turkey",
  "series": "Alaska",
  "price": 349,
  "description": "Your poster description",
  "images": {
    "hero": "https://drive.google.com/uc?id=YOUR_FILE_ID"
  },
  "etsyUrl": "https://www.etsy.com/listing/...",
  "tags": ["tag1", "tag2"]
}
```

---

## 🖼️ Google Drive'dan Görseller Nasıl Eklenir?

### Adım 1: Görseli Google Drive'a Yükle
1. [Google Drive](https://drive.google.com) açın
2. Yeni klasör oluşturun: "City Frame Posters"
3. Poster görselleri yükleyin

### Adım 2: Paylaş Linkini Al
1. Görsele sağ tıkla → **Bağlantı Al**
2. Herkes (Link paylaşılan herkes) seçin
3. Kopyala

### Adım 3: File ID'sini Çıkar
Bağlantı şu şekilde görünür:
```
https://drive.google.com/file/d/1dXDGMfUR0qpG-NbPMx8YaXXEiip3rS_K/view?usp=sharing
```

`FILE_ID` = `1dXDGMfUR0qpG-NbPMx8YaXXEiip3rS_K`

### Adım 4: products.json'a Ekle
```json
"images": {
  "hero": "https://drive.google.com/uc?id=1dXDGMfUR0qpG-NbPMx8YaXXEiip3rS_K"
}
```

---

## 🚀 Vercel'e Deploy Etme

### Adım 1: GitHub'a Push Et
```bash
git init
git add .
git commit -m "City Frame Collective website"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/city-frame-collective.git
git push -u origin main
```

### Adım 2: Vercel'de Proje Oluştur
1. [Vercel.com](https://vercel.com) açın
2. GitHub ile giriş yap
3. **"New Project"** tıkla
4. `city-frame-collective` repo seç
5. **"Deploy"** tıkla

### Adım 3: Seçenekleri Ayarla
- Framework: **Next.js** (otomatik seçilecek)
- Build Command: `npm run build` (varsayılan)
- Output Directory: `.next` (varsayılan)

**Deploy** tuşuna tıkla. ✅

---

## 📝 Ürün Ekleme / Düzenleme

### Yeni Ürün Eklemek
`public/data/products.json` dosyasını aç:

```json
{
  "products": [
    {
      "id": 21,
      "city": "Bangkok",
      "country": "Thailand",
      "series": "Alaska",
      "price": 349,
      "sku": "CFC-FA-BKK-V01-DIG",
      "etsyUrl": "https://www.etsy.com/listing/...",
      "description": "Bangkok poster description here",
      "tags": ["bangkok", "thailand", "travel"],
      "images": {
        "hero": "https://drive.google.com/uc?id=FILE_ID_HERE"
      }
    }
    // ... diğer ürünler
  ]
}
```

⚠️ **Önemli:** `id` her ürün için farklı olmalıdır!

### Vercel'de Güncelleme
GitHub'a push ettikten sonra otomatik deploy olacak:

```bash
git add public/data/products.json
git commit -m "Add new product: Bangkok"
git push
```

Vercel dashboard'unda deployment'ı izleyin: [vercel.com/deployments](https://vercel.com/deployments)

---

## 🎨 Tasarımı Özelleştirme

### Renkler Değiştirme
`src/app/globals.css` açın ve renk değişkenlerini düzenle:

```css
:root {
  --primary: #000000;      /* Ana renk */
  --secondary: #695c4d;    /* İkincil renk */
  --background: #fbf9f4;   /* Arkaplan */
  /* ... diğer renkler ... */
}
```

### Yazı Tipleri Değiştirme
`tailwind.config.js` dosyasını açın:

```js
theme: {
  extend: {
    fontFamily: {
      serif: ['Your Font Name', 'serif'],
      sans: ['Another Font', 'sans-serif'],
    }
  }
}
```

### Galeri Düzeni Değiştirme
`src/components/Gallery.tsx` açın:

```tsx
{/* 4 sütun yerine 3 sütun istersen: */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
```

---

## 🐛 Sorun Giderme

### "npm: command not found"
Node.js yüklemedeyse: https://nodejs.org

### Port 3000 kullanımda
```bash
npm run dev -- -p 3001
```

### Görseller yüklenmiyor
1. Google Drive link'inin **halka açık** olduğunu kontrol et
2. File ID'nin doğru olduğunu kontrol et
3. Google Drive url'nin şu formatta olduğunu kontrol et:
   ```
   https://drive.google.com/uc?id=FILE_ID
   ```

### Build hatası
```bash
# Cache temizle
rm -rf .next
npm run build
```

---

## 📊 Sayfa Başına Ürün Sayısını Değiştirme

`src/components/Gallery.tsx` dosyasını aç:

```tsx
export default function Gallery({
  products,
  itemsPerPage = 20,  // ← Burayı değiştir (örn: 12, 24, 30)
}: GalleryProps) {
```

---

## 🔒 Güvenlik İpuçları

1. **API Keys**: Hiçbir zaman API key'ini public repo'ya koymayın
2. **Environment Variables**: Vercel dashboard → Settings → Environment Variables
3. **GitHub**: `main` branch'e push ettikten sonra Vercel otomatik deploy eder

---

## ✅ Kontrol Listesi

- [ ] Tüm ürünler `public/data/products.json`'da var
- [ ] Tüm Google Drive linkler doğru ve halka açık
- [ ] `npm run dev` çalışıyor
- [ ] GitHub repo'ya push ettim
- [ ] Vercel'e deploy ettim
- [ ] Site `https://your-site.vercel.app` adresinde canlı

---

## 📞 Yardım

Sorun yaşarsan:
1. Hata mesajını oku
2. Bu rehberde aç
3. Başka bir search engine'de ara

Başarılar! 🚀

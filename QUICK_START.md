# ⚡ Hızlı Başlangıç (5 Dakika)

## 1️⃣ Bağımlılıkları Yükle

```bash
npm install
```

**Beklenen Çıktı:**
```
added 283 packages in 25s
```

---

## 2️⃣ Development Server'ı Çalıştır

```bash
npm run dev
```

**Beklenen Çıktı:**
```
> next dev

  ▲ Next.js 14.0.0

  Local:        http://localhost:3000
  Environments: .env.local

✓ Ready in 1.2s
```

Tarayıcıda aç: **http://localhost:3000** ✨

---

## 3️⃣ İlk Kez Yaptıkların

✅ **Tamamlandı:**
- Next.js 14 projesi kuruldu
- Material Design 3 tasarımı uygulandı
- Libre Caslon & Hanken Grotesk fontları eklendi
- 20 ürün başına sayfalama yapılandırıldı
- Google Drive görsel hosting ayarlandı
- Responsive layout (mobile/tablet/desktop)
- Header, Gallery, Footer bileşenleri hazır

---

## 🎯 Sonraki Adımlar

### Adım 1: Ürün Verilerini Güncelle (5 dakika)
```bash
# Dosyayı aç
public/data/products.json
```

Google Drive görsellerinizin ID'lerini ekleyin:
```json
"images": {
  "hero": "https://drive.google.com/uc?id=YOUR_FILE_ID"
}
```

### Adım 2: Etsy Mağazasını Ekle (1 dakika)
`src/components/Header.tsx` satır 24:
```tsx
href="https://www.etsy.com/shop/YOUR_SHOP_NAME"
```

### Adım 3: GitHub'a Push Et (3 dakika)
```bash
git init
git add .
git commit -m "City Frame Collective website"
git remote add origin https://github.com/YOUR_USERNAME/city-frame-collective.git
git branch -M main
git push -u origin main
```

### Adım 4: Vercel'de Deploy Et (2 dakika)
1. https://vercel.com açın
2. GitHub ile giriş yapın
3. "New Project" → repo seçin
4. "Deploy" tıkla ✨

**Live URL:** `https://city-frame-collective.vercel.app`

---

## 📋 Kontrol Listesi

```
Kurulum:
☐ npm install çalıştı
☐ npm run dev çalıştı
☐ localhost:3000 açılıyor

Özelleştirme:
☐ products.json güncelledim
☐ Etsy shop linki ekledim
☐ Google Drive görsellerini ekledim

Deployment:
☐ GitHub repo oluşturdum
☐ Vercel deploy ettim
☐ Live site çalışıyor
```

---

## 🆘 Yaygın Sorunlar

### ❌ "npm: command not found"
**Çözüm:** Node.js yükleyin → https://nodejs.org

### ❌ "Port 3000 already in use"
**Çözüm:**
```bash
npm run dev -- -p 3001
```

### ❌ "Görseller yüklenmiyor"
**Kontrol:**
1. Google Drive link halka açık mı?
2. File ID doğru mu?
3. URL formatı: `https://drive.google.com/uc?id=FILE_ID`

### ❌ "Build hatası"
**Çözüm:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Detaylı Rehberler

- **Kurulum & Deploy:** `SETUP.md`
- **Bileşenler:** `COMPONENTS.md`
- **Proje Yapısı:** `PROJECT_STRUCTURE.md`
- **Genel Info:** `README.md`

---

## 🚀 Deploy Sonrası

### Otomatik Deployment
GitHub'a her push'ta Vercel otomatik deploy eder:
```bash
git add .
git commit -m "Update products"
git push  # ← Otomatik deploy olur!
```

### Özel Alanı Eklemek
Vercel Dashboard → Settings → Domains:
```
city-frame-collective.com
```

### Analytics Eklemek (İsteğe Bağlı)
`next.config.js`'e ekle:
```js
{
  analyticsId: 'your-google-analytics-id'
}
```

---

## ✨ Sonraki Fikirler

1. **Blog sayfası** ekle: `src/app/blog/page.tsx`
2. **Hakkımızda** sayfası: `src/app/about/page.tsx`
3. **İletişim formu** ekle
4. **Sosyal medya** entegrasyonu
5. **Newsletter** signup
6. **SEO optimizasyonu**
7. **Google Analytics**

---

## 💡 İpuçları

- **Geliştirme sırasında:** `npm run dev` açık tutun
- **Koddaki değişiklikleri:** Tarayıcı otomatik yeniler (Fast Refresh)
- **Stiller değişikliği:** Direkt göreceğin gerçek zamanlı güncellemeler
- **TypeScript hatalar:** Terminal'de görülür

---

## 🎓 Öğrenme Kaynakları

- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hooks](https://react.dev/reference/react/hooks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Hazır mısın? `npm run dev` yazarak başla!** 🚀

```bash
npm run dev
```

Tarayıcında aç: http://localhost:3000 ✨

# City Frame Collective

Modern travel posters with a focus on minimalist design and Material Design 3 aesthetics.

## Project Structure

```
City Frame Collective/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main home page with hero and gallery
│   │   └── globals.css         # Global styles and Material Design 3 colors
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Gallery.tsx         # Product grid with pagination (20 items/page)
│   │   ├── ProductCard.tsx     # Individual product display
│   │   └── Footer.tsx          # Footer with links
│   └── ...
├── public/
│   └── data/
│       └── products.json       # Product data with Google Drive image links
├── package.json
├── next.config.js              # Next.js configuration with image domains
├── tailwind.config.js          # Tailwind CSS with Material Design 3 colors
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git (for version control)
- Google Drive folder for hosting product images

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Update product data:**
   - Edit `public/data/products.json` with your product information
   - Replace Google Drive image IDs in the `images.hero` field with your own:
   ```json
   "images": {
     "hero": "https://drive.google.com/uc?id=YOUR_FILE_ID"
   }
   ```

3. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Features

- ✅ **20 items per page** - Automatic pagination with page numbers
- ✅ **Responsive design** - Mobile, tablet, and desktop optimized
- ✅ **Material Design 3** - Complete color system and typography
- ✅ **Google Drive images** - Direct linking without local storage
- ✅ **Image fallback** - Graceful error handling with placeholder
- ✅ **Etsy integration** - Direct product links to your Etsy store
- ✅ **Hover animations** - Subtle gallery effects and transitions

## Configuration

### Adding/Updating Products

The product data is stored in `public/data/products.json`. Each product object should have:

```json
{
  "id": 1,
  "city": "Istanbul",
  "country": "Turkey",
  "series": "Alaska",
  "price": 349,
  "description": "Beautiful Istanbul travel poster",
  "images": {
    "hero": "https://drive.google.com/uc?id=FILE_ID"
  },
  "etsyUrl": "https://www.etsy.com/listing/...",
  "tags": ["travel", "poster", "minimalist"]
}
```

### Google Drive Image Setup

1. Upload images to a Google Drive folder
2. Right-click each image → Get link
3. Extract the file ID from the share link
4. Use in products.json: `https://drive.google.com/uc?id=FILE_ID`

## Deployment to Vercel

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/city-frame-collective.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

Vercel will automatically:
- Install dependencies
- Build the Next.js app
- Deploy and assign a live URL

## Development

### Build for production:
```bash
npm run build
npm run start
```

### Lint and format:
```bash
npm run lint
```

## Technologies Used

- **Next.js 14** - React framework with SSR
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS
- **Google Drive API** - Image hosting
- **Material Design 3** - Design system

## Fonts

- **Libre Caslon Text** - Serif font for headings (brand identity)
- **Hanken Grotesk** - Sans-serif font for body text (readability)
- **Material Symbols Outlined** - Icon font

All fonts are loaded via Google Fonts CDN for optimal performance.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Notes

- Images are served directly from Google Drive (unoptimized)
- Consider image compression for faster loading
- Pagination reduces initial bundle size
- Tailwind CSS is tree-shaken in production

## Customization

### Colors
Edit the CSS variables in `src/app/globals.css` to customize the Material Design 3 color system.

### Fonts
Modify font sizes and families in `tailwind.config.js` under the `extend.fontFamily` section.

### Layout
Gallery grid columns can be adjusted in `src/components/Gallery.tsx`:
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 mb-12">
```

## Support

For questions or issues, check the original HTML template or update `public/data/products.json` with accurate product information.

## License

© 2024 City Frame Collective. All rights reserved.

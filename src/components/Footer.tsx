import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-serif text-xl mb-4">City Frame Collective</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern travel posters capturing the essence of the world's most beautiful cities.
            </p>
          </div>

          {/* Collection */}
          <div>
            <h5 className="font-label-caps text-xs text-white mb-4 uppercase tracking-widest">
              Popular Cities
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Istanbul
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Paris
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Tokyo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  New York
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h5 className="font-label-caps text-xs text-white mb-4 uppercase tracking-widest">
              Shop
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.etsy.com/shop/CityFrameCollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Etsy Store
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-label-caps text-xs text-white mb-4 uppercase tracking-widest">
              Connect
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="mailto:info@cityframecollective.com" className="text-gray-400 hover:text-white text-sm transition">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
            <p>© {new Date().getFullYear()} City Frame Collective. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
<Link href="/privacy-policy" className="hover:text-white transition">                Privacy Policy
              </Link>
<Link href="/privacy-policy" className="hover:text-white transition">                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

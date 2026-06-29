export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Spacing */}
      <div className="h-20"></div>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 md:px-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last updated: June 2026</p>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Introduction</h2>
            <p>
              City Frame Collective ("we," "us," "our," or "Company") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website and purchase our digital products.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> Name, email address, and other details you provide when making a purchase</li>
              <li><strong>Payment Information:</strong> Through Etsy's secure payment processing (we do not store credit card data)</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website</li>
              <li><strong>Device Information:</strong> Browser type, IP address, and operating system</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-serif mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To process transactions and send related information</li>
              <li>To improve our website and customer experience</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To monitor and analyze website usage and trends</li>
              <li>To send marketing communications (if you opt in)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Etsy:</strong> We redirect customers to Etsy for all purchases</li>
              <li><strong>Google Drive:</strong> Product images are hosted on Google Drive</li>
              <li><strong>Vercel:</strong> Our website is hosted on Vercel</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission is 100% secure.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>City Frame Collective</strong><br />
              Email: <a href="mailto:mucahityavuz98@gmail.com" className="text-blue-600 hover:underline">mucahityavuz98@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  )
}

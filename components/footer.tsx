import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ModernBlog</h3>
            <p className="text-gray-600 mb-4">
              Sharing insights and knowledge on web development, design, and technology.
            </p>
          </div>

          <div>
            <h4 className="text-md font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog?category=development" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/blog?category=design" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/blog?category=technology" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=accessibility"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-bold mb-4">Subscribe</h4>
            <p className="text-gray-600 mb-4">Stay updated with our latest articles and news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-600">© {new Date().getFullYear()} ModernBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

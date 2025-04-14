"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            HypHomZ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium ${isActive("/") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`font-medium ${isActive("/blog") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`font-medium ${isActive("/about") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${isActive("/contact") ? "text-gray-900" : "text-gray-600 hover:text-gray-900"} transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium ${isActive("/") ? "text-gray-900" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`font-medium ${isActive("/blog") ? "text-gray-900" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={`font-medium ${isActive("/about") ? "text-gray-900" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-medium ${isActive("/contact") ? "text-gray-900" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Share2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Buyzo</span>
              <span className="text-orange-500 text-2xl">°</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Buyzo is a premium Templates theme with advanced admin module. It's extremely customizable, easy to use
              and fully responsive and retina ready.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
              <p>✉️ Email: Contact@basictheme.com</p>
              <p>📞 Phone Number: (800) 123 456 789</p>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Information</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/careers" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Careers
              </Link>
              <Link href="/delivery" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Delivery Information
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Condition
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/shipping" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Shipping Policy
              </Link>
              <Link href="/help" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Help & Contact Us
              </Link>
              <Link href="/returns" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Returns & Refunds
              </Link>
              <Link href="/online-stores" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Online Stores
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Copyright 2025 © Buyzo all rights reserved. Powered by Theme_pure</p>
        </div>
      </div>
    </footer>
  )
}

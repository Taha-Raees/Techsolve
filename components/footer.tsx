'use client'

import Link from "next/link"
import { WaveBackground } from "./ui/wave-background"

export default function Footer() {
  return (
    <footer className="relative mt-auto pt-5 pb-10">
      <WaveBackground />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 dark:text-white">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="hover:text-gray-300 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-development" className="hover:text-gray-300 transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-solutions" className="hover:text-gray-300 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="hover:text-gray-300 transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Graf johann straße 18</li>
              <li>47533 Kleve, Germany</li>
              <li>contact@techsolve.com</li>
              <li>+44 20 1234 5678</li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-gray-300 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t dark:border-black/10 text-center dark:text-black/60">
          <p>&copy; {new Date().getFullYear()} TechSolve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

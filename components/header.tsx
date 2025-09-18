"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { usePathname, useRouter } from "next/navigation"

// Throttle function to limit scroll event firing
function throttle(func: (...args: any[]) => any, limit: number) {
  let inThrottle: boolean
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

const mainMenuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
]

const homeMenuItems = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  // Determine which menu items to show based on current page
  const menuItems = isHomePage ? homeMenuItems : mainMenuItems

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10
      console.log('Scroll detected, scrolled:', scrolled, 'scrollY:', window.scrollY)
      setIsScrolled(scrolled)
    }

    // Throttled scroll handler
    const throttledHandleScroll = throttle(handleScroll, 16) // ~60fps

    window.addEventListener("scroll", throttledHandleScroll)
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false)
    
    if (href.startsWith("#")) {
      // Handle section scrolling
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else if (!isHomePage && href === "#contact") {
        // Special case for contact section from other pages
        router.push("/#contact")
      }
    } else {
      // Handle page navigation
      router.push(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-white shadow-lg border-b border-gray-200 dark:border-gray-300 text-gray-900 dark:text-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary dark:text-white">TechSolve</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
          <Button className="ml-4" onClick={() => handleNavigation("/#contact")}>Get a Free Quote</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-white border-b dark:border-gray-300">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white py-2 text-left"
              >
                {item.name}
              </button>
            ))}
            <Button className="w-full mt-2" onClick={() => handleNavigation("/#contact")}>Get a Free Quote</Button>
          </div>
        </div>
      )}
    </header>
  )
}

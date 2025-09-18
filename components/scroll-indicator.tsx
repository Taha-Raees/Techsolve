"use client"

import { useEffect, useState, useCallback } from "react"
import { usePathname } from "next/navigation"

const pageSections = {
  "/": ["hero", "services", "process", "testimonials","projects", "contact"],
  "/about": ["values", "team", "story", "cta"],
  "/projects": ["projects"],
  "/services": ["services", "features", "pricing", "faq"]
}

// Throttle function to limit scroll event firing
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean
  return ((...args) => {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }) as T
}

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const sections = pageSections[pathname as keyof typeof pageSections] || []

  const handleScroll = useCallback(() => {
    // Calculate scroll progress
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    setScrollProgress(progress)

    // Determine active section
    const sectionElements = sections.map((id) => document.getElementById(id))
    const viewportHeight = window.innerHeight
    const viewportMiddle = window.scrollY + viewportHeight / 2

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const element = sectionElements[i]
      if (element) {
        const { top, bottom } = element.getBoundingClientRect()
        const elementTop = top + window.scrollY
        const elementBottom = bottom + window.scrollY

        if (elementTop <= viewportMiddle && elementBottom >= viewportMiddle) {
          setActiveSection(sections[i])
          break
        }
      }
    }
  }, [sections])

  useEffect(() => {
    if (sections.length === 0) return

    // Throttled scroll handler
    const throttledHandleScroll = throttle(handleScroll, 16) // ~60fps

    window.addEventListener("scroll", throttledHandleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [sections, handleScroll])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  if (sections.length === 0) return null

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative h-64 flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute h-full w-0.5 bg-gray-700 rounded-full">
          {/* Progress indicator */}
          <div
            className="absolute w-0.5 bg-teal-400 rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Section indicators */}
        {sections.map((section, index) => (
          <button
            key={section}
            className={`absolute w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              activeSection === section
                ? "bg-teal-400 border-teal-400 scale-125"
                : "bg-white border-gray-600 hover:border-teal-400"
            }`}
            style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
            onClick={() => scrollToSection(section)}
            aria-label={`Scroll to ${section} section`}
          >
            {/* Glow effect */}
            <span
              className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                activeSection === section ? "opacity-100" : "opacity-0"
              }`}
              style={{
                boxShadow: "0 0 10px 2px rgba(0, 200, 150, 0.5)",
                transform: "scale(1.5)",
              }}
            ></span>

            {/* Tooltip */}
            <span
              className={`absolute left-6 whitespace-nowrap px-2 py-1 text-xs font-medium rounded bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 transition-opacity duration-300 ${
                activeSection === section ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

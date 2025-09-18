"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

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

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  // Set the throttled scroll event listener
  useEffect(() => {
    const throttledToggleVisibility = throttle(toggleVisibility, 16) // ~60fps
    window.addEventListener("scroll", throttledToggleVisibility)
    return () => window.removeEventListener("scroll", throttledToggleVisibility)
  }, [toggleVisibility])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className="rounded-full shadow-md bg-white hover:bg-primary hover:text-white"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}

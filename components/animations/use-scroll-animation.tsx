"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"

interface UseScrollAnimationProps {
  threshold?: number
  direction?: AnimationDirection
  delay?: number
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  direction = "up",
  delay = 0,
  once = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            if (once) {
              observer.unobserve(currentRef)
            }
          } else if (!once) {
            setIsInView(false)
          }
        })
      },
      { threshold },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getAnimationStyles = () => {
    if (!isInView) {
      // Initial styles (before animation)
      const translateValue = direction !== "none" ? "30px" : "0px"
      const translateX = direction === "left" ? translateValue : direction === "right" ? `-${translateValue}` : "0px"
      const translateY = direction === "up" ? translateValue : direction === "down" ? `-${translateValue}` : "0px"

      return {
        opacity: 0,
        transform: `translate3d(${translateX}, ${translateY}, 0)`,
      }
    }

    // Animation styles (after in view)
    return {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: `opacity 0.6s ease-out, transform 0.6s ease-out ${delay}s`,
    }
  }

  return { ref, isInView, style: getAnimationStyles() }
}

'use client'

import type React from "react"
import { useScrollAnimation } from "./use-scroll-animation"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  threshold?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const { ref, style } = useScrollAnimation({
    direction,
    delay,
    threshold,
    once,
  })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

'use client'

import type React from "react"
import { Children, cloneElement, isValidElement } from "react"
import { useScrollAnimation } from "./use-scroll-animation"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  threshold?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "up",
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) {
  const { ref, isInView } = useScrollAnimation({
    direction: "none",
    threshold,
    once,
  })

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          const delay = isInView ? index * staggerDelay : 0

          return cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              opacity: isInView ? 1 : 0,
              transform: isInView
                ? "translate3d(0, 0, 0)"
                : `translate3d(0, ${direction === "up" ? "20px" : direction === "down" ? "-20px" : "0"}, 0)`,
              transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
            },
          })
        }
        return child
      })}
    </div>
  )
}

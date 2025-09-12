"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"

interface GlowContainerProps {
  children: ReactNode
  className?: string
  glowColor?: string
  lightGlowColor?: string
  darkGlowColor?: string
}

export function GlowContainer({
  children,
  className,
  glowColor,
  lightGlowColor = "rgba(0, 200, 150, 0.5)",
  darkGlowColor = "rgba(0, 200, 150, 0.5)",
}: GlowContainerProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const activeGlowColor = glowColor || (isDark ? darkGlowColor : lightGlowColor)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeGlowColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}

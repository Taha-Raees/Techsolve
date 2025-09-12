import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | TechSolve",
  description: "Explore our portfolio of successful tech solutions for small and medium enterprises.",
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

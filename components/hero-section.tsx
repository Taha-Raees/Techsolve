"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"
import { GlowContainer } from "./ui/glow-container"

const slides = [
  {
    image: "https://action-point.com/wp-content/uploads/2014/10/Software-Development-Team.jpg",
    alt: "Developer working on a project",
  },
  {
    image: "https://www.gloryassumptionspace.com/wp-content/uploads/2022/11/viber_image_2022-11-14_16-34-07-329.jpg",
    alt: "Dashboard UI example",
  },
  {
    image: "https://wp-int-blog.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/09/14090648/BI-Business-Intelligence-Developer-scaled.jpg",
    alt: "Chatbot demo interface",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center justify-center bg-[url('/images/b1.webp')] bg-cover">
      {/* Main content */}
      <div className="container-custom flex flex-col items-center justify-center w-full relative z-10 ">
        <div className="space-y-6 w-full flex flex-col items-center justify-center">
          <AnimatedSection direction="left" delay={0.1}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary text-center">
              Transform Your Business with <span className="text-gray-100">Tailored</span> Tech Solutions
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-white-300 max-w-xl text-center px-4">
              We build custom software, automation, and tools to streamline your workflow and help your business thrive
              in the digital age.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.5}>
            <div className="pt-4 flex justify-center">
              <Button size="lg" className="group">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Slanted bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white dark:bg-gray-900 z-40"
           style={{
             clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
             transform: "translateY(1px)" // Prevents any potential gap
           }}
      />
      
      {/* Optional: Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
    </section>
  )
}

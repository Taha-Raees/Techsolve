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
    <section className="pt-16 min-h-screen flex items-center dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom grid md:grid-cols-5 gap-8 items-center ">
        <div className="md:col-span-3 space-y-6">
          <AnimatedSection direction="left" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Transform Your Business with Tailored Tech Solutions
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              We build custom software, automation, and tools to streamline your workflow and help your business thrive
              in the digital age.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.5}>
            <div className="pt-4">
              <Button size="lg" className="group">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="right" delay={0.3} className="md:col-span-2">
          <GlowContainer className="aspect-square">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm py-1 px-3 rounded-full">
                Trusted by 50+ SMEs in Europe
              </div>
            </div>
          </GlowContainer>
        </AnimatedSection>
      </div>
    </section>
  )
}

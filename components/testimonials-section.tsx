"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animations/animated-section"
import { ConnectingBlob } from "./ui/connecting-blob"

const testimonials = [
  {
    quote:
      "Muhammad's team delivered our clinic booking system in 2 weeks! The solution has transformed how we manage appointments.",
    name: "Dr. Anna Müller",
    role: "Clinic Owner",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The inventory management system they built has saved us countless hours and reduced errors by 90%. Highly recommended!",
    name: "Marco Rossi",
    role: "Restaurant Chain CEO",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Their team understood our unique needs and delivered a custom solution that perfectly fits our workflow. Exceptional service!",
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className=" relative section-padding bg-transparent dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Why Clients Trust Us</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                      <Quote className="h-10 w-10 text-secondary/30 mb-4" />
                      <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-primary dark:bg-teal-400" : "bg-gray-300 dark:bg-gray-600"}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="hidden md:block absolute left-1/2 translate-x-4 -bottom-52 w-full h-64 pointer-events-none">
          <ConnectingBlob />
        </div>
      </div>
    </section>
  )
}

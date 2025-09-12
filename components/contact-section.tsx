"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Let's Build Your Solution</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with custom tech solutions? Get in touch with us today.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/30 p-6 border border-gray-100 dark:border-gray-700">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                  <Button className="mt-6" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Business Type
                    </label>
                    <Select name="business-type">
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="professional-services">Professional Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or requirements"
                      rows={5}
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      "Send Request"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary dark:text-teal-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium dark:text-gray-200">Email</h4>
                      <a href="mailto:contact@techsolve.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-teal-400 transition-colors">
                        contact@techsolve.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary dark:text-teal-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium dark:text-gray-200">Phone</h4>
                      <a href="tel:+491234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-teal-400 transition-colors">
                        +49 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary dark:text-teal-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium dark:text-gray-200">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">Graf johann straße 18, 47533 Kleve, Germany</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary hover:text-white dark:text-gray-300 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary hover:text-white dark:text-gray-300 p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary hover:text-white dark:text-gray-300 p-3 rounded-full transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Location</h3>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  {/* Google Maps Embed would go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <MapPin className="h-8 w-8 mr-2" />
                    <span>Google Maps Embed</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

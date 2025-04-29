'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { GlowContainer } from "@/components/ui/glow-container"
import Header from "@/components/header"
import { ImageGallery } from "@/components/ui/image-gallery"
import { InteractiveDemo } from "@/components/ui/interactive-demo"

export default function EcommercePortalProject() {
  // Sample gallery images - in a real project, these would be actual screenshots
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Customer dashboard",
      caption: "Personalized customer dashboard with order history and recommendations"
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Analytics overview",
      caption: "Business analytics dashboard showing key performance metrics"
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mobile customer portal",
      caption: "Mobile view of the customer portal for on-the-go access"
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Product recommendation engine",
      caption: "AI-powered product recommendation engine in action"
    }
  ]

  // Sample demo steps - in a real project, these would demonstrate actual functionality
  const demoSteps = [
    {
      title: "Customer Portal Login",
      description: "Customers can securely log in to access their personalized dashboard with order history and recommendations.",
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      title: "Order Management",
      description: "Customers can track orders, view order history, and manage returns all in one place.",
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      title: "Personalized Recommendations",
      description: "AI-powered recommendation engine suggests products based on browsing and purchase history.",
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      title: "Business Analytics",
      description: "Comprehensive analytics dashboard for business owners to track sales, customer behavior, and inventory.",
      image: "/placeholder.svg?height=600&width=800"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="container-custom">
          <div className="flex flex-col">
            <Link href="/projects" className="mb-6">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              E-commerce – Customer Portal & Analytics
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                <p className="font-medium">StyleHouse Online</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
                <p className="font-medium">E-commerce / Fashion</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="font-medium">12 weeks</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                <p className="font-medium">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600 dark:text-gray-300">
                StyleHouse Online, a growing fashion e-commerce business, was struggling with customer retention and
                lacked insights into customer behavior. Their existing platform offered a basic shopping experience with
                limited personalization and no way to track customer engagement or purchasing patterns.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                The business faced several key challenges:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>High cart abandonment rate (over 75%)</li>
                <li>Low customer retention (only 15% returning customers)</li>
                <li>Limited understanding of customer preferences</li>
                <li>Inefficient inventory management leading to stockouts or overstock</li>
                <li>No data-driven decision making capability</li>
              </ul>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Before Implementation</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a screenshot of the old e-commerce interface showing its limitations
                    </p>
                  </div>
                </div>
              </GlowContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We developed a comprehensive customer portal with integrated analytics that transformed the shopping
                experience. The solution included personalized product recommendations, order tracking, wish lists, and
                a loyalty program. For the business side, we implemented detailed analytics dashboards that provided
                insights into customer behavior, purchasing patterns, and inventory performance.
              </p>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Personalized customer dashboard with order history and recommendations</li>
                <li>• AI-powered product recommendation engine</li>
                <li>• Wish list and favorites functionality</li>
                <li>• Loyalty program with points and rewards</li>
                <li>• Business analytics dashboard with real-time insights</li>
                <li>• Inventory forecasting and management tools</li>
              </ul>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Firebase</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Stripe</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Google Analytics</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Algolia</span>
              </div>
            </div>
            <div>
              <ImageGallery images={galleryImages} />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">Interactive Demo</h3>
            <InteractiveDemo
              title="Customer Portal & Analytics Demo"
              description="See how the customer portal and analytics dashboard work together to create a seamless experience."
              steps={demoSteps}
            />
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Architecture Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We designed a scalable architecture that could handle growing user numbers and increasing data volume.
                The solution used:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 mb-6">
                <li>Vue.js for the frontend with Vuex for state management</li>
                <li>Firebase for authentication, real-time database, and cloud functions</li>
                <li>Algolia for fast, scalable search functionality</li>
                <li>Google Analytics for tracking user behavior</li>
                <li>Stripe for secure payment processing</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Recommendation Engine</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The recommendation engine used a combination of collaborative filtering and content-based filtering to
                suggest products to users. It analyzed:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Purchase history</li>
                <li>Browsing behavior</li>
                <li>Similar user preferences</li>
                <li>Product attributes and categories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

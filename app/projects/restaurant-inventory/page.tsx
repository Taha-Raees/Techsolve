import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { GlowContainer } from "@/components/ui/glow-container"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ImageGallery } from "@/components/ui/image-gallery"
import { InteractiveDemo } from "@/components/ui/interactive-demo"

export default function RestaurantInventoryProject() {
  // Sample gallery images
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Inventory Dashboard",
      caption: "Main inventory dashboard showing stock levels across all locations",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mobile Scanning Interface",
      caption: "Staff using the mobile app to scan inventory items",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Analytics View",
      caption: "Analytics dashboard showing inventory trends and forecasting",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Order Management",
      caption: "Automated ordering system interface",
    },
  ]

  // Sample demo steps
  const demoSteps = [
    {
      title: "Real-time Inventory Tracking",
      description:
        "The system provides real-time visibility of inventory across all restaurant locations, with color-coded indicators for stock levels.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Barcode Scanning",
      description:
        "Staff can quickly update inventory by scanning product barcodes with their mobile devices, eliminating manual counting errors.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Automated Reordering",
      description:
        "When stock levels fall below the defined threshold, the system automatically generates purchase orders for approval.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics provide insights into inventory trends, helping management make data-driven decisions.",
      image: "/placeholder.svg?height=600&width=800",
    },
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
              Restaurant Chain – Inventory Management
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                <p className="font-medium">FoodWorks Group</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
                <p className="font-medium">Hospitality</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="font-medium">8 weeks</p>
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
                FoodWorks Group, a chain of 12 restaurants, was struggling with inventory management across multiple
                locations. Manual processes led to overstocking, waste, and inconsistent ordering, impacting their
                bottom line. Each location had its own system, making it difficult for management to get a clear picture
                of inventory across the entire chain.
              </p>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Problem Visualization</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place an image showing paper inventory sheets or disorganized storage areas
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
                We developed a centralized inventory management system with real-time tracking, automated reordering,
                and comprehensive analytics. The mobile app allowed staff to update inventory on the go, while the
                management dashboard provided insights for better decision-making across all locations.
              </p>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Real-time inventory tracking across all locations</li>
                <li>• Automated reordering based on customizable thresholds</li>
                <li>• Barcode scanning for quick updates</li>
                <li>• Waste tracking and analytics</li>
                <li>• Supplier management and order history</li>
                <li>• Role-based access control for staff</li>
              </ul>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">React Native</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            <div>
              <InteractiveDemo
                title="Inventory Management System"
                description="Experience how the inventory management system works across different scenarios."
                steps={demoSteps}
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">System Gallery</h3>
            <ImageGallery images={galleryImages} />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mobile Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The mobile application allowed staff to update inventory in real-time, scan barcodes for quick product
                identification, and receive notifications about low stock items. This significantly reduced the time
                spent on inventory management tasks.
              </p>
            </div>
            <div>
              <GlowContainer className="aspect-[9/16] max-w-[300px] mx-auto">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Mobile App Screenshot</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a screenshot of the mobile inventory scanning interface
                    </p>
                  </div>
                </div>
              </GlowContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Reduced food waste by 30%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Decreased inventory costs by 22%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Improved order accuracy to 98%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Saved 15 hours per week in manual inventory tasks
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">ROI achieved within 5 months</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "The inventory management system they built has saved us countless hours and reduced errors by 90%.
                  We've seen a significant reduction in food waste and our staff can focus more on customer service
                  instead of counting stock."
                </p>
                <p className="font-medium">Marco Rossi</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CEO, FoodWorks Group</p>
              </div>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Results Visualization</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a chart showing the reduction in food waste and inventory costs after implementation
                    </p>
                  </div>
                </div>
              </GlowContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Business Operations?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a custom solution tailored to your specific business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg">Schedule a Consultation</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

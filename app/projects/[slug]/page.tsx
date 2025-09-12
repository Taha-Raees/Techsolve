// Project case studies data
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { GlowContainer } from "@/components/ui/glow-container"
import { LaptopFrame } from "@/components/ui/laptop-frame"
import { MobileFrame } from "@/components/ui/mobile-frame"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ImageGallery } from "@/components/ui/image-gallery"
import { InteractiveDemo } from "@/components/ui/interactive-demo"
import { getProjectData } from "../data/projects-data"

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectData(slug)

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col">
        <Header />
        <section className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/projects">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
                <p className="font-medium">{project.industry}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                <p className="font-medium">{project.year}</p>
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
              <p className="text-gray-600 dark:text-gray-300">{project.challenge}</p>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  <img
                    src={project.galleryImages[0]?.src || "/placeholder.svg?height=400&width=600"}
                    alt="Problem visualization"
                    className="w-full h-full object-cover"
                  />
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
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.solution}</p>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">System Gallery</h3>
              <ImageGallery images={project.galleryImages} />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Interactive Demo</h3>
            <LaptopFrame className="mb-8">
              <div className="aspect-video bg-gray-100 dark:bg-gray-900">
            <iframe
 src={project.iframeUrl}
  className="w-full h-full"
  loading="lazy"
  allowFullScreen
></iframe>

            </div>
            </LaptopFrame>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mobile Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our solutions are designed to be mobile-first, ensuring your team can access key features from anywhere, improving productivity and responsiveness.
              </p>
            </div>
            <div>
              <MobileFrame className="mx-auto">
                <iframe
                  src={project.iframeUrl}
                  className="w-full h-full scale-[0.5] origin-top"
                  style={{
                    width: '200%',
                    height: '200%',
                    transform: 'scale(0.5)',
                    transformOrigin: 'top left'
                  }}
                  loading="lazy"
                  allowFullScreen
                />
              </MobileFrame>
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
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">"{project.testimonial.quote}"</p>
                <p className="font-medium">{project.testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{project.testimonial.position}</p>
              </div>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  <img
                    src={project.galleryImages[1]?.src || "/placeholder.svg?height=400&width=600"}
                    alt="Results visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlowContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a custom solution tailored to your specific business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
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

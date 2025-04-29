import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { GlowContainer } from "@/components/ui/glow-container"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This is a template for project case studies
// In a real application, you would fetch this data from a CMS or database
const projectData = {
  "restaurant-inventory": {
    title: "Restaurant Chain – Inventory Management",
    client: "FoodWorks Group",
    industry: "Hospitality",
    duration: "8 weeks",
    year: "2023",
    challenge:
      "FoodWorks Group, a chain of 12 restaurants, was struggling with inventory management across multiple locations. Manual processes led to overstocking, waste, and inconsistent ordering, impacting their bottom line.",
    solution:
      "We developed a centralized inventory management system with real-time tracking, automated reordering, and comprehensive analytics. The mobile app allowed staff to update inventory on the go, while the management dashboard provided insights for better decision-making.",
    results: [
      "Reduced food waste by 30%",
      "Decreased inventory costs by 22%",
      "Improved order accuracy to 98%",
      "Saved 15 hours per week in manual inventory tasks",
      "ROI achieved within 5 months",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "React Native", "AWS"],
    testimonial: {
      quote:
        "The inventory management system they built has saved us countless hours and reduced errors by 90%. Highly recommended!",
      author: "Marco Rossi",
      position: "Restaurant Chain CEO",
    },
  },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const project = projectData[slug as keyof typeof projectData] || {
    title: "Project Case Study",
    client: "Client Name",
    industry: "Industry",
    duration: "Project Duration",
    year: "Year",
    challenge: "Description of the challenge the client was facing.",
    solution: "Explanation of the solution we provided.",
    results: ["Result 1", "Result 2", "Result 3"],
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    testimonial: {
      quote: "Client testimonial about the project.",
      author: "Client Name",
      position: "Position",
    },
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
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Problem Visualization</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place an image showing the problem (e.g., manual inventory process, paper records, or frustrated
                      staff)
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
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Solution Screenshot - Desktop</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a screenshot of the main dashboard or key feature of the solution
                    </p>
                  </div>
                </div>
              </GlowContainer>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.solution}</p>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mobile Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The mobile application allowed staff to update inventory in real-time, scan barcodes for quick product
                identification, and receive notifications about low stock items.
              </p>
            </div>
            <div>
              <GlowContainer className="aspect-[9/16] max-w-[300px] mx-auto">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Mobile App Screenshot</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a screenshot of the mobile application interface
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
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Results Visualization</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a chart or graph showing the improvement in key metrics after implementation
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

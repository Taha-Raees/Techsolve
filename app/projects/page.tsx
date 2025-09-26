import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Filter } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedSection } from "@/components/animations/animated-section"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const projects = [
  {
    slug: "retail-management",
    title: "Cross-Platform Retail Management System",
    client: "Retail Solutions Co",
    description:
      "A comprehensive retail management solution with point-of-sale capabilities, inventory tracking, customer relationship management, and multi-platform support including web and mobile applications.",
    image: "/images/rms-pos.webp",
    techStack: ["Next.js", "React", "TypeScript", "Capacitor", "WebSocket"],
    industry: "Retail",
    year: "2024",
  },
  {
    slug: "restaurant-management-pro",
    title: "Single-Location Restaurant Management Pro",
    client: "Independent Restaurant Solutions",
    description:
      "A streamlined restaurant management platform designed specifically for single-location restaurants, featuring table management, menu handling, POS integration, and comprehensive operational workflow management.",
    image: "/images/rmspro -dashboard.webp",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    industry: "Hospitality",
    year: "2024",
  },
  {
    slug: "clinic-management",
    title: "Comprehensive Healthcare Management System",
    client: "HealthCare Plus",
    description:
      "A modern healthcare management platform featuring appointment booking, patient records management, doctor profiles, and a comprehensive facility showcase with testimonials and automated patient communication.",
    image: "/images/Healtcare-landingpage.webp",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    industry: "Healthcare",
    year: "2024",
  },
  {
    slug: "zaviah-smart-platform",
    title: "Smart Hardware-Software Integration Platform",
    client: "Smart Solutions Inc",
    description:
      "An innovative platform that bridges physical smart devices with cloud software, enabling automated queue management, appointment scheduling, attendance tracking, and parcel detection for modern businesses.",
    image: "/images/Zaviah-landing.webp",
    techStack: ["Next.js", "React", "TypeScript", "Hardware Integration"],
    industry: "Technology",
    year: "2024",
  },
  {
    slug: "zetratech-admin-system",
    title: "ZetraTech Admin Platform",
    client: "Multi-Tenant Solutions",
    description:
      "A comprehensive administrative platform for managing multiple retail stores with shared database architecture, featuring subscription management, user roles, audit trails, and real-time system monitoring.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js 15", "Node.js", "Fastify", "PostgreSQL", "Prisma ORM"],
    industry: "Admin Software",
    year: "2024",
  },
  {
    slug: "restaurant-inventory",
    title: "Multi-Location Restaurant Inventory Management",
    client: "FoodWorks Group",
    description:
      "A centralized inventory management system designed for restaurant chains with real-time tracking, multi-location support, and role-based access control for seamless operations across multiple restaurant locations.",
    image: "/images/foodwork-Dashboard.webp",
    techStack: ["Next.js", "Node.js", "MongoDB", "React Native"],
    industry: "Hospitality",
    year: "2023",
  },
]

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our portfolio of successful tech solutions that have helped SMEs transform their operations and
              achieve their business goals.
            </p>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Select defaultValue="all-industries">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-industries">All Industries</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
              </SelectContent>
              </Select>

              <Select defaultValue="all-tech">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-tech">All Technologies</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="vue">Vue.js</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="mongodb">MongoDB</SelectItem>
                  <SelectItem value="postgresql">PostgreSQL</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-years">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-years">All Years</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 gap-16" staggerDelay={0.1}>
            {projects.map((project, index) => (
              <AnimatedSection key={index} direction="up" delay={0.1 * index}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="order-2 md:order-1">
                    <span className="text-secondary font-medium">{project.industry}</span>
                    <h2 className="text-3xl font-bold text-primary mb-4">{project.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Client: {project.client}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button>View Case Study</Button>
                    </Link>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  )
}

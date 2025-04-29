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
    slug: "restaurant-inventory",
    title: "Restaurant Chain – Inventory Management",
    client: "FoodWorks Group",
    description:
      "A comprehensive inventory management solution that streamlined operations across 12 restaurant locations, reducing waste and improving efficiency.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js", "Node.js", "MongoDB", "React Native"],
    industry: "Hospitality",
    year: "2023",
  },
  {
    slug: "medical-booking",
    title: "Medical Clinic – Booking System",
    client: "HealthFirst Clinic",
    description:
      "An intuitive appointment booking platform that increased bookings by 45% and reduced no-shows through automated reminders and a streamlined patient experience.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "Express", "PostgreSQL", "Twilio API"],
    industry: "Healthcare",
    year: "2023",
  },
  {
    slug: "ecommerce-portal",
    title: "E-commerce – Customer Portal",
    client: "StyleHouse Online",
    description:
      "A comprehensive customer portal with integrated analytics that improved customer satisfaction by 60% and provided valuable insights for business decision-making.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Vue.js", "Firebase", "Stripe", "Google Analytics"],
    industry: "E-commerce",
    year: "2023",
  },
  {
    slug: "manufacturing-qc",
    title: "Manufacturing – Quality Control App",
    client: "PrecisionTech Industries",
    description:
      "A mobile quality control application that streamlined inspection processes and reduced defects by 35% in the first quarter after implementation.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React Native", "GraphQL", "AWS", "MongoDB"],
    industry: "Manufacturing",
    year: "2022",
  },
  {
    slug: "logistics-tracking",
    title: "Logistics – Fleet Management System",
    client: "EuroFreight Solutions",
    description:
      "A comprehensive fleet management system with real-time tracking that improved delivery times by 28% and reduced fuel costs by 15%.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Angular", "Node.js", "PostgreSQL", "Google Maps API"],
    industry: "Logistics",
    year: "2022",
  },
  {
    slug: "education-platform",
    title: "Education – Learning Management System",
    client: "EduConnect Institute",
    description:
      "A modern learning management system that increased student engagement by 40% and provided detailed analytics on learning patterns and outcomes.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "Django", "PostgreSQL", "AWS"],
    industry: "Education",
    year: "2021",
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
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
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

import { Button } from "@/components/ui/button"
import { Code, Settings, Workflow } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"
import { StaggerContainer } from "./animations/stagger-container"
import { ConnectingBlob } from "./ui/connecting-blob"

const services = [
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored systems to match your unique business needs.",
  },
  {
    icon: Settings,
    title: "Automation Solutions",
    description: "Reduce manual work and scale with confidence.",
  },
  {
    icon: Workflow,
    title: "Workflow Streamlining",
    description: "Optimize processes and boost team productivity.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 bg-transparent dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive tech solutions designed to help your business grow and succeed.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="p-8 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center">
                <service.icon className="h-12 w-12 text-cyan-400 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <Button variant="outline" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
            </Button>
          </div>
        </AnimatedSection>
      </div>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-56 w-full h-64 pointer-events-none">
        <ConnectingBlob />
      </div>
    </section>
  )
}

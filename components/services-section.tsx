import { Button } from "@/components/ui/button"
import { Figma, Code, MessageSquare, BarChart, Smartphone, Database } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"
import { StaggerContainer } from "./animations/stagger-container"
import Image from "next/image"
import { GlowContainer } from "./ui/glow-container"

const services = [
  {
    icon: Code,
    title: "Custom Apps",
    description: "Build scalable apps for your unique business needs",
  },
  {
    icon: Database,
    title: "Automation Tools",
    description: "Streamline workflows and reduce manual tasks",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    description: "Create intuitive interfaces your users will love",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Reach customers on any device with responsive apps",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & AI",
    description: "Implement intelligent automation for customer service",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Gain insights from your data to drive decisions",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding gradient-bg overflow-hidden">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our comprehensive suite of tech solutions designed specifically for small and medium enterprises.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left">
            <StaggerContainer className="grid gap-6">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-2px]"
                >
                  <service.icon className="h-10 w-10 text-primary dark:text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative">
            <GlowContainer className="rounded-[2rem] overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/digital-main.png"
                  alt="Digital Transformation"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </GlowContainer>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">
            <GlowContainer className="rounded-[2rem] overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/digital.png"
                  alt="Mobile Payment Solutions"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </GlowContainer>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <StaggerContainer className="grid gap-6">
              {services.slice(3, 6).map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-2px]"
                >
                  <service.icon className="h-10 w-10 text-primary dark:text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <Button variant="outline" className="group">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

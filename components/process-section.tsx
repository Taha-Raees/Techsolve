import { Headphones, PenTool, Code, Rocket } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"
import { StaggerContainer } from "./animations/stagger-container"

const processSteps = [
  {
    icon: Headphones,
    title: "Discover",
    description: "We listen to your needs",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Craft a solution blueprint",
  },
  {
    icon: Code,
    title: "Develop",
    description: "Build, test, and refine",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "Launch and support",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-transparent">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Our proven process ensures we deliver high-quality solutions that meet your business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.2}>
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-full p-4 border border-gray-200 dark:border-gray-700 shadow-sm mb-4">
                  <step.icon className="h-8 w-8 text-primary dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>

                {/* Step number */}
                <div className="absolute top-0 right-0 md:right-auto md:-top-2 md:-left-2 bg-cyan-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

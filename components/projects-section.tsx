import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"
import Link from "next/link"



export default function ProjectsSection() {
  return (
    <section id="projects" className="m-10 p-10 rounded-lg bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=80&w=1920&h=1080&fit=crop')] bg-cover bg-center bg-no-repeat">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 text-white">Our Work Speaks for Itself</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Explore our portfolio of successful projects that have helped SMEs transform their operations.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline" className="group">
                See All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Preload optimized background image */}
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=80&w=1920&h=1080&fit=crop"
        alt=""
        className="hidden"
        loading="eager"
      />
    </section>
  )
}

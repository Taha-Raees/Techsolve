import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
     
      <div id="process">
        <ProcessSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
       <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <CookieBanner />
      {/* <ScrollToTop /> */}
      <ScrollIndicator />
    </main>
  )
}

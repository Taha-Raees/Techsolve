'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { GlowContainer } from "@/components/ui/glow-container"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ImageGallery } from "@/components/ui/image-gallery"
import { InteractiveDemo } from "@/components/ui/interactive-demo"

export default function MedicalBookingProject() {
  // Sample gallery images - in a real project, these would be actual screenshots
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Booking calendar interface",
      caption: "Intuitive calendar interface for scheduling appointments",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Patient dashboard",
      caption: "Patient dashboard showing upcoming appointments and medical history",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Staff management view",
      caption: "Staff view for managing appointments and patient information",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mobile booking interface",
      caption: "Mobile-responsive booking interface for patients on the go",
    },
  ]

  // Sample demo steps - in a real project, these would demonstrate actual functionality
  const demoSteps = [
    {
      title: "Patient Registration",
      description: "New patients can easily create an account with basic information and medical history.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Appointment Booking",
      description: "Patients can view available time slots and book appointments with their preferred doctor.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Automated Reminders",
      description: "The system sends SMS and email reminders to reduce no-shows and improve attendance.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Staff Dashboard",
      description: "Staff can manage appointments, view patient information, and adjust schedules as needed.",
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
              Medical Clinic – Patient Booking System
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                <p className="font-medium">HealthFirst Clinic</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
                <p className="font-medium">Healthcare</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="font-medium">10 weeks</p>
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
                HealthFirst Clinic was struggling with an outdated appointment booking system that relied heavily on
                phone calls and manual scheduling. This led to long wait times for patients, double-bookings, and a high
                rate of no-shows. Staff spent excessive time managing the schedule instead of focusing on patient care.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">The clinic needed a modern solution that would:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Allow patients to book appointments online 24/7</li>
                <li>Reduce the administrative burden on staff</li>
                <li>Minimize no-shows and last-minute cancellations</li>
                <li>Integrate with their existing patient management system</li>
                <li>Provide analytics on appointment patterns and resource utilization</li>
              </ul>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Before Implementation</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place an image showing paper appointment books or outdated scheduling software
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
                We developed a comprehensive online booking system that allowed patients to schedule appointments 24/7
                through a user-friendly interface. The solution included automated reminders via SMS and email, a staff
                dashboard for managing appointments, and integration with the clinic's existing electronic health record
                system.
              </p>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Online self-scheduling for patients with real-time availability</li>
                <li>• Automated SMS and email appointment reminders</li>
                <li>• Staff dashboard for appointment management</li>
                <li>• Integration with existing EHR system</li>
                <li>• Analytics dashboard for appointment patterns</li>
                <li>• Mobile-responsive design for patients and staff</li>
              </ul>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Twilio API</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">OAuth 2.0</span>
              </div>
            </div>
            <div>
              <ImageGallery images={galleryImages} />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">See How It Works</h3>
            <InteractiveDemo
              title="Booking System Demo"
              description="Experience the intuitive booking process from patient registration to appointment confirmation."
              steps={demoSteps}
            />
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
                  <span className="text-gray-600 dark:text-gray-300">Appointment bookings increased by 45%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">No-show rate decreased from 18% to 5%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Staff saved 25 hours per week on administrative tasks
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Patient satisfaction scores improved by 35%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">ROI achieved within 4 months</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "Muhammad's team delivered our clinic booking system in 2 weeks! The solution has transformed how we
                  manage appointments and significantly improved our patient experience."
                </p>
                <p className="font-medium">Dr. Anna Müller</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Clinic Owner, HealthFirst</p>
              </div>
            </div>
            <div>
              <GlowContainer className="aspect-video">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Results Visualization</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a chart showing the decrease in no-shows and increase in bookings after implementation
                    </p>
                  </div>
                </div>
              </GlowContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Implementation Process</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative grid md:grid-cols-8 gap-4 md:gap-6 items-start">
                <div className="md:col-span-2 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary dark:bg-teal-400 -ml-2 hidden md:block"></div>
                  <div className="md:pl-8">
                    <h3 className="font-semibold text-primary dark:text-teal-400">Phase 1</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Weeks 1-2</p>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h4 className="text-lg font-medium mb-2">Discovery & Planning</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We conducted extensive interviews with clinic staff and patients to understand pain points and
                    requirements. This phase included workflow analysis, competitive research, and technical planning.
                  </p>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      "The TechSolve team took the time to really understand our processes before suggesting solutions.
                      This made a huge difference in the final product."
                    </p>
                    <p className="text-sm font-medium mt-2">— Clinic Office Manager</p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative grid md:grid-cols-8 gap-4 md:gap-6 items-start">
                <div className="md:col-span-2 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary dark:bg-teal-400 -ml-2 hidden md:block"></div>
                  <div className="md:pl-8">
                    <h3 className="font-semibold text-primary dark:text-teal-400">Phase 2</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Weeks 3-6</p>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h4 className="text-lg font-medium mb-2">Design & Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We created wireframes and prototypes for user testing, then built the core booking system with
                    patient and staff interfaces. This phase included integration with the clinic's existing EHR system.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Early wireframe</p>
                    </div>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Final design</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative grid md:grid-cols-8 gap-4 md:gap-6 items-start">
                <div className="md:col-span-2 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary dark:bg-teal-400 -ml-2 hidden md:block"></div>
                  <div className="md:pl-8">
                    <h3 className="font-semibold text-primary dark:text-teal-400">Phase 3</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Weeks 7-8</p>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h4 className="text-lg font-medium mb-2">Testing & Training</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We conducted thorough testing with staff and a select group of patients. This phase included fixing
                    bugs, optimizing performance, and training staff on the new system.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative grid md:grid-cols-8 gap-4 md:gap-6 items-start">
                <div className="md:col-span-2 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary dark:bg-teal-400 -ml-2 hidden md:block"></div>
                  <div className="md:pl-8">
                    <h3 className="font-semibold text-primary dark:text-teal-400">Phase 4</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Weeks 9-10</p>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h4 className="text-lg font-medium mb-2">Launch & Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We launched the system with a phased rollout, starting with a subset of appointments before moving
                    to full implementation. Post-launch, we monitored performance and made optimizations based on real
                    usage data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a custom solution tailored to your specific healthcare needs.
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

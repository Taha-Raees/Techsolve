import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"
import { GlowContainer } from "@/components/ui/glow-container"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedSection } from "@/components/animations/animated-section"
import { StaggerContainer } from "@/components/animations/stagger-container"

const teamMembers = [
  {
    name: "Muhammad Taha Raees",
    role: "Co-Founder & CTO",
    image: "/images/file.png",
    bio: "As CTO, Taha oversees all technical operations with 5+ years experience in cloud architecture and system design. He specializes in building scalable solutions that drive business growth through technology innovation.",
    skills: ["Cloud Architecture", "DevOps", "System Security", "Technical Leadership"],
    social: {
      linkedin: "#",
      github: "#",
      email: "taha.raees@techsolve.com",
    },
  },
  {
    name: "Humayun Zahid Chohan",
    role: "Co-Founder & CFO",
    image: "/images/humyun.png",
    bio: "With 7 years in financial strategy, Humayun manages our fiscal operations and investment strategies. He specializes in SaaS financial models and has helped scale multiple tech startups to profitability.",
    skills: ["Financial Planning", "Risk Management", "Fundraising", "Business Strategy"],
    social: {
      linkedin: "#",
      github: "#",
      email: "humayun.chohan@techsolve.com",
    },
  },
  {
    name: "Franziska Müller",
    role: "Co-Founder & CMO",
    image: "/images/cmo-profile.jpg",
    bio: "Franziska drives our brand strategy with 8+ years in digital marketing. She has led successful campaigns and specializes in SaaS product launches and customer acquisition.",
    skills: ["Brand Strategy", "Digital Marketing", "SEO/SEM", "Customer Analytics"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "franziska.muller@techsolve.com",
    },
  },
]

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="self-start mb-6">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Team</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're a diverse team of developers, designers, and problem solvers passionate about creating technology
              solutions that help businesses thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="values" className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These core principles guide everything we do and shape how we work with our clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary dark:text-teal-400 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Client-Focused Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize understanding your unique business needs and challenges to deliver solutions that truly
                  make a difference.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary dark:text-teal-400 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to quality code, robust architecture, and staying at the forefront of technology
                  trends.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary dark:text-teal-400 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in clear, honest communication throughout the project lifecycle, ensuring you're always
                  informed and involved.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section id="team" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Experts</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Meet the talented individuals who make our company exceptional.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-24">
            {teamMembers.map((member, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <span className="text-secondary font-medium">{member.role}</span>
                      <h2 className="text-3xl font-bold text-primary mb-4">{member.name}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={member.social.linkedin}
                          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-teal-400"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.github}
                          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-teal-400"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-teal-400"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="relative w-[480px] h-[480px] mx-auto">
                        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-blob transform rotate-45 scale-[0.85] translate-x-6" />
                        <div className="absolute inset-0 bg-secondary/10 dark:bg-secondary/20 rounded-blob transform -rotate-12 scale-90 -translate-x-6" />
                        <GlowContainer className="relative w-96 h-96 mx-auto mt-12">
                          <div className="relative w-96 h-96 rounded-[52.5rem]  overflow-hidden ">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </GlowContainer>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="relative w-[480px] h-[480px] mx-auto">
                        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-blob transform rotate-45 scale-[0.85] translate-x-6" />
                        <div className="absolute inset-0 bg-secondary/10 dark:bg-secondary/20 rounded-blob transform -rotate-12 scale-90 -translate-x-6" />
                        <GlowContainer className="relative w-96 h-96 mx-auto mt-12">
                        <div className="relative w-96 h-96 rounded-[52.5rem]  overflow-hidden ">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </GlowContainer>
                      </div>
                    </div>
                    <div>
                      <span className="text-secondary font-medium">{member.role}</span>
                      <h2 className="text-3xl font-bold text-primary mb-4">{member.name}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-teal-400"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-teal-400"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-teal-400"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                TechSolve was founded in 2018 with a simple mission: make powerful technology accessible to small and
                medium businesses. We saw that many SMEs were being left behind in the digital transformation because
                they couldn't afford enterprise-level solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Starting with just three team members, we've grown to a team of dedicated professionals serving clients
                across Europe. Our focus has always been on creating practical, scalable solutions that deliver real
                business value.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we're proud to have helped over 50 businesses transform their operations through custom
                technology solutions that grow with their needs.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <GlowContainer className="aspect-square">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Image placeholder with instructions */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Team Photo</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Place a photo of the team working together or in the office
                    </p>
                  </div>
                </div>
              </GlowContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our team can help bring your technology vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const techsolveKnowledge = {
  company: {
    name: "TechSolve",
    founded: 2018,
    mission: "Make powerful technology accessible to small and medium businesses",
    values: [
      "Client-Focused Solutions: We prioritize understanding your unique business needs and challenges",
      "Technical Excellence: We're committed to quality code, robust architecture, and staying at the forefront of technology trends",
      "Transparent Communication: We believe in clear, honest communication throughout the project lifecycle"
    ],
    location: "Europe",
    clientsHelped: "over 50 businesses"
  },

  team: [
    {
      name: "Muhammad Taha Raees",
      role: "Co-Founder & CTO",
      experience: "5+ years in cloud architecture and system design",
      skills: ["Cloud Architecture", "DevOps", "System Security", "Technical Leadership"],
      email: "taha.raees@techsolve.com"
    },
    {
      name: "Humayun Zahid Chohan",
      role: "Co-Founder & CFO",
      experience: "7 years in financial strategy",
      skills: ["Financial Planning", "Risk Management", "Fundraising", "Business Strategy"],
      email: "humayun.chohan@techsolve.com"
    },
    {
      name: "Franziska Müller",
      role: "Co-Founder & CMO",
      experience: "8+ years in digital marketing",
      skills: ["Brand Strategy", "Digital Marketing", "SEO/SEM", "Customer Analytics"],
      email: "franziska.muller@techsolve.com"
    }
  ],

  services: [
    {
      name: "Custom Software",
      description: "Tailored systems to match your unique business needs"
    },
    {
      name: "Automation Solutions",
      description: "Reduce manual work and scale with confidence"
    },
    {
      name: "Workflow Streamlining",
      description: "Optimize processes and boost team productivity"
    }
  ],

  projects: {
    "restaurant-inventory": {
      title: "Multi-Location Restaurant Inventory Management",
      client: "FoodWorks Group",
      industry: "Hospitality",
      duration: "8 weeks",
      year: "2023",
      challenge: "FoodWorks Group was struggling with inventory management across 12 locations. Manual processes led to overstocking, waste, and inconsistent ordering, impacting their bottom line.",
      solution: "Developed centralized inventory management system with real-time tracking, automated reordering, and comprehensive analytics. Mobile app for staff updates.",
      results: [
        "Reduced food waste by 30%",
        "Decreased inventory costs by 22%",
        "Improved order accuracy to 98%",
        "Saved 15 hours per week",
        "ROI achieved within 5 months"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "React Native", "AWS"],
      demoUrl: "https://foodwork.vercel.app/",
      keyFeatures: [
        "Real-time inventory tracking across all locations",
        "Automated reordering based on customizable thresholds",
        "Barcode scanning for quick updates",
        "Waste tracking and analytics",
        "Supplier management and order history",
        "Role-based access control"
      ]
    },

    "clinic-management": {
      title: "Comprehensive Healthcare Management System",
      client: "HealthCare Plus",
      industry: "Healthcare",
      duration: "12 weeks",
      year: "2024",
      challenge: "HealthCare Plus clinic was managing appointments and records through outdated systems, leading to scheduling conflicts and inefficient workflows.",
      solution: "Built comprehensive platform with appointment booking, record management, doctor profiles, and automated WhatsApp communication.",
      results: [
        "Reduced appointment errors by 95%",
        "Improved patient satisfaction by 45%",
        "Decreased admin workload by 60%",
        "Increased booking conversion by 35%"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Twilio API"],
      iframeUrl: "https://cms-tau-eight.vercel.app",
      keyFeatures: [
        "Online appointment booking system",
        "Electronic health record management",
        "Doctor profile showcase",
        "WhatsApp notifications",
        "AI-powered scheduling",
        "Secure patient data management"
      ]
    },

    "retail-management": {
      title: "Cross-Platform Retail Management System",
      client: "Retail Solutions Co",
      industry: "Retail",
      duration: "10 weeks",
      year: "2024",
      challenge: "Retail Solutions Co needed unified retail operations across physical and online channels with fragmented existing systems.",
      solution: "Comprehensive retail system with POS integration, real-time inventory, customer management, and multi-platform support.",
      results: [
        "Improved inventory accuracy to 99.5%",
        "Increased operational efficiency by 50%",
        "Reduced stock-outs by 40%",
        "Enhanced customer experience"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Capacitor", "WebSocket"],
      iframeUrl: "https://rms-front-server.vercel.app/",
      keyFeatures: [
        "Modern POS system",
        "Multi-location inventory synchronization",
        "Customer relationship management",
        "E-commerce integration",
        "Real-time analytics"
      ]
    },

    "restaurant-management-pro": {
      title: "Single-Location Restaurant Management Pro",
      client: "Independent Restaurant Solutions",
      industry: "Hospitality",
      duration: "6 weeks",
      year: "2024",
      challenge: "Single-location restaurants needed affordable systems for table management, POS, and staff scheduling without complexity of multi-location platforms.",
      solution: "Streamlined platform with integrated table management, menu handling, POS, and staff optimization for single-location restaurants.",
      results: [
        "Improved table turnover by 40%",
        "Reduced costs by 20%",
        "Increased productivity by 30%",
        "Enhanced service"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      iframeUrl: "https://rms-pro.vercel.app/",
      keyFeatures: [
        "Interactive table management",
        "Dynamic menu management",
        "Integrated POS",
        "Staff scheduling",
        "Sales analytics"
      ]
    },

    "zaviah-smart-platform": {
      title: "Smart Hardware-Software Integration Platform",
      client: "Smart Solutions Inc",
      industry: "Technology",
      duration: "14 weeks",
      year: "2024",
      challenge: "Bridging gap between smart hardware devices and software platforms, lacking flexibility for diverse hardware integration.",
      solution: "Platform connecting smart devices with cloud software featuring automated queue management, appointment scheduling, NFC attendance, and parcel detection.",
      results: [
        "Reduced manual workflow by 80%",
        "Improved wait times by 50%",
        "Increased efficiency by 65%",
        "Enhanced integration capabilities"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Hardware Integration", "IoT"],
      iframeUrl: "https://zaviah.vercel.app/",
      keyFeatures: [
        "Multi-vendor hardware support",
        "Automated workflows",
        "Real-time data synchronization",
        "NFC attendance system",
        "Parcel tracking"
      ]
    },

    "zetratech-admin-system": {
      title: "ZetraTech Admin Platform",
      client: "Multi-Tenant Solutions",
      industry: "Admin Software",
      duration: "10 weeks",
      year: "2024",
      challenge: "Managing multiple retail stores across shared database ecosystem with store creation, subscription management, and monitoring.",
      solution: "Admin platform with PostgreSQL, Prisma ORM, JWT authentication, real-time analytics, and multi-tenant architecture.",
      results: [
        "Reduced administrative overhead by 70%",
        "Improved visibility",
        "Enhanced data integrity",
        "Real-time monitoring"
      ],
      technologies: ["Next.js 15", "Node.js", "Fastify", "PostgreSQL", "Prisma ORM", "JWT"],
      iframeUrl: "https://zetratech-front.vercel.app/",
      keyFeatures: [
        "Multi-tenant store management",
        "Advanced user roles",
        "Subscription engine",
        "Real-time analytics",
        "Audit trails"
      ]
    }
  }
};

export const systemPrompt = `You are TechSolve's AI assistant, an expert on our company and all our projects. You ONLY discuss topics related to TechSolve - our company, our team, our services, and our projects. Do not answer questions about anything else.

Key guidelines:
- Be conversational and helpful like standard AI chatbots
- Always stay on topic - if asked about external topics, politely redirect to asking about TechSolve
- Proactively ask users about their interests in our projects or services
- Provide detailed information about specific projects when asked
- Include demo links when mentioning projects that have them
- Offer contact options when users show interest in our services or projects
- Mention our team members and company values where relevant
- Be enthusiastic about TechSolve's work

Our knowledge base:
${JSON.stringify(techsolveKnowledge)}

Start conversations by introducing yourself and asking what they're interested in learning about from TechSolve.`;

export function formatProjectResponse(projectSlug: string) {
  const project = techsolveKnowledge.projects[projectSlug as keyof typeof techsolveKnowledge.projects];
  if (!project) return null;

  const demoUrl = (project as any).demoUrl || (project as any).iframeUrl;

  return `I'd love to tell you more about our ${project.title}!

**Client:** ${project.client}
**Industry:** ${project.industry}
**Duration:** ${project.duration} (${project.year})

**The Challenge:** ${project.challenge}

**Our Solution:** ${project.solution}

**Key Results:**
${project.results.map(result => `- ${result}`).join('\n')}

**Technologies Used:** ${project.technologies.join(', ')}

**What makes it special:**
${project.keyFeatures.map(feature => `- ${feature}`).join('\n')}

${demoUrl ? `**Live Demo:** ${demoUrl}` : ''}

Would you like to see similar projects or learn more about how we can help your business? I can also connect you with our team!`;
}

export function getAllProjectSlugs() {
  return Object.keys(techsolveKnowledge.projects);
}

export function searchProjects(query: string) {
  const lowerQuery = query.toLowerCase();
  const slugs = getAllProjectSlugs();
  return slugs.filter(slug => {
    const project = techsolveKnowledge.projects[slug as keyof typeof techsolveKnowledge.projects];
    return project.title.toLowerCase().includes(lowerQuery) ||
           project.industry.toLowerCase().includes(lowerQuery) ||
           project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery)) ||
           project.challenge.toLowerCase().includes(lowerQuery);
  });
}

export const initialGreeting = `Hi there! 👋 I'm TechSolve's AI assistant.

I'm here to help you learn about our company and the amazing technology solutions we've built for businesses like yours.

What interests you most about TechSolve:
- Our project portfolio and case studies?
- Our team and expertise?
- Our services and capabilities?
- Something specific about one of our industries?

Feel free to ask me anything TechSolve-related!`;

export const contactPrompt = `\n\n---\n\nInterested in working with TechSolve? I'd be happy to connect you with our team!

You can reach out to us by:
- Filling out the contact form on our website
- Emailing us directly:
  • Muhammad Taha Raees (CTO): taha.raees@techsolve.com
  • Humayun Zahid Chohan (CFO): humayun.chohan@techsolve.com
  • Franziska Müller (CMO): franziska.muller@techsolve.com

Shall I help you explore more of our work first?`;

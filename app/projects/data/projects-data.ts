// Projects data for dynamic slug pages
export interface GalleryImage {
  src: string
  alt: string
  caption: string
}

export interface DemoStep {
  title: string
  description: string
  image: string
}

export interface ProjectData {
  title: string
  client: string
  industry: string
  duration: string
  year: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  testimonial: {
    quote: string
    author: string
    position: string
  }
  galleryImages: GalleryImage[]
  demoSteps: DemoStep[]
  iframeUrl?: string  // For working preview iframes
  keyFeatures: string[] // Additional features list
}

export const projectsData: Record<string, ProjectData> = {
  "restaurant-inventory": {
    title: "Multi-Location Restaurant Inventory Management",
    client: "FoodWorks Group",
    industry: "Hospitality",
    duration: "8 weeks",
    year: "2023",
    challenge:
      "FoodWorks Group, a chain of 12 restaurants, was struggling with inventory management across multiple locations. Manual processes led to overstocking, waste, and inconsistent ordering, impacting their bottom line. Each location had its own system, making it difficult for management to get a clear picture of inventory across the entire chain.",
    solution:
      "We developed a centralized inventory management system with real-time tracking, automated reordering, and comprehensive analytics. The mobile app allowed staff to update inventory on the go, while the management dashboard provided insights for better decision-making across all locations.",
    results: [
      "Reduced food waste by 30%",
      "Decreased inventory costs by 22%",
      "Improved order accuracy to 98%",
      "Saved 15 hours per week in manual inventory tasks",
      "ROI achieved within 5 months",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "React Native", "AWS"],
    testimonial: {
      quote:
        "The inventory management system they built has saved us countless hours and reduced errors by 90%. We've seen a significant reduction in food waste and our staff can focus more on customer service instead of counting stock.",
      author: "Marco Rossi",
      position: "CEO, FoodWorks Group",
    },
    galleryImages: [
      {
        src: "/images/foodwork-Dashboard.webp",
        alt: "Inventory Dashboard",
        caption: "Main inventory dashboard showing stock levels across all locations",
      },
      {
        src: "/images/food-locations.webp",
        alt: "Mobile Scanning Interface",
        caption: "Staff using the mobile app to scan inventory items",
      },
      {
        src: "/images/foodwork-report.webp",
        alt: "Analytics View",
        caption: "Analytics dashboard showing inventory trends and forecasting",
      },
      {
        src: "/images/foodwork-inventory.webp",
        alt: "Order Management",
        caption: "Automated ordering system interface",
      },
    ],
    demoSteps: [
      {
        title: "Real-time Inventory Tracking",
        description:
          "The system provides real-time visibility of inventory across all restaurant locations, with color-coded indicators for stock levels.",
        image: "https://foodwork.vercel.app/",
      },
      {
        title: "Barcode Scanning",
        description:
          "Staff can quickly update inventory by scanning product barcodes with their mobile devices, eliminating manual counting errors.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Automated Reordering",
        description:
          "When stock levels fall below the defined threshold, the system automatically generates purchase orders for approval.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Comprehensive analytics provide insights into inventory trends, helping management make data-driven decisions.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    iframeUrl: "https://foodwork.vercel.app/",
    keyFeatures: [
      "Real-time inventory tracking across all locations",
      "Automated reordering based on customizable thresholds",
      "Barcode scanning for quick updates",
      "Waste tracking and analytics",
      "Supplier management and order history",
      "Role-based access control for staff",
    ],
  },
  "clinic-management": {
    title: "Comprehensive Healthcare Management System",
    client: "HealthCare Plus",
    industry: "Healthcare",
    duration: "12 weeks",
    year: "2024",
    challenge:
      "HealthCare Plus clinic was managing patient appointments and records through outdated paper-based and fragmented digital systems, leading to scheduling conflicts, patient dissatisfaction, and inefficient staff workflows. Communication breakdowns and lack of real-time visibility into clinic operations were causing significant issues.",
    solution:
      "We built a comprehensive healthcare management platform featuring an intuitive appointment booking system, comprehensive patient record management, doctor profiles showcase, and automated patient communication system with WhatsApp integration. The system includes AI-powered scheduling optimization and real-time dashboard monitoring.",
    results: [
      "Reduced appointment scheduling errors by 95%",
      "Improved patient satisfaction scores by 45%",
      "Decreased administrative workload by 60%",
      "Increased appointment booking conversion by 35%",
      "Streamlined patient record management processes",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Twilio API"],
    testimonial: {
      quote:
        "The new system transformed our clinic operations completely. Our patients love the easy booking system, and our staff efficiency has improved dramatically. The WhatsApp notifications have been a game-changer for patient communication.",
      author: "Dr. Sarah Johnson",
      position: "Clinic Director, HealthCare Plus",
    },
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Appointment Dashboard",
        caption: "Modern dashboard for managing patient appointments and schedules",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Patient Records Interface",
        caption: "Comprehensive patient record management system with medical history",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Doctor Profile Showcase",
        caption: "Professional doctor profiles with specializations and availability",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Mobile Booking App",
        caption: "Mobile app interface for easy appointment booking",
      },
    ],
    demoSteps: [
      {
        title: "Online Appointment Booking",
        description:
          "Patients can easily book appointments through an intuitive web interface with real-time availability display.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Patient Record Management",
        description:
          "Comprehensive electronic health record system with secure data management and medical history tracking.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "WhatsApp Notifications",
        description:
          "Automated appointment reminders and confirmations sent through WhatsApp for better patient engagement.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Staff Dashboard",
        description:
          "Dedicated dashboard for clinic staff to manage schedules, patient information, and administrative tasks.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    iframeUrl: "https://cms-tau-eight.vercel.app", // Would be your deployed clinic management app
    keyFeatures: [
      "Online appointment booking system",
      "Electronic health record management",
      "Doctor profile and specialization showcase",
      "WhatsApp integration for patient communication",
      "AI-powered scheduling optimization",
      "Real-time dashboard monitoring",
      "Secure patient data management",
      "SMS and email notification system",
    ],
  },
  "retail-management": {
    title: "Cross-Platform Retail Management System",
    client: "Retail Solutions Co",
    industry: "Retail",
    duration: "10 weeks",
    year: "2024",
    challenge:
      "Retail Solutions Co was struggling with fragmented retail operations across physical and online channels, manual inventory tracking, inconsistent customer data, and lack of real-time insights for decision making. Their existing point-of-sale systems were outdated and didn't support modern retail demands.",
    solution:
      "We developed a comprehensive retail management system with point-of-sale integration, real-time inventory tracking, customer relationship management, and multi-platform support including web dashboard and mobile applications. The system features seamless e-commerce integration and advanced reporting capabilities.",
    results: [
      "Improved inventory accuracy to 99.5%",
      "Increased operational efficiency by 50%",
      "Reduced stock-outs by 40%",
      "Enhanced customer experience through unified data",
      "Mobile app adoption increased sales by 25%",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Capacitor", "WebSocket"],
    testimonial: {
      quote:
        "This system connects all our retail operations seamlessly. From POS to inventory and customer insights, everything now works as one unified platform. Our sales team loves the mobile app, and our managers have real-time visibility for the first time.",
      author: "Jennifer Martinez",
      position: "Operations Manager, Retail Solutions Co",
    },
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "POS System Interface",
        caption: "Modern point-of-sale interface with quick product lookup and transaction processing",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Inventory Dashboard",
        caption: "Real-time inventory tracking across all retail locations and online store",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "CRM Dashboard",
        caption: "Customer relationship management with purchase history and analytics",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Mobile POS App",
        caption: "Mobile application for on-the-go sales and inventory management",
      },
    ],
    demoSteps: [
      {
        title: "Point of Sale System",
        description:
          "Modern POS system with quick product search, barcode scanning, and seamless transaction processing.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Multi-Location Inventory",
        description:
          "Real-time inventory synchronization across physical stores and online platforms for accurate stock tracking.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Customer Insights",
        description:
          "Advanced CRM features with customer behavior analysis and personalized marketing recommendations.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "E-Commerce Integration",
        description:
          "Seamless integration with online stores for unified inventory and order management across all channels.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    iframeUrl: "https://rms-front-server.vercel.app/", // Would be your deployed retail management app
    keyFeatures: [
      "Modern point-of-sale system",
      "Multi-location inventory synchronization",
      "Customer relationship management",
      "E-commerce platform integration",
      "Real-time reporting and analytics",
      "Mobile application support",
      "Barcode and RFID scanning",
      "Automated order fulfillment",
    ],
  },
  "restaurant-management-pro": {
    title: "Single-Location Restaurant Management Pro",
    client: "Independent Restaurant Solutions",
    industry: "Hospitality",
    duration: "6 weeks",
    year: "2024",
    challenge:
      "Independent Restaurant Solutions needed an affordable, comprehensive management system for single-location restaurants that could handle table management, menu updates, POS operations, and staff scheduling without complex multi-location overhead. Traditional systems were too expensive and feature-heavy for smaller establishments.",
    solution:
      "We built a streamlined restaurant management platform with integrated table management, real-time menu handling, POS system integration, staffing management, and operational workflow optimization specifically designed for single-location restaurants. The system includes intuitive interfaces and quick setup for fast implementation.",
    results: [
      "Improved table turnover time by 40%",
      "Reduced operating costs by 20%",
      "Increased staff productivity by 30%",
      "Enhanced customer experience with faster service",
      "Simplified daily operations management",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    testimonial: {
      quote:
        "Finally, a restaurant management system that understands single-location needs without unnecessary complexity. Our daily operations are now smoother than ever, and my staff picked it up in just a day of training. The POS integration alone paid for itself in the first month!",
      author: "Carlos Ramirez",
      position: "Restaurant Owner, Bella Vista Bistro",
    },
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Table Management Dashboard",
        caption: "Interactive table layout view with real-time reservation tracking",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Menu Management Interface",
        caption: "Easy-to-use menu editing interface with image uploads and pricing",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "POS System Display",
        caption: "Streamlined point-of-sale interface optimized for restaurant workflow",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Staff Schedule Management",
        caption: "Employee scheduling system with time tracking and attendance",
      },
    ],
    demoSteps: [
      {
        title: "Table Reservation System",
        description:
          "Easy-to-use table management with visual layout, reservation booking, and real-time availability updates.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Menu Management",
        description:
          "Dynamic menu creation with photos, descriptions, pricing, and easy updates without technical knowledge.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "POS Integration",
        description:
          "Integrated payment processing with order splitting, discounts, and kitchen display system connection.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Staff Management",
        description:
          "Simple staff scheduling, attendance tracking, and performance monitoring for restaurant operations.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    iframeUrl: "https://rms-pro.vercel.app/", // Would be your deployed restaurant management app
    keyFeatures: [
      "Interactive table management and reservations",
      "Dynamic menu management with photos",
      "Integrated POS system with payment processing",
      "Staff scheduling and attendance tracking",
      "Customer order tracking and history",
      "Kitchen display system integration",
      "Inventory alerts and supplier management",
      "Sales analytics and reporting",
    ],
  },
  "zaviah-smart-platform": {
    title: "Smart Hardware-Software Integration Platform",
    client: "Smart Solutions Inc",
    industry: "Technology",
    duration: "14 weeks",
    year: "2024",
    challenge:
      "Smart Solutions Inc needed to bridge the gap between physical smart hardware devices and software platforms, enabling seamless automation of business processes across different industries and use cases. Existing platforms were rigid and lacked the flexibility needed for diverse hardware integration requirements.",
    solution:
      "We created an innovative platform that connects smart hardware devices with cloud software, featuring automated queue management, appointment scheduling systems, NFC-based attendance tracking, and intelligent parcel detection for modern workflow automation. The platform supports multiple hardware integrations and provides a unified management interface.",
    results: [
      "Reduced manual workflow management by 80%",
      "Improved customer wait times by 50%",
      "Increased operational efficiency by 65%",
      "Eliminated appointment scheduling conflicts",
      "Enhanced hardware-software integration capabilities",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Hardware Integration", "IoT"],
    testimonial: {
      quote:
        "This platform transformed how we integrate physical devices with our software systems. The automation capabilities have revolutionized our workflow efficiency. Being able to connect different hardware brands to a single platform has opened up so many new possibilities for our clients.",
      author: "Dr. Ravi Patel",
      position: "CTO, Smart Solutions Inc",
    },
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Hardware Dashboard",
        caption: "Centralized hardware management dashboard showing all connected devices",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Queue Management System",
        caption: "Automated queue management with real-time updates and customer notifications",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "NFC Attendance Tracking",
        caption: "Contactless attendance system with NFC card and mobile app integration",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Parcel Detection Interface",
        caption: "Intelligent parcel detection system with automated notifications",
      },
    ],
    demoSteps: [
      {
        title: "Hardware Device Integration",
        description:
          "Seamless connection and management of various smart hardware devices from different manufacturers.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Automated Queue Management",
        description:
          "Smart queue systems with real-time updates, customer notifications, and analytics reporting.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "NFC Attendance System",
        description:
          "Contactless attendance tracking with NFC cards, mobile apps, and comprehensive reporting.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Parcel Tracking Automation",
        description:
          "Intelligent parcel detection and notification system with automated customer alerts.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    iframeUrl: "https://zaviah.vercel.app/", // Would be your deployed Zaviah platform
    keyFeatures: [
      "Multi-vendor hardware device support",
      "Cloud-based device management",
      "Real-time data synchronization",
      "Automated workflow triggers",
      "Customizable notification systems",
      "Advanced reporting and analytics",
      "Mobile app integration",
      "API-first architecture",
    ],
  },
}

export function getProjectData(slug: string): ProjectData | null {
  return projectsData[slug] || null
}

# TechSolve - Custom Software Solutions Platform

TechSolve is a professional, modern website and interactive platform for a software development company specializing in custom technology solutions for small to medium enterprises (SMEs). Built with cutting-edge web technologies, the platform showcases our portfolio of successful projects, services, and provides an intelligent AI-powered chatbot to engage visitors and provide instant information about our offerings.

## 🎯 Overview

Founded in 2018, **TechSolve** empowers SMEs with accessible, powerful technology solutions. Our expertise spans across healthcare, hospitality, retail, and technology sectors, delivering tailored software that drives business growth and operational efficiency.

### Core Offerings
- **Custom Software Development**: Bespoke applications designed to match unique business workflows and requirements
- **Automation Solutions**: Intelligent systems that reduce manual processes and enable scalable operations
- **Workflow Optimization**: Streamlined processes that enhance team productivity and customer experience

The platform combines marketing, portfolio presentation, and interactive engagement through our AI chatbot, which provides contextual information about our projects, services, and company capabilities.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **Theme**: Dark/Light mode support with next-themes

### UI Components
- **Radix UI**: Comprehensive component library for accessible interfaces
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Consistent iconography
- **shadcn/ui**: Re-usable component system

### Features
- **Chatbot**: AI-powered conversational interface using OpenRouter API
- **Analytics**: Vercel Analytics integration
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG compliant components

### Dependencies
- React 19 (latest)
- Node.js bindings with TypeScript
- Form handling with React Hook Form and Zod validation
- Date manipulation with date-fns
- Charts with Recharts
- Carousel components with Embla

## 📁 Project Structure

```
Techsolve/
├── app/                          # Next.js app directory
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # AI chatbot API endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Homepage component
│   ├── about/
│   │   └── page.tsx             # About page
│   └── projects/
│       ├── layout.tsx
│       ├── page.tsx             # Projects overview
│       ├── [slug]/
│       │   └── page.tsx         # Individual project pages
│       └── data/
│           ├── index.ts
│           └── projects-data.ts # Project data management
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components (accordion, button, etc.)
│   ├── animations/              # Animation utilities
│   └── *-section.tsx            # Page section components
├── lib/                         # Utility libraries
│   ├── utils.ts                 # General utilities
│   ├── cookies.ts               # Cookie management
│   └── knowledge-base.ts        # Chatbot knowledge base
├── hooks/                       # Custom React hooks
├── styles/                      # Additional stylesheets
└── public/                      # Static assets
    ├── images/                  # Project screenshots and graphics
    └── *.svg,*.png             # Logos and icons
```

## 🚀 Installation

1. **Prerequisites**
   - Node.js 18+ installed
   - Package manager: npm, yarn, or pnpm

2. **Clone the repository**
   ```bash
   git clone https://github.com/Taha-Raees/Techsolve.git
   cd Techsolve
   ```

3. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using pnpm (recommended)
   pnpm install
   ```

4. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   NEXT_PUBLIC_APP_URL=https://your-app-url.vercel.app
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production assets
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code quality checks

### Building for Production

```bash
npm run build
npm run start
```

The application will be available at `http://localhost:3000` in production mode.

## 🔧 API Documentation

### Chat API Endpoint

**POST** `/api/chat`

Handles conversational interactions with the AI chatbot.

#### Request Body
```typescript
{
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
  }>
}
```

#### Supported Features
- **General Chat**: Contextual conversations about TechSolve services
- **Project Queries**: Specific information about featured projects
- **Service Information**: Details about custom software, automation, and workflow solutions

#### Example Request
```typescript
POST /api/chat
Content-Type: application/json

{
  "messages": [
    {
      "role": "user",
      "content": "Tell me about your automation solutions"
    }
  ]
}
```

#### Example Response
```typescript
{
  "message": "At TechSolve, our automation solutions are designed to...",
  "type": "ai_response"
}
```

#### Special Response Types
- `project_detail`: Specific project information
- `projects_list`: Overview of all featured projects
- `ai_response`: General conversational response

## 🎨 Customization

### Branding
- Update logo in `public/placeholder-logo.svg`
- Modify brand colors by editing `tailwind.config.ts`
- Change site metadata in `app/layout.tsx`

### Content
- Edit service descriptions in `components/services-section.tsx`
- Update project data in `app/projects/data/projects-data.ts`
- Modify chatbot knowledge base in `lib/knowledge-base.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add `OPENROUTER_API_KEY` and `NEXT_PUBLIC_APP_URL`
3. **Deploy**: Automatic deployments on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

Ensure the following environment variables are set:
- `OPENROUTER_API_KEY`: Required for chatbot functionality
- `NEXT_PUBLIC_APP_URL`: Base URL for API requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Make your changes
4. Commit changes (`git commit -am 'Add new component'`)
5. Push to branch (`git push origin feature/new-component`)
6. Create a Pull Request

## 📝 License

This project is proprietary and managed by TechSolve.

## 📞 Support

For questions about deployment or development:
- View project issues on GitHub
- Contact the development team directly

## 📚 Documentation

- [**API Documentation**](./docs/API_DOCUMENTATION.md) - Detailed API reference for chatbot and other endpoints
- [**Architecture Overview**](./docs/ARCHITECTURE.md) - System architecture, data flows, and design decisions
- [**Contributing Guide**](./CONTRIBUTING.md) - Development guidelines and contribution process

---

**TechSolve** - Building the future, one solution at a time.

# Contributing to TechSolve

Welcome to TechSolve! We're excited that you'd like to contribute to our platform. This document outlines the development process, coding standards, and guidelines for contributing to the TechSolve project.

## 🚀 Getting Started

### Development Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Taha-Raees/Techsolve.git
   cd Techsolve
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your OpenRouter API key
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

### Branching Strategy

We follow a feature branch workflow:

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description

# For documentation
git checkout -b docs/update-documentation
```

## 📝 Code Quality Standards

### TypeScript Guidelines

- **Strict Type Checking**: All code must pass TypeScript compilation with strict mode enabled
- **Type Definitions**: Provide explicit types for function parameters and return values
- **Interface Usage**: Use interfaces for complex objects, types for unions/primitives
- **Optional Properties**: Use `?:` for optional properties instead of `| undefined`

```typescript
// Good
interface User {
  id: string;
  name: string;
  email?: string;  // Optional property
}

type Status = 'active' | 'inactive' | 'pending';

// Bad - Avoid any
function processUser(user: any) {
  // ...
}

// Good - Use proper typing
function processUser(user: User): Promise<void> {
  // ...
}
```

### React Component Guidelines

- **Functional Components**: Use function declarations with arrow functions
- **TypeScript Props**: Define props with interfaces
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Component Naming**: Use PascalCase for component names

```typescript
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  // Component logic
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariants[variant], disabled && 'opacity-50')}
    >
      {children}
    </button>
  );
};
```

### Styling Guidelines

- **Tailwind CSS**: Follow utility-first approach
- **Component Variants**: Use the `cn()` utility for conditional classes
- **Responsive Design**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- **Dark Mode**: Include dark mode variants where applicable

```typescript
// Good
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## 🏗️ Project Structure Guidelines

### Component Organization

```
components/
├── ui/                 # shadcn/ui base components
├── [feature]/         # Feature-specific components
├── animations/        # Animation utilities
└── layout/            # Layout components
```

### File Naming Conventions

```
├── components/
│   ├── button.tsx                # Component
│   ├── button.stories.tsx        # Storybook (if used)
│   ├── use-button.ts            # Custom hook
│   ├── button.test.tsx          # Unit test
│   └── button.constants.ts      # Constants/types
```

### Import Organization

- **React/TypeScript**: Standard library imports first
- **Third-party**: External dependencies
- **Local imports**: Project imports, grouped by type
- **Type-only imports**: Use `import type` where possible

```typescript
// Good
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { User } from '@/lib/types';
import { cn } from '@/lib/utils';

// Bad - Unorganized imports
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
```

## 🧪 Testing Guidelines

### Testing Strategy

We use a combination of unit tests and integration tests:

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API endpoints and user flows
- **E2E Tests**: Critical user journeys

### Testing Tools

- **Framework**: Vitest for unit testing
- **React Testing**: @testing-library/react for component testing
- **Coverage**: v8 coverage reporting

### Test Structure

```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📋 Development Workflow

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/add-chat-validation
   ```

2. **Make Changes**
   - Write code following the guidelines above
   - Add tests for new functionality
   - Update documentation if needed

3. **Run Checks**
   ```bash
   pnpm lint       # Code quality
   pnpm build      # Build verification
   pnpm test       # Run tests
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add chat message validation

   - Add Zod schema for chat message validation
   - Update chat API to use validation
   - Add test cases for validation
   - Update error handling for invalid messages"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/add-chat-validation
   ```

### Commit Message Convention

We follow conventional commits:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

**Examples:**
```
feat: add chatbot message validation
fix: resolve theme toggle hydration error
docs: update API documentation
refactor: optimize component re-rendering
```

## 🎨 Design System Guidelines

### Color Usage

- **Primary**: Brand colors defined in tailwind.config.ts
- **Semantic Colors**: Error, warning, success states
- **Neutral**: Grays for text hierarchy

### Typography Scale

- **Headings**: `text-4xl/6xl` for impact, `text-xl/3xl` for sections
- **Body**: `text-sm` small text, `text-base` body, `text-lg` large body
- **Interactive**: `text-sm` buttons, `text-xs` labels

### Spacing Scale

- **Component Spacing**: 0.25rem increments (4px = 0.25rem)
- **Layout Spacing**: 1rem increments for larger gaps
- **Consistent Margins**: Use Tailwind spacing utilities

## 🚀 Performance Guidelines

### Component Optimization

- **Memoization**: Use React.memo for expensive components
- **Lazy Loading**: Dynamic imports for code splitting
- **Bundle Analysis**: Regularly check bundle sizes

```typescript
// Good - Lazy load heavy components
const HeavyComponent = dynamic(() => import('@/components/heavy-component'), {
  loading: () => <Skeleton />,
});
```

### Image Optimization

- **Next.js Image Component**: Automatic optimization
- **Proper Formats**: WebP/AVIF with fallbacks
- **Responsive Images**: Use `sizes` prop appropriately

```typescript
<Image
  src="/hero-image.jpg"
  alt="Hero section"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

## 🔒 Security Best Practices

### API Security

- **Input Validation**: Always validate input data
- **Error Handling**: Don't expose sensitive information in errors
- **Rate Limiting**: Implement appropriate rate limits

```typescript
// Good - Input validation
const chatSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string().min(1).max(10000),
  })).min(1).max(50),
});

// Bad - No validation
export async function POST(request: Request) {
  const body = await request.json();
  // Process without validation
}
```

### Environment Variables

- **Server-side Only**: Never expose secrets to client
- **Validation**: Check required variables at startup
- **Documentation**: Document all required variables

## 📚 Documentation Requirements

### Code Documentation

- **Complex Logic**: Add comments for non-obvious implementations
- **Public APIs**: Document component props and behavior
- **Business Logic**: Explain domain-specific decisions

```typescript
/**
 * Formats project data for AI response
 * @param slug - Unique project identifier
 * @returns Formatted project information or null if not found
 */
export function formatProjectResponse(slug: string): string | null {
  // Implementation
}
```

### README Updates

When adding features, update the relevant documentation:

- Feature description in main README
- API changes in API documentation
- Architecture changes in architecture docs

## 🤝 Pull Request Guidelines

### PR Template

Please include:

1. **Description**: What changes were made and why
2. **Testing**: How to test the changes
3. **Screenshots**: Visual changes (if applicable)
4. **Breaking Changes**: List any breaking changes
5. **Related Issues**: Link to related issues

### Review Process

1. **Automated Checks**: Must pass CI/CD pipeline
2. **Code Review**: At least one reviewer approval required
3. **Testing**: Reviewer should test locally where possible
4. **Merge**: Squash merge with conventional commit message

### CI/CD Pipeline

- **Linting**: ESLint checks
- **Type Checking**: TypeScript compilation
- **Testing**: Unit and integration tests
- **Build Verification**: Successful production build

## 📞 Getting Help

If you need help with the contribution process:

- **Create an Issue**: For bugs, features, or questions
- **Join Discussions**: For general questions and RFCs
- **Contact Team**: Reach out to team members for direct assistance

Thank you for contributing to TechSolve! Your efforts help us build better software for our clients.

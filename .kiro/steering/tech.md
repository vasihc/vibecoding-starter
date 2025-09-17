# Tech Stack & Build System

## Core Technologies
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.1** - UI library with latest features
- **TypeScript 5.9.2** - Strict mode enabled for type safety
- **Firebase 12.2.1** - Authentication and Firestore database
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library with Radix UI primitives

## AI & Development Tools
- **Vercel AI SDK** - AI integration (@ai-sdk/*)
- **Zod** - Schema validation
- **Lucide React** - Icon library
- **ESLint** - Code linting with Next.js config

## Build System
- **Node.js** - Runtime environment
- **npm** - Package manager
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Common Commands

### Development
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Release Management
```bash
npm run release  # Create versioned release with standard-version
```

## Environment Setup
- Copy `.env.example` to `.env.local`
- Configure Firebase credentials in environment variables
- Ensure Node.js and npm are installed

## Code Quality
- TypeScript strict mode enforced
- ESLint with Next.js core web vitals config
- Path aliases configured (`@/*` maps to `./src/*`)
- Component library follows shadcn/ui conventions
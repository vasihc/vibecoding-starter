# Next.js 13 Firebase Starter Template - QWEN Context

## Project Overview

This is a modern starter template for building Next.js applications with Firebase, featuring authentication, real-time database, and AI-assisted development support. It's designed to help developers quickly set up production-ready applications with modern best practices.

### Key Features
- **Next.js 15.5.2** with App Router
- **Firebase** Authentication & Firestore integration
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** + **shadcn/ui** component library
- **AI-Ready** with Vibecoding support
- React 19.1.1
- Firebase 12.2.1
- Vercel AI SDK for AI integrations

## Building and Running

### Prerequisites
- Node.js 18+ recommended
- npm or yarn package manager

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables Setup**
   - Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```
   - Add your Firebase configuration values to `.env.local`

3. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see your app.

4. **Production Build**
   ```bash
   npm run build
   npm run start
   ```

### Available Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run release` - Generate new release version using standard-version

## File Structure Details

### Main Directories
- `.cursor/` - Cursor IDE configuration
- `.github/` - GitHub configuration and workflows
- `.kiro/` - Kiro AI configuration
- `docs/` - Project documentation
- `plan/` - Project planning and architecture documents
- `public/` - Static assets
- `src/` - Source code with the following structure:
  - `app/` - App Router pages and layouts
  - `components/` - Reusable components (including shadcn/ui components)
  - `context/` - React contexts (like AuthContext)
  - `firebase/` - Firebase integration layer
  - `lib/` - Utility functions

### Important Configuration Files
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `firebase.js` - Firebase application configuration
- `AGENTS.md` - **Primary source of development guidelines and AI assistant instructions** (see below)

## Development Guidelines and AI Assistance

This project uses the `AGENTS.md` file as the primary source of development conventions and AI assistant instructions. **For detailed information about:**

- **Architecture patterns** and tech stack details
- **Command reference** for development, package management, and component library usage
- **Project structure** and key patterns
- **Environment variables** required
- **Component library configuration**
- **Working with AI assistants** (Vibecoding) including best practices and common prompts

**Please refer to the [AGENTS.md](./AGENTS.md) file in the root directory.**

The AGENTS.md file contains comprehensive information about:
- Tech stack specifics
- Project structure conventions
- UI development practices (always use shadcn/ui components)
- Authentication flow patterns
- Firebase configuration details
- AI-assisted development practices and Vibecoding methodology
- Best practices for working with AI assistants on this project

## Testing

While not explicitly shown in the initial exploration, the project includes testing libraries (Jest, Testing Library) in the devDependencies. Testing conventions would follow React/Next.js testing best practices with Jest and React Testing Library.

## Deployment

The application is built on Next.js and can be deployed to various platforms:
- Vercel (recommended for Next.js)
- Netlify
- AWS, GCP, Azure
- Custom servers supporting Node.js

For deployment, ensure all environment variables are properly configured in the target environment.
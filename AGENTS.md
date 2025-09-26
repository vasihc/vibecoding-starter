# AGENTS.md

This file provides guidance to cli agents when working with code in this repository.

## Project Overview

This is a Next.js 13 starter template for building applications with Firebase. It includes features like authentication, a real-time database, and AI-assisted development support. The project is built with TypeScript and uses Tailwind CSS for styling, along with shadcn/ui for components.

The project structure follows the standard Next.js App Router conventions. The `src` directory contains the main application code, including pages, components, context, and Firebase integration logic.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run release` - Generate new release version using standard-version

### Package Management
- `npm install` - Install dependencies

### Component Library (shadcn/ui)
- `npx shadcn@latest add [component-name]` - Add new shadcn/ui components
- Examples: `button`, `card`, `dialog`, `input`, `dropdown-menu`, `form`, `table`

## Architecture

### Tech Stack
- **Next.js 15.5.2** with App Router
- **React 19.1.1**
- **Firebase 12.2.1** for authentication and database
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **shadcn/ui** - Component library (ALWAYS use shadcn/ui components when building UI)
- **AI SDK** - Vercel AI SDK for AI integrations (@ai-sdk/openai, ai packages)

### Project Structure

The codebase follows Next.js 13+ App Router conventions:

- **`src/app/`** - App Router pages and layouts
  - `layout.tsx` - Root layout wrapping all pages with AuthContextProvider
  - `page.tsx` - Home page
  - `signin/`, `signup/` - Authentication pages
  - `admin/` - Protected admin route

- **`src/firebase/`** - Firebase integration layer
  - `config.ts` - Firebase initialization using environment variables
  - `auth/` - Authentication functions (signIn.ts, signup.ts)
  - `firestore/` - Database operations (addData.ts, getData.js)

- **`src/context/`** - React contexts
  - `AuthContext.tsx` - Global authentication state management using Firebase Auth

- **`src/components/`** - Reusable components
  - `ui/` - shadcn/ui components (Button, Card, Dialog, etc.)

- **`src/lib/`** - Utility functions
  - `utils.ts` - cn() helper for className merging

### Key Patterns

**UI Development:**
- **ALWAYS use shadcn/ui components** for UI elements instead of creating custom components
- Use `cn()` utility from `@/lib/utils` for conditional classNames
- Components are stored in `src/components/ui/` after adding via CLI
- shadcn/ui components are fully customizable with Tailwind CSS

**Authentication Flow:**
- AuthContext provides global user state via `onAuthStateChanged` listener
- Protected routes check authentication status before rendering
- Sign in/up functions return `{result, error}` for consistent error handling

**Firebase Configuration:**
- Environment variables prefixed with `NEXT_PUBLIC_FIREBASE_`
- Single app instance shared across the application
- Firebase services initialized on-demand

**Path Aliases:**
- `@/*` maps to `./src/*` for cleaner imports

### Environment Variables Required

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

Place these in `.env.local` (already in .gitignore)

### Component Library Configuration

The project uses shadcn/ui with the following configuration (`components.json`):
- Style: `new-york`
- Base color: `neutral`
- CSS variables enabled
- Components path: `@/components`
- Utils path: `@/lib/utils`

## Working with AI Assistants (Vibecoding)

### What is Vibecoding?

Vibecoding is the practice of using AI assistants (like Claude, Cursor, GitHub Copilot) to accelerate development by leveraging natural language instructions and context-aware code generation. It's about "vibing" with AI to write code faster and more efficiently.

### Setting Up Prompts

#### Global Instructions (User-specific)
Create `~/.claude/CLAUDE.md` or `~/.cursor/CURSOR.md` for personal preferences that apply to all projects:
```markdown
# My Coding Preferences
- Prefer functional components in React
- Use async/await over promises
- Add comprehensive error handling
- Write concise comments only when necessary
```

#### Project Instructions (Repository-specific)
This file (`AGENTS.md`) serves as project-specific instructions that are checked into the repository. It ensures all team members and AI assistants follow the same conventions.

### Best Practices for AI-Assisted Development

1. **Be Specific with Instructions**
   - Instead of: "Add authentication"
   - Use: "Add Firebase email/password authentication with error handling and redirect to /dashboard on success"

2. **Provide Context**
   - Reference existing patterns in the codebase
   - Mention specific files or components to modify
   - Clarify the expected behavior and edge cases

3. **Iterative Refinement**
   - Start with high-level requirements
   - Review generated code and request adjustments
   - Test incrementally

4. **Maintain Consistency**
   - Always reference this AGENTS.md file for project conventions
   - Use existing components and patterns
   - Follow the established folder structure

### Common Prompts for This Project

```markdown
# Adding a new page
"Create a new page at /app/[page-name]/page.tsx using our existing layout patterns and shadcn/ui components"

# Adding Firebase functionality
"Add a Firestore collection for [model] with CRUD operations in src/firebase/firestore/, following the existing getData/addData patterns"

# Building UI
"Create a [component] using shadcn/ui components from our existing ui/ folder, styled with Tailwind CSS"

# Authentication features
"Add [feature] to the authentication flow, updating AuthContext and the relevant auth functions"
```

### AI Configuration Files

- **CLAUDE.md** - Instructions for Claude (this project's root)
- **AGENTS.md** - This file, providing comprehensive project context
- **.cursorrules** - Cursor-specific instructions (if using Cursor)

### Tips for Effective Vibecoding

1. **Keep instructions updated** - Update this file when patterns change
2. **Document decisions** - Explain why certain patterns are used
3. **Include examples** - Show preferred code styles with examples
4. **Version control prompts** - Track successful prompts for team reuse
5. **Test AI output** - Always review and test generated code
6. **Leverage context** - Reference existing code for consistency

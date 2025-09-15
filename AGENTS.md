# AGENTS.md

This file provides guidance to cli agents when working with code in this repository.

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
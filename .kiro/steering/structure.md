# Project Structure & Organization

## Root Directory Layout
```
├── src/                    # Source code
├── public/                 # Static assets
├── docs/                   # Documentation (en/ru)
├── .kiro/                  # Kiro AI assistant configuration
├── .next/                  # Next.js build output
├── node_modules/           # Dependencies
└── package.json            # Project configuration
```

## Source Code Organization (`src/`)

### App Router Structure (`src/app/`)
- **`layout.tsx`** - Root layout with AuthContextProvider
- **`page.tsx`** - Home page component
- **`globals.css`** - Global styles and Tailwind imports
- **Route folders:**
  - `signin/` - Authentication sign-in page
  - `signup/` - User registration page
  - `admin/` - Protected admin dashboard
  - `api/` - API routes (currently empty)

### Component Architecture (`src/components/`)
- **`ui/`** - shadcn/ui components (Button, Card, Input, ScrollArea)
- Follow shadcn/ui naming conventions
- Use TypeScript interfaces for props
- Implement compound component patterns where appropriate

### Firebase Integration (`src/firebase/`)
- **`config.ts`** - Firebase app initialization
- **`auth/`** - Authentication functions
  - `signIn.ts` - User sign-in logic
  - `signup.ts` - User registration logic
- **`firestore/`** - Database operations
  - `addData.ts` - Create/update operations
  - `getData.js` - Read operations

### Context Management (`src/context/`)
- **`AuthContext.tsx`** - Global authentication state
- Use React Context for shared state
- Wrap providers in root layout

### Utilities (`src/lib/`)
- **`utils.ts`** - Helper functions (cn for className merging)
- Keep utility functions pure and well-typed

## Naming Conventions
- **Files:** PascalCase for components, camelCase for utilities
- **Folders:** kebab-case for routes, camelCase for feature folders
- **Components:** PascalCase with descriptive names
- **Functions:** camelCase with verb-noun pattern

## Import Patterns
- Use `@/` alias for src imports
- Group imports: external libraries, internal modules, relative imports
- Prefer named exports over default exports for utilities

## File Organization Rules
- One component per file
- Co-locate related files (component + styles + tests)
- Keep components focused and single-responsibility
- Use TypeScript interfaces in the same file as components
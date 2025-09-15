# Project Structure

The project's folder structure is organized as follows:

## Core Directories

- `pages`: Contains Next.js pages for server-side rendering.
- `components`: Contains reusable React components.
- `lib`: Includes utility functions and modules.
- `public`: Stores static assets like images, fonts, and stylesheets.
- `styles`: Contains global styles and Tailwind CSS configuration.
- `firebase`: Contains Firebase configuration and related functions.

## Extended Structure Example

You can modify or extend the folder structure to fit your project's needs.
For example, additional subfolders can be organized as such:

```
components/
├── UI/
├── custom/
├── partials/
└── ...

public/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── gifs/
└── ...
```

## App Router Structure (Next.js 13+)

- **`src/app/`** - App Router pages and layouts
  - `layout.tsx` - Root layout wrapping all pages with AuthContextProvider
  - `page.tsx` - Home page
  - `signin/`, `signup/` - Authentication pages
  - `admin/` - Protected admin route

## Firebase Integration

- **`src/firebase/`** - Firebase integration layer
  - `config.ts` - Firebase initialization using environment variables
  - `auth/` - Authentication functions (signIn.ts, signup.ts)
  - `firestore/` - Database operations (addData.ts, getData.js)

## Context Management

- **`src/context/`** - React contexts
  - `AuthContext.tsx` - Global authentication state management using Firebase Auth

## Component Library

- **`src/components/`** - Reusable components
  - `ui/` - shadcn/ui components (Button, Card, Dialog, etc.)

## Utilities

- **`src/lib/`** - Utility functions
  - `utils.ts` - cn() helper for className merging
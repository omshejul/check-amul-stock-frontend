# Cursor Rules for OAuth Next.js App

## Project Overview

This is a Next.js 15 application with Google OAuth authentication, using shadcn/ui components, Tailwind CSS, and next-themes for theming.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js with Google Provider
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Theming**: next-themes (light/dark/system)
- **TypeScript**: Enabled
- **Icons**: Lucide React

## Code Style Preferences

### General

- Use TypeScript for all new files
- Prefer functional components over class components
- Use "use client" directive for client-side components
- Follow Next.js 15 App Router conventions
- Minimize use of useEffect hooks when possible
- Skip useMemo/useCallback optimizations unless necessary

### Imports

- Use absolute imports with @ alias
- Group imports: React/Next → Third-party → Local components → Utils
- Import shadcn/ui components from @/components/ui/
- Import custom components from @/components/

### Components

- Use arrow function exports: `export default function ComponentName()`
- Use TypeScript interfaces for props
- Prefer destructuring for props
- Use shadcn/ui components when possible
- Follow the established component structure in /components

### Styling

- Use Tailwind CSS classes
- Follow shadcn/ui design patterns
- Use CSS variables for theming
- Prefer responsive design with mobile-first approach
- Use semantic HTML elements

### Authentication

- Use NextAuth.js hooks: useSession, signIn, signOut
- Handle loading states appropriately
- Show different UI based on authentication status
- Use the established auth component patterns

### File Structure

```
/app - Next.js App Router pages
/components - Reusable components
  /ui - shadcn/ui components
  /auth - Authentication components
  /providers - Context providers
/lib - Utilities and configurations
/types - TypeScript type definitions
```

## Coding Guidelines

### Do:

- Use shadcn/ui components for consistent design
- Implement proper loading states
- Handle authentication states correctly
- Use TypeScript interfaces
- Follow responsive design principles
- Use semantic HTML
- Implement proper error handling
- Use next-themes for theme switching
- Don't run build commands unless necessary (to avoid breaking dev environments),
- Prioritize type-checking over builds

### Don't:

- Create custom UI components when shadcn/ui alternatives exist
- Use inline styles instead of Tailwind classes
- Ignore TypeScript errors
- Create components without proper props typing
- Forget to handle loading/error states
- Use deprecated NextAuth patterns

## Component Patterns

### Authentication Components

```tsx
"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return <div>{session ? <AuthenticatedView /> : <UnauthenticatedView />}</div>;
}
```

### shadcn/ui Usage

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Use Button variants and sizes
<Button variant="outline" size="lg">Click me</Button>

// Use Card components for content organization
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Theme Integration

```tsx
import { useTheme } from "next-themes";

// Use theme-aware components
const { theme, setTheme } = useTheme();
```

## Environment Variables

- NEXTAUTH_URL - Application URL
- NEXTAUTH_SECRET - Session encryption secret
- GOOGLE_CLIENT_ID - Google OAuth client ID
- GOOGLE_CLIENT_SECRET - Google OAuth client secret

## Commands

- `npm run lint` - Run Lint
- `npx shadcn@latest add [component]` - Add shadcn/ui components

## Notes

- The app uses App Router (not Pages Router)
- Google OAuth is configured and working
- Theme switching is implemented with next-themes
- All major UI components use shadcn/ui
- Responsive navbar with user authentication state
- TypeScript is configured and should be used for all new code

When helping with this project, prioritize using existing patterns and components, maintain consistency with the established architecture, and follow Next.js 15 and shadcn/ui best practices.

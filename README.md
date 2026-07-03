# React GraphQL Project

Live project: https://react-graphql-project.vercel.app/

## Overview

This is a React app for searching GitHub users and viewing their public profile data. It queries the GitHub GraphQL API, shows the selected user's profile card and stats, and visualizes repository language, star, and fork data with charts.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| React | Builds the user interface with reusable components. |
| React DOM | Mounts the React app in the browser. |
| TypeScript | Adds static typing for components, GraphQL data, and project configuration. |
| Node.js and npm | Manage dependencies, scripts, and local development commands. |
| HTML | Provides the root document used by Vite. |
| Vite | Provides the local dev server, build pipeline, and production bundling. |
| Vite React plugin | Enables React support in Vite. |
| GraphQL | Defines the GitHub user query shape. |
| GitHub GraphQL API | Provides user profile, repository, follower, following, and gist data. |
| Apollo Client | Handles GraphQL requests, caching, typed queries, and error handling. |
| GraphQL Code Generator | Generates TypeScript types from the GitHub GraphQL schema and local queries. |
| dotenv | Loads the GitHub token for code generation from `.env`. |
| Tailwind CSS | Styles the app with utility classes and theme variables. |
| Tailwind CSS Vite plugin | Integrates Tailwind CSS with the Vite build. |
| shadcn/ui | Provides the UI component structure used for buttons, cards, inputs, labels, charts, skeletons, and toast setup. |
| Radix UI | Supplies accessible UI primitives used through the shadcn component setup. |
| class-variance-authority | Manages reusable component style variants. |
| clsx | Combines conditional class names. |
| tailwind-merge | Merges Tailwind class names without conflicting utilities. |
| tw-animate-css | Adds animation utilities for the UI layer. |
| Recharts | Renders bar charts for languages, popular repositories, and forked repositories. |
| Sonner | Displays toast notifications for form validation. |
| Remix Icon React | Provides icon components when needed by the UI. |
| Fontsource Geist | Loads the main app font locally. |
| Fontsource Noto Sans | Loads the heading font locally. |
| next-themes | Available for theme management in the shadcn setup. |
| ESLint | Checks code quality and React-specific rules. |
| @eslint/js | Provides the base recommended JavaScript lint rules. |
| typescript-eslint | Adds TypeScript-aware linting support. |
| eslint-plugin-react-hooks | Enforces React Hooks rules. |
| eslint-plugin-react-refresh | Checks React Fast Refresh compatibility for Vite. |
| globals | Provides browser globals for the ESLint configuration. |
| TypeScript type packages | Provide Node, React, and React DOM type definitions for development. |
| shadcn CLI | Supports adding and managing shadcn components. |
| Vercel | Hosts the deployed production app. |

## Environment

Create a `.env` file with a GitHub token:

```env
VITE_GITHUB_TOKEN=your_github_token
```

The app uses this token in the browser for GitHub GraphQL requests, and GraphQL Code Generator uses it to read the GitHub schema.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run codegen
```

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Owner

- **Name**: Kirill Gurbanov
- **Email**: gk@sfer.ai
- **Git Config**:
  ```bash
  git config user.name "Kirill Gurbanov"
  git config user.email "gk@sfer.ai"
  ```

## Project Overview

IntelliHub is a React + TypeScript website showcasing AI products and services. The project uses Vite for build tooling, React Router for navigation, and Tailwind CSS for styling. The site features multiple product pages (Base, Vibecoding, Agents) along with case studies and a main landing page.

## Development Commands

### Running the Application
```bash
npm run dev              # Start Vite dev server
npm run preview          # Preview production build locally
```

### Building
```bash
npm run build            # TypeScript compilation + Vite build
```

### Linting and Formatting
```bash
npm run lint             # Run ESLint (report errors only)
npm run lint:fix         # Run ESLint with auto-fix
npm run prettier         # Check code formatting
npm run prettier:fix     # Auto-format code with Prettier
```

## Architecture

### Directory Structure

The codebase follows a feature-based organization:

```
src/
├── components/          # Shared components (Button, Title, FAQ, Carousel)
├── modules/            # Layout components (App, Header, Footer)
├── pages/              # Page components (each page has its own directory)
├── constants/          # Application constants (routes)
└── assets/            # Static assets (images, videos)
```

### Component Organization Pattern

Components follow a consistent directory structure:
```
ComponentName/
├── components/         # Component implementation
│   └── ComponentName.tsx
├── index.ts           # Public exports
├── data.ts            # (Optional) Component data/config
└── consts.ts          # (Optional) Component constants
```

Pages follow the same pattern but include page-specific assets:
```
PageName/
├── components/         # Page component and sub-components
│   └── PageName.tsx
├── assets/            # Page-specific assets
├── data.ts            # Page content and configuration
└── index.ts           # Public exports
```

### Routing

- Routes are defined in `src/constants/routes.ts`
- Route configuration is in `src/modules/App/components/Pages.tsx`
- The Layout component (`src/modules/App/components/Layout.tsx`) conditionally shows/hides Header and Footer based on the current route (e.g., Supreme and CaseStudy pages hide chrome)

### Pages

The application has 6 main pages:
- **MainPage** (`/`) - Original landing page
- **SupremeMainPage** (`/supreme`) - Alternative landing with custom header, no chrome
- **CaseStudyLancetPage** (`/casestudies`) - Case study showcase, no chrome
- **BasePage** (`/baza`) - AI Base product page
- **VibecodingPage** (`/vibecoding`) - Vibecoding product page
- **AgentsPage** (`/agents`) - Agents product page

Each product page (Base, Vibecoding, Agents) has similar structure with:
- Hero section with mesh gradient background
- Statistics/metrics display
- Multiple carousels for content, pricing, and reviews
- FAQ section
- Contact section with author bio

### Key Dependencies

- **@paper-design/shaders-react** - Mesh gradient backgrounds
- **embla-carousel-react** - Carousel functionality
- **framer-motion** - Animations
- **react-router-dom** v7 - Client-side routing
- **clsx** - Conditional className utility

### Styling

- Uses Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin)
- Responsive breakpoints: xs, sm, md, lg, xl
- Custom colors and spacing defined inline or in component-specific styles
- Page-specific primary colors defined in inline `<style>` tags

### Data Management

Page content is separated from components:
- Each page has a `data.ts` file containing content arrays (CONTENT, AUDIENCE, PRICE, REVIEWS)
- Carousel items receive data via props and render using specialized item components (CarouselContentItem, CarouselPriceItem, CarouselReviewsItem)

### Important Patterns

**Carousel Components**: Product pages (Base, Vibecoding, Agents) each have their own Carousel component in `PageName/components/Carousel/` rather than using the shared `src/components/Carousel/`. These are page-specific implementations with custom styling.

**MeshGradient Configurations**: Hero sections use `@paper-design/shaders-react` with specific configuration values (speed, colors, distortion, swirl, grainMixer, frame). Preserve these exact values when editing to maintain visual consistency.

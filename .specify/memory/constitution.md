# IntelliHub Constitution

<!-- 
  Sync Impact Report:
  ==================
  Version: 1.0.0 (NEW - Initial Constitution)
  Ratified: 2025-10-31
  
  Principles Added:
  - I. Component-First Architecture
  - II. Type Safety (TypeScript Mandatory)
  - III. Responsive Design (Mobile-First)
  - IV. Performance & Accessibility Standards
  - V. Testing Discipline
  
  Sections Added:
  - Technology Stack Enforcement
  - Development Workflow & Quality Gates
  
  Templates Updated:
  ✅ plan-template.md: Aligns with frontend structure (src/components, src/modules, src/pages)
  ✅ spec-template.md: User stories match frontend interactions/components
  ✅ tasks-template.md: Task organization reflects component-based development
  ⚠️ Manual Review: Ensure CI/CD pipeline reflects these principles
-->

## Core Principles

### I. Component-First Architecture

Every feature must be built as a composable React component with clear prop interfaces and single responsibility. Components MUST be independently testable, reusable across the application, and documented with prop types. Break monolithic screens into smaller, focused components. Use TypeScript `type` definitions for all props—no implicit `any` types allowed.

**Rationale**: This ensures code reusability, maintainability, and enables independent testing of UI logic. Clear component contracts enable team collaboration and reduce bugs.

### II. Type Safety (TypeScript Mandatory)

All code MUST be written in TypeScript with strict mode enabled. Union types (e.g., `'white' | 'black' | 'blur'`) are REQUIRED for enumerated values instead of strings. Generic types MUST be used for reusable logic. No `// @ts-ignore` comments without documented justification. ESLint rules enforce this—zero warnings policy.

**Rationale**: Static type checking prevents entire categories of runtime errors and makes refactoring safer. Strong types serve as inline documentation.

### III. Responsive Design (Mobile-First)

All user interfaces MUST be responsive and designed mobile-first using Tailwind CSS breakpoints (xs: 480px, sm: 768px, md: 1024px, lg: 1280px, xl: 1440px). EVERY component MUST be tested and visually verified across breakpoints: mobile (iPhone 12), tablet (iPad), and desktop (1920px+). Hard-coded pixel values are NOT allowed—only use Tailwind utilities or CSS variables.

**Rationale**: The product serves users on diverse devices. Mobile-first ensures simplicity and scalability. This principle prevents late-stage responsive redesigns.

### IV. Performance & Accessibility Standards

Bundle size MUST remain under [TODO: DEFINE TARGET MB]. Accessibility MUST meet WCAG 2.1 AA standard minimum: semantic HTML, proper heading hierarchy, aria-labels on interactive elements, keyboard navigation support, color contrast ratio ≥4.5:1. Images MUST have alt text. Unused dependencies MUST be removed quarterly. Core Web Vitals MUST be monitored—LCP <2.5s, FID <100ms, CLS <0.1.

**Rationale**: Performance ensures user satisfaction and SEO ranking. Accessibility ensures inclusive design for all users regardless of abilities.

### V. Testing Discipline

Unit tests MUST be written before implementation (TDD approach). Minimum coverage: 70% for component logic, 100% for utilities. Integration tests MUST cover critical user journeys (e.g., navigation flows, form submissions). All tests MUST use Jest + React Testing Library—test user behavior, not implementation. Failing tests MUST be fixed before merging.

**Rationale**: Tests catch regressions early, enable confident refactoring, and serve as executable documentation.

## Technology Stack Enforcement

**Mandatory Stack:**
- **Framework**: React 19+ with TypeScript 5.8+
- **Build Tool**: Vite (dev server, production build)
- **Styling**: Tailwind CSS v4 with `@theme` customization
- **Animations**: Framer Motion (for motion-heavy interactions only)
- **Routing**: React Router v7+ (prepared for multi-page expansion)
- **Linting**: ESLint v9+ with flat config + Prettier v3+ (NO style conflicts)
- **Testing**: Jest + React Testing Library (setup required)
- **Package Manager**: npm (locked versions in package-lock.json)

**Restricted Additions**: No alternative CSS frameworks (styled-components, emotion, etc.). No custom state management until Context API is insufficient. No jQuery, Moment.js, or other pre-Hooks-era libraries.

**Rationale**: Consistency reduces onboarding friction and prevents dependency fragmentation.

## Development Workflow & Quality Gates

### Pre-Commit Requirements

1. **Lint Pass**: `npm run lint` MUST pass with zero warnings
2. **Type Check**: TypeScript compiler MUST have zero errors (`tsc --noEmit`)
3. **Prettier Format**: `npm run prettier` MUST show no differences
4. **Tests Pass**: `npm run test` MUST pass (or skip if tests not yet written for feature)

### Code Review Checklist

- [ ] Component has named export with TypeScript Props type
- [ ] All props are explicitly typed (no `any`)
- [ ] Component is responsive—breakpoints tested
- [ ] Accessibility verified (aria-labels, semantic HTML)
- [ ] No console errors/warnings in browser DevTools
- [ ] No unused imports or dead code
- [ ] Tests included (unit or integration)

### Deployment Gate

- All PRs MUST pass CI/CD pipeline before merge
- Main branch MUST always be deployable
- Breaking changes MUST include migration guide in commit message

## Governance

### Amendment Procedure

Constitution changes MUST be documented in a PR with "docs: amend constitution" message prefix. All amendments MUST explain:
- **What changed** (principle added/removed/clarified)
- **Why** (business/technical justification)
- **Impact** (affected files, team communication needed)

Changes affecting multiple principles require team consensus. Clarifications (typos, examples) only require senior developer approval.

### Versioning Policy

Constitution uses semantic versioning (MAJOR.MINOR.PATCH):
- **MAJOR**: Principle removal, backward-incompatible governance change, stack overhaul
- **MINOR**: New principle added, requirement strengthened, new testing/performance standard
- **PATCH**: Clarifications, example updates, governance procedure refinements

**Version**: 1.0.0 | **Ratified**: 2025-10-31 | **Last Amended**: 2025-10-31

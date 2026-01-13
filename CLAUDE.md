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

## Repository Information

- **Remote Repository**: https://github.com/vb-sferai/IntelliHub
- **Local Directory**: `sfer.ai website`

### Branch Structure

This repository uses **separate branches for language versions** instead of a single codebase with i18n:

#### Russian Version Branch
- **Branch**: `supreme_main_ru_products`
- **Domain**: ru.sfer.ai
- **Language**: Russian
- **Content**: Russian landing page (MainPage), Russian workshop pages, Russian 404 page
- **Target Audience**: Russian-speaking users

#### English Version Branch
- **Branch**: `supreme_main_eng`
- **Domain**: sfer.ai
- **Language**: English
- **Content**: English landing page (SupremeMainPage), English workshop pages, English 404 page
- **Target Audience**: International users, investors, partners

**Important Notes**:
- Each branch has its own deployment pipeline to respective domains
- 404 pages are language-specific per branch (not runtime language detection between branches)
- Feature branches should be created from the appropriate language branch
- Changes to shared components may need to be applied to both branches

## Project Overview

**IntelliHub** (SFER.AI Website) is a React 19 + TypeScript website showcasing AI products and services by SFER.AI. The site operates on two domains with automatic language detection:
- **sfer.ai** - English version (primary domain)
- **ru.sfer.ai** - Russian version (automatic redirect for Russian-speaking users)

The project features:
- Multiple product workshop pages (Base, Vibecoding, Agents)
- Two distinct landing pages (MainPage, SupremeMainPage)
- Job application system with Google Sheets integration
- Case studies showcase
- Creative Cursor-style 404 page with bilingual support

**Technology Stack**:
- React 19.1.1 + TypeScript 5.8
- Vite 7 (build tool)
- React Router DOM v7 (routing)
- Tailwind CSS v4 (styling)
- Framer Motion (animations)
- Embla Carousel (carousels)
- React Hook Form + Zod (form validation)

## Development Commands

### Running the Application
```bash
npm run dev              # Start Vite dev server (http://localhost:5173)
npm run preview          # Preview production build locally
```

### Building
```bash
npm run build            # TypeScript compilation + Vite build → dist/
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
sfer.ai website/
├── .claude/                    # Claude Code settings
├── docs/                       # Documentation files
│   ├── APPLICATION_FORM_PLAN.md
│   └── GOOGLE_APPS_SCRIPT_SETUP.md
├── public/
│   └── favicon.svg            # White circle favicon
├── src/
│   ├── assets/
│   │   └── imgs/              # Images, icons, logos
│   │       ├── reviews/       # Review avatars
│   │       └── supreme/       # Supreme page assets
│   ├── components/            # Shared components
│   │   ├── Button/
│   │   ├── Carousel/
│   │   ├── FAQ/
│   │   └── Title/
│   ├── constants/
│   │   └── routes.ts          # Route definitions
│   ├── modules/               # Layout modules
│   │   ├── App/               # App wrapper, Layout, Pages
│   │   ├── Footer/            # Site footer
│   │   └── Header/            # Site header (sticky, scroll-aware)
│   └── pages/                 # Page components
│       ├── AgentsPage/        # AI Agents workshop
│       ├── BasePage/          # AI Base workshop
│       ├── CaseStudyLancet/   # Case study page
│       ├── JobPages/          # Job listing and application
│       │   ├── ApplicationPage/
│       │   ├── PmJobPage/
│       │   └── shared/
│       ├── MainPage/          # Russian landing page
│       ├── NotFoundPage/      # Creative 404 page (Cursor-style)
│       ├── SupremeMainPage/   # English premium landing
│       └── VibecodingPage/    # Vibecoding workshop
├── .gitignore
├── package.json
├── vite.config.ts
├── tsconfig.json
├── CLAUDE.md                  # This file
└── README.md
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
├── assets/            # Page-specific assets (images, videos)
├── data.ts            # Page content and configuration
└── index.ts           # Public exports
```

### Routing

#### Route Configuration

Routes are defined in [src/constants/routes.ts](src/constants/routes.ts):

```typescript
export const ROUTES = {
    root: '/',                           // MainPage (Russian landing)
    supreme: '/supreme',                 // SupremeMainPage (English landing)
    casestudies: '/casestudies',         // Case study showcase
    base: '/baza',                       // AI Base workshop page
    vibecoding: '/vibecoding',           // Vibecoding workshop page
    agents: '/agents',                   // AI Agents workshop page
    jobsPm: '/jobs/pm',                  // PM job listing
    jobsApply: '/jobs/:position/apply',  // Job application form
    notFound: '*',                       // 404 page (Cursor-style)
};
```

Route implementation is in [src/modules/App/components/Pages.tsx](src/modules/App/components/Pages.tsx).

#### Chrome (Header/Footer) Rendering

The Layout component ([src/modules/App/components/Layout.tsx](src/modules/App/components/Layout.tsx)) conditionally shows/hides Header and Footer based on the current route:

**Shows chrome**: MainPage, product pages (Base, Vibecoding, Agents)
**Hides chrome**: SupremeMainPage, CaseStudyLancetPage, JobPages, NotFoundPage

### Pages

The application has **10 pages** organized by purpose:

#### 1. MainPage (`/`)
- **Purpose**: Original Russian landing page
- **Audience**: Russian-speaking visitors on ru.sfer.ai
- **Chrome**: Shows Header and Footer
- **Sections**:
  - Hero with statistics
  - Products carousel (7 AI products)
  - Cases showcase
  - Events carousel (workshops, webinars)
  - Team section
  - FAQ
- **Data**: [src/pages/MainPage/data.ts](src/pages/MainPage/data.ts)
- **Components**: ProductsCarouselItem, CasesCarouselItem, EventsCarouselItem, QuestionsBlock

#### 2. SupremeMainPage (`/supreme`)
- **Purpose**: Premium English landing page
- **Audience**: English-speaking visitors, investors, partners
- **Chrome**: No Header/Footer (custom SupremeHeader)
- **Design**: High-end design with MeshGradient and DitheringBackground
- **Sections**:
  - Hero (full-screen with mesh gradient)
  - Who We Are (company mission)
  - What We Do (services)
  - What Sets Us Apart (competitive advantages)
  - Philosophy (AI-first approach)
  - Case Studies (client results)
  - Contacts (team info)
  - Discover CTA (final call-to-action)
- **Navigation**: Custom sticky header with smooth scroll
- **Data**: [src/pages/SupremeMainPage/data.ts](src/pages/SupremeMainPage/data.ts)

#### 3. CaseStudyLancetPage (`/casestudies`)
- **Purpose**: Detailed case study presentation
- **Client**: Wealth Management Company
- **Chrome**: No Header/Footer
- **Content**: Problem, solution, results, metrics
- **Design**: Full-screen presentation style

#### 4. BasePage (`/baza`)
- **Purpose**: AI Base 3-day workshop landing page
- **Workshop**: November 25-27 (Mon-Wed), 19:00-21:00
- **Pricing**:
  - Live participation: 24,990 ₽ (8,330 ₽/month × 3)
  - Recording access: 19,990 ₽ (6,663 ₽/month × 3)
- **Chrome**: Shows Header (with product-specific navigation)
- **Sections**:
  - Hero with mesh gradient
  - Content carousel (3 workshop modules)
  - Audience carousel (3 target groups)
  - Reviews carousel (14 testimonials)
  - Price carousel (2 tiers: Live, Recording)
  - FAQ accordion
  - Contact section with instructor bio
- **Payment**: GetCourse integration
- **Data**: [src/pages/BasePage/data.ts](src/pages/BasePage/data.ts)
- **MeshGradient**: Custom configuration (preserve exact values)

#### 5. VibecodingPage (`/vibecoding`)
- **Purpose**: Vibecoding workshop landing page
- **Structure**: Similar to BasePage
- **Chrome**: Shows Header
- **Sections**: Hero, Content, Audience, Reviews, Price, FAQ, Contact
- **Data**: [src/pages/VibecodingPage/data.ts](src/pages/VibecodingPage/data.ts)

#### 6. AgentsPage (`/agents`)
- **Purpose**: AI Agents workshop landing page
- **Structure**: Similar to BasePage and VibecodingPage
- **Chrome**: Shows Header
- **Sections**: Hero, Content, Audience, Reviews, Price, FAQ, Contact
- **Data**: [src/pages/AgentsPage/data.ts](src/pages/AgentsPage/data.ts)

#### 7. PmJobPage (`/jobs/pm`)
- **Purpose**: Product Manager / Business Assistant job listing
- **Chrome**: No Header/Footer
- **Sections**:
  - Personal greeting from Kirill Gurbanov
  - Company overview (SFER.AI mission and values)
  - Role responsibilities (4 key areas)
  - Requirements (must-have and nice-to-have)
  - Working conditions (remote, part-time, growth potential)
  - Application CTA (links to ApplicationPage)
- **Design**: Clean, professional layout with mesh gradient hero

#### 8. ApplicationPage (`/jobs/:position/apply`)
- **Purpose**: Job application form with Google Sheets integration
- **Chrome**: No Header/Footer
- **Form Fields** (11 total):
  1. Full Name (required, min 2 chars)
  2. Telegram (required, validated format)
  3. Location (required, city + country)
  4. Experience (required, min 50 chars)
  5. English Level (required, 1-10 scale)
  6. AI Usage (required, min 30 chars)
  7. Success Project (required, min 50 chars)
  8. Failure Project (required, min 50 chars)
  9. Motivation (required, min 30 chars)
  10. Expected Compensation (required)
  11. Additional Info (optional)
- **Validation**: Zod schema with real-time validation
- **Submission**: Google Apps Script webhook (no-cors mode)
- **Features**:
  - Progress bar (completion percentage)
  - Toast notifications (react-hot-toast)
  - Loading states
  - Success screen with redirect
  - Error handling
- **Components**: JobTextInput, JobTextArea, JobRadioGroup (reusable)
- **Hook**: useJobApplicationSubmit (submission logic)
- **Documentation**: [docs/GOOGLE_APPS_SCRIPT_SETUP.md](docs/GOOGLE_APPS_SCRIPT_SETUP.md)

#### 9. NotFoundPage (`*`)
- **Purpose**: Creative 404 error page styled as Cursor IDE
- **Chrome**: No Header/Footer
- **Design**: Full Cursor/VS Code interface simulation
- **Features**:
  - File explorer sidebar (fake project structure)
  - Tab bar with active 404.tsx file
  - Editor area with animated 404 number
  - Status bar with git branch, language, position
  - Chat panel (AI assistant UI)
  - VS Code Dark+ theme colors
- **Branch-Specific Implementation**:
  - **RU Branch** (`supreme_main_ru_products`): Russian language version for ru.sfer.ai
    - Error message: "Упс, похоже эта страница ещё не вайбкожена..."
    - Button: "На главную"
  - **EN Branch** (`supreme_main_eng`): English language version for sfer.ai
    - Error message: "Oops, looks like this page is not vibecoded yet..."
    - Button: "Go to Homepage"
- **Language Detection** (legacy, can be simplified per branch):
  - Current implementation checks hostname (ru.sfer.ai) or ?lang=ru parameter
  - Can be simplified to hardcoded language per branch since deployments are separate
- **Responsive**:
  - Desktop (>1024px): Full IDE interface
  - Tablet (768-1024px): Simplified layout
  - Mobile (<768px): Minimal editor-style view
- **Animation**: Pulse effect on 404 number (framer-motion)

### Key Dependencies

#### Production
- **react** (19.1.1) + **react-dom** (19.1.1): UI library
- **react-router-dom** (7.8.2): Client-side routing
- **tailwindcss** (4.1.12): Utility-first CSS
- **@paper-design/shaders-react** (0.0.61): WebGL mesh gradients
- **embla-carousel-react** (8.6.0): Carousel component
- **framer-motion** (12.23.12): Animations
- **react-hook-form** (7.66.0): Form management
- **zod** (4.1.12): Schema validation
- **react-hot-toast** (2.6.0): Toast notifications
- **clsx** (2.1.1): Conditional className utility

#### Development
- **typescript** (5.8.3): TypeScript compiler
- **vite** (7.1.2): Build tool and dev server
- **eslint** (9.34.0): JavaScript/TypeScript linter
- **prettier** (3.6.2): Code formatter

### Styling

#### Tailwind CSS v4

Configured via `@tailwindcss/vite` plugin in [vite.config.ts](vite.config.ts).

#### Custom Theme ([src/index.css](src/index.css))

```css
@theme {
  /* Fonts */
  --font-geist: "Geist Mono", monospace;

  /* Custom Colors */
  --color-primary-100: oklch(0.7319 0.1856 52.89);
  --color-primary-200: oklch(0.656 0.2126 38.09);
  --color-gray-200: oklch(0.9271 0.0075 260.73);
  --color-gray-400: oklch(0.7565 0.0048 258.33);
  --color-gray-500: oklch(0.6167 0 0);
  --color-gray-600: oklch(0.5138 0 0);
  --color-gray-700: oklch(0.4422 0.0355 257.79);

  /* Responsive Breakpoints */
  --breakpoint-xs: 30rem;   /* 480px */
  --breakpoint-sm: 48rem;   /* 768px */
  --breakpoint-md: 64rem;   /* 1024px */
  --breakpoint-lg: 80rem;   /* 1280px */
  --breakpoint-xl: 90rem;   /* 1440px */
  --breakpoint-2xl: 105rem; /* 1680px */
}
```

#### Typography
- **Primary Font**: Inter (sans-serif, Google Fonts)
- **Monospace Font**: Geist Mono (code, technical elements)
- **Additional**: Montserrat (Google Fonts)

#### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts: `hidden md:flex`, `flex md:hidden`
- Responsive padding: `px-4 sm:px-12 lg:px-16 xl:px-[calc((100vw-1408px)/2)]`
- Responsive typography: `text-base md:text-sm xl:text-base`

#### Page-Specific Colors
Product pages define custom primary colors in inline `<style>` tags for theming.

### Data Management

#### Separation of Content from Components

Page content is organized in `data.ts` files:

```typescript
// Example: BasePage/data.ts
export const CONTENT = [
  { iconUrl: '...', title: '...', text: '...', list: [...] }
];
export const AUDIENCE = [...];
export const PRICE = [...];
export const REVIEWS = [...];
```

#### Data Flow
1. **Data File**: Exports typed arrays of content objects
2. **Page Component**: Imports data arrays
3. **Carousel**: Receives data via props
4. **Item Components**: Render individual items (CarouselContentItem, CarouselPriceItem, CarouselReviewsItem)

This separation allows easy content updates without touching UI code.

### Important Patterns

#### 1. Carousel Components
Product pages (Base, Vibecoding, Agents) each have their **own Carousel component** in `PageName/components/Carousel/` rather than using the shared `src/components/Carousel/`. These are page-specific implementations with custom styling and behavior.

#### 2. MeshGradient Configurations
Hero sections use `@paper-design/shaders-react` with specific configuration values:
- speed
- colors (array of hex colors)
- distortion
- swirl
- grainMixer
- frame

**IMPORTANT**: Preserve these exact values when editing to maintain visual consistency.

#### 3. Header Scroll Behavior
The Header component ([src/modules/Header/components/Header.tsx](src/modules/Header/components/Header.tsx)) has sophisticated scroll-aware behavior:
- Transparent on page top → White background on scroll
- CTA button fades in on scroll (hidden on product pages)
- Logo brightness adjusts on scroll
- Smooth scroll navigation to sections
- Mobile burger menu with AnimatePresence animation

#### 4. Conditional Chrome Rendering
Layout.tsx checks pathname to determine chrome visibility:
```typescript
const showChrome = !isSupreme && !isCaseStudy && !isJobPage && !isNotFound;
```

#### 5. Form Validation with Zod
Job application form uses Zod schemas for validation:
```typescript
export const pmApplicationSchema = z.object({
  fullName: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  telegram: z.string().regex(/^@?[a-zA-Z0-9_]{5,}$/, 'Неверный формат'),
  // ... more fields
});
```

## Internationalization (i18n)

### Branch-Based Strategy

**Important**: This project uses **separate Git branches** for language versions instead of a single codebase with i18n library.

#### Domains and Branches
- **sfer.ai** (English + auto-redirect) → Deployed from `supreme_main_eng` branch
- **en.sfer.ai** (English, explicit) → Same deployment as sfer.ai (alias)
- **ru.sfer.ai** (Russian) → Deployed from `supreme_main_ru_products` branch

### Implementation

#### 1. Separate Branches Approach

**Why Separate Branches:**
- Complete independence between language versions
- Different content, different marketing strategies
- Separate deployment pipelines
- No runtime language switching overhead
- Simpler maintenance for two distinct websites

**Branch Details:**
- **`supreme_main_eng`**: Full English site content
- **`supreme_main_ru_products`**: Full Russian site content
- Each branch has its own 404 page in respective language
- Shared technical architecture, different content

#### 2. Automatic Language Detection ([index.html](index.html))

The redirect script on sfer.ai uses **two detection methods** for maximum coverage:
1. **Browser language** (`navigator.languages`) — works for Chrome, Safari, Edge
2. **Timezone** (`Intl.DateTimeFormat().resolvedOptions().timeZone`) — works for Firefox and users with misconfigured browser language

```javascript
<script>
  // Auto-redirect ONLY on sfer.ai (not on en.sfer.ai!)
  if (window.location.hostname === 'sfer.ai') {
    const userLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    const isRussianLang = userLangs.some(lang => lang.toLowerCase().startsWith('ru'));

    // Check timezone (Russia and CIS countries)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const isRussianTimezone = timezone.startsWith('Europe/Moscow') ||
                              timezone.startsWith('Europe/Minsk') ||
                              timezone.startsWith('Asia/Yekaterinburg') ||
                              timezone.includes('Russia');

    // Redirect if Russian language OR Russian timezone
    if (isRussianLang || isRussianTimezone) {
      const currentPath = window.location.pathname + window.location.search + window.location.hash;
      window.location.href = 'https://ru.sfer.ai' + currentPath;
    }
  }
</script>
```

**Routing Logic**:
| Domain | Behavior |
|--------|----------|
| `sfer.ai` | Auto-redirect: RU browser/timezone → ru.sfer.ai, otherwise stays |
| `en.sfer.ai` | Always English (no redirect, explicit choice) |
| `ru.sfer.ai` | Always Russian (no redirect) |

**Covered Timezones** (Russia + CIS):
- Russia: Moscow, Kaliningrad, Samara, Volgograd, Yekaterinburg, Omsk, Novosibirsk, Krasnoyarsk, Irkutsk, Vladivostok
- Belarus: Minsk
- Kazakhstan: Almaty

**Why Timezone Detection?**
Firefox doesn't automatically include system language in `navigator.languages`. Even with Russian Firefox UI, `navigator.languages` may return `["en-US", "en"]`. Timezone detection solves this.

#### 3. Legacy Language Detection in Components

**Note**: Since branches are deployed separately, runtime language detection (hostname checks) in components can be simplified:

**Current (legacy) implementation:**
```typescript
const [isRussian, setIsRussian] = useState(false);

useEffect(() => {
  const hostname = window.location.hostname;
  setIsRussian(hostname.startsWith('ru.') || hostname.includes('ru.sfer'));
}, []);
```

**Recommended simplification:**
```typescript
// In RU branch: just use Russian text directly
const errorMessage = "Упс, похоже эта страница ещё не вайбкожена...";

// In EN branch: just use English text directly
const errorMessage = "Oops, looks like this page is not vibecoded yet...";
```

### Content Strategy

#### Russian Branch (`supreme_main_ru_products` → ru.sfer.ai)
- MainPage: Russian landing page
- Product pages: Russian workshop descriptions
- Job pages: Russian job listings
- 404 page: Russian error message
- All UI text in Russian

#### English Branch (`supreme_main_eng` → sfer.ai)
- SupremeMainPage: English premium landing
- Product pages: English workshop descriptions
- Job pages: English job listings
- 404 page: English error message
- All UI text in English

### No Formal i18n Library
- **No react-i18next**: Not needed with separate branches
- **No translation files**: Content exists in respective branches
- **Branch-based approach**: Two separate websites sharing architecture
- **Simpler than i18n**: Each branch is monolingual

## External Integrations

### 1. Calendly
- **URL**: https://calendly.com/as-sfer/30min
- **Usage**: Default CTA button link for bookings
- **Security**: Opens in new window with `noopener, noreferrer`

### 2. Google Sheets (via Apps Script)
- **Purpose**: Job application submissions storage
- **Endpoint**: Google Apps Script Web App (deployed URL in useJobApplicationSubmit.ts)
- **Mode**: `no-cors` (required for Google Apps Script)
- **Sheet Columns**: 13 fields (timestamp, position, personal info, experience, projects, etc.)
- **Documentation**: [docs/GOOGLE_APPS_SCRIPT_SETUP.md](docs/GOOGLE_APPS_SCRIPT_SETUP.md)

### 3. GetCourse
- **Base Workshop**: https://kirillgurbanov.getcourse.ru/3day_workshop_ai
- **Recording**: https://kirillgurbanov.getcourse.ru/3day_workshop_ai_rec
- **Usage**: Payment and enrollment platform for workshops

### 4. Google Fonts
- **Inter**: Primary sans-serif font
- **Geist Mono**: Monospace for code/tech elements
- **Montserrat**: Additional typography

## Build Configuration

### Vite Configuration ([vite.config.ts](vite.config.ts))

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
```

### TypeScript Configuration

**Project References** ([tsconfig.json](tsconfig.json)):
- App config: tsconfig.app.json
- Node config: tsconfig.node.json

**App Config** ([tsconfig.app.json](tsconfig.app.json)):
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Strict mode enabled

### ESLint Configuration ([eslint.config.js](eslint.config.js))
- TypeScript ESLint
- React Hooks rules
- React Refresh plugin
- Prettier integration

### Prettier Configuration ([.prettierrc](.prettierrc))
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## Git Workflow Best Practices

### Branch Strategy

**Main Production Branches**:
- `supreme_main_ru_products` - Russian version (ru.sfer.ai)
- `supreme_main_eng` - English version (sfer.ai)

**Creating Feature Branches**:

#### For Russian Version Features
```bash
# Start from Russian production branch
git fetch origin
git checkout supreme_main_ru_products
git pull origin supreme_main_ru_products

# Create feature branch
git checkout -b kirill-[feature-name]-ru
```

#### For English Version Features
```bash
# Start from English production branch
git fetch origin
git checkout supreme_main_eng
git pull origin supreme_main_eng

# Create feature branch
git checkout -b kirill-[feature-name]-en
```

#### For Features Affecting Both Versions
```bash
# Option 1: Separate feature branches (Recommended)
# Create RU version
git checkout supreme_main_ru_products
git checkout -b kirill-[feature-name]-ru
# ... make changes, commit, push, create PR

# Create EN version
git checkout supreme_main_eng
git checkout -b kirill-[feature-name]-en
# ... make changes, commit, push, create PR

# Option 2: Cherry-pick between branches
# Make changes in RU branch first
git checkout kirill-[feature-name]-ru
git commit -m "feat: ..."
# Apply to EN branch
git checkout supreme_main_eng
git checkout -b kirill-[feature-name]-en
git cherry-pick <commit-hash>
# Adjust content for English, amend commit
```

**Branch Naming Convention**:
- `kirill-[feature]-ru` for Russian version features
- `kirill-[feature]-en` for English version features
- `kirill-[feature]` for general/documentation changes
- Use kebab-case: `kirill-404-page-ru`, `kirill-job-application-en`

### Commit Message Format

```
feat: Add creative Cursor-style 404 page with mobile support

## Summary
- Created custom 404 page mimicking Cursor/VS Code interface
- Added responsive mobile design with simplified UI
- Implemented language detection (EN/RU) based on domain

## Features
- Full Cursor IDE interface mockup for desktop
- Simplified mobile version with editor-like styling
- Automatic language switching

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Commit Types**:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code formatting (no logic change)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Pull Request Process

#### For Russian Version PR
```bash
# Push feature branch
git push -u origin kirill-[feature-name]-ru

# Create pull request targeting RU branch
gh pr create --base supreme_main_ru_products --title "feat: Feature description (RU)" --body "Detailed description"
```

#### For English Version PR
```bash
# Push feature branch
git push -u origin kirill-[feature-name]-en

# Create pull request targeting EN branch
gh pr create --base supreme_main_eng --title "feat: Feature description (EN)" --body "Detailed description"
```

**PR Target Branches**:
- Russian features → `supreme_main_ru_products`
- English features → `supreme_main_eng`
- **Important**: Always specify `--base` flag to ensure PR targets correct branch

## Documentation Files

### Current Documentation

- **CLAUDE.md** (this file): Comprehensive project guide for AI assistants
- **docs/APPLICATION_FORM_PLAN.md**: Job application form implementation plan (Russian)
- **docs/GOOGLE_APPS_SCRIPT_SETUP.md**: Google Apps Script setup instructions (Russian)
- **README.md**: Standard Vite + React template readme

### Documentation Maintenance

- Keep CLAUDE.md updated when adding new pages or major features
- Update docs/ folder for feature-specific documentation
- Include inline code comments for complex logic
- Document any new external integrations

## Security Considerations

### Form Submissions
- **Client-side validation**: Zod schemas
- **Input sanitization**: Handled by Google Apps Script
- **Rate limiting**: Should be added (not currently implemented)
- **Honeypot fields**: Should be added for bot protection

### External Links
- All external links open with `target="_blank" rel="noopener noreferrer"`
- Calendly, GetCourse links secured

### Google Apps Script
- **Deployment**: "Anyone" can access (public endpoint)
- **No authentication**: Client-side only validation
- **Recommendation**: Add server-side validation for production

## Performance Optimizations

### Current Optimizations
- SVG for logos and icons (smaller file size)
- JPG for photographs (optimized quality)
- MP4 for videos (compressed)
- Vite's optimized bundling
- Tree-shaking unused code
- Minification in production

### Future Improvements
- Code splitting with React.lazy()
- Image optimization (WebP format)
- Lazy loading for carousels
- CDN for static assets

## Testing Strategy

### Current Status
- No formal testing framework implemented
- Manual testing via `npm run dev`

### Recommended Testing
- Unit tests: Vitest (Vite-native)
- Component tests: React Testing Library
- E2E tests: Playwright or Cypress
- Form validation tests (Zod schemas)

## Troubleshooting

### Common Issues

**Issue**: Mesh gradient not rendering
- **Solution**: Check `@paper-design/shaders-react` configuration, ensure WebGL support

**Issue**: Form submission fails
- **Solution**: Check Google Apps Script URL, verify no-cors mode, check network tab

**Issue**: Header not showing/hiding correctly
- **Solution**: Check Layout.tsx conditional logic, verify route pathname matching

**Issue**: 404 page language not switching
- **Solution**: Check hostname detection logic, test with ?lang=ru parameter

**Issue**: Carousel not autoplaying
- **Solution**: Verify embla-carousel-autoplay plugin configuration

## Additional Resources

- **React Documentation**: https://react.dev/
- **Vite Documentation**: https://vite.dev/
- **Tailwind CSS v4**: https://tailwindcss.com/
- **React Router v7**: https://reactrouter.com/
- **Zod Documentation**: https://zod.dev/

---

**Last Updated**: 2025-11-10
**Project Version**: Active development on `supreme_main_ru_products` branch

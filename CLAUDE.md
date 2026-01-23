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
- **26 pages** including landing pages, product pages, case studies, forms, and utility pages
- Multiple product workshop pages (Base, Vibecoding, Agents, VoiceBot)
- Two distinct landing pages (MainPage for teams, SupremeMainPage as main)
- Job application system with Google Sheets integration
- Community forms with TypeformService (Typeform-style UX)
- Case studies showcase (5 case studies)
- Yandex Metrika analytics integration
- Creative Cursor-style 404 page with bilingual support

**Technology Stack**:
- React 19.1.1 + TypeScript 5.8
- Vite 7 (build tool)
- React Router DOM v7 (routing)
- Tailwind CSS v4 (styling)
- Framer Motion (animations)
- Embla Carousel (carousels)
- React Hook Form + Zod (form validation)
- Lucide React (icons)

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

```
IntelliHub/
├── .claude/                    # Claude Code settings
├── .serena/                    # Serena MCP settings
├── docs/                       # Documentation files
│   ├── google-apps-script/     # Google Apps Script files
│   │   └── forms-to-sheets.js
│   ├── APPLICATION_FORM_PLAN.md
│   ├── GOOGLE_APPS_SCRIPT_SETUP.md
│   ├── TypeformService.md
│   ├── METRIKA_GOALS_SETUP.md
│   ├── METRIKA_FIX_SOLUTION.md
│   ├── METRIKA_DEBUG_GUIDE.md
│   ├── YANDEX_METRIKA_SETUP.md
│   ├── YANDEX_METRIKA_CHECKING_GUIDE.md
│   ├── UTM_TRACKING_GUIDE.md
│   └── google-apps-script-amocrm.js
├── public/
│   ├── favicon.svg            # White circle favicon
│   └── for/                   # Static offer pages
│       ├── centraluniversity/
│       ├── jet/
│       ├── mk/
│       └── markswebb/
├── src/
│   ├── assets/
│   │   └── imgs/              # Images, icons, logos
│   ├── components/            # Shared components
│   │   ├── Button/
│   │   ├── Carousel/
│   │   ├── CookieBanner/
│   │   ├── FAQ/
│   │   ├── ReviewsGrid/
│   │   ├── ScrollToTop/
│   │   └── Title/
│   ├── constants/
│   │   └── routes.ts          # Route definitions
│   ├── hooks/
│   │   └── useAnalytics.ts    # Analytics hook
│   ├── modules/               # Layout modules
│   │   ├── App/               # App wrapper, Layout, Pages
│   │   ├── Footer/            # Site footer
│   │   └── Header/            # Site header (sticky, scroll-aware)
│   ├── pages/                 # Page components (26 pages)
│   │   ├── AgentsPage/
│   │   ├── AutomationsPage/
│   │   ├── BasePage/
│   │   ├── CaseStudiesPage/
│   │   ├── CaseStudyGoBeyond/
│   │   ├── CaseStudyLancet/
│   │   ├── CaseStudyNubes/
│   │   ├── CaseStudyUAE/
│   │   ├── CaseStudyYandex/
│   │   ├── CommunityFormPage/
│   │   ├── CustomAutomationsPage/
│   │   ├── EduPage/
│   │   ├── JobPages/
│   │   │   ├── ApplicationPage/
│   │   │   ├── PmJobPage/
│   │   │   └── shared/
│   │   ├── MainPage/
│   │   ├── NewYearRedirectPage/
│   │   ├── NotFoundPage/
│   │   ├── OfferPage/         # (not routed, under development)
│   │   ├── OrderSuccessPage/
│   │   ├── PrivacyPolicyPage/
│   │   ├── QuizPage/
│   │   ├── ReviewsPage/
│   │   ├── SferKumarSoloPage/
│   │   ├── SferKumarSoloWebPage/
│   │   ├── SupremeMainPage/
│   │   ├── VibecodingPage/
│   │   └── VoiceBotPage/
│   ├── services/              # Business logic services
│   │   └── TypeformService/   # Typeform-style form service
│   └── utils/
│       └── analytics.ts       # Analytics utilities
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

## Routing

### Route Configuration

Routes are defined in [src/constants/routes.ts](src/constants/routes.ts):

```typescript
export const ROUTES = {
    root: '/',                           // SupremeMainPage (main landing)
    teams: '/teams',                     // MainPage (team page)
    programs: '/programs',               // CustomAutomationsPage
    automations: '/automations',         // AutomationsPage
    reviews: '/edu/reviews',             // ReviewsPage
    cases: '/cases',                     // CaseStudiesPage
    casestudiesLancet: '/cases/lancet',  // Case study: Lancet
    casestudiesYandex: '/cases/yandex',  // Case study: Yandex
    casestudiesGoBeyond: '/cases/gobeyond', // Case study: GoBeyond
    casestudiesUAE: '/cases/uae',        // Case study: UAE
    casestudiesNubes: '/cases/nubes',    // Case study: Nubes
    base: '/edu/baza',                   // AI Base workshop page
    vibecoding: '/edu/vibecoding',       // Vibecoding workshop page
    edu: '/edu',                         // EduPage (education hub)
    agents: '/edu/agents',               // AI Agents workshop page
    sferKumarSolo: '/sfer-kumar-solo',   // Vibe Academy landing
    sferKumarSoloWeb: '/sfer-kumar-solo-web', // Independent web version
    // Legacy redirects
    baseOld: '/baza',                    // → /edu/baza
    vibecodingOld: '/vibecoding',        // → /edu/vibecoding
    agentsOld: '/agents',                // → /edu/agents
    // Jobs
    jobsPm: '/jobs/pm',                  // PM job listing
    jobsApply: '/jobs/:position/apply',  // Job application form
    // Products
    voiceBot: '/products/voice-bot',     // VoiceBot product page
    // Forms
    communityForm: '/forms/community',   // Community form
    communityForm2301: '/forms/community2301', // Community form variant
    // Utility pages
    newyear2026: '/newyear2026',         // New Year redirect
    survey: '/survey',                   // QuizPage
    orderSuccess: '/order/success',      // Order success page
    privacyPolicy: '/privacy-policy',    // Privacy policy page
    notFound: '*',                       // 404 page
};
```

Route implementation is in [src/modules/App/components/Pages.tsx](src/modules/App/components/Pages.tsx).

### Chrome (Header/Footer) Rendering

The Layout component ([src/modules/App/components/Layout.tsx](src/modules/App/components/Layout.tsx)) conditionally shows/hides Header and Footer based on the current route.

**Shows chrome**: MainPage, product pages (Base, Vibecoding, Agents)
**Hides chrome**: SupremeMainPage, CaseStudy pages, JobPages, NotFoundPage, VoiceBotPage, CommunityFormPage

## Pages

### Key Pages (Detailed)

#### 1. SupremeMainPage (`/`)
- **Purpose**: Premium main landing page
- **Audience**: All visitors, investors, partners
- **Chrome**: No Header/Footer (custom SupremeHeader)
- **Design**: High-end design with MeshGradient and DitheringBackground
- **Sections**: Hero, Who We Are, What We Do, What Sets Us Apart, Philosophy, Case Studies, Contacts, Discover CTA
- **Data**: [src/pages/SupremeMainPage/data.ts](src/pages/SupremeMainPage/data.ts)

#### 2. MainPage (`/teams`)
- **Purpose**: Team/company landing page (original Russian landing)
- **Chrome**: Shows Header and Footer
- **Sections**: Hero with statistics, Products carousel, Cases showcase, Events carousel, Team section, FAQ
- **Data**: [src/pages/MainPage/data.ts](src/pages/MainPage/data.ts)

#### 3. SferKumarSoloPage (`/sfer-kumar-solo`)
- **Purpose**: Vibe Academy landing page (joint course by Kumar and Kirill)
- **Chrome**: No Header/Footer (self-contained)
- **Design**: Premium landing with MeshGradient backgrounds
- **Sections**: Hero, Partner logos, Course stats, AGI countdown, AI-first features, Life program features, "Who needs coding" audience cards, Program modules (5), Tools logos, Instructors, Success stories, Reviews, Pricing (3 tiers), FAQ, CTA, Contacts
- **Data**: [src/pages/SferKumarSoloPage/data.ts](src/pages/SferKumarSoloPage/data.ts)

#### 4. VoiceBotPage (`/products/voice-bot`)
- **Purpose**: VoiceBot AI product landing page
- **Chrome**: No Header/Footer
- **Features**: Product showcase, demo, pricing, use cases
- **Assets**: [src/pages/VoiceBotPage/assets/](src/pages/VoiceBotPage/assets/)

#### 5. CommunityFormPage (`/forms/community`, `/forms/community2301`)
- **Purpose**: Community registration form using TypeformService
- **Chrome**: No Header/Footer
- **Features**: Multi-step form with Typeform-style UX
- **Integration**: TypeformService for form logic and presentation
- **Note**: Two route variants point to same page component

#### 6. Workshop Pages (BasePage, VibecodingPage, AgentsPage)
- **Paths**: `/edu/baza`, `/edu/vibecoding`, `/edu/agents`
- **Purpose**: Workshop landing pages
- **Chrome**: Shows Header (with product-specific navigation)
- **Sections**: Hero with mesh gradient, Content carousel, Audience carousel, Reviews carousel, Price carousel, FAQ accordion, Contact section
- **Payment**: GetCourse integration
- **Data**: Each page has its own `data.ts` file
- **MeshGradient**: Custom configuration (preserve exact values)

#### 7. JobPages (`/jobs/pm`, `/jobs/:position/apply`)
- **PmJobPage**: Product Manager job listing with role description
- **ApplicationPage**: Job application form with 11 fields, Zod validation, Google Sheets integration
- **Chrome**: No Header/Footer
- **Documentation**: [docs/GOOGLE_APPS_SCRIPT_SETUP.md](docs/GOOGLE_APPS_SCRIPT_SETUP.md)

### Other Pages (Table)

| Page | Route | Purpose | Chrome |
|------|-------|---------|--------|
| EduPage | `/edu` | Education hub, links to workshops | Header/Footer |
| ReviewsPage | `/edu/reviews` | Customer reviews showcase | Header/Footer |
| CaseStudiesPage | `/cases` | Case studies list | No |
| CaseStudyLancetPage | `/cases/lancet` | Lancet case study | No |
| CaseStudyYandexPage | `/cases/yandex` | Yandex case study | No |
| CaseStudyGoBeyondPage | `/cases/gobeyond` | GoBeyond case study | No |
| CaseStudyUAEPage | `/cases/uae` | UAE case study | No |
| CaseStudyNubesPage | `/cases/nubes` | Nubes case study | No |
| CustomAutomationsPage | `/programs` | Custom automation services | Header/Footer |
| AutomationsPage | `/automations` | Automations overview | Header/Footer |
| QuizPage | `/survey` | Survey/quiz form | No |
| OrderSuccessPage | `/order/success` | Order success confirmation | No |
| PrivacyPolicyPage | `/privacy-policy` | Privacy policy | No |
| NewYearRedirectPage | `/newyear2026` | New Year redirect utility | No |
| SferKumarSoloWebPage | `/sfer-kumar-solo-web` | Independent copy of SferKumarSoloPage | No |
| NotFoundPage | `*` | Creative Cursor-style 404 page | No |
| OfferPage | (not routed) | Under development | — |

## Services

### TypeformService

Located at `src/services/TypeformService/`, this service provides a Typeform-style multi-step form experience.

**Documentation**: [docs/TypeformService.md](docs/TypeformService.md)

**Structure**:
```
TypeformService/
├── components/
│   ├── fields/
│   │   ├── EmailField.tsx
│   │   ├── InfoField.tsx
│   │   ├── SelectField.tsx
│   │   ├── TextareaField.tsx
│   │   ├── TextField.tsx
│   │   └── index.ts
│   ├── ProgressBar.tsx
│   ├── StepScreen.tsx
│   ├── ThankYouScreen.tsx
│   ├── TypeformContainer.tsx
│   └── WelcomeScreen.tsx
├── hooks/
│   └── useTypeform.ts
├── types.ts
└── index.ts
```

**Usage**: Used by CommunityFormPage for community registration forms.

**Features**:
- Welcome screen with intro
- Multi-step form navigation
- Progress bar
- Various field types (text, textarea, email, select, info)
- Thank you screen on completion
- Form state management via `useTypeform` hook

## Hooks and Utilities

### Analytics

**Hook**: `src/hooks/useAnalytics.ts`
**Utility**: `src/utils/analytics.ts`

Used for Yandex Metrika integration and event tracking across the application.

**Related Documentation**:
- [docs/YANDEX_METRIKA_SETUP.md](docs/YANDEX_METRIKA_SETUP.md)
- [docs/YANDEX_METRIKA_CHECKING_GUIDE.md](docs/YANDEX_METRIKA_CHECKING_GUIDE.md)
- [docs/METRIKA_GOALS_SETUP.md](docs/METRIKA_GOALS_SETUP.md)
- [docs/METRIKA_DEBUG_GUIDE.md](docs/METRIKA_DEBUG_GUIDE.md)
- [docs/METRIKA_FIX_SOLUTION.md](docs/METRIKA_FIX_SOLUTION.md)
- [docs/UTM_TRACKING_GUIDE.md](docs/UTM_TRACKING_GUIDE.md)

## Shared Components

| Component | Purpose |
|-----------|---------|
| Button | Reusable button component |
| Carousel | Embla-based carousel component |
| CookieBanner | Cookie consent banner |
| FAQ | Accordion FAQ component |
| ReviewsGrid | Grid layout for reviews |
| ScrollToTop | Scroll restoration on route change |
| Title | Section title component |

## Key Dependencies

### Production
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1.1 | UI library |
| react-dom | ^19.1.1 | React DOM bindings |
| react-router-dom | ^7.8.2 | Client-side routing |
| tailwindcss | ^4.1.12 | Utility-first CSS |
| @paper-design/shaders-react | ^0.0.61 | WebGL mesh gradients |
| embla-carousel-react | ^8.6.0 | Carousel component |
| embla-carousel-autoplay | ^8.6.0 | Carousel autoplay |
| framer-motion | ^12.23.12 | Animations |
| react-hook-form | ^7.69.0 | Form management |
| @hookform/resolvers | ^5.2.2 | Form resolvers |
| zod | ^4.2.1 | Schema validation |
| react-hot-toast | ^2.6.0 | Toast notifications |
| lucide-react | ^0.562.0 | Icon library |
| clsx | ^2.1.1 | Conditional className utility |

### Development
| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ~5.8.3 | TypeScript compiler |
| vite | ^7.1.2 | Build tool |
| @vitejs/plugin-react | ^5.0.0 | Vite React plugin |
| eslint | ^9.34.0 | Linter |
| prettier | ^3.6.2 | Code formatter |

## Styling

### Tailwind CSS v4

Configured via `@tailwindcss/vite` plugin in [vite.config.ts](vite.config.ts).

### Custom Theme ([src/index.css](src/index.css))

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

### Typography
- **Primary Font**: Inter (sans-serif, Google Fonts)
- **Monospace Font**: Geist Mono (code, technical elements)
- **Additional**: Montserrat (Google Fonts)

## External Integrations

### 1. Calendly
- **URL**: https://calendly.com/as-sfer/30min
- **Usage**: Default CTA button link for bookings

### 2. Google Sheets (via Apps Script)
- **Purpose**: Job application submissions, form data storage
- **Documentation**: [docs/GOOGLE_APPS_SCRIPT_SETUP.md](docs/GOOGLE_APPS_SCRIPT_SETUP.md)
- **AmoCRM Integration**: [docs/google-apps-script-amocrm.js](docs/google-apps-script-amocrm.js)

### 3. GetCourse
- **Base Workshop**: https://kirillgurbanov.getcourse.ru/3day_workshop_ai
- **Recording**: https://kirillgurbanov.getcourse.ru/3day_workshop_ai_rec
- **Usage**: Payment and enrollment platform for workshops

### 4. Yandex Metrika
- **Purpose**: Analytics, event tracking, goal conversion
- **Documentation**: See docs/YANDEX_METRIKA_*.md files

### 5. Google Fonts
- **Inter**: Primary sans-serif font
- **Geist Mono**: Monospace for code/tech elements
- **Montserrat**: Additional typography

## Static Offer Pages

Located in `public/for/`, these are static HTML pages for specific partner offers:

| Directory | Partner |
|-----------|---------|
| centraluniversity | Central University |
| jet | JET |
| mk | MK |
| markswebb | Markswebb |

## Documentation Files

### Main Documentation
- **CLAUDE.md** (this file): Comprehensive project guide
- **README.md**: Standard Vite + React template readme

### Feature Documentation (`docs/`)
| File | Topic |
|------|-------|
| TypeformService.md | TypeformService usage guide |
| APPLICATION_FORM_PLAN.md | Job application form implementation plan |
| GOOGLE_APPS_SCRIPT_SETUP.md | Google Apps Script setup |
| google-apps-script-amocrm.js | AmoCRM integration script |
| google-apps-script/forms-to-sheets.js | Forms to Sheets script |

### Analytics Documentation (`docs/`)
| File | Topic |
|------|-------|
| YANDEX_METRIKA_SETUP.md | Yandex Metrika setup |
| YANDEX_METRIKA_CHECKING_GUIDE.md | Metrika verification guide |
| METRIKA_GOALS_SETUP.md | Goals configuration |
| METRIKA_DEBUG_GUIDE.md | Debugging Metrika issues |
| METRIKA_FIX_SOLUTION.md | Common fixes |
| UTM_TRACKING_GUIDE.md | UTM parameter tracking |

## Git Workflow

### Branch Strategy

**Main Production Branches**:
- `supreme_main_ru_products` - Russian version (ru.sfer.ai)
- `supreme_main_eng` - English version (sfer.ai)

**Branch Naming Convention**:
- `kirill-[feature]-ru` for Russian version features
- `kirill-[feature]-en` for English version features
- `kirill-[feature]` for general/documentation changes

### Commit Message Format

```
feat: Add creative Cursor-style 404 page with mobile support

## Summary
- Created custom 404 page mimicking Cursor/VS Code interface
- Added responsive mobile design with simplified UI

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Commit Types**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

### Pull Request Process

```bash
# Russian version PR
gh pr create --base supreme_main_ru_products --title "feat: Feature (RU)"

# English version PR
gh pr create --base supreme_main_eng --title "feat: Feature (EN)"
```

## Important Patterns

### 1. MeshGradient Configurations
Hero sections use `@paper-design/shaders-react` with specific configuration values.
**IMPORTANT**: Preserve exact values when editing to maintain visual consistency.

### 2. Header Scroll Behavior
The Header has sophisticated scroll-aware behavior with transparency transitions, CTA fade-in, and mobile burger menu.

### 3. Form Validation with Zod
Forms use Zod schemas for validation with React Hook Form integration.

### 4. Conditional Chrome Rendering
Layout.tsx checks pathname to determine chrome visibility for each route.

## Troubleshooting

### Common Issues

**Issue**: Mesh gradient not rendering
- **Solution**: Check `@paper-design/shaders-react` configuration, ensure WebGL support

**Issue**: Form submission fails
- **Solution**: Check Google Apps Script URL, verify no-cors mode, check network tab

**Issue**: Analytics not tracking
- **Solution**: Check Yandex Metrika setup, see METRIKA_DEBUG_GUIDE.md

**Issue**: 404 page language not switching
- **Solution**: Each branch has its own 404 page in respective language

---

**Last Updated**: 2026-01-23
**Project Version**: Active development on `supreme_main_ru_products` branch

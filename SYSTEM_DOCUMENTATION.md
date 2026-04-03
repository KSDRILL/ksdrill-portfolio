## 1. System Overview

- **System name**: Maluleke Kurhula Success – Engineering Portfolio
- **Purpose**: A personal engineering portfolio optimized to attract employers and recruiters for software engineering and AI systems roles.
- **Core value proposition**: Clearly communicate skills, flagship systems, engineering philosophy, and real-world impact using a professional, stable, authoritative UI that reflects production-grade thinking.
- **Primary audience**: Technical hiring managers, senior engineers, CTOs, and recruiters.
- **Secondary audience**: Potential collaborators and partners interested in large-scale platforms across SaaS, fintech, AI, and enterprise.
- **Positioning**: Design-first, architecture-first engineer who ships real systems via a locked, universal MVP blueprint.

## 2. User Stories / Use Cases (MVP – v1 Only)

- **[v1] As a recruiter**, I can quickly understand who you are, what you build, and your core skills within 30–60 seconds on the home page.
- **[v1] As a hiring manager**, I can open a flagship system case study and see a clear problem statement, architecture, technologies, and your specific contributions.
- **[v1] As a technical reviewer**, I can see your tech stack and engineering philosophy to assess alignment with our environment.
- **[v1] As a recruiter**, I can easily contact you via email or LinkedIn from any page with minimal friction.
- **[v1] As a visitor**, I experience a visually consistent, fast, and professional portfolio that works well on both desktop and mobile.

Future user stories (v2+) are documented but not implemented in v1:
- **[v2] As a visitor**, I can read long-form technical articles and blog posts demonstrating deep thinking and problem-solving.
- **[v2] As a returning visitor**, I can see a visual timeline / roadmap of major releases and platforms.
- **[v3+] As a technical leader**, I can ask an AI assistant questions about your systems and get structured answers using portfolio content.

## 3. Feature List with Tags

### 3.1 v1 (MVP) Features

- **[v1] Home / Overview page**
  - Hero section with background image, name, roles, and primary CTA.
  - Quick links to LinkedIn, GitHub, email, and (optionally) CV.
  - High-level summary of who you are and what you build.

- **[v1] Experience & Capabilities section**
  - Summarizes engineering capabilities across industries (SaaS, fintech, AI, enterprise, etc.).
  - Highlights transferable skills across domains.

- **[v1] Flagship Systems listing**
  - Overview of key systems (FundsLink Academy, Maphophe Community System, KSDRILL Reserve Bank, SyncUp).
  - Each card links to a dedicated case-study page.

- **[v1] Case Study – FundsLink Academy**
  - Dedicated page with: problem statement, solution, architecture diagram description, tech stack, and status.

- **[v1] Case Study – Maphophe Community System**
  - Dedicated page with the same structure as above.

- **[v1] Case Study – KSDRILL Reserve Bank**
  - Dedicated page with the same structure as above.

- **[v1] Case Study – SyncUp**
  - Dedicated page with the same structure as above.

- **[v1] Contact / Get in touch**
  - Clear call-to-action section and/or page with email, WhatsApp, LinkedIn, and GitHub links.

- **[v1] Navigation & Layout**
  - Header and footer across pages.
  - Optional sidebar or secondary navigation for future dashboard-style sections (structure-ready but minimal in v1).

- **[v1] Theme & Config System**
  - JSON-driven theme, navigation, and features configuration.
  - Background imagery configuration for hero and footer.

- **[v1] Basic analytics hooks (frontend only)**
  - Event tracking placeholders (e.g., click events) wired to a generic handler; no real external analytics integration yet.

### 3.2 v2 Features (Documented, Not Implemented in v1)

- **[v2] Blog / Articles**
  - Long-form technical content with tagging and detail pages.

- **[v2] Interactive timeline / roadmap**
  - Visual representation of career and system roadmap.

- **[v2] Multi-language support (i18n)**
  - Optional translation of key pages.

- **[v2] Admin/dashboard view**
  - Internal panel for editing content and managing case studies.

- **[v2] Search across content**
  - Search bar enabling quick navigation through systems, posts, and sections.

### 3.3 v3+ Features (Future)

- **[v3+] AI portfolio assistant**
  - Conversational interface that can answer questions about projects, architecture decisions, and experience.

- **[v3+] Downloadable technical whitepapers**
  - Gated or open PDFs with detailed system design documents.

## 4. User Flows (MVP – v1)

### 4.1 Recruiter Quick Evaluation Flow

1. Visitor lands on the **Home** page.
2. Immediately sees:
   - Name and primary roles (Software Engineer, AI Systems Architect).
   - Short summary of what you build.
   - Prominent links to LinkedIn and GitHub.
3. Scrolls slightly to see:
   - Experience & Capabilities section with industries and applications.
   - Grid of flagship systems with status badges.
4. Clicks on one flagship system to open a **Case Study** page.
5. Skims problem, solution, architecture, and tech stack.
6. Uses **Contact** CTA in page or footer to reach out via email or LinkedIn.

### 4.2 Technical Reviewer Deep-Dive Flow

1. Visitor lands on **Home** page and navigates via header or flagship grid to a specific **Case Study** (e.g., FundsLink Academy).
2. On the case-study page, they see:
   - Context: problem being solved and target users.
   - Architecture: frontend, backend, database, AI (where relevant).
   - Tech stack and your responsibilities/role.
3. Reviewer optionally visits the **Tech Stack** page to see tools, frameworks, and infrastructure summarized.
4. Reviewer navigates to additional case studies for breadth.
5. Reviewer uses **Contact** section/page when they are satisfied with the depth and breadth of your experience.

### 4.3 Direct Contact Flow

1. Visitor lands on any page (Home or deep-linked case study).
2. Uses always-visible header/footer links or a Contact CTA section to:
   - Open an email draft.
   - Open WhatsApp link.
   - Open LinkedIn profile.
3. No authentication or form submission is required in v1 (to keep MVP simple and robust).

## 5. Data Models

All data models are frontend-centric and expressed as TypeScript types derived from Zod schemas. For v1, data will be sourced from static JSON or local configuration but modeled as if they were returned from API endpoints.

- **Profile**
  - `name`: string
  - `titles`: string[] (e.g., ["Software Engineer", "AI Systems Architect"])
  - `summary`: string
  - `companies`: { `name`: string; `role`: string; `description`: string }[]
  - `socialLinks`: { `type`: "linkedin" | "github" | "email" | "whatsapp" | "website"; `label`: string; `url`: string }[]

- **FlagshipSystem**
  - `id`: string (slug, e.g., "fundslink-academy")
  - `name`: string
  - `badgeColor`: string (from theme or semantic token)
  - `status`: "active-development" | "design-complete" | "planned"
  - `shortDescription`: string
  - `longDescription`: string
  - `problem`: string
  - `solution`: string
  - `architecture`: string (markdown-friendly description)
  - `stack`: string[]
  - `phase`: string (e.g., "Phase 1", "Phase 2")
  - `links`: { `label`: string; `url`: string }[]

- **TechStackCategory**
  - `id`: string
  - `name`: string (e.g., "Frontend", "Backend & API", "AI / Python")
  - `items`: { `name`: string; `badgeColor`?: string; `description`?: string }[]

- **ContactConfig**
  - `primaryEmail`: string
  - `whatsappLink`: string
  - `linkedinUrl`: string
  - `githubUrl`: string

- **ThemeConfig**
  - `accentColor`: string (hex or CSS variable reference)
  - `background`: {
    - `base`: string
    - `muted`: string
    - `card`: string
  - }
  - `text`: {
    - `primary`: string
    - `secondary`: string
  }
  - `hero`: {
    - `backgroundImage`: {
      - `desktop`: string
      - `mobile`: string
      - `fallback`: string
    - }
    - `backgroundAlt`: string
    - `backgroundSize`: string
    - `backgroundPosition`: string
    - `overlay`: {
      - `color`: string
      - `opacity`: number
      - `blur`?: boolean
    - }
  }
  - `footer`: {
    - `backgroundImage`?: string
    - `backgroundAlt`?: string
    - `backgroundSize`?: string
    - `backgroundPosition`?: string
    - `overlay`?: {
      - `color`: string
      - `opacity`: number
    }
  }

- **NavigationItem**
  - `id`: string
  - `label`: string
  - `icon`: string (icon key, mapped to an actual icon component)
  - `href`: string
  - `roles`: string[] (v1: ["public"])
  - `group`: "primary" | "secondary"

All models will be defined in `types/` using Zod, and TypeScript types will be derived from the schemas.

## 6. API Contracts (MVP – Mocked/Static)

Even though v1 uses local JSON/config data, we define API contracts to keep the system backend-agnostic and ready for future integration.

- **GET /api/profile**
  - **Response schema**: `Profile`

- **GET /api/flagship-systems**
  - **Response schema**: `{ systems: FlagshipSystem[] }`

- **GET /api/flagship-systems/:id**
  - **Params**: `id: string`
  - **Response schema**: `FlagshipSystem`

- **GET /api/tech-stack**
  - **Response schema**: `{ categories: TechStackCategory[] }`

These contracts are implemented in the frontend via a typed service layer in `lib/api/portfolio.ts`, which uses `apiClient` under `lib/api/client.ts`. All responses are validated with Zod before being returned to calling components or hooks.

## 7. Configuration & Environment Variables

### 7.1 JSON Configuration Files

- `config/theme.json`
  - Controls accent color, background colors, text hierarchy, and background imagery for hero and footer.
  - Example fields:
    - `accentColor`, `background.base`, `text.primary`, `hero.backgroundImage.desktop`, `hero.overlay.opacity`, `footer.backgroundImage`.

- `config/navigation.json`
  - Defines navigation items and basic grouping:
    - `items`: NavigationItem[]
    - Example entries: Home, Flagship Systems, Tech Stack, Contact.

- `config/features.json`
  - Enables or disables frontend sections without code changes:
    - `showGitHubAnalytics`: boolean
    - `showFuturePlatformsNote`: boolean
    - `enablePwa`: boolean (for controlling PWA setup toggling)

- `config/api-config.json`
  - Defines how the frontend talks to APIs:
    - `baseUrl`: string
    - `useMockApi`: boolean (MVP: true)

All config files are validated at app initialization using Zod schemas in `types/config.ts` via a loader module in `lib/config-loader.ts`.

### 7.2 Environment Variables (.env.example)

For v1, environment variables are minimal and focus on basic configuration and future backend readiness:

- `NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api`
- `NEXT_PUBLIC_USE_MOCK_API=true`
- `NEXT_PUBLIC_APP_NAME=Maluleke Kurhula Success – Portfolio`
- `NEXT_PUBLIC_APP_URL=http://localhost:3000`

Secrets and advanced env vars (auth, analytics, AI keys) are documented for future releases but not required for v1.

## 8. Group-Based File Organization (v1)

The project uses group-based organization with strict file-count limits per group. For the portfolio MVP:

- **Group 1 (Core)** – maximum 15 files.
- **Group 2 (v1 Features)** – maximum 10 files.
- **Groups 3+ (v2+)** – placeholders only, not implemented in v1.

### 8.1 Group 1 (Core) – up to 15 files

Core shared infrastructure, layout, and configuration:

1. `app/layout.tsx` – Root layout, theme provider, TanStack Query provider, global styles.
2. `app/page.tsx` – Home/overview page shell (composed of feature components only).
3. `components/layout/Header.tsx` – Top bar with name, navigation, and quick links.
4. `components/layout/Footer.tsx` – Footer with background image support and system info.
5. `components/layout/PageContainer.tsx` – Standard page padding/max-width wrapper.
6. `components/ui/BackgroundImage.tsx` – Configurable background wrapper for hero/footer.
7. `components/ui/Button.tsx` – shadcn-based accent-aware button component.
8. `components/ui/Card.tsx` – Base card for sections and metrics.
9. `components/ui/Badge.tsx` – Status and tag display.
10. `config/theme.json` – Visual identity configuration including accent colors and backgrounds.
11. `config/navigation.json` – Site navigation items and groups.
12. `config/features.json` – Feature flags controlling optional sections.
13. `types/config.ts` – Zod schemas and TypeScript types for all config files.
14. `lib/config-loader.ts` – Config loading and validation utilities.
15. `lib/utils/classNames.ts` – Utility helpers such as `cn` for className merging.

This keeps Group 1 within the 15-file maximum while providing a complete, reusable foundation.

### 8.2 Group 2 (v1 Features) – up to 10 files

Feature-level pages and composites for v1:

1. `app/flagship/page.tsx` – Flagship systems overview page.
2. `app/flagship/[id]/page.tsx` – Dynamic case-study page (FundsLink, Maphophe, etc.).
3. `app/tech-stack/page.tsx` – Technical stack page.
4. `app/contact/page.tsx` – Contact page.
5. `components/features/HomeHero.tsx` – Hero section for home with background image and primary CTA.
6. `components/features/WhoIAmSection.tsx` – About section using profile data.
7. `components/features/FlagshipGrid.tsx` – Grid/list of flagship systems using cards.
8. `components/features/TechStackSection.tsx` – Section summarizing tech stack categories.
9. `components/features/ContactSection.tsx` – Reusable contact CTA block.
10. `lib/api/portfolio.ts` – Typed client for profile, systems, and stack, using Zod for validation.

Group 2 is capped at 10 feature files and depends only on Group 1 for layout, UI primitives, and configuration.

### 8.3 Groups 3+ (v2+ Placeholders)

Future groups will handle blog, AI assistant, admin dashboard, and search. For MVP, these are not implemented; if any files are created for them, they will only contain:

```ts
// TODO: Implement in v2+ based on user feedback
```

and will not be referenced by Groups 1 or 2.

## 9. MVP Realism, Scope, and Success Criteria

### 9.1 MVP In-Scope (v1)

- Static/JSON-driven content for profile, flagship systems, and tech stack.
- Professional, responsive UI using Next.js, TypeScript, Tailwind, and shadcn/ui.
- Case-study depth for four flagship systems (FundsLink Academy, Maphophe Community System, KSDRILL Reserve Bank, SyncUp).
- Configuration-driven theme, navigation, and features.
- Basic PWA readiness (manifest, icons, initial config hook in Next.js).
- Basic error and loading states for data access (even if sourced locally).
- Clear contact and CTA flows for recruiters and hiring managers.

### 9.2 Explicitly Out of Scope for v1

- AI assistant or any AI-driven interaction on the portfolio.
- Content management/admin dashboard for editing content.
- Full blog engine with authoring, tagging, and feeds.
- Authentication and user accounts.
- Analytics dashboards or advanced tracking/visualization.
- Complex motion design or heavy animations beyond the defined micro-interactions.
- Multi-language support (i18n).

These items are candidates for v2+ based on feedback and demand.

### 9.3 MVP Gate Questions (Applied)

For each v1 feature, the following questions are satisfied:

1. **Does this feature validate the core hypothesis?**  
   - Yes: all in-scope v1 features directly help a recruiter or hiring manager understand your capabilities and projects.
2. **Can the user accomplish the main goal without it?**  
   - Any feature that is “nice to have” but not essential (e.g., blog, AI assistant) has been deferred to v2+.
3. **Does it add complexity disproportionate to value?**  
   - Complex features like AI interaction, admin dashboards, and search are postponed to avoid unnecessary complexity in v1.
4. **Can we measure its success?**  
   - Success is measured qualitatively by feedback from recruiters and the speed with which they can understand your profile and systems, plus simple event tracking hooks.
5. **Is there a simpler alternative?**  
   - v1 favors static content and configuration over dynamic CMS/AI systems to keep implementation simple and robust.

### 9.4 MVP Success Criteria

v1 is considered “done” when:

- A recruiter can understand who you are, what you build, and your core skills within 30–60 seconds on the **Home** page.
- A visitor can navigate to and read at least one full flagship **Case Study** within 2–3 clicks.
- All v1 pages are responsive and usable on both desktop and mobile devices.
- There are no critical UI errors in core flows (home → case study → contact).
- The system can be deployed to production (e.g., Vercel) and demonstrated to real users for feedback.

### 9.5 What v1 Explicitly Does Not Include

To prevent scope creep and preserve MVP realism, v1 deliberately excludes:

- Rich content editing interfaces or CMS integrations.
- Complex edge-case handling across all possible devices, browsers, and screen sizes (core responsive behavior is covered; long-tail edge cases are deferred).
- Advanced PWA offline strategies beyond basic manifest and installability.
- Deep analytics or dashboards; only simple event hooks are considered.
- Integration with external applicant-tracking systems (ATS) or HR tools.

These exclusions are documented so future iterations (v2+) can intentionally bring them in based on real-world feedback from recruiters and hiring managers.



# Phase 3 Report: Design System & Architecture

## What I Changed

### Project Setup
- Initialized Next.js 16.3.5 project with TypeScript and Tailwind CSS 4
- Configured project structure using App Router
- Set up Geist Sans and Geist Mono fonts from Google Fonts
- Updated package name from "portfolio-temp" to "portfolio"

### Design System Foundation
- Created comprehensive CSS custom properties in `globals.css`
- Established typography scale with responsive sizing
- Defined warm white and subtle brown color palette
- Set up spacing, border-radius, and container width tokens
- Implemented accessibility focus states and motion preferences

### Component Architecture
- Created reusable UI components in `src/components/`
- Established TypeScript type definitions in `src/types/`
- Built base page structure for all routes
- Implemented navigation and footer components

### Page Structure
- Created placeholder pages for all required routes
- Set up dynamic routing for project case studies
- Implemented consistent layout across all pages

---

## Design Tokens Established

### Color Palette (Warm White & Subtle Brown)
```css
--color-white: #faf9f7              /* Main background */
--color-white-soft: #f5f3f0        /* Secondary background */
--color-brown-50: #e8e4df          /* Lightest brown */
--color-brown-100: #d4cfc7         /* Very light brown */
--color-brown-200: #b8b0a5         /* Light brown */
--color-brown-300: #9a8f80         /* Medium-light brown */
--color-brown-400: #7c6e5c         /* Medium brown */
--color-brown-500: #5e4d3a         /* Medium-dark brown */
--color-brown-600: #4a3c2c         /* Dark brown (accent) */
--color-brown-700: #3a2e22         /* Very dark brown */
--color-brown-800: #2a2119         /* Nearly black brown */
--color-brown-900: #1a1610         /* Darkest brown (foreground) */
```

### Semantic Colors
```css
--color-background: var(--color-white)
--color-foreground: var(--color-brown-900)
--color-muted: var(--color-brown-500)
--color-muted-foreground: var(--color-brown-400)
--color-border: var(--color-brown-200)
--color-border-light: var(--color-brown-100)
--color-accent: var(--color-brown-600)
--color-accent-hover: var(--color-brown-700)
```

### Typography Scale
- **Display XL**: 2.5rem-4rem (clamp), weight 500, tight tracking
- **Display LG**: 2rem-3rem (clamp), weight 500
- **Display MD**: 1.5rem-2.25rem (clamp), weight 500
- **Heading XL**: 1.5rem, weight 500
- **Heading LG**: 1.25rem, weight 500
- **Heading MD**: 1.125rem, weight 500
- **Body LG**: 1.125rem, line-height 1.6
- **Body MD**: 1rem, line-height 1.6
- **Body SM**: 0.875rem, line-height 1.5
- **Label**: 0.75rem, uppercase, letter-spacing 0.05em, weight 600

### Spacing Tokens
```css
--space-xs: 0.25rem
--space-sm: 0.5rem
--space-md: 1rem
--space-lg: 1.5rem
--space-xl: 2rem
--space-2xl: 3rem
--space-3xl: 4rem
--space-4xl: 6rem
```

### Border Radius Rules
```css
--radius-sm: 2px      /* Small elements */
--radius-md: 4px      /* Default elements */
--radius-lg: 6px      /* Larger elements */
--radius-full: 9999px /* Pills, circles */
```

### Container Widths
```css
--container-sm: 640px   /* Small content */
--container-md: 768px   /* Medium content */
--container-lg: 1024px  /* Large content (default) */
--container-xl: 1280px  /* Extra large */
--container-2xl: 1536px /* Maximum width */
```

### Responsive Breakpoints
- Using Tailwind default breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile-first approach with responsive utilities

### Button/Link States
- **Primary**: Solid accent color, white text, hover darkens accent
- **Secondary**: Transparent with border, hover background
- **Ghost**: Transparent, hover background
- **Inline**: Text with underline, hover color change
- All variants include focus-visible ring states for accessibility

### Navigation Behaviour
- Fixed header with border bottom
- Horizontal navigation with 6 items: SG | Work | Experience | About | Contact | Resume ↗
- Active state highlighting with accent color
- External links (Resume) open in new tab
- Uses Next.js Link component for internal routing
- Client-side navigation with usePathname hook

---

## Component Architecture

### Core Components (`src/components/`)
1. **Button** - Reusable button with variants (primary, secondary, ghost) and sizes
2. **CustomLink** - Reusable link component with variants and external handling
3. **Navigation** - Main site navigation with active state detection
4. **ProjectCard** - Project entry card for work index
5. **CaseStudy** - Full case study display component
6. **Container** - Responsive container component
7. **Footer** - Site footer with copyright and social links

### Type Definitions (`src/types/`)
1. **Project** - Project entry structure (id, title, description, tags, status, slug)
2. **CaseStudy** - Case study structure (title, subtitle, overview, role, timeline, technologies, sections)
3. **CaseStudySection** - Individual case study section (title, content, type)
4. **Experience** - Experience entry structure (id, title, organization, period, description, type)

### Page Structure (`src/app/`)
- **layout.tsx** - Root layout with Navigation and Footer
- **page.tsx** - Home page with all sections (Hero, Selected Work, Experience, About, Capabilities, Contact)
- **work/page.tsx** - Work index page
- **work/[slug]/page.tsx** - Individual project case study pages
- **experience/page.tsx** - Experience page
- **about/page.tsx** - About page
- **contact/page.tsx** - Contact page

---

## Assumptions Made

### Technical Decisions
1. **Next.js App Router**: Chosen for modern React features and file-based routing
2. **Tailwind CSS 4**: Latest version for improved performance and modern CSS features
3. **Geist Fonts**: Default Next.js fonts for clean, modern typography
4. **TypeScript**: For type safety and better developer experience
5. **Client Components**: Navigation uses 'use client' for pathname detection
6. **CSS Custom Properties**: For design token management and theme consistency
7. **Mobile-First**: Responsive design approach starting from mobile breakpoints

### Design Decisions
1. **Max-width 2xl (1536px)**: Chosen as main container width for readability
2. **Border-radius 2-6px**: Subtle rounding for professional appearance
3. **Font weight 500**: Medium weight for headings for elegance without boldness
4. **Line-height 1.6**: Comfortable reading spacing for body text
5. **Smooth scroll**: For better navigation experience
6. **200ms transitions**: Subtle, fast transitions for interactive elements

### Content Structure
1. **Single-page home**: All sections on home page for comprehensive overview
2. **Separate work pages**: Dedicated work index and individual project pages
3. **Placeholder content**: All pages currently have placeholder text awaiting Phase 6
4. **No dark mode**: Focused on single warm white theme per brand direction

---

## Decisions Requiring Approval

### 1. CSS @theme Rule Warning
**Issue**: CSS linter shows "Unknown at rule @theme" warning in globals.css line 56
**Reason**: This is Tailwind CSS 4's new @theme syntax for inline theme configuration
**Impact**: No functional impact - this is expected behavior for Tailwind CSS 4
**Decision Needed**: Accept this warning as expected, or investigate alternative approach

### 2. Navigation Item "SG"
**Current**: First navigation item is "SG" (presumably for Singapore/home)
**Question**: Should this be "Home" instead, or keep "SG" as specified?
**Alternative**: Could be "Seth" or removed entirely if home is implicit

### 3. Resume Link Behavior
**Current**: "Resume ↗" links to `/resume` route with external behavior
**Question**: Should this link to an actual PDF file, external resume service, or keep as internal route?
**Decision Needed**: Specify actual resume link destination

### 4. Container Width Strategy
**Current**: Main content uses max-w-2xl (1536px) for consistency
**Question**: Is this width appropriate for all content types, or should case studies use wider containers?
**Alternative**: Case studies currently use max-w-4xl in component

### 5. Project Status Labels
**Current**: Active, Archived, In Development
**Question**: Are these the correct status labels for the projects?
**Alternative**: Could add "Launched", "Prototype", "Concept" etc.

### 6. Footer Social Links
**Current**: Placeholder email, LinkedIn, and GitHub links
**Question**: Should these be actual links, or removed until social profiles are confirmed?
**Decision Needed**: Provide actual social profile URLs or remove placeholders

### 7. Typography Scale
**Current**: Display text uses clamp() for responsive sizing
**Question**: Is the current font size range appropriate, or should it be adjusted?
**Alternative**: Could use fixed breakpoints instead of fluid scaling

---

## Accessibility Rules Implemented

1. **Focus States**: All interactive elements have visible focus states (2px accent ring)
2. **Semantic HTML**: Proper use of nav, header, main, footer, article, section elements
3. **ARIA Labels**: Navigation has proper aria-label for screen readers
4. **Color Contrast**: Brown palette chosen for sufficient contrast ratios
5. **Reduced Motion**: Media query respects prefers-reduced-motion preferences
6. **Keyboard Navigation**: All links and buttons are keyboard accessible
7. **Skip Links**: Not yet implemented - can be added if needed
8. **Alt Text**: Image components will require alt text (placeholder images not yet added)

---

## Motion Rules Implemented

1. **Subtle Transitions**: 200ms duration for color and background transitions
2. **Purposeful Motion**: Only functional transitions (hover, focus) - no decorative animations
3. **Reduced Motion Support**: All animations disabled via prefers-reduced-motion
4. **Smooth Scroll**: Enabled for anchor navigation (respects reduced motion preference)
5. **No Decorative Effects**: Explicitly avoided per requirements (no glows, blobs, sparkles)

---

## Next Steps (Phase 4)

Upon approval of Phase 3, the project is ready for:

1. **Content Integration**: Replace placeholder text with actual portfolio content
2. **Project Data**: Create actual project entries with real information
3. **Experience Data**: Add real experience entries
4. **Image Assets**: Add placeholder images (no fake screenshots per requirements)
5. **Form Implementation**: Build contact form functionality
6. **Resume Integration**: Add actual resume link/PDF
7. **Testing**: Verify all routes and components function correctly

---

## Technical Notes

### Known Issues
- CSS @theme rule warning (expected for Tailwind CSS 4)
- Placeholder content throughout (awaiting Phase 6)
- No actual data fetching implemented yet
- Social links are placeholders

### Dependencies
- next: 16.3.5
- react: 19.2.8
- react-dom: 19.2.8
- tailwindcss: ^4
- typescript: ^5

### File Structure
```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── work/
│   │   │   └── [slug]/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Link.tsx
│   │   ├── Navigation.tsx
│   │   └── ProjectCard.tsx
│   └── types/
│       └── index.ts
├── package.json
└── PHASE_3_REPORT.md
```

---

## Approval Required

Please review the above decisions and provide approval for:

1. ✅ Design token system (colors, typography, spacing, etc.)
2. ✅ Component architecture and structure
3. ✅ Page structure and routing
4. ✅ Accessibility and motion rules
5. ❓ CSS @theme warning acceptance
6. ❓ Navigation "SG" label confirmation
7. ❓ Resume link destination
8. ❓ Container width strategy
9. ❓ Project status labels
10. ❓ Footer social links

Once approved, the project will proceed to Phase 4 (Content Integration) or Phase 5 (Visual Polish) as directed.

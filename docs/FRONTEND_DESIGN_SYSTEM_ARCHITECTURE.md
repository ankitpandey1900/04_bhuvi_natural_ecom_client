# Bhuvi Naturals – Frontend Design System and Architecture

Date: 2026-07-09

Status: Draft for Frontend Engineering Alignment

## 1. Design Intent

The frontend experience for Bhuvi Naturals must feel premium, intentional, calm, and highly crafted. It should not resemble a generic ecommerce template. Instead, it should feel like a refined digital environment for a premium natural beauty brand: informative, elegant, scientific, trustworthy, and fast.

The architecture below is intended to support:

- a premium storefront experience,
- SEO-heavy content and commerce pages,
- highly reusable UI primitives,
- robust accessibility,
- strong performance,
- scalable growth across marketing, product, cart, checkout, and admin workflows.

---

# 2. Frontend Strategy

## 2.1 Product Experience Goals

The frontend should prioritize:

- trust before conversion,
- clarity before persuasion,
- calm interaction over flashy motion,
- editorial depth over dense commerce UI,
- speed and confidence in checkout.

## 2.2 Design Language Direction

The brand language should feel:

- premium and understated,
- organic and botanical,
- modern and precise,
- scientific and transparent,
- luxurious without being opulent.

The visual system should avoid:

- template-like layouts,
- generic SaaS styling,
- overly bright gradients,
- glassmorphism,
- decorative motion.

---

# 3. Technical Stack Foundation

## 3.1 Core Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Shadcn UI
- Framer Motion
- Lucide Icons
- React Hook Form
- Zod
- TanStack Query
- Prisma
- Better Auth
- Cloudinary
- Razorpay
- Resend

## 3.2 Engineering Principles

- Use server-first rendering where SEO and performance matter.
- Keep UI components presentational and composable.
- Separate feature logic from shared UI primitives.
- Use strict TypeScript and shared domain types.
- Treat design tokens as the single source of truth.
- Design for accessibility from the start.
- Favor progressive enhancement over heavy client-side complexity.

---

# 4. Design System Foundation

## 4.1 Color Tokens

The color system should be rooted in a warm, natural, premium palette. The system should support both light and dark themes, but the primary experience should be light and editorial.

### Core Semantic Color Roles

- background.default
- background.elevated
- background.subtle
- surface.default
- surface.elevated
- surface.strong
- text.primary
- text.secondary
- text.muted
- text.inverse
- border.default
- border.strong
- accent.primary
- accent.secondary
- accent.tertiary
- success.default
- success.subtle
- warning.default
- warning.subtle
- error.default
- error.subtle
- info.default
- info.subtle

### Suggested Palette Direction

- Background: warm ivory, soft stone, bone white
- Text: dark charcoal, deep espresso, muted olive
- Accent: botanical green, moss, rich olive, muted sage
- Highlight: soft amber, warm gold, muted copper
- Support: sky, mineral blue, clay for specific moments only

### Color Usage Rules

- Accent color should be used sparingly and with intent.
- Large surface areas should remain calm and neutral.
- High-contrast text should always be preserved.
- Product emphasis should rely more on typography and composition than color saturation.

## 4.2 Semantic Colors

Semantic color tokens should map to purpose rather than raw hue:

- color.success.bg
- color.success.text
- color.warning.bg
- color.warning.text
- color.error.bg
- color.error.text
- color.info.bg
- color.info.text
- color.accent.bg
- color.accent.text

## 4.3 Typography Scale

Typography should feel editorial and premium while remaining highly legible.

### Recommended Scale

- display: 56/64
- h1: 40/48
- h2: 32/40
- h3: 24/32
- h4: 20/28
- h5: 16/24
- body-lg: 18/28
- body-md: 16/24
- body-sm: 14/20
- caption: 12/16
- micro: 11/14

### Typography Principles

- Headings should feel calm and confident.
- Body text should be easy to scan.
- Product copy should be informative rather than decorative.
- Serif or editorial pairing may be used selectively for hero or editorial moments, but the system should remain highly readable in product and commerce contexts.

## 4.4 Spacing Scale

Use an 8-point spacing system.

Suggested spacing tokens:

- 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

## 4.5 Border Radius System

The system should favor soft yet disciplined curves.

Suggested tokens:

- radius.none: 0
- radius.sm: 6px
- radius.md: 10px
- radius.lg: 14px
- radius.xl: 20px
- radius.full: 999px

## 4.6 Elevation System

The system should be subtle and architectural rather than heavy.

Suggested elevation levels:

- elevation.0: none
- elevation.1: subtle surface lift
- elevation.2: interactive card elevation
- elevation.3: drawer or modal surface
- elevation.4: prominent overlay or sticky panel

## 4.7 Shadow Tokens

Shadows should be restrained and natural.

Suggested tokens:

- shadow.sm
- shadow.md
- shadow.lg
- shadow.focus
- shadow.overlay

## 4.8 Opacity Tokens

Suggested tokens:

- opacity.disabled: 0.45
- opacity.hover: 0.85
- opacity.subtle: 0.7

## 4.9 Motion Tokens

Use motion values that support calm and precise transitions.

Suggested tokens:

- motion.fast: 120ms
- motion.base: 180ms
- motion.slow: 240ms
- motion.modal: 280ms

## 4.10 Animation Tokens

Suggested tokens:

- easing.standard: cubic-bezier(0.2, 0.8, 0.2, 1)
- easing.emphasized: cubic-bezier(0.2, 0.6, 0.2, 1)
- easing.exit: cubic-bezier(0.3, 0, 0.8, 0.2)

## 4.11 Grid System

- 12-column grid for desktop and laptop
- 8-column grid for tablet
- 4-column grid for mobile

## 4.12 Container Widths

Suggested max widths:

- container.sm: 640px
- container.md: 768px
- container.lg: 1024px
- container.xl: 1280px
- container.2xl: 1440px

## 4.13 Breakpoints

- mobile: 0–639px
- tablet: 640–1023px
- laptop: 1024–1279px
- desktop: 1280px+

## 4.14 Icon System

Icons should be clean and minimal, with a consistent stroke weight and subtle geometric quality.

Rules:

- Use Lucide Icons as the base system.
- Maintain consistency in line weight and corner treatment.
- Use icons for action and meaning, not decoration.

## 4.15 Illustration Guidelines

Illustrations should be botanical and editorial, not whimsical.

Guidelines:

- Fine line work and minimal forms
- Soft natural color palettes
- Used for educational or empty-state moments only
- Avoid overly literal or playful representations

## 4.16 Photography Guidelines

Photography should feel natural, premium, and product-led.

Guidelines:

- Crisp product detail shots
- Calm lifestyle imagery used sparingly
- Strong lighting and thoughtful composition
- Avoid overly saturated or generic stock energy

## 4.17 Empty States

Empty states should feel calm, useful, and reassuring.

Design expectations:

- simple illustration or icon,
- concise message,
- clear next action,
- no dead blank spaces.

## 4.18 Loading States

Loading states should preserve perceived performance.

Rules:

- Skeletons for content areas,
- lightweight progress for asynchronous actions,
- no flashing spinners where not necessary.

## 4.19 Error States

Error states should be specific, helpful, and non-frustrating.

Rules:

- explain what happened,
- clarify next step,
- preserve user context.

## 4.20 Success States

Success states should feel reassuring and polished.

Rules:

- show confirmation clearly,
- avoid overuse of celebratory animation,
- preserve continuity.

## 4.21 Accessibility Tokens

Accessibility tokens should support contrast and focus states.

Suggested tokens:

- focus.ring
- focus.offset
- contrast.high
- contrast.medium

## 4.22 Dark Mode Strategy

Dark mode should be supported but not treated as the primary experience.

Strategy:

- use semantic tokens rather than hard-coded colors,
- preserve brand warmth in dark mode,
- maintain contrast and readability,
- avoid harsh black backgrounds.

## 4.23 Naming Convention

Use a semantic token approach:

- color.surface.elevated
- color.text.primary
- spacing.8
- radius.card.md
- shadow.overlay

This ensures both design and engineering alignment.

---

# 5. Component Library Architecture

The design system should be organized around composable primitives, feature-level components, and page-level compositions.

## 5.1 Component Categories

### A. Primitive UI Components

These are foundational building blocks.

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Avatar
- Badge
- Chip
- Tooltip
- Toast
- Tabs
- Accordion
- Popover
- Dropdown
- Breadcrumb
- Pagination
- Separator

### B. Pattern Components

These compose primitives for more complex flows.

- Search Bar
- Command Menu
- Navbar
- Mega Menu
- Footer
- Hero
- Carousel
- Product Card
- Category Card
- Collection Card
- Review Card
- Price Component
- Rating Component
- Quantity Selector
- Product Gallery
- Sticky Add To Cart
- Cart Drawer
- Checkout Stepper
- Timeline
- Address Card
- Coupon Component
- Invoice Component
- Analytics Card
- Stat Card
- Chart Container
- Table
- Filter Sidebar
- Data Grid
- Media Uploader
- Rich Text Editor
- SEO Panel

## 5.2 Component Design Standard

Every component should define:

- Purpose
- Variants
- States
- Props
- Accessibility
- Responsive Behaviour
- Animation Behaviour
- Usage Rules
- Composition Rules

## 5.3 Button

Purpose:
Primary action trigger for product, cart, and checkout flows.

Variants:

- Primary
- Secondary
- Tertiary
- Ghost
- Destructive

States:

- default, hover, active, disabled, loading, focus

Props:

- size, variant, loading, fullWidth, iconLeft, iconRight, asChild

Accessibility:

- visible focus, proper button semantics, sufficient contrast

Responsive behaviour:

- full-width on mobile forms and critical CTAs

Animation behaviour:

- subtle scale and color transition

Usage rules:

- keep one primary CTA per major section
- avoid excessive button density

## 5.4 Input

Purpose:
Form field entry for account, checkout, search, and filters.

Variants:

- text, email, password, search, textarea

States:

- default, focus, invalid, disabled

Accessibility:

- labels, helper text, inline error states

## 5.5 Textarea

Purpose:
Long-form input for review, support, and content workflows.

## 5.6 Select

Purpose:
Choice-based forms with predictable options.

## 5.7 Checkbox and Radio

Purpose:
Selection and consent controls.

Rules:

- use clear labels and grouping
- avoid ambiguous checkbox use in product decision flows

## 5.8 Switch

Purpose:
Toggle-based preferences.

## 5.9 Avatar

Purpose:
Represent users or account identity.

## 5.10 Badge

Purpose:
Tag product status, labels, or promo state.

## 5.11 Chip

Purpose:
Compact filter or category selection.

## 5.12 Toast

Purpose:
Brief feedback on actions such as add-to-cart, saved wishlist, or order update.

States:

- success, error, info

Accessibility:

- screen-reader announcements
- dismissible behavior

## 5.13 Tooltip

Purpose:
Provide supplementary but non-essential information.

## 5.14 Dialog

Purpose:
Focused tasks such as confirmation, review submission, or support action.

## 5.15 Drawer

Purpose:
Mobile navigation, filters, cart, and mobile checkout panels.

## 5.16 Sheet

Purpose:
Large utility panels such as filter sidebars or cart summary surfaces.

## 5.17 Tabs

Purpose:
Switch between related sections such as product details, reviews, FAQs.

## 5.18 Accordion

Purpose:
Collapse and expand information such as FAQ and policy details.

## 5.19 Popover and Dropdown

Purpose:
Quick actions and contextual controls.

## 5.20 Calendar

Purpose:
Used for future scheduling or delivery expectations if needed.

## 5.21 Breadcrumb

Purpose:
Orientation and path clarity.

## 5.22 Pagination

Purpose:
On large product and blog result sets.

## 5.23 Search Bar

Purpose:
Keyword entry across storefront and admin surfaces.

Variants:

- compact header search,
- full-page search,
- admin search

## 5.24 Command Menu

Purpose:
Fast keyboard-driven navigation and search for admin or power users.

## 5.25 Navbar

Purpose:
Global top navigation.

Behavior:

- desktop: full nav with utility actions,
- mobile: compact drawer with priority links,
- sticky support for long content pages.

## 5.26 Mega Menu

Purpose:
Surface category discovery and featured collections without overwhelming the user.

Rules:

- use sparingly,
- only for core shop navigation,
- keep content curated and concise.

## 5.27 Footer

Purpose:
Secondary navigation, brand trust, and legal links.

## 5.28 Hero

Purpose:
Create the first impression and lead users toward key actions.

Variants:

- editorial hero,
- product-led hero,
- campaign hero,
- trust-led hero.

## 5.29 Carousel

Purpose:
Present collections or testimonials in a controlled way.

Rules:

- limited use,
- smooth motion,
- accessible controls,
- no autoplay by default unless clearly useful.

## 5.30 Product Card

Purpose:
Summarize products in collection and category pages.

Variants:

- standard,
- featured,
- compact,
- editorial.

States:

- default, hover, selected, out-of-stock, loading.

## 5.31 Category Card

Purpose:
Guide browsing by concern, category, or ritual.

## 5.32 Collection Card

Purpose:
Promote seasonal or curated merchandise groupings.

## 5.33 Review Card

Purpose:
Show product proof and social validation.

## 5.34 Price Component

Purpose:
Present pricing with clarity.

Variants:

- current price,
- compare-at price,
- sale pricing.

## 5.35 Rating Component

Purpose:
Display review averages clearly.

## 5.36 Quantity Selector

Purpose:
Support increasing or decreasing cart quantities.

## 5.37 Product Gallery

Purpose:
Present product images and media clearly.

Variants:

- thumbnail strip,
- full-screen gallery,
- mobile swipe gallery.

## 5.38 Sticky Add To Cart

Purpose:
Support conversion on long product pages.

Rules:

- visible only when necessary,
- not intrusive,
- preserve product context.

## 5.39 Cart Drawer

Purpose:
Show cart state quickly without leaving the current page.

## 5.40 Checkout Stepper

Purpose:
Guide users through multi-step checkout.

## 5.41 Timeline

Purpose:
Illustrate order progress or support case progress.

## 5.42 Address Card

Purpose:
Represent saved delivery or billing locations.

## 5.43 Coupon Component

Purpose:
Present discounts and promotional offers.

## 5.44 Invoice Component

Purpose:
Support post-purchase order confirmation and order detail presentation.

## 5.45 Analytics Card

Purpose:
Display metrics in admin dashboards.

## 5.46 Stat Card

Purpose:
Display summary metrics with strong hierarchy.

## 5.47 Chart Container

Purpose:
Wrap analytics visualizations in a consistent frame.

## 5.48 Table

Purpose:
Show structured admin or order data.

## 5.49 Filter Sidebar

Purpose:
Let users narrow results by concern, ingredient, or price.

## 5.50 Data Grid

Purpose:
Provide structured, editable management interfaces for admin workflows.

## 5.51 Media Uploader

Purpose:
Upload and manage product or content assets.

## 5.52 Rich Text Editor

Purpose:
Allow content editing for product descriptions, blog posts, and CMS content.

## 5.53 SEO Panel

Purpose:
Display and edit metadata for content and products.

---

# 6. Shadcn UI Customization Strategy

Shadcn UI should be used as the foundation for accessible, composable primitives, but the visual language must be heavily customized.

## 6.1 Customization Goals

- avoid default Tailwind or neutral SaaS appearance,
- preserve the premium, editorial brand language,
- create a consistent system across storefront, admin, and marketing surfaces,
- ensure that the component library remains composable and production-safe.

## 6.2 Extension Strategy

- Extend shadcn components with custom variants and data attributes.
- Re-theme primitives using design tokens rather than ad-hoc overrides.
- Build brand-specific wrappers around shared primitives when needed.

## 6.3 Customization Rules

- keep base behavior accessible and consistent,
- tailor visual tone using semantic tokens,
- preserve component flexibility for different contexts.

---

# 7. Framer Motion System

The motion system should be calm, purposeful, and performance-aware.

## 7.1 Motion Principles

- animate to communicate state, intent, and continuity,
- never animate for decoration,
- favor subtle transitions over dramatic effects,
- respect reduced motion preferences.

## 7.2 Motion Domains

### Page Transitions

- route transition between major views,
- subtle fade or cross-fade,
- no overly cinematic effect.

### Hero Animation

- scroll reveal or staged entry,
- support brand storytelling without distraction.

### Section Reveal

- reveal product and content sections as they enter view.

### Image Reveal

- fade or blur-up for key product images.

### Product Hover

- slight lift or shadow shift,
- minimal and controlled.

### Card Hover

- subtle elevation and surface shift.

### Button Feedback

- press feedback and loading states.

### Navigation Animation

- drawer and dropdown motion only.

### Cart Animation

- brief feedback when adding to cart,
- success confirmation with no excessive movement.

### Drawer Animation

- smooth slide-in and slide-out,
- low friction.

### Checkout Animation

- progress transitions and step change,
- calm and clear.

### Loading Animation

- skeleton fade and subtle pulse.

### Skeleton Animation

- soft shimmer or opacity pulse only.

### Search Animation

- results reveal and focus transitions.

### Modal Animation

- simple fade and scale-up.

### Micro Interactions

- hover, focus, selection, success, loading.

### Success Animation

- subtle checkmark or state change feedback.

### Hover Physics

- minimal spring and damping values.

### Scroll Behaviour

- section reveal and sticky transitions only.

### Parallax

- used minimally and only for editorial storytelling.

### Gesture Animation

- swipe and drag for mobile image galleries and drawers.

## 7.3 Timing and Spring Configuration

Suggested values:

- spring.snappy: stiffness 300, damping 30
- spring.soft: stiffness 220, damping 24
- spring.smooth: stiffness 180, damping 22

## 7.4 Reduced Motion Support

All animations must support reduced-motion preferences via the user’s browser or OS setting.

---

# 8. Frontend Architecture

## 8.1 Component Hierarchy

The frontend should follow a clear hierarchy:

1. App shell
2. Page layouts
3. Feature sections
4. Business components
5. Shared primitives

## 8.2 Folder Structure

```text
src/
  app/
    (marketing)/
    (shop)/
    (auth)/
    admin/
  components/
    ui/
    patterns/
    features/
    layouts/
    forms/
  lib/
    auth/
    db/
    payments/
    seo/
    analytics/
    utils/
  server/
    actions/
    services/
    repositories/
    jobs/
  modules/
    catalog/
    cart/
    checkout/
    orders/
    inventory/
    payments/
    auth/
    content/
    notifications/
    customers/
  hooks/
  providers/
  constants/
  types/
  services/
  styles/
  tests/
```

## 8.3 Feature-Based Architecture

- catalog features handle product listing and product detail flows,
- cart and checkout are isolated domain modules,
- admin workflows are grouped by operational concern,
- shared primitives remain generic and reusable.

## 8.4 Shared Components

Shared components should be purely presentational and reusable across multiple routes.

## 8.5 UI Components

UI components include primitives and patterns used across the site such as headers, cards, drawers, forms, and accordions.

## 8.6 Business Components

Business components contain domain logic and are tied to commerce and commerce-adjacent flows such as product cards, cart items, order timeline, and checkout steps.

## 8.7 Layouts

Layouts should be reusable and route-aware.

Suggested layout regions:

- marketing layout,
- shop layout,
- auth layout,
- admin layout,
- content layout.

## 8.8 Providers

Providers should include:

- theme provider,
- auth provider,
- query client provider,
- toast provider,
- analytics provider,
- motion provider.

## 8.9 Hooks

Hooks should encapsulate reusable behavior such as:

- cart access,
- viewport behavior,
- modal state,
- search state,
- media queries,
- form handling.

## 8.10 Utilities

Utilities should include:

- formatting,
- currencies,
- date helpers,
- string helpers,
- URL helpers,
- validation helpers,
- SEO helpers.

## 8.11 Constants

Constants should cover:

- route paths,
- status values,
- form options,
- navigation items,
- UI copy variants.

## 8.12 Types

Shared domain types should cover:

- product,
- variant,
- cart,
- order,
- payment,
- inventory,
- review,
- content,
- auth.

## 8.13 Services

Separation of concerns should be maintained through service modules for:

- payment,
- analytics,
- notifications,
- storage,
- search,
- shipping,
- content.

## 8.14 API Layer

The frontend should use a structured API layer for:

- public storefront data,
- authenticated account flows,
- admin operations,
- payment callbacks,
- webhooks.

Best practices:

- type-safe request/response contracts,
- centralized error handling,
- consistent response mapping,
- no direct fetch logic spread across components.

## 8.15 SEO Layer

The frontend should use a centralized SEO layer with:

- route-based metadata,
- product and category metadata handling,
- canonical URL management,
- OpenGraph and Twitter card support,
- schema generation.

## 8.16 Animation Layer

Motion patterns should be centralized and composable rather than embedded in individual components.

## 8.17 Theme Layer

The theme system should be token-driven and support light and dark mode through semantic tokens.

## 8.18 Design Tokens

Design tokens should be the authority for:

- color,
- spacing,
- typography,
- radius,
- elevation,
- motion,
- opacity.

---

# 9. State Management Strategy

## 9.1 React State

Use local component state for:

- form input,
- transient UI state,
- modal visibility,
- accordion expansion.

## 9.2 Context

Use context sparingly for:

- theme,
- auth/session,
- cart shell state,
- locale or global preferences,
- layout-related state.

## 9.3 Server Components

Use server components for:

- marketing pages,
- content pages,
- product and category page templates,
- SEO-heavy pages.

## 9.4 Client Components

Use client components for:

- cart interactions,
- checkout flows,
- form submission,
- live search,
- authentication UI,
- admin management tools.

## 9.5 TanStack Query

Use TanStack Query for:

- product listing and detail data,
- cart and account data,
- reviews,
- content and blog queries,
- admin dashboards.

## 9.6 Optimistic Updates

Use optimistic updates for:

- adding to cart,
- wishlist actions,
- quantity changes,
- review submission,
- quick admin actions where appropriate.

## 9.7 Server Actions

Use server actions for:

- submit checkout data,
- update product or content forms,
- admin mutations,
- auth flows.

## 9.8 Caching

Caching should be layered:

- route-level caching for public pages,
- query caching for catalog and content reads,
- client-side cache for repeated requests,
- no cache for sensitive or time-sensitive operations.

---

# 10. Responsive Design System

## 10.1 Desktop

- wide editorial layouts,
- multi-column product and content structures,
- strong visual hierarchy,
- large product media support.

## 10.2 Laptop

- similar to desktop but slightly tighter spacing,
- maintain premium whitespace and clarity.

## 10.3 Tablet

- use two-column layouts where useful,
- filters collapse to drawer or sheet,
- sticky purchase actions remain available.

## 10.4 Large Mobile

- compact but still editorial,
- preserve core product information above the fold.

## 10.5 Mobile

- stack content vertically,
- use sticky bottom CTA patterns where appropriate,
- simplify forms and reduce unnecessary content.

## 10.6 Small Mobile

- prioritize one primary action per screen,
- use compact search and navigation,
- reduce visual clutter aggressively.

## 10.7 Responsive Component Adaptation

### Navigation Changes

- desktop: top navigation and utility actions,
- mobile: drawer with priority links.

### Checkout Adaptation

- desktop: side summary with progress,
- mobile: step-based streamlined flow with sticky summary.

### Admin Dashboard Adaptation

- desktop: multi-panel layout,
- tablet/mobile: simplified dashboards and stacked cards.

---

# 11. Performance Architecture

## 11.1 Image Optimization

- use Cloudinary for asset delivery,
- use responsive image variants,
- lazy-load below-the-fold media,
- preserve image aspect ratio and avoid layout shift.

## 11.2 Dynamic Imports

Use dynamic imports for:

- admin dashboards,
- large analytics views,
- heavy editor components,
- complex media uploader features.

## 11.3 Route Splitting

Routes should be split by experience type:

- marketing,
- storefront,
- account,
- checkout,
- admin.

## 11.4 Code Splitting

Split by feature and route to keep initial load lean.

## 11.5 Lazy Loading

- lazy-load product gallery media,
- lazy-load blog content sections,
- lazy-load admin charting modules.

## 11.6 Font Optimization

- use a limited font set,
- self-host fonts where possible,
- avoid font overload.

## 11.7 Animation Optimization

- use transforms and opacity for motion,
- avoid layout thrashing,
- keep animation short and purposeful.

## 11.8 Bundle Optimization

- keep shared libraries centralized,
- avoid over-bundling unused UI patterns,
- use selective imports.

## 11.9 Rendering Strategy

- use server rendering for SEO-critical pages,
- use client rendering for interactive flows,
- avoid unnecessary hydration where server components can cover content.

## 11.10 Core Web Vitals

Targets should include:

- LCP under 2.5s on good networks for key storefront pages,
- INP under 200ms for interactive flows,
- CLS below 0.1.

---

# 12. Accessibility Architecture

## 12.1 WCAG 2.2 AA

The experience must meet WCAG 2.2 AA minimum requirements.

## 12.2 Keyboard Navigation

- all interactive controls must be keyboard reachable,
- focus order should align with visual hierarchy,
- no keyboard traps in drawers or dialogs.

## 12.3 ARIA

Use ARIA attributes when needed, especially for:

- dialogs,
- drawers,
- tabs,
- dropdowns,
- toast announcements.

## 12.4 Screen Reader Support

- semantic headings,
- form labels,
- list semantics,
- landmark regions,
- descriptive link text,
- live regions for async updates.

## 12.5 Focus Management

- visible focus rings,
- focused elements should be clearly identified,
- focus should move predictably in modals and drawers.

## 12.6 Reduced Motion

Respect reduced-motion settings and disable non-essential movement.

## 12.7 Contrast

- maintain strong contrast for text and controls,
- do not rely solely on color to indicate status.

## 12.8 Touch Targets

- minimum target size should support thumb-friendly interaction,
- checkout and cart actions should be easy to tap.

---

# 13. Design System Delivery Model

## 13.1 Token Layer

The foundation for all styling decisions.

## 13.2 Primitive Layer

Atoms and simple building blocks.

## 13.3 Pattern Layer

Reusable combinations of primitives.

## 13.4 Feature Layer

Domain-specific components such as product cards, checkout steps, and cart drawers.

## 13.5 Page Layer

Route-level compositions that are assembled from patterns and features.

This layered architecture ensures scalability and maintainability.

---

# 14. Implementation Notes for Engineering Teams

## 14.1 Guidelines for Implementation

- Build components from design tokens, not hard-coded values.
- Create high-quality variants rather than many one-off components.
- Use composition over inheritance.
- Keep business logic out of shared UI components.
- Keep the admin and storefront systems visually aligned but functionally distinct.

## 14.2 Recommended Engineering Patterns

- use server components for content-heavy and SEO-critical pages,
- use client components for interactive stateful experiences,
- keep forms type-safe with React Hook Form and Zod,
- use TanStack Query for server state,
- use Framer Motion only where it meaningfully improves the experience.

---

# 15. Final Architectural Summary

The Bhuvi Naturals frontend should be implemented as a premium, modular, performance-first design system built on Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion. The system should feel editorial, trustworthy, and crafted rather than template-based. The architecture is meant to support long-term growth across content, commerce, analytics, and operational workflows while preserving a distinctive visual voice.

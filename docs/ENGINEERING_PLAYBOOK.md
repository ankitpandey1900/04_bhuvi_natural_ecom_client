# Bhuvi Naturals – Engineering Playbook

Date: 2026-07-09

Status: Draft for Engineering Governance

Purpose:
This document is the single source of truth for engineering execution across the Bhuvi Naturals platform. It defines the standards, principles, rules, and quality gates that every human developer and AI coding assistant must follow throughout implementation.

This playbook is intended to keep the system consistent even when many engineers and assistants work in parallel.

---

# SECTION 1 — Engineering Philosophy

## 1.1 Project Principles

### Principle 1 — Build for trust and reliability

The platform is a commerce product. Reliability, correctness, and clarity matter more than novelty.

### Principle 2 — Design for scale from day one

The architecture must support incremental growth without requiring a rewrite.

### Principle 3 — Favor clarity over cleverness

Simple, readable, well-structured solutions are preferred over clever abstractions.

### Principle 4 — Keep business logic explicit

Business rules should live in services and domain logic, not in UI components or route handlers.

### Principle 5 — Make quality a default

Testing, typing, accessibility, performance, security, documentation, and observability are mandatory parts of delivery.

## 1.2 Coding Philosophy

- Write code that is easy to understand by another engineer.
- Prefer small, composable modules over large monolith-like files.
- Make intent obvious through naming, structure, and boundaries.
- Resolve problems at the correct layer rather than pushing them to the UI.

## 1.3 Design Philosophy

- Preserve the approved design system and motion language.
- Reuse existing patterns instead of introducing new ones.
- Prioritize consistency, clarity, and accessibility over visual novelty.

## 1.4 Scalability Philosophy

- Build stateless and modular systems where possible.
- Reduce coupling between product, content, payments, and admin workflows.
- Choose patterns that can scale with higher traffic and more contributors.

## 1.5 Performance Philosophy

- Optimize for real user experience.
- Prefer server-rendered and statically generated content for public pages.
- Delay and split what is not needed immediately.

## 1.6 Maintainability Philosophy

- Keep contracts explicit.
- Reduce duplication.
- Document the intent behind important decisions.
- Make changes incremental and reversible.

---

# SECTION 2 — Project Rules

## Rule 1 — Never duplicate logic

If a business rule, calculation, validation, or transformation exists somewhere else, reuse it.

Why:

- prevents divergence,
- reduces bugs,
- makes maintenance simpler.

## Rule 2 — Never duplicate UI

If a UI pattern already exists, reuse it.

Why:

- keeps the product cohesive,
- reduces visual inconsistency,
- simplifies updates.

## Rule 3 — Always use reusable components

New UI should be composed from existing primitives and feature-level components whenever possible.

Why:

- improves consistency,
- reduces maintenance effort,
- preserves the design system.

## Rule 4 — Prefer composition over inheritance

Build interfaces through composition of smaller, focused units.

Why:

- makes systems easier to reason about,
- avoids brittle inheritance hierarchies.

## Rule 5 — Keep business logic outside components

Components should render and delegate. Complex behavioral logic belongs in services, hooks, or domain modules.

Why:

- improves testability,
- keeps components simple,
- supports reuse.

## Rule 6 — Server first

Prefer server-rendered and server-driven solutions for public, SEO-sensitive, and data-heavy pages.

Why:

- better performance,
- better SEO,
- reduced client-side complexity.

## Rule 7 — Client only when necessary

Client-side interactivity should be introduced only where required for rich behavior such as checkout, cart, forms, admin workflows, or real-time interactions.

Why:

- avoids unnecessary JS,
- improves performance,
- simplifies architecture.

## Rule 8 — Accessibility first

Every user-facing feature must work with keyboard, screen readers, reduced motion, and varied input methods.

Why:

- required for product quality,
- improves usability,
- avoids regressions.

## Rule 9 — SEO first

Public pages must be optimized for metadata, crawlability, rendering strategy, and content discoverability.

Why:

- commerce depends on discoverability,
- search traffic is a key growth channel.

## Rule 10 — Performance first

Performance is a feature. Teams must measure and optimize loading, rendering, asset delivery, and API behavior.

Why:

- directly impacts conversion and user satisfaction.

## Rule 11 — Type safety everywhere

All application code must use TypeScript types and shared contracts.

Why:

- reduces runtime errors,
- improves refactoring safety,
- improves developer confidence.

## Rule 12 — No silent failures

Errors must be handled explicitly and surfaced to the user or system appropriately.

Why:

- avoids hidden breakage,
- improves debugging.

## Rule 13 — No secrets in code

Secrets must come from secure environment management and never be committed.

Why:

- prevents credential leakage,
- improves security posture.

## Rule 14 — Prefer managed systems over custom infrastructure

Use managed services for auth, storage, email, payments, analytics, and deployment unless there is a strong reason not to.

Why:

- faster time to value,
- lower operational burden.

## Rule 15 — Make every change observable

Features should emit logs, traces, metrics, or audit events where appropriate.

Why:

- improves incident response,
- enables accountability.

---

# SECTION 3 — Next.js Standards

## 3.1 Routing

- Use the App Router structure consistently.
- Keep route groups and layout boundaries clear.
- Avoid route-level logic that belongs in shared services.

## 3.2 Layouts

- Shared layouts should be placed in the appropriate app-level layout hierarchy.
- Layouts must not contain business logic that belongs in services.

## 3.3 Server Components

- Default to server components for public content and SEO-sensitive pages.
- Server components should remain focused on data preparation and rendering.

## 3.4 Client Components

- Use client components only when interactivity is required.
- Keep them small and focused.
- Avoid making full pages client components when a server-driven approach is sufficient.

## 3.5 Server Actions

- Use server actions for safe mutations tied to forms and admin workflows.
- Validate inputs before action execution.
- Ensure actions are protected by authentication and authorization.

## 3.6 Loading.tsx

- Always include meaningful loading states for route segments where loading is expected.
- Loading states should remain lightweight and aligned with the design system.

## 3.7 Error.tsx

- Implement route-level error boundaries for user-friendly failure states.
- Error boundaries should not hide the underlying issue.

## 3.8 NotFound.tsx

- Use not found states for missing products, pages, categories, and resources.
- Keep this consistent across the platform.

## 3.9 Metadata

- Use metadata APIs for titles, descriptions, canonical values, and social previews.
- Metadata must be generated from shared SEO logic instead of hardcoded per page.

## 3.10 Streaming

- Use streaming for large or slower-loading content paths where appropriate.
- Keep the experience progressive and resilient.

## 3.11 ISR

- Use ISR for content that changes infrequently but benefits from freshness.

## 3.12 SSR

- Use SSR for pages that depend on request-time data and must remain current.

## 3.13 Caching

- Cache static and semi-static content intentionally.
- Avoid caching personalized or sensitive data by default.

## 3.14 Dynamic Rendering

- Use dynamic rendering when request-specific data or user state must be considered.

---

# SECTION 4 — React Standards

## 4.1 Hooks

- Hooks should be focused and reusable.
- Do not place unrelated logic inside a single hook.
- Prefer hooks that encapsulate behavior rather than UI rendering details.

## 4.2 Context

- Use context sparingly for shared app-wide concerns.
- Avoid overusing context for data that could be passed through props or server data.

## 4.3 Composition

- Favor component composition over large conditional components.
- Build interfaces from smaller parts.

## 4.3 Memoization

- Memoize only when it offers a clear benefit.
- Avoid premature optimization.

## 4.4 Rendering

- Keep rendering logic deterministic.
- Avoid side effects during render.

## 4.5 Effects

- Keep effects minimal and focused.
- Prefer event-driven logic over effects where possible.

## 4.6 State Management

- Keep local state local.
- Use server state where appropriate and client state only when necessary.
- Use shared state only when it is genuinely shared across the tree.

## 4.7 Event Handling

- Keep event handlers small and readable.
- Extract complex logic into functions.

## 4.8 Naming Convention

- Components use PascalCase.
- Hooks use the use\* pattern.
- Functions and variables use camelCase.
- Constants use UPPER_SNAKE_CASE.

---

# SECTION 5 — TypeScript Standards

## 5.1 Strict Mode

TypeScript strict mode must remain enabled.

## 5.2 Type Aliases

Use type aliases for domain shapes and reusable object structures.

## 5.3 Interfaces

Use interfaces for object contracts that may be extended.

## 5.4 Enums

Use enums sparingly. Prefer string literal unions where possible.

## 5.5 Generics

Use generics where they improve flexibility without overcomplicating the code.

## 5.6 Utility Types

Use built-in utility types such as Partial, Pick, Omit, Required, Record, and NonNullable.

## 5.7 Discriminated Unions

Use discriminated unions for state modeling and API variants where appropriate.

## 5.8 Never use any

The any type is prohibited except in very limited and justified cases.

### Best Practices

- Prefer explicit types over inferred ones when clarity matters.
- Define shared types in central modules.
- Keep API response and domain types separate where appropriate.
- Use narrow types rather than broad ones.

---

# SECTION 6 — Folder Standards

## 6.1 Feature Structure

Each major capability should have a dedicated folder containing its own UI, hooks, services, and types.

## 6.2 Shared

The shared folder contains reusable primitives, utilities, icons, helpers, and design-system-level building blocks.

## 6.3 Entities

Entities represent domain concepts such as product, order, user, address, and review.

## 6.4 Widgets

Widgets are self-contained composite UI units used across pages.

## 6.5 Components

Use components for reusable UI building blocks.

## 6.6 Hooks

Hooks contain reusable behavior and side-effect encapsulation.

## 6.7 Utils

Utilities include pure helpers that are not tied to UI or domain logic.

## 6.8 Types

Types should be centralized and shared across layers.

## 6.9 Assets

Store static assets and design resources here.

## 6.10 API

Store route contracts, validators, and shared API request builders.

## 6.11 Database

Database logic, Prisma schema, migrations, and seed files belong here.

## 6.12 Providers

Application-wide providers such as theme, query, auth, and analytics belong here.

## 6.13 Layouts

Layouts for marketing, shop, auth, and admin interfaces belong here.

---

# SECTION 7 — Naming Convention

## 7.1 Files

- use kebab-case for file names,
- use index.ts for barrel exports where appropriate,
- use route filenames that match the route purpose.

## 7.2 Folders

- use kebab-case for folders,
- keep folder names aligned with domain or feature intent.

## 7.3 Variables

- use camelCase for local and module variables.

## 7.4 Components

- use PascalCase for components.

## 7.5 Hooks

- use the use\* prefix.

## 7.6 Functions

- use camelCase and clear verbs such as create, update, validate, calculate.

## 7.7 Types

- use PascalCase for types and interfaces.

## 7.8 Enums

- use PascalCase for enum names and UPPER_SNAKE_CASE for members where appropriate.

## 7.9 Database

- use snake_case for database table and column names.

## 7.10 Prisma

- use singular model names in PascalCase.
- use camelCase for Prisma fields.

## 7.11 API Routes

- use lowercase and hyphenated names where appropriate.
- keep routes consistent and versioned.

---

# SECTION 8 — Component Rules

## 8.1 Component Anatomy

A component should have:

- a clear purpose,
- a focused API,
- minimal internal branching,
- a predictable output.

## 8.2 Props

- keep props explicit and minimal,
- use discriminated unions for varied states,
- avoid prop drilling where a shared abstraction is better.

## 8.3 Variants

Variants should be modeled consistently and use the design-system patterns defined by the product.

## 8.4 Composition

Prefer composing components rather than building one large component for many cases.

## 8.5 Children

Children should be used for flexible composition where appropriate.

## 8.6 Ref

Forward refs when interacting with DOM primitives or imperative behavior is required.

## 8.7 Accessibility

All components must support keyboard interaction, semantic markup, and proper ARIA use when necessary.

## 8.8 Animation

Animations should be subtle, purposeful, and consistent with the approved motion system.

## 8.9 Performance

Avoid large rendering trees when a smaller composition will do.

---

# SECTION 9 — Styling Rules

## 9.1 Tailwind Standards

- use utility classes directly where appropriate,
- keep class strings readable,
- avoid arbitrary one-off styles when a shared token exists.

## 9.2 CSS Variables

Use theme tokens and CSS variables for colors, spacing, typography, radii, and shadows.

## 9.3 Spacing

Use the design-token spacing scale consistently.

## 9.4 Sizing

Use design-system sizing rules so that layouts remain consistent.

## 9.5 Typography

Use the approved typography scale and semantic text roles.

## 9.6 Shadows

Use elevation tokens rather than ad-hoc shadows.

## 9.7 Radius

Use consistent radius tokens for buttons, cards, inputs, and dialogs.

## 9.8 Responsive Design

- design for mobile first,
- ensure breakpoints are consistent,
- maintain layout integrity across screen sizes.

---

# SECTION 10 — Shadcn Rules

## 10.1 When to use default components

Use default Shadcn components when the required behavior is standard and matches the design system.

## 10.2 When to extend

Extend a component when the product needs a domain-specific variant or behavior.

## 10.3 When to create custom components

Create custom components when no existing primitive can express the required behavior without overcomplicating usage.

## 10.4 Variant Strategy

Variants should remain predictable and use the existing design-language tokens.

## 10.5 Theme Strategy

Theming should be consistent and centralized. Avoid local style overrides that break the system.

---

# SECTION 11 — Framer Motion Rules

## 11.1 Animation Principles

Animations should be purposeful, lightweight, and aligned with the brand experience.

## 11.2 Animation Duration

Use the approved duration system. Avoid arbitrary timing values.

## 11.3 Spring Config

Use spring settings consistently for natural motion.

## 11.4 Motion Tokens

Prefer semantic motion tokens over one-off values.

## 11.5 Hover

Hover states should be subtle and accessible.

## 11.6 Tap

Tap interactions should feel immediate and responsive.

## 11.7 Scroll

Scroll-based effects should remain performant and not block interaction.

## 11.8 Reveal

Reveal animations should support progressive rendering and not feel distracting.

## 11.9 Loading

Loading animations should be lightweight and not dominate the experience.

## 11.10 Reduced Motion

Respect reduced-motion preferences.

## 11.11 Performance Rules

Avoid animating layout properties unnecessarily. Favor transform and opacity.

---

# SECTION 12 — Forms

## 12.1 React Hook Form

Use React Hook Form for structured form state and handling.

## 12.2 Validation

Validation should happen on both client and server boundaries.

## 12.3 Zod

Use Zod schemas for validation and schema sharing whenever possible.

## 12.4 Error Handling

Show validation errors clearly and accessibly.

## 12.5 Loading

Show loading states for async submission and form progression.

## 12.6 Success

Use clear success feedback for completed actions.

## 12.7 Accessibility

Forms must include labels, error associations, and keyboard support.

---

# SECTION 13 — Database Rules

## 13.1 Prisma

Use Prisma as the source of truth for schema and data access.

## 13.2 Naming

Use clear, consistent, and domain-based naming for tables, columns, and relationships.

## 13.3 Indexes

Add indexes for high-traffic lookup fields but keep them deliberate and justified.

## 13.4 Transactions

Use transactions for related writes that must succeed or fail together.

## 13.5 Soft Deletes

Use soft deletes for records that need historical integrity.

## 13.6 Audit Logs

Record important user and system actions for traceability.

## 13.7 Migration Rules

- every schema change must have a migration,
- migrations must be reviewed,
- migrations must be tested in staging before production.

---

# SECTION 14 — API Rules

## 14.1 REST

Use RESTful resource-oriented patterns and consistent route grouping.

## 14.2 Status Codes

Use standard HTTP status codes and avoid ambiguous behavior.

## 14.3 Validation

Validate inputs at the API boundary using shared schemas.

## 14.4 Errors

Return consistent, typed, and safe error payloads.

## 14.5 Pagination

Use pagination for collections.

## 14.6 Sorting

Sorting must be explicit and predictable.

## 14.7 Filtering

Support standard, documented filtering rules.

## 14.8 Rate Limiting

Protect sensitive and high-volume endpoints with rate limiting.

## 14.9 Versioning

Version APIs from the start and avoid breaking changes without a new version.

---

# SECTION 15 — Authentication Rules

## 15.1 Better Auth

Use Better Auth as the standard authentication provider for the platform.

## 15.2 Roles

Roles must be explicit, documented, and enforced.

## 15.3 Permissions

Permissions must be checked server-side and at the route or service boundary.

## 15.4 Protected Routes

Protected routes must be protected on both the UI and API layers.

## 15.5 Sessions

Sessions must be secure, revocable, and scoped appropriately.

## 15.6 Cookies

Use secure cookies with appropriate attributes and expiration rules.

---

# SECTION 16 — Performance Standards

## 16.1 Core Web Vitals

The platform must target strong performance standards for LCP, INP, and CLS.

## 16.2 Image Optimization

Use optimized and responsive image delivery with lazy loading where appropriate.

## 16.3 Caching

Use cache strategies that balance freshness and efficiency.

## 16.4 Bundle Size

Avoid needless bundle growth and keep route-based code splitting intentional.

## 16.5 Lazy Loading

Lazy load non-critical UI and assets.

## 16.6 Streaming

Use streaming for large and slow-loading sections.

## 16.7 Server Components

Prefer server components for content-heavy rendering.

---

# SECTION 17 — Accessibility Standards

The project must meet professional accessibility expectations.

## 17.1 WCAG 2.2

All user-facing experiences should be designed and tested against WCAG 2.2 AA-level expectations where practical.

## 17.2 ARIA

Use ARIA only when semantic HTML is insufficient.

## 17.3 Keyboard

All interactive controls must be reachable and operable by keyboard.

## 17.4 Contrast

Text and interactive elements must have sufficient contrast.

## 17.5 Focus

Focus states must be visible and intentional.

## 17.6 Reduced Motion

Respect reduced-motion preferences.

---

# SECTION 18 — SEO Standards

## 18.1 Metadata

Every user-visible content page should have clear metadata.

## 18.2 Structured Data

Use structured data where the content type requires it.

## 18.3 Canonical

Use canonical tags consistently for pages that may have duplicate or near-duplicate variants.

## 18.4 Sitemap

Maintain sitemap generation and publication for public content.

## 18.5 Robots

Robots rules should be explicit and testable.

## 18.6 OpenGraph

Use OpenGraph metadata for social sharing.

## 18.7 Twitter Cards

Use Twitter card metadata where appropriate.

## 18.8 JSON-LD

Use JSON-LD for structured page data and schema.

---

# SECTION 19 — Testing Standards

## 19.1 Unit Tests

Used for utilities, pure functions, validation, and small domain logic.

## 19.2 Integration Tests

Used for API routes, data access, business flows, and module boundaries.

## 19.3 End-to-End Tests

Used for critical customer journeys such as signup, product discovery, cart, checkout, payment, and admin workflows.

## 19.4 Accessibility Tests

Used to verify keyboard support, semantics, and screen reader readiness.

## 19.5 Performance Tests

Used to measure page load, runtime performance, and assets.

## 19.6 Visual Regression Tests

Used where UI consistency matters and regressions would be visible.

---

# SECTION 20 — Git Standards

## 20.1 Commit Convention

Use clear conventional commits such as:

- feat: add checkout summary
- fix: resolve inventory reservation bug
- refactor: simplify auth session handling
- docs: update playbook

## 20.2 Branch Naming

Use descriptive branch names such as:

- feature/auth-login
- fix/payment-webhook
- chore/setup-ci

## 20.3 PR Template

Every PR must include summary, scope, testing, and rollout notes.

## 20.4 Code Review

Code review must cover correctness, security, performance, maintainability, and test coverage.

## 20.5 Release Process

Releases should use staging validation, release notes, rollback planning, and monitored deployment.

---

# SECTION 21 — Documentation Standards

## 21.1 Functions

Functions must be documented when their behavior is non-obvious or shared across modules.

## 21.2 Components

Components should have clear purpose and props documentation where necessary.

## 21.3 Hooks

Hooks should explain their responsibilities and side effects.

## 21.4 Modules

Modules should provide a summary of responsibilities, public API, and dependencies.

## 21.5 Architecture

Architecture decisions must be documented when they affect team conventions or system design.

## 21.6 README

Each major area should include a README or local overview when needed.

---

# SECTION 22 — AI Coding Rules

These rules apply to Claude Code, Cursor AI, GitHub Copilot, GPT-based assistants, and all other AI-assisted development tools.

## 22.1 Core AI Rules

1. Never generate duplicate code when an existing implementation can be reused.
2. Always search the repository first before adding a new component, hook, utility, or service.
3. Never create a new button, modal, form, or card component if one already exists in the shared system.
4. Always reuse existing design tokens, spacing rules, typography scales, and motion patterns.
5. Never use inline styles when a shared token or utility class exists.
6. Never bypass TypeScript. Always preserve strong typing and shared contracts.
7. Never ignore ESLint, formatting rules, or repository conventions.
8. Never use any unless there is a documented and reviewed exception.
9. Always use the existing API client, data fetching pattern, and validation utilities.
10. Always follow the established folder and module conventions.
11. Always update types when introducing or changing data structures.
12. Always update Prisma schema and migrations when the database model changes.
13. Always update API documentation when endpoints or payloads change.
14. Always update tests when behavior changes.
15. Always preserve accessibility and semantic HTML.
16. Always preserve SEO requirements on public routes.
17. Always preserve performance budgets and avoid introducing unnecessary bundle cost.
18. Always use the approved motion system and avoid ad-hoc animation patterns.
19. Always favor composition and reuse over bespoke one-off implementations.
20. Always keep business logic in domain services or utilities rather than in UI components.
21. Always prefer server-rendered solutions for public content over client-only implementations.
22. Never introduce new patterns that conflict with the playbook without explicit team approval.
23. Never bypass auth or authorization checks in code or tests.
24. Never expose secrets or sensitive values in logs, console output, or client code.
25. Always preserve the approved design language across all outputs.
26. Always consider error states and empty states when implementing UI.
27. Always consider loading states and disabled states for async interactions.
28. Always follow the established naming conventions.
29. Always make changes incremental and reviewable.
30. Always keep files small and focused.
31. Always prefer existing abstraction layers over ad-hoc local logic.
32. Always verify whether a feature already exists before implementing a new one.
33. Always keep feature logic in the correct module rather than scattering it across files.
34. Never implement a feature in the wrong layer just because it is faster to do so.
35. Never create duplicate API endpoints when one shared route can be extended.
36. Never duplicate validation logic when a shared schema already exists.
37. Never create a one-off component when a shared primitive can be extended.
38. Never add new global styles without considering the design-token system.
39. Never hardcode copy or strings if they belong in shared content or localization structures.
40. Always honor the approved component composition model.
41. Always preserve stable public interfaces when changing underlying implementation.
42. Always consider how a change impacts SEO, accessibility, analytics, and performance.
43. Always keep modules testable and isolated.
44. Always prefer idiomatic React and Next.js patterns over custom workarounds.
45. Always use existing hooks before creating new ones.
46. Always use existing utilities before creating new ones.
47. Always check for existing tests before writing new ones.
48. Always prefer shared types over repeated local shapes.
49. Always search for existing API validators before defining new ones.
50. Always search for existing domain services before adding new logic.
51. Always think in terms of system boundaries rather than local convenience.
52. Never assume a feature is done without updating the relevant docs and tests.
53. Never merge code that lacks the required validation, test coverage, or review.
54. Always ensure generated code is consistent with the project standards.
55. Always ensure generated code integrates with the current state management approach.
56. Always follow the approved route conventions for admin, customer, storefront, and API paths.
57. Always ensure that UI work uses the approved component library approach.
58. Always preserve the existing animation system and reduced-motion behavior.
59. Always think about how the change affects the database layer and migration strategy.
60. Always check whether the change needs a new permission or role.
61. Always consider whether the change affects payments, inventory, orders, or content publishing.
62. Always treat security-sensitive features as high-risk and review them carefully.
63. Always verify whether a feature requires audit logging or observability.
64. Always preserve developer ergonomics and make the solution easy to understand.
65. Always avoid introducing hidden dependencies between unrelated modules.
66. Always preserve deterministic behavior and avoid race conditions where possible.
67. Always use the shared error-handling and logging patterns.
68. Always prefer small, incremental changes over large rewrites.
69. Always check whether the change needs to update sitemap, metadata, or structured data output.
70. Always think about the user journey, not just the isolated implementation.
71. Always align implementation with the approved UX and motion principles.
72. Never bypass the repository’s testing or quality gates.
73. Never add a dependency without considering its maintenance burden and security risks.
74. Never assume an AI-generated patch is correct without review.
75. Always preserve current architecture boundaries when editing existing modules.
76. Always update documentation when architecture or workflows change.
77. Always keep admin workflows protected and auditable.
78. Always ensure checkout and order flows remain transactional and recoverable.
79. Always think about observability when adding new workflow steps.
80. Always preserve a clear separation between public storefront UI and internal admin UI.
81. Always keep the codebase readable for future contributors.
82. Always maintain a consistent pattern for form handling and validation.
83. Always maintain a consistent pattern for API error handling.
84. Always use approved naming for database models, fields, and relationships.
85. Always prefer shared configuration over local hardcoded values.
86. Always align new features with the roadmap and milestone planning.
87. Always consider whether an issue needs design or product clarification before implementation.
88. Always keep the system upgrade path in mind when adding new capabilities.
89. Always maintain a consistent pattern for loading, empty, and error states.
90. Always preserve data integrity for inventory, payments, and orders.
91. Always consider rollback and recovery implications for changes.
92. Always leave the codebase better than you found it.
93. Always explain non-obvious implementations in code comments only where necessary.
94. Always prefer stable contracts over convenience shortcuts.
95. Always keep modules aligned with the approved feature-sliced structure.
96. Always use existing middleware and guard patterns before creating new ones.
97. Always verify requirements and acceptance criteria before implementation.
98. Never create speculative abstractions without clear benefit.
99. Always ensure that any new dependency or external integration is documented and reviewed.
100. Never treat AI-generated code as final without human scrutiny.

---

# SECTION 23 — Definition of Done

## Feature Done

A feature is done when:

- requirements are met,
- tests are added or updated,
- accessibility and SEO expectations are met,
- documentation is updated,
- the change is reviewed and merged.

## Bug Done

A bug is done when:

- the root cause is resolved,
- a regression test or equivalent safeguard is added,
- the issue is verified in the intended environment.

## Component Done

A component is done when:

- it follows the design system,
- it is typed and accessible,
- it has documented props and usage where necessary,
- it behaves correctly across supported states.

## API Done

An API is done when:

- it validates input,
- returns consistent errors,
- is authorized and authenticated where necessary,
- has tests and documentation.

## Database Done

A database change is done when:

- the schema is migrated,
- indexes and constraints are reviewed,
- the migration is tested,
- rollback considerations are documented.

## UI Done

A UI experience is done when:

- it follows the approved design system,
- it is responsive,
- it is accessible,
- it is tested for key states and interactions.

---

# SECTION 24 — Engineering Checklists

## 24.1 Frontend Checklist

- [ ] component uses existing primitives where possible
- [ ] props and state are typed
- [ ] loading, empty, and error states are handled
- [ ] accessibility checks completed
- [ ] performance impact considered
- [ ] SEO impact reviewed for relevant routes

## 24.2 Backend Checklist

- [ ] input validation implemented
- [ ] authorization enforced
- [ ] errors handled consistently
- [ ] logging and observability added where needed
- [ ] tests added or updated
- [ ] API docs updated

## 24.3 Database Checklist

- [ ] migration created
- [ ] indexes reviewed
- [ ] constraints and relationships validated
- [ ] soft-delete strategy preserved where required
- [ ] audit logging considered

## 24.4 Security Checklist

- [ ] no secrets committed
- [ ] auth checks enforced
- [ ] permissions reviewed
- [ ] input validation in place
- [ ] rate limiting considered where relevant
- [ ] webhook signature validation added where needed

## 24.5 SEO Checklist

- [ ] metadata present and correct
- [ ] canonical logic reviewed
- [ ] sitemap and robots updated where needed
- [ ] structured data implemented where relevant

## 24.6 Performance Checklist

- [ ] bundle and route impact assessed
- [ ] lazy loading used where appropriate
- [ ] images optimized
- [ ] caching strategy reviewed

## 24.7 Accessibility Checklist

- [ ] keyboard support verified
- [ ] focus visibility checked
- [ ] ARIA used only when needed
- [ ] contrast reviewed
- [ ] reduced motion respected

## 24.8 Deployment Checklist

- [ ] environment variables defined
- [ ] build and tests pass
- [ ] rollback plan reviewed
- [ ] monitoring and alerts configured

---

# SECTION 25 — Future Standards

These standards will apply as the platform evolves.

## 25.1 Microservices

When the platform outgrows a single application boundary, services should be split by domain with clear contracts and ownership.

## 25.2 Search

Search should evolve into a dedicated, optimized capability with proper indexing and relevance tuning.

## 25.3 Queues

Background jobs should use a queue-based architecture for notifications, order processing, and asynchronous workflows.

## 25.4 Realtime

Realtime features must be designed with clear event contracts and careful scaling expectations.

## 25.5 Notifications

Notifications should be templated, auditable, and respect user preferences.

## 25.6 Internationalization

Localization should use a structured internationalization approach from the start.

## 25.7 Mobile App

If a mobile app is introduced, the same domain and contract standards should be preserved.

## 25.8 POS

A POS or omnichannel layer should be introduced with a clear architecture boundary and shared inventory model.

## 25.9 Marketplace

A marketplace model should preserve the same quality, security, and operational standards as the core platform.

---

# Final Governance Summary

This playbook is the operational contract for the Bhuvi Naturals engineering organization. It governs product delivery, code quality, collaboration, and long-term maintainability. Every feature, bug fix, component, API, and database change must align with these rules.

The goal is not merely to build software, but to build software that remains coherent, secure, performant, understandable, and scalable as the project grows.

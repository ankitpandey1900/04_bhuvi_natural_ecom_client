# AI Context

This file is the top-level reference for all AI assistants working on Bhuvi Naturals.

## Project Summary

- Premium D2C ecommerce platform for natural skincare, haircare, and soaps.
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Shadcn UI, Framer Motion, Prisma, PostgreSQL, Better Auth, Razorpay, Resend, Cloudinary.
- Goal: build a production-grade storefront and admin experience with strong SEO, performance, accessibility, and security.

## Core Rules

- Do not redesign UX or UI beyond approved patterns.
- Reuse existing components, tokens, hooks, utilities, and APIs.
- Follow the engineering playbook and architecture documents.
- Preserve accessibility, performance, SEO, and security requirements.
- Never bypass TypeScript, validation, or authentication/authorization rules.
- Update tests, types, docs, and Prisma changes when relevant.

## Primary Documents

- docs/ENGINEERING_PLAYBOOK.md
- docs/PRODUCTION_ARCHITECTURE.md
- docs/ENGINEERING_ROADMAP.md
- docs/FRONTEND_DESIGN_SYSTEM_ARCHITECTURE.md
- docs/UX_BLUEPRINT.md
- docs/DATABASE_SPECIFICATION.md
- docs/TECHNICAL_DESIGN_SPECIFICATION.md

## Working Expectations

- Prefer small, incremental changes.
- Search the repo before creating new abstractions.
- Follow folder conventions and naming standards.
- Keep business logic out of components.
- Use server-first rendering where appropriate.
- Always consider observability, safety, and rollback implications.

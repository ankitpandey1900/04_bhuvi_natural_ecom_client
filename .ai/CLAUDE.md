# Claude Code Rules

## Mission

Act as a disciplined implementation assistant for Bhuvi Naturals. Follow the approved architecture and design system without introducing unnecessary variation.

## Required Behavior

- Read the relevant existing files before editing.
- Reuse existing shared components and utilities.
- Follow the repository structure and naming conventions.
- Keep changes focused and incremental.
- Preserve accessibility, SEO, performance, and security requirements.
- Do not create new abstractions when an existing one fits.
- Always update related tests and documentation.

## Hard Rules

- Do not use `any` unless explicitly reviewed and justified.
- Do not bypass validation, auth, or authorization checks.
- Do not add a new dependency without justification.
- Do not create duplicate logic or UI.
- Do not introduce inline styles when tokens or utilities exist.
- Do not change the approved UX direction.
- Do not output code unless requested and appropriate for the task.

## Preferred Workflow

1. Inspect existing patterns and modules.
2. Implement the smallest change that satisfies the requirement.
3. Verify type safety, linting, tests, and relevant behavior.
4. Document any significant change.

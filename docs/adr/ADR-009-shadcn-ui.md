# ADR-009: Use Shadcn UI for component primitives

- Status: Accepted
- Date: 2026-07-09

## Context

The storefront will need consistent UI primitives such as dialogs, dropdowns, accordions, tabs, inputs, and menus. The team needs a component foundation that is accessible, composable, and aligned with a modern React stack.

## Problem

Building every interactive component from scratch would slow delivery and increase the risk of accessibility and consistency issues. The team needs a dependable library of well-structured components that can be adapted to the brand.

## Decision

Use Shadcn UI as the component library foundation for shared UI primitives.

## Alternatives Considered

- Material UI
- Chakra UI
- Ant Design
- Building custom components from scratch

## Pros

- Accessible and well-structured primitives
- Strong fit with React and Tailwind
- Highly composable and easy to customize
- Good balance between speed and quality
- Encourages consistent component patterns across the app

## Cons

- Adds another dependency and design system layer
- Requires careful theming to match a premium brand identity
- Some components may need custom refinement for ecommerce-specific UX

## Tradeoffs

Shadcn UI accelerates interface development while keeping flexibility, but the team should tailor the look and behavior to fit Bhuvi Naturals rather than relying on default styling alone.

## Consequences

The app will ship with a stronger, more consistent UI foundation and better accessibility defaults. This will reduce implementation time and improve quality across the storefront.

## Future Considerations

- Build a branded component layer on top of the primitives
- Define component governance and usage standards
- Expand the system for checkout, account, and admin surfaces as needed

## References

- Shadcn UI documentation
- Frontend experience and accessibility requirements

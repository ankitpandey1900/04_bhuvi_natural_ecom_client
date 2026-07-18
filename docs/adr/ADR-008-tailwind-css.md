# ADR-008: Use Tailwind CSS for styling

- Status: Accepted
- Date: 2026-07-09

## Context

The Bhuvi Naturals brand requires a premium, polished, and highly responsive ecommerce experience. The team needs a styling system that is fast to implement, consistent across pages, and easy to maintain as the site grows.

## Problem

The team needs a styling approach that can:

- support a premium visual language without excessive custom CSS,
- keep design tokens and layout patterns consistent,
- speed up UI development across storefront and marketing pages,
- simplify responsiveness and maintenance.

A traditional CSS architecture would likely become inconsistent and harder to scale as the component surface grows.

## Decision

Use Tailwind CSS as the primary styling framework for the frontend.

## Alternatives Considered

- Plain CSS modules
- CSS-in-JS
- Styled Components
- Bootstrap

## Pros

- Fast development and consistent design implementation
- Good fit for component-based UI teams
- Strong responsive design support
- Easy to maintain shared spacing, typography, and color systems
- Reduces styling overhead for a premium brand experience

## Cons

- Class-heavy markup can be harder to read for some developers
- Requires some standardization to prevent inconsistent usage
- Can be overkill for very small UI surfaces

## Tradeoffs

Tailwind improves speed and consistency, but the team must adopt conventions around class organization and design tokens to keep the codebase maintainable.

## Consequences

The design system will be implemented more efficiently, and the storefront will be easier to keep visually coherent across product, blog, and marketing pages.

## Future Considerations

- Define a shared design token set for spacing, colors, and typography
- Standardize component patterns to avoid ad hoc styling
- Evaluate whether a design-system layer is needed as the team scales

## References

- Tailwind CSS documentation
- Brand and experience requirements for premium ecommerce UX

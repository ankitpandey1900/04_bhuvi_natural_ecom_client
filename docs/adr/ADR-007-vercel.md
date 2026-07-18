# ADR-007: Use Vercel for deployment and hosting

- Status: Accepted
- Date: 2026-07-09

## Context

The storefront will be built with Next.js and needs a hosting platform that supports fast deployments, preview environments, edge capabilities, and high performance for a content-rich ecommerce site.

## Problem

The team needs a deployment platform that can:

- host a Next.js application efficiently,
- support preview deployments for content and product changes,
- simplify CI/CD for rapid iteration,
- provide performance and reliability for traffic spikes,
- align with the chosen frontend framework and team workflow.

## Decision

Use Vercel as the deployment and hosting platform for the storefront and related frontend workloads.

## Alternatives Considered

- AWS Amplify
- Netlify
- DigitalOcean App Platform
- Self-hosted infrastructure

## Pros

- Excellent Next.js integration and developer experience
- Fast preview deployments and easy collaboration
- Strong performance and edge capabilities
- Simplifies deployment and observability for a lean team
- Good fit for a modern D2C ecommerce launch

## Cons

- Vendor lock-in concerns for hosting and platform features
- Some advanced infrastructure needs may require additional customization
- Cost management needs attention as traffic and usage grow

## Tradeoffs

Vercel provides a fast, low-friction deployment experience tailored to the chosen stack, but the team should remain aware of platform-specific constraints and long-term hosting flexibility.

## Consequences

The team will be able to ship quickly and maintain a modern deployment workflow. This will reduce operational overhead and improve iteration speed for the storefront and marketing experience.

## Future Considerations

- Review infrastructure costs as traffic grows
- Consider advanced edge or serverless patterns if personalization needs expand
- Evaluate fallback or multi-region strategies for higher resilience if needed

## References

- Vercel documentation
- Next.js deployment and performance requirements

# ADR-002: Use Better Auth for authentication and session management

- Status: Accepted
- Date: 2026-07-09

## Context

The Bhuvi Naturals storefront will need customer accounts, order history, wishlist functionality, and admin access. Authentication must be secure, simple, and suitable for both customer and internal users. The platform also needs a clear path to future features like subscriptions, loyalty, and account-based personalization.

## Problem

The team needs a reliable authentication solution that can support:

- customer login and registration,
- admin role-based access,
- session handling,
- secure passwordless or password-based flows,
- future extensibility for account features.

A custom authentication implementation would increase risk and maintenance overhead.

## Decision

Adopt Better Auth as the authentication and session management solution for customer and admin users.

## Alternatives Considered

- Custom authentication implementation
- Auth.js / NextAuth
- Clerk
- Firebase Authentication

## Pros

- Modern and developer-friendly authentication framework
- Good fit for Next.js-based applications
- Supports session management and role-based access needs
- Reduces implementation risk compared to building auth from scratch
- Extensible for future customer account features

## Cons

- Introduces a dependency on a third-party auth package
- Requires proper configuration and operational monitoring
- Some advanced flows may need additional customization

## Tradeoffs

Better Auth offers speed and reliability for standard ecommerce auth needs, but the team must still implement role policies, security reviews, and correct environment configuration carefully.

## Consequences

The platform will have a secure, maintainable authentication foundation for both retail customers and administrators. This will also simplify future work on account-based experiences and internal management tools.

## Future Considerations

- Add MFA for admin users where appropriate
- Support social login or OTP-based login if customer demand justifies it
- Evaluate advanced access control as the admin surface expands

## References

- Better Auth documentation
- Product requirements for accounts, orders, and admin workflows

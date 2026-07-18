# Bhuvi Naturals – Technical Design Specification (TDS)

Date: 2026-07-09

Status: Draft for Engineering Alignment

## 1. Purpose

This document defines the technical architecture, module boundaries, data model direction, integration strategy, deployment approach, and operational considerations for the Bhuvi Naturals ecommerce platform. It is intended for senior software engineers, solution architects, and technical leads.

## 2. Scope

The platform will support:

- a premium storefront for skincare, haircare, and natural soap products,
- SEO-friendly product and content pages,
- customer accounts and order history,
- cart, checkout, and payment handling,
- inventory and order management,
- admin operations for catalog and content,
- future support for subscriptions, bundles, and growth features.

## 3. Architectural Principles

- Prioritize performance and SEO for public-facing commerce pages.
- Design for modularity so features can evolve independently.
- Prefer managed services where they improve speed, reliability, and operations.
- Ensure secure handling of payments, customer data, and admin access.
- Build for scalability from the beginning, even if V1 is intentionally lean.
- Use type-safe development patterns and clear contract boundaries.

---

# 4. System Architecture

## 4.1 High-Level Architecture

The platform will follow a layered architecture with a modern frontend, API layer, core domain services, data layer, and integrations.

### Core Layers

1. Presentation Layer
   - Next.js storefront for customer-facing web experience.
   - Admin console for internal operations.
   - Marketing and content pages rendered with SEO-friendly output.

2. Application Layer
   - Server-side logic for catalog, cart, checkout, auth, inventory, orders, and content workflows.
   - Business rules implemented as services and use cases.

3. Data Layer
   - PostgreSQL as the transactional database.
   - Prisma as the ORM and schema management tool.
   - Object storage and media CDN integration for images and assets.

4. Integration Layer
   - Razorpay for payments.
   - Cloudinary for media.
   - Email/SMS notification providers.
   - Shipping and fulfillment service integrations.

5. Observability and Operations
   - Logging, monitoring, alerts, tracing, backups, performance monitoring.

## 4.2 Deployment Topology

- Frontend hosted on Vercel.
- API routes or server functions hosted on Vercel-compatible runtime.
- Database hosted in a managed PostgreSQL service.
- Media hosted in Cloudinary and delivered via CDN.
- Background jobs handled through queue-based asynchronous workers.

## 4.3 Runtime Model

- Public storefront is statically generated or server-rendered where SEO matters.
- Dynamic operations such as cart, checkout, account, and order tracking use server-rendered or API-backed flows.
- Admin operations use a secure authenticated experience with role-based access control.

---

# 5. Folder Structure

A recommended structure for the repository is:

```text
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      blog/[slug]/page.tsx
      faq/page.tsx
      contact/page.tsx
    (shop)/
      shop/page.tsx
      products/[slug]/page.tsx
      collections/[slug]/page.tsx
      cart/page.tsx
      checkout/page.tsx
      orders/[id]/page.tsx
    (auth)/n
      login/page.tsx
      register/page.tsx
      reset-password/page.tsx
    admin/
      dashboard/page.tsx
      products/page.tsx
      inventory/page.tsx
      orders/page.tsx
      customers/page.tsx
      content/page.tsx
  components/
    ui/
    features/
    layouts/
    forms/
  lib/
    auth/
    db/
    payments/
    shipping/
    storage/
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
  prisma/
    schema.prisma
    migrations/
  docs/
    adr/
  public/
    images/
    icons/
  tests/
    unit/
    integration/
    e2e/
  .env.example
  package.json
  tsconfig.json
```

## 5.1 Folder Conventions

- Feature-oriented modules under src/modules.
- Shared UI primitives under src/components/ui.
- Route-level pages under src/app.
- Server-side domain logic under src/server/services and src/server/actions.
- Cross-cutting utilities in src/lib.

---

# 6. Module Breakdown

## 6.1 Catalog Module

Responsibilities:

- Manage products, categories, collections, variants, attributes, pricing, and SEO metadata.
- Support product discovery and filtering.
- Provide data for listing and detail pages.

## 6.2 Cart Module

Responsibilities:

- Add/remove/update items.
- Persist cart state for authenticated and guest users.
- Apply promotions and validation.

## 6.3 Checkout Module

Responsibilities:

- Collect shipping address, payment selection, and order summary.
- Validate availability and pricing.
- Create order and initiate payment.

## 6.4 Order Module

Responsibilities:

- Create, confirm, track, and manage orders.
- Support status transitions and integration with shipping providers.
- Provide customer and admin visibility.

## 6.5 Inventory Module

Responsibilities:

- Track stock levels, reservations, reorder thresholds, and availability.
- Prevent overselling.
- Support backorder and out-of-stock states.

## 6.6 Payment Module

Responsibilities:

- Initiate payment flows.
- Handle webhooks and payment confirmations.
- Manage refunds and payment failure states.

## 6.7 Authentication Module

Responsibilities:

- Register, log in, logout, password reset, session handling, and role-based access.

## 6.8 Customer Module

Responsibilities:

- Manage account profile, address book, order history, wishlist, and preferences.

## 6.9 Content Module

Responsibilities:

- Manage blog content, landing pages, FAQs, SEO metadata, and marketing content.

## 6.10 Notification Module

Responsibilities:

- Send transactional email and SMS updates for order confirmations, shipping updates, and support communications.

## 6.11 Admin Module

Responsibilities:

- Product management, inventory management, order fulfillment, content publishing, promotions, and reports.

---

# 7. Database Modules

## 7.1 Core Data Domains

### Users and Auth

- users
- sessions
- accounts
- verification_tokens
- roles
- permissions

### Catalog

- products
- product_variants
- categories
- collections
- brands
- tags
- product_media
- ingredient_profiles
- product_reviews

### Cart and Checkout

- carts
- cart_items
- orders
- order_items
- addresses
- payments
- payment_events
- coupons
- coupon_usage

### Inventory

- inventory_levels
- stock_movements
- reservations
- batches
- suppliers

### Content

- pages
- blog_posts
- faq_entries
- seo_metadata
- redirects

### Marketing and Customer Engagement

- newsletters
- wishlists
- subscriptions
- loyalty_events
- customer_support_tickets

## 7.2 Data Design Principles

- Use UUIDs for primary keys where practical.
- Enforce foreign key constraints where appropriate.
- Keep immutable audit fields for orders, payments, and inventory actions.
- Use soft delete for customer and admin content where needed.
- Separate transactional tables from reporting-oriented aggregates where appropriate.

## 7.3 Schema Considerations

- Product variants should be modeled as separate records with their own SKU and price.
- Inventory should be treated as a dedicated domain with reservation logic.
- Orders should be immutable after confirmation except for allowed status transitions.
- Audit trails should capture who changed what and when for admin actions.

---

# 8. Authentication Flow

## 8.1 Customer Authentication

1. User enters email and password or uses a supported social/OTP flow.
2. Authentication service validates credentials.
3. Session is created and stored securely.
4. User is redirected to a relevant page, such as account or checkout.

## 8.2 Admin Authentication

1. Admin signs in through a dedicated admin route.
2. Authentication service validates credentials and role.
3. Session is issued with restricted access claims.
4. Access to admin routes is checked via authorization middleware.

## 8.3 Session Handling

- Use secure, HttpOnly cookies for session tokens.
- Enforce HTTPS.
- Rotate session secrets and refresh tokens properly.
- Support logout and session invalidation.

## 8.4 Password and Recovery Flow

- Password hashing with strong algorithms.
- Password reset via secure token links.
- Verification email for account activation where required.

---

# 9. Authorization

## 9.1 Access Model

The system will use role-based access control (RBAC) with the following primary roles:

- Customer
- Admin
- Catalog Manager
- Inventory Manager
- Content Manager
- Support Agent

## 9.2 Permission Model

Permissions will include actions such as:

- view_products
- manage_products
- manage_inventory
- view_orders
- manage_orders
- publish_content
- manage_promotions
- view_analytics
- manage_users

## 9.3 Enforcement Strategy

- Middleware or route guards will enforce permissions at the route and API level.
- Server actions and API endpoints should check authorization before business logic is executed.
- Sensitive operations should be audited and logged.

---

# 10. API Strategy

## 10.1 API Types

- Public storefront APIs for catalog, search, product details, cart, checkout, and order status.
- Internal admin APIs for content management, inventory updates, and order operations.
- Webhook endpoints for payment and fulfillment events.

## 10.2 API Design Principles

- Use RESTful patterns for predictable resource access.
- Use clear versioning strategy beginning with v1.
- Keep API contracts typed and documented.
- Validate request payloads and enforce consistent error responses.
- Separate read and write concerns where appropriate.

## 10.3 Suggested Endpoint Groups

- /api/v1/products
- /api/v1/categories
- /api/v1/cart
- /api/v1/checkout
- /api/v1/orders
- /api/v1/auth
- /api/v1/account
- /api/v1/admin/products
- /api/v1/admin/orders
- /api/v1/webhooks/razorpay

## 10.4 Server Actions

Use server actions for form-driven flows where appropriate, especially in Next.js routes for admin management and simple commerce mutations.

---

# 11. Error Handling

## 11.1 Error Handling Principles

- Fail fast and validate inputs early.
- Return consistent error shapes for APIs and UI.
- Avoid exposing sensitive internals in client-visible errors.
- Log errors with correlation IDs.

## 11.2 Error Categories

- Validation errors
- Authentication and authorization errors
- Not found errors
- Conflict errors such as stock mismatch or duplicate records
- External service errors
- Unexpected server errors

## 11.3 Error Response Format

A consistent JSON error envelope should be used for APIs:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields are invalid",
    "details": []
  }
}
```

## 11.4 Client UX

- Show clear user-facing messages for cart, payment, and inventory failures.
- Preserve cart state on recoverable errors.
- Avoid generic failures where the user can be guided to a next step.

---

# 12. Logging

## 12.1 Logging Requirements

- Structured logs for requests, auth events, payment events, orders, and admin actions.
- Include request ID, user ID, role, action, outcome, and error context where safe.
- Log external API interactions for debugging and support.

## 12.2 Logging Tools

- Application logs through a centralized logging service.
- Error tracking and performance monitoring integrated into the deployment workflow.
- Admin audit logs for sensitive operations.

## 12.3 Audit Logging

- Inventory changes
- Order status changes
- Payment events
- Content publishing
- User role changes
- Admin authentication or privilege changes

---

# 13. Caching Strategy

## 13.1 Cache Types

- CDN caching for static assets and public marketing pages.
- Edge caching for publicly cacheable pages and APIs.
- Application caching for product listing and category data where freshness allows.
- Database query caching only where appropriate and well understood.

## 13.2 Cache Rules

- Product and category pages should be cacheable with short invalidation windows.
- Cart and checkout data should never be cached in a shared public cache.
- Authenticated user data should not be cached unless explicitly scoped.
- Admin content changes should invalidate relevant caches promptly.

## 13.3 Invalidation Strategy

- Purge or revalidate on content change, inventory change, or pricing change.
- Use tags or explicit cache keys for predictable invalidation.

---

# 14. Image Strategy

## 14.1 Media Handling

- Store images in Cloudinary.
- Use optimized delivery formats and responsive image variants.
- Apply lazy loading for images below the fold.
- Use descriptive alt text for accessibility and SEO.

## 14.2 Image Types

- Product hero images
- Product variant images
- Ingredient visuals
- Blog images
- Marketing banners
- Social sharing images

## 14.3 Optimization Rules

- Serve modern formats where supported.
- Resize to the needed display size.
- Provide low-quality placeholders for large media.
- maintain a clear naming convention and asset organization strategy.

---

# 15. Payment Flow

## 15.1 Payment Lifecycle

1. Customer reaches checkout.
2. Cart and address are validated.
3. Order summary is created.
4. Payment initiation request is sent to Razorpay.
5. Customer completes payment.
6. Razorpay webhook confirms payment status.
7. Order is marked paid, inventory is reserved, and fulfillment is triggered.

## 15.2 Failure Handling

- If payment fails, order remains pending or canceled based on policy.
- Retry logic is provided for transient gateway issues.
- Admin and customer see clear status messaging.

## 15.3 Security

- Payment webhooks are verified using signatures.
- Sensitive payment data is never stored in plaintext.
- PCI-aligned handling practices must be followed.

---

# 16. Order Flow

## 16.1 Order Lifecycle

1. Checkout creates a pending order.
2. Inventory reservation is attempted.
3. Payment is confirmed.
4. Order status changes to processing.
5. Fulfillment is prepared and dispatched.
6. Shipping updates are sent.
7. Order is delivered and marked complete.
8. Review and post-purchase flows are triggered.

## 16.2 Status Model

- Pending
- Confirmed
- Paid
- Processing
- Packed
- Shipped
- Delivered
- Cancelled
- Refunded
- Returned

## 16.3 Business Rules

- Order creation should not allow overselling.
- Order status transitions must follow allowed state transitions.
- Refunds should be traceable and auditable.

---

# 17. Inventory Flow

## 17.1 Inventory Principles

- Inventory is a first-class domain with explicit stock movement history.
- Stock must be reserved during checkout.
- Reservations must be released on failed or abandoned orders.

## 17.2 Inventory Workflow

1. Inventory is loaded from stock records.
2. Checkout reserves required quantity.
3. Payment confirmation finalizes reservation.
4. Fulfillment reduces committed stock.
5. Stock movement logs are preserved.

## 17.3 Edge Cases

- Out-of-stock items during checkout.
- Partial inventory availability.
- Backorder handling.
- Variant-level stock differences.
- Restock and replenishment management.

---

# 18. Notification Flow

## 18.1 Notification Types

- Order confirmation
- Payment success/failure
- Shipping updates
- Return/refund updates
- Password reset
- Low-stock alerts
- Newsletter and marketing emails

## 18.2 Delivery Channels

- Email
- SMS where appropriate
- In-app or account notifications where supported

## 18.3 Notification Principles

- Notifications should be transactional and traceable.
- The system should prevent duplicate sends for the same event.
- Notification templates should be versioned and testable.

---

# 19. Deployment Strategy

## 19.1 Environment Strategy

- Development
- Staging
- Production

## 19.2 Deployment Model

- Vercel for frontend deployment.
- Managed PostgreSQL for persistent data.
- CI/CD pipeline for automated build, test, and deployment.
- Environment variables managed securely.
- Preview deployments for branches and content changes.

## 19.3 Release Process

- Feature branches and pull requests.
- Automated tests before merge.
- Staging validation before production promotion.
- Rollback plan for deployment issues.

---

# 20. Scalability Plan

## 20.1 Scalability Strategy

- Use managed services to reduce operational complexity.
- Build stateless app logic where practical.
- Separate background processing from request handling.
- Plan for growth in traffic, traffic spikes, product count, and content volume.

## 20.2 Growth Areas

- Increased product catalog size
- More SEO traffic and content pages
- Higher concurrent checkout traffic
- Greater use of subscriptions and promotions
- Additional admin and support workloads

## 20.3 Scaling Tactics

- CDN and edge caching for public pages
- Database indexing and query optimization
- Background queue for asynchronous tasks
- Autoscaling where supported by infrastructure
- Read/write separation or reporting stores later if required

---

# 21. Performance Plan

## 21.1 Performance Goals

- Fast initial page load for public commerce pages
- Strong Core Web Vitals for mobile and desktop
- Quick checkout response times
- Efficient media delivery

## 21.2 Performance Practices

- Server rendering and static generation where appropriate
- Lazy loading for below-the-fold media
- Code splitting and route-level optimization
- CDN delivery of static assets
- Image optimization and responsive variants
- Reduce client-side JavaScript where possible

---

# 22. Security Plan

## 22.1 Security Controls

- HTTPS only
- Secure authentication and session handling
- Role-based access control
- Input validation and output encoding
- CSRF protection for state-changing requests
- Rate limiting for public and admin endpoints
- Secure secret management
- Dependency scanning and regular updates

## 22.2 Data Protection

- Encrypt sensitive data in transit and at rest where supported
- Minimize personal data retention where possible
- Apply least-privilege access to databases and services

## 22.3 Compliance Considerations

- Relevant privacy policies and customer consent workflows should be implemented
- Payment handling should follow platform and provider integration requirements

---

# 23. Disaster Recovery

## 23.1 Recovery Objectives

- Restore storefront availability quickly after disruption.
- Protect transactional data and customer orders.
- Ensure a documented rollback and restoration process.

## 23.2 Backup Strategy

- Regular automated database backups with tested restore procedures.
- Version-controlled infrastructure and deployment configuration.
- Media backup or durable storage strategy via Cloudinary and related platform capabilities.

## 23.3 Incident Response

- Alerting for errors, downtime, and failed payments.
- Clear ownership for incident triage and communication.
- Runbooks for common issues such as failed deploys, payment webhook failures, or inventory inconsistency.

## 23.4 Recovery Testing

- Conduct recovery drills and restore validations regularly.
- Test backup restoration before launch and periodically after launch.

---

# 24. Open Questions

- Which fulfillment partner will be used for dispatch and tracking?
- What is the final payment method mix and settlement policy?
- Which admin workflow tooling will be used for support and operations?
- Will subscriptions be included in V1 or phased later?
- What analytics and reporting stack will be used for merchandising and performance analysis?

---

# 25. Summary

The Bhuvi Naturals platform should be implemented as a modular, SEO-first, premium ecommerce system built on Next.js, PostgreSQL, Prisma, Razorpay, Cloudinary, Vercel, and modern operational tooling. The architecture is designed to support both a fast launch and long-term growth without compromising performance, security, or maintainability.

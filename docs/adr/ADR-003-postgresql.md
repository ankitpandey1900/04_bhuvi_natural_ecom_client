# ADR-003: Use PostgreSQL as the primary relational database

- Status: Accepted
- Date: 2026-07-09

## Context

The ecommerce platform will manage structured data such as customers, products, inventory, orders, payments, shipping, and content. The data model must support relational integrity, reporting, and future complexity as the brand scales.

## Problem

The team needs a robust, reliable data store for transactional ecommerce workflows. The database must support:

- relational joins between product, inventory, order, and customer data,
- strong consistency for order and payment operations,
- reporting and analytics use cases,
- long-term maintainability and ecosystem support.

## Decision

Use PostgreSQL as the primary relational database for the platform.

## Alternatives Considered

- MySQL
- MongoDB
- SQLite
- SQL Server

## Pros

- Strong relational capabilities and data integrity
- Mature ecosystem and broad tooling support
- Excellent support for transactional workloads
- Proven choice for ecommerce and SaaS systems
- Good compatibility with Prisma and modern application stacks

## Cons

- More operational overhead than a document database for simple use cases
- Requires careful indexing and query tuning as data scales
- Some operational tasks require database administration familiarity

## Tradeoffs

PostgreSQL provides strong consistency and relational modeling, which is important for commerce operations, though it requires more deliberate schema design than document-oriented alternatives.

## Consequences

The platform will have a dependable data foundation for core commerce workflows. Development will be aligned around relational modeling, which is appropriate for inventory, orders, and customer records.

## Future Considerations

- Evaluate read replicas for analytics traffic
- Consider partitioning for historical order data over time
- Review backup, replication, and disaster recovery policies as traffic grows

## References

- PostgreSQL documentation
- Ecommerce data model requirements from the product brief

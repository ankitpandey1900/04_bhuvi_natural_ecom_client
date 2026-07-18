# ADR-004: Use Prisma as the ORM and database toolkit

- Status: Accepted
- Date: 2026-07-09

## Context

The application will interact with PostgreSQL using a strongly typed data model. The team needs a tool that simplifies schema management, migrations, and type-safe database access while keeping development speed high.

## Problem

Without a reliable ORM or database toolkit, the team would face:

- repetitive and error-prone SQL,
- weaker type safety,
- slower schema evolution,
- more manual migration work,
- inconsistent patterns for data access.

## Decision

Use Prisma as the ORM and database toolkit for schema definition, migrations, and type-safe database access.

## Alternatives Considered

- Raw SQL with repository pattern
- TypeORM
- Drizzle
- Sequelize

## Pros

- Strong TypeScript integration and end-to-end type safety
- Clear schema and migration workflow
- Faster development for CRUD and relational queries
- Mature ecosystem and strong documentation
- Good fit with PostgreSQL and modern Next.js applications

## Cons

- Adds another layer of abstraction over SQL
- Some advanced database features may require custom SQL or raw queries
- Team must be comfortable with Prisma conventions and generated clients

## Tradeoffs

Prisma improves developer productivity and safety, but the team must accept the tradeoff of using an abstraction layer rather than writing all database logic manually.

## Consequences

The system will benefit from quicker development cycles, clearer database migrations, and fewer runtime data-access errors. This will improve consistency across product, inventory, orders, and customer management features.

## Future Considerations

- Evaluate Prisma Accelerate or managed database strategies if performance needs increase
- Standardize repository and service patterns around Prisma usage
- Monitor generated client size and runtime performance over time

## References

- Prisma documentation
- PostgreSQL and Next.js architecture requirements

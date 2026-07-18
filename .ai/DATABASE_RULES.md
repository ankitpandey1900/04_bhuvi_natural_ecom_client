# Database Rules

## Standards

- Use Prisma as the schema and data access source of truth.
- Keep naming consistent and domain-oriented.
- Use indexes for critical lookup paths.
- Use transactions for related writes.
- Use soft deletes where historical integrity matters.
- Add audit logging for significant operational actions.

## Required Practices

- Do not change the schema without a migration.
- Review constraints, indexes, and relationships before shipping.
- Avoid unnecessary denormalization.
- Preserve data integrity for inventory, orders, payments, and content.

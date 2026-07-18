# Security Rules

## Standards

- Never commit secrets or credentials.
- Enforce authentication and authorization at every protected boundary.
- Validate all user input.
- Protect state-changing routes, admin flows, and payment webhooks.
- Use secure cookies, signatures, and rate limiting where appropriate.

## Required Practices

- Do not bypass security checks for convenience.
- Do not expose sensitive data in logs or client code.
- Keep payment and auth integrations secure and reviewed.

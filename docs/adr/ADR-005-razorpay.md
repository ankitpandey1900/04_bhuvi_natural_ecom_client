# ADR-005: Use Razorpay for payments and order capture

- Status: Accepted
- Date: 2026-07-09

## Context

The Bhuvi Naturals storefront will need a reliable payment solution for online orders. The business requires support for common Indian payment methods such as UPI, cards, wallets, and net banking, while also preserving a smooth customer experience for premium skincare purchases.

## Problem

The platform needs a payment provider that can:

- support Indian payment methods reliably,
- integrate smoothly into a modern ecommerce checkout,
- handle order capture and payment status updates,
- support both prepaid and COD-oriented workflows in a way that suits the market,
- provide a dependable developer integration and operational support model.

## Decision

Use Razorpay as the primary payment gateway for online checkout and payment status handling.

## Alternatives Considered

- Stripe
- PayU
- Cashfree
- Paytm Payments

## Pros

- Strong fit for the Indian market and payment methods
- Mature developer SDKs and documentation
- Supports a wide range of local payment behaviors and flows
- Good alignment with ecommerce requirements in India
- Suitable for future expansion into subscriptions and recurring payments

## Cons

- Dependency on a specific payment provider
- Some payment flows may require careful operational handling and testing
- Fees and settlement behavior must be reviewed in detail

## Tradeoffs

Razorpay is a strong operational fit for India, though the team should ensure checkout UX and failure handling are carefully designed to avoid friction and support issues.

## Consequences

The checkout experience will support common Indian payment methods and establish a stable foundation for transaction processing. The team will also need to implement robust webhook handling, failed payment recovery, and reconciliation workflows.

## Future Considerations

- Evaluate recurring payments or subscriptions if that feature becomes a priority
- Review payment analytics and fraud controls as order volume grows
- Ensure refund and reconciliation workflows are documented and tested

## References

- Razorpay documentation
- Product requirements for payment workflow and checkout

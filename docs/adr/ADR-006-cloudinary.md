# ADR-006: Use Cloudinary for media storage and optimization

- Status: Accepted
- Date: 2026-07-09

## Context

The Bhuvi Naturals brand depends heavily on high-quality product photography, ingredient visuals, and branded content. The platform needs a media solution that supports image delivery, transformation, optimization, and easy management across product pages, blogs, and marketing content.

## Problem

The team needs a reliable media platform that can:

- store and serve product and content images at scale,
- optimize images for web and mobile performance,
- support transformations such as resizing, cropping, and format conversion,
- reduce frontend performance issues caused by large media files,
- simplify asset management for a content-heavy brand.

## Decision

Use Cloudinary as the media storage and optimization platform for product images, content assets, and marketing visuals.

## Alternatives Considered

- Local file storage on the application server
- AWS S3 with custom image processing
- Imgix
- Cloudflare Images

## Pros

- Excellent image optimization and transformation capabilities
- Strong developer experience and CDN delivery
- Reduces local storage and performance burden
- Good fit for ecommerce media-heavy experiences
- Supports a wide range of asset workflows and formats

## Cons

- Adds another third-party dependency
- Costs can grow with high media volume
- Requires proper asset naming and organization practices

## Tradeoffs

Cloudinary improves performance and media management but introduces vendor dependency and operational cost that must be monitored as the catalog grows.

## Consequences

The storefront will deliver faster, more polished media experiences. Product pages, blogs, and campaign assets will be easier to manage and optimize for both desktop and mobile users.

## Future Considerations

- Standardize media naming and transformation rules across the team
- Review storage and bandwidth costs as content volume increases
- Consider automated workflows for image tagging and optimization

## References

- Cloudinary documentation
- Product requirements for premium visuals and SEO image optimization

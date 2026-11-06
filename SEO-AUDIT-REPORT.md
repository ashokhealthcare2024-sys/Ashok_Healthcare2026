# SEO and Routing Audit

Date: 2026-11-07

## Canonical URL policy

The site uses `https://www.ashokhealthcare.in/` and lowercase, trailing-slash page routes. Legacy `.html` page URLs redirect to their canonical folder routes. Query-string variants redirect to clean URLs.

## Changes in scope

- Added canonical `index.html` pages for ambulance services, diagnostics, locality home nursing, medical equipment rental and sales, physiotherapy, and neuro/orthopedic rehabilitation.
- Aligned canonical and Open Graph URLs, internal links, and asset references across non-gallery pages.
- Updated the XML sitemap and canonical HTML sitemap to cover 38 page URLs.
- Removed 37 duplicate `.html` aliases after verifying matching page titles, H1s, and visible text; archived copies outside the web root.
- Updated cPanel deployment tasks to include page and asset directories, excluding QA screenshots.
- Added Apache redirects, gallery asset fallback, and protections for dotfiles, archive paths, and internal reports.

## Local validation

- Apache 2.4.58 configuration syntax: passed.
- All 38 URLs in `sitemap.xml`: HTTP 200 on the local Apache test vhost.
- All 37 removed `.html` aliases: HTTP 301 to their canonical trailing-slash routes.
- Canonicalization, query cleanup, token, sitemap aliases, gallery fallback, dotfile/archive protection, and custom 404: passed local checks.
- Metadata, internal-link, asset, JSON-LD, and sitemap checks passed. The sitemap validator reported 11 passing checks.
- Responsive matrix: 38 pages x 12 viewports = 456 checks passed.
- SHA-256 comparison passed for all 166 protected files in `gallery/`, `assets/gallery/`, and `assets/images/`.

The canonical HTML sitemap at `/sitemap/` matches all 38 XML sitemap URLs. `/sitemap.html` is a removed alias that redirects to `/sitemap/`.

Known link-set variations and the protected gallery's missing lightbox-image `alt` text are documented in [INTERNAL_AUDIT.md](./INTERNAL_AUDIT.md). They were not changed to avoid unapproved visual edits to embedded navigation or protected gallery HTML.

All checks were local only. Live deployment, Search Console verification, and search-engine indexing have not been tested.

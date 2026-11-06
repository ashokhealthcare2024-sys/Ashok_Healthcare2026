# SEO and Routing Audit

Date: 2026-11-07

## Canonical URL policy

The site uses `https://www.ashokhealthcare.in/` and lowercase, trailing-slash page routes. Legacy `.html` page URLs redirect to their canonical folder routes. Query-string variants are redirected to the clean URL.

## Changes in scope

- Added canonical `index.html` pages for ambulance services, diagnostics, locality home nursing, medical equipment rental and sales, physiotherapy, and neuro/orthopedic rehabilitation.
- Aligned canonical and Open Graph URLs, internal links, and asset references across non-gallery pages.
- Updated the HTML and XML sitemaps to the same 38 canonical page URLs.
- Updated cPanel deployment tasks to include every root HTML page and first-level page/asset directory.
- Added an Apache fallback for relative gallery asset requests without changing the protected gallery files.

## Local validation

- Apache 2.4.58 configuration syntax: passed.
- All 38 URLs in `sitemap.xml`: HTTP 200 on the local Apache test vhost.
- Tested redirects: HTTP to HTTPS, non-www to www, a legacy `.html` URL, the old verification URL, the old sitemap XML path, and query-string removal: HTTP 301.
- Tested gallery asset fallback: HTTP 200; dotfile access: HTTP 403; unknown page: HTTP 404.
- HTML audit covered 77 non-gallery HTML files: no missing local references, relative references, canonical/OG URL mismatches, or internal `.html` links. The protected gallery retains its pre-existing relative `.html` links.
- All 89 JSON-LD blocks parsed successfully.
- The HTML sitemap copies are identical and its 38 unique page URLs match the 38 XML sitemap URLs.
- SHA-256 comparison passed for all 166 protected files in `gallery/`, `assets/gallery/`, and `assets/images/`.

The checks were local only. Live deployment, Search Console verification, and search-engine indexing have not been tested.

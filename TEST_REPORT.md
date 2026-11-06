# Test Report - Ashok Home Healthcare

Date: 2026-11-07

## Result

Local routing, sitemap, and responsive checks passed. Production hosting and live indexing have not been tested.

## Sitemap and metadata

- `python validate_sitemap.py`: passed all 11 checks.
- 38 unique canonical sitemap URLs; all 38 have matching files and self-referencing canonical tags.
- All 38 sitemap URLs returned HTTP 200 on the temporary local Apache vhost.
- XML and HTML sitemap page URL sets match exactly.
- Canonical/OG URLs match; titles and descriptions are unique; one H1 per page.
- All 45 JSON-LD blocks parsed successfully.

## Apache routing

- Apache 2.4.58 config syntax: `Syntax OK`.
- All 37 archived `.html` aliases returned HTTP 301 to their canonical URLs.
- HTTPS/www redirects, query-string cleanup, obsolete verification and sitemap aliases passed.
- Google verification file returned HTTP 200 with the requested token.
- Gallery asset fallback returned HTTP 200.
- Dotfiles, the removal archive path, and internal reports were denied; an unknown route returned the custom HTTP 404.

## Static links and protected files

- No unresolved internal links or local assets were found on the 38 canonical pages.
- New-tab links include `noreferrer`.
- Footer logos use the original logo image on all canonical pages.
- SHA-256 comparison passed for all 166 protected files in `gallery/`, `assets/gallery/`, and `assets/images/`.
- The one empty-alt lightbox image and relative gallery links are protected-gallery exceptions; gallery HTML was not edited.
- Header/footer link-set variations remain documented in `INTERNAL_AUDIT.md`; they were retained to avoid unapproved visual navigation changes.

## Responsive QA

- 38 pages x 12 viewports/orientations = 456 checks; all passed.
- No overflow, non-200 page responses, missing viewport metadata, H1-count failures, JavaScript/console errors, or failed local requests.
- Mobile navigation open/close behavior passed.
- Six before/after screenshots cover contact mobile, blog landscape, and gallery mobile. They are representative, not a complete historical screenshot baseline.

## Limitations

All checks were local. Live deployment, Search Console verification, and search-engine indexing remain unverified.

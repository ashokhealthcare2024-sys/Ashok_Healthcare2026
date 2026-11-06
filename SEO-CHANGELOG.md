# SEO and Routing Changelog

Date: 2026-11-07

- Standardized canonical metadata and same-site links on the HTTPS `www` host and trailing-slash page routes.
- Added redirects for protocol/host variants, query-string variants, legacy `.html` paths, obsolete verification paths, legacy service aliases, and the previous sitemap XML path.
- Added canonical folder pages for six existing standalone healthcare pages.
- Synchronized the canonical HTML sitemap and `sitemap.xml` at 38 page URLs, with file-derived `lastmod` values. The duplicate `/sitemap.html` page was removed and redirects to `/sitemap/`.
- Removed 37 duplicate `.html` aliases after preserving hash-verified backups outside the web root.
- Expanded cPanel deployment to include all root HTML files and page/asset directories.
- Added an Apache internal rewrite for assets referenced relatively by the protected gallery.
- Added protections for dotfiles, the external removal archive, and internal QA/report files.
- Fixed responsive overflow/navigation issues and corrected remaining new-tab `rel` attributes.
- Kept the protected gallery HTML, gallery assets, and image assets unchanged.

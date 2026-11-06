# SEO and Routing Changelog

Date: 2026-11-07

- Standardized canonical metadata and same-site links on the HTTPS `www` host and trailing-slash page routes.
- Added redirects for protocol/host variants, query-string variants, legacy `.html` paths, obsolete verification paths, legacy service aliases, and the previous sitemap XML path.
- Added canonical folder pages for six existing standalone healthcare pages.
- Synchronized both HTML sitemap pages and `sitemap.xml` at 38 page URLs, with file-derived `lastmod` values.
- Expanded cPanel deployment to include all root HTML files and page/asset directories.
- Added an Apache internal rewrite for assets referenced relatively by the protected gallery.
- Kept the protected gallery HTML, gallery assets, and image assets unchanged.

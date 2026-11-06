# Deployment

## cPanel Git deployment

The `.cpanel.yml` tasks default to `$HOME/public_html/` and deploy:

- Root-level `.html` files, including `404.html` and the current Google verification file. Redundant page aliases have been removed; Apache redirects their old `.html` URLs.
- `.htaccess`, `robots.txt`, and `sitemap.xml`.
- Every first-level page and asset directory, including the canonical page folders, `assets/`, `blog/`, `gallery/`, and `services/`.
- QA screenshots are excluded from deployment.

Set `DEPLOYPATH` if the cPanel document root differs. The removal archive is intentionally outside the repository and must not be copied to the web root.

## Hosting requirements

- Apache with `mod_rewrite`, `mod_headers`, and `mod_mime` enabled.
- `.htaccess` overrides permitted for rewrite, options, headers, MIME, and access-control directives.
- A valid TLS certificate for `ashokhealthcare.in` and `www.ashokhealthcare.in`.

## Post-deployment checks

Confirm that the canonical host serves the homepage and all 38 routes in `sitemap.xml`, the 37 removed `.html` aliases redirect to trailing-slash routes, `robots.txt` references the canonical sitemap, and the current Google verification URL is reachable. Also verify query cleanup, the gallery asset fallback, custom 404, and dotfile/internal-report protection. These local changes do not verify live deployment or Google indexing.

# Deployment

## cPanel Git deployment

The repository includes `.cpanel.yml` for cPanel Git Version Control deployment. It copies the site files to `/home/ashokhea/public_html/`, the standard document root for this cPanel account. If the domain uses a different document root, update the destination in `.cpanel.yml` before deploying.

In cPanel Git Version Control, update the checked-out repository from the remote, confirm the working tree is clean, then deploy the HEAD commit. The deploy task removes the old custom `404.html` and copies `.htaccess`, `index.html`, `assets/`, `pages/`, `robots.txt`, and `sitemap.xml` while preserving their paths. It does not delete other files already in the document root; back up the existing site before the first deployment.

## Post-deployment checks

Enable SSL before deploying the HTTPS redirect in `.htaccess`. Open the homepage and each page in `pages/` on the canonical domain. Confirm that local images, stylesheets, scripts, the mobile menu, `/robots.txt`, and `/sitemap.xml` load correctly. A missing URL and old WordPress paths such as `/wp-login.php`, `/wp-content/plugins/`, and `/wp-admin/` should show the server's default 404 page and return HTTP 404. Keep these paths crawlable in `robots.txt` so search engines can see the 404 response and remove stale URLs from their index.

# Deployment

## cPanel Git deployment

The repository includes `.cpanel.yml` for cPanel Git Version Control deployment. It copies the site files to `/home/ashokhea/public_html/`, the standard document root for this cPanel account. If the domain uses a different document root, update the destination in `.cpanel.yml` before deploying.

In cPanel Git Version Control, update the checked-out repository from the remote, confirm the working tree is clean, then deploy the HEAD commit. The deploy task removes the old custom `404.html` and copies `.htaccess`, `favicon.ico`, `index.html`, `assets/`, `pages/`, `robots.txt`, and `sitemap.xml` while preserving their paths. It does not delete other files already in the document root; back up the existing site before the first deployment.

After backing up `public_html`, remove obsolete WordPress core files, plugin/theme directories, and old WordPress-generated sitemaps that are no longer used. Do not remove the current static site files or unrelated hosting/account files. Deploy the static site after cleanup.

## Post-deployment checks

Enable SSL before deploying the HTTPS redirect in `.htaccess`. Open the homepage and each page in `pages/` on the canonical domain. Confirm that local images, stylesheets, scripts, the mobile menu, `/favicon.ico`, `/robots.txt`, and `/sitemap.xml` load correctly. A missing URL and old WordPress paths such as `/wp-login.php`, `/wp-content/plugins/`, and `/wp-admin/` should return HTTP 404; old WordPress sitemap URLs should return HTTP 410. Keep these paths crawlable in `robots.txt` so search engines can see the responses and remove stale URLs from their index.

In Google Search Console, submit `https://www.ashokhealthcare.in/sitemap.xml`, inspect key service and product URLs with URL Inspection, and request indexing for priority pages. Monitor the Indexing report; sitemap submission and indexing requests do not guarantee that Google will index a URL.

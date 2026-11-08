# Deployment

## cPanel Git deployment

The repository includes `.cpanel.yml` for cPanel Git Version Control deployment. It copies the site files to `/home/ashokhea/public_html/`, the standard document root for this cPanel account. If the domain uses a different document root, update the destination in `.cpanel.yml` before deploying.

In cPanel Git Version Control, update the checked-out repository from the remote, confirm the working tree is clean, then deploy the HEAD commit. The deploy task copies `.htaccess`, `404.html`, `index.html`, `assets/`, `pages/`, `robots.txt`, and `sitemap.xml` while preserving their paths. It does not delete other files already in the document root; back up the existing site before the first deployment.

## Post-deployment checks

Enable SSL before deploying the HTTPS redirect in `.htaccess`. Open the homepage and each page in `pages/` on the canonical domain. Confirm that local images, stylesheets, scripts, the mobile menu, `/robots.txt`, `/sitemap.xml`, and the 404 page load correctly.

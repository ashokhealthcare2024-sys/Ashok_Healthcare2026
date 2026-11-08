# Ashok_Healthcare2026

Static, responsive website for Ashok Healthcare. It uses HTML, CSS, and vanilla JavaScript, with site assets in `assets/`.

## Project structure

- `index.html` — homepage
- `pages/` — individual folders for About, services, product, blog, gallery, careers, contact, privacy, and terms pages; each folder contains its own `index.html`
- `404.html` — not-found page
- `assets/css/`, `assets/js/`, `assets/images/`, `assets/gallery/`, and `assets/videos/` — site styles, scripts, images, and media

Internal page links use root-relative routes (for example, `/pages/about-us/`). `assets/js/navigation.js` renders the same shared navigation bar and footer across every page and loads the site's single Inter content font. Service content lives in its own folder and HTML page under `pages/services/service_content/`; the Services page links to each page with a card. The Services Hub is at `pages/services/service_content/services-hub/index.html`. Product cards link to equipment content under `pages/product/equipment-content/`. Blog articles live under `pages/blog/content/` and are listed on the Blog page. The ambulance page under `pages/services/service_content/` is a noindex draft and must not be linked or published until operational details are confirmed.

## Deployment

Upload the site contents (including `.htaccess`, `robots.txt`, and `sitemap.xml`) to the Bluehost cPanel document root, usually `public_html`, preserving all paths. Enable the SSL certificate in cPanel before enabling the HTTPS redirect in `.htaccess`; the redirect also normalizes the host to `www.ashokhealthcare.in`. Back up the current document root before replacing files. After deployment, check the homepage, nested pages, redirects, 404 page, `/robots.txt`, and `/sitemap.xml`, then submit the sitemap in Google Search Console.

The sitemap lists indexable pages only. The ambulance page is intentionally excluded and remains `noindex, nofollow` until operational details are confirmed.

## Contact

- Phone: [+91 78297 53538](tel:+917829753538)
- WhatsApp: [+91 78297 53538](https://wa.me/917829753538)
- Website: [ashokhealthcare.in](https://www.ashokhealthcare.in/)

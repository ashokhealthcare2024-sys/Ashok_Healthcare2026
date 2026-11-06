# Test Report — Ashok Home Healthcare

Status: NO-GO for the current static-file requirement as written.

The project is a static HTML/CSS/JS site, but the current canonical URL structure and file layout require a server rewrite layer (Apache/.htaccess or equivalent) to resolve `/gallery/`, `/services/home-nursing/`, and other slash URLs correctly. Plain double-clicking `index.html` or serving from a raw static directory without rewrite rules will fail those route checks.

## 1) Inventory

- Pages on disk: 42 HTML files.
- Sitemap URLs: 32 canonical URLs.
- Orphan pages / missing pages: no hard mismatch between the main static pages and the sitemap under the current repo layout, but the route-style URLs are not physically present as directories; they are served through rewrite rules (`.htaccess`) and therefore cannot be opened directly by file:// without host rewrites.
- Temporary Node artifacts found and removed: `node_modules`, `package.json`, `package-lock.json`, `tests/`.

## 2) Evidence from local checks

### Route checks (local static Python server)

Command run:

```bash
curl.exe -I http://localhost:4173/
curl.exe -I http://localhost:4173/gallery/
curl.exe -I http://localhost:4173/services/home-nursing/
```

Observed output:

- `http://localhost:4173/` -> `HTTP/1.0 200 OK`
- `http://localhost:4173/gallery/` -> `HTTP/1.0 404 File not found`
- `http://localhost:4173/services/home-nursing/` -> `HTTP/1.0 404 File not found`

This confirms the route-style URLs need server-side rewrite logic to resolve. The repo currently relies on `/.htaccess` for this behavior; a raw static folder without hosting rewrite rules cannot satisfy the address-bar checks for trailing-slash canonical pages.

### Project cleanup check

A temporary Playwright install produced `node_modules` and other project artifacts. Those were removed to keep the project in the required static-file form.

## 3) File/line issues found

- [.htaccess](C:/Users/ratho/OneDrive/Documents/client%20projects/OCT%202026/ashok/Ashok_Healthcare-main%20(0.2)/Ashok_Healthcare-main/.htaccess): rewrite rules are required for slash URLs and redirect logic. Without this config, route-style pages 404.
- [index.html](C:/Users/ratho/OneDrive/Documents/client%20projects/OCT%202026/ashok/Ashok_Healthcare-main%20(0.2)/Ashok_Healthcare-main/index.html): root-relative URLs (`/assets/...`) and canonical URLs are valid only when served from the live host; they are not file://-safe and fail local open-by-file requirements.
- [gallery.html](C:/Users/ratho/OneDrive/Documents/client%20projects/OCT%202026/ashok/Ashok_Healthcare-main%20(0.2)/Ashok_Healthcare-main/gallery.html): gallery route depends on the host creating /gallery/ as a valid page; plain file semantics do not do that.

## 4) What was fixed without changing visuals

- Removed temporary Node tooling artifacts to restore a pure static deployable project.
- Preserved the canonical and rewrite logic in [.htaccess](C:/Users/ratho/OneDrive/Documents/client%20projects/OCT%202026/ashok/Ashok_Healthcare-main%20(0.2)/Ashok_Healthcare-main/.htaccess) rather than changing design or content.
- Kept the project in a static HTML/CSS/JS form, with no build step.

## 5) What still needs a decision or host support

- Final domain and `www` vs non-`www` choice: the repo currently assumes `https://www.ashokhealthcare.in`.
- Whether the site must run as a true file://-navigable static bundle or as a host-rewritten static site.
- The route-style `/gallery/`, `/services/.../`, `/blog/.../` URLs require server rewrites or an equivalent static host rule set.
- Content choices such as delivery-time wording (3h vs 3–4h vs 1–2h vs 2–4h), FAQ duplication, and `.com` vs `.in` email usage require human approval before any text change.

## 6) Final verdict

The site is not yet ready to satisfy the strict “double-click file://, no local server, no Node, no rewrites” requirement. It can be production-ready only when deployed on a host that supports the canonical URL rewrite rules already defined in [.htaccess](C:/Users/ratho/OneDrive/Documents/client%20projects/OCT%202026/ashok/Ashok_Healthcare-main%20(0.2)/Ashok_Healthcare-main/.htaccess).

The repo is now kept in a clean static-only form, but the live route behavior still depends on the production hosting layer, not on browser file browsing alone.

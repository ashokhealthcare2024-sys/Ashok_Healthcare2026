/**
 * ASHOK HOME HEALTHCARE SERVICES - NAVIGATION JAVASCRIPT
 * Mega menu, responsive mobile drawer, subfolder resolution, active page highlighting, ARIA accessibility
 */

(function () {
  'use strict';

  const scriptUrl = document.currentScript && document.currentScript.src;
  const logoUrl = scriptUrl
    ? new URL('../../assets/images/ashoklogoh-tras.webp', scriptUrl).href
    : '/assets/images/ashoklogoh-tras.webp';

  function loadSiteFont() {
    const interStylesheet = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .some((link) => link.href.includes('fonts.googleapis.com/css2') && link.href.includes('family=Inter'));
    if (interStylesheet) return;

    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    const fontPreconnect = document.createElement('link');
    fontPreconnect.rel = 'preconnect';
    fontPreconnect.href = 'https://fonts.gstatic.com';
    fontPreconnect.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreconnect);

    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    stylesheet.dataset.siteFont = 'inter';
    document.head.appendChild(stylesheet);
  }

  function renderSharedSiteChrome() {
    const header = document.querySelector('header.site-header');
    if (header) {
      header.innerHTML = `
        <div class="top-bar">
          <div class="container-max d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-3 text-slate-300">
              <span class="d-none d-sm-inline-flex align-items-center gap-1 text-info fw-semibold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Yeshwanthpur, Bengaluru
              </span>
              <span class="d-inline-flex align-items-center gap-1 text-success fw-medium">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                24/7 Doorstep ICU &amp; Nursing Support
              </span>
            </div>
            <a href="tel:+917829753538" class="badge bg-primary text-white text-decoration-none px-3 py-1 rounded-pill fw-bold">+91 78297 53538</a>
          </div>
        </div>
        <nav class="main-navbar" aria-label="Main navigation">
          <div class="container-max d-flex align-items-center justify-content-between">
            <a href="/" class="d-flex align-items-center text-decoration-none">
              <img src="${logoUrl}" alt="Ashok Home Healthcare Services" class="navbar-logo-img" decoding="async">
            </a>
            <div class="d-none d-lg-flex align-items-center gap-1">
              <a href="/" class="nav-item-link" data-nav="home">Home</a>
              <a href="/pages/about-us/" class="nav-item-link" data-nav="about">About Us</a>
              <div class="nav-dropdown">
                <a href="/pages/services/" class="nav-item-link" data-nav="services">Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </a>
                <div class="mega-menu" style="width: min(360px, calc(100vw - 2rem)); grid-template-columns: 1fr;">
                  <a href="/pages/services/" class="mega-menu-item text-decoration-none"><span class="mega-menu-item-title text-primary">Home Healthcare Services</span><span class="mega-menu-item-desc">Explore nursing, ICU support, rehabilitation, and medical equipment services.</span></a>
                </div>
              </div>
              <div class="nav-dropdown nav-dropdown-end">
                <a href="/pages/blog/" class="nav-item-link" data-nav="blog">Blog &amp; Guides
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </a>
                <div class="mega-menu" style="width: min(360px, calc(100vw - 2rem)); grid-template-columns: 1fr;">
                  <a href="/pages/blog/" class="mega-menu-item text-decoration-none"><span class="mega-menu-item-title text-primary">Health Blog &amp; Care Guides</span><span class="mega-menu-item-desc">Read practical information for families arranging care at home.</span></a>
                </div>
              </div>
              <a href="/pages/product/" class="nav-item-link" data-nav="product">Product</a>
              <a href="/pages/gallery/" class="nav-item-link" data-nav="gallery">Gallery</a>
              <a href="/pages/careers/" class="nav-item-link" data-nav="careers">Careers</a>
              <a href="/pages/contact/" class="nav-item-link" data-nav="contact">Contact</a>
            </div>
            <div class="d-none d-lg-flex align-items-center gap-2">
              <a href="tel:+917829753538" class="btn-primary-custom text-decoration-none" style="padding: 0.65rem 1.4rem; font-size: 0.85rem;" aria-label="Book Assessment - Emergency Call">Book Assessment</a>
            </div>
            <div class="d-flex align-items-center gap-2 d-lg-none">
              <a href="tel:+917829753538" class="btn btn-primary btn-sm rounded-pill fw-bold px-3 text-decoration-none" aria-label="Book Care - Emergency Call">Book Care</a>
              <button type="button" id="mobileMenuToggle" class="btn btn-light rounded-3 p-2" aria-label="Toggle navigation">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              </button>
            </div>
          </div>
        </nav>`;
    } else {
      console.error('Shared site navigation could not be rendered: header.site-header is missing.');
    }

    const footerMarkup = `
      <footer class="site-footer bg-slate-950 text-slate-300 pt-5 pb-4 border-top border-slate-800" style="background-color: #020617;">
        <div class="container-max">
          <div class="row g-4 pb-4 border-bottom border-slate-800">
            <div class="col-md-4"><div class="p-3 rounded-4 bg-slate-900 border border-slate-800 d-flex align-items-start gap-3">
              <span class="p-2.5 rounded-3 bg-primary bg-opacity-10 text-primary" aria-hidden="true">☎</span>
              <div><div class="text-xs text-uppercase fw-bold text-slate-400">24/7 Helpline Desk</div><a href="tel:+917829753538" class="fs-6 fw-bold text-white text-decoration-none d-block mt-0.5">+91 78297 53538</a><div class="text-xs text-slate-400">Emergency nursing &amp; equipment dispatch</div></div>
            </div></div>
            <div class="col-md-4"><div class="p-3 rounded-4 bg-slate-900 border border-slate-800 d-flex align-items-start gap-3">
              <span class="p-2.5 rounded-3 bg-success bg-opacity-10 text-success" aria-hidden="true">◉</span>
              <div><div class="text-xs text-uppercase fw-bold text-slate-400">WhatsApp Instant Desk</div><a href="https://wa.me/917829753538?text=Hello%20Ashok%20Healthcare%2C%20I%20need%20healthcare%20support." target="_blank" rel="noopener noreferrer" class="fs-6 fw-bold text-success text-decoration-none d-block mt-0.5">+91 78297 53538</a><div class="text-xs text-slate-400">Immediate reply for Bengaluru cases</div></div>
            </div></div>
            <div class="col-md-4"><div class="p-3 rounded-4 bg-slate-900 border border-slate-800 d-flex align-items-start gap-3">
              <span class="p-2.5 rounded-3 bg-warning bg-opacity-10 text-warning" aria-hidden="true">★</span>
              <div><div class="text-xs text-uppercase fw-bold text-slate-400">Award Winning Care</div><div class="fs-6 fw-bold text-white mb-0 mt-0.5">Int'l Excellence Award 2026</div><div class="text-xs text-slate-400">Doorstep clinical leadership recognition</div></div>
            </div></div>
          </div>
          <div class="row g-4 py-4 footer-links-grid">
            <div class="col-12 col-lg-4">
              <a href="/" class="footer-logo-badge mb-3 d-inline-block"><img src="${logoUrl}" alt="Ashok Home Healthcare Services" style="height: 48px;" decoding="async"></a>
              <p class="small text-slate-400 mb-3" style="line-height: 1.7;">Ashok Home Healthcare Services provides doorstep nursing care, home ICU setups, rehabilitation, and medical equipment support across Yeshwanthpur and Bengaluru.</p>
              <address class="d-flex flex-column gap-2 text-xs text-slate-300 mb-0">
                <div class="d-flex align-items-start gap-2"><span class="text-primary" aria-hidden="true">⌖</span><span>28, Ground Floor, 4th Cross Rd, A. T. Street, Dr. Ambedkar Nagar, Yeshwanthpur, Bengaluru 560022</span></div>
                <div class="d-flex align-items-center gap-2"><span class="text-primary" aria-hidden="true">✉</span><a href="mailto:contact@ashokhealthcare.com" class="text-slate-300 text-decoration-none">contact@ashokhealthcare.com</a></div>
                <div class="d-flex align-items-center gap-2"><span class="text-success" aria-hidden="true">◷</span><span>24 hours a day, 7 days a week</span></div>
              </address>
            </div>
            <nav class="col-12 col-lg-8" aria-label="Footer navigation">
              <div class="row g-4">
                <div class="col-6 col-lg-4"><h2 class="h6 text-uppercase fw-bold text-white mb-3 tracking-wider">Company</h2><ul class="list-unstyled d-flex flex-column gap-2 small mb-0"><li><a href="/pages/about-us/">About Ashok Healthcare</a></li><li><a href="/pages/careers/">Careers &amp; Vacancies</a></li><li><a href="/pages/gallery/">Photo &amp; Video Gallery</a></li></ul></div>
                <div class="col-6 col-lg-4"><h2 class="h6 text-uppercase fw-bold text-white mb-3 tracking-wider">Care &amp; Equipment</h2><ul class="list-unstyled d-flex flex-column gap-2 small mb-0"><li><a href="/pages/services/">Home Healthcare Services</a></li><li><a href="/pages/product/">Medical Equipment</a></li><li><a href="/pages/blog/">Health Guides</a></li></ul></div>
                <div class="col-6 col-lg-4"><h2 class="h6 text-uppercase fw-bold text-white mb-3 tracking-wider">Contact &amp; Legal</h2><ul class="list-unstyled d-flex flex-column gap-2 small mb-0"><li><a href="/pages/contact/">Contact &amp; Dispatch Hub</a></li><li><a href="tel:+917829753538">Call +91 78297 53538</a></li><li><a href="/pages/privacy/">Privacy Policy</a></li><li><a href="/pages/terms/">Terms of Service</a></li></ul></div>
              </div>
            </nav>
          </div>
          <div class="pt-4 border-top border-slate-800 d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between small text-slate-500 gap-2">
            <div><span>© <span id="currentYear">2026</span> Ashok Home Healthcare Services. All Rights Reserved.</span><span class="d-none d-sm-inline mx-1 text-slate-600">|</span><span class="d-block d-sm-inline text-slate-400 mt-1 mt-sm-0">Design By <a href="tel:+918197473097" class="text-slate-300 fw-semibold text-decoration-none">Faasadot (8197473097)</a></span></div>
            <div class="d-flex align-items-center gap-2 gap-sm-3 text-slate-400 mt-1 mt-sm-0"><a href="https://maps.app.goo.gl/AYZDX2eLoGjnKWXC9" target="_blank" rel="noopener noreferrer" class="text-slate-400 text-decoration-none">Google Maps Direction</a><span class="text-slate-600">|</span><span>Yeshwanthpur, Bengaluru</span></div>
          </div>
          <div class="pt-3 mt-3 border-top border-slate-800 text-slate-500 small" style="font-size: 0.76rem; line-height: 1.6;"><span class="fw-semibold text-slate-400">Clinical &amp; Medical Disclaimer:</span> The healthcare and medical information on this website is provided solely for general informational and patient educational purposes. It does not substitute for professional medical advice, clinical diagnosis, or individualized treatment plans. Nursing interventions, home ICU setups, and medical equipment use must be conducted in accordance with the guidance and valid prescription of a registered medical practitioner or treating hospital.</div>
        </div>
      </footer>`;
    const existingFooter = document.querySelector('footer.site-footer');
    if (existingFooter) {
      existingFooter.outerHTML = footerMarkup;
    } else {
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('afterend', footerMarkup);
      } else {
        document.body.insertAdjacentHTML('beforeend', footerMarkup);
      }
    }

    const currentYear = document.getElementById('currentYear');
    if (currentYear) currentYear.textContent = String(new Date().getFullYear());
  }

  function initFileProtocolCompat() {
    if (window.location.protocol !== 'file:') return;

    const siteRoot = scriptUrl ? new URL('../../', scriptUrl) : null;
    if (!siteRoot) return;

    function resolveFileLink(href) {
      if (!href || href.startsWith('tel:') || href.startsWith('mailto:') ||
        href.startsWith('#') || href.startsWith('javascript:')) return null;

      let target;
      try {
        target = href.startsWith('/') && !href.startsWith('//')
          ? new URL(href.slice(1), siteRoot)
          : new URL(href, window.location.href);
      } catch (error) {
        console.warn('Unable to resolve local navigation link:', href, error);
        return null;
      }

      const isSiteLink = /^https?:$/.test(target.protocol) &&
        /^(www\.)?ashokhealthcare\.in$/i.test(target.hostname);
      const isLocalLink = target.protocol === 'file:' &&
        target.pathname.toLowerCase().startsWith(siteRoot.pathname.toLowerCase());
      if (!isSiteLink && !isLocalLink) return null;

      let path = isSiteLink
        ? target.pathname.replace(/^\/+/, '')
        : target.pathname.slice(siteRoot.pathname.length);
      if (!path || path.endsWith('/')) {
        path += 'index.html';
      } else if (!/\.[^/]+$/.test(path)) {
        path += '/index.html';
      }

      const localUrl = new URL(path, siteRoot);
      localUrl.search = target.search;
      localUrl.hash = target.hash;
      return localUrl.href;
    }

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;

      const resolved = resolveFileLink(link.getAttribute('href'));
      if (resolved) {
        event.preventDefault();
        window.location.href = resolved;
      }
    }, true);

    const rewriteLinks = () => {
      document.querySelectorAll('a[href]').forEach((link) => {
        const resolved = resolveFileLink(link.getAttribute('href'));
        if (resolved) link.setAttribute('href', resolved);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', rewriteLinks);
    } else {
      rewriteLinks();
    }
  }

  function initAll() {
    loadSiteFont();
    renderSharedSiteChrome();
    ensureMobileDrawer();
    initFileProtocolCompat();
    initMobileDrawer();
    highlightActiveNavLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  function ensureMobileDrawer() {
    if (document.getElementById('mobileDrawer')) return;

    // Backdrop
    let backdrop = document.getElementById('drawerBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'drawerBackdrop';
      backdrop.className = 'drawer-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    // Drawer
    const drawer = document.createElement('aside');
    drawer.id = 'mobileDrawer';
    drawer.className = 'mobile-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Mobile Navigation Menu');
    drawer.setAttribute('aria-hidden', 'true');

    drawer.innerHTML = `
      <div class="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3 flex-shrink-0">
        <a href="/" class="d-flex align-items-center text-decoration-none">
          <img src="${logoUrl}" alt="Ashok Home Healthcare Services" style="height: 38px; width: auto; max-width: 200px; object-fit: contain;">
        </a>
        <button type="button" id="closeMobileDrawer" class="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="d-flex flex-column gap-1.5 mb-4 overflow-y-auto flex-grow-1" style="scrollbar-width: thin;">
        <a href="/" class="mobile-nav-item" data-nav="home">Home</a>
        <a href="/pages/about-us/" class="mobile-nav-item" data-nav="about">About Us</a>
        <a href="/pages/product/" class="mobile-nav-item" data-nav="product">Product</a>
        <div class="mobile-nav-group my-1">
          <div class="d-flex align-items-center justify-content-between p-2 rounded-3 bg-light mobile-services-toggle" style="cursor: pointer;" role="button" tabindex="0" aria-expanded="false" aria-controls="mobileServicesList" onclick="toggleMobileServicesMenu(event)">
            <span class="fw-bold text-slate-800 small user-select-none">Services</span>
            <span class="nav-toggle-sub text-slate-600 p-1 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; pointer-events: none;" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transition: transform 0.25s ease;"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </div>
          <div id="mobileServicesList" class="mobile-services-list ps-3 flex-column gap-1 border-start border-2 border-primary-200 ms-2 mt-2" style="display: none;">
            <a href="/pages/services/" class="mobile-nav-subitem text-slate-600 text-decoration-none">Explore home healthcare services</a>
          </div>
        </div>

        <!-- Bangalore Patient & Care Guides Group -->
        <div class="mobile-nav-group my-1">
          <div class="d-flex align-items-center justify-content-between p-2 rounded-3 bg-light mobile-guides-toggle" style="cursor: pointer;" role="button" tabindex="0" aria-expanded="false" aria-controls="mobileGuidesList" onclick="toggleMobileGuidesMenu(event)">
            <span class="fw-bold text-slate-800 small user-select-none">Bangalore Care Guides</span>
            <span class="nav-toggle-sub text-slate-600 p-1 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; pointer-events: none;" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transition: transform 0.25s ease;"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </div>
          <div id="mobileGuidesList" class="mobile-guides-list ps-3 flex-column gap-1 border-start border-2 border-primary-200 ms-2 mt-2" style="display: none;">
            <a href="/pages/blog/" class="mobile-nav-subitem text-slate-600 text-decoration-none">Read health guides and articles</a>
          </div>
        </div>

        
        <a href="/pages/gallery/" class="mobile-nav-item" data-nav="gallery">Photo &amp; Video Gallery</a>
        <a href="/pages/blog/" class="mobile-nav-item" data-nav="blog">Healthcare Blogs</a>
        <a href="/pages/careers/" class="mobile-nav-item" data-nav="careers">Careers &amp; Vacancies</a>
        <a href="/pages/contact/" class="mobile-nav-item" data-nav="contact">Contact &amp; Hub</a>
      </div>

      <div class="pt-3 border-top d-flex flex-column gap-2 mt-auto flex-shrink-0">
        <a href="tel:+917829753538" class="btn-primary-custom w-100 justify-content-center py-2.5 text-decoration-none" aria-label="Emergency Call Desk">
          Book Assessment
        </a>
        <a href="tel:+917829753538" class="btn btn-outline-primary w-100 py-2 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 text-decoration-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call +91 78297 53538
        </a>
        <a href="https://wa.me/917829753538?text=Hello%20Ashok%20Healthcare%2C%20I%20need%20healthcare%20support." target="_blank" rel="noreferrer" class="btn btn-success w-100 py-2 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 text-decoration-none">
          WhatsApp Emergency Desk
        </a>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  function openMobileDrawerAction() {
    const drawer = document.getElementById('mobileDrawer') || document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('drawerBackdrop') || document.getElementById('mobileNavBackdrop');
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
    }
    if (backdrop) {
      backdrop.classList.add('show');
      backdrop.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileDrawerAction() {
    const drawer = document.getElementById('mobileDrawer') || document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('drawerBackdrop') || document.getElementById('mobileNavBackdrop');
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    }
    if (backdrop) {
      backdrop.classList.remove('show');
      backdrop.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileServicesMenu(e, forceState) {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof e === 'boolean') {
      forceState = e;
    }
    const list = document.getElementById('mobileServicesList');
    const toggles = document.querySelectorAll('.mobile-services-toggle');
    if (!list) return;

    const isCurrentlyOpen = list.classList.contains('show') || list.classList.contains('open') || window.getComputedStyle(list).display === 'flex';
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    if (shouldOpen) {
      list.classList.add('show', 'open');
      list.style.setProperty('display', 'flex', 'important');
    } else {
      list.classList.remove('show', 'open');
      list.style.setProperty('display', 'none', 'important');
    }

    toggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      const icon = toggle.querySelector('svg');
      if (icon) {
        icon.style.transform = shouldOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  function toggleMobileGuidesMenu(e, forceState) {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof e === 'boolean') {
      forceState = e;
    }
    const list = document.getElementById('mobileGuidesList');
    const toggles = document.querySelectorAll('.mobile-guides-toggle');
    if (!list) return;

    const isCurrentlyOpen = list.classList.contains('show') || list.classList.contains('open') || window.getComputedStyle(list).display === 'flex';
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    if (shouldOpen) {
      list.classList.add('show', 'open');
      list.style.setProperty('display', 'flex', 'important');
    } else {
      list.classList.remove('show', 'open');
      list.style.setProperty('display', 'none', 'important');
    }

    toggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      const icon = toggle.querySelector('svg');
      if (icon) {
        icon.style.transform = shouldOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  // Export functions globally
  window.closeMobileDrawerAction = closeMobileDrawerAction;
  window.toggleMobileServicesMenu = toggleMobileServicesMenu;
  window.toggleMobileGuidesMenu = toggleMobileGuidesMenu;

  /**
   * Initializes event listeners via robust event delegation
   */
  function initMobileDrawer() {
    // Event delegation on document so dynamic headers/buttons always work
    document.addEventListener('click', (e) => {
      // Toggle button
      const toggle = e.target.closest('#mobileMenuToggle, .mobile-menu-toggle');
      if (toggle) {
        e.preventDefault();
        openMobileDrawerAction();
        return;
      }

      // Close button
      const close = e.target.closest('#closeMobileDrawer, #mobileNavClose, .close-drawer-btn');
      if (close) {
        e.preventDefault();
        closeMobileDrawerAction();
        return;
      }

      // Backdrop click
      if (e.target.matches('#drawerBackdrop, #mobileNavBackdrop') || e.target.closest('#drawerBackdrop, #mobileNavBackdrop')) {
        closeMobileDrawerAction();
        return;
      }

      const servicesToggle = e.target.closest('.mobile-services-toggle');
      if (servicesToggle) {
        toggleMobileServicesMenu(e);
        return;
      }
      const guidesToggle = e.target.closest('.mobile-guides-toggle');
      if (guidesToggle) {
        toggleMobileGuidesMenu(e);
        return;
      }

      // Any navigation link click inside drawer
      const navLink = e.target.closest('.mobile-drawer a, .mobile-nav-drawer a');
      if (navLink && !navLink.classList.contains('nav-toggle-sub')) {
        const href = navLink.getAttribute('href');
        if (href && href.startsWith('#')) {
          closeMobileDrawerAction();
        }
        // For external and page navigation links, let browser navigate naturally without aborting
      }
    });

    // Keyboard listener for Escape and Enter/Space on toggle
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const drawer = document.getElementById('mobileDrawer') || document.getElementById('mobileNavDrawer');
        if (drawer && drawer.classList.contains('open')) {
          closeMobileDrawerAction();
        }
      }
      if ((e.key === 'Enter' || e.key === ' ') &&
        document.activeElement && document.activeElement.classList.contains('mobile-services-toggle')) {
        e.preventDefault();
        toggleMobileServicesMenu();
      }
    });
  }

  /**
   * Highlights active navigation links based on current pathname
   */
  function highlightActiveNavLink() {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-item-link, .mobile-nav-item, .mobile-nav-subitem');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const targetPath = new URL(href, window.location.href).pathname.toLowerCase();

      // Check homepage
      if (targetPath === '/' &&
        (currentPath === '/' || currentPath.endsWith('/index.html'))) {
        link.classList.add('active');
      } else if (targetPath !== '/' &&
        (currentPath === targetPath ||
          (targetPath === '/pages/services/' && currentPath.startsWith('/pages/services/')) ||
        (targetPath === '/pages/product/' && currentPath.startsWith('/pages/product/')) ||
        (targetPath === '/pages/blog/' && currentPath.startsWith('/pages/blog/')))) {
        link.classList.add('active');
      }
    });

  }
})();

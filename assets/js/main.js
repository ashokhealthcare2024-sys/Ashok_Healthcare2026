/**
 * Local File Protocol (file://) Compatibility Handler
 * When testing pages offline by double-clicking HTML files without a web server,
 * browsers show a folder directory listing instead of serving index.html.
 * This automatically appends index.html to folder links so the site navigates seamlessly offline.
 */
(function initFileProtocolCompat() {
  if (window.location.protocol !== 'file:') return;

  const scriptUrl = document.currentScript && document.currentScript.src;
  const siteRoot = scriptUrl ? new URL('../../', scriptUrl) : null;

  function resolveFileLink(href) {
    if (!siteRoot || !href || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) {
      return null;
    }

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

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const resolved = resolveFileLink(link.getAttribute('href'));
    if (resolved) {
      e.preventDefault();
      window.location.href = resolved;
    }
  }, true);

  const rewriteLinks = () => {
    document.querySelectorAll('a[href]').forEach(a => {
      const resolved = resolveFileLink(a.getAttribute('href'));
      if (resolved) a.setAttribute('href', resolved);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rewriteLinks);
  } else {
    rewriteLinks();
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initHeaderOffset();
  initNavbarScroll();
  initScrollToTop();
  updateCurrentYear();
});

/**
 * Dynamically computes and updates the site header height variable
 * Prevents fixed navbar from overlapping page banners or content across devices
 */
function initHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeight = () => {
    const height = header.offsetHeight;
    if (height > 0) {
      document.documentElement.style.setProperty('--site-header-height', `${height}px`);
    }
  };

  updateHeight();
  window.addEventListener('resize', updateHeight, { passive: true });
  window.addEventListener('orientationchange', updateHeight, { passive: true });
}

/**
 * Toggles navbar background styling on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.main-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on page load
}

/**
 * Controls visibility and click event for the Scroll-To-Top button
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Updates dynamic year in copyright notice
 */
function updateCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

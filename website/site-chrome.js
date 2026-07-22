(() => {
  const isHome = (element) => element.hasAttribute('home-page');
  const href = (home, local, fallback) => home ? local : fallback;
  const solutionIndustries = [
    {
      label: 'Manufacturing and distribution',
      icon: '<path d="M2 13h12M2.8 13V6.6l3.4 2.3V6.6l3.4 2.3V3.4h3.4V13"/>'
    },
    {
      label: 'SaaS and technology',
      icon: '<rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="m6.2 7.2-1.6 1.6 1.6 1.6M9.8 7.2l1.6 1.6-1.6 1.6"/>'
    },
    {
      label: 'Healthcare and medical',
      icon: '<path d="M6.4 2.5h3.2v3.9h3.9v3.2H9.6v3.9H6.4V9.6H2.5V6.4h3.9z"/>'
    },
    {
      label: 'Trades and field services',
      icon: '<path d="M13.4 4.4a3.2 3.2 0 0 1-4.1 3.1l-5 5-1.8-1.8 5-5a3.2 3.2 0 0 1 3.9-3.9L9.2 4l2.2 2.2z"/>'
    }
  ];

  const industryMenuLinks = solutionIndustries
    .map(({ label }) => `<a class="sc-menu-link" href="solutions-coming-soon.html">${label}</a>`)
    .join('');

  class ScorecardSiteHeader extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.style.display = 'contents';

      const home = isHome(this);
      const active = this.getAttribute('active') || '';
      const tone = this.getAttribute('tone') === 'light' ? 'light' : 'dark';
      const toneMode = this.getAttribute('tone-mode') || 'fixed';
      const ctaLabel = this.getAttribute('cta-label') || 'Build your growth plan';
      const ctaShortLabel = this.getAttribute('cta-short-label') || 'Build plan';
      const ctaHref = this.getAttribute('cta-href') || href(home, '#see-your-market', 'index.html#see-your-market');

      this.innerHTML = `
        <div class="site-header-wrap" id="site-header-wrap">
          <header class="site-header on-${tone}" id="site-header">
            <div class="header-inner">
              <a href="${href(home, '#top', 'index.html')}" aria-label="Scorecard home" class="brand-link">
                <span class="brand-marks">
                  <img id="logo-dark" src="design-system/assets/scorecard-mark-ondark.svg" alt="" />
                  <img id="logo-light" class="light" src="design-system/assets/scorecard-mark.svg" alt="" aria-hidden="true" />
                </span>
                <span class="brand-word" id="brand-word">Scorecard</span>
              </a>
              <nav class="site-nav" aria-label="Primary navigation">
                <div class="nav-svc" id="nav-svc">
                  <a class="nav-link${active === 'what' ? ' active' : ''}" href="${href(home, '#features', 'index.html#features')}" data-nav-section="services"${active === 'what' ? ' aria-current="page"' : ''}>What we do <span class="chev" id="chev">▼</span></a>
                  <div class="svc-menu" id="svc-menu"><div class="svc-menu-inner">
                    <a class="sc-menu-link" href="what-we-do-coming-soon.html">Growth plan</a>
                    <a class="sc-menu-link" href="what-we-do-coming-soon.html">Account sourcing + scoring</a>
                    <a class="sc-menu-link" href="what-we-do-coming-soon.html">Fractional outbound</a>
                  </div></div>
                </div>
                <div class="nav-svc solutions-menu">
                  <a class="nav-link${active === 'solutions' ? ' active' : ''}" href="solutions-coming-soon.html"${active === 'solutions' ? ' aria-current="page"' : ''}>Solutions <span class="chev">▼</span></a>
                  <div class="svc-menu"><div class="svc-menu-inner">
                    <div class="solution-menu-group"><span class="solution-menu-label">By objective</span><a class="sc-menu-link" href="solutions-coming-soon.html">Sell to companies</a><a class="sc-menu-link" href="solutions-coming-soon.html">Invest in companies</a><a class="sc-menu-link" href="solutions-coming-soon.html">Acquire companies</a><a class="sc-menu-link" href="solutions-coming-soon.html">Buy from companies</a><a class="sc-menu-link" href="solutions-coming-soon.html">Hire from companies</a></div>
                    <div class="solution-menu-group"><span class="solution-menu-label">By role</span><a class="sc-menu-link" href="solutions-coming-soon.html">CEOs and founders</a><a class="sc-menu-link" href="solutions-coming-soon.html">Revenue leaders</a><a class="sc-menu-link" href="private-equity.html">Private equity</a><a class="sc-menu-link solution-menu-new" href="eta-search.html"><span>ETA search</span><span class="solution-new-badge">New</span></a></div>
                    <div class="solution-menu-group"><span class="solution-menu-label">By industry</span>${industryMenuLinks}</div>
                    <a class="solution-menu-all" href="solutions-coming-soon.html">Explore all solutions →</a>
                  </div></div>
                </div>
                <a class="nav-link" href="${href(home, '#pricing', 'index.html#pricing')}" data-nav-section="pricing">Pricing</a>
                <a class="nav-link" href="https://app.scorecardgtm.com">Client login</a>
                <a class="hdr-cta" id="hdr-cta" href="${ctaHref}"><span class="hdr-cta-full">${ctaLabel}</span><span class="hdr-cta-short">${ctaShortLabel}</span></a>
              </nav>
              <button class="mobile-nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav-panel" aria-label="Open navigation">
                <span></span><span></span><span></span>
              </button>
            </div>
            <nav class="mobile-nav-panel" id="mobile-nav-panel" aria-label="Mobile navigation" aria-hidden="true">
              <a href="${href(home, '#features', 'index.html#features')}"${active === 'what' ? ' aria-current="page"' : ''}>What we do</a>
              <a href="solutions-coming-soon.html"${active === 'solutions' ? ' aria-current="page"' : ''}>Solutions</a>
              <a href="${href(home, '#pricing', 'index.html#pricing')}">Pricing</a>
              <a href="https://app.scorecardgtm.com">Client login</a>
              <a class="mobile-nav-cta" href="${ctaHref}">${ctaLabel}</a>
            </nav>
          </header>
        </div>`;

      const toggle = this.querySelector('.mobile-nav-toggle');
      const panel = this.querySelector('.mobile-nav-panel');
      const wrap = this.querySelector('.site-header-wrap');
      const closeMenu = ({ restoreFocus = false } = {}) => {
        panel.classList.remove('is-open');
        panel.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        document.body.classList.remove('mobile-nav-open');
        if (restoreFocus) toggle.focus();
      };
      const openMenu = () => {
        panel.classList.add('is-open');
        panel.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close navigation');
        document.body.classList.add('mobile-nav-open');
        panel.querySelector('a')?.focus();
      };
      toggle.addEventListener('click', () => {
        if (toggle.getAttribute('aria-expanded') === 'true') closeMenu();
        else openMenu();
      });
      panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu({ restoreFocus: true });
      });
      window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
      });
      const updateHeader = () => {
        wrap.classList.toggle('is-scrolled', window.scrollY > 20);
        if (toneMode !== 'adaptive') return;
        const probe = window.innerWidth <= 900 ? 36 : 46;
        const section = Array.from(document.querySelectorAll('[data-header-tone]'))
          .find(element => {
            const rect = element.getBoundingClientRect();
            return rect.top <= probe && rect.bottom >= probe;
          });
        if (!section) return;
        const light = section.dataset.headerTone === 'light';
        const header = this.querySelector('.site-header');
        header.classList.toggle('on-light', light);
        header.classList.toggle('on-dark', !light);
      };
      updateHeader();
      window.addEventListener('scroll', updateHeader, { passive: true });
      window.addEventListener('resize', updateHeader);
    }
  }

  class ScorecardIndustryTickerItems extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.style.display = 'contents';
      this.innerHTML = solutionIndustries
        .map(({ label, icon }) => `<span class="tick-item"><svg viewBox="0 0 16 16">${icon}</svg>${label}</span>`)
        .join('');
    }
  }

  class ScorecardSiteFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.style.display = 'contents';
      const home = isHome(this);

      this.innerHTML = `
        ${home ? '' : '<div class="standalone-footer">'}
        <footer class="footer">
          <div>
            <a class="footer-brand" href="${href(home, '#top', 'index.html')}"><img src="design-system/assets/scorecard-mark-ondark.svg" alt="" /><span class="brand-word">Scorecard</span></a>
            <div class="footer-meta footer-tagline">Make revenue more predictable.</div>
          </div>
          <div>
            <nav class="footer-links" aria-label="Footer navigation"><a href="${href(home, '#features', 'index.html#features')}">What we do</a><a href="solutions-coming-soon.html">Solutions</a><a href="${href(home, '#pricing', 'index.html#pricing')}">Pricing</a><a href="https://app.scorecardgtm.com">Client login</a><a href="#top">Back to top ↑</a></nav>
            <div class="footer-meta footer-copyright">© 2026 Scorecard</div>
          </div>
        </footer>
        ${home ? '' : '</div>'}`;
    }
  }

  if (!customElements.get('scorecard-site-header')) customElements.define('scorecard-site-header', ScorecardSiteHeader);
  if (!customElements.get('scorecard-site-footer')) customElements.define('scorecard-site-footer', ScorecardSiteFooter);
  if (!customElements.get('scorecard-industry-ticker-items')) customElements.define('scorecard-industry-ticker-items', ScorecardIndustryTickerItems);
})();

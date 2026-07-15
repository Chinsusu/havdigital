(() => {
  'use strict';

  const loader = document.currentScript;
  const measurementId = loader?.dataset.measurementId;
  const storageKey = 'hav_analytics_consent_v1';
  const supportedEvents = new Set([
    'view_product',
    'select_plan',
    'start_checkout',
    'sign_up',
    'purchase',
    'contact_sales',
  ]);

  let consent = readConsent();
  let googleTagLoaded = false;

  function readConsent() {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === 'granted' || value === 'denied' ? value : 'unknown';
    } catch {
      return 'unknown';
    }
  }

  function saveConsent(value) {
    consent = value;
    try {
      window.localStorage.setItem(storageKey, value);
    } catch {
      // The choice still applies to the current page when storage is unavailable.
    }
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }

  function loadGoogleTag() {
    if (googleTagLoaded || !measurementId || consent !== 'granted') return;

    googleTagLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || gtag;
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: true,
    });

    const tag = document.createElement('script');
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(tag);
  }

  function pageType() {
    const path = window.location.pathname;
    if (path === '/') return 'home';
    if (path === '/contact') return 'contact';
    if (path === '/about') return 'trust';
    if (['/privacy', '/terms', '/refund-policy', '/acceptable-use'].includes(path)) return 'legal';
    if (['/abuse', '/sla', '/status'].includes(path)) return 'operations';
    if (path === '/api-docs') return 'docs';
    return 'other';
  }

  function cleanParameters(parameters) {
    return Object.fromEntries(
      Object.entries(parameters)
        .filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value))
        .map(([key, value]) => [key, typeof value === 'string' ? value.slice(0, 100) : value]),
    );
  }

  function track(name, parameters = {}) {
    if (consent !== 'granted' || !supportedEvents.has(name)) return false;
    loadGoogleTag();
    window.gtag('event', name, cleanParameters({ page_type: pageType(), ...parameters }));
    return true;
  }

  function deleteAnalyticsCookies() {
    const names = document.cookie
      .split(';')
      .map((value) => value.trim().split('=')[0])
      .filter((name) => name === '_ga' || name.startsWith('_ga_'));

    for (const name of names) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.havdigital.com; SameSite=Lax`;
    }
  }

  function boot() {
    const panel = document.querySelector('[data-analytics-consent]');
    const accept = document.querySelector('[data-analytics-accept]');
    const reject = document.querySelector('[data-analytics-reject]');

    const openPanel = (event) => {
      event?.preventDefault();
      if (!panel) return;
      panel.hidden = false;
      accept?.focus();
    };

    const closePanel = () => {
      if (panel) panel.hidden = true;
    };

    accept?.addEventListener('click', () => {
      saveConsent('granted');
      loadGoogleTag();
      closePanel();
    });

    reject?.addEventListener('click', () => {
      saveConsent('denied');
      if (googleTagLoaded && window.gtag) {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
        deleteAnalyticsCookies();
      }
      closePanel();
    });

    document.querySelectorAll('[data-analytics-consent-open]').forEach((button) => {
      button.addEventListener('click', openPanel);
    });

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;

      const configuredEvent = link.dataset.analyticsEvent;
      if (configuredEvent) {
        track(configuredEvent, {
          service: link.dataset.analyticsService || 'unknown',
          plan: link.dataset.analyticsPlan || 'unknown',
          location: link.dataset.analyticsLocation || 'unknown',
          link_text: link.textContent.trim(),
        });
        return;
      }

      if (link.href.startsWith('mailto:')) {
        track('contact_sales', {
          method: 'email',
          link_text: link.textContent.trim(),
        });
      }
    });

    if ('IntersectionObserver' in window) {
      const observed = new WeakSet();
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || observed.has(entry.target)) continue;
          const sent = track('view_product', {
            service: entry.target.dataset.analyticsViewProduct,
          });
          if (sent) {
            observed.add(entry.target);
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.3 });

      document.querySelectorAll('[data-analytics-view-product]').forEach((element) => observer.observe(element));
    }

    if (consent === 'unknown') openPanel();
  }

  window.havAnalytics = Object.freeze({
    events: Object.freeze([...supportedEvents]),
    track,
  });

  if (consent === 'granted') loadGoogleTag();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

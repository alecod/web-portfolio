// components/MatomoTracker.tsx
import React from 'react';

declare global {
  interface Window {
    _paq: any[];
  }
}

const MatomoTracker = () => {
  React.useEffect(() => {
    window._paq = window._paq || [];
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
    (() => {
      const u = "http://localhost:8888/";
      window._paq.push(['setTrackerUrl', u + 'matomo.php']);
      window._paq.push(['setSiteId', '1']);
      const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.async = true; g.src = u + 'matomo.js';
      if (s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
    })();
  }, []);

  return null; // Não há necessidade de retornar algo para renderizar
};

export default MatomoTracker;
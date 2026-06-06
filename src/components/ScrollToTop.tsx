import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from '../lib/analytics';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Log pageview on route change
    analytics.pageview(pathname);
  }, [pathname]);

  return null;
}

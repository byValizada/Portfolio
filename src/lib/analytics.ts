// Mock implementation of Google Analytics / Tracking

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const pageview = (url: string) => {
  // If GA was loaded, we would call window.gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } else {
    console.log(`[Analytics Mock] Pageview: ${url}`);
  }
};

export const event = ({ action, category, label, value }: { action: string, category: string, label: string, value?: number }) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.log(`[Analytics Mock] Event: [${category}] ${action} - ${label}`);
  }
};

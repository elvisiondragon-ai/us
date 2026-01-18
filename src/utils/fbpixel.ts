// Facebook Pixel Types
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const initFacebookPixelWithLogging = (pixelId: string) => {
  if (typeof window === 'undefined') return;
  
  // Basic FB Pixel Init Code
  if (window.fbq) return;
  
  const n: any = window.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  
  const t = document.createElement('script');
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(t, s);

  window.fbq('init', pixelId);
  console.log(`[FBPixel] Initialized with ID: ${pixelId}`);
};

export const trackPageViewEvent = (data: any = {}, eventId?: string, pixelId?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const options = eventId ? { eventID: eventId } : {};
    window.fbq('track', 'PageView', data, options);
    console.log('[FBPixel] Track PageView', { data, eventId, pixelId });
  }
};

export const trackAddToCartEvent = (data: any, eventId?: string, pixelId?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const options = eventId ? { eventID: eventId } : {};
    window.fbq('track', 'AddToCart', data, options);
    console.log('[FBPixel] Track AddToCart', { data, eventId, pixelId });
  }
};

export const trackCustomEvent = (eventName: string, data: any = {}, eventId?: string, pixelId?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const options = eventId ? { eventID: eventId } : {};
    window.fbq('trackCustom', eventName, data, options);
    console.log(`[FBPixel] Track Custom ${eventName}`, { data, eventId, pixelId });
  }
};

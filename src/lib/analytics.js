// lib/analytics.js

/**
 * Sends a custom event to Google Analytics.
 * @param {string} action - The name of the event (e.g., 'click_external_link').
 * @param {object} params - A collection of additional data to send.
 */
export const sendGAEvent = (action, params) => {
  // Check if the window.gtag function exists
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    // This can happen if GA is blocked or hasn't loaded
    console.warn('Google Analytics gtag function not found.');
  }
};
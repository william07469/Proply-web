// Centralized security headers applied to all SSR responses.
// Static asset caching stays in nitro's generated _headers file; document-level
// hardening lives here because nitro regenerates .output/public/_headers on
// every build, which would overwrite a hand-written copy.

const isProd = import.meta.env.PROD;

// 'unsafe-inline' on script-src is required by the framework's inline
// hydration/bootstrap scripts and the JSON-LD block rendered into <head>.
// Dev additionally needs eval/websocket allowances for Vite HMR.
const scriptSrc = ["'self'", "'unsafe-inline'", isProd ? "" : "'unsafe-eval'"]
  .filter(Boolean)
  .join(" ");

const connectSrc = ["'self'", "data:", isProd ? "" : "ws:"].filter(Boolean).join(" ");

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
  "font-src 'self' https://fonts.gstatic.com https://api.fontshare.com",
  "img-src 'self' data:",
  `connect-src ${connectSrc}`,
  // Allows the Lovable editor preview while still blocking arbitrary framing.
  "frame-ancestors 'self' https://lovable.dev https://*.lovable.app",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
].join("; ");

export const SECURITY_HEADERS: Record<string, string> = {
  "content-security-policy": contentSecurityPolicy,
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy":
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
};

/**
 * Applies security headers in-place on the response.
 * Mutating headers (instead of rebuilding the Response) preserves the
 * streamed body — reconstructing broke SSR output in dev.
 */
export function withSecurityHeaders(response: Response): Response {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!response.headers.has(key)) response.headers.set(key, value);
  }
  return response;
}

/** Headers for bare-bones fallback responses built outside the middleware chain. */
export function securityHeadersInit(): Record<string, string> {
  return { ...SECURITY_HEADERS, "content-type": "text/html; charset=utf-8" };
}

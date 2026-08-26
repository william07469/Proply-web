// Security headers applied to all SSR responses.
// CSP removed — Vercel platform adds its own; double CSP causes data: fetch blocks.

export const SECURITY_HEADERS: Record<string, string> = {
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

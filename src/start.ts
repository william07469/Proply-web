import {
  createStart,
  createCsrfMiddleware,
  createMiddleware,
} from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { securityHeadersInit, SECURITY_HEADERS } from "./lib/security-headers";

/**
 * TanStack Start middleware `next()` resolves to a context object whose
 * `response` field holds the Response. Handle that shape (and a bare
 * Response, defensively) without ever breaking rendering.
 */
function applyHeaders(target: unknown): void {
  const res = target as { headers?: Headers } | undefined | null;
  if (!res || typeof res.headers?.set !== "function") return;
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!res.headers.has(key)) {
      try {
        res.headers.set(key, value);
      } catch {
        // Immutable/locked headers: skip rather than fail the request.
      }
    }
  }
}

const securityHeadersMiddleware = createMiddleware().server(
  async ({ next }) => {
    const result = await next();
    if (result instanceof Response) {
      applyHeaders(result);
    } else if (result && typeof result === "object") {
      applyHeaders((result as { response?: unknown }).response);
    }
    return result;
  },
);

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: securityHeadersInit(),
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [
    securityHeadersMiddleware,
    errorMiddleware,
    csrfMiddleware,
  ],
}));

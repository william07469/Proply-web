import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  securityHeadersInit,
  withSecurityHeaders,
} from "./lib/security-headers";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  response: Response,
): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(
    consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`),
  );
  return new Response(renderErrorPage(), {
    status: 500,
    headers: securityHeadersInit(),
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as {
      unhandled?: unknown;
      message?: unknown;
    };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const BASE_URL = "https://proply.com.tr";

const SITEMAP_PAGES = [
  { loc: "/",          priority: "1.0", changefreq: "weekly"  },
  { loc: "/#services", priority: "0.8", changefreq: "monthly" },
  { loc: "/#works",    priority: "0.8", changefreq: "monthly" },
  { loc: "/#process",  priority: "0.7", changefreq: "monthly" },
  { loc: "/#pricing",  priority: "0.7", changefreq: "monthly" },
  { loc: "/#contact",  priority: "0.9", changefreq: "monthly" },
  { loc: "/blog",      priority: "0.8", changefreq: "weekly"  },
  { loc: "/blog/web-sitesi-olmayan-isletme-ne-kaybeder", priority: "0.7", changefreq: "monthly" },
  { loc: "/blog/web-sitesi-maliyeti-2026",               priority: "0.7", changefreq: "monthly" },
  { loc: "/blog/kucuk-isletme-icin-seo-rehberi",         priority: "0.7", changefreq: "monthly" },
  { loc: "/blog/cafe-restoran-web-sitesi-neden-onemli",  priority: "0.7", changefreq: "monthly" },
];

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];
  const urls = SITEMAP_PAGES.map(
    (p) => `
  <url>
    <loc>${BASE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  ).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;
}

function buildRobots(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    "Disallow: /_build/",
    "Disallow: /__server",
    "",
    `Sitemap: ${BASE_URL}/sitemap.xml`,
  ].join("\n");
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    // Serve sitemap and robots before passing to TanStack Start
    if (url.pathname === "/sitemap.xml") {
      return new Response(buildSitemap(), {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      });
    }

    if (url.pathname === "/robots.txt") {
      return new Response(buildRobots(), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withSecurityHeaders(
        await normalizeCatastrophicSsrResponse(response),
      );
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: securityHeadersInit(),
      });
    }
  },
};

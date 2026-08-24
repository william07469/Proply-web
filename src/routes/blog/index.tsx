import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts, formatDate } from "@/data/blog-posts";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Clock } from "lucide-react";

const BASE = "https://proply.com.tr";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Web Tasarım & SEO Rehberleri | PROPLY" },
      {
        name: "description",
        content:
          "Web site tasarımı, SEO ve dijital strateji hakkında küçük işletmelere yönelik pratik rehberler. PROPLY Blog.",
      },
      { property: "og:title", content: "Blog | PROPLY" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE}/blog` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${BASE}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "PROPLY Blog",
          description: "Web tasarım, SEO ve dijital strateji rehberleri",
          url: `${BASE}/blog`,
          publisher: { "@type": "Organization", name: "PROPLY", url: BASE },
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { t, lang } = useLang();
  const bp = t.blogPage;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-10 md:pt-40">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">{bp.kicker}</p>
          </div>
          <h1
            className="whitespace-pre-line text-[clamp(2.2rem,5vw,4rem)] font-black leading-[0.96] tracking-[-0.025em] text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {bp.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-foreground/55">{bp.desc}</p>
        </div>

        {/* Posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* First post — hero card */}
          <Link
            to="/blog/$slug"
            params={{ slug: blogPosts[0].slug }}
            className="group relative border border-foreground/10 bg-card transition-colors hover:border-primary/30 lg:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-primary" />
            <div className="p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="border border-primary/30 bg-primary/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {lang === "en" ? blogPosts[0].categoryEn : blogPosts[0].category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-foreground/35">
                  <Clock className="size-3" />
                  {blogPosts[0].readingTime} {bp.readingTime}
                </span>
                <span className="text-[11px] text-foreground/35">
                  {formatDate(blogPosts[0].date, lang)}
                </span>
              </div>
              <h2
                className="text-2xl font-black tracking-tight text-foreground md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {lang === "en" ? blogPosts[0].titleEn : blogPosts[0].title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/55">
                {lang === "en" ? blogPosts[0].descriptionEn : blogPosts[0].description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3">
                {bp.readMore} <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>

          {/* Remaining posts */}
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col border border-foreground/10 bg-card p-7 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="border border-foreground/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                  {lang === "en" ? post.categoryEn : post.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-foreground/30">
                  <Clock className="size-3" />
                  {post.readingTime} {bp.readingTime}
                </span>
              </div>
              <h2
                className="flex-1 text-lg font-black leading-snug tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {lang === "en" ? post.titleEn : post.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/50 line-clamp-2">
                {lang === "en" ? post.descriptionEn : post.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-[11px] text-foreground/30">
                  {formatDate(post.date, lang)}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {bp.readMore} <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

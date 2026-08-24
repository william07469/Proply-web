import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts, getPostBySlug, formatDate } from "@/data/blog-posts";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Clock } from "lucide-react";

const BASE = "https://proply.com.tr";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: post }) => {
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} | PROPLY Blog` },
        { name: "description", content: post.description },
        { name: "keywords", content: post.keywords },
        { name: "author", content: "PROPLY" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${BASE}/blog/${post.slug}` },
        { property: "og:image", content: `${BASE}/og-image.jpg` },
        { property: "article:published_time", content: new Date(post.date).toISOString() },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: `${BASE}/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            keywords: post.keywords,
            url: `${BASE}/blog/${post.slug}`,
            datePublished: new Date(post.date).toISOString(),
            dateModified: new Date(post.date).toISOString(),
            author: { "@type": "Organization", name: "PROPLY", url: BASE },
            publisher: {
              "@type": "Organization",
              name: "PROPLY",
              url: BASE,
              logo: { "@type": "ImageObject", url: `${BASE}/icon.png` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  const { t, lang } = useLang();
  const bp = t.blogPage;

  const title = lang === "en" ? post.titleEn : post.title;
  const description = lang === "en" ? post.descriptionEn : post.description;
  const content = lang === "en" ? post.contentEn : post.content;
  const category = lang === "en" ? post.categoryEn : post.category;

  // Related posts — exclude current
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-10 md:pt-40">
        {/* Back link */}
        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/45 transition-colors hover:text-primary"
        >
          {bp.backToBlog}
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-foreground/10 pb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="border border-primary/30 bg-primary/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              {category}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-foreground/35">
              <Clock className="size-3" />
              {post.readingTime} {bp.readingTime}
            </span>
            <span className="text-[11px] text-foreground/35">{formatDate(post.date, lang)}</span>
          </div>

          <h1
            className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-black leading-[1.05] tracking-[-0.025em] text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/55">{description}</p>
        </header>

        {/* Article content */}
        <article
          className="prose-proply"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA box */}
        <div className="mt-16 border border-primary/20 bg-primary/5 p-8">
          <div className="mb-1 h-[3px] w-10 bg-primary" />
          <h2
            className="mt-5 text-2xl font-black tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {bp.ctaTitle}
          </h2>
          <p className="mt-2 text-sm text-foreground/55">{bp.ctaDesc}</p>
          <a
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {bp.ctaBtn}
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-16">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/30">
              {lang === "tr" ? "Diğer Yazılar" : "More Articles"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group border border-foreground/10 bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/35">
                    {lang === "en" ? p.categoryEn : p.category}
                  </span>
                  <h3
                    className="mt-2 font-black leading-snug tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {lang === "en" ? p.titleEn : p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    {bp.readMore} <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

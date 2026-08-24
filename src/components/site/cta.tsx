import { ArrowRight, MessageCircle, Zap, Shield, Clock } from "lucide-react";
import { waLink } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Cta() {
  const { t, lang } = useLang();

  const guarantees = [
    {
      icon: Clock,
      tr: "2–4 haftada teslim",
      en: "Delivered in 2–4 weeks",
    },
    {
      icon: Shield,
      tr: "Memnuniyet garantisi",
      en: "Satisfaction guaranteed",
    },
    {
      icon: Zap,
      tr: "Revizyon dahil",
      en: "Revisions included",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-card py-28 md:py-40">
      {/* Stripe texture */}
      <div aria-hidden className="absolute inset-0 bg-stripe" />

      {/* Blobs */}
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[600px] animate-drift rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-0 size-[600px] animate-drift-slow rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 5%, transparent), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

          {/* Left — copy */}
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">PROPLY</p>
            </div>

            <h2
              className="text-[clamp(2.2rem,5.5vw,5rem)] font-black leading-[0.92] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.cta.h2a}
              <br />
              <span className="text-primary">{t.cta.h2b}</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/50">
              {t.cta.desc}
            </p>

            {/* Guarantees */}
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {guarantees.map(({ icon: Icon, tr, en }) => (
                <div
                  key={tr}
                  className="flex items-center gap-2 border border-foreground/8 bg-background/40 px-3.5 py-2 backdrop-blur-sm"
                >
                  <Icon className="size-3.5 shrink-0 text-primary" strokeWidth={2} />
                  <span className="text-xs font-semibold text-foreground/60">
                    {lang === "tr" ? tr : en}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — CTAs */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-3 lg:w-64">
              {/* Primary */}
              <a
                href="#contact"
                className="group relative overflow-hidden bg-primary px-8 py-4 text-center text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                {/* Shine sweep */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10"
                  animate={{ translateX: ["−100%", "200%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {t.cta.cta1}
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Secondary — WhatsApp */}
              <a
                href={waLink(t.contact.waDefaultMessage)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2.5 border border-foreground/12 px-8 py-4 text-sm font-semibold text-foreground/55 transition-all duration-200 hover:border-primary/40 hover:text-foreground"
              >
                <MessageCircle className="size-4 text-primary transition-transform group-hover:scale-110" />
                {t.cta.cta2}
              </a>

              {/* Trust note */}
              <p className="mt-1 text-center text-[10px] text-foreground/25">
                {lang === "tr" ? "Hesap açmana gerek yok." : "No account required."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import heroSite from "@/assets/hero-site.webp";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background">
      {/* Dot grid */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Orange rule */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-16 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-primary) 30%, var(--color-primary) 70%, transparent)",
          opacity: 0.5,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Two-column layout */}
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 pt-20 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:pt-24">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              className="text-[clamp(2.6rem,5.5vw,5.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.hero.h1a}
              <br />
              <span className="relative inline-block text-primary">
                {t.hero.h1accent}
                <svg
                  aria-hidden
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8 Q55 2 110 8 Q165 14 218 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </span>
              <br />
              {t.hero.h1b}
            </motion.h1>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
              className="mt-7 max-w-md text-base leading-relaxed text-foreground/55"
            >
              {t.hero.desc}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-foreground hover:shadow-lg hover:shadow-primary/20"
              >
                {t.hero.cta1}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 border border-foreground/15 px-7 py-3.5 text-sm font-semibold text-foreground/60 transition-all duration-200 hover:border-foreground/40 hover:text-foreground"
              >
                {t.hero.cta2}
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>

            {/* Feature tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {t.hero.features.split(" • ").map((f) => (
                <span
                  key={f}
                  className="border border-foreground/8 bg-foreground/4 px-3 py-1 text-[11px] font-medium text-foreground/45"
                >
                  {f}
                </span>
              ))}
            </motion.div>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { label: lang === "tr" ? "Teslim Süresi" : "Delivery", value: "2–4 Hafta" },
                { label: lang === "tr" ? "Performans" : "Performance", value: "A+ Skor" },
                { label: lang === "tr" ? "Tamamlanan" : "Completed", value: "12+" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2.5 border border-foreground/8 bg-surface px-4 py-2"
                >
                  <span className="text-xs font-black text-primary">{chip.value}</span>
                  <span className="text-[10px] text-foreground/35">{chip.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Mockup image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.0, ease: EASE }}
            className="relative hidden lg:block"
          >
            {/* Glow behind image */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
              }}
            />

            <img
              src={heroSite}
              alt="PROPLY web sitesi mockup"
              className="w-full rounded-2xl border border-foreground/10 shadow-2xl shadow-black/50"
              loading="eager"
              decoding="async"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute right-0 top-12 flex items-center gap-2 border border-foreground/10 bg-card px-3.5 py-2 shadow-xl"
            >
              <span className="size-2 rounded-full bg-green-500" />
              <span className="text-[11px] font-semibold text-foreground/70">
                {lang === "tr" ? "Canlı Yayında" : "Live"}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/25">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4 text-foreground/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}

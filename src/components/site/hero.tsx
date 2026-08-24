import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroSite from "@/assets/hero-site.webp";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background">
      {/* Dot grid */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow behind heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 9%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Signature orange rule under navbar */}
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
        <div className="pt-28 md:pt-36">

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

          {/* Heading */}
          <div className="grid lg:grid-cols-[1fr_auto]">
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              className="max-w-[16ch] text-[clamp(2.8rem,7.5vw,7rem)] font-black leading-[0.92] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.hero.h1a}
              <br />
              <span className="relative inline-block text-primary">
                {t.hero.h1accent}
                {/* Underline accent */}
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

            {/* Vertical label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden items-end pb-2 lg:flex"
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/20"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                PROPLY © 2026
              </span>
            </motion.div>
          </div>

          {/* Desc + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-foreground/55">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-3">
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
            </div>
          </motion.div>

          {/* Feature tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-2"
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
        </div>

        {/* Mockup with real depth */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease: EASE }}
          className="relative mt-16 md:mt-24"
        >
          {/* Glow under mockup */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-8 bottom-0 top-12 -z-10 rounded-2xl blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 80%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
            }}
          />

          {/* Floating label top-right */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -right-2 -top-5 z-10 hidden items-center gap-2 border border-foreground/10 bg-card px-3.5 py-2 shadow-xl md:flex"
          >
            <span className="size-2 rounded-full bg-green-500" />
            <span className="text-[11px] font-semibold text-foreground/70">Canlı Yayında</span>
          </motion.div>

          {/* Browser mockup */}
          <div
            className="overflow-hidden border border-foreground/12 shadow-[0_32px_64px_-12px] shadow-black/60"
            style={{ perspective: "1000px" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-foreground/8 bg-surface px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-red-500/60" aria-hidden />
              <span className="size-2.5 rounded-full bg-yellow-500/60" aria-hidden />
              <span className="size-2.5 rounded-full bg-green-500/60" aria-hidden />
              <div className="ml-3 flex-1 border border-foreground/8 bg-background/60 px-3 py-1 text-center text-[10px] font-medium tracking-wide text-foreground/35">
                www.sizinmarkaniz.com
              </div>
            </div>
            <img
              src={heroSite}
              alt={t.hero.mockupAlt}
              width={1440}
              height={912}
              fetchPriority="high"
              className="w-full"
            />
          </div>

          {/* Bottom stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-4 flex flex-wrap justify-end gap-3"
          >
            {[
              { label: "Teslim Süresi", value: "2–4 Hafta" },
              { label: "Performans", value: "A+ Skor" },
              { label: "Tamamlanan", value: "12+ Proje" },
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
        </motion.div>
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

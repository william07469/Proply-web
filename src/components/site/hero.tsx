import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import heroSite from "@/assets/hero-site.webp";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background">
      {/* Dot grid */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />

      {/* Orange horizontal rule — the signature accent line */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[72px] h-[3px] bg-primary"
        style={{ boxShadow: "0 0 40px 4px color-mix(in oklab, var(--primary) 40%, transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Large editorial heading — breaks the grid intentionally */}
        <div className="pt-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {t.hero.badge}
            </span>
          </motion.div>

          <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
            <motion.h1
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
              className="max-w-[18ch] text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.hero.h1a}
              <br />
              <span className="text-primary">{t.hero.h1accent}</span>
              <br />
              {t.hero.h1b}
            </motion.h1>

            {/* Vertical text label — editorial detail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden items-end pb-2 lg:flex"
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/30"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                PROPLY © 2026
              </span>
            </motion.div>
          </div>

          {/* Subtext + CTAs side by side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-foreground/60">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#iletisim"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-foreground"
              >
                {t.hero.cta1}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#calismalar"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
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
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {t.hero.features.split(" • ").map((f) => (
              <span
                key={f}
                className="border border-foreground/10 bg-surface px-3 py-1 text-[11px] font-medium text-foreground/50"
              >
                {f}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Mockup — offset right, overlaps edge */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
          className="relative mt-16 md:mt-20"
        >
          {/* Orange corner accent */}
          <div
            aria-hidden
            className="absolute -left-3 -top-3 z-10 size-10 bg-primary"
          />
          <div className="relative overflow-hidden border border-foreground/10 shadow-[8px_8px_0px_0px] shadow-foreground/10">
            <div className="flex items-center gap-2 border-b border-foreground/10 bg-surface px-4 py-2.5">
              <span className="size-2 rounded-full bg-foreground/20" aria-hidden />
              <span className="size-2 rounded-full bg-foreground/20" aria-hidden />
              <span className="size-2 rounded-full bg-foreground/20" aria-hidden />
              <div className="ml-3 flex-1 border border-foreground/10 bg-background px-3 py-1 text-center text-[10px] font-medium tracking-wide text-foreground/40">
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
        </motion.div>
      </div>
    </section>
  );
}

import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background flex items-center">
      {/* Full-bleed Hero Background Video */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/hero-laptop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-65 scale-100"
        />
      </div>

      {/* Dot grid */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20 z-1" />

      {/* Dark gradient overlay on left for readable typography over 3D background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-2 bg-gradient-to-r from-background via-background/90 via-50% to-transparent"
      />

      {/* Radial background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full z-2"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Top rule */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-16 h-px z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-primary) 30%, var(--color-primary) 70%, transparent)",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 md:px-10 pt-24 pb-16">
        <div className="grid min-h-[calc(100vh-8rem)] items-center lg:grid-cols-12 gap-8">

          {/* Left Column — Headline & CTAs (45% negative space preserved) */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5 z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: EASE }}
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
                    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
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
              transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
              className="mt-7 max-w-md text-base leading-relaxed text-foreground/75"
            >
              {t.hero.desc}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: EASE }}
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
                className="inline-flex items-center gap-2 border border-foreground/15 bg-background/50 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-foreground/90 transition-all duration-200 hover:border-foreground/40 hover:text-foreground"
              >
                {t.hero.cta2}
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>

            {/* Feature tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {t.hero.features.split(" • ").map((f) => (
                <span
                  key={f}
                  className="border border-foreground/10 bg-background/70 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-foreground/70"
                >
                  {f}
                </span>
              ))}
            </motion.div>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { label: lang === "tr" ? "Teslim Süresi" : "Delivery", value: "1–7 Gün" },
                { label: lang === "tr" ? "Performans" : "Performance", value: "A+ Skor" },
                { label: lang === "tr" ? "Tamamlanan" : "Completed", value: "12+" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2.5 border border-foreground/10 bg-background/80 backdrop-blur-md px-4 py-2"
                >
                  <span className="text-xs font-black text-primary">{chip.value}</span>
                  <span className="text-[10px] text-foreground/60">{chip.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4 text-foreground/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}

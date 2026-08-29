import { useEffect, useRef } from "react";
import { counter } from "scroll-craft";
import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";

interface StatItem {
  count: number;
  suffix: string;
  labelKey: string;
  subTr: string;
  subEn: string;
}

const STATS: StatItem[] = [
  { count: 12, suffix: "+", labelKey: "projects", subTr: "Her biri özel tasarım", subEn: "Each one custom-designed" },
  { count: 100, suffix: "%", labelKey: "satisfaction", subTr: "Tek şikâyet almadık", subEn: "Zero complaints received" },
  { count: 7, suffix: "", labelKey: "delivery", subTr: "Büyük ajanslar 3–6 ay alır", subEn: "Large agencies take 3–6 months", },
];

export function Stats() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const stop = counter("[data-count]", {
      duration: 1400,
      ease: "cubicOut",
      threshold: 0.45,
      formatter: (n) => String(n),
    });
    return stop;
  }, []);

  return (
    <section ref={sectionRef} aria-label={t.stats.ariaLabel} className="relative overflow-hidden border-y border-foreground/8 bg-card">
      <div aria-hidden className="absolute inset-0 bg-stripe opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 divide-y divide-foreground/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat, i) => (
              <div key={stat.labelKey} className="flex flex-col items-center gap-1.5 py-10 text-center">
                <span className="mb-1 font-mono text-[10px] font-bold tracking-[0.2em] text-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-5xl font-black tracking-tight text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span data-count={stat.count}>0</span>{stat.suffix}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                  {t.stats[stat.labelKey as keyof typeof t.stats]}
                </p>
                <p className="mt-1 text-[11px] text-foreground/30 italic">
                  {lang === "tr" ? stat.subTr : stat.subEn}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

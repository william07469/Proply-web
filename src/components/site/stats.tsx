import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";

export function Stats() {
  const { t, lang } = useLang();

  const STATS = [
    {
      value: "12+",
      label: t.stats.projects,
      sub: lang === "tr" ? "Her biri özel tasarım" : "Each one custom-designed",
    },
    {
      value: "%100",
      label: t.stats.satisfaction,
      sub: lang === "tr" ? "Tek şikâyet almadık" : "Zero complaints received",
    },
    {
      value: "1–7",
      label: t.stats.delivery,
      sub: lang === "tr" ? "Büyük ajanslar 3–6 ay alır" : "Large agencies take 3–6 months",
    },
  ];

  return (
    <section aria-label={t.stats.ariaLabel} className="relative overflow-hidden border-y border-foreground/8 bg-card">
      {/* subtle stripe overlay */}
      <div aria-hidden className="absolute inset-0 bg-stripe opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 divide-y divide-foreground/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 py-10 text-center">
                {/* Index */}
                <span className="mb-1 font-mono text-[10px] font-bold tracking-[0.2em] text-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-5xl font-black tracking-tight text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                  {stat.label}
                </p>
                <p className="mt-1 text-[11px] text-foreground/30 italic">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

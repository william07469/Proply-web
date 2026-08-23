import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";

export function Stats() {
  const { t } = useLang();

  const STATS = [
    { value: "12+", label: t.stats.projects },
    { value: "%100", label: t.stats.satisfaction },
    { value: "2–4", label: t.stats.delivery },
  ];

  return (
    <section aria-label={t.stats.ariaLabel} className="border-y border-foreground/10 bg-card">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 divide-y divide-foreground/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 py-10 text-center">
                <p
                  className="text-5xl font-black tracking-tight text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

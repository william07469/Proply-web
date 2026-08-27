import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

const PROCESS_STEPS = [
  { tr: "Tanışma & Brifing",    en: "Discovery & Brief" },
  { tr: "Tasarım & Prototip",   en: "Design & Prototype" },
  { tr: "Geliştirme & Test",    en: "Development & Testing" },
  { tr: "Yayına Alma",          en: "Launch" },
];

export function About() {
  const { t, lang } = useLang();

  return (
    <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 md:px-10 lg:grid-cols-2">
        {/* Text */}
        <div>
          <SectionHeading kicker={t.about.kicker} title={t.about.title} />
          <Reveal delay={100}>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">{t.about.p1}</p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">{t.about.p2}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-2">
              {t.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-foreground/10 bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Process card */}
        <Reveal delay={120}>
          <div className="relative border border-foreground/10 bg-surface p-8 shadow-[6px_6px_0px_0px] shadow-primary/20">
            {/* Orange top border */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-primary" />

            <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              {lang === "en" ? "How we work" : "Nasıl çalışıyoruz"}
            </p>

            <ol className="flex flex-col gap-0">
              {PROCESS_STEPS.map((step, i) => (
                <li key={step.tr} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex size-7 shrink-0 items-center justify-center bg-foreground text-[10px] font-black text-background">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < PROCESS_STEPS.length - 1 && (
                      <span className="my-1 h-6 w-px bg-foreground/10" aria-hidden />
                    )}
                  </div>
                  <p className="pb-5 pt-0.5 font-semibold text-foreground">
                    {lang === "en" ? step.en : step.tr}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-4 flex items-center gap-2.5 border border-primary/30 bg-primary/5 p-4">
              <CheckCircle2 className="size-4 shrink-0 text-primary" />
              <p className="text-sm font-semibold text-foreground">
                {lang === "en" ? "Delivered in 1–7 days, every time." : "Her projede 1–7 günde teslim."}
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 border border-foreground/10 bg-background px-4 py-2.5 shadow-md">
              <p className="text-[11px] font-semibold text-foreground/50">{t.about.perfLabel}</p>
              <p className="font-black text-primary" style={{ fontFamily: "var(--font-display)" }}>{t.about.perfScore}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

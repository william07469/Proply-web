import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

// Duration and output for each step
const STEP_META = [
  { durationTr: "Aynı gün",   durationEn: "Same day",   outputTr: "Proje özeti",          outputEn: "Project brief"         },
  { durationTr: "2–5 gün",    durationEn: "2–5 days",   outputTr: "Onaylı tasarım",        outputEn: "Approved design"       },
  { durationTr: "5–10 gün",   durationEn: "5–10 days",  outputTr: "Test edilmiş site",     outputEn: "Tested website"        },
  { durationTr: "1 gün",      durationEn: "1 day",      outputTr: "Canlı web sitesi",      outputEn: "Live website"          },
];

export function Process() {
  const { t, lang } = useLang();

  return (
    <section id="process" className="border-y border-foreground/8 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">

          {/* Left — heading + promise */}
          <div className="lg:w-80 lg:shrink-0">
            <SectionHeading kicker={t.process.kicker} title={t.process.title} />
            <Reveal delay={120}>
              <div className="mt-10 border border-primary/20 bg-primary/5 p-5">
                <div className="mb-3 h-[2px] w-8 bg-primary" />
                <p className="text-sm font-bold text-foreground">
                  {lang === "tr"
                    ? "Toplam süre: 1–7 Gün"
                    : "Total time: 1–7 days"}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/50">
                  {lang === "tr"
                    ? "Büyük ajanslar aynı iş için 3–6 ay alır. Biz süreçleri verimli tutuyor, hızlı teslim ediyoruz."
                    : "Large agencies take 3–6 months for the same work. We keep processes efficient and deliver fast."}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — steps */}
          <div className="flex-1">
            <div className="relative flex flex-col gap-0">
              {/* Vertical connector line */}
              <div
                aria-hidden
                className="absolute left-[17px] top-8 bottom-8 w-px bg-foreground/8 md:left-[21px]"
              />

              {t.process.steps.map((step, i) => {
                const meta = STEP_META[i];
                const isLast = i === t.process.steps.length - 1;
                return (
                  <Reveal key={step.title} delay={i * 90}>
                    <div className="relative flex gap-5 pb-10 last:pb-0">
                      {/* Step number node */}
                      <div
                        className={`relative z-10 flex size-9 shrink-0 items-center justify-center text-[11px] font-black transition-colors ${
                          isLast
                            ? "bg-primary text-primary-foreground"
                            : "border border-foreground/15 bg-surface text-foreground/50"
                        }`}
                      >
                        {isLast ? (
                          <CheckCircle2 className="size-4" strokeWidth={2.5} />
                        ) : (
                          String(i + 1).padStart(2, "0")
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-1 pb-2">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3
                            className="text-base font-black tracking-tight text-foreground"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {step.title}
                          </h3>
                          <span className="border border-foreground/10 bg-surface px-2 py-0.5 text-[10px] font-semibold text-foreground/35">
                            {lang === "tr" ? meta.durationTr : meta.durationEn}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/50">
                          {step.desc}
                        </p>
                        <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-primary/70">
                          <span className="size-1.5 rounded-full bg-primary/50" aria-hidden />
                          {lang === "tr" ? `Çıktı: ${meta.outputTr}` : `Output: ${meta.outputEn}`}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

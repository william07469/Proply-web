import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

const PLAN_NAMES = ["STARTER", "BUSINESS", "CUSTOM"];
const PLAN_PRICES = ["₺7.500", "₺12.500", null];

export function Pricing() {
  const { t, lang } = useLang();

  return (
    <section id="pricing" className="border-t border-foreground/10 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading kicker={t.pricing.kicker} title={t.pricing.title} align="center" />

        <div className="mt-16 grid gap-0 border border-foreground/10 lg:grid-cols-3">
          {t.pricing.plans.map((plan, i) => (
            <Reveal key={PLAN_NAMES[i]} delay={i * 70} className="h-full">
              <article className={`flex h-full flex-col p-8 ${i < 2 ? "border-b border-foreground/10 lg:border-b-0 lg:border-r" : ""}`}>
                <div className="flex items-start justify-between">
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-foreground/40">
                    {PLAN_NAMES[i]}
                  </p>
                  {i === 1 && (
                    <span className="border border-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      ★
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  {PLAN_PRICES[i] ? (
                    <p>
                      <span
                        className="text-4xl font-black tracking-tight text-foreground"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {PLAN_PRICES[i]}
                      </span>
                      {plan.suffix && (
                        <span className="ml-1.5 text-xs text-foreground/40">{plan.suffix}</span>
                      )}
                    </p>
                  ) : (
                    <p
                      className="text-2xl font-black tracking-tight text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {lang === "en" ? "Custom Quote" : "Özel Teklif"}
                    </p>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-foreground/55">{plan.desc}</p>

                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-foreground/10 pt-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/70">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={2.5} aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-200 ${
                    i === 1
                      ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                      : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-xs text-foreground/40">{t.pricing.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

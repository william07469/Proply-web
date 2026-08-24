import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

// Which plan index gets the highlighted treatment
const FEATURED = 1;

export function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="border-t border-foreground/8 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        <SectionHeading
          kicker={t.pricing.kicker}
          title={t.pricing.title}
          align="center"
        />

        {/* Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const featured = i === FEATURED;
            return (
              <Reveal key={plan.name} delay={i * 70} className="h-full">
                <article
                  className={`relative flex h-full flex-col p-8 transition-all duration-300 ${
                    featured
                      ? "border border-primary/40 bg-card shadow-[0_0_40px_-8px] shadow-primary/20"
                      : "border border-foreground/8 bg-card hover:border-foreground/20"
                  }`}
                >
                  {/* Featured top bar */}
                  {featured && (
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-primary" />
                  )}

                  {/* Plan name */}
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-foreground/35">
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="mt-5">
                    <p>
                      <span
                        className={`font-black tracking-tight ${
                          i === 2
                            ? "text-2xl text-foreground"
                            : "text-[2.4rem] leading-none text-foreground"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {plan.price}
                      </span>
                      {plan.suffix && (
                        <span className="ml-1.5 text-xs text-foreground/40">
                          {plan.suffix}
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                    {plan.desc}
                  </p>

                  {/* Features */}
                  <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-foreground/8 pt-7">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/65"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-primary"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`group mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold transition-all duration-200 ${
                      featured
                        ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                        : "border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Note */}
        <Reveal delay={220}>
          <p className="mt-8 text-center text-sm text-foreground/40">
            {t.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

export function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="border-y border-foreground/10 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading kicker={t.process.kicker} title={t.process.title} />

        <div className="mt-16 grid gap-0 border-l border-foreground/10 pl-8 md:grid-cols-4 md:border-l-0 md:border-t md:pl-0 md:pt-10">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="relative pb-10 md:pb-0 md:pr-8">
                {/* Step number marker */}
                <div
                  className="absolute -left-[2.35rem] top-1 flex size-7 items-center justify-center bg-primary text-[10px] font-black text-primary-foreground md:-left-0 md:-top-[calc(2.5rem+1px)] md:left-0"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:pt-8">
                  <h3
                    className="text-lg font-black tracking-tight text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MousePointerClick, Search, Smartphone, Zap } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

const ICONS = [Smartphone, Zap, Search, MousePointerClick];

export function WhyProply() {
  const { t } = useLang();

  return (
    <section className="border-y border-foreground/10 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading kicker={t.why.kicker} title={t.why.title} />

        <div className="mt-16 grid grid-cols-1 gap-px bg-foreground/10 sm:grid-cols-2">
          {t.why.items.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={feature.title} delay={i * 70}>
                <div className="group flex flex-col gap-6 bg-surface p-10 transition-colors hover:bg-surface-2">
                  <div className="flex items-start justify-between">
                    <span
                      className="text-4xl font-black tracking-tight text-primary/30"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="size-6 text-foreground/20 transition-colors group-hover:text-primary"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-black tracking-tight text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Car, Coffee, Globe, QrCode } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

const ICONS = [Globe, Coffee, QrCode, Car];

export function Services() {
  const { t } = useLang();

  const items = t.services.items.map((item, i) => ({
    ...item,
    icon: ICONS[i],
    n: String(i + 1).padStart(2, "0"),
  }));

  const [first, ...rest] = items;
  const FeaturedIcon = first.icon;

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading kicker={t.services.kicker} title={t.services.title} />

        {/* Asymmetric layout: big item left, list right */}
        <div className="mt-16 grid gap-0 border border-foreground/10 lg:grid-cols-[1.6fr_1fr]">
          {/* Featured — first item, full-height left */}
          <Reveal>
            <article className="group relative flex flex-col justify-between border-b border-foreground/10 p-10 transition-colors hover:bg-surface lg:border-b-0 lg:border-r lg:min-h-[420px]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-foreground/30">
                  {first.n}
                </span>
                <span className="border border-foreground/10 p-2.5 text-foreground/50 transition-colors group-hover:border-primary group-hover:text-primary">
                  <FeaturedIcon className="size-5" strokeWidth={1.5} />
                </span>
              </div>
              <div className="mt-16">
                <h3
                  className="text-3xl font-black tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {first.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/60">
                  {first.desc}
                </p>
              </div>
              <ArrowUpRight
                className="absolute bottom-8 right-8 size-5 text-foreground/20 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                aria-hidden
              />
            </article>
          </Reveal>

          {/* Remaining items — stacked list */}
          <div className="flex flex-col divide-y divide-foreground/10">
            {items.slice(1).map((service, i) => (
              <Reveal key={service.title} delay={(i + 1) * 60}>
                <article className="group flex items-start gap-5 p-7 transition-colors hover:bg-surface">
                  <span className="mt-0.5 font-mono text-xs font-bold tracking-widest text-foreground/30">
                    {service.n}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground">{service.title}</h3>
                      <service.icon
                        className="size-4 shrink-0 text-foreground/30 transition-colors group-hover:text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/55">
                      {service.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { MousePointerClick, Search, Smartphone, Zap } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const FEATURES = [
  {
    n: "01",
    icon: Smartphone,
    title: "Mobil Öncelikli",
    desc: "Telefon, tablet ve bilgisayarda kusursuz görünüm.",
  },
  {
    n: "02",
    icon: Zap,
    title: "Hızlı",
    desc: "Gereksiz yüklerden arındırılmış hızlı sayfalar.",
  },
  {
    n: "03",
    icon: Search,
    title: "SEO Temeli",
    desc: "Arama motorlarının anlayabileceği temiz yapı.",
  },
  {
    n: "04",
    icon: MousePointerClick,
    title: "Müşteri Odaklı",
    desc: "Ziyaretçiyi iletişime ve aksiyona yönlendiren tasarım.",
  },
];

export function WhyProply() {
  return (
    <section className="border-y border-border bg-surface/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          kicker="Neden PROPLY"
          title={"Sadece güzel değil.\nİşe yarayan siteler."}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.n} delay={i * 80} className="h-full">
              <div className="group flex h-full flex-col bg-card p-7 transition-colors duration-300 hover:bg-surface-2">
                <span className="font-mono text-sm font-semibold text-primary">
                  {feature.n}
                </span>
                <feature.icon
                  className="mt-8 size-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

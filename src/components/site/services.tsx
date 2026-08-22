import { ArrowUpRight, Car, Coffee, Globe, QrCode } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const SERVICES = [
  {
    n: "01",
    icon: Globe,
    title: "Kurumsal Web Sitesi",
    desc: "Modern ve profesyonel bir web sitesiyle markanızın internetteki görünümünü güçlendirin.",
  },
  {
    n: "02",
    icon: Coffee,
    title: "Cafe & Restoran",
    desc: "Menünüzü, konseptinizi ve işletmenizi müşterilerinize modern bir şekilde gösterin.",
  },
  {
    n: "03",
    icon: QrCode,
    title: "Menü Sitesi",
    desc: "QR kod üzerinden açılabilen hızlı, mobil uyumlu ve şık dijital menüler.",
  },
  {
    n: "04",
    icon: Car,
    title: "Oto Detailing",
    desc: "Araç bakım ve detailing işletmeleri için güçlü görsel sunum ve müşteri odaklı web siteleri.",
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          kicker="Hizmetler"
          title="İhtiyacınız olan dijital görünüm, tek yerde."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.n} delay={i * 80}>
              <article className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-2">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-muted-foreground">
                    {service.n}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                    <service.icon className="size-5" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <ArrowUpRight
                  className="absolute bottom-7 right-7 size-5 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

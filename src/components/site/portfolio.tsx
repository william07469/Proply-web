import { ArrowUpRight } from "lucide-react";
import workOtantik from "@/assets/work-otantik.webp";
import workOlina from "@/assets/work-olina.webp";
import workWv from "@/assets/work-wv.webp";
import workKata from "@/assets/work-kata.webp";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

const PROJECT_META = [
  { name: "Otantik Turkish Restaurant", category: "Restaurant Website", url: "https://otantik-turkish.lovable.app", image: workOtantik, metric: { tr: "Mobil trafik artışı", en: "Mobile traffic growth", value: "+60%" } },
  { name: "Olina Coffee",               category: "Cafe Website",        url: "https://olina-coffee.lovable.app",  image: workOlina,   metric: { tr: "Teslim süresi",       en: "Delivery time",     value: "3 gün" } },
  { name: "WV Detailing",               category: "Auto Detailing",      url: "https://wv-detailling.lovable.app/",image: workWv,      metric: { tr: "Google sıralama",    en: "Google ranking",    value: "#1" } },
  { name: "Kata Coffee",                category: "Cafe Website",        url: "https://kata-coffee.base44.app",   image: workKata,    metric: { tr: "Müşteri memnuniyeti",en: "Client satisfaction",value: "100%" } },
];

export function Portfolio() {
  const { t, lang } = useLang();

  const projects = PROJECT_META.map((meta, i) => ({
    ...meta,
    description: t.portfolio.projects[i].description,
  }));

  const [hero, ...grid] = projects;

  return (
    <section id="works" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading kicker={t.portfolio.kicker} title={t.portfolio.title} description={t.portfolio.desc} />

        {/* Hero project — wide, editorial */}
        <Reveal className="mt-14">
          <a
            href={hero.url}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden border border-foreground/10"
          >
            <div className="relative overflow-hidden">
              <img
                src={hero.image}
                alt={`${hero.name} ${t.portfolio.imgAlt}`}
                width={1536}
                height={640}
                loading="lazy"
                decoding="async"
                className="aspect-[21/8] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/70 to-transparent p-6 md:p-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/60">
                    {hero.category}
                  </span>
                  <h3
                    className="mt-1 text-2xl font-black tracking-tight text-background md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {hero.name}
                  </h3>
                </div>
                {/* Metric chip */}
                <div className="hidden flex-col items-end sm:flex">
                  <span className="text-3xl font-black text-primary" style={{ fontFamily: "var(--font-display)" }}>
                    {hero.metric.value}
                  </span>
                  <span className="text-[10px] font-medium text-background/60">
                    {lang === "en" ? hero.metric.en : hero.metric.tr}
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Grid — 3 remaining */}
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {grid.map((project, i) => (
            <Reveal key={project.name} delay={i * 60}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden border border-foreground/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} ${t.portfolio.imgAlt}`}
                    width={800}
                    height={540}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
                  {/* Arrow icon */}
                  <span className="absolute right-4 top-4 flex size-8 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="border-t border-foreground/10 bg-surface p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">
                        {project.category}
                      </span>
                      <h3 className="mt-0.5 font-bold text-foreground">{project.name}</h3>
                    </div>
                    <div className="text-right">
                      <p
                        className="text-xl font-black text-primary"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.metric.value}
                      </p>
                      <p className="text-[10px] text-foreground/40">
                        {lang === "en" ? project.metric.en : project.metric.tr}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

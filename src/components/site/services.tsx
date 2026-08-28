import { ArrowUpRight, Car, Coffee, Globe, QrCode } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";
import workOtantik from "@/assets/work-otantik.webp";
import workOlina from "@/assets/work-olina.webp";
import workKata from "@/assets/work-kata.webp";
import workWv from "@/assets/work-wv.webp";

const ICONS = [Globe, Coffee, QrCode, Car];
const IMAGES = [workOtantik, workOlina, workKata, workWv];
const LINKS = [
  "https://otantik-turkish.lovable.app",
  "https://olina-coffee.lovable.app",
  "https://kata-coffee.base44.app",
  "https://wv-detailling.lovable.app/",
];

export function Services() {
  const { t } = useLang();

  const items = t.services.items.map((item, i) => ({
    ...item,
    icon: ICONS[i],
    n: String(i + 1).padStart(2, "0"),
    image: IMAGES[i],
    link: LINKS[i],
  }));

  const [first, ...rest] = items;
  const FeaturedIcon = first.icon;

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading kicker={t.services.kicker} title={t.services.title} />

        <div className="mt-16 grid gap-0 border border-foreground/10 rounded-2xl overflow-hidden lg:grid-cols-[1.6fr_1fr]">
          {/* Featured — with background image */}
          <Reveal>
            <a
              href={first.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between border-b border-foreground/10 lg:border-b-0 lg:border-r lg:min-h-[420px] overflow-hidden"
            >
              {/* Background image */}
              <img
                src={first.image}
                alt={first.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

              {/* Content */}
              <div className="relative p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-foreground/50">
                    {first.n}
                  </span>
                  <span className="border border-foreground/20 bg-background/40 p-2.5 text-foreground/70 backdrop-blur-sm transition-colors group-hover:border-primary group-hover:text-primary">
                    <FeaturedIcon className="size-5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>

              <div className="relative mt-auto p-10">
                <h3
                  className="text-3xl font-black tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {first.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">
                  {first.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Örneği Gör <ArrowUpRight className="size-3.5" />
                </span>
              </div>

              <ArrowUpRight
                className="absolute bottom-8 right-8 size-5 text-foreground/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                aria-hidden
              />
            </a>
          </Reveal>

          {/* Remaining items — with thumbnail */}
          <div className="flex flex-col divide-y divide-foreground/10">
            {rest.map((service, i) => (
              <Reveal key={service.title} delay={(i + 1) * 60}>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-0 transition-colors hover:bg-surface overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative h-full w-24 shrink-0 overflow-hidden rounded-lg m-3 mr-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ minHeight: "96px" }}
                    />
                    <div className="absolute inset-0 bg-background/30 transition-colors group-hover:bg-background/10 rounded-lg" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 items-start gap-4 p-6">
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
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Örneği Gör <ArrowUpRight className="size-3" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import workOtantik from "@/assets/work-otantik.webp";
import workOlina from "@/assets/work-olina.webp";
import workWv from "@/assets/work-wv.webp";
import workKata from "@/assets/work-kata.webp";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PROJECTS = [
  {
    name: "Otantik Turkish Restaurant",
    category: "Restaurant Website",
    description:
      "Güçlü yemek fotoğrafçılığı, menü sunumu, marka hikayesi, galeri ve iletişim bölümleriyle premium Türk restoranı web sitesi.",
    url: "https://otantik-turkish.lovable.app",
    image: workOtantik,
  },
  {
    name: "Olina Coffee",
    category: "Cafe Website",
    description:
      "Menü keşfi, atmosfer, galeri ve işletme bilgilerine odaklanan, mobil öncelikli modern cafe web sitesi.",
    url: "https://olina-coffee.lovable.app",
    image: workOlina,
  },
  {
    name: "WV Detailing",
    category: "Auto Detailing Website",
    description:
      "Görsel sunum, hizmetler ve ziyaretçiyi müşteriye dönüştürmeye odaklanan premium detailing web sitesi.",
    url: "https://wv-detailling.lovable.app/",
    image: workWv,
  },
  {
    name: "Kata Coffee",
    category: "Cafe Website",
    description:
      "Sade görsel kimlik, menü odaklı deneyim ve yerel işletme sunumuyla modern kahve dükkanı web sitesi.",
    url: "https://kata-coffee.base44.app",
    image: workKata,
  },
];

export function Portfolio() {
  return (
    <section id="calismalar" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Referanslar"
            title="Yaptığımız işler."
            description="Her proje; markaya özel tasarım, hızlı altyapı ve dönüşüm odaklı bir yapıyla teslim edilir."
          />
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 100}>
              <article className="group">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                  <img
                    src={project.image}
                    alt={`${project.name} web sitesi önizlemesi`}
                    width={1536}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="pt-5">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all duration-300 hover:gap-2.5 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                  >
                    Projeyi Gör
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

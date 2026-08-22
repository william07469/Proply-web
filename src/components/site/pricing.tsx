import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PLANS = [
  {
    name: "STARTER",
    price: "₺7.500",
    suffix: "'den başlayan",
    desc: "Temiz bir çevrimiçi görünüme ihtiyaç duyan işletmeler için.",
    features: [
      "Modern web sitesi",
      "Responsive tasarım",
      "Temel SEO",
      "WhatsApp entegrasyonu",
      "İletişim bölümü",
    ],
    cta: "Teklif Al",
    popular: false,
  },
  {
    name: "BUSINESS",
    price: "₺12.500",
    suffix: "'den başlayan",
    desc: "Daha gelişmiş bir web sitesi isteyen işletmeler için.",
    features: [
      "Özel tasarım",
      "Çoklu bölüm / sayfa",
      "Gelişmiş animasyonlar",
      "SEO kurulumu",
      "WhatsApp entegrasyonu",
      "Performans optimizasyonu",
    ],
    cta: "Teklif Al",
    popular: true,
  },
  {
    name: "CUSTOM",
    price: "Özel Teklif",
    suffix: "",
    desc: "Daha büyük veya tamamen özelleştirilmiş projeler için.",
    features: [
      "Tamamen özel tasarım",
      "Özel fonksiyonlar",
      "Gelişmiş entegrasyonlar",
      "İleri SEO",
      "Kişiselleştirilmiş geliştirme",
    ],
    cta: "Projenizi Anlatın",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="fiyatlar" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          kicker="Fiyatlandırma"
          title="Size uygun bir başlangıç noktası."
          align="center"
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-primary/60 bg-card shadow-[0_0_60px_-18px] shadow-primary/30"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground">
                    En Popüler
                  </span>
                ) : null}

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {plan.name}
                </p>
                <p className="mt-5">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.suffix ? (
                    <span className="ml-1.5 text-sm text-muted-foreground">
                      {plan.suffix}
                    </span>
                  ) : null}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.desc}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-border pt-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <Check
                        className="size-4 shrink-0 text-primary"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#iletisim"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground hover:border-foreground/30"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Fiyatlar projenin kapsamına ve ihtiyaçlarına göre değişebilir.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

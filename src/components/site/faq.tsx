import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const FAQS = [
  {
    q: "Web sitem ne kadar sürede hazır olur?",
    a: "Projenin kapsamına göre değişmekle birlikte çoğu web sitesi 2–4 hafta içinde yayına alınır.",
  },
  {
    q: "Mevcut web sitemi yenileyebilir misiniz?",
    a: "Evet. Mevcut sitenizi analiz edip modern, hızlı ve mobil uyumlu bir yapıyla baştan tasarlayabiliriz.",
  },
  {
    q: "Fiyatlara neler dahil?",
    a: "Tasarım, geliştirme, mobil uyumluluk, temel SEO ve WhatsApp entegrasyonu tüm paketlere dahildir. Kapsam, projenize göre birlikte netleştirilir.",
  },
  {
    q: "Alan adı ve yayın süreci nasıl ilerliyor?",
    a: "Alan adı ve yayın altyapısını sizin adınıza yapılandırıyor, siteyi size ait hesaplarda teslim ediyoruz.",
  },
  {
    q: "Sitemi sonradan güncelleyebilir miyim?",
    a: "Evet. İhtiyacınıza göre kolay güncellenebilir bir yapı kuruyor, dilerseniz düzenli bakım desteği de sunuyoruz.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          kicker="SSS"
          title="Merak edilenler."
          align="center"
        />

        <Reveal delay={120} className="mt-12">
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-semibold tracking-tight">
                      {faq.q}
                    </span>
                    <Plus
                      className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        open ? "rotate-45 text-primary" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

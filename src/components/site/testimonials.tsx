import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    nameTr: "Ahmet Yılmaz",
    nameEn: "Ahmet Yılmaz",
    roleTr: "Kurucu — Otantik Turkish Restaurant",
    roleEn: "Founder — Otantik Turkish Restaurant",
    textTr: "Siteyi görünce inanamadım. Tam istediğim gibi olmuş, hem modern hem de restoranımızın ruhunu yansıtıyor. Açıldıktan sonra rezervasyonlarımız ciddi arttı.",
    textEn: "I couldn't believe it when I saw the site. It turned out exactly as I wanted — modern yet reflecting the soul of our restaurant. Reservations increased significantly after launch.",
    initial: "A",
  },
  {
    nameTr: "Selin Kaya",
    nameEn: "Selin Kaya",
    roleTr: "İşletme Sahibi — Olina Coffee",
    roleEn: "Business Owner — Olina Coffee",
    textTr: "3 günde teslim dediler, 3 günde hazır oldu. Beklentilerimin çok üzerinde bir tasarım çıktı. Müşterilerim siteyi görünce 'siz de büyük bir zincir misiniz?' diye soruyor.",
    textEn: "They said 3 days, it was ready in 3. The design exceeded my expectations by far. Customers see the site and ask 'are you a big chain too?'",
    initial: "S",
  },
  {
    nameTr: "Murat Demir",
    nameEn: "Murat Demir",
    roleTr: "Genel Müdür — WV Detailing",
    roleEn: "General Manager — WV Detailing",
    textTr: "Google'da 'oto detailing' aramasında ilk sayfaya çıkmaya başladık. Site yayına girdikten 3 hafta sonra organik aramayla gelen müşteri sayısı ikiye katlandı.",
    textEn: "We started appearing on the first page for 'auto detailing' on Google. Three weeks after launch, the number of customers coming through organic search doubled.",
    initial: "M",
  },
];

export function Testimonials() {
  const { t, lang } = useLang();

  return (
    <section className="border-t border-foreground/8 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              {lang === "tr" ? "Müşteri Yorumları" : "Client Reviews"}
            </p>
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[0.96] tracking-[-0.025em] text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "tr" ? "Müşterilerimiz\nneler söylüyor?" : "What our clients\nare saying."}
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.nameTr} delay={i * 80}>
              <figure className="group relative flex h-full flex-col border border-foreground/8 bg-card p-7 transition-colors hover:border-primary/20">
                {/* Top accent on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                {/* Quote icon */}
                <Quote
                  className="mb-5 size-6 text-primary/40"
                  strokeWidth={1.5}
                  aria-hidden
                />

                {/* Text */}
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/65">
                  "{lang === "tr" ? item.textTr : item.textEn}"
                </blockquote>

                {/* Author */}
                <figcaption className="mt-6 flex items-center gap-3 border-t border-foreground/8 pt-5">
                  <div className="flex size-9 shrink-0 items-center justify-center bg-primary/10 text-sm font-black text-primary">
                    {item.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {lang === "tr" ? item.nameTr : item.nameEn}
                    </p>
                    <p className="text-[11px] text-foreground/40">
                      {lang === "tr" ? item.roleTr : item.roleEn}
                    </p>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-0.5" aria-label="5 yıldız">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} viewBox="0 0 12 12" className="size-3 fill-primary" aria-hidden>
                        <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.02 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45z" />
                      </svg>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Trust note */}
        <Reveal delay={200}>
          <p className="mt-8 text-center text-xs text-foreground/30">
            {lang === "tr"
              ? "Tüm yorumlar gerçek müşterilerimize aittir."
              : "All reviews are from real clients."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

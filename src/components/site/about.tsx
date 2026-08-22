import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const CODE_LINES = [
  { indent: 0, tokens: [["const", "kw"], [" site ", "plain"], ["= {", "plain"]] },
  { indent: 1, tokens: [["marka", "prop"], [": ", "plain"], ['"sizin-isletmeniz"', "str"], [",", "plain"]] },
  { indent: 1, tokens: [["tasarim", "prop"], [": ", "plain"], ['"modern"', "str"], [",", "plain"]] },
  { indent: 1, tokens: [["mobil", "prop"], [": ", "plain"], ["true", "kw"], [",", "plain"]] },
  { indent: 1, tokens: [["hiz", "prop"], [": ", "plain"], ['"optimize"', "str"], [",", "plain"]] },
  { indent: 1, tokens: [["seo", "prop"], [": ", "plain"], ["true", "kw"], [",", "plain"]] },
  { indent: 1, tokens: [["iletisim", "prop"], [": ", "plain"], ['"whatsapp"', "str"], [",", "plain"]] },
  { indent: 0, tokens: [["};", "plain"]] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [["// Yayına hazır.", "comment"]] },
] as const;

const TOKEN_CLASSES: Record<string, string> = {
  kw: "text-primary",
  str: "text-foreground",
  prop: "text-muted-foreground",
  plain: "text-foreground/80",
  comment: "text-muted-foreground/60",
};

export function About() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading kicker="PROPLY" title="Biz ne yapıyoruz?" />
          <Reveal delay={120}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              PROPLY, işletmelerin dijital dünyada daha profesyonel görünmesine
              yardımcı olan modern bir web stüdyosudur.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tasarımdan geliştirmeye kadar sürecin tamamını üstleniyor, her
              işletme için markasına uygun ve amacına hizmet eden web siteleri
              oluşturuyoruz.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {["Tasarım", "Geliştirme", "SEO", "Performans", "Destek"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {tag}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 glow-accent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                  proply / proje.tsx
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 select-none text-right text-muted-foreground/30">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                      {line.tokens.map(([text, kind], j) => (
                        <span key={j} className={TOKEN_CLASSES[kind]}>
                          {text}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
            <div className="absolute -bottom-5 -right-3 animate-float rounded-xl border border-border bg-background/80 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md md:-right-6">
              <p className="text-[11px] font-medium text-muted-foreground">
                Performans
              </p>
              <p className="text-sm font-extrabold text-primary">A+ skor</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

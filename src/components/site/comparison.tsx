import { Check, X, Minus } from "lucide-react";
import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";
import { comparisonTranslations } from "@/lib/i18n";

function CellValue({ value, isProply }: { value: string; isProply: boolean }) {
  const isCheck = value.startsWith("✓");
  const isCross = value.startsWith("✗");
  const clean = value.replace(/^[✓✗]\s*/, "");

  return (
    <div className={`flex items-center gap-2 ${isProply ? "justify-center" : "justify-center"}`}>
      {isCheck && (
        <Check
          className={`size-3.5 shrink-0 ${isProply ? "text-primary" : "text-foreground/40"}`}
          strokeWidth={2.5}
        />
      )}
      {isCross && (
        <X className="size-3.5 shrink-0 text-foreground/25" strokeWidth={2} />
      )}
      {!isCheck && !isCross && (
        <Minus className="size-3 shrink-0 text-foreground/20" strokeWidth={1.5} />
      )}
      <span
        className={`text-sm ${
          isProply
            ? "font-semibold text-foreground"
            : "text-foreground/50"
        }`}
      >
        {clean || value}
      </span>
    </div>
  );
}

export function Comparison() {
  const { lang } = useLang();
  const c = comparisonTranslations[lang];

  return (
    <section className="border-t border-foreground/10 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              {c.kicker}
            </p>
          </div>
          <h2
            className="whitespace-pre-line text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[0.96] tracking-[-0.025em] text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/55">
            {c.desc}
          </p>
        </Reveal>

        {/* Table */}
        <Reveal delay={100} className="mt-14">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              {/* Column headers */}
              <thead>
                <tr>
                  {/* Row label col */}
                  <th className="w-[30%] pb-4 text-left" />
                  {c.cols.map((col, i) => (
                    <th
                      key={col}
                      className={`pb-4 text-center align-bottom ${i === 0 ? "relative" : ""}`}
                    >
                      {i === 0 ? (
                        <div className="relative inline-flex flex-col items-center">
                          {/* Orange top accent bar */}
                          <span className="mb-3 h-[3px] w-full bg-primary" aria-hidden />
                          <span
                            className="text-sm font-black tracking-wide text-primary"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {col}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-semibold text-foreground/35">
                          {col}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-foreground/8">
                {c.rows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={ri % 2 === 0 ? "bg-background/50" : "bg-transparent"}
                  >
                    {/* Label */}
                    <td className="py-4 pr-6 text-left text-sm font-semibold text-foreground/60">
                      {row.label}
                    </td>

                    {/* Values */}
                    {row.values.map((val, vi) => (
                      <td
                        key={vi}
                        className={`py-4 text-center ${
                          vi === 0
                            ? "border-x border-primary/20 bg-primary/5 px-4"
                            : "px-4"
                        }`}
                      >
                        <CellValue value={val} isProply={vi === 0} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col items-center gap-3 border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:justify-between">
            <p className="text-sm font-semibold text-foreground">
              {lang === "tr"
                ? "Projeniz için doğru paket hangisi?"
                : "Which package is right for your project?"}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {lang === "tr" ? "Ücretsiz Danışmanlık Al" : "Get a Free Consultation"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

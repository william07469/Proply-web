import { useState } from "react";
import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";

export function Faq() {
  const { t, lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-foreground/10 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left — sticky */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">{t.faq.kicker}</p>
              </div>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-black leading-[0.96] tracking-[-0.025em] text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.faq.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/55">
                {lang === "en"
                  ? "Can't find what you're looking for? Message us directly."
                  : "Aradığınız soruyu bulamadınız mı? Bize doğrudan yazın."}
              </p>
              <a
                href="#iletisim"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
              >
                {t.contact.waLink} →
              </a>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={80}>
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              {t.faq.items.map((faq, i) => {
                const open = openIndex === i;
                return (
                  <div key={faq.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-start justify-between gap-8 py-5 text-left"
                    >
                      <span
                        className={`text-sm font-semibold leading-snug transition-colors ${open ? "text-primary" : "text-foreground"}`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center transition-all ${
                          open ? "bg-primary text-primary-foreground" : "border border-foreground/20 text-foreground/40"
                        }`}
                        aria-hidden
                      >
                        <svg viewBox="0 0 10 10" className="size-2.5 fill-current">
                          {open ? (
                            <rect x="1" y="4.5" width="8" height="1.2" rx="0.3" />
                          ) : (
                            <>
                              <rect x="1" y="4.5" width="8" height="1.2" rx="0.3" />
                              <rect x="4.5" y="1" width="1.2" height="8" rx="0.3" />
                            </>
                          )}
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-foreground/55">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

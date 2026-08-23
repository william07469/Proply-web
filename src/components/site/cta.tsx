import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";

export function Cta() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-card py-28 md:py-40">
      {/* Stripe texture */}
      <div aria-hidden className="absolute inset-0 bg-stripe opacity-100" />
      {/* Orange accent blobs */}
      <div aria-hidden className="absolute -left-32 top-0 size-[500px] animate-drift rounded-full bg-primary/8 blur-3xl" />
      <div aria-hidden className="absolute -right-32 bottom-0 size-[500px] animate-drift-slow rounded-full bg-primary/6 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              PROPLY
            </p>
            <h2
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.cta.h2a}
              <br />
              <span className="text-primary">{t.cta.h2b}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/55">
              {t.cta.desc}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-3 lg:pb-2">
              <a
                href="#iletisim"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-background hover:text-foreground"
              >
                {t.cta.cta1}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={waLink(t.contact.waDefaultMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 px-8 py-4 text-sm font-semibold text-foreground/60 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <MessageCircle className="size-4 text-primary" />
                {t.cta.cta2}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

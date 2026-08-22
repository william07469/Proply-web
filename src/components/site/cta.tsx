import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function Cta() {
  return (
    <section className="relative overflow-hidden border-y border-border py-28 md:py-36">
      {/* Animated premium background */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute -left-24 top-0 size-[420px] animate-drift rounded-full bg-primary/12 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-28 bottom-0 size-[460px] animate-drift-slow rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            İşletmenizin yeni web sitesi{" "}
            <span className="text-primary">hazır olabilir.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Projenizi anlatın, size uygun çözümü birlikte oluşturalım.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#iletisim"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Merhaba! Web sitem hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors duration-200 hover:border-foreground/30 sm:w-auto"
            >
              <MessageCircle className="size-4 text-primary" />
              WhatsApp'tan Yaz
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

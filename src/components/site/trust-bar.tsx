import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";

const CATEGORIES = [
  "CAFE",
  "RESTAURANT",
  "AUTO DETAILING",
  "LOCAL BUSINESS",
  "PERSONAL BRAND",
];

export function TrustBar() {
  const { t } = useLang();

  return (
    <section className="border-b border-foreground/10 bg-surface py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/40">
            {t.trustBar.subtitle}
          </p>
        </Reveal>
      </div>
      <Reveal delay={80}>
        <div className="overflow-hidden mask-fade-x">
          <div className="flex w-max motion-safe:animate-marquee">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-x-16 pr-16"
              >
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat}
                    className="whitespace-nowrap text-xs font-black tracking-[0.28em] text-foreground/25"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

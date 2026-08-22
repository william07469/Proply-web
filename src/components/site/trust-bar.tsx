import { Reveal } from "./reveal";

const CATEGORIES = [
  "CAFE",
  "RESTAURANT",
  "AUTO DETAILING",
  "LOCAL BUSINESS",
  "PERSONAL BRAND",
];

export function TrustBar() {
  return (
    <section className="border-y border-border/70 py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">
            Küçük işletmelerden güçlü markalara.
          </p>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="group/marquee mt-8 overflow-hidden mask-fade-x">
          <div className="flex w-max motion-safe:animate-marquee group-hover/marquee:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-x-14 pr-14"
              >
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat}
                    className="whitespace-nowrap text-xs font-bold tracking-[0.24em] text-muted-foreground/70 transition-colors hover:text-foreground"
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

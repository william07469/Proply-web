import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "./reveal";

type Stat =
  | { kind: "count"; value: number; prefix: string; label: string }
  | { kind: "static"; text: string; label: string };

const STATS: Stat[] = [
  { kind: "count", value: 15, prefix: "+", label: "Teslim Edilen Proje" },
  { kind: "count", value: 100, prefix: "%", label: "Müşteri Memnuniyeti" },
  { kind: "static", text: "2–4", label: "Hafta İçinde Teslim" },
];

function CountUp({ value, prefix }: { value: number; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix]);

  return <span ref={ref}>{`${prefix}0`}</span>;
}

export function Stats() {
  return (
    <section aria-label="PROPLY rakamları">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 py-9 text-center"
              >
                <p className="text-4xl font-extrabold tracking-tight text-primary">
                  {stat.kind === "count" ? (
                    <CountUp value={stat.value} prefix={stat.prefix} />
                  ) : (
                    stat.text
                  )}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

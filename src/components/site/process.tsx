import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    n: "01",
    title: "Tanışalım",
    desc: "İşletmenizi ve ihtiyaçlarınızı öğreniyoruz.",
  },
  {
    n: "02",
    title: "Tasarım",
    desc: "Markanıza uygun modern arayüzü oluşturuyoruz.",
  },
  {
    n: "03",
    title: "Geliştirme",
    desc: "Siteyi hızlı, responsive ve işlevsel şekilde geliştiriyoruz.",
  },
  {
    n: "04",
    title: "Yayına Alma",
    desc: "Son kontrolleri yapıp sitenizi yayına alıyoruz.",
  },
];

export function Process() {
  return (
    <section
      id="surec"
      className="border-y border-border bg-surface/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading kicker="Süreç" title="Nasıl çalışıyoruz?" />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden border-t border-border md:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <li className="relative">
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-sm font-bold text-primary">
                  {step.n}
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

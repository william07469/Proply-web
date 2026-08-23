import { Reveal } from "./reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean; /* use on dark/ink sections */
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-primary" aria-hidden />
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.3em] text-primary`}
        >
          {kicker}
        </p>
      </div>
      <h2
        className={`whitespace-pre-line text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[0.96] tracking-[-0.025em] ${
          light ? "text-background" : "text-foreground"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-background/60" : "text-foreground/60"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

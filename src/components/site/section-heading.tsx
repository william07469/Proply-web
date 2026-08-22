import { Reveal } from "./reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
        {kicker}
      </p>
      <h2 className="mt-4 whitespace-pre-line text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

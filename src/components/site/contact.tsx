import { useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { waLink, PHONE_NUMBERS } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useLang } from "@/lib/i18n";

const INPUT_CLASSES =
  "w-full border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30";

export function Contact() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if ((fd.get("company_url") as string)?.trim()) { setSent(true); return; }
    const f = t.contact.formLines;
    const lines = [
      f.greeting, "",
      `${f.name}: ${fd.get("name")}`,
      `${f.business}: ${fd.get("business")}`,
      `${f.email}: ${fd.get("email")}`,
      `${f.phone}: ${fd.get("phone")}`,
      "", `${f.project}: ${fd.get("details")}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-foreground/10 bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Left info */}
        <div>
          <SectionHeading kicker={t.contact.kicker} title={t.contact.title} description={t.contact.desc} />
          <Reveal delay={120}>
            <div className="mt-10 border border-foreground/10 bg-surface p-6">
              <div className="mb-4 flex size-10 items-center justify-center bg-primary text-primary-foreground">
                <MessageCircle className="size-5" />
              </div>
              <p className="font-bold tracking-tight text-foreground">{t.contact.waTitle}</p>
              <p className="mt-1.5 text-sm text-foreground/55">{t.contact.waDesc}</p>
              <div className="mt-4 flex flex-col gap-1.5">
                {PHONE_NUMBERS.map((p) => (
                  <a key={p.href} href={p.href} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">
                    <span className="font-normal text-foreground/45">{lang === "en" ? p.labelEn : p.label}: </span>
                    {p.number}
                  </a>
                ))}
              </div>
              <a
                href={waLink(t.contact.waDefaultMessage)}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
              >
                {t.contact.waLink}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right form */}
        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="border border-foreground/10 bg-surface p-8">
            {/* Orange top line */}
            <div className="mb-8 h-[3px] w-12 bg-primary" />

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { id: "name",     label: t.contact.fields.name,     placeholder: t.contact.fields.namePlaceholder,     type: "text",  autoComplete: "name" },
                { id: "business", label: t.contact.fields.business,  placeholder: t.contact.fields.businessPlaceholder, type: "text",  autoComplete: "organization" },
                { id: "email",    label: t.contact.fields.email,     placeholder: t.contact.fields.emailPlaceholder,    type: "email", autoComplete: "email" },
                { id: "phone",    label: t.contact.fields.phone,     placeholder: t.contact.fields.phonePlaceholder,    type: "tel",   autoComplete: "tel" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/45">
                    {field.label}
                  </label>
                  <input id={field.id} name={field.id} type={field.type} required autoComplete={field.autoComplete} placeholder={field.placeholder} className={INPUT_CLASSES} />
                </div>
              ))}
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" className={INPUT_CLASSES} />
            </div>

            <div className="mt-5">
              <label htmlFor="details" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/45">
                {t.contact.fields.details}
              </label>
              <textarea id="details" name="details" rows={4} required placeholder={t.contact.fields.detailsPlaceholder} className={`${INPUT_CLASSES} resize-none`} />
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-foreground"
            >
              {t.contact.fields.submit}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            {sent && (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
                <Check className="size-4" />
                {t.contact.successMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

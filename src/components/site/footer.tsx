import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { PHONE_NUMBERS, CONTACT_EMAIL } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";
import { getNavLinks } from "@/lib/site-data";

export function Footer() {
  const { t, lang } = useLang();
  const navLinks = getNavLinks(t);

  const serviceLinks = t.footer.serviceLinks;

  return (
    <footer className="border-t border-foreground/10 bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 text-base font-black tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="flex size-6 items-center justify-center bg-primary text-[10px] font-black text-primary-foreground">P</span>
              PROPLY
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/40">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              <a href="#top" aria-label="Instagram" className="flex size-9 items-center justify-center border border-foreground/10 text-foreground/40 transition-colors hover:border-primary hover:text-primary">
                <Instagram className="size-3.5" />
              </a>
              <a href="#top" aria-label="LinkedIn" className="flex size-9 items-center justify-center border border-foreground/10 text-foreground/40 transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Alt gezinme">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-foreground/30">
              {t.footer.pages}
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-foreground/45 transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-foreground/30">
              {t.footer.services}
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#hizmetler" className="text-sm text-foreground/45 transition-colors hover:text-foreground">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-foreground/30">
              {t.footer.contact}
            </p>
            <ul className="space-y-3">
              {PHONE_NUMBERS.map((phone) => (
                <li key={phone.label}>
                  <a href={phone.href} className="flex items-start gap-2 text-sm text-foreground/45 transition-colors hover:text-foreground">
                    <Phone className="mt-0.5 size-3.5 shrink-0" />
                    <span>
                      <span className="font-medium text-foreground/65">
                        {lang === "en" ? phone.labelEn : phone.label}
                      </span>
                      <br />
                      {phone.number}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-sm text-foreground/45 transition-colors hover:text-foreground">
                  <Mail className="size-3.5 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-foreground/10 pt-7">
          <p className="text-xs text-foreground/25">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

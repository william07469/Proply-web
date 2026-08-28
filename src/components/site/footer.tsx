import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { PHONE_NUMBERS, CONTACT_EMAIL } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";
import { getNavLinks } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const { t, lang } = useLang();
  const navLinks = getNavLinks(t);
  const serviceLinks = t.footer.serviceLinks;

  return (
    <footer className="border-t border-foreground/10 bg-surface text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2.5 text-base font-black tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground shadow-sm">P</span>
              PROPLY
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/70">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-2.5">
              <a href="#top" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:border-primary hover:text-primary hover:bg-foreground/5">
                <Instagram className="size-4" />
              </a>
              <a href="#top" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:border-primary hover:text-primary hover:bg-foreground/5">
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Alt gezinme">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-primary">
              {t.footer.pages}
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a href={link.href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href as any} className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-primary">
              {t.footer.services}
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="/#services" className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-primary">
              {t.footer.contact}
            </p>
            <ul className="space-y-3">
              {PHONE_NUMBERS.map((phone) => (
                <li key={phone.label}>
                  <a href={phone.href} className="flex items-start gap-2.5 text-sm text-foreground/75 transition-colors hover:text-foreground">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">
                        {lang === "en" ? phone.labelEn : phone.label}
                      </span>
                      <br />
                      <span className="text-foreground/80">{phone.number}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 text-sm text-foreground/75 transition-colors hover:text-foreground">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <span className="text-foreground/80">{CONTACT_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-foreground/15 pt-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-foreground/50">{t.footer.copyright}</p>
            <p className="text-xs text-foreground/40">
              {lang === "tr"
                ? "Profesyonel web siteleri — hızlı, mobil uyumlu, SEO odaklı."
                : "Professional websites — fast, mobile-friendly, SEO-focused."}
            </p>
            <div className="flex items-center gap-4">
              <a href="/#services" className="text-xs text-foreground/40 transition-colors hover:text-primary">
                {lang === "tr" ? "Hizmetler" : "Services"}
              </a>
              <a href="/#contact" className="text-xs text-foreground/40 transition-colors hover:text-primary">
                {lang === "tr" ? "İletişim" : "Contact"}
              </a>
              <a href="/blog" className="text-xs text-foreground/40 transition-colors hover:text-primary">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
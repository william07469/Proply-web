import { Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";

const SERVICE_LINKS = [
  "Kurumsal Web Sitesi",
  "Cafe & Restoran",
  "Menü Sitesi",
  "Oto Detailing",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#top"
              className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight"
            >
              <span className="size-2.5 rounded-[3px] bg-primary" aria-hidden />
              PROPLY
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Modern işletmeler için modern web siteleri.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#top"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#top"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Alt gezinme">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Sayfalar
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Hizmetler
            </p>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#hizmetler"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 PROPLY. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Made with
            <span className="font-extrabold tracking-tight text-foreground">
              PROPLY
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

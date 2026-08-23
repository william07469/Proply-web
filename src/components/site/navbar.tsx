import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getNavLinks } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const navLinks = getNavLinks(t);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`); },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [navLinks]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-foreground/10 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-base font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="flex size-6 items-center justify-center bg-primary text-[10px] font-black text-primary-foreground"
            aria-hidden
          >
            P
          </span>
          PROPLY
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                active === link.href ? "text-foreground" : "text-foreground/50"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
            className="border border-foreground/20 px-2.5 py-1 text-[11px] font-bold tracking-widest text-foreground/60 transition-colors hover:border-primary hover:text-primary"
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <a
            href="#iletisim"
            className="group inline-flex items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-foreground"
          >
            {t.nav.cta}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="flex size-9 items-center justify-center border border-foreground/20 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Kapat" : "Menü"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-background px-6 pb-10 pt-24 md:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-foreground/10 py-5 text-4xl font-bold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-display)", transitionDelay: `${i * 40}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                className="border border-foreground/20 py-3 text-sm font-bold tracking-widest text-foreground/60"
              >
                {lang === "tr" ? "EN" : "TR"}
              </button>
              <a
                href="#iletisim"
                onClick={() => setOpen(false)}
                className="bg-primary py-4 text-center text-base font-bold text-primary-foreground"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

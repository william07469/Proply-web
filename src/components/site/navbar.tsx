import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { getNavLinks } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const navLinks = getNavLinks(t);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll-spy only on home page
  useEffect(() => {
    if (!isHome) return;
    const hashLinks = navLinks.filter((l) => l.href.startsWith("#"));
    const sections = hashLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActiveHash(`#${e.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [isHome, navLinks]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return isHome && activeHash === href;
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 md:pt-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto relative z-50 flex h-14 md:h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 rounded-full border transition-all duration-300 ${
          scrolled || open
            ? "border-foreground/15 bg-background/70 backdrop-blur-xl shadow-xl shadow-black/20"
            : "border-foreground/10 bg-background/30 backdrop-blur-md shadow-lg shadow-black/10 hover:border-foreground/20 hover:bg-background/45"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-base font-bold tracking-tight text-foreground group"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="flex size-7 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground shadow-sm shadow-primary/30 transition-transform group-hover:scale-105"
            aria-hidden
          >
            P
          </span>
          <span className="tracking-wide">PROPLY</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-1 bg-foreground/[0.03] rounded-full p-1 border border-foreground/5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isHash = link.href.startsWith("#");
              const cls = `relative px-3.5 py-1.5 text-sm font-medium transition-all rounded-full ${
                active ? "text-foreground font-semibold" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`;
              return isHash ? (
                <a key={link.href} href={isHome ? link.href : `/${link.href}`} className={cls}>
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-foreground/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ) : (
                <Link key={link.href} to={link.href as any} className={cls}>
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-foreground/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
            className="rounded-full border border-foreground/20 px-3 py-1.5 text-[11px] font-bold tracking-widest text-foreground/70 transition-all hover:border-primary hover:text-primary hover:scale-105 active:scale-95"
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <a
            href={isHome ? "#contact" : "/#contact"}
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
          >
            {t.nav.cta}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Kapat" : "Menü"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile overlay menu floating card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto fixed inset-x-4 top-20 z-40 max-w-md mx-auto flex flex-col rounded-3xl border border-foreground/15 bg-background/95 backdrop-blur-2xl p-6 shadow-2xl shadow-black/40 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isHash = link.href.startsWith("#");
                const active = isActive(link.href);
                const cls = `flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-bold tracking-tight transition-colors ${
                  active ? "bg-foreground/10 text-foreground" : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                }`;
                return isHash ? (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => setOpen(false)}
                    className={cls}
                    style={{ fontFamily: "var(--font-display)", transitionDelay: `${i * 30}ms` }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href as any}
                    onClick={() => setOpen(false)}
                    className={cls}
                    style={{ fontFamily: "var(--font-display)", transitionDelay: `${i * 30}ms` }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-foreground/10">
              <button
                type="button"
                onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                className="flex-1 rounded-2xl border border-foreground/20 py-3 text-sm font-bold tracking-widest text-foreground/70 hover:border-primary hover:text-primary transition-colors"
              >
                {lang === "tr" ? "EN" : "TR"}
              </button>
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setOpen(false)}
                className="flex-[2] rounded-2xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-foreground"
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

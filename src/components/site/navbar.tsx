import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="relative z-50 mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Ana gezinme"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="size-2.5 rounded-[3px] bg-primary" aria-hidden />
          PROPLY
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                active === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
              {active === link.href ? (
                <motion.span
                  layoutId="nav-active-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary"
                  aria-hidden
                />
              ) : null}
            </a>
          ))}
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Teklif Al
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-background px-6 pb-10 pt-28 transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobil gezinme">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-border py-4 text-3xl font-extrabold tracking-tight transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#iletisim"
          onClick={() => setOpen(false)}
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "460ms" : "0ms" }}
        >
          Teklif Al
          <ArrowUpRight className="size-5" />
        </a>
      </div>
    </header>
  );
}

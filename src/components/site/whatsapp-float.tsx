import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_NUMBERS } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

const waLink = (number: string, message: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export function WhatsAppFloat() {
  const { lang, t } = useLang();
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const defaultMessage = t.wa.defaultMessage;

  // Hide while the contact section is already on screen — avoids redundancy.
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 md:bottom-8 md:right-8">
          {/* Number picker */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="wa-picker"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="flex flex-col gap-2 border border-foreground/10 bg-background p-3 shadow-2xl shadow-foreground/20"
              >
                {PHONE_NUMBERS.map((p) => (
                  <a
                    key={p.href}
                    href={waLink(p.number, defaultMessage)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface hover:text-primary"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#25d366]/15 text-[#25d366]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-normal text-foreground/45">
                        {p.label === "Türkiye"
                          ? t.wa.domestic
                          : t.wa.international}
                      </span>
                      <span>{p.number}</span>
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            key="whatsapp-float"
            aria-label={t.wa.ariaLabel}
            onClick={() => setOpen((o) => !o)}
            initial={{ opacity: 0, scale: 0.5, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/50 transition-transform duration-200 hover:scale-110"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 motion-safe:animate-ping"
            />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="relative size-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground opacity-0 shadow-xl transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 md:block">
              {t.wa.tooltip}
            </span>
          </motion.button>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
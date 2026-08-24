// PROPLY site-wide constants
import type { Translations } from "./i18n";

export const WHATSAPP_NUMBER = "905466982443";

export const PHONE_NUMBERS = [
  { label: "Türkiye", labelEn: "Turkey", number: "+90 546 698 24 43", href: "tel:+905466982443" },
  { label: "Kanada", labelEn: "Canada", number: "+1 289 999 5739", href: "tel:+12899995739" },
] as const;

export const CONTACT_EMAIL = "proplycrm@gmail.com";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_HREFS = {
  home: "#top",
  services: "#services",
  works: "#works",
  process: "#process",
  contact: "#contact",
  blog: "/blog",
} as const;

export function getNavLinks(t: Translations) {
  return [
    { label: t.nav.home, href: NAV_HREFS.home },
    { label: t.nav.services, href: NAV_HREFS.services },
    { label: t.nav.works, href: NAV_HREFS.works },
    { label: t.nav.process, href: NAV_HREFS.process },
    { label: t.nav.contact, href: NAV_HREFS.contact },
    { label: t.nav.blog, href: NAV_HREFS.blog },
  ];
}

// Backward compat
export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hizmetler", href: "#services" },
  { label: "Çalışmalar", href: "#works" },
  { label: "Süreç", href: "#process" },
  { label: "İletişim", href: "#contact" },
] as const;

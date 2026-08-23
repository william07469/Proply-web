// PROPLY site-wide constants

export const WHATSAPP_NUMBER = "905466982443";

export const PHONE_NUMBERS = [
  { label: "Türkiye", number: "+90 546 698 24 43", href: "tel:+905466982443" },
  { label: "Kanada", number: "+1 289 999 5739", href: "tel:+12899995739" },
] as const;

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Çalışmalar", href: "#calismalar" },
  { label: "Süreç", href: "#surec" },
  { label: "İletişim", href: "#iletisim" },
] as const;

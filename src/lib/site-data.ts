// PROPLY site-wide constants

export const WHATSAPP_NUMBER = "905466982443";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Çalışmalar", href: "#calismalar" },
  { label: "Süreç", href: "#surec" },
  { label: "İletişim", href: "#iletisim" },
] as const;

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "tr" | "en";

export const translations = {
  tr: {
    // Nav
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      works: "Çalışmalar",
      process: "Süreç",
      contact: "İletişim",
      blog: "Blog",
      cta: "Teklif Al",
    },
    // Hero
    hero: {
      badge: "Profesyonel web site tasarımı.",
      h1a: "İşletmeniz için",
      h1b: "web sitesi.",
      h1accent: "profesyonel",
      desc: "Küçük işletmeler için modern web site tasarımı ve geliştirme. Hızlı, mobil uyumlu, SEO odaklı — 2–4 haftada teslim.",
      cta1: "Web Sitenizi Oluşturun",
      cta2: "Çalışmalarımızı Gör",
      features: "Modern tasarım • Mobil uyumlu • Hızlı • SEO odaklı",
      mockupAlt: "PROPLY tarafından tasarlanan premium restoran web sitesi örneği",
      skipLink: "İçeriğe geç",
    },
    // Stats
    stats: {
      projects: "Teslim Edilen Proje",
      satisfaction: "Müşteri Memnuniyeti",
      delivery: "Hafta İçinde Teslim",
      ariaLabel: "PROPLY rakamları",
    },
    // Trust Bar
    trustBar: {
      subtitle: "Küçük işletmelerden güçlü markalara.",
    },
    // Services
    services: {
      kicker: "Hizmetler",
      title: "İhtiyacınız olan dijital görünüm, tek yerde.",
      items: [
        {
          title: "Kurumsal Web Sitesi",
          desc: "Modern ve profesyonel bir web sitesiyle markanızın internetteki görünümünü güçlendirin.",
        },
        {
          title: "Cafe & Restoran",
          desc: "Menünüzü, konseptinizi ve işletmenizi müşterilerinize modern bir şekilde gösterin.",
        },
        {
          title: "Menü Sitesi",
          desc: "QR kod üzerinden açılabilen hızlı, mobil uyumlu ve şık dijital menüler.",
        },
        {
          title: "Oto Detailing",
          desc: "Araç bakım ve detailing işletmeleri için güçlü görsel sunum ve müşteri odaklı web siteleri.",
        },
      ],
    },
    // Why
    why: {
      kicker: "Neden PROPLY",
      title: "Sadece güzel değil.\nİşe yarayan siteler.",
      items: [
        { title: "Mobil Öncelikli", desc: "Telefon, tablet ve bilgisayarda kusursuz görünüm." },
        { title: "Hızlı", desc: "Gereksiz yüklerden arındırılmış hızlı sayfalar." },
        { title: "SEO Temeli", desc: "Arama motorlarının anlayabileceği temiz yapı." },
        { title: "Müşteri Odaklı", desc: "Ziyaretçiyi iletişime ve aksiyona yönlendiren tasarım." },
      ],
    },
    // Portfolio
    portfolio: {
      kicker: "Referanslar",
      title: "Yaptığımız işler.",
      desc: "Her proje; markaya özel tasarım, hızlı altyapı ve dönüşüm odaklı bir yapıyla teslim edilir.",
      viewProject: "Projeyi Gör",
      imgAlt: "web sitesi önizlemesi",
      projects: [
        {
          description:
            "Güçlü yemek fotoğrafçılığı, menü sunumu, marka hikayesi, galeri ve iletişim bölümleriyle premium Türk restoranı web sitesi.",
        },
        {
          description:
            "Menü keşfi, atmosfer, galeri ve işletme bilgilerine odaklanan, mobil öncelikli modern cafe web sitesi.",
        },
        {
          description:
            "Görsel sunum, hizmetler ve ziyaretçiyi müşteriye dönüştürmeye odaklanan premium detailing web sitesi.",
        },
        {
          description:
            "Sade görsel kimlik, menü odaklı deneyim ve yerel işletme sunumuyla modern kahve dükkanı web sitesi.",
        },
      ],
    },
    // Process
    process: {
      kicker: "Süreç",
      title: "Nasıl çalışıyoruz?",
      steps: [
        { title: "Tanışalım", desc: "İşletmenizi ve ihtiyaçlarınızı öğreniyoruz." },
        { title: "Tasarım", desc: "Markanıza uygun modern arayüzü oluşturuyoruz." },
        { title: "Geliştirme", desc: "Siteyi hızlı, responsive ve işlevsel şekilde geliştiriyoruz." },
        { title: "Yayına Alma", desc: "Son kontrolleri yapıp sitenizi yayına alıyoruz." },
      ],
    },
    // Pricing
    pricing: {
      kicker: "Fiyatlandırma",
      title: "Her proje özel,\nher fiyat ona göre.",
      note: "Her proje işletmenin ihtiyaçlarına göre özel olarak fiyatlandırılır.",
      plans: [
        {
          name: "STARTER",
          price: "₺9.900",
          suffix: "'den başlayan",
          desc: "Küçük işletmeler ve temel kurumsal web siteleri için sağlam bir dijital başlangıç.",
          features: [
            "Kurumsal web sitesi tasarımı",
            "Mobil uyumlu & hızlı altyapı",
            "Temel SEO kurulumu",
            "WhatsApp entegrasyonu",
            "İletişim formu",
            "Alan adı & yayın desteği",
          ],
          cta: "Projenizi Konuşalım",
        },
        {
          name: "BUSINESS",
          price: "₺17.500",
          suffix: "'den başlayan",
          desc: "Profesyonel tasarım, mobil uyumluluk, SEO ve işletmeye özel geliştirmeler içeren standart paket.",
          features: [
            "Özel marka tasarımı",
            "Çoklu sayfa & bölüm",
            "Gelişmiş animasyonlar",
            "Kapsamlı SEO kurulumu",
            "Performans optimizasyonu",
            "Google Analytics entegrasyonu",
            "Öncelikli destek",
          ],
          cta: "Projenizi Konuşalım",
        },
        {
          name: "PREMIUM",
          price: "₺25.000 – ₺50.000+",
          suffix: "",
          desc: "Daha gelişmiş tasarım, özel animasyonlar, gelişmiş SEO, entegrasyonlar ve özel fonksiyonlar.",
          features: [
            "Tamamen özgün tasarım",
            "Özel animasyon & mikro etkileşimler",
            "İleri düzey SEO stratejisi",
            "Üçüncü parti entegrasyonlar",
            "Özel fonksiyon geliştirme",
            "Uzun vadeli bakım & destek",
          ],
          cta: "Projenizi Konuşalım",
        },
      ],
    },
    // About
    about: {
      kicker: "PROPLY",
      title: "Biz ne yapıyoruz?",
      p1: "PROPLY, işletmelerin dijital dünyada daha profesyonel görünmesine yardımcı olan modern bir web stüdyosudur.",
      p2: "Tasarımdan geliştirmeye kadar sürecin tamamını üstleniyor, her işletme için markasına uygun ve amacına hizmet eden web siteleri oluşturuyoruz.",
      tags: ["Tasarım", "Geliştirme", "SEO", "Performans", "Destek"],
      codeComment: "// Yayına hazır.",
      perfLabel: "Performans",
      perfScore: "A+ skor",
    },
    // FAQ
    faq: {
      kicker: "SSS",
      title: "Merak edilenler.",
      items: [
        {
          q: "Web sitem ne kadar sürede hazır olur?",
          a: "Projenin kapsamına göre değişmekle birlikte çoğu web sitesi 2–4 hafta içinde yayına alınır.",
        },
        {
          q: "Mevcut web sitemi yenileyebilir misiniz?",
          a: "Evet. Mevcut sitenizi analiz edip modern, hızlı ve mobil uyumlu bir yapıyla baştan tasarlayabiliriz.",
        },
        {
          q: "Fiyatlara neler dahil?",
          a: "Tasarım, geliştirme, mobil uyumluluk, temel SEO ve WhatsApp entegrasyonu tüm paketlere dahildir. Kapsam, projenize göre birlikte netleştirilir.",
        },
        {
          q: "Alan adı ve yayın süreci nasıl ilerliyor?",
          a: "Alan adı ve yayın altyapısını sizin adınıza yapılandırıyor, siteyi size ait hesaplarda teslim ediyoruz.",
        },
        {
          q: "Sitemi sonradan güncelleyebilir miyim?",
          a: "Evet. İhtiyacınıza göre kolay güncellenebilir bir yapı kuruyor, dilerseniz düzenli bakım desteği de sunuyoruz.",
        },
      ],
    },
    // CTA
    cta: {
      h2a: "İşletmenizin yeni web sitesi",
      h2b: "hazır olabilir.",
      desc: "Projenizi anlatın, size uygun çözümü birlikte oluşturalım.",
      cta1: "Ücretsiz Teklif Al",
      cta2: "WhatsApp'tan Yaz",
    },
    // Contact
    contact: {
      kicker: "İletişim",
      title: "Projenizi anlatalım.",
      desc: "Formu doldurun, projeniz için size en uygun çözümü birlikte netleştirelim. Hesap oluşturmanıza gerek yok.",
      waTitle: "WhatsApp üzerinden hızlıca ulaşın.",
      waDesc: "Sorularınız için genellikle aynı gün dönüş yapıyoruz.",
      waLink: "WhatsApp'tan Yaz",
      fields: {
        name: "Ad Soyad",
        namePlaceholder: "Adınız Soyadınız",
        business: "İşletme Adı",
        businessPlaceholder: "İşletmenizin adı",
        email: "E-posta",
        emailPlaceholder: "ornek@isletme.com",
        phone: "Telefon / WhatsApp",
        phonePlaceholder: "+90 5__ ___ __ __",
        details: "Projeniz hakkında kısaca bilgi",
        detailsPlaceholder: "İşletmenizden ve nasıl bir web sitesi istediğinizden kısaca bahsedin...",
        honeypot: "Şirket web sitesi (doldurmayın)",
        submit: "Teklif Gönder",
      },
      successMsg: "Teşekkürler! Mesajınız WhatsApp üzerinden iletilmek üzere hazırlandı.",
      waMessage: "Merhaba! İşletmem için web sitesi yaptırmak istiyorum.",
      waDefaultMessage: "Merhaba! İşletmem için web sitesi yaptırmak istiyorum, bilgi alabilir miyim?",
      formLines: {
        greeting: "Merhaba! İşletmem için web sitesi yaptırmak istiyorum.",
        name: "Ad Soyad",
        business: "İşletme",
        email: "E-posta",
        phone: "Telefon",
        project: "Proje",
      },
    },
    // Footer
    footer: {
      tagline: "Modern işletmeler için modern web siteleri.",
      pages: "Sayfalar",
      services: "Hizmetler",
      contact: "İletişim",
      serviceLinks: ["Kurumsal Web Sitesi", "Cafe & Restoran", "Menü Sitesi", "Oto Detailing"],
      copyright: "© 2026 PROPLY. Tüm hakları saklıdır.",
      phoneLabels: { turkey: "Türkiye", canada: "Kanada" },
    },
    // Blog page UI strings
    blogPage: {
      kicker: "Blog",
      title: "Dijital dünyada\nbilgi edinin.",
      desc: "Web tasarım, SEO ve dijital strateji hakkında küçük işletmelere yönelik pratik yazılar.",
      readMore: "Devamını Oku",
      readingTime: "dk okuma",
      backToBlog: "← Blog'a Dön",
      backToHome: "Ana Sayfaya Dön",
      ctaTitle: "Web sitenizi yaptırmaya hazır mısınız?",
      ctaDesc: "Projenizi anlatın, birlikte oluşturalım.",
      ctaBtn: "Ücretsiz Teklif Al",
    },
    // WhatsApp float
    wa: {
      domestic: "Yurt İçi",
      international: "Yurt Dışı",
      tooltip: "Hemen yazın",
      ariaLabel: "WhatsApp ile yazın",
      defaultMessage: "Merhaba! İşletmem için web sitesi yaptırmak istiyorum, bilgi alabilir miyim?",
    },
    // Meta
    meta: {
      title: "PROPLY — Modern Web Siteleri",
      description: "PROPLY, işletmeler için modern, hızlı ve mobil uyumlu web siteleri tasarlar ve geliştirir.",
    },
    // 404 / Error
    notFound: {
      title: "Sayfa bulunamadı",
      desc: "Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.",
      back: "Ana Sayfaya Dön",
    },
    error: {
      title: "Bu sayfa yüklenemedi",
      desc: "Beklenmeyen bir sorun oluştu. Sayfayı yenileyebilir veya ana sayfaya dönebilirsiniz.",
      retry: "Tekrar Dene",
      back: "Ana Sayfaya Dön",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      works: "Works",
      process: "Process",
      contact: "Contact",
      blog: "Blog",
      cta: "Get a Quote",
    },
    hero: {
      badge: "Look more professional online.",
      h1a: "Modern websites",
      h1b: "for your business.",
      h1accent: "modern",
      desc: "We design fast, mobile-friendly websites that showcase your brand and make it easy for customers to reach you.",
      cta1: "Build Your Website",
      cta2: "See Our Work",
      features: "Modern design • Mobile-friendly • Fast • SEO-focused",
      mockupAlt: "Premium restaurant website example designed by PROPLY",
      skipLink: "Skip to content",
    },
    stats: {
      projects: "Projects Delivered",
      satisfaction: "Client Satisfaction",
      delivery: "Weeks to Deliver",
      ariaLabel: "PROPLY numbers",
    },
    trustBar: {
      subtitle: "From small businesses to strong brands.",
    },
    services: {
      kicker: "Services",
      title: "The digital presence you need, all in one place.",
      items: [
        {
          title: "Corporate Website",
          desc: "Strengthen your brand's online presence with a modern and professional website.",
        },
        {
          title: "Cafe & Restaurant",
          desc: "Showcase your menu, concept and business to your customers in a modern way.",
        },
        {
          title: "Menu Website",
          desc: "Fast, mobile-friendly and elegant digital menus accessible via QR code.",
        },
        {
          title: "Auto Detailing",
          desc: "Premium visual presentation and customer-focused websites for auto care and detailing businesses.",
        },
      ],
    },
    why: {
      kicker: "Why PROPLY",
      title: "Not just beautiful.\nWebsites that work.",
      items: [
        { title: "Mobile-First", desc: "Flawless appearance on phones, tablets and desktops." },
        { title: "Fast", desc: "Lean, optimized pages with no unnecessary bloat." },
        { title: "SEO Ready", desc: "Clean structure that search engines can understand." },
        { title: "Customer-Focused", desc: "Design that guides visitors to contact and take action." },
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Our work.",
      desc: "Every project is delivered with a brand-specific design, fast infrastructure and a conversion-focused structure.",
      viewProject: "View Project",
      imgAlt: "website preview",
      projects: [
        {
          description:
            "Premium Turkish restaurant website with strong food photography, menu presentation, brand story, gallery and contact section.",
        },
        {
          description:
            "Mobile-first modern cafe website focused on menu discovery, atmosphere, gallery and business information.",
        },
        {
          description:
            "Premium detailing website focused on visual presentation, services and converting visitors into customers.",
        },
        {
          description:
            "Modern coffee shop website with a clean visual identity, menu-focused experience and local business presentation.",
        },
      ],
    },
    process: {
      kicker: "Process",
      title: "How we work.",
      steps: [
        { title: "Discovery", desc: "We learn about your business and requirements." },
        { title: "Design", desc: "We create a modern interface tailored to your brand." },
        { title: "Development", desc: "We build the site fast, responsive and functional." },
        { title: "Launch", desc: "We do final checks and take your site live." },
      ],
    },
    pricing: {
      kicker: "Pricing",
      title: "Every project is unique,\npriced accordingly.",
      note: "Every project is priced individually based on the specific needs of the business.",
      plans: [
        {
          name: "STARTER",
          price: "₺9,900",
          suffix: " starting from",
          desc: "A solid digital start for small businesses and basic corporate websites.",
          features: [
            "Corporate website design",
            "Mobile-friendly & fast infrastructure",
            "Basic SEO setup",
            "WhatsApp integration",
            "Contact form",
            "Domain & launch support",
          ],
          cta: "Let's Talk",
        },
        {
          name: "BUSINESS",
          price: "₺17,500",
          suffix: " starting from",
          desc: "Professional design, mobile compatibility, SEO and business-specific development.",
          features: [
            "Custom brand design",
            "Multiple pages & sections",
            "Advanced animations",
            "Comprehensive SEO setup",
            "Performance optimization",
            "Google Analytics integration",
            "Priority support",
          ],
          cta: "Let's Talk",
        },
        {
          name: "PREMIUM",
          price: "₺25,000 – ₺50,000+",
          suffix: "",
          desc: "Advanced design, custom animations, advanced SEO, integrations and custom functionality.",
          features: [
            "Fully original design",
            "Custom animations & micro-interactions",
            "Advanced SEO strategy",
            "Third-party integrations",
            "Custom feature development",
            "Long-term maintenance & support",
          ],
          cta: "Let's Talk",
        },
      ],
    },
    about: {
      kicker: "PROPLY",
      title: "What do we do?",
      p1: "PROPLY is a modern web studio that helps businesses look more professional in the digital world.",
      p2: "We handle the entire process from design to development, creating websites that fit each business's brand and serve its purpose.",
      tags: ["Design", "Development", "SEO", "Performance", "Support"],
      codeComment: "// Ready to launch.",
      perfLabel: "Performance",
      perfScore: "A+ score",
    },
    faq: {
      kicker: "FAQ",
      title: "Common questions.",
      items: [
        {
          q: "How long does it take to complete my website?",
          a: "Most websites are launched within 2–4 weeks, depending on the scope of the project.",
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes. We can analyze your current site and redesign it from scratch with a modern, fast and mobile-friendly structure.",
        },
        {
          q: "What is included in the price?",
          a: "Design, development, mobile compatibility, basic SEO and WhatsApp integration are included in all packages. The scope is clarified together based on your project.",
        },
        {
          q: "How does the domain and launch process work?",
          a: "We set up the domain and hosting infrastructure on your behalf and deliver the site in your own accounts.",
        },
        {
          q: "Can I update my site later?",
          a: "Yes. We build an easy-to-update structure and offer ongoing maintenance support if you need it.",
        },
      ],
    },
    cta: {
      h2a: "Your business's new website",
      h2b: "can be ready.",
      desc: "Tell us about your project and we'll build the right solution together.",
      cta1: "Get a Free Quote",
      cta2: "Chat on WhatsApp",
    },
    contact: {
      kicker: "Contact",
      title: "Tell us about your project.",
      desc: "Fill out the form and we'll work out the best solution for your project together. No account needed.",
      waTitle: "Reach us quickly via WhatsApp.",
      waDesc: "We usually respond the same day.",
      waLink: "Chat on WhatsApp",
      fields: {
        name: "Full Name",
        namePlaceholder: "Your Full Name",
        business: "Business Name",
        businessPlaceholder: "Your business name",
        email: "Email",
        emailPlaceholder: "example@business.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "+1 ___ ___ ____",
        details: "Brief description of your project",
        detailsPlaceholder: "Tell us about your business and the kind of website you want...",
        honeypot: "Company website (do not fill)",
        submit: "Send Quote Request",
      },
      successMsg: "Thank you! Your message has been prepared for delivery via WhatsApp.",
      waMessage: "Hello! I'd like to get a website built for my business.",
      waDefaultMessage: "Hello! I'd like to get a website built for my business. Can you help?",
      formLines: {
        greeting: "Hello! I'd like to get a website built for my business.",
        name: "Full Name",
        business: "Business",
        email: "Email",
        phone: "Phone",
        project: "Project",
      },
    },
    footer: {
      tagline: "Modern websites for modern businesses.",
      pages: "Pages",
      services: "Services",
      contact: "Contact",
      serviceLinks: ["Corporate Website", "Cafe & Restaurant", "Menu Website", "Auto Detailing"],
      copyright: "© 2026 PROPLY. All rights reserved.",
      phoneLabels: { turkey: "Turkey", canada: "Canada" },
    },
    // Blog page UI strings
    blogPage: {
      kicker: "Blog",
      title: "Learn about\nthe digital world.",
      desc: "Practical articles for small businesses on web design, SEO and digital strategy.",
      readMore: "Read More",
      readingTime: "min read",
      backToBlog: "← Back to Blog",
      backToHome: "Back to Home",
      ctaTitle: "Ready to get your website built?",
      ctaDesc: "Tell us about your project and let's build it together.",
      ctaBtn: "Get a Free Quote",
    },
    wa: {
      domestic: "Domestic",
      international: "International",
      tooltip: "Message us",
      ariaLabel: "Chat on WhatsApp",
      defaultMessage: "Hello! I'd like to get a website built for my business. Can you help?",
    },
    meta: {
      title: "PROPLY — Modern Websites",
      description: "PROPLY designs and develops modern, fast and mobile-friendly websites for businesses.",
    },
    notFound: {
      title: "Page not found",
      desc: "The page you're looking for may have moved or never existed.",
      back: "Back to Home",
    },
    error: {
      title: "This page couldn't be loaded",
      desc: "An unexpected error occurred. You can refresh the page or go back to the home page.",
      retry: "Try Again",
      back: "Back to Home",
    },
  },
} as const;

export type Translations = typeof translations.tr;

// Context
interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const saved = localStorage.getItem("proply-lang") as Lang | null;
    if (saved === "en" || saved === "tr") return saved;
    const browser = navigator.language.startsWith("en") ? "en" : "tr";
    return browser;
  });

  const handleSetLang = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("proply-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

// ── Comparison section translations (appended) ──
export const comparisonTranslations = {
  tr: {
    kicker: "Neden Biz?",
    title: "Doğru seçimi\nyapmak kolay.",
    desc: "Her seçeneğin gerçek maliyetini, hızını ve kalitesini karşılaştırın.",
    cols: ["PROPLY", "Freelancer", "Büyük Ajans"],
    rows: [
      {
        label: "Teslim Süresi",
        values: ["2–4 hafta", "4–10 hafta", "3–6 ay"],
        highlight: 0,
      },
      {
        label: "Fiyat Aralığı",
        values: ["₺9.900'den başlayan", "₺3.000–₺15.000", "₺40.000+"],
        highlight: 0,
      },
      {
        label: "Tasarım Kalitesi",
        values: ["Markaya özel", "Değişken", "Yüksek ama jenerik"],
        highlight: 0,
      },
      {
        label: "Mobil Uyumluluk",
        values: ["✓ Standart", "Değişken", "✓ Standart"],
        highlight: 0,
      },
      {
        label: "SEO Temeli",
        values: ["✓ Dahil", "Ek ücret", "✓ Dahil"],
        highlight: 0,
      },
      {
        label: "WhatsApp Entegrasyonu",
        values: ["✓ Dahil", "Ek ücret", "Ek ücret"],
        highlight: 0,
      },
      {
        label: "Tek İletişim Noktası",
        values: ["✓ Her zaman", "Bazen zor", "✗ Account manager"],
        highlight: 0,
      },
      {
        label: "Revizyon Süreci",
        values: ["Hızlı & esnek", "Değişken", "Yavaş & bürokratik"],
        highlight: 0,
      },
    ],
  },
  en: {
    kicker: "Why Us?",
    title: "Making the right\nchoice is easy.",
    desc: "Compare the real cost, speed and quality of each option.",
    cols: ["PROPLY", "Freelancer", "Large Agency"],
    rows: [
      {
        label: "Delivery Time",
        values: ["2–4 weeks", "4–10 weeks", "3–6 months"],
        highlight: 0,
      },
      {
        label: "Price Range",
        values: ["From ₺9,900", "₺3,000–₺15,000", "₺40,000+"],
        highlight: 0,
      },
      {
        label: "Design Quality",
        values: ["Brand-specific", "Variable", "High but generic"],
        highlight: 0,
      },
      {
        label: "Mobile Compatibility",
        values: ["✓ Standard", "Variable", "✓ Standard"],
        highlight: 0,
      },
      {
        label: "SEO Foundation",
        values: ["✓ Included", "Extra cost", "✓ Included"],
        highlight: 0,
      },
      {
        label: "WhatsApp Integration",
        values: ["✓ Included", "Extra cost", "Extra cost"],
        highlight: 0,
      },
      {
        label: "Single Point of Contact",
        values: ["✓ Always", "Sometimes hard", "✗ Account manager"],
        highlight: 0,
      },
      {
        label: "Revision Process",
        values: ["Fast & flexible", "Variable", "Slow & bureaucratic"],
        highlight: 0,
      },
    ],
  },
};

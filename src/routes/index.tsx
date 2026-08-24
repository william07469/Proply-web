import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { WhyProply } from "@/components/site/why";
import { Portfolio } from "@/components/site/portfolio";
import { Process } from "@/components/site/process";
import { Comparison } from "@/components/site/comparison";
import { Pricing } from "@/components/site/pricing";
import { Testimonials } from "@/components/site/testimonials";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

const TITLE = "Web Site Tasarım & Geliştirme | PROPLY — Profesyonel Web Siteleri";
const DESCRIPTION =
  "PROPLY, küçük işletmeler için profesyonel web site tasarımı ve geliştirme hizmeti sunar. Kurumsal web sitesi, cafe & restoran sitesi, oto detailing sitesi. Hızlı teslim, uygun fiyat.";
const CANONICAL = "https://proply.com.tr/";
const OG_IMAGE = "https://proply.com.tr/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "web site tasarım, web site yaptırma, profesyonel web sitesi, kurumsal web sitesi, cafe web sitesi, restoran web sitesi, oto detailing web sitesi, web tasarım ajansı, mobil uyumlu web sitesi, SEO uyumlu web sitesi" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "PROPLY" },
      { name: "geo.region", content: "TR" },
      { name: "geo.placename", content: "Türkiye" },
      // Open Graph
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1440" },
      { property: "og:image:height", content: "912" },
      { property: "og:site_name", content: "PROPLY" },
      { property: "og:locale", content: "tr_TR" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: CANONICAL },
      { rel: "alternate", hrefLang: "tr", href: CANONICAL },
      { rel: "alternate", hrefLang: "en", href: CANONICAL },
      { rel: "alternate", hrefLang: "x-default", href: CANONICAL },
    ],
    scripts: [
      // LocalBusiness + ProfessionalService schema
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "LocalBusiness"],
          name: "PROPLY",
          description: DESCRIPTION,
          url: CANONICAL,
          logo: "https://proply.com.tr/icon.png",
          image: OG_IMAGE,
          telephone: "+905466982443",
          email: "proplycrm@gmail.com",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+905466982443",
              contactType: "customer service",
              areaServed: "TR",
              availableLanguage: "Turkish",
            },
            {
              "@type": "ContactPoint",
              telephone: "+12899995739",
              contactType: "customer service",
              areaServed: "CA",
              availableLanguage: "English",
            },
          ],
          areaServed: [
            { "@type": "Country", name: "Turkey" },
            { "@type": "Country", name: "Canada" },
          ],
          priceRange: "₺₺",
          currenciesAccepted: "TRY",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Tasarım Hizmetleri",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Kurumsal Web Sitesi Tasarımı",
                description: "Modern ve profesyonel kurumsal web sitesi tasarımı ve geliştirme.",
                price: "7500",
                priceCurrency: "TRY",
              },
              {
                "@type": "Offer",
                name: "Cafe & Restoran Web Sitesi",
                description: "Cafe ve restoranlar için dijital menü ve tanıtım sitesi.",
                price: "7500",
                priceCurrency: "TRY",
              },
              {
                "@type": "Offer",
                name: "Oto Detailing Web Sitesi",
                description: "Oto detailing işletmeleri için tanıtım ve randevu sitesi.",
                price: "7500",
                priceCurrency: "TRY",
              },
            ],
          },
        }),
      },
      // FAQPage schema — FAQ içeriğini Google'a doğrudan besler
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Web sitem ne kadar sürede hazır olur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Projenin kapsamına göre değişmekle birlikte çoğu web sitesi 2–4 hafta içinde yayına alınır.",
              },
            },
            {
              "@type": "Question",
              name: "Web site tasarımı ne kadar tutar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "PROPLY'da web site tasarımı paketleri ₺7.500'den başlar. Fiyat projenin kapsamına ve ihtiyaçlarınıza göre netleştirilir.",
              },
            },
            {
              "@type": "Question",
              name: "Mevcut web sitemi yenileyebilir misiniz?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Evet. Mevcut sitenizi analiz edip modern, hızlı ve mobil uyumlu bir yapıyla baştan tasarlayabiliriz.",
              },
            },
            {
              "@type": "Question",
              name: "Web sitemde SEO var mı?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Evet, tüm paketlere temel SEO kurulumu dahildir. Sayfa başlıkları, meta açıklamaları, hız optimizasyonu ve mobil uyumluluk standart olarak sağlanır.",
              },
            },
          ],
        }),
      },
      // WebSite schema — sitelink searchbox için
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "PROPLY",
          url: CANONICAL,
          description: DESCRIPTION,
          inLanguage: ["tr-TR", "en"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        İçeriğe geç
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <TrustBar />
        <Services />
        <WhyProply />
        <Portfolio />
        <Testimonials />
        <Process />
        <Pricing />
        <Comparison />
        <About />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

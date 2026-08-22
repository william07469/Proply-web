import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { WhyProply } from "@/components/site/why";
import { Portfolio } from "@/components/site/portfolio";
import { Process } from "@/components/site/process";
import { Pricing } from "@/components/site/pricing";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const DESCRIPTION =
  "PROPLY, işletmeler için modern, hızlı ve mobil uyumlu web siteleri tasarlar ve geliştirir.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROPLY — Modern Web Siteleri" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "PROPLY — Modern Web Siteleri" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PROPLY — Modern Web Siteleri" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PROPLY",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustBar />
        <Services />
        <WhyProply />
        <Portfolio />
        <Process />
        <Pricing />
        <About />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const INPUT_CLASSES =
  "w-full rounded-lg border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "Merhaba! Web sitem için teklif almak istiyorum.",
      "",
      `Ad Soyad: ${fd.get("name")}`,
      `İşletme: ${fd.get("business")}`,
      `E-posta: ${fd.get("email")}`,
      `Telefon: ${fd.get("phone")}`,
      `Web sitesi var mı: ${fd.get("hasSite") ?? "Belirtilmedi"}`,
      "",
      `Proje: ${fd.get("details")}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="iletisim" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            kicker="İletişim"
            title="Projenizi anlatalım."
            description="Formu doldurun, projeniz için size en uygun çözümü birlikte netleştirelim. Hesap oluşturmanıza gerek yok."
          />
          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <MessageCircle className="size-5" />
              </span>
              <p className="mt-4 font-bold tracking-tight">
                WhatsApp üzerinden hızlıca ulaşın.
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Sorularınız için genellikle aynı gün dönüş yapıyoruz.
              </p>
              <a
                href={waLink("Merhaba! Web sitem hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
              >
                WhatsApp'tan Yaz
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold text-muted-foreground">
                  Ad Soyad
                </label>
                <input id="name" name="name" required autoComplete="name" placeholder="Adınız Soyadınız" className={INPUT_CLASSES} />
              </div>
              <div>
                <label htmlFor="business" className="mb-2 block text-xs font-semibold text-muted-foreground">
                  İşletme Adı
                </label>
                <input id="business" name="business" required autoComplete="organization" placeholder="İşletmenizin adı" className={INPUT_CLASSES} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold text-muted-foreground">
                  E-posta
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="ornek@isletme.com" className={INPUT_CLASSES} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-semibold text-muted-foreground">
                  Telefon / WhatsApp
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+90 5__ ___ __ __" className={INPUT_CLASSES} />
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2 text-xs font-semibold text-muted-foreground">
                Web sitesi var mı?
              </legend>
              <div className="flex gap-3">
                {["Evet", "Hayır"].map((option) => (
                  <label
                    key={option}
                    className="flex flex-1 cursor-pointer items-center gap-2.5 rounded-lg border border-input bg-surface px-4 py-3 text-sm transition-colors has-checked:border-primary/60 has-checked:bg-primary/10"
                  >
                    <input
                      type="radio"
                      name="hasSite"
                      value={option}
                      className="size-4 accent-[oklch(0.905_0.19_114)]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <label htmlFor="details" className="mb-2 block text-xs font-semibold text-muted-foreground">
                Projeniz hakkında kısaca bilgi
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                required
                placeholder="İşletmenizden ve nasıl bir web sitesi istediğinizden kısaca bahsedin..."
                className={`${INPUT_CLASSES} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              Teklif Gönder
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {sent ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary">
                <Check className="size-4" />
                Teşekkürler! Mesajınız WhatsApp üzerinden iletilmek üzere hazırlandı.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import heroSite from "@/assets/hero-site.jpg";

const TILT_SPRING = { stiffness: 140, damping: 20, mass: 0.5 };
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [5, -5]),
    TILT_SPRING,
  );
  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-7, 7]),
    TILT_SPRING,
  );
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), TILT_SPRING);
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), TILT_SPRING);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion)
      return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid mask-fade-y opacity-70"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 glow-accent blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span
                className="size-1.5 animate-pulse rounded-full bg-primary"
                aria-hidden
              />
              Dijitalde daha profesyonel görünün.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            İşletmeniz için
            <br />
            <span className="text-primary">modern</span> web siteleri.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: EASE }}
            className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg"
          >
            Markanızı güçlü gösteren, hızlı, mobil uyumlu ve müşterilerinizin
            kolayca iletişime geçebileceği web siteleri tasarlıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7, ease: EASE }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#iletisim"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Web Sitenizi Oluşturun
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#calismalar"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-foreground/30 hover:bg-card sm:w-auto"
            >
              Çalışmalarımızı Gör
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.8 }}
            className="mt-7 text-xs font-medium tracking-wide text-muted-foreground"
          >
            Modern tasarım <span className="mx-1.5 text-primary">•</span> Mobil
            uyumlu <span className="mx-1.5 text-primary">•</span> Hızlı{" "}
            <span className="mx-1.5 text-primary">•</span> SEO odaklı
          </motion.p>
        </div>

        {/* Browser mockup with spring tilt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.8, ease: EASE }}
          className="relative mt-16 md:mt-20"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-8 mx-auto h-[380px] max-w-3xl glow-accent blur-3xl"
          />
          <motion.div
            style={{ rotateX, rotateY, x, y, transformPerspective: 1100 }}
            className="relative mx-auto max-w-4xl will-change-transform"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span
                  className="size-2.5 rounded-full bg-muted-foreground/30"
                  aria-hidden
                />
                <span
                  className="size-2.5 rounded-full bg-muted-foreground/30"
                  aria-hidden
                />
                <span
                  className="size-2.5 rounded-full bg-muted-foreground/30"
                  aria-hidden
                />
                <div className="ml-3 flex-1 rounded-md bg-muted px-3 py-1.5 text-center text-[11px] font-medium tracking-wide text-muted-foreground">
                  www.sizinmarkaniz.com
                </div>
              </div>
              <img
                src={heroSite}
                alt="PROPLY tarafından tasarlanan premium restoran web sitesi örneği"
                width={1440}
                height={912}
                fetchPriority="high"
                className="w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

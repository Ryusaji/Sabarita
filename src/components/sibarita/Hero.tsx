import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/sibarita/terraza-dia.png";
import { useLanguage } from "@/lib/LanguageContext";

export const Hero = () => {
  const { t, lang } = useLanguage();
  const [offset, setOffset] = useState(0);

  const chips = lang === 'es' 
    ? ["Coctelería de autor", "Tapas españolas", "Terraza con flores"]
    : ["Signature Cocktails", "Spanish Tapas", "Flowery Terrace"];

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <div
        className="absolute inset-0 -top-20 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Sibarita Habana Terrace"
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-balance leading-[0.95]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/85 font-light">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#reservas">{t("nav.reserve")}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href="#menu">{t("hero.cta")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
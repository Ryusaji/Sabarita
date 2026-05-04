import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import ImageModal from "./ImageModal";
import interior from "@/assets/sibarita/interior.png";
import personal from "@/assets/sibarita/personal.png";
import luisito from "@/assets/sibarita/luisito.png";
import { useLanguage } from "@/lib/LanguageContext";

export const Story = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation values for the "ungrouping" effect
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const x1 = useTransform(scrollYProgress, [0, 0.5], [0, -110]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5], [0, -15]);

  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [0, 110]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  const y3 = useTransform(scrollYProgress, [0, 0.5], [0, 110]);
  const x3 = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const rotate3 = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  return (
    <section id="historia" className="section-pad bg-muted overflow-hidden">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("story.tag")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl text-balance" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("story.title").split('<br />')[0]}<br /> {t("story.title").split('<br />')[1] || ""}
          </h2>
          <p className="mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("story.desc")}
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-background px-5 py-4 shadow-[var(--shadow-md)]">
            <div className="flex items-center gap-1 text-accent">
              <Star size={18} className="fill-accent" />
              <span className="text-lg font-semibold text-foreground">4.7</span>
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              Google<br />{t("story.reviews")}
            </div>
          </div>
        </Reveal>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Main Image (Interior) - Center-left */}
          <motion.div 
            style={{ y: y1, x: x1, rotate: rotate1 }}
            className="absolute z-20 w-[60%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-background cursor-zoom-in"
            onClick={() => setSelectedImg({ src: interior, alt: "Interior de Sibarita" })}
          >
            <img
              src={interior}
              alt="Interior de Sibarita"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Personal Image - Right */}
          <motion.div 
            style={{ y: y2, x: x2, rotate: rotate2 }}
            className="absolute z-10 w-[55%] aspect-square rounded-3xl overflow-hidden shadow-xl cursor-zoom-in"
            onClick={() => setSelectedImg({ src: personal, alt: "Personal de Sibarita" })}
          >
            <img
              src={personal}
              alt="Personal de Sibarita"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Luisito Comunica Image - Left */}
          <motion.div 
            style={{ y: y3, x: x3, rotate: rotate3 }}
            className="absolute z-30 w-[50%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-background cursor-zoom-in"
            onClick={() => setSelectedImg({ src: luisito, alt: "Luisito Comunica en Sibarita" })}
          >
            <img
              src={luisito}
              alt="Luisito Comunica en Sibarita"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        imageSrc={selectedImg?.src || ""}
        altText={selectedImg?.alt || ""}
      />
    </section>
  );
};

export default Story;
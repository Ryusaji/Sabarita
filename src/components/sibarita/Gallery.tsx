import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import ImageModal from "./ImageModal";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

// Importing ambiente images
import amb1 from "@/assets/sibarita/ambiente/ambiente-1.png";
import amb2 from "@/assets/sibarita/ambiente/ambiente-2.png";
import amb3 from "@/assets/sibarita/ambiente/ambiente-3.png";
import amb4 from "@/assets/sibarita/ambiente/ambiente-4.png";
import amb5 from "@/assets/sibarita/ambiente/ambiente-5.png";
import amb6 from "@/assets/sibarita/ambiente/ambiente-6.png";
import amb7 from "@/assets/sibarita/ambiente/ambiente-7.png";
import amb8 from "@/assets/sibarita/ambiente/ambiente-8.png";
import amb9 from "@/assets/sibarita/ambiente/ambiente-9.png";
import amb10 from "@/assets/sibarita/ambiente/ambiente-10.png";

const ambienteImages = [amb1, amb2, amb3, amb4, amb5, amb6, amb7, amb8, amb9, amb10];

export const Gallery = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollTo;
      
      if (direction === 'left') {
        scrollTo = scrollLeft - clientWidth * 0.8;
        if (scrollTo < 0) scrollTo = scrollWidth; // Loop to end
      } else {
        scrollTo = scrollLeft + clientWidth * 0.8;
        if (scrollLeft + clientWidth >= scrollWidth - 10) scrollTo = 0; // Loop to start
      }
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="galeria" className="bg-surface-dark text-surface-dark-foreground overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-soft font-semibold">{t("gallery.tag")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl text-balance" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t("gallery.title")}
            </h2>
          </Reveal>
          
          <Reveal delay={200} className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white h-12 w-12"
              onClick={() => scroll('left')}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white h-12 w-12"
              onClick={() => scroll('right')}
            >
              <ChevronRight size={24} />
            </Button>
          </Reveal>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 lg:px-10 pb-8 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ambienteImages.map((src, i) => (
          <div 
            key={i} 
            className="relative h-[400px] w-[300px] md:h-[500px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-3xl snap-center transition-transform duration-500 hover:scale-[1.02] cursor-zoom-in"
            onClick={() => setSelectedImg({ src, alt: `Ambiente Sibarita ${i + 1}` })}
          >
            <img
              src={src}
              alt={`Ambiente Sibarita ${i + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
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

export default Gallery;
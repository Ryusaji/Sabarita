import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Word = ({ word, index, total, progress }: WordProps) => {
  const start = index / total;
  const end = start + (1 / total) * 2;
  
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const y = useTransform(progress, [start, end], [20, 0]);
  const blur = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span
      style={{ 
        fontFamily: "'Playfair Display', serif",
        opacity, 
        y, 
        filter: `blur(${blur}px)` 
      }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight inline-block"
    >
      {word}
    </motion.span>
  );
};

export const ScrollPhrase = () => {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text = lang === 'es' 
    ? "Una mesa no es solo una mesa, es el comienzo de una gran historia."
    : "A table is not just a table, it's the beginning of a great story.";

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="py-32 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, i) => (
            <Word 
              key={i} 
              word={word} 
              index={i} 
              total={words.length} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollPhrase;

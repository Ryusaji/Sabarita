import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export const StatsBar = () => {
  const { lang } = useLanguage();

  const stats = [
    { label: lang === 'es' ? "Puntuación Google" : "Google Score", value: "4.7★", isCounter: false },
    { label: lang === 'es' ? "Reseñas Reales" : "Real Reviews", value: 484, isCounter: true, suffix: "+" },
    { label: lang === 'es' ? "Desde" : "Since", value: 2021, isCounter: true },
  ];

  return (
    <section className="bg-background py-12 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap justify-center gap-12 md:gap-24">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {stat.isCounter ? (
                <>
                  <Counter value={stat.value as number} />
                  {stat.suffix || ""}
                </>
              ) : (
                stat.value
              )}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const faqData = {
  es: [
    {
      q: "¿Es necesario reservar?",
      a: "Recomendamos reservar, especialmente para la terraza durante el atardecer y fines de semana, para asegurar su lugar preferido."
    },
    {
      q: "¿Tienen opciones vegetarianas?",
      a: "Sí, contamos con una variedad de tapas y platos principales diseñados para vegetarianos, siempre manteniendo el sabor sibarita."
    },
    {
      q: "¿Cuál es el horario de la terraza?",
      a: "Nuestra terraza abre desde el mediodía hasta la medianoche, ofreciendo vistas espectaculares y coctelería Tiki exclusiva."
    },
    {
      q: "¿Tienen música en vivo?",
      a: "Sí, frecuentemente contamos con artistas locales que amenizan las cenas en la terraza con jazz, son cubano y ritmos contemporáneos."
    }
  ],
  en: [
    {
      q: "Is a reservation necessary?",
      a: "We recommend booking, especially for the rooftop during sunset and weekends, to ensure your preferred spot."
    },
    {
      q: "Do you have vegetarian options?",
      a: "Yes, we have a variety of tapas and main dishes designed for vegetarians, always maintaining the sibarita flavor."
    },
    {
      q: "What are the rooftop hours?",
      a: "Our rooftop is open from noon to midnight, offering spectacular views and exclusive Tiki cocktails."
    },
    {
      q: "Do you have live music?",
      a: "Yes, we frequently have local artists who liven up dinners on the terrace with jazz, Cuban son, and contemporary rhythms."
    }
  ]
};

export const FAQ = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = faqData[lang];

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">FAQ</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("faq.title")}
          </h2>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-foreground">{item.q}</span>
                {openIndex === i ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-muted-foreground" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

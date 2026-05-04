import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const reviews = {
  es: [
    {
      text: "Los cócteles estaban deliciosos y la decoración increíble. La terraza es un sueño y el ambiente es simplemente inmejorable.",
      name: "Esperanza Morales",
      role: "Visitante Local",
      color: "bg-emerald-500",
    },
    {
      text: "Un lugar único para desconectar de verdad. Acogedor, atención personalizada y la comida deliciosa, volvería siempre.",
      name: "Iván Martínez",
      role: "Guía Turístico",
      color: "bg-rose-500",
    },
    {
      text: "El rincón perfecto tras recorrer la Habana Vieja. Café excelente, atención impecable y un patio que es pura calma.",
      name: "José Ángel",
      role: "Cliente Fiel",
      color: "bg-violet-500",
    },
  ],
  en: [
    {
      text: "The cocktails were delicious and the decoration incredible. The terrace is a dream and the atmosphere is simply unbeatable.",
      name: "Esperanza Morales",
      role: "Local Visitor",
      color: "bg-emerald-500",
    },
    {
      text: "A unique place to truly disconnect. Cozy, personalized attention and delicious food, I would always come back.",
      name: "Iván Martínez",
      role: "Tour Guide",
      color: "bg-rose-500",
    },
    {
      text: "The perfect corner after touring Old Havana. Excellent coffee, impeccable service and a patio that is pure calm.",
      name: "José Ángel",
      role: "Regular Customer",
      color: "bg-violet-500",
    },
  ]
};

export const Reviews = () => {
  const { lang, t } = useLanguage();
  const currentReviews = reviews[lang];

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{lang === 'es' ? 'Reseñas' : 'Reviews'}</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {lang === 'es' ? 'Lo que dicen nuestros clientes' : 'What our customers say'}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            {lang === 'es' 
              ? 'Opiniones reales de quienes han vivido la experiencia sibarita.' 
              : 'Real opinions from those who have lived the sibarita experience.'}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {currentReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className="relative h-full rounded-[2rem] border border-border bg-muted/30 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-background hover:shadow-xl group">
                <Quote className="absolute top-6 right-8 text-accent/10 h-12 w-12 transition-colors group-hover:text-accent/20" />
                
                <div className="flex gap-0.5 text-accent mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-accent" />
                  ))}
                </div>

                <p className="text-base leading-relaxed text-foreground italic mb-8">"{r.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`h-12 w-12 rounded-full ${r.color} text-white flex items-center justify-center font-bold shadow-lg`}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role} · Google Maps</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="rounded-full px-8 h-12 font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            {lang === 'es' ? 'Ver todas las reseñas' : 'See all reviews'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
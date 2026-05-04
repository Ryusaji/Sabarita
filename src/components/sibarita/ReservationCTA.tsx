import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

export const ReservationCTA = () => {
  const { lang, t } = useLanguage();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: lang === 'es' ? "¡Solicitud recibida!" : "Request received!",
      description: lang === 'es' 
        ? `Te contactaremos en ${email} para confirmar tu reserva.` 
        : `We will contact you at ${email} to confirm your reservation.`,
    });
    setEmail("");
  };

  return (
    <section id="reservas" className="section-pad bg-accent/10">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {lang === 'es' 
              ? '¿Listo para disfrutar de una experiencia única?' 
              : 'Ready to enjoy a unique experience?'}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            {lang === 'es'
              ? 'Déjanos tu email y te confirmamos tu mesa en menos de 24 horas.'
              : 'Leave us your email and we will confirm your table in less than 24 hours.'}
          </p>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === 'es' ? "tu@email.com" : "your@email.com"}
              className="h-12 rounded-full bg-background px-5"
            />
            <Button type="submit" size="lg" className="h-12 rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              {t("nav.reserve")}
            </Button>
          </form>
          <p className="mt-6 text-xs text-muted-foreground italic">
            {lang === 'es'
              ? '* Para reservas urgentes, escríbenos por WhatsApp.'
              : '* For urgent reservations, write to us on WhatsApp.'}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ReservationCTA;
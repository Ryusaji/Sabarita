import { MapPin, Phone, Clock, Users, Music, Wine, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export const LocationInfo = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="contacto" className="section-pad bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="overflow-hidden rounded-3xl shadow-2xl relative group">
          <iframe
            title="Sibarita Habana Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.1264874987!2d-82.352467!3d23.13968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd774431e78457%3A0xe54e3009778c187f!2sSibarita%20La%20Habana!5e0!3m2!1ses!2scu!4v1714850000000!5m2!1ses!2scu"
            loading="lazy"
            className="h-[500px] w-full border-0 transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6">
            <Button asChild size="lg" className="w-full rounded-2xl shadow-xl group/btn">
              <a 
                href="https://maps.app.goo.gl/k9eJ4t9t3r8w5q8r5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MapPin size={18} />
                {lang === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}
                <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{lang === 'es' ? 'Encuéntranos' : 'Find Us'}</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {lang === 'es' ? 'Visítanos en el corazón de La Habana' : 'Visit us in the heart of Havana'}
          </h2>

          <ul className="mt-10 space-y-6 text-base">
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{t("footer.address")}</p>
                <span className="font-medium">O'Reilly #528, La Habana Vieja, Cuba</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{t("footer.phone")}</p>
                <span className="font-medium">+53 5 267 0512</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{lang === 'es' ? 'Horario' : 'Hours'}</p>
                <span className="font-medium">12:00 PM — 12:00 AM</span>
              </div>
            </li>
          </ul>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {[
              { icon: Wine, label: lang === 'es' ? "Coctelería de autor" : "Signature Cocktails" },
              { icon: Music, label: lang === 'es' ? "Música en vivo" : "Live Music" },
              { icon: Users, label: lang === 'es' ? "Eventos privados" : "Private Events" },
              { icon: MapPin, label: lang === 'es' ? "Terraza panorámica" : "Panoramic Terrace" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-2xl bg-background border border-border/50">
                <Icon size={16} className="text-accent" />
                <span className="text-xs font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LocationInfo;
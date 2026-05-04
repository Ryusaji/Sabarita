import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t("footer.contact")}
            </h2>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/sibarita_habana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5352670512"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/40 uppercase tracking-wider text-[10px] mb-1">{t("footer.address")}</p>
                  <p className="text-white/85 leading-relaxed font-medium">
                    O'Reilly #528<br />La Habana Vieja<br />Cuba
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/40 uppercase tracking-wider text-[10px] mb-1">{t("footer.phone")}</p>
                  <p className="text-white/85 font-medium">+53 5 267 0512</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-6">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/40 uppercase tracking-wider text-[10px] mb-1">{t("footer.email")}</p>
                  <p className="text-white/85 font-medium underline underline-offset-4 decoration-accent/30">hola@sibaritahabana.com</p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Horario</p>
                <p className="text-white/80 text-xs">12:00 PM — 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
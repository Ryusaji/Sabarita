import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const WhatsAppFAB = () => {
  const { lang } = useLanguage();
  
  const WHATSAPP_NUMBER = "5352670512";
  const MESSAGE = lang === 'es' 
    ? encodeURIComponent("Hola Sibarita, quisiera reservar una mesa.")
    : encodeURIComponent("Hello Sibarita, I would like to book a table.");

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'es' ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="absolute -top-12 right-0 bg-white px-3 py-1.5 rounded-xl shadow-xl text-[10px] font-bold tracking-wider text-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap border border-emerald-50">
        {lang === 'es' ? '¡RESERVA AHORA!' : 'BOOK NOW!'}
      </div>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
        <MessageCircle size={30} className="fill-white/20" />
      </span>
    </a>
  );
};

export default WhatsAppFAB;
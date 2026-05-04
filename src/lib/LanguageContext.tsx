import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    "nav.menu": "Menú",
    "nav.about": "Sobre nosotros",
    "nav.reservations": "Reservas",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar",
    "hero.title": "Sibarita La Habana",
    "hero.subtitle": "Coctelería de autor, tapas mediterráneas y una terraza con alma en el corazón de La Habana Vieja.",
    "hero.cta": "Ver Menú",
    "story.tag": "Nuestra historia",
    "story.title": "Un lugar donde el tiempo se detiene",
    "story.desc": "Desde 2018, Sibarita es un refugio en La Habana donde la coctelería artesanal, los sabores del mundo y una terraza florida se unen para crear momentos que se quedan contigo.",
    "story.reviews": "500+ reseñas",
    "gallery.tag": "Galería",
    "gallery.title": "El alma del lugar",
    "faq.title": "Preguntas Frecuentes",
    "footer.contact": "Contáctanos",
    "footer.address": "Dirección",
    "footer.phone": "Teléfono",
    "footer.email": "Email",
    "footer.rights": "©2026 Sibarita La Habana. Todos los derechos reservados."
  },
  en: {
    "nav.menu": "Menu",
    "nav.about": "About Us",
    "nav.reservations": "Reservations",
    "nav.contact": "Contact",
    "nav.reserve": "Book Now",
    "hero.title": "Sibarita Havana",
    "hero.subtitle": "Signature cocktails, Mediterranean tapas and a soulful terrace in the heart of Old Havana.",
    "hero.cta": "View Menu",
    "story.tag": "Our Story",
    "story.title": "A place where time stands still",
    "story.desc": "Since 2018, Sibarita has been a haven in Havana where craft cocktails, world flavors and a flowery terrace come together to create moments that stay with you.",
    "story.reviews": "500+ reviews",
    "gallery.tag": "Gallery",
    "gallery.title": "The soul of the place",
    "faq.title": "Frequently Asked Questions",
    "footer.contact": "Contact Us",
    "footer.address": "Address",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.rights": "©2026 Sibarita Havana. All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

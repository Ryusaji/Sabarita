import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useLanguage } from "@/lib/LanguageContext";
import { Instagram } from "lucide-react";

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#menu", label: t("nav.menu") },
    { href: "#historia", label: t("nav.about") },
    { href: "#reservas", label: t("nav.reservations") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
          sibarita
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <a 
            href="https://www.instagram.com/sibarita_habana/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-colors ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            <Instagram size={20} />
          </a>

          <div className="flex items-center gap-2 mr-4">
            <button 
              onClick={() => setLang('es')}
              className={`text-xs font-bold transition-all ${lang === 'es' ? "text-accent scale-110" : (scrolled ? "text-foreground/40" : "text-white/40")}`}
            >
              ES
            </button>
            <span className={scrolled ? "text-foreground/20" : "text-white/20"}>|</span>
            <button 
              onClick={() => setLang('en')}
              className={`text-xs font-bold transition-all ${lang === 'en' ? "text-accent scale-110" : (scrolled ? "text-foreground/40" : "text-white/40")}`}
            >
              EN
            </button>
          </div>

          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#reservas">{t("nav.reserve")}</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Abrir menú"
              className={`p-2 rounded-full ${scrolled ? "text-foreground" : "text-white"}`}
            >
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <ul className="mt-10 flex flex-col gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-lg font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <div className="flex items-center gap-4 py-2">
                  <button 
                    onClick={() => setLang('es')}
                    className={`text-sm font-bold ${lang === 'es' ? "text-accent" : "text-muted-foreground"}`}
                  >
                    ESPAÑOL
                  </button>
                  <span className="text-muted-foreground/20">|</span>
                  <button 
                    onClick={() => setLang('en')}
                    className={`text-sm font-bold ${lang === 'en' ? "text-accent" : "text-muted-foreground"}`}
                  >
                    ENGLISH
                  </button>
                </div>
              </li>
              <li>
                <Button asChild className="w-full rounded-full mt-4">
                  <a href="#reservas">{t("nav.reserve")}</a>
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
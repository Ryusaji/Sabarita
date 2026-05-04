import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reveal from "./Reveal";
import ImageModal from "./ImageModal";
import { useLanguage } from "@/lib/LanguageContext";

// Importing platillos images
import plat1 from "@/assets/sibarita/platillos/platillo-1.png";
import plat2 from "@/assets/sibarita/platillos/platillo-2.png";
import plat3 from "@/assets/sibarita/platillos/platillo-3.png";
import plat4 from "@/assets/sibarita/platillos/platillo-4.png";
import plat5 from "@/assets/sibarita/platillos/platillo-5.png";
import plat6 from "@/assets/sibarita/platillos/platillo-6.png";
import plat7 from "@/assets/sibarita/platillos/platillo-7.png";
import plat8 from "@/assets/sibarita/platillos/platillo-8.png";
import plat9 from "@/assets/sibarita/platillos/platillo-9.png";
import plat10 from "@/assets/sibarita/platillos/platillo-10.png";
import plat11 from "@/assets/sibarita/platillos/platillo-11.png";
import plat12 from "@/assets/sibarita/platillos/platillo-12.png";
import plat13 from "@/assets/sibarita/platillos/platillo-13.png";
import plat14 from "@/assets/sibarita/platillos/platillo-14.png";

type Item = { name: string; desc: string; price: string; img: string };

const data = {
  es: {
    tapas: [
      { name: "Croquetas de jamón", desc: "Cremosas, con bechamel artesanal y ali-oli ahumado.", price: "$6.50", img: plat1 },
      { name: "Bolitas de yuca", desc: "Crujientes por fuera, suaves por dentro, con dip de cilantro.", price: "$5.00", img: plat2 },
      { name: "Tabla del sibarita", desc: "Selección de embutidos ibéricos y quesos curados.", price: "$14.00", img: plat3 },
      { name: "Papas Bravas", desc: "Con nuestra salsa secreta picante y espuma de ali-oli.", price: "$7.00", img: plat7 },
      { name: "Pulpo a la Gallega", desc: "Sobre cama de puré de papas y pimentón de la Vera.", price: "$12.00", img: plat8 },
    ],
    platos: [
      { name: "Pollo en salsa cremosa", desc: "Servido con vegetales salteados al wok.", price: "$12.00", img: plat4 },
      { name: "Ropa vieja moderna", desc: "Reinterpretación del clásico cubano con plátano frito.", price: "$13.50", img: plat5 },
      { name: "Risotto de mariscos", desc: "Arroz arborio cremoso con camarones y calamar.", price: "$15.00", img: plat6 },
      { name: "Filete de Res", desc: "Acompañado de reducción de vino tinto y espárragos.", price: "$18.00", img: plat9 },
      { name: "Pescado del Día", desc: "A la plancha con costra de hierbas y cítricos.", price: "$16.00", img: plat10 },
    ],
    cocteles: [
      { name: "Mojito de la casa", desc: "Hierbabuena fresca, ron añejo y un toque cítrico.", price: "$7.00", img: plat11 },
      { name: "Daiquiri Sibarita", desc: "Frappé de fresa con ron blanco y cardamomo.", price: "$8.50", img: plat12 },
      { name: "Old Fashioned Habana", desc: "Bourbon, azúcar de caña y tabaco ahumado.", price: "$10.00", img: plat13 },
      { name: "Piña Colada Real", desc: "Coco natural, piña fresca y ron premium.", price: "$9.00", img: plat14 },
    ],
  },
  en: {
    tapas: [
      { name: "Ham Croquettes", desc: "Creamy, with artisan béchamel and smoked ali-oli.", price: "$6.50", img: plat1 },
      { name: "Yuca Balls", desc: "Crispy outside, soft inside, with cilantro dip.", price: "$5.00", img: plat2 },
      { name: "Sibarita Board", desc: "Selection of Iberian cold cuts and cured cheeses.", price: "$14.00", img: plat3 },
      { name: "Papas Bravas", desc: "With our secret spicy sauce and ali-oli foam.", price: "$7.00", img: plat7 },
      { name: "Galician Octopus", desc: "On a bed of potato puree and Pimentón de la Vera.", price: "$12.00", img: plat8 },
    ],
    platos: [
      { name: "Creamy Chicken", desc: "Served with wok-sautéed vegetables.", price: "$12.00", img: plat4 },
      { name: "Modern Ropa Vieja", desc: "Reinterpretation of the Cuban classic with fried plantain.", price: "$13.50", img: plat5 },
      { name: "Seafood Risotto", desc: "Creamy arborio rice with shrimp and squid.", price: "$15.00", img: plat6 },
      { name: "Beef Fillet", desc: "Accompanied by red wine reduction and asparagus.", price: "$18.00", img: plat9 },
      { name: "Fish of the Day", desc: "Grilled with herb crust and citrus.", price: "$16.00", img: plat10 },
    ],
    cocteles: [
      { name: "House Mojito", desc: "Fresh peppermint, aged rum and a citrus touch.", price: "$7.00", img: plat11 },
      { name: "Sibarita Daiquiri", desc: "Strawberry frappé with white rum and cardamom.", price: "$8.50", img: plat12 },
      { name: "Habana Old Fashioned", desc: "Bourbon, cane sugar and smoked tobacco.", price: "$10.00", img: plat13 },
      { name: "Royal Piña Colada", desc: "Natural coconut, fresh pineapple and premium rum.", price: "$9.00", img: plat14 },
    ],
  }
};

const Card = ({ item, i, onClick }: { item: Item; i: number; onClick: () => void }) => (
  <Reveal delay={i * 80}>
    <article 
      className="group h-full overflow-hidden rounded-3xl bg-muted transition-all duration-500 hover:scale-[1.02] hover:shadow-[var(--shadow-lg)] cursor-zoom-in"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold">{item.price}</span>
        </div>
      </div>
    </article>
  </Reveal>
);

export const MenuTabs = () => {
  const { lang, t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);
  
  const currentData = data[lang];
  const tabs = [
    { key: "tapas", label: lang === 'es' ? "Tapas" : "Tapas" },
    { key: "platos", label: lang === 'es' ? "Platos" : "Main Dishes" },
    { key: "cocteles", label: lang === 'es' ? "Cócteles" : "Cocktails" },
  ];

  return (
    <section id="menu" className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("nav.menu")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl text-balance max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            {lang === 'es' ? 'Nuestras especialidades' : 'Our Specialties'}
          </h2>
        </Reveal>

        <Tabs defaultValue="tapas" className="mt-12">
          <TabsList className="mb-10 h-auto bg-muted/60 rounded-full p-1 inline-flex">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all font-medium"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key} className="mt-0 animate-fade-up">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentData[tab.key as keyof typeof currentData].map((item, i) => (
                  <Card 
                    key={item.name} 
                    item={item} 
                    i={i} 
                    onClick={() => setSelectedImg({ src: item.img, alt: item.name })}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <ImageModal
        isOpen={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        imageSrc={selectedImg?.src || ""}
        altText={selectedImg?.alt || ""}
      />
    </section>
  );
};

export default MenuTabs;
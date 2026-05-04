# Landing Page — Sibarita

Bar/restaurante en La Habana. Estética Apple Premium / Minimalista de Lujo, basada en el wireframe adjunto y usando las fotos reales de Sibarita.

## Identidad visual

- **Tipografía:** Inter (cuerpo) + SF Pro Display vía fallback. Títulos Bold con `letter-spacing: -0.022em`, tamaños grandes y mucho aire.
- **Paleta:** Fondo `#FFFFFF`, texto `#1D1D1F`, acentos café/tierra muy sutiles (`#8B6F47` / `#D4C5B0`), gris claro `#F5F5F7` para superficies secundarias. Sección galería en negro suave para contraste (como en el wireframe).
- **Espaciado:** Sistema basado en 8px. Padding vertical 120px desktop / 64px mobile entre secciones.
- **Bordes:** Radios suaves (16–24px) en cards e imágenes.

## Estructura (secciones del wireframe)

1. **Navbar fija translúcida** (glassmorphism al hacer scroll): Logo "sibarita", links Menú · Sobre nosotros · Reservas · Contacto, botón "Reservar".
2. **Hero**: Imagen de fondo (terraza Sibarita con neón) con parallax suave. Título "Bienvenido a Sibarita", subtítulo "El rincón sibarita en el corazón de La Habana", chips de categorías (Coctelería · Tapas · Terraza), CTA "Reservar mesa".
3. **Historia — "Un lugar donde el tiempo se detiene"**: Texto a la izquierda + dos fotos del interior superpuestas a la derecha. Badge de rating Google "4.8 ★ (500+ reseñas)".
4. **Nuestras combinaciones estrellas** (6 cards de productos): tapas/platos/cócteles con foto, nombre, descripción, precio y botón "Ver". Hover scale 1.02 + sombra. Sistema de **Tabs fluido** para filtrar (Tapas · Platos · Cócteles · Postres) con animación de cambio de contenido sin recarga.
5. **Galería** (fondo negro, mosaico asimétrico de 5–7 fotos del local). Click → **Lightbox** con animación scale-in desde el centro, navegación entre imágenes, cierre con X o clic fuera / tecla Esc.
6. **CTA Reservas** (fondo café tenue): "¿Listo para disfrutar de una experiencia única?" + input email + botón "Reservar".
7. **Reseñas** ("Lo que dicen nuestros clientes"): 3 testimonios con avatar, nombre, estrellas, texto. Botón "Ver más".
8. **Mapa + info práctica**: Mapa embebido a la izquierda, a la derecha dirección, teléfono, horario, capacidad, servicios (terraza, música en vivo, reservas).
9. **Footer**: "Contact Us" grande, dirección, email, teléfono, redes (Instagram, Facebook, WhatsApp, LinkedIn vía Lucide), copyright y política de privacidad.

## Interacciones

- **Scroll Reveal:** fade-in + translateY(20px → 0) en cada bloque al entrar en viewport (IntersectionObserver), con stagger en grids.
- **Hero parallax:** translateY de la imagen de fondo según scroll (transform, no background-attachment, para móvil).
- **Cards producto:** hover `scale(1.02)` + shadow elevada, transición 300ms ease-out.
- **Lightbox galería:** overlay con backdrop-blur, imagen con scale-in 200ms, flechas prev/next, soporte teclado.
- **Tabs menú:** transición de contenido con fade + slide, indicador animado bajo la tab activa.
- **Botón flotante WhatsApp:** esquina inferior derecha, círculo con glassmorphism (`backdrop-blur` + fondo semitransparente), icono Lucide, animación de pulso sutil. Número placeholder editable (`+53 5XXXXXXX`).

## Responsive (Mobile First)

- Mobile: navbar con menú hamburguesa (Sheet), hero a pantalla completa, cards en 1 columna, galería en 2 columnas, mapa apilado sobre info.
- Tablet: 2 columnas en productos y galería.
- Desktop: 3 columnas productos, mosaico galería completo, secciones a 1200px max-width.

## Detalles técnicos

- React + Vite + Tailwind. Todos los colores y tipografías como tokens semánticos en `index.css` y `tailwind.config.ts` (sin clases hardcoded en componentes).
- Componentes nuevos en `src/components/sibarita/`: `Navbar`, `Hero`, `Story`, `MenuTabs`, `ProductCard`, `Gallery`, `Lightbox`, `ReservationCTA`, `Reviews`, `LocationInfo`, `Footer`, `WhatsAppFAB`, `RevealOnScroll` (wrapper IntersectionObserver).
- Reutilizar shadcn: `Tabs`, `Dialog` (lightbox), `Button`, `Input`, `Sheet` (menú móvil), `Card`.
- Iconos vía `lucide-react`: `MapPin`, `Phone`, `Clock`, `Instagram`, `Facebook`, `Linkedin`, `MessageCircle`, `Star`, `X`, `ChevronLeft`, `ChevronRight`, `Menu`.
- Imágenes de Sibarita: copiar las 7 fotos subidas a `src/assets/sibarita/` e importarlas como módulos ES6 (galería, hero, historia, productos donde aplique).
- Generar 2–3 imágenes adicionales de cócteles/tapas con AI si faltan productos para completar las 6 cards.
- WhatsApp: número placeholder en una constante para editarlo fácilmente.

## Fuera de alcance

- Backend de reservas reales (el formulario muestra toast de confirmación).
- CMS / panel admin.
- Internacionalización (todo en español).

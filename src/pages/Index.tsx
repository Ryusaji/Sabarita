import Navbar from "@/components/sibarita/Navbar";
import Hero from "@/components/sibarita/Hero";
import Story from "@/components/sibarita/Story";
import StatsBar from "@/components/sibarita/StatsBar";
import ScrollPhrase from "@/components/sibarita/ScrollPhrase";
import MenuTabs from "@/components/sibarita/MenuTabs";
import Gallery from "@/components/sibarita/Gallery";
import ReservationCTA from "@/components/sibarita/ReservationCTA";
import Reviews from "@/components/sibarita/Reviews";
import LocationInfo from "@/components/sibarita/LocationInfo";
import FAQ from "@/components/sibarita/FAQ";
import Footer from "@/components/sibarita/Footer";
import WhatsAppFAB from "@/components/sibarita/WhatsAppFAB";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <StatsBar />
    <Story />
    <ScrollPhrase />
    <MenuTabs />
    <Gallery />
    <ReservationCTA />
    <Reviews />
    <LocationInfo />
    <FAQ />
    <Footer />
    <WhatsAppFAB />
  </main>
);

export default Index;

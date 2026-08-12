import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { MenuSection } from "@/components/menu/menu-section";
import { Gallery } from "@/components/gallery";
import { QrMenuSection } from "@/components/qr-menu-section";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <MenuSection />
        <Gallery />
        <QrMenuSection />
        <Visit />
      </main>
      <Footer />
    </>
  );
}


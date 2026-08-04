import { Seo } from "../components/site/Seo";
import { Hero } from "../components/site/Hero";
import { Ticker } from "../components/site/Ticker";
import { Stats } from "../components/site/Stats";
import { ServicesSection } from "../components/site/Services";
import { WhyChooseUs } from "../components/site/WhyChooseUs";
import { Projects } from "../components/site/Projects";
import { TrustSection } from "../components/site/TrustSection";
import { FAQ } from "../components/site/FAQ";
import { CTA } from "../components/site/CTA";

export default function Home() {
  return (
    <>
      <Seo
        title="Furthmac Solutions | Engineering Excellence That Moves Industries"
        description="Furthmac Solutions — engineering design, manufacturing, fabrication, industrial automation and relocation. Your trusted engineering partner in Pune, India."
      />
      <Hero />
      <Ticker />
      <Stats />
      <ServicesSection
        heading="Complete engineering solutions."
        intro="Six disciplines engineered to work together — from first sketch to final commissioning."
      />
      <WhyChooseUs />
      <Projects showGallery={false} />
      <TrustSection />
      <FAQ />
      <CTA />
    </>
  );
}

import { Seo } from "../components/site/Seo";
import { Hero, TrustStrip, AboutSection, ServicesGrid, WhyUs, IndustriesSection, CapabilitiesSection, ProcessSection, CTABanner } from "../components/site/Home";
import { ContactSection } from "../components/site/Contact";

export default function Home() {
  return (
    <>
      <Seo title="Furthmac Solutions | Industrial Automation & Engineering Services" description="Furthmac Solutions provides Industrial Automation, PLC Programming, Electrical Engineering, Mechanical Design, EPC Projects, Control Panel Manufacturing and Engineering Consultancy across India." path="/" />
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesGrid />
      <WhyUs />
      <IndustriesSection />
      <CapabilitiesSection />
      <ProcessSection />
      <CTABanner />
      <ContactSection />
    </>
  );
}

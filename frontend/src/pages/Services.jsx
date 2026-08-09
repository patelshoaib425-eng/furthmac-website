import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { ServicesGrid, CTABanner, ProcessSection } from "../components/site/Home";

export default function Services() {
  return (
    <>
      <Seo title="Services | Industrial Automation & Engineering | Furthmac" description="Industrial Automation, PLC Programming, SCADA, Electrical & Mechanical Engineering, Control Panels, EPC Projects, Fabrication, Installation & Commissioning and Consultancy." path="/services" />
      <PageHeader overline="Services" titleLines={["Engineering services", "built for", "Indian industry."]} subtitle="Fifteen integrated capabilities across automation, electrical, mechanical and EPC — engineered to work together." image="automation" />
      <ServicesGrid compact />
      <ProcessSection />
      <CTABanner />
    </>
  );
}

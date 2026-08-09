import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { ContactSection } from "../components/site/Contact";

export default function Contact() {
  return (
    <>
      <Seo title="Contact | Furthmac Solutions" description="Contact Furthmac Solutions for industrial automation, PLC programming, electrical, mechanical and EPC engineering. Pune, Maharashtra." path="/contact" />
      <PageHeader overline="Contact" titleLines={["Let's discuss", "your project."]} subtitle="Our engineering team typically responds within one working day." image="panel" />
      <ContactSection compact />
    </>
  );
}

import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Contact as ContactSection } from "../components/site/Contact";
import { FAQ } from "../components/site/FAQ";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Furthmac Solutions"
        description="Contact Furthmac Solutions for industrial engineering, automation, fabrication and relocation. Request a quote, call, email or message us on WhatsApp."
      />
      <PageHeader
        overline="Contact"
        titleLines={["Let’s build", "something", "reliable."]}
        subtitle="Request a quote or reach our engineering team directly — we typically respond within one business day."
        image="electrical"
      />
      <ContactSection />
      <FAQ />
    </>
  );
}

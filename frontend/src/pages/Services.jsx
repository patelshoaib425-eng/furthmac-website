import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { ServicesSection } from "../components/site/Services";
import { WhyChooseUs } from "../components/site/WhyChooseUs";
import { FAQ } from "../components/site/FAQ";
import { CTA } from "../components/site/CTA";

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Furthmac Solutions"
        description="Engineering design, manufacturing solutions, fabrication, industrial automation, product development and engineering consultancy by Furthmac Solutions."
      />
      <PageHeader
        overline="Services"
        titleLines={["Engineering", "capabilities", "under one roof."]}
        subtitle="Six integrated disciplines that take you from concept to commissioned, production-ready reality."
        image="mechanical"
      />
      <ServicesSection heading="What we deliver." intro="Each capability is backed by disciplined engineering, QA/QC and safety." />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}

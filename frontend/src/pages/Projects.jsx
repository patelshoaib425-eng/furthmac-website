import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Projects as ProjectsSection } from "../components/site/Projects";
import { TrustSection } from "../components/site/TrustSection";
import { CTA } from "../components/site/CTA";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects & Portfolio | Furthmac Solutions"
        description="Explore Furthmac Solutions' engineering projects across automation, manufacturing, fabrication and design — with technologies used and results achieved."
      />
      <PageHeader
        overline="Projects"
        titleLines={["Our work,", "measured by", "results."]}
        subtitle="Representative engineering projects showing scope, technologies and outcomes."
        image="hero"
      />
      <ProjectsSection showGallery />
      <TrustSection />
      <CTA />
    </>
  );
}

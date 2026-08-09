import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Motion";
import { CTABanner } from "../components/site/Home";
import { HardHat } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <Seo title="Portfolio | Furthmac Solutions" description="Selected industrial engineering projects delivered by Furthmac Solutions across automation, electrical, mechanical and EPC." path="/portfolio" />
      <PageHeader overline="Portfolio" titleLines={["Selected projects,", "delivered with", "engineering rigour."]} image="hero" />
      <section className="container-x py-24">
        <Reveal className="card-soft p-12 text-center max-w-2xl mx-auto">
          <span className="h-14 w-14 rounded-2xl bg-orange/10 text-orange grid place-items-center mx-auto"><HardHat size={26} /></span>
          <h2 className="font-display font-bold text-2xl text-navy mt-6">Project case studies coming soon</h2>
          <p className="mt-3 text-steel-500 leading-relaxed">Verified project case studies with photography, technologies and outcomes will be published here. To discuss a similar scope, contact our engineering team.</p>
        </Reveal>
      </section>
      <CTABanner />
    </>
  );
}

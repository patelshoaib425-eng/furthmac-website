import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { AboutSection, WhyUs, ProcessSection, CTABanner, CapabilitiesSection } from "../components/site/Home";
import { Reveal } from "../components/site/Motion";
import { VALUES } from "../data/content";

export default function About() {
  return (
    <>
      <Seo title="About Us | Furthmac Solutions" description="Learn about Furthmac Solutions — an industrial engineering partner delivering automation, electrical, mechanical and EPC solutions across India." path="/about" />
      <PageHeader overline="About Us" titleLines={["A serious engineering", "partner for Indian", "industry."]} subtitle="Furthmac Solutions delivers automation, electrical, mechanical and EPC solutions with disciplined execution." image="team" />
      <AboutSection />
      <section className="container-x pb-24">
        <Reveal>
          <p className="overline text-orange mb-3">Core Values</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy tracking-tight max-w-2xl">The principles behind every project.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v, i) => (
            <Reveal key={v} delay={i*0.04} className="card-soft p-6"><div className="text-orange font-mono text-sm">0{i+1}</div><h3 className="mt-2 font-display font-semibold text-navy text-lg">{v}</h3></Reveal>
          ))}
        </div>
      </section>
      <CapabilitiesSection />
      <WhyUs />
      <ProcessSection />
      <CTABanner />
    </>
  );
}

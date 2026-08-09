import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Motion";
import { CTABanner } from "../components/site/Home";
import { Newspaper } from "lucide-react";

export default function Blog() {
  return (
    <>
      <Seo title="Blog | Furthmac Solutions" description="Articles on industrial automation, PLC programming, SCADA, electrical and mechanical engineering." path="/blog" />
      <PageHeader overline="Blog" titleLines={["Engineering insights", "and industry", "notes."]} image="scada" />
      <section className="container-x py-24">
        <Reveal className="card-soft p-12 text-center max-w-2xl mx-auto">
          <span className="h-14 w-14 rounded-2xl bg-orange/10 text-orange grid place-items-center mx-auto"><Newspaper size={26} /></span>
          <h2 className="mt-6 font-display font-bold text-2xl text-navy">Articles publishing soon</h2>
          <p className="mt-3 text-steel-500 leading-relaxed">Technical articles on automation, PLC programming, SCADA, electrical and mechanical engineering will be published here.</p>
        </Reveal>
      </section>
      <CTABanner />
    </>
  );
}

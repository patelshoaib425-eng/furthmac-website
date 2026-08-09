import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Motion";
import { CTABanner } from "../components/site/Home";
import { Briefcase } from "lucide-react";
import { COMPANY } from "../data/content";

export default function Careers() {
  return (
    <>
      <Seo title="Careers | Furthmac Solutions" description="Join Furthmac Solutions — engineering careers in industrial automation, electrical, mechanical and EPC projects." path="/careers" />
      <PageHeader overline="Careers" titleLines={["Build a career in", "industrial engineering."]} subtitle="We're looking for engineers who take ownership and love shipping real-world projects." image="team" />
      <section className="container-x py-24">
        <Reveal className="card-soft p-10 lg:p-14">
          <span className="h-14 w-14 rounded-2xl bg-orange/10 text-orange grid place-items-center"><Briefcase size={26} /></span>
          <h2 className="mt-6 font-display font-bold text-3xl text-navy">Working at Furthmac</h2>
          <p className="mt-4 text-steel-500 leading-relaxed max-w-2xl">Furthmac is a hands-on engineering environment. You'll work across automation, electrical and mechanical projects with real ownership from scoping to commissioning.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-2xl">
            <div><div className="overline text-orange">Send resume</div><a href={`mailto:${COMPANY.email}`} className="mt-2 block font-display font-semibold text-navy hover:text-orange">{COMPANY.email}</a></div>
            <div><div className="overline text-orange">Or call</div><a href={`tel:${COMPANY.phone}`} className="mt-2 block font-display font-semibold text-navy hover:text-orange">{COMPANY.phone}</a></div>
          </div>
          <p className="mt-8 text-sm text-steel-500">Open positions are posted here as they become available.</p>
        </Reveal>
      </section>
      <CTABanner />
    </>
  );
}

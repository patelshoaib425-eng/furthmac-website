import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Motion";
import { Icon } from "../components/site/Icon";
import { CTABanner, ProcessSection } from "../components/site/Home";
import { ContactSection } from "../components/site/Contact";
import { SERVICES, IMAGES } from "../data/content";

const capabilities = ["Requirements analysis","Concept & feasibility","Detailed engineering","Standards compliance","Documented QA/QC","Safe execution","Testing & validation","Handover & support"];
const benefits = ["Reliable execution","Reduced downtime","Compliant delivery","Long-term support"];

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICES.find(s => s.slug === slug);
  if (!svc) return <Navigate to="/services" replace />;
  return (
    <>
      <Seo title={`${svc.title} | Furthmac Solutions`} description={`${svc.title} services by Furthmac Solutions. ${svc.short}`} path={`/services/${slug}`} />
      <PageHeader overline={svc.title} titleLines={[svc.title]} subtitle={svc.short} image={svc.img} />
      <section className="container-x py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="overline text-orange mb-3">Overview</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy tracking-tight">Engineering-led {svc.title.toLowerCase()} delivered with discipline.</h2>
            <p className="mt-6 text-steel-500 leading-relaxed">Furthmac Solutions delivers {svc.title.toLowerCase()} with practical engineering, documented QA/QC and site-safe execution. Every engagement starts with a technical scoping session so the deliverables match your production reality.</p>
          </Reveal>
          <Reveal className="mt-10">
            <h3 className="font-display font-semibold text-xl text-navy">Key capabilities</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {capabilities.map((c) => <li key={c} className="flex items-start gap-2 text-navy"><CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" /><span className="text-sm">{c}</span></li>)}
            </ul>
          </Reveal>
          <Reveal className="mt-10">
            <h3 className="font-display font-semibold text-xl text-navy">Benefits</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {benefits.map((c) => <li key={c} className="flex items-start gap-2 text-navy"><CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" /><span className="text-sm">{c}</span></li>)}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28 self-start">
          <div className="card-soft p-6">
            <span className="h-14 w-14 rounded-2xl bg-orange/10 text-orange grid place-items-center"><Icon name={svc.icon} size={26} /></span>
            <h3 className="mt-4 font-display font-semibold text-navy text-lg">Discuss this service</h3>
            <p className="mt-2 text-sm text-steel-500">Share your requirements and our engineers will get back within one working day.</p>
            <Link to="/contact" className="btn-primary mt-5 text-sm py-3 px-5">Request a quote <ArrowRight size={15} /></Link>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={IMAGES[svc.img] || IMAGES.hero} alt={svc.title} className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
        </div>
      </section>
      <ProcessSection />
      <section className="container-x py-16">
        <Reveal><p className="overline text-orange mb-3">Related services</p><h3 className="font-display font-bold text-2xl text-navy">Explore more capabilities</h3></Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.filter(x=>x.slug!==slug).slice(0,4).map((r) => (
            <Link key={r.slug} to={`/services/${r.slug}`} className="card-soft p-5 hover:-translate-y-1 transition-transform">
              <span className="h-11 w-11 rounded-xl bg-orange/10 text-orange grid place-items-center"><Icon name={r.icon} size={20} /></span>
              <div className="mt-4 font-display font-semibold text-navy">{r.title}</div>
              <div className="text-xs text-steel-500 mt-2">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
      <ContactSection compact />
    </>
  );
}

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Phone } from "lucide-react";
import { Seo } from "../components/site/Seo";
import { Reveal, MaskLines } from "../components/site/Motion";
import { Icon } from "../components/site/Icon";
import { CTABanner, ProcessSection } from "../components/site/Home";
import { ContactSection } from "../components/site/Contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { SERVICES, IMAGES, COMPANY } from "../data/content";

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return <Navigate to="/services" replace />;

  return (
    <>
      <Seo title={`${svc.title} | Furthmac Solutions`} description={`${svc.title} — ${svc.short}`} path={`/services/${slug}`} />

      {/* LARGE HERO BANNER */}
      <section className="relative min-h-[75svh] flex items-end overflow-hidden bg-navy text-white pt-28">
        <img src={IMAGES[svc.img] || IMAGES.hero} alt={svc.title} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 eng-grid opacity-30 mix-blend-overlay" />
        <div className="relative z-10 container-x pb-16 lg:pb-24">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 overline text-white/70 mb-5">
              <Link to="/" className="hover:text-orange">Home</Link><span>›</span>
              <Link to="/services" className="hover:text-orange">Services</Link><span>›</span>
              <span className="text-orange">{svc.title}</span>
            </nav>
          </Reveal>
          <div className="flex items-center gap-4 mb-6">
            <Reveal delay={0.1}>
              <span className="h-14 w-14 rounded-2xl bg-orange/15 backdrop-blur border border-white/10 text-orange grid place-items-center">
                <Icon name={svc.icon} size={26} />
              </span>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="overline text-orange">Furthmac Service</span>
            </Reveal>
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-[4.25rem] max-w-4xl">
            <MaskLines lines={[svc.title]} delay={0.25} />
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">{svc.short}</p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">Get a Free Consultation <ArrowRight size={18} /></Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-ghost-white"><Phone size={16} /> Call {COMPANY.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAILED DESCRIPTION */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="overline text-orange mb-3">Overview</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-navy tracking-tight">Engineering-led {svc.title.toLowerCase()}, delivered with discipline.</h2>
              <p className="mt-6 text-steel-500 leading-relaxed text-lg">{svc.intro}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="card-soft p-6 lg:sticky lg:top-28">
                <div className="flex items-center gap-2 text-orange font-semibold text-sm"><Sparkles size={16} /> Why Furthmac</div>
                <ul className="mt-4 space-y-3">
                  {["Multi-disciplinary engineering team", "QA/QC discipline on every deliverable", "Documented, safe execution", "Post-handover support"].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-navy text-sm"><CheckCircle2 size={16} className="text-orange mt-0.5 shrink-0" /><span>{t}</span></li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-6 text-sm py-3 px-5 w-full justify-center">Request a quote <ArrowRight size={15} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-steel-50 py-24">
        <div className="container-x">
          <Reveal><p className="overline text-orange mb-3">Features</p>
          <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-navy tracking-tight max-w-2xl">What's included in this service.</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {svc.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.03}>
                <div className="card-soft p-6 h-full flex gap-4">
                  <span className="h-11 w-11 rounded-xl bg-orange/10 text-orange grid place-items-center shrink-0"><CheckCircle2 size={20} /></span>
                  <div><div className="font-display font-semibold text-navy leading-tight">{f}</div></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal><p className="overline text-orange mb-3">Benefits</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-navy tracking-tight leading-tight">Outcomes you can plan around.</h2>
            <p className="mt-5 text-steel-500 leading-relaxed">Clear, measurable business outcomes designed into every engagement.</p></Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {svc.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="card-soft p-6 h-full">
                  <div className="font-mono text-orange text-sm">0{i + 1}</div>
                  <div className="mt-2 font-display font-semibold text-navy text-lg">{b}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* FAQ */}
      <section className="bg-steel-50 py-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal><p className="overline text-orange mb-3">FAQ</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-navy tracking-tight leading-tight">Questions we hear often.</h2></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <Accordion type="single" collapsible className="w-full">
                {svc.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-steel-200">
                    <AccordionTrigger data-testid={`svc-faq-${i}`} className="text-left font-display font-semibold text-lg text-navy hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-steel-500 leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="container-x py-20">
        <Reveal><p className="overline text-orange mb-3">Related services</p><h3 className="font-display font-bold text-2xl text-navy">Explore more capabilities</h3></Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.filter((x) => x.slug !== slug).slice(0, 4).map((r) => (
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

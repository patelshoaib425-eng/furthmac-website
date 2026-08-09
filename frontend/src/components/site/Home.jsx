import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Reveal, MaskLines } from "./Motion";
import { Icon } from "./Icon";
import { TRUST, SERVICES, WHY, INDUSTRIES, CAPABILITIES, PROCESS, IMAGES, COMPANY } from "../../data/content";

// ---------------- HERO ----------------
export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  return (
    <section ref={ref} data-testid="hero-section" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-navy text-white">
      <motion.div style={{ y }} className="absolute inset-0 -z-0">
        <img src={IMAGES.hero} alt="Industrial engineer operating automation equipment" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy/85 to-navy/60" />
      <div className="absolute inset-0 eng-grid opacity-40 mix-blend-overlay" />
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="animate-float-slow">
          <div className="glass-navy rounded-2xl border border-white/10 p-4 w-56">
            <div className="flex items-center gap-2 text-orange text-xs font-mono"><Sparkles size={14} /> AUTOMATION</div>
            <div className="mt-2 text-sm text-white/85">PLC · SCADA · HMI · Controls</div>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 container-x pt-32 pb-20">
        <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="overline text-orange mb-5">Industrial Engineering · India</motion.p>
        <h1 className="font-display font-extrabold tracking-tight leading-[1.03] text-4xl sm:text-5xl lg:text-[4.5rem] max-w-4xl">
          <MaskLines lines={["Engineering Innovation.", "Smart Automation.", "Reliable Industrial Solutions."]} delay={0.35} />
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }} className="mt-8 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
          Delivering Industrial Automation, Electrical Engineering, Mechanical Design, EPC Solutions, PLC Programming, Control Panels, Installation & Commissioning, and Engineering Consultancy.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/contact" data-testid="hero-cta-1" className="btn-primary">Get a Free Consultation <ArrowRight size={18} /></Link>
          <Link to="/contact" data-testid="hero-cta-2" className="btn-ghost-white">Contact Us</Link>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest">SCROLL ↓</motion.div>
    </section>
  );
};

// ---------------- TRUST STRIP ----------------
export const TrustStrip = () => (
  <section data-testid="trust-strip" className="bg-white border-b border-steel-100">
    <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      {TRUST.map((t, i) => (
        <Reveal key={t.title} delay={i * 0.06} className="flex items-center gap-4">
          <span className="h-12 w-12 rounded-xl bg-orange/10 text-orange grid place-items-center shrink-0"><Icon name={t.icon} size={22} /></span>
          <div><div className="font-display font-semibold text-navy leading-tight">{t.title}</div><div className="text-sm text-steel-500 mt-0.5">{t.desc}</div></div>
        </Reveal>
      ))}
    </div>
  </section>
);

// ---------------- ABOUT ----------------
export const AboutSection = () => (
  <section id="about" className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-6">
      <Reveal>
        <div className="relative">
          <img src={IMAGES.team} alt="Furthmac engineering team" className="rounded-3xl w-full aspect-[4/5] object-cover shadow-xl" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-white rounded-2xl border border-steel-100 p-5 shadow-xl max-w-[240px]">
            <div className="overline text-orange">Values</div>
            <div className="mt-2 font-display font-semibold text-navy">Quality · Safety · Precision</div>
          </div>
        </div>
      </Reveal>
    </div>
    <div className="lg:col-span-6">
      <Reveal>
        <p className="overline text-orange mb-4">About Furthmac</p>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy">Engineering excellence, delivered on the ground.</h2>
        <p className="mt-6 text-steel-500 leading-relaxed">Furthmac Solutions is an industrial engineering partner headquartered in Pune, delivering automation, electrical, mechanical and EPC solutions to manufacturing clients across India. We combine technical expertise with disciplined execution — protecting your uptime, capital and people.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {["Mission — Deliver reliable, safe and precise engineering solutions.","Vision — To be a trusted long-term engineering partner for Indian industry.","Values — Quality, integrity, innovation, safety, reliability.","Approach — Multi-disciplinary teams engineered around your project."].map((t, i) => (
            <Reveal key={i} delay={i*0.05} className="flex gap-3 items-start"><ChevronRight size={18} className="text-orange mt-1 shrink-0" /><span className="text-navy">{t}</span></Reveal>
          ))}
        </div>
        <Link to="/about" className="btn-secondary mt-8">Learn more about us <ArrowRight size={16} /></Link>
      </Reveal>
    </div>
  </section>
);

// ---------------- SERVICES ----------------
export const ServicesGrid = ({ compact = false, limit }) => {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section id="services" data-testid="services-section" className="bg-steel-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="overline text-orange mb-3">What we do</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy max-w-2xl">Engineering services built around your industry.</h2>
          </Reveal>
          {!compact && <Reveal delay={0.1}><Link to="/services" className="btn-secondary">All services <ArrowRight size={16} /></Link></Reveal>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <Link to={`/services/${s.slug}`} data-testid={`service-${s.slug}`} className="card-soft group block h-full overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <img src={IMAGES[s.img] || IMAGES.hero} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute top-3 left-3 h-10 w-10 rounded-xl bg-white/95 backdrop-blur text-orange grid place-items-center"><Icon name={s.icon} size={18} /></span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-steel-500 leading-relaxed">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-orange text-sm font-semibold">Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------- WHY US ----------------
export const WhyUs = () => (
  <section id="why" className="container-x py-24 lg:py-32">
    <div className="max-w-2xl mb-12">
      <Reveal>
        <p className="overline text-orange mb-3">Why choose Furthmac</p>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy">Engineered for reliability, built to deliver.</h2>
      </Reveal>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {WHY.map((w, i) => (
        <Reveal key={w.title} delay={i * 0.04}>
          <div className="card-soft p-6 h-full hover:-translate-y-1 transition-transform duration-300">
            <span className="h-12 w-12 rounded-xl bg-navy text-white grid place-items-center"><Icon name={w.icon} size={20} /></span>
            <h3 className="mt-5 font-display font-semibold text-navy">{w.title}</h3>
            <p className="mt-2 text-sm text-steel-500 leading-relaxed">{w.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

// ---------------- INDUSTRIES ----------------
export const IndustriesSection = () => (
  <section id="industries" className="bg-navy text-white py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 eng-grid opacity-30" />
    <div className="relative container-x">
      <div className="max-w-2xl mb-12">
        <Reveal>
          <p className="overline text-orange mb-3">Industries we serve</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">Deep industry knowledge, applied end-to-end.</h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 0.03}>
            <div className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur p-5 transition-colors">
              <span className="h-11 w-11 rounded-xl bg-orange/15 text-orange grid place-items-center"><Icon name={ind.icon} size={20} /></span>
              <h3 className="mt-4 font-display font-semibold">{ind.title}</h3>
              <p className="text-sm text-white/60 mt-1 leading-relaxed">{ind.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------------- CAPABILITIES ----------------
export const CapabilitiesSection = () => (
  <section id="capabilities" className="container-x py-24 lg:py-32">
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <Reveal>
          <p className="overline text-orange mb-3">Technology & Capabilities</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy leading-tight">The technical stack we bring to every project.</h2>
          <p className="mt-5 text-steel-500 leading-relaxed max-w-md">Modern automation, electrical and mechanical technologies applied with disciplined engineering practice.</p>
        </Reveal>
      </div>
      <div className="lg:col-span-8 grid md:grid-cols-3 gap-5">
        {CAPABILITIES.map((g, i) => (
          <Reveal key={g.group} delay={i*0.05} className="card-soft p-6">
            <div className="overline text-orange">{g.group}</div>
            <ul className="mt-4 space-y-2.5">
              {g.items.map((it) => <li key={it} className="flex items-center gap-2 text-navy text-sm"><span className="h-1.5 w-1.5 rounded-full bg-orange" />{it}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------------- PROCESS ----------------
export const ProcessSection = () => (
  <section id="process" className="bg-steel-50 py-24 lg:py-32">
    <div className="container-x">
      <div className="max-w-2xl mb-14">
        <Reveal><p className="overline text-orange mb-3">Our Process</p><h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy">A disciplined path from brief to handover.</h2></Reveal>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute left-6 right-6 top-8 h-px bg-steel-200" />
        <div className="grid lg:grid-cols-7 gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.no} delay={i*0.04}>
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-white border border-steel-100 shadow-sm grid place-items-center font-display font-bold text-orange">{p.no}</div>
                <h3 className="mt-4 font-display font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-steel-500 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ---------------- CTA BANNER ----------------
export const CTABanner = () => (
  <section className="container-x py-16">
    <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 lg:p-16">
      <div className="absolute inset-0 eng-grid opacity-30" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
      <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
        <div>
          <p className="overline text-orange mb-3">Ready to start?</p>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-xl">Discuss your project with our engineering team.</h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/contact" className="btn-primary">Get a Free Consultation <ArrowRight size={18} /></Link>
          <a href={`tel:${COMPANY.phone}`} className="btn-ghost-white">Call {COMPANY.phone}</a>
        </div>
      </div>
    </div>
  </section>
);

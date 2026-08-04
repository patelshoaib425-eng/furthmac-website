import { Star, ShieldCheck, BadgeCheck } from "lucide-react";
import { Reveal } from "./Motion";
import { TESTIMONIALS, CLIENTS, CERTIFICATIONS } from "../../data/content";

export const TrustSection = () => (
  <section id="trust" data-testid="trust-section" className="bg-background py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Testimonials */}
      <Reveal>
        <p className="overline text-red mb-5">/ Client Trust</p>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
          Trusted for precision and dependability.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="h-full border border-border p-8 flex flex-col hover:border-navy transition-colors duration-300">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed flex-1">“{t.quote}”</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-display font-bold tracking-tight">{t.name}</div>
                <div className="overline text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Client logos */}
      <Reveal>
        <p className="overline text-muted-foreground mt-20 mb-6">Industries & partners we serve</p>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
        {CLIENTS.map((c) => (
          <div key={c} className="bg-background py-8 grid place-items-center">
            <span className="font-display font-extrabold tracking-tighter text-lg text-muted-foreground/70 hover:text-navy transition-colors duration-300">
              {c}
            </span>
          </div>
        ))}
      </div>

      {/* Certifications + Quality assurance */}
      <div className="mt-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="overline text-red mb-6">/ Certifications & Standards</p>
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {CERTIFICATIONS.map((c) => (
                <div key={c.code} className="bg-background p-6 flex items-center gap-4">
                  <BadgeCheck size={26} className="text-navy shrink-0" />
                  <div>
                    <div className="font-display font-bold tracking-tight">{c.code}</div>
                    <div className="overline text-muted-foreground mt-0.5">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="h-full bg-navy text-white p-8 lg:p-10 flex flex-col">
              <ShieldCheck size={30} className="text-red mb-6" />
              <h3 className="font-display font-bold text-2xl tracking-tight">Quality Assurance</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Every project is governed by documented QA/QC checkpoints — from
                material inspection to final commissioning sign-off — so quality
                is verified, not assumed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

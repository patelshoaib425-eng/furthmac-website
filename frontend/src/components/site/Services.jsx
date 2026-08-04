import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./Motion";
import { SERVICES, IMAGES } from "../../data/content";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Services = () => (
  <section
    id="services"
    data-testid="services-section"
    className="relative bg-navy text-white py-24 lg:py-32 grain"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <Reveal>
          <p className="overline text-red mb-5">/ What We Do</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
            Complete industrial solutions under one partner.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/60 max-w-xs leading-relaxed">
            Four disciplines, engineered to work together — from the first
            survey to final commissioning.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {SERVICES.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.06} className="bg-navy">
            <button
              data-testid={`service-card-${s.key}`}
              onClick={() => scrollTo("contact")}
              className="group text-left w-full h-full p-8 lg:p-10 flex flex-col hover:bg-white/[0.04] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-white/40 text-sm">{s.no}</span>
                <ArrowUpRight
                  size={22}
                  className="text-white/40 group-hover:text-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>

              <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-white/10">
                <img
                  src={IMAGES[s.img]}
                  alt={s.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-5">
                {s.title}
              </h3>
              <ul className="space-y-2.5 mt-auto">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-white/70">
                    <Check size={15} className="text-red shrink-0" />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

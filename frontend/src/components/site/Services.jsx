import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Motion";
import { Icon } from "./Icon";
import { SERVICES } from "../../data/content";

export const ServicesSection = ({ heading = "Complete engineering solutions.", intro }) => (
  <section id="services" data-testid="services-section" className="bg-background py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <Reveal>
          <p className="overline text-red mb-5">/ What We Do</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
            {heading}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-xs leading-relaxed">{intro}</p>
          </Reveal>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {SERVICES.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.05} className="bg-background">
            <div
              data-testid={`service-card-${s.key}`}
              className="group h-full p-8 lg:p-9 flex flex-col hover:bg-navy hover:text-white transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="h-12 w-12 grid place-items-center border border-border group-hover:border-white/30 transition-colors duration-300">
                  <Icon name={s.icon} size={22} className="text-navy group-hover:text-red transition-colors duration-300" />
                </span>
                <span className="font-mono text-sm text-muted-foreground group-hover:text-white/40 transition-colors">{s.no}</span>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/70 transition-colors leading-relaxed text-sm mb-6">
                {s.desc}
              </p>
              <Link
                to="/services"
                data-testid={`service-learn-${s.key}`}
                className="mt-auto inline-flex items-center gap-2 overline text-navy group-hover:text-red transition-colors"
              >
                Learn More
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

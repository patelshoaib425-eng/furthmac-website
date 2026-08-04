import { Reveal } from "./Motion";
import { Icon } from "./Icon";
import { WHY } from "../../data/content";

export const WhyChooseUs = () => (
  <section id="why" data-testid="why-section" className="relative bg-secondary/40 py-24 lg:py-32 eng-grid">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
      <div className="max-w-2xl mb-14">
        <Reveal>
          <p className="overline text-red mb-6">/ Why Choose Us</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95]">
            Reliability, engineered as a standard.
          </h2>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05} className="bg-background">
            <div className="group h-full p-8 lg:p-9 hover:bg-background transition-colors duration-300">
              <span className="h-12 w-12 grid place-items-center bg-navy text-white mb-6 group-hover:bg-red transition-colors duration-300">
                <Icon name={w.icon} size={22} />
              </span>
              <h3 className="font-display font-bold text-xl tracking-tight">{w.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

import { Reveal } from "./Motion";
import { WHY, IMAGES } from "../../data/content";

export const WhyChooseUs = () => (
  <section
    id="why"
    data-testid="why-section"
    className="relative bg-secondary/40 py-24 lg:py-32 eng-grid"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Sticky heading */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="overline text-red mb-6">/ Why Choose Us</p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95]">
                A spec sheet you can trust.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                We treat reliability as a measurable specification — not a
                marketing line.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 relative overflow-hidden aspect-[4/3] border border-border">
                <img
                  src={IMAGES.infra}
                  alt="Heavy infrastructure engineering"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature list */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border-t border-border">
            {WHY.map((w, i) => (
              <Reveal key={w.no} delay={i * 0.05}>
                <div className="group grid grid-cols-[auto,1fr] gap-6 py-8 border-b border-border hover:bg-background transition-colors duration-300 px-2">
                  <span className="font-mono text-sm text-muted-foreground pt-1.5 group-hover:text-red transition-colors">
                    {w.no}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

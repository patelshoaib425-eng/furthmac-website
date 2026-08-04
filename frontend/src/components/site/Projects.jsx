import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Motion";
import { CAPABILITIES, IMAGES } from "../../data/content";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Projects = () => (
  <section
    id="projects"
    data-testid="projects-section"
    className="bg-background py-24 lg:py-32"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <Reveal>
          <p className="overline text-red mb-5">/ Our Capabilities</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
            Engineering scope we deliver.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            As a newly launched partner, here is the representative scope our
            team is equipped and ready to execute.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {CAPABILITIES.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <button
              data-testid={`project-card-${i}`}
              onClick={() => scrollTo("contact")}
              className={`group relative block w-full text-left overflow-hidden border border-border ${
                i % 3 === 0 ? "aspect-[16/10]" : "aspect-[16/11]"
              }`}
            >
              <img
                src={IMAGES[p.img]}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90" />
              <div className="absolute top-5 left-5">
                <span className="bg-red text-white overline px-3 py-1.5">{p.tag}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-white/70 text-sm max-w-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {p.desc}
                    </p>
                  </div>
                  <span className="h-11 w-11 grid place-items-center bg-white/10 border border-white/20 group-hover:bg-red group-hover:border-red transition-colors duration-300 shrink-0">
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

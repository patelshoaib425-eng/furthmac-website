import { Reveal } from "./Motion";
import { PROJECTS, GALLERY, IMAGES } from "../../data/content";

export const Projects = ({ showGallery = true }) => (
  <section id="projects" data-testid="projects-section" className="bg-background py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <Reveal>
          <p className="overline text-red mb-5">/ Projects & Portfolio</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
            Engineering delivered, measured by results.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            Representative work across automation, manufacturing, fabrication and design.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article
              data-testid={`project-card-${i}`}
              className="group h-full border border-border overflow-hidden hover:border-navy transition-colors duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={IMAGES[p.img]}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red text-white overline px-3 py-1.5">{p.category}</span>
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <h3 className="font-display font-bold text-2xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="overline text-navy border border-border px-2.5 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                  <span className="overline text-muted-foreground">Result</span>
                  <span className="text-sm font-medium text-navy">{p.result}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {showGallery && (
        <>
          <Reveal>
            <p className="overline text-muted-foreground mt-20 mb-6">/ Work Gallery</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {GALLERY.map((g, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className={`relative overflow-hidden border border-border ${i % 5 === 0 ? "aspect-square md:col-span-2 md:aspect-[2/1]" : "aspect-square"}`}>
                  <img
                    src={IMAGES[g]}
                    alt="Furthmac work"
                    className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
);

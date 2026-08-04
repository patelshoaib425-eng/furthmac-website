import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Motion";
import { MANIFESTO, IMAGES } from "../../data/content";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-background py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: intro + image */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="overline text-red mb-6">/ About Furthmac</p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95]">
                Trusted engineering, from the ground up.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Furthmac Solutions is an industrial relocation and installation
                partner built on precision engineering. We shift machines,
                commission plants and wire power systems so your operations
                restart faster — with safety and quality engineered into every
                step.
              </p>
            </Reveal>

            <div ref={ref} className="mt-10 relative overflow-hidden aspect-[4/3] border border-border grain">
              <motion.img
                style={{ y: imgY, scale: 1.15 }}
                src={IMAGES.about}
                alt="Furthmac engineer on site"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-navy text-white px-5 py-3">
                <span className="overline">Engineering Partnership</span>
              </div>
            </div>
          </div>

          {/* Right: manifesto chapters */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <div className="divide-y divide-border border-y border-border">
              {MANIFESTO.map((m, i) => (
                <Reveal key={m.no} delay={i * 0.08}>
                  <div className="group py-8 grid grid-cols-[auto,1fr] gap-6 items-start hover:bg-secondary/50 transition-colors duration-300 px-2">
                    <span className="font-mono text-red text-sm pt-2">{m.no}</span>
                    <div>
                      <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {m.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
                        {m.body}
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
};

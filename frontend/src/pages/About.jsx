import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";
import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Motion";
import { Stats } from "../components/site/Stats";
import { WhyChooseUs } from "../components/site/WhyChooseUs";
import { CTA } from "../components/site/CTA";
import { MISSION, TIMELINE, IMAGES } from "../data/content";

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Furthmac Solutions"
        description="Learn about Furthmac Solutions — our vision, mission, engineering expertise and commitment to quality, safety and innovation."
      />
      <PageHeader
        overline="About Us"
        titleLines={["Engineering trust,", "built from", "the ground up."]}
        subtitle="A multi-disciplinary engineering partner delivering design, manufacturing, automation and relocation with disciplined execution."
        image="about"
      />

      {/* Intro */}
      <section className="bg-background py-24 lg:py-32" data-testid="about-intro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="overline text-red mb-6">/ Who We Are</p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tighter leading-[0.95]">
                Precision engineering, dependable delivery.
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Furthmac Solutions is an industrial engineering partner based in Pune,
                  India. We combine mechanical, electrical and automation expertise to
                  design, build, automate and relocate industrial systems.
                </p>
                <p>
                  From concept design and fabrication to commissioning and plant
                  relocation, we own the full engineering lifecycle — protecting our
                  clients' capital, uptime and people at every step.
                </p>
                <p>
                  Our commitment is simple: quality that is verified, safety that is
                  documented, and timelines that are engineered — not promised.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden aspect-[4/3] border border-border grain">
                <img src={IMAGES.about} alt="Furthmac engineering team" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/40 py-24 lg:py-32" data-testid="about-mission">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: Compass, tag: "Vision", body: MISSION.vision },
              { icon: Target, tag: "Mission", body: MISSION.mission },
            ].map((m, i) => (
              <Reveal key={m.tag} delay={i * 0.1}>
                <div className="h-full bg-background border border-border p-8 lg:p-10">
                  <span className="h-12 w-12 grid place-items-center bg-navy text-white mb-6">
                    <m.icon size={22} />
                  </span>
                  <p className="overline text-red mb-3">/ Our {m.tag}</p>
                  <p className="font-display font-bold text-2xl lg:text-3xl tracking-tight leading-tight">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24 lg:py-32" data-testid="about-timeline">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="overline text-red mb-6">/ Our Journey</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
              A company engineered to grow.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-border border border-border">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-8"
              >
                <span className="font-mono text-red text-sm">0{i + 1}</span>
                <div className="overline text-muted-foreground mt-4">{t.year}</div>
                <h3 className="font-display font-bold text-lg tracking-tight mt-2">{t.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
      <CTA />
    </>
  );
}

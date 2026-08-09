import { Seo } from "../components/site/Seo";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Motion";
import { Icon } from "../components/site/Icon";
import { CTABanner } from "../components/site/Home";
import { INDUSTRIES, IMAGES } from "../data/content";

export default function Industries() {
  return (
    <>
      <Seo title="Industries We Serve | Furthmac Solutions" description="Furthmac Solutions delivers industrial engineering across automobile, manufacturing, food processing, pharma, chemical, power, packaging and more." path="/industries" />
      <PageHeader overline="Industries" titleLines={["Deep industry", "knowledge, applied", "end-to-end."]} image="factory" />
      <section className="container-x py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i*0.03}>
              <div className="card-soft h-full overflow-hidden group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={IMAGES[ind.img]} alt={ind.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute top-4 left-4 h-11 w-11 rounded-xl bg-white/95 text-orange grid place-items-center"><Icon name={ind.icon} size={20} /></span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-navy text-lg">{ind.title}</h3>
                  <p className="mt-2 text-sm text-steel-500 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

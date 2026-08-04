import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Motion";
import { COMPANY, IMAGES } from "../../data/content";

export const CTA = () => (
  <section data-testid="cta-section" className="relative overflow-hidden bg-navy text-white">
    <img
      src={IMAGES.infra}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
      <Reveal>
        <p className="overline text-red mb-6">/ Start a Project</p>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] max-w-3xl">
          Let’s engineer your next move.
        </h2>
        <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
          Tell us your scope — machinery, plant, automation or fabrication. Our
          engineering team typically responds within one business day.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact"
            data-testid="cta-quote-btn"
            className="group inline-flex items-center justify-between gap-6 bg-red text-white px-7 py-4 hover:bg-white hover:text-navy transition-colors duration-300"
          >
            <span className="overline">Request a Quote</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
          <a
            href={`https://wa.me/${COMPANY.phoneDigits}`}
            target="_blank"
            rel="noreferrer"
            data-testid="cta-whatsapp-btn"
            className="group inline-flex items-center justify-center gap-3 border border-white/40 text-white px-7 py-4 hover:bg-white/10 transition-colors duration-300"
          >
            <MessageCircle size={18} />
            <span className="overline">Contact on WhatsApp</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

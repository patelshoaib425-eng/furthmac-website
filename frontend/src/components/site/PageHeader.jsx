import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MaskLines } from "./Motion";
import { IMAGES } from "../../data/content";

export const PageHeader = ({ overline, titleLines = [], subtitle, image = "hero" }) => (
  <section className="relative overflow-hidden bg-navy text-white pt-36 pb-16 lg:pt-44 lg:pb-24">
    <img src={IMAGES[image]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
    <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy/70" />
    <div className="absolute inset-0 eng-grid opacity-40 mix-blend-overlay" />
    <div className="relative z-10 container-x">
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} aria-label="Breadcrumb" className="flex items-center gap-2 overline text-white/70 mb-5">
        <Link to="/" className="hover:text-orange transition-colors">Home</Link>
        <span>›</span>
        <span className="text-orange">{overline}</span>
      </motion.nav>
      <h1 className="font-display font-extrabold tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl">
        <MaskLines lines={titleLines} delay={0.1} />
      </h1>
      {subtitle && (
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-6 max-w-2xl text-white/80 leading-relaxed">
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

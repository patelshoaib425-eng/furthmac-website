import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MaskLines } from "./Motion";
import { IMAGES } from "../../data/content";

export const PageHeader = ({ overline, titleLines = [], subtitle, image = "infra" }) => (
  <section
    data-testid="page-header"
    className="relative bg-navy text-white overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
  >
    <img src={IMAGES[image]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />
    <div className="absolute inset-0 eng-grid opacity-[0.1] mix-blend-overlay" />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 overline text-white/60 mb-6"
      >
        <Link to="/" className="hover:text-red transition-colors">Home</Link>
        <span>/</span>
        <span className="text-red">{overline}</span>
      </motion.div>
      <h1 className="font-display font-extrabold tracking-tighter leading-[0.95] text-4xl sm:text-5xl lg:text-6xl">
        <MaskLines lines={titleLines} delay={0.1} />
      </h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-xl text-white/75 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

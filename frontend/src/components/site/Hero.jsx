import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { MaskLines } from "./Motion";
import { COMPANY, IMAGES } from "../../data/content";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-navy"
    >
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-0">
        <img
          src={IMAGES.hero}
          alt="Industrial machinery factory"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30"
      />
      <div className="absolute inset-0 eng-grid opacity-[0.12] mix-blend-overlay" />

      {/* Top meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-28 inset-x-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between text-white/70 overline">
          <span>Est. Pune, India</span>
          <span className="hidden sm:block">Mechanical / Electrical / Logistics</span>
          <span>Ref. FMS—001</span>
        </div>
      </motion.div>

      {/* Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-16 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="overline text-red mb-6"
        >
          / {COMPANY.tagline}
        </motion.p>

        <h1 className="font-display font-extrabold text-white tracking-tighter leading-[0.92] text-4xl sm:text-6xl lg:text-[5.5rem]">
          <MaskLines
            lines={["Engineering", "Excellence That", "Moves Industries"]}
            delay={0.35}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-8 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed"
        >
          Providing reliable industrial relocation, mechanical, electrical and
          logistical solutions with precision and expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <button
            data-testid="hero-quote-btn"
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center justify-between gap-6 bg-red text-white px-7 py-4 hover:bg-white hover:text-navy transition-colors duration-300"
          >
            <span className="overline">Get Quote</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          <a
            data-testid="hero-whatsapp-btn"
            href={`https://wa.me/${COMPANY.phoneDigits}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-white/40 text-white px-7 py-4 hover:bg-white/10 transition-colors duration-300"
          >
            <MessageCircle size={18} />
            <span className="overline">Contact on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

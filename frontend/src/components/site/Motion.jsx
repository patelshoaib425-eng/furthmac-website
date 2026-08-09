import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, className = "", delay = 0, y = 24, as = "div" }) => {
  const M = motion[as] || motion.div;
  return (
    <M className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease: EASE, delay }}>
      {children}
    </M>
  );
};

export const MaskLines = ({ lines = [], className = "", delay = 0, lineClass = "" }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden">
        <motion.span className={`block will-change-transform ${lineClass}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: EASE, delay: delay + i * 0.1 }}>
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

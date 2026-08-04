import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Masked line-by-line reveal for headings
export const MaskLines = ({ lines = [], className = "", delay = 0, lineClass = "" }) => (
  <span className={className} aria-label={lines.join(" ")}>
    {lines.map((line, i) => (
      <span key={i} className="mask-line" aria-hidden="true">
        <motion.span
          className={`block will-change-transform ${lineClass}`}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.05, ease: EASE, delay: delay + i * 0.12 }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

// Generic scroll-reveal wrapper
export const Reveal = ({ children, className = "", delay = 0, y = 28, as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
};

export const EASE_OUT = EASE;

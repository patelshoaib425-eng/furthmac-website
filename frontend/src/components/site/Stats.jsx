import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../../data/content";

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold tracking-tighter tabular-nums">
      {n}
      <span className="text-red">{suffix}</span>
    </span>
  );
};

export const Stats = () => (
  <section data-testid="stats-section" className="bg-navy text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-navy p-8 lg:p-10"
          >
            <div className="text-4xl lg:text-6xl leading-none">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-[14rem]">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

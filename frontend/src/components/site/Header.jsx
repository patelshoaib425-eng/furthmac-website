import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, COMPANY, SERVICES } from "../../data/content";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => { const on = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on); }, []);
  useEffect(() => setOpen(false), [loc.pathname]);
  const isHome = loc.pathname === "/";
  return (
    <motion.header data-testid="site-header" initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || !isHome ? "glass border-b border-steel-100 py-3 shadow-[0_1px_0_rgba(10,42,94,0.05)]" : "bg-transparent py-5"}`}>
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" data-testid="logo-home" className="flex items-center group">
          <img src={scrolled || !isHome ? "/wordmark-dark.png" : "/wordmark.png"} alt="Furthmac Solutions" className="h-9 sm:h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((l) => l.label === "Services" ? (
            <div key={l.to} onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)} className="relative">
              <NavLink to={l.to} data-testid={`nav-${l.label.toLowerCase()}`} className={({isActive}) => `px-3 py-2 text-sm font-medium inline-flex items-center gap-1 transition-colors ${isActive ? "text-orange" : (scrolled || !isHome ? "text-navy hover:text-orange" : "text-white/90 hover:text-white")}`}>
                Services <ChevronDown size={14} />
              </NavLink>
              <AnimatePresence>
                {svcOpen && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.15 }} className="absolute top-full left-0 mt-1 w-[520px] p-3 bg-white rounded-2xl shadow-xl border border-steel-100 grid grid-cols-2 gap-1">
                    {SERVICES.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm px-3 py-2 rounded-lg hover:bg-steel-50 text-navy">{s.title}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink key={l.to} to={l.to} data-testid={`nav-${l.label.toLowerCase()}`} className={({isActive}) => `px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-orange" : (scrolled || !isHome ? "text-navy hover:text-orange" : "text-white/90 hover:text-white")}`}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" data-testid="header-cta" className="btn-primary text-sm py-3 px-5">Get a Free Consultation</Link>
        </div>
        <button data-testid="mobile-menu-btn" onClick={() => setOpen(o => !o)} className={`lg:hidden h-10 w-10 grid place-items-center rounded-xl ${scrolled || !isHome ? "text-navy bg-steel-50" : "text-white bg-white/10"}`} aria-label="Menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden glass border-t border-steel-100">
            <div className="container-x py-4 flex flex-col">
              {NAV.map((l) => (
                <NavLink key={l.to} to={l.to} className="py-3 text-navy text-lg font-semibold border-b border-steel-100 last:border-0">{l.label}</NavLink>
              ))}
              <Link to="/contact" className="btn-primary mt-4 justify-center">Get a Free Consultation</Link>
              <a href={`tel:${COMPANY.phone}`} className="mt-3 text-navy font-semibold text-center">{COMPANY.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

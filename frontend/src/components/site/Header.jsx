import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ShareButton } from "./Share";
import { COMPANY } from "../../data/content";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-300 border-b ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-border py-3"
          : "bg-background/40 backdrop-blur-md border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link data-testid="logo-home" to="/" className="flex items-center gap-2 group">
          <span className="h-6 w-6 bg-navy flex items-center justify-center">
            <span className="h-2.5 w-2.5 bg-red" />
          </span>
          <span className="font-display font-extrabold tracking-tighter text-base sm:text-lg leading-none">
            FURTHMAC<span className="text-red">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `overline transition-colors duration-200 ${
                  isActive ? "text-red" : "text-foreground/70 hover:text-red"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ShareButton />
          <button
            data-testid="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center border border-border hover:border-red transition-colors duration-200"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/contact"
            data-testid="header-quote-btn"
            className="hidden sm:inline-flex bg-navy text-white overline px-5 py-3 hover:bg-red transition-colors duration-200"
          >
            Request a Quote
          </Link>
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden h-10 w-10 grid place-items-center border border-border"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="py-3 text-left font-display font-bold text-xl tracking-tight border-b border-border/60 last:border-0"
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={`https://wa.me/${COMPANY.phoneDigits}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 bg-red text-white overline px-5 py-4 text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

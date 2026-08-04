import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY } from "../../data/content";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const QUICK = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Capabilities", id: "projects" },
  { label: "Why Us", id: "why" },
  { label: "Contact", id: "contact" },
];

const SERVICES = ["Industrial Relocation", "Mechanical Solutions", "Electrical Solutions", "Logistics Solutions"];

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-ink text-white grain relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div>
          <div className="mb-5">
            <Logo markClass="h-9" wordClass="text-2xl" className="text-white" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">{COMPANY.tagline}. Industrial relocation, mechanical, electrical & logistics engineering.</p>
          <div className="flex gap-3 mt-6">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" data-testid={`social-${i}`} className="h-10 w-10 grid place-items-center border border-white/15 hover:bg-red hover:border-red transition-colors duration-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="overline text-white/40 block mb-5">Quick Links</span>
          <ul className="space-y-3">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button onClick={() => scrollTo(q.id)} className="text-white/70 hover:text-red transition-colors text-sm">{q.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="overline text-white/40 block mb-5">Services</span>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s} className="text-white/70 text-sm">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <span className="overline text-white/40 block mb-5">Contact</span>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-white/70"><Mail size={16} className="text-red shrink-0 mt-0.5" /><a href={`mailto:${COMPANY.email}`} className="hover:text-red transition-colors break-all">{COMPANY.email}</a></li>
            <li className="flex gap-3 text-white/70"><Phone size={16} className="text-red shrink-0 mt-0.5" /><a href={`tel:+${COMPANY.phoneDigits}`} className="hover:text-red transition-colors">{COMPANY.phone}</a></li>
            <li className="flex gap-3 text-white/70"><MapPin size={16} className="text-red shrink-0 mt-0.5" /><span>{COMPANY.address}</span></li>
          </ul>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <h2 className="font-display font-extrabold tracking-tighter leading-none text-white/10 text-[18vw] lg:text-[13rem] select-none pointer-events-none">
          FURTHMAC
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-white/10">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <button onClick={() => scrollTo("hero")} className="group inline-flex items-center gap-2 text-white/40 hover:text-red transition-colors text-xs overline">
          Back to top <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </footer>
);

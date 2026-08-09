import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, ArrowRight, Clock } from "lucide-react";
import { COMPANY, SERVICES, INDUSTRIES } from "../../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-navy-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 eng-grid opacity-30" />
    <div className="relative container-x pt-20 pb-8">
      <div className="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="h-10 w-10 rounded-xl bg-orange grid place-items-center font-display font-extrabold">F</span>
            <span className="font-display font-bold text-xl">Furthmac Solutions</span>
          </Link>
          <p className="mt-5 text-white/60 leading-relaxed max-w-sm">Industrial Automation, PLC Programming, Electrical & Mechanical Engineering, EPC Projects and Engineering Consultancy across India.</p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
            <span className="flex items-center gap-3"><Clock size={15} className="text-orange" /> {COMPANY.hours}</span>
          </div>
          <a href={COMPANY.socials.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:bg-orange hover:border-orange transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {["About","Careers","Blog","Contact"].map((x) => (
              <li key={x}><Link to={`/${x.toLowerCase()}`} className="text-white/70 hover:text-orange transition-colors">{x} Us</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0,8).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-white/70 hover:text-orange transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2.5 text-sm">
            {INDUSTRIES.slice(0,6).map((i) => (
              <li key={i.slug}><Link to="/industries" className="text-white/70 hover:text-orange transition-colors">{i.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-10 border-t border-white/10 grid gap-8 md:grid-cols-3">
        <a href={`tel:${COMPANY.phone}`} className="flex gap-3 hover:text-orange transition-colors">
          <span className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center shrink-0"><Phone size={18} className="text-orange" /></span>
          <span><div className="overline text-white/50">Phone</div><div className="mt-1">{COMPANY.phone}</div></span>
        </a>
        <a href={`mailto:${COMPANY.email}`} className="flex gap-3 hover:text-orange transition-colors">
          <span className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center shrink-0"><Mail size={18} className="text-orange" /></span>
          <span><div className="overline text-white/50">Email</div><div className="mt-1 break-all">{COMPANY.email}</div></span>
        </a>
        <div className="flex gap-3">
          <span className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center shrink-0"><MapPin size={18} className="text-orange" /></span>
          <span><div className="overline text-white/50">Address</div><div className="mt-1 text-white/80">{COMPANY.address}</div></span>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50">
        <span>© 2026 Furthmac Solutions. All Rights Reserved.</span>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

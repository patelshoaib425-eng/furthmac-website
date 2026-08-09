import { MessageCircle, Phone, Mail } from "lucide-react";
import { COMPANY } from "../../data/content";
const btn = "h-12 w-12 rounded-full grid place-items-center shadow-lg hover:scale-105 transition-transform";
export const FloatingContacts = () => (
  <div data-testid="floating-contacts" className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
    <a href={`https://wa.me/${COMPANY.phoneDigits}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${btn} bg-[#25D366] text-white`} data-testid="fc-wa"><MessageCircle size={20} /></a>
    <a href={`tel:${COMPANY.phone}`} aria-label="Call" className={`${btn} bg-orange text-white`} data-testid="fc-call"><Phone size={20} /></a>
    <a href={`mailto:${COMPANY.email}`} aria-label="Email" className={`${btn} bg-navy text-white`} data-testid="fc-mail"><Mail size={20} /></a>
  </div>
);

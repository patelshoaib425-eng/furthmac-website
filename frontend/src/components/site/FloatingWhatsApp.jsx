import { MessageCircle } from "lucide-react";
import { COMPANY } from "../../data/content";

export const FloatingWhatsApp = () => (
  <a
    data-testid="floating-whatsapp"
    href={`https://wa.me/${COMPANY.phoneDigits}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 bg-red text-white pl-4 pr-5 py-3 shadow-[0_8px_30px_rgba(225,29,46,0.35)] hover:bg-navy transition-colors duration-300"
  >
    <MessageCircle size={20} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
    <span className="overline hidden sm:inline">WhatsApp</span>
  </a>
);

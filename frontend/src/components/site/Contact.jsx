import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Loader2 } from "lucide-react";
import { Reveal } from "./Motion";
import { COMPANY, SERVICES } from "../../data/content";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const empty = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export const ContactSection = ({ compact = false }) => {
  const [f, setF] = useState(empty);
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) return toast.error("Please fill in your name, email and message.");
    setLoading(true);
    try { await axios.post(`${API}/contact`, f); toast.success("Thank you. Your enquiry has been submitted successfully."); setF(empty); }
    catch { toast.error("Something went wrong. Please try WhatsApp or email us directly."); }
    finally { setLoading(false); }
  };
  return (
    <section id="contact" data-testid="contact-section" className={`${compact ? "py-16" : "py-24 lg:py-32"} bg-white`}>
      <div className="container-x">
        {!compact && (
          <Reveal><p className="overline text-orange mb-3">Contact</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-navy max-w-2xl">Let's engineer your next project.</h2></Reveal>
        )}
        <div className={`${compact ? "" : "mt-12"} grid lg:grid-cols-12 gap-10`}>
          <form onSubmit={submit} data-testid="contact-form" className="lg:col-span-7 card-soft p-8 lg:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name *"><Input data-testid="input-name" value={f.name} onChange={set("name")} placeholder="Your full name" className="h-12 rounded-xl" /></Field>
              <Field label="Company"><Input data-testid="input-company" value={f.company} onChange={set("company")} placeholder="Company name" className="h-12 rounded-xl" /></Field>
              <Field label="Email *"><Input data-testid="input-email" type="email" value={f.email} onChange={set("email")} placeholder="you@company.com" className="h-12 rounded-xl" /></Field>
              <Field label="Phone"><Input data-testid="input-phone" value={f.phone} onChange={set("phone")} placeholder="+91 ..." className="h-12 rounded-xl" /></Field>
            </div>
            <Field label="Service Required">
              <Select value={f.service} onValueChange={(v) => setF((x) => ({ ...x, service: v }))}>
                <SelectTrigger data-testid="input-service" className="h-12 rounded-xl"><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>{SERVICES.map((s) => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}<SelectItem value="Other">Other</SelectItem></SelectContent>
              </Select>
            </Field>
            <Field label="Message *"><Textarea data-testid="input-message" value={f.message} onChange={set("message")} placeholder="Tell us about your project..." rows={5} className="rounded-xl resize-none" /></Field>
            <button type="submit" data-testid="contact-submit" disabled={loading} className="btn-primary disabled:opacity-60">{loading ? <>Sending <Loader2 size={16} className="animate-spin" /></> : <>Send Enquiry <ArrowRight size={16} /></>}</button>
          </form>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="card-soft p-6 divide-y divide-steel-100">
              <Info icon={<MapPin size={17} />} label="Address"><div>{COMPANY.addressLines.map((l,i)=><div key={i}>{l}</div>)}</div></Info>
              <Info icon={<Phone size={17} />} label="Phone"><a href={`tel:${COMPANY.phone}`} className="hover:text-orange">{COMPANY.phone}</a></Info>
              <Info icon={<Mail size={17} />} label="Email"><a href={`mailto:${COMPANY.email}`} className="hover:text-orange break-all">{COMPANY.email}</a></Info>
              <Info icon={<Clock size={17} />} label="Working Hours">{COMPANY.hours}</Info>
            </div>
            <a data-testid="wa-link" href={`https://wa.me/${COMPANY.phoneDigits}`} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-[#25D366] text-white px-6 py-4 font-semibold hover:opacity-95 transition-opacity">
              <span className="flex items-center gap-3"><MessageCircle size={18} /> Chat on WhatsApp</span><ArrowRight size={18} />
            </a>
            <div className="rounded-2xl overflow-hidden border border-steel-100 aspect-[4/3]">
              <iframe title="Furthmac Solutions location" data-testid="contact-map" src="https://www.google.com/maps?q=Hinjewadi,+Village+Marunji,+Taluka+Mulshi,+Pune,+Maharashtra+411057&output=embed" className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Field = ({ label, children }) => (<label className="block"><span className="overline text-steel-500 block mb-2">{label}</span>{children}</label>);
const Info = ({ icon, label, children }) => (<div className="py-4 first:pt-0 last:pb-0 flex gap-4"><span className="h-10 w-10 rounded-xl bg-orange/10 text-orange grid place-items-center shrink-0">{icon}</span><div><div className="overline text-steel-500">{label}</div><div className="mt-1 text-navy text-sm leading-relaxed">{children}</div></div></div>);

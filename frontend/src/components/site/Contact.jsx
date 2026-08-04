import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Loader2 } from "lucide-react";
import { Reveal } from "./Motion";
import { COMPANY } from "../../data/content";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICE_OPTIONS = [
  "Industrial Relocation",
  "Mechanical Solutions",
  "Electrical Solutions",
  "Logistics Solutions",
  "Other",
];

const empty = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Enquiry sent. Our engineering team will be in touch shortly.");
      setForm(empty);
    } catch (err) {
      toast.error("Something went wrong. Please try WhatsApp or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-background py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="overline text-red mb-5">/ Start a Project</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] max-w-2xl">
            Let’s engineer your next move.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={submit} data-testid="contact-form" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name *">
                  <Input data-testid="input-name" value={form.name} onChange={set("name")} placeholder="Your name" className="rounded-none h-12" />
                </Field>
                <Field label="Email *">
                  <Input data-testid="input-email" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className="rounded-none h-12" />
                </Field>
                <Field label="Phone">
                  <Input data-testid="input-phone" value={form.phone} onChange={set("phone")} placeholder="+91 ..." className="rounded-none h-12" />
                </Field>
                <Field label="Company">
                  <Input data-testid="input-company" value={form.company} onChange={set("company")} placeholder="Company name" className="rounded-none h-12" />
                </Field>
              </div>

              <Field label="Service">
                <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}>
                  <SelectTrigger data-testid="select-service" className="rounded-none h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {SERVICE_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o} className="rounded-none">{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Message *">
                <Textarea data-testid="input-message" value={form.message} onChange={set("message")} placeholder="Tell us about your machinery, plant or relocation scope..." rows={5} className="rounded-none resize-none" />
              </Field>

              <button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={loading}
                className="group inline-flex items-center justify-between gap-6 bg-navy text-white px-8 py-4 hover:bg-red transition-colors duration-300 disabled:opacity-60"
              >
                <span className="overline">{loading ? "Sending" : "Send Enquiry"}</span>
                {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
              </button>
            </form>
          </div>

          {/* Details + map */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border border-border divide-y divide-border">
              <InfoRow icon={<Mail size={17} />} label="Email" testid="contact-email">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-red transition-colors break-all">{COMPANY.email}</a>
              </InfoRow>
              <InfoRow icon={<Phone size={17} />} label="Phone" testid="contact-phone">
                <a href={`tel:+${COMPANY.phoneDigits}`} className="hover:text-red transition-colors">{COMPANY.phone}</a>
              </InfoRow>
              <InfoRow icon={<MapPin size={17} />} label="Address" testid="contact-address">
                {COMPANY.address}
              </InfoRow>
            </div>

            <a
              data-testid="contact-whatsapp-btn"
              href={`https://wa.me/${COMPANY.phoneDigits}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 group inline-flex items-center justify-between gap-4 bg-red text-white px-6 py-4 hover:bg-navy transition-colors duration-300"
            >
              <span className="flex items-center gap-3"><MessageCircle size={18} /><span className="overline">Chat on WhatsApp</span></span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            <div className="mt-4 border border-border overflow-hidden aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Furthmac Solutions location"
                data-testid="contact-map"
                src="https://www.google.com/maps?q=Village+Nere,+Taluka+Mulshi,+Pune,+Maharashtra+411033&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }) => (
  <label className="block">
    <span className="overline text-muted-foreground block mb-2">{label}</span>
    {children}
  </label>
);

const InfoRow = ({ icon, label, children, testid }) => (
  <div className="p-6 flex gap-4" data-testid={testid}>
    <span className="h-9 w-9 grid place-items-center bg-navy text-white shrink-0">{icon}</span>
    <div>
      <span className="overline text-muted-foreground block mb-1">{label}</span>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

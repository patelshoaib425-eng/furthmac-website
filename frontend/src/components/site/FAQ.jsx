import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Reveal } from "./Motion";
import { FAQS } from "../../data/content";

export const FAQ = () => (
  <section id="faq" data-testid="faq-section" className="bg-secondary/40 py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <Reveal>
          <p className="overline text-red mb-6">/ FAQ</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95]">
            Answers before you ask.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
            Common questions about how we scope, execute and deliver industrial
            engineering projects.
          </p>
        </Reveal>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <Reveal>
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left font-display font-bold text-lg lg:text-xl tracking-tight hover:no-underline py-6"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

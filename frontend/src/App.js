import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { LanguageProvider } from "@/i18n/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import "@/App.css";

function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground antialiased selection:bg-red selection:text-white">
          <Header />
          <main>
            <Hero />
            <Ticker />
            <About />
            <Services />
            <Projects />
            <WhyChooseUs />
            <Contact />
          </main>
          <Footer />
          <Toaster position="bottom-right" theme="system" richColors closeButton />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

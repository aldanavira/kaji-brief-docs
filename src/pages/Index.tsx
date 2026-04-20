import { Nav } from "@/components/kaji/Nav";
import { Hero } from "@/components/kaji/Hero";
import { Problem } from "@/components/kaji/Problem";
import { Solutions } from "@/components/kaji/Solutions";
import { HowItWorks } from "@/components/kaji/HowItWorks";
import { Comparison } from "@/components/kaji/Comparison";
import { Persona } from "@/components/kaji/Persona";
import { Pricing } from "@/components/kaji/Pricing";
import { CTA } from "@/components/kaji/CTA";
import { Footer } from "@/components/kaji/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Kaji.id — AI Legal Intelligence Platform Indonesia";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute('content', 'Kaji.id mengubah ribuan PDF peraturan jadi jawaban hukum yang jernih dengan kutipan pasal. AI legal assistant untuk masyarakat Indonesia.');
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <div id="solusi"><Solutions /></div>
      <HowItWorks />
      <Comparison />
      <Persona />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

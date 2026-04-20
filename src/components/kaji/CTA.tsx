import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-[hsl(158,55%,12%)] text-primary-foreground p-10 md:p-20 text-center grain">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Mulai sekarang</p>
          <h2 className="mt-4 font-display text-4xl md:text-7xl font-semibold leading-[0.95] text-balance max-w-3xl mx-auto">
            Hukum yang berpihak pada <em className="italic font-normal">kamu.</em>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Tanpa kartu kredit. Tanpa instalasi. Tanyakan apa pun, dapatkan jawaban dalam hitungan detik.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full h-12 px-6 group">
              Coba Kaji gratis
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Jadwalkan demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

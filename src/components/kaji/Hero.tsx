import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import heroImg from "@/assets/hero-kaji.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="container relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-mono text-muted-foreground">
              <Sparkles className="h-3 w-3 text-accent" />
              AI-Powered Legal & Policy Intelligence
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-semibold text-balance">
              Hukum yang <em className="italic text-accent font-normal">akhirnya</em> bisa dimengerti.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Kaji.id mengurai ribuan PDF peraturan pemerintah menjadi jawaban yang jernih—lengkap dengan kutipan pasal yang tepat. Tanya seperti ngobrol, dapat jawaban yang valid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full h-12 px-6 group">
                Mulai Tanya Gratis
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-6 bg-card/60 backdrop-blur">
                Lihat cara kerja
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs font-mono text-muted-foreground">
              <span>1,200+ sumber regulasi</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Sitasi pasal otomatis</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>24/7</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-sage/30 to-accent/20 blur-3xl -z-10 rounded-full" />
            <div className="relative animate-float">
              <img
                src={heroImg}
                alt="Asisten hukum AI Kaji.id membantu pekerja Indonesia memahami hak-hak hukumnya"
                width={1280} height={1280}
                className="w-full rounded-3xl shadow-elevated"
              />
            </div>
            {/* Floating chat card */}
            <div className="absolute -left-4 md:-left-12 bottom-8 w-72 rounded-2xl bg-card border border-border shadow-elevated p-4 animate-fade-up">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Kaji AI
              </div>
              <p className="text-sm leading-relaxed">
                Berdasarkan <span className="font-medium text-primary">UU Ketenagakerjaan No. 13/2003 Pasal 78</span>, lembur wajib dibayar 1.5x upah per jam pertama…
              </p>
            </div>
            <div className="absolute -right-2 top-8 rounded-2xl bg-primary text-primary-foreground p-3 shadow-elevated max-w-[180px]">
              <div className="flex items-center gap-2 text-xs">
                <Send className="h-3 w-3" />
                <span className="font-mono opacity-80">Kamu</span>
              </div>
              <p className="text-sm mt-1">Lembur saya tidak dibayar, gimana?</p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 border-t border-border/60 pt-8">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            Membaca peraturan dari sumber resmi
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground/80 font-display italic">
            <span>Kementerian Hukum & HAM</span>
            <span>·</span>
            <span>Mahkamah Agung</span>
            <span>·</span>
            <span>BPK RI</span>
            <span>·</span>
            <span>Setneg</span>
            <span>·</span>
            <span>JDIH Nasional</span>
          </div>
        </div>
      </div>
    </section>
  );
};

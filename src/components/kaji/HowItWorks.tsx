const steps = [
  { n: "01", t: "Curhat masalah", d: "Tulis situasimu pakai bahasa sehari-hari. Tidak perlu istilah hukum." },
  { n: "02", t: "AI mengurai", d: "Sistem stemming, spellcheck, dan pencocokan ke ribuan pasal regulasi." },
  { n: "03", t: "Jawaban + sitasi", d: "Dapat penjelasan ringkas plus pasal aslinya untuk diverifikasi." },
  { n: "04", t: "Eskalasi (opsional)", d: "Kasus kompleks? Lanjut ke pakar dengan ringkasan otomatis." },
];

export const HowItWorks = () => (
  <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
      backgroundSize: "32px 32px",
    }} />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Cara kerja</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            Empat langkah dari kebingungan ke <em className="italic font-normal">kejelasan.</em>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-2">
          {steps.map((s) => (
            <div key={s.n} className="group grid grid-cols-12 gap-6 py-8 border-t border-primary-foreground/15 hover:border-accent transition-colors">
              <div className="col-span-2 font-mono text-sm text-primary-foreground/60">{s.n}</div>
              <div className="col-span-10">
                <h3 className="font-display text-2xl md:text-3xl">{s.t}</h3>
                <p className="mt-2 text-primary-foreground/70 max-w-md">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

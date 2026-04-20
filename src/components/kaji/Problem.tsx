import { AlertTriangle, Wallet, EyeOff, Hourglass } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Fobia Hukum", desc: "Bahasa pasal yang teknis bikin masyarakat takut berurusan dengan hukum." },
  { icon: Wallet, title: "Biaya Tinggi", desc: "Konsultasi pengacara dianggap mahal dan tidak terjangkau untuk kasus sederhana." },
  { icon: EyeOff, title: "Risiko Tersembunyi", desc: "Banyak orang menandatangani kontrak tanpa paham implikasi hukumnya." },
  { icon: Hourglass, title: "Birokrasi Lambat", desc: "Mencari aturan relevan menyita waktu—aturan tersebar di 1.200+ situs." },
];

export const Problem = () => (
  <section className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Problem statement</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
          Banyak orang mengira hukum itu <em className="italic font-normal">mahal, rumit,</em> dan mengintimidasi.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          280 juta orang Indonesia mengakses hukum lewat PDF pemerintah yang berserakan. Tidak ada pencarian. Tidak ada struktur. Hanya PDF.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map((p, i) => (
          <div key={p.title} className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="font-mono text-xs text-muted-foreground">0{i+1}</div>
            <p.icon className="mt-6 h-6 w-6 text-accent" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

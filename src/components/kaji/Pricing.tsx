import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Rp 0",
    desc: "Untuk eksplorasi pertanyaan dasar.",
    feats: ["10 pertanyaan / bulan", "Akses regulasi inti", "Sitasi pasal otomatis"],
    cta: "Mulai gratis",
    featured: false,
  },
  {
    name: "Plus",
    price: "Rp 49rb",
    sub: "/ bulan",
    desc: "Untuk pekerja dan pelaku UMKM.",
    feats: ["Pertanyaan tak terbatas", "Templat dokumen lengkap", "Drafting kontrak otomatis", "Riwayat & ekspor PDF"],
    cta: "Coba 7 hari gratis",
    featured: true,
  },
  {
    name: "Pro",
    price: "Rp 199rb",
    sub: "/ bulan",
    desc: "Untuk profesional & tim hukum.",
    feats: ["Semua di Plus", "Konsultasi ekspert (2 sesi)", "Multi-user (5 seat)", "Prioritas dukungan"],
    cta: "Hubungi sales",
    featured: false,
  },
];

export const Pricing = () => (
  <section id="harga" className="py-24 md:py-32">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Harga</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
          Mulai gratis. Naik kelas saat kamu siap.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map(p => (
          <div key={p.name} className={`rounded-3xl p-8 border ${p.featured ? 'bg-primary text-primary-foreground border-primary shadow-elevated md:scale-105' : 'bg-card border-border'}`}>
            {p.featured && <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Paling populer</div>}
            <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
            <p className={`text-sm mt-1 ${p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold">{p.price}</span>
              {p.sub && <span className={`text-sm ${p.featured ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{p.sub}</span>}
            </div>
            <Button className="mt-6 w-full rounded-full" variant={p.featured ? "secondary" : "default"}>{p.cta}</Button>
            <ul className="mt-8 space-y-3 text-sm">
              {p.feats.map(f => (
                <li key={f} className="flex gap-2">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? 'text-accent' : 'text-primary'}`} strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

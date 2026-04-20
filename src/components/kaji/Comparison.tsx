import { Check, X } from "lucide-react";

const rows = [
  { feat: "Bahasa awam, bukan akademis", others: false, kaji: true },
  { feat: "Sitasi pasal otomatis", others: false, kaji: true },
  { feat: "Templat dokumen siap edit", others: "Manual", kaji: true },
  { feat: "Jawaban 24/7 instan", others: false, kaji: true },
  { feat: "Akses ke pakar terverifikasi", others: "Lambat", kaji: true },
  { feat: "Biaya terjangkau", others: false, kaji: true },
];

export const Comparison = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Kenapa Kaji.id</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
          Bukan database raksasa. Bukan marketplace lambat.
        </h2>
      </div>

      <div className="mt-12 rounded-3xl border border-border overflow-hidden">
        <div className="grid grid-cols-3 bg-secondary/60 px-6 py-4 text-sm font-mono">
          <div className="text-muted-foreground">Fitur</div>
          <div className="text-center text-muted-foreground">Platform lain</div>
          <div className="text-center text-primary font-semibold">Kaji.id</div>
        </div>
        {rows.map((r, i) => (
          <div key={r.feat} className={`grid grid-cols-3 items-center px-6 py-5 text-sm ${i !== rows.length - 1 ? 'border-b border-border' : ''}`}>
            <div className="font-medium pr-4">{r.feat}</div>
            <div className="text-center">
              {r.others === false ? (
                <X className="inline h-4 w-4 text-muted-foreground/60" />
              ) : (
                <span className="text-xs font-mono text-muted-foreground">{r.others}</span>
              )}
            </div>
            <div className="text-center">
              <Check className="inline h-4 w-4 text-accent" strokeWidth={3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

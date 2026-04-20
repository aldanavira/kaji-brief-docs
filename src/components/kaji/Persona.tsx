export const Persona = () => (
  <section id="persona" className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Untuk siapa</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
            Untuk Sari, dan jutaan orang lain seperti dia.
          </h2>
          <div className="mt-8 rounded-3xl bg-card border border-border p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent to-gold grid place-items-center text-accent-foreground font-display text-xl font-semibold">SR</div>
              <div>
                <p className="font-display text-xl font-semibold">Sari Rahayu, 28</p>
                <p className="text-sm text-muted-foreground">Staf admin · Tangerang Selatan</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div><dt className="font-mono text-xs text-muted-foreground">Pendidikan</dt><dd>D3 Akuntansi</dd></div>
              <div><dt className="font-mono text-xs text-muted-foreground">Gaji</dt><dd>Rp 5,2 jt/bln</dd></div>
              <div><dt className="font-mono text-xs text-muted-foreground">Status</dt><dd>Menikah, 1 anak</dd></div>
              <div><dt className="font-mono text-xs text-muted-foreground">Kontrak</dt><dd>PKWT 2 tahun</dd></div>
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Perjalanan Sari</p>
          <ol className="relative border-l-2 border-border ml-3 space-y-8">
            {[
              { t: "Trigger", d: "Atasan minta lembur Sabtu tanpa pemberitahuan tertulis—gaji lembur tidak dibayar." },
              { t: "Awareness", d: "Cari di TikTok soal hak lembur, melihat konten edukasi dari Kaji.id." },
              { t: "Onboarding", d: "Coba ketik: \"lembur tidak dibayar harus gimana?\". Dijawab dengan pasal." },
              { t: "Conversion", d: "Tertarik penjelasan lebih dalam—upgrade ke Kaji Plus." },
              { t: "Retention", d: "Buka Kaji.id rutin untuk pertanyaan lain (cuti, BPJS, kontrak)." },
            ].map((j, i) => (
              <li key={j.t} className="ml-6">
                <span className="absolute -left-[11px] grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground text-[10px] font-mono font-bold">{i+1}</span>
                <h3 className="font-display text-xl font-semibold">{j.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-md">{j.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

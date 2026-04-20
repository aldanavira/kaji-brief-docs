import { MessageSquareText, Library, UserCheck, Quote, FileText, Video } from "lucide-react";

const solutions = [
  {
    icon: MessageSquareText,
    eyebrow: "Conversational AI",
    title: "Tanya seperti ngobrol. Dijawab dengan pasal.",
    desc: "Cukup ceritakan masalahmu. AI kami menangkap intinya, mencocokkan ke regulasi yang relevan, lalu menjawab dengan bahasa sederhana—dan kutipan pasal aslinya.",
    bullet: ["Identifikasi pintar dari curhatan natural", "Referensi pasal langsung dari sumber resmi", "Drafting otomatis kontrak & NDA"],
    accentIcon: Quote,
  },
  {
    icon: Library,
    eyebrow: "Legal Database",
    title: "Perpustakaan regulasi yang selalu up-to-date.",
    desc: "Dari UU Cipta Kerja sampai PP terbaru—semua tersusun rapi dengan templat dokumen yang siap pakai (PKWT, NDA, surat gugatan).",
    bullet: ["Arsip regulasi terverifikasi", "Templat dokumen dengan placeholder", "Filter per bidang hukum"],
    accentIcon: FileText,
  },
  {
    icon: UserCheck,
    eyebrow: "Konsultasi Ekspert",
    title: "Untuk kasus rumit, langsung ke ahlinya.",
    desc: "Saat AI mendeteksi kasus kriminal atau litigasi berisiko tinggi, sistem menghubungkan kamu ke pengacara terverifikasi—dengan ringkasan kasus sudah disiapkan.",
    bullet: ["Pakar terverifikasi per spesialisasi", "Ringkasan kasus otomatis dari AI", "Chat, video call, atau tatap muka"],
    accentIcon: Video,
  },
];

export const Solutions = () => (
  <section id="fitur" className="py-24 md:py-32">
    <div className="container">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">What we bring</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
          Bukan perpustakaan. <em className="italic font-normal">Asisten.</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Tiga lapis bantuan—dari jawaban instan, dokumen siap pakai, sampai pakar manusia.
        </p>
      </div>

      <div className="mt-20 space-y-24">
        {solutions.map((s, i) => (
          <div key={s.eyebrow} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono">
                <s.icon className="h-3 w-3" />
                {s.eyebrow}
              </div>
              <h3 className="mt-5 font-display text-3xl md:text-5xl font-semibold leading-[1.05] text-balance">{s.title}</h3>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">{s.desc}</p>
              <ul className="mt-8 space-y-3">
                {s.bullet.map(b => (
                  <li key={b} className="flex gap-3 text-sm">
                    <span className="mt-2 h-1 w-6 bg-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <SolutionCard index={i} solution={s} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionCard = ({ index, solution }: { index: number; solution: typeof solutions[number] }) => {
  if (index === 0) {
    return (
      <div className="rounded-3xl bg-primary text-primary-foreground p-8 shadow-elevated">
        <div className="space-y-4">
          <div className="rounded-2xl bg-primary-foreground/10 p-4">
            <p className="text-xs font-mono opacity-70 mb-1">Pertanyaan</p>
            <p className="text-sm">Apakah perusahaan boleh menahan ijazah karyawan?</p>
          </div>
          <div className="rounded-2xl bg-accent text-accent-foreground p-4">
            <p className="text-xs font-mono opacity-80 mb-1">Kaji menjawab</p>
            <p className="text-sm leading-relaxed">
              Tidak. Sesuai <span className="font-semibold underline underline-offset-2">Permenaker No. 9/2024</span>, perusahaan dilarang menahan dokumen pribadi pekerja sebagai jaminan…
            </p>
            <div className="mt-3 flex gap-2 text-xs font-mono opacity-90">
              <span className="px-2 py-0.5 rounded-full bg-accent-foreground/20">Sumber resmi</span>
              <span className="px-2 py-0.5 rounded-full bg-accent-foreground/20">Diverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
        {["UU Cipta Kerja", "PP No. 35/2021 — PKWT", "NDA — Karyawan", "Surat Gugatan Wanprestasi", "PKWT — Marketing"].map((doc, i) => (
          <div key={doc} className={`flex items-center justify-between py-3 ${i !== 4 ? 'border-b border-border' : ''}`}>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-accent" />
              <span className="text-sm">{doc}</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">PDF · DOCX</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="rounded-3xl bg-secondary p-8 shadow-soft">
      <div className="space-y-4">
        {[
          { name: "Adv. Rina Pratiwi, S.H.", spec: "Hukum Ketenagakerjaan", rating: "4.9" },
          { name: "Adv. Budi Santoso, M.H.", spec: "HAKI & Kontrak Bisnis", rating: "4.8" },
        ].map(p => (
          <div key={p.name} className="flex items-center justify-between rounded-2xl bg-card p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.spec}</p>
              </div>
            </div>
            <span className="text-xs font-mono">★ {p.rating}</span>
          </div>
        ))}
        <button className="w-full text-center text-xs font-mono text-muted-foreground hover:text-foreground py-2">
          + 240 pakar lainnya
        </button>
      </div>
    </div>
  );
};

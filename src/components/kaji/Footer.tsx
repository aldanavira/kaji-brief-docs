import { Scale } from "lucide-react";

export const Footer = () => (
  <footer id="tentang" className="border-t border-border py-16">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Scale className="h-4 w-4" />
            </span>
            Kaji<span className="text-accent">.id</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            AI-powered legal & policy intelligence platform. Sebuah inisiatif Social Innovation Centre untuk membuka akses hukum bagi seluruh masyarakat Indonesia.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Produk</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#fitur" className="hover:text-accent">Conversational AI</a></li>
            <li><a href="#fitur" className="hover:text-accent">Legal Database</a></li>
            <li><a href="#fitur" className="hover:text-accent">Konsultasi Ekspert</a></li>
            <li><a href="#harga" className="hover:text-accent">Harga</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Perusahaan</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Tentang</a></li>
            <li><a href="#" className="hover:text-accent">Karier</a></li>
            <li><a href="#" className="hover:text-accent">Kontak</a></li>
            <li><a href="#" className="hover:text-accent">Kebijakan Privasi</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground">
        <span>© 2026 Kaji.id — Social Innovation Centre</span>
        <span>Dibangun dengan kepedulian di Jakarta 🇮🇩</span>
      </div>
    </div>
  </footer>
);

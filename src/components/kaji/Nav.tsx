import { Button } from "@/components/ui/button";
import { Menu, Scale } from "lucide-react";
import { useState } from "react";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Fitur", href: "#fitur" },
    { label: "Solusi", href: "#solusi" },
    { label: "Untuk Siapa", href: "#persona" },
    { label: "Harga", href: "#harga" },
    { label: "Tentang", href: "#tentang" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Scale className="h-4 w-4" />
          </span>
          <span>Kaji<span className="text-accent">.id</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm">Masuk</Button>
          <Button size="sm" className="rounded-full">Coba Gratis</Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm">{l.label}</a>
            ))}
            <Button className="rounded-full mt-2">Coba Gratis</Button>
          </div>
        </div>
      )}
    </header>
  );
};

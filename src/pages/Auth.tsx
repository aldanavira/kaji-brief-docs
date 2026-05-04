import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Scale, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";

const signUpSchema = z.object({
  fullName: z.string().trim().min(2, "Nama minimal 2 karakter").max(80),
  email: z.string().trim().email("Email tidak valid").max(255),
  password: z.string().min(8, "Password minimal 8 karakter").max(72),
});

const signInSchema = z.object({
  email: z.string().trim().email("Email tidak valid").max(255),
  password: z.string().min(1, "Password wajib diisi").max(72),
});

const Auth = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  useEffect(() => {
    document.title = mode === "signin" ? "Masuk · Kaji.id" : "Daftar · Kaji.id";
  }, [mode]);

  useEffect(() => {
    if (!loading && user) navigate("/", { replace: true });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const parsed = signUpSchema.safeParse(form);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { full_name: parsed.data.fullName },
          },
        });
        if (error) {
          toast.error(error.message.includes("already") ? "Email sudah terdaftar." : error.message);
          return;
        }
        toast.success("Akun dibuat! Cek email untuk verifikasi.");
      } else {
        const parsed = signInSchema.safeParse(form);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) {
          toast.error(error.message.includes("Invalid") ? "Email atau password salah." : error.message);
          return;
        }
        toast.success("Berhasil masuk.");
        navigate("/", { replace: true });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setSubmitting(true);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) {
      toast.error("Gagal masuk dengan Google.");
      setSubmitting(false);
      return;
    }
    if (result.redirected) return;
    navigate("/", { replace: true });
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex">
      {/* Left editorial panel */}
      <aside className="hidden lg:flex lg:w-1/2 relative bg-primary text-primary-foreground p-12 flex-col justify-between overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />
        <Link to="/" className="relative flex items-center gap-2 font-display text-xl font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-foreground text-primary">
            <Scale className="h-4 w-4" />
          </span>
          Kaji<span className="text-accent">.id</span>
        </Link>
        <div className="relative max-w-md">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Legal Intelligence</p>
          <h1 className="font-display text-5xl xl:text-6xl font-semibold leading-[0.95] text-balance">
            Hukum yang <em className="italic font-normal">jernih</em>, jawaban yang dipertanggungjawabkan.
          </h1>
          <p className="mt-6 text-primary-foreground/70 text-lg">
            Bergabung bersama ribuan profesional, mahasiswa, dan UMKM yang mengandalkan Kaji untuk memahami regulasi Indonesia.
          </p>
        </div>
        <div className="relative font-mono text-xs text-primary-foreground/50">
          © 2026 Kaji.id — Editorial Legal Platform
        </div>
      </aside>

      {/* Right form */}
      <section className="flex-1 flex flex-col">
        <header className="p-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kembali
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center px-6 pb-12">
          <div className="w-full max-w-md">
            <div className="lg:hidden flex items-center gap-2 font-display text-xl font-semibold mb-8">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Scale className="h-4 w-4" />
              </span>
              Kaji<span className="text-accent">.id</span>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {mode === "signin" ? "Selamat datang kembali" : "Mulai gratis"}
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight">
              {mode === "signin" ? "Masuk ke akunmu." : "Buat akun Kaji."}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {mode === "signin"
                ? "Lanjutkan riset hukum dan riwayat percakapanmu."
                : "Tanpa kartu kredit. Akses fitur dasar selamanya."}
            </p>

            <Button
              type="button"
              variant="outline"
              className="w-full mt-8 h-12 rounded-full"
              onClick={handleGoogle}
              disabled={submitting}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Lanjutkan dengan Google
            </Button>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground font-mono">
              <span className="h-px flex-1 bg-border" /> atau <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nama lengkap</Label>
                  <Input
                    id="fullName"
                    placeholder="Sari Rahayu"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="kamu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={mode === "signup" ? "Minimal 8 karakter" : "••••••••"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 rounded-full mt-2" disabled={submitting}>
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {mode === "signin" ? "Masuk" : "Daftar sekarang"}
              </Button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              {mode === "signin" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-foreground font-medium underline underline-offset-4 hover:text-accent transition-colors"
              >
                {mode === "signin" ? "Daftar gratis" : "Masuk di sini"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;

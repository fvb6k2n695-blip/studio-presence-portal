import { Link } from "@tanstack/react-router";

export function Burst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={`fill-primary ${className}`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="44" y="2" width="12" height="96" rx="6" transform={`rotate(${i * 15} 50 50)`} />
      ))}
    </svg>
  );
}

export function PillLink({ to, children }: { to: "/" | "/faq" | "/book"; children: React.ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-6 rounded-full border-2 border-primary px-6 py-2.5 font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
      {children}
      <span className="transition-transform group-hover:translate-x-1">⟶</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex justify-end gap-5 px-8 py-5 font-display text-lg font-black uppercase text-primary">
        {(["/", "/faq", "/book"] as const).map((to) => (
          <Link key={to} to={to} className="hover:underline underline-offset-4" activeOptions={{ exact: true }} activeProps={{ className: "underline" }}>
            {to === "/" ? "Home" : to.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-background px-8 py-8 text-sm text-muted-foreground">
      © 2026 Hot Box Records · Hallandale Beach, FL
    </footer>
  );
}

export function PageIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="grain bg-card px-8 pb-16 pt-32">
      <div className="mx-auto flex max-w-5xl items-center gap-6">
        <Burst className="h-20 w-20 shrink-0 animate-spin-slow" />
        <h1 className="text-5xl text-primary md:text-7xl">{title}</h1>
      </div>
      {children && <div className="mx-auto mt-6 max-w-5xl text-lg text-primary/90">{children}</div>}
    </section>
  );
}

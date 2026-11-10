import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/rooms", label: "Rooms" },
  { to: "/rates", label: "Rates" },
  { to: "/contact", label: "Book" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
          EMBER<span className="text-primary">●</span>ROOM
        </Link>
        <nav className="flex gap-8 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <span>© 2026 Ember Room Studios</span>
        <span>214 Foundry Lane, Brooklyn NY · hello@emberroom.studio</span>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 animate-rise">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-light md:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

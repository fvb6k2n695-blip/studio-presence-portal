import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site-chrome";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session — Hot Box Records" },
      { name: "description", content: "Book recording, mixing, mastering or voice-over at Hot Box Records." },
      { property: "og:title", content: "Book a Session — Hot Box Records" },
      { property: "og:description", content: "Book recording, mixing, mastering or voice-over." },
    ],
  }),
  component: Book,
});

const field = "w-full rounded-2xl border-2 border-input bg-transparent px-5 py-3 text-primary placeholder:text-primary/60 outline-none focus:border-primary";

function Book() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <PageIntro title="Book">Tell us what you're working on — we'll get back within 24 hours.</PageIntro>
      <section className="grain bg-background px-8 py-16">
        <div className="mx-auto max-w-2xl">
          {sent ? (
            <p className="rounded-2xl border-2 border-primary p-8 text-xl font-bold text-primary">Got it — we'll hit you back soon.</p>
          ) : (
            <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required placeholder="Name / Artist name" className={field} />
              <input required type="email" placeholder="Email" className={field} />
              <select className={`${field} bg-background`} defaultValue="Recording"><option>Recording</option><option>Mixing & Mastering</option><option>Voice-over</option><option>Production</option></select>
              <textarea rows={5} placeholder="Tell us about the project" className={field} />
              <button className="rounded-full bg-primary px-8 py-4 font-bold uppercase text-primary-foreground transition-transform hover:-translate-y-0.5">Send request ⟶</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

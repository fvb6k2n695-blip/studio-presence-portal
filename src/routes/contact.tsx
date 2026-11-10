import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Session — Ember Room Studios" },
      { name: "description", content: "Request a recording, mixing or mastering session." },
      { property: "og:title", content: "Book a Session — Ember Room Studios" },
      { property: "og:description", content: "Request a recording, mixing or mastering session." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-sm border border-input bg-card px-4 py-3 outline-none focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <PageIntro eyebrow="Book" title="Let's make something loud.">Tell us about your project and we'll reply within a day.</PageIntro>
      <div className="mx-auto max-w-2xl px-6">
        {sent ? (
          <p className="rounded-sm border border-primary p-8 text-lg">Thanks — we'll be in touch soon.</p>
        ) : (
          <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <select className={field} defaultValue="Recording"><option>Recording</option><option>Mixing</option><option>Mastering</option></select>
            <textarea rows={5} placeholder="Tell us about the project" className={field} />
            <button className="rounded-sm bg-primary px-7 py-4 font-medium text-primary-foreground shadow-ember">Send request</button>
          </form>
        )}
      </div>
    </main>
  );
}

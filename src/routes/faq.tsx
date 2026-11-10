import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PillLink } from "@/components/site-chrome";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Hot Box Records" },
      { name: "description", content: "Rates, session lengths and what to bring to Hot Box Records." },
      { property: "og:title", content: "FAQ — Hot Box Records" },
      { property: "og:description", content: "Rates, session lengths and what to bring." },
    ],
  }),
  component: Faq,
});

const faqs = [
  ["How much does a session cost?", "Sessions start at $60/hour with a 2-hour minimum. Engineer included."],
  ["Do you mix and master?", "Yes — mixing & mastering is $150 per song, with two rounds of revisions."],
  ["What should I bring?", "Your beat (WAV stems if possible), lyrics, and a reference track."],
  ["Do you do voice-over?", "Yes. Commercial, podcast and narration V/O, delivered broadcast-ready."],
  ["How do I book?", "Use the booking form. A deposit secures your slot."],
];

function Faq() {
  return (
    <main>
      <PageIntro title="FAQ" />
      <section className="grain bg-secondary px-8 py-16 text-secondary-foreground">
        <div className="mx-auto max-w-5xl divide-y-2 divide-primary/40">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl font-bold">
                {q}<span className="text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl">{a}</p>
            </details>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-5xl"><PillLink to="/book">Book a session</PillLink></div>
      </section>
    </main>
  );
}

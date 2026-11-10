import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-chrome";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Rates — Ember Room Studios" },
      { name: "description", content: "Session, mixing and mastering rates at Ember Room Studios." },
      { property: "og:title", content: "Rates — Ember Room Studios" },
      { property: "og:description", content: "Session, mixing and mastering rates." },
    ],
  }),
  component: Rates,
});

const plans = [
  { name: "Hourly", price: "$85", unit: "/ hour", items: ["Engineer included", "4 hour minimum"] },
  { name: "Day lockout", price: "$650", unit: "/ 10 hours", items: ["Full studio access", "Engineer + assistant", "Rough mixes to go"], featured: true },
  { name: "Mix & master", price: "$300", unit: "/ song", items: ["Two revision rounds", "Stream + vinyl masters"] },
];

function Rates() {
  return (
    <main>
      <PageIntro eyebrow="Rates" title="Simple pricing. No surprises." />
      <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-sm border p-8 ${p.featured ? "border-primary bg-card shadow-ember" : "border-border"}`}>
            <p className="eyebrow">{p.name}</p>
            <p className="mt-6 font-display text-5xl font-bold">{p.price}<span className="ml-2 text-base font-light text-muted-foreground">{p.unit}</span></p>
            <ul className="mt-8 space-y-2 text-muted-foreground">{p.items.map((i) => <li key={i}>— {i}</li>)}</ul>
            <Link to="/contact" className="mt-8 inline-block text-sm text-primary hover:underline">Book this →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

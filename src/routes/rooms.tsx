import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-chrome";
import control from "@/assets/control-room.jpg";
import live from "@/assets/live-room.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms — Ember Room Studios" },
      { name: "description", content: "Our control room, live room and gear at Ember Room Studios." },
      { property: "og:title", content: "Rooms — Ember Room Studios" },
      { property: "og:description", content: "Our control room, live room and gear." },
    ],
  }),
  component: Rooms,
});

const rooms = [
  { img: control, name: "Room A — Control", spec: ["48-ch analog console", "Large-format mains + nearfields", "Outboard: 1176, LA-2A, Pultec"] },
  { img: live, name: "Live Room", spec: ["600 sq ft, 18 ft ceilings", "Vintage drum kits & amps", "Two isolation booths"] },
];

function Rooms() {
  return (
    <main>
      <PageIntro eyebrow="The spaces" title="Built for sound, tuned by ear." />
      <div className="mx-auto grid max-w-7xl gap-12 px-6">
        {rooms.map((r) => (
          <article key={r.name} className="grid items-center gap-8 md:grid-cols-2">
            <img src={r.img} alt={r.name} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
            <div>
              <h2 className="text-4xl font-bold">{r.name}</h2>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {r.spec.map((s) => <li key={s} className="border-b border-border pb-3">{s}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

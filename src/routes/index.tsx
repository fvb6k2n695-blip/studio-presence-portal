import { createFileRoute, Link } from "@tanstack/react-router";
import control from "@/assets/control-room.jpg";
import mic from "@/assets/microphone.jpg";
import live from "@/assets/live-room.jpg";
import faders from "@/assets/faders.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember Room Studios — Recording Studio in Brooklyn" },
      { name: "description", content: "Analog warmth, modern precision. Tracking, mixing and mastering in Brooklyn." },
      { property: "og:title", content: "Ember Room Studios" },
      { property: "og:description", content: "Analog warmth, modern precision. Tracking, mixing and mastering in Brooklyn." },
    ],
  }),
  component: Index,
});

const tiles = [
  { src: control, w: 1280, h: 1600, label: "Room A · Control", note: "48-channel analog console" },
  { text: true, title: "Tracking", body: "Live bands, vocals, strings — captured in a tuned wooden live room." },
  { src: mic, w: 1024, h: 1024, label: "Mic locker", note: "Tube & ribbon classics" },
  { src: faders, w: 1024, h: 1408, label: "Mixing", note: "Hybrid analog/digital" },
  { src: live, w: 1280, h: 896, label: "Live room", note: "600 sq ft, 18 ft ceilings" },
  { text: true, title: "Mastering", body: "Final polish for streaming, vinyl and broadcast — loud, but never crushed." },
] as const;

function Index() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 animate-rise">
        <p className="eyebrow">Recording · Mixing · Mastering</p>
        <h1 className="mt-6 text-6xl font-light leading-[0.95] md:text-8xl">
          Where records <br />
          <span className="font-extrabold text-primary">catch fire.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link to="/contact" className="rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5">
            Book a session
          </Link>
          <Link to="/rooms" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            Tour the rooms →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl columns-1 gap-5 px-6 sm:columns-2 lg:columns-3">
        {tiles.map((t, i) =>
          "text" in t ? (
            <div key={i} className="mb-5 break-inside-avoid rounded-sm border border-border bg-card p-8">
              <h2 className="text-3xl font-bold">{t.title}</h2>
              <p className="mt-3 text-muted-foreground">{t.body}</p>
            </div>
          ) : (
            <figure key={i} className="group relative mb-5 break-inside-avoid overflow-hidden rounded-sm">
              <img src={t.src} width={t.w} height={t.h} alt={t.label} loading={i === 0 ? "eager" : "lazy"} className="w-full transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <p className="font-display text-lg font-bold">{t.label}</p>
                <p className="text-sm text-muted-foreground">{t.note}</p>
              </figcaption>
            </figure>
          ),
        )}
      </section>
    </main>
  );
}

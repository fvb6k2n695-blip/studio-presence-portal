import { createFileRoute } from "@tanstack/react-router";
import { Burst, PillLink } from "@/components/site-chrome";
import logoAsset from "@/assets/hot-box-records-logo.png.asset.json";
import portraitAsset from "@/assets/producer-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Box Records — Recording Studio, Hallandale Beach" },
      { name: "description", content: "Industry sound, professional vocals, release-ready mixes. Recording studio in Hallandale Beach, FL." },
      { property: "og:title", content: "Hot Box Records" },
      { property: "og:description", content: "Industry sound, professional vocals, release-ready mixes in Hallandale Beach." },
    ],
  }),
  component: Index,
});

const links = [
  { label: "Stream all tracks on", items: ["Spotify", "Apple Music", "SoundCloud"] },
  { label: "Stay connected", items: ["Instagram", "Facebook", "Twitter", "YouTube", "TikTok"], cols: true },
];

function Index() {
  return (
    <main>
      {/* Hero — the real neon logo mark */}
      <section className="grain relative flex min-h-[640px] flex-col overflow-hidden bg-hero-ink md:min-h-[730px]">
        <img
          src={logoAsset.url}
          alt="Hot Box Records"
          width={1920}
          height={1096}
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-hero-ink to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative flex-1" />
        <div className="relative flex flex-wrap items-center justify-between gap-6 px-8 pb-10">
          <p className="font-display text-2xl font-black uppercase leading-tight text-primary">Hallandale<br />Beach</p>
          <p className="flex flex-wrap items-center gap-3 font-display font-bold uppercase text-primary">
            Industry sound <Burst className="h-5 w-5" /> Professional V/O <Burst className="h-5 w-5" /> Release-ready
          </p>
          <PillLink to="/faq">Learn More</PillLink>
        </div>
      </section>

      {/* Engineer — your photo */}
      <section className="grid md:grid-cols-2">
        <img
          src={portraitAsset.url}
          alt="Hot Box Records producer and engineer"
          loading="lazy"
          width={1536}
          height={1920}
          className="h-full min-h-[480px] w-full object-cover object-[center_22%]"
        />
        <div className="grain flex flex-col justify-between bg-card p-10 md:p-14">
          <div>
            <div className="flex items-center gap-5">
              <Burst className="h-20 w-20" />
              <h2 className="text-5xl text-primary">Kevin<br />Diaz</h2>
            </div>
            <p className="mt-10 text-xl font-bold text-primary">Main Engineer</p>
            <p className="mt-4 leading-relaxed text-primary/90">Recording, Mixing &amp; Mastering<br />Vocal Guide.<br />Producer.</p>
          </div>
          <div className="mt-10 self-end"><PillLink to="/book">See Works</PillLink></div>
        </div>
      </section>

      {/* Connect */}
      <section className="grid md:grid-cols-2">
        <div className="grain bg-secondary p-10 md:p-16 text-secondary-foreground">
          <div className="flex items-center gap-5">
            <Burst className="h-20 w-20" />
            <h2 className="text-4xl md:text-5xl">Connect<br /><span className="font-script normal-case font-normal">&amp;</span> Follow</h2>
          </div>
          <dl className="mt-14 space-y-12">
            {links.map((g) => (
              <div key={g.label} className="grid grid-cols-[8rem_3rem_1fr] items-center">
                <dt className="text-lg">{g.label}</dt>
                <span className="text-2xl text-card">⟶</span>
                <dd className={`font-bold ${g.cols ? "grid grid-cols-2 gap-x-6" : ""}`}>
                  {g.items.map((i) => <a key={i} href="#" className="block hover:underline">{i}</a>)}
                </dd>
              </div>
            ))}
            <div className="grid grid-cols-[8rem_3rem_1fr] items-center">
              <dt className="text-lg">Contact</dt>
              <span className="text-2xl text-card">⟶</span>
              <dd className="space-y-4">
                <p>Booking / Press Inquiries:<br /><a href="mailto:booking@hotboxrecords.com" className="hover:underline">booking@hotboxrecords.com</a></p>
                <p>Management:<br /><a href="mailto:mgmt@hotboxrecords.com" className="hover:underline">mgmt@hotboxrecords.com</a></p>
              </dd>
            </div>
          </dl>
        </div>
        <img
          src={portraitAsset.url}
          alt="Hot Box Records producer and engineer"
          loading="lazy"
          width={1536}
          height={1920}
          className="h-full min-h-[480px] w-full object-cover object-[center_12%]"
        />
      </section>
    </main>
  );
}

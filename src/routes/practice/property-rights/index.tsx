import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/practice/property-rights/")({
  head: () => ({
    meta: [
      { title: "Property Rights — Practic Legal" },
      { name: "description", content: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers." },
      { property: "og:title", content: "Property Rights — Practic Legal" },
      { property: "og:description", content: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertyRightsPage,
});

const topics = [
  { title: "Title & Ownership Disputes", summary: "Establishing and defending title, and clearing encumbrances on immovable property.", href: "/practice/property-rights/title-and-ownership-disputes" },
  { title: "Partition Suits", summary: "Division of ancestral and jointly held property, including succession and inheritance disputes.", href: "/practice/property-rights/partition-suits" },
  { title: "Tenancy & Eviction", summary: "Landlord and tenant disputes under rent control statutes and lease agreements.", href: "/practice/property-rights/tenancy-and-eviction" },
  { title: "Land Acquisition", summary: "Challenging acquisition proceedings and pursuing fair, enhanced compensation.", href: "/practice/property-rights/land-acquisition" }
];

function PropertyRightsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0.66 0.135 55 / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.05 60 / 0.4), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
          <p className="eyebrow text-primary">Practice Area</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-6xl">
            Property Rights
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Title, partition, tenancy, and acquisition matters for individuals, families, and developers.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow">What we handle</p>
        <h2 className="section-title mt-3 text-3xl md:text-4xl">Sub-Practices</h2>
        <span className="mt-4 block h-1 w-16 bg-primary" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.href}
              to={t.href}
              className="group rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide group-hover:text-primary">
                {t.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
              <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

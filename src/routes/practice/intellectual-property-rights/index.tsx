import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/practice/intellectual-property-rights/")({
  head: () => ({
    meta: [
      { title: " Intellectual Property Rights — Practic Legal" },
      {
        name: "description",
        content:
          "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums.",
      },
      { property: "og:title", content: "Property Rights — Practic Legal" },
      {
        property: "og:description",
        content:
          "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertyRightsPage,
});

const topics = [
  {
    title: "Intellectual Property",
    summary:
      "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums.",
    href: "/practice/intellectual-property-rights/intellectual-property",
  },
  {
    title: "Patent Registration",
    summary:
      "Whether you are an inventor, entrepreneur, startup, researcher or company, protecting your invention is essential to preserving your competitive advantage.",
    href: "/practice/intellectual-property-rights/patent-registration",
  },
  {
    title: "Trademark Registration",
    summary:
      "It distinguishes your goods or services from those of others and helps build brand recognition, customer trust and commercial goodwill.",
    href: "/practice/intellectual-property-rights/trademark-registration",
  },
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
            Intellectual Property Rights
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Intellectual Property (IP) is among the most valuable assets of an individual or
            business.
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

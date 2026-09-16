import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/practice/civil-litigation/")({
  head: () => ({
    meta: [
      { title: "Civil Litigation — Practic Legal" },
      { name: "description", content: "Representation before trial courts, tribunals, and appellate forums in civil and commercial disputes." },
      { property: "og:title", content: "Civil Litigation — Practic Legal" },
      { property: "og:description", content: "Representation before trial courts, tribunals, and appellate forums in civil and commercial disputes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationPage,
});

const topics = [
  { title: "Builder Buyer Disputes", summary: "Filing and defending civil suits for recovery of money, damages, and specific performance of contracts.", href: "/practice/civil-litigation/builder-buyer-disputes" },
  { title: "Insurance Claims", summary: "Urgent applications to preserve the status quo, restrain third parties, and protect assets pending trial.", href: "/practice/civil-litigation/insurance-claims" },
  { title: "Landlord Tenant", summary: "Appellate advocacy before district courts, High Courts, and the Supreme Court on questions of fact and law.", href: "/practice/civil-litigation/landlord-tenant" },
  { title: "MCD Tribunal Matters", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/mcd-tribunal-matters" },
  { title: "Probate of Will", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/probate-of-will" },
  { title: "Property Disputes", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/property-disputes" },
  { title: "Probate of Will", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/probate-of-will-2" },
  { title: "Probate of Will", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/probate-of-will-3" },
  { title: "Probate of Will", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/probate-of-will-4" },
  { title: "Probate of Will", summary: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.", href: "/practice/civil-litigation/probate-of-will-5" }
];

function CivilLitigationPage() {
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
            Civil Litigation
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Representation before trial courts, tribunals, and appellate forums in civil and commercial disputes.
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

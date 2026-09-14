import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/practice/motor-accident-claims/")({
  head: () => ({
    meta: [
      { title: "Motor Accident Claims — Practic Legal" },
      { name: "description", content: "Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts." },
      { property: "og:title", content: "Motor Accident Claims — Practic Legal" },
      { property: "og:description", content: "Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MotorAccidentClaimsPage,
});

const topics = [
  { title: "Compensation Claims", summary: "End-to-end handling of MACT claims for injury, disability, and loss of life.", href: "/practice/motor-accident-claims/compensation-claims" },
  { title: "Insurance Disputes", summary: "Contesting repudiation, policy exclusions, and delay in settlement by insurers.", href: "/practice/motor-accident-claims/insurance-disputes" },
  { title: "Hit & Run Cases", summary: "Solatium fund claims and investigation support where the offending vehicle is untraced.", href: "/practice/motor-accident-claims/hit-and-run-cases" },
  { title: "MACT Appeals", summary: "Appeals for enhancement of awards, and defence of appeals filed by insurers.", href: "/practice/motor-accident-claims/mact-appeals" }
];

function MotorAccidentClaimsPage() {
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
            Motor Accident Claims
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts.
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

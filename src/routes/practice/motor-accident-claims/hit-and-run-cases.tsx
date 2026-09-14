import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/practice/motor-accident-claims/hit-and-run-cases")({
  head: () => ({
    meta: [
      { title: "Hit & Run Cases — Motor Accident Claims | Practic Legal" },
      { name: "description", content: "Solatium fund claims and investigation support where the offending vehicle is untraced." },
      { property: "og:title", content: "Hit & Run Cases — Motor Accident Claims | Practic Legal" },
      { property: "og:description", content: "Solatium fund claims and investigation support where the offending vehicle is untraced." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MotorAccidentClaimsHitAndRunCasesPage,
});

function MotorAccidentClaimsHitAndRunCasesPage() {
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
          <p className="eyebrow text-primary">
            <Link to="/practice/motor-accident-claims">Motor Accident Claims</Link>
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-6xl">
            Hit & Run Cases
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Solatium fund claims and investigation support where the offending vehicle is untraced.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">How We Help</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-2">
            <p>
              Our hit & run cases practice combines rigorous preparation
              with practical strategy. We assess the merits early, set
              realistic expectations, and pursue the fastest reasonable route
              to resolution — whether that is settlement, mediation, or a
              contested hearing.
            </p>
            <p>
              You work with the same team from first consultation to final
              order, with clear timelines, transparent fees, and regular
              updates at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Scope of work</p>
          <h2 className="section-title mt-3 text-3xl md:text-4xl">
            What This Covers
          </h2>
          <span className="mt-4 block h-1 w-16 bg-primary" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-6 text-sm leading-relaxed">
              <span className="mr-3 font-display font-bold text-primary">§</span>
              Solatium and compensation scheme claims
            </div>
            <div className="rounded-sm border border-border bg-card p-6 text-sm leading-relaxed">
              <span className="mr-3 font-display font-bold text-primary">§</span>
              Coordination with investigating officers
            </div>
            <div className="rounded-sm border border-border bg-card p-6 text-sm leading-relaxed">
              <span className="mr-3 font-display font-bold text-primary">§</span>
              FIR, charge-sheet, and record retrieval
            </div>
            <div className="rounded-sm border border-border bg-card p-6 text-sm leading-relaxed">
              <span className="mr-3 font-display font-bold text-primary">§</span>
              Representation before the claims settlement authority
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-sm border border-border bg-card p-10 lg:p-16">
          <p className="eyebrow">Next step</p>
          <h2 className="section-title mt-3 text-3xl md:text-4xl">
            Discuss Your Matter
          </h2>
          <span className="mt-4 block h-1 w-16 bg-primary" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Share the facts of your case and a member of our team will respond
            within one business day with an honest view of your options.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center rounded-sm bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
            <Link
              to="/practice/motor-accident-claims"
              className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              Back to Motor Accident
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Practic Legal" },
      {
        name: "description",
        content:
          "Learn about Practic Legal — our story, values, leadership, and three decades of full-service legal counsel.",
      },
      { property: "og:title", content: "About Us — Practic Legal" },
      {
        property: "og:description",
        content:
          "Our story, values, and leadership across three decades of full-service legal counsel.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Integrity",
    body: "Ethics guide every mandate. We speak plainly, act consistently, and put the client's long-term interest ahead of the transaction.",
  },
  {
    title: "Craft",
    body: "Every brief, opinion, and closing binder reflects a standard of care refined over three decades of complex advisory.",
  },
  {
    title: "Partnership",
    body: "We embed with client teams, understand the commercial stakes, and stay accountable long after the deal closes.",
  },
  {
    title: "Independence",
    body: "Objective counsel, free of conflicts, delivered with the courage to give clients the advice they need — not the advice they want to hear.",
  },
];

const milestones = [
  {
    year: "1993",
    event: "Firm founded in New Delhi as a single-window commercial legal practice.",
  },
  {
    year: "2001",
    event: "Restructuring & insolvency practice established, quickly recognized nationally.",
  },
  { year: "2009", event: "Mumbai office opens; capital markets and banking practices scale up." },
  {
    year: "2016",
    event: "ESG and technology advisory desks launched in response to client demand.",
  },
  { year: "2021", event: "Singapore desk formalized to serve cross-border mandates across Asia." },
  {
    year: "2024",
    event: "Over 200 professionals across three offices and global alliance network.",
  },
];

const leadership = [
  { name: "Eleanor Hart", role: "Chairman & Senior Partner" },
  { name: "Arjun Mehra", role: "Founder & Managing Partner" },
  { name: "Priya Anand", role: "Founder & Managing Partner" },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero />
      <Story />
      <Values />
      <Timeline />
      <Leadership />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.66 0.135 55 / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.05 60 / 0.4), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="eyebrow text-primary">About the Firm</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-6xl">
          Counsel Built on <br />
          <span className="text-primary">Three Decades</span> of Trust
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-foreground)]/75">
          Practic Legal was founded in 1993 with a single conviction — that clients deserve a law
          firm that thinks like a business partner, not just a legal vendor. That belief still
          shapes how we work today.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="section-title mt-3 text-3xl md:text-4xl">
            A Firm Built Around the Client
          </h2>
          <span className="mt-4 block h-1 w-16 bg-primary" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              We started with a small team of lawyers who believed that commercial legal advice
              should be practical, timely, and shaped by the realities of running a business. Three
              decades on, that founding idea has grown into a full-service practice spanning
              corporate, finance, disputes, and regulatory advisory.
            </p>
            <p>
              Our clients include listed companies, banks, funds, and governments. What connects
              them is a shared expectation — that their counsel will be responsive, technically
              excellent, and commercially aware.
            </p>
            <p>
              We measure ourselves not by the volume of mandates, but by the length of the
              relationships behind them.
            </p>
          </div>
        </div>
        <div className="aspect-[4/5] w-full rounded-sm bg-gradient-to-br from-muted to-secondary shadow-lg" />
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="eyebrow">What we stand for</p>
          <h2 className="section-title mt-3 text-4xl md:text-5xl">Our Values</h2>
          <span className="mx-auto mt-4 block h-1 w-16 bg-primary" />
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-sm bg-primary/10 font-display text-2xl font-bold text-primary">
                ◆
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-[var(--ink)] py-24 text-[var(--ink-foreground)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow">The Journey</p>
            <h2 className="section-title mt-3 text-4xl md:text-5xl">Milestones</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
              A snapshot of the moments that shaped the firm — from a small Delhi office to a
              full-service practice across three cities.
            </p>
          </div>
          <ol className="relative space-y-8 border-l border-white/15 pl-8 lg:col-span-2">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[37px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-[var(--ink)]" />
                <p className="font-display text-2xl font-bold text-primary">{m.year}</p>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-white/80">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Leadership</p>
          <h2 className="section-title mt-3 text-4xl md:text-5xl">The People Behind the Firm</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" />
        </div>
        <Link
          to="/"
          hash="team"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
        >
          Meet the Full Team →
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((m) => (
          <div key={m.name} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gradient-to-br from-muted to-border" />
            <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide group-hover:text-primary">
              {m.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Work with us</p>
        <h2 className="section-title mt-3 text-3xl md:text-4xl">
          Have a matter you'd like to discuss?
        </h2>
        <span className="mx-auto mt-4 block h-1 w-16 bg-primary" />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Tell us about your situation and a member of our team will respond within one business
          day.
        </p>
        <Link
          to="/"
          hash="contact"
          className="mt-8 inline-flex items-center rounded-sm bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}

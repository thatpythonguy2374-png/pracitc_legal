import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/practice/criminal-matters/")({
  head: () => ({
    meta: [
      { title: "Criminal Matters — Practic Legal" },
      {
        name: "description",
        content:
          "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence.",
      },
      { property: "og:title", content: "Criminal Matters — Practic Legal" },
      {
        property: "og:description",
        content:
          "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonialMattersPage,
});

const topics = [
  {
    title: "Bail & Anticipatory",
    summary:
      "Criminal defence, bail and anticipatory bail applications, and representation in criminal proceedings before trial courts, appellate courts, and other competent authorities.",
    href: "/practice/criminal-matters/bail-and-anticipatory",
  },

  {
    title: "Crimes Against Women",
    summary:
      "Legal assistance in crimes against women, including domestic violence, harassment, cruelty, dowry-related offences, and representation before trial and appellate courts.",
    href: "/practice/criminal-matters/crimes-against-women",
  },
  {
    title: "Cyber Crimes",
    summary:
      "Legal assistance and representation in cyber crime matters, including online offences, cyber fraud, hacking, identity theft, and other technology-related crimes before competent authorities and courts.",
    href: "/practice/criminal-matters/cyber-crimes-legal-representation",
  },
  {
    title: "Criminal Appeals",
    summary:
      "A judgment of a criminal court does not entail end of legal proceedings rather the law provides various appellate and revisional remedies to challenge convictions.",
    href: "/practice/criminal-matters/criminal-appeals",
  },
  {
    title: "Economic Offences",
    summary:
      "Economic offences involve financial misconduct, fraud, misappropriation of funds and violations of laws governing commercial and financial transactions.",
    href: "/practice/criminal-matters/economic-offences",
  },
  {
    title: "Offences Aganist The Human Body",
    summary:
      "Offences against the human body are among the most serious offences under criminal law, as they directly affect an individual’s life, physical integrity, personal liberty and dignity. ",
    href: "/practice/criminal-matters/offences-against-the-human-body",
  },
  {
    title: "Offences Aganist Property",
    summary:
      "Property-related offences can have significant financial and legal consequences for individuals, businesses and institutions.",
    href: "/practice/criminal-matters/offences-aganist-property",
  },
  {
    title: "White Collar Crimes",
    summary:
      "White Collar Crimes are non-violent offences typically involving financial fraud, breach of trust, forgery, corporate misconduct and economic deception.",
    href: "/practice/criminal-matters/white-collar-crimes",
  },
];

function MatrimonialMattersPage() {
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
            Criminal Matters
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            Sensitive, discreet counsel on divorce, maintenance, custody, and protection from
            domestic violence.
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

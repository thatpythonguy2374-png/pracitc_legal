import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute(
  "/practice/matrimonial-matters/restitution-of-conjugal-rights",
)({
  head: () => ({
    meta: [
      { title: "Restitution of Conjugal Rights — Matrimonial Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Custody, guardianship, and visitation matters guided always by the welfare of the child.",
      },
      {
        property: "og:title",
        content: "Restitution of Conjugal Rights — Matrimonial Matters | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Custody, guardianship, and visitation matters guided always by the welfare of the child.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonialMattersRestitutionofConjugalRights,
});

function MatrimonialMattersRestitutionofConjugalRights() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative min-h-screen flex items-center overflow-hidden text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-90 md:scale-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Gradient Overlay (LEFT → RIGHT like your image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#1e293b]/80 to-[#7c2d12]/70" />

        {/* Glow Effects */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(255,140,0,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,80,0,0.25), transparent 55%)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">
              Matrimonial Matters
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Restitution Of
              <br />
              Conjugal Rights
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Restitution of Conjugal Rights is a legal remedy through which a spouse can seek the
              court’s assistance to restore cohabitation when the other spouse has withdrawn from
              the marriage without reasonable cause.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-secondary/40">
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">What is</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Restitution of Conjugal Rights?
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Restitution of conjugal rights is a legal remedy in matrimonial law aimed at
                  enforcing the marital obligation of cohabitation when one spouse withdraws from
                  the matrimonial society without just cause. Grounded in the principle that
                  marriage enjoins mutual rights and duties to live together as husband and wife, an
                  aggrieved spouse can petition the court for a decree ordering the defaulting party
                  to return and render conjugal duties
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-foreground text-[22px]">
                  When can a petition be filed?
                </h3>
                <p className="text-[19px]">
                  A petition for Restitution of Conjugal Rights may generally be filed where:
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "One spouse has withdrawn from the society of the other",
                    "Such withdrawal is without reasonable or lawful cause",
                    "There is a genuine intention on the part of the petitioner to resume matrimonial life",
                    "Each case is determined on its own facts and the court carefully examines the circumstances leading to the separation",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">Protection</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Matters We Handle </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Physical Custody</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The child resides primarily with one parent, while the other parent may be granted
                  visitation or access rights.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Joint Custody</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Both parents share the responsibility of raising the child, with custody being
                  exercised according to a schedule determined by the court or mutually agreed
                  between the parties.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Legal Custody</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The parent or parents are given the authority to make important decisions
                  concerning the child’s education, healthcare, upbringing and welfare.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Visitation Rights</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Even where one parent is granted custody, the other parent may be entitled to
                  reasonable visitation or interaction with the child, unless restricted by the
                  court in exceptional circumstances.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Guardianship Matters</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Apart from custody disputes between parents, we also advise and represent clients
                  in guardianship proceedings relating to minors where appointment or declaration of
                  a legal guardian becomes necessary under applicable law.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Mediation and Amicable Resolution
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Where appropriate, we encourage parents to resolve custody and parenting issues
                  through negotiation or mediation. Amicable arrangements often reduce conflict and
                  help create a stable environment for the child. However, where settlement is not
                  possible, we provide diligent preparation and effective representation before the
                  Family Court to protect our clients’ rights and the child’s welfare.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Factors considered by Courts</h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  While deciding custody matters, courts generally consider:
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• The welfare and best interests of the child</li>
                  <li>• Age and needs of the child</li>
                  <li>• Emotional and psychological well-being</li>
                  <li>• Educational requirements</li>
                  <li>• Financial stability of the parents</li>
                  <li>• Character and conduct of the parties</li>
                  <li>• Existing relationship between the child and each parent</li>
                  <li>• Any other relevant circumstances affecting the child’s welfare</li>
                  <li>
                    • Wishes of the child, where appropriate considering the child’s age and
                    maturity
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center rounded-sm bg-primary p-8 text-center text-primary-foreground">
                <p className="text-lg italic">
                  "Protecting your investment through strategic legal advocacy."
                </p>

                <Link
                  to="/"
                  hash="contact"
                  className="mt-8 inline-flex items-center justify-center rounded-sm border border-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  Consult an Expert
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-secondary/40">
        <section className=" mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Comprehensive Assistance</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Services</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  We provide comprehensive legal assistance in matters relating to:
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Review & Legal Advisory",
                    desc: "Interim custody applications, Documentation, Visitation and access rights.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation before RERA Authorities, Child custody petitions, Child relocation disputes, Modification of custody arrangements, Enforcement of custody and visitation orders, Guardianship petitions",
                  },
                  {
                    no: "03",
                    title: "Negotiation & Settlement",
                    desc: "Permanent custody proceedings, Appeals against custody orders",
                  },
                ].map((service) => (
                  <div key={service.no} className="flex gap-6">
                    <span className="text-3xl font-bold text-primary">{service.no}</span>

                    <div>
                      <h3 className="font-display text-xl font-bold">{service.title}</h3>

                      <p className="mt-2 leading-relaxed text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <DisclaimerSection />
      <SiteFooter />
    </div>
  );
}

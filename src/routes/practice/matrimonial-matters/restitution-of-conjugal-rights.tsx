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
          "Restitution of conjugal rights is a legal remedy that orders a deserting spouse to return to the matrimonial home and resume cohabitation",
      },
      {
        property: "og:title",
        content: "Restitution of Conjugal Rights — Matrimonial Matters | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Restitution of conjugal rights is a legal remedy that orders a deserting spouse to return to the matrimonial home and resume cohabitation",
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
      <div className="bg-secondary/40">
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="section-title mt-3 text-3xl md:text-4xl">Grounds of Defence</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A petition for Restitution of Conjugal Rights is not automatically granted. The
                  respondent has the right to contest the proceedings and demonstrate that there was
                  a lawful or reasonable justification for living separately. Depending upon the
                  facts of the case, common defences may include:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Cruelty or abusive conduct",
                    "Domestic violence",
                    "Adultery",
                    "Desertion by the petitioner",
                    "Failure to discharge marital obligations",
                    "Any other legally recognized ground",
                    "Conduct making cohabitation unsafe or unreasonable",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <h3 className="font-display text-xl font-bold pt-5 text-foreground text-[22px]">
                  Consequences of a Decree
                </h3>
                <p className="text-[19px]">
                  If the court grants a decree for Restitution of Conjugal Rights and the parties
                  fail to resume cohabitation within the period prescribed under the applicable
                  matrimonial law, such non-compliance may have legal consequences, including
                  providing a statutory ground for seeking divorce, subject to the applicable legal
                  provisions. Every case depends upon its individual facts and the governing
                  personal law.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-foreground text-[22px]">
                  Our Approach
                </h3>
                <p className="text-[19px]">
                  Matrimonial disputes involve not only legal rights but also deeply personal
                  relationships. Before initiating or defending legal proceedings, we carefully
                  evaluate the factual background, applicable law and the long-term implications for
                  our clients. Where reconciliation is possible, we encourage amicable resolution
                  through dialogue or mediation. Where litigation becomes necessary, we provide
                  diligent preparation and effective courtroom advocacy to protect our clients’
                  interests.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

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
                    title: "Petitions & Legal Advisory",
                    desc: "Filing petitions for Restitution of Conjugal Rights, defence against restitution proceedings, legal notices, and pre-litigation advice.",
                  },
                  {
                    no: "02",
                    title: "Court Representation & Proceedings",
                    desc: "Representation before Family Courts, assistance with evidence and trial proceedings, and handling connected matrimonial disputes.",
                  },
                  {
                    no: "03",
                    title: "Settlement & Appeals",
                    desc: "Settlement negotiations and mediation, along with appeals against Family Court orders.",
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

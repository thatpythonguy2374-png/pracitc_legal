import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/matrimonial-matters/domestic-violence")({
  head: () => ({
    meta: [
      { title: "Domestic Violence — Matrimonial Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Protection, residence, and monetary relief under the Protection of Women from Domestic Violence Act.",
      },
      { property: "og:title", content: "Domestic Violence — Matrimonial Matters | Practic Legal" },
      {
        property: "og:description",
        content:
          "Protection, residence, and monetary relief under the Protection of Women from Domestic Violence Act.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonialMattersDomesticViolencePage,
});

function MatrimonialMattersDomesticViolencePage() {
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
              Domestic
              <br />
              Violence
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Domestic violence extends beyond physical abuse. It can include emotional, verbal,
              economic, sexual and psychological abuse that adversely affects the safety, dignity
              and well-being of an individual
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
                <p className="eyebrow">Overview</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Domestic Violence</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Domestic violence extends beyond physical abuse. It can include emotional, verbal,
                  economic, sexual and psychological abuse that adversely affects the safety,
                  dignity and well-being of an individual. The law provides remedies to protect
                  aggrieved persons from domestic violence while ensuring that respondents are
                  afforded a fair opportunity to present their case.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-black">
                  Understanding Domestic Violence
                </h3>
                <p className="text-[19px]">
                  The Protection of Women from Domestic Violence Act, 2005 provides legal remedies
                  to women who have experienced domestic violence within a domestic relationship.
                  Domestic violence may include
                </p>

                <h3 className="font-display text-xl font-bold pt-5 text-black">
                  Domestic violence may include:
                </h3>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Sexual abuse",
                    "Economic abuse",
                    "Physical abuse",
                    "Psychological abuse",
                    "Emotional and verbal abuse",
                    "Harassment relating to financial demands or property",
                    "Deprivation of financial resources or access to the shared household",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className="text-[19px] pt-5">
                  Each case is decided on its own facts and circumstances, based on the evidence
                  presented before the court.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="section-title mt-3 text-3xl md:text-4xl"> Legal Assistance </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for Complainants</h3>
                <p className="text-muted-foreground pt-5">
                  An aggrieved person may seek may seek legal assistance in the form of
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Enforcement of court orders</li>
                  <li>• Child custody-related relief</li>
                  <li>• Applications for interim relief</li>
                  <li>• Protection and residence orders</li>
                  <li>• Monetary relief and compensation claims</li>
                  <li>• Representation before the Magistrate’s Court</li>
                  <li>• Drafting and filing Domestic Violence applications</li>
                  <li>• Legal advice regarding rights under the Domestic Violence Act</li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for Respondents</h3>
                <p className="text-muted-foreground pt-5">
                  Domestic Violence proceedings may involve disputed questions of fact requiring
                  careful legal examination. Respondents are entitled to defend the allegations and
                  present their evidence before the court. A respondent may seek legal assistance in
                  the form of
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Appeals against adverse orders</li>
                  <li>• Contesting interim applications</li>
                  <li>• Challenging interim and final orders</li>
                  <li>• Filing written statements and replies</li>
                  <li>• Negotiated settlements wherever appropriate</li>
                  <li>• Representation during evidence and hearings</li>
                  <li>• Defence against Domestic Violence complaints</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-secondary/40 py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left */}
              <div className="lg:col-span-4">
                <p className="eyebrow">Consumer Protection</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Related Matrimonial Proceedings
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </div>

              {/* Right */}
              <Stagger className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
                {/* Paragraph */}
                <StaggerItem>
                  <p className="text-[19px]">
                    Domestic Violence proceedings often run alongside other matrimonial disputes,
                    such as:
                  </p>
                </StaggerItem>

                {/* List */}
                <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8 pb-6">
                  {[
                    "Divorce proceeding",
                    "Maintenance claims",
                    "Child custody disputes",
                    "Proceedings relating to stridhan",
                    "Settlement and mediation proceedings",
                    "Protection of property and residence rights",
                    "Criminal complaints arising out of matrimonial disputes",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>

                {/* Bottom paragraph */}
                <StaggerItem>
                  <p>
                    Consumer proceedings often provide an effective mechanism for seeking
                    compensation and other reliefs.
                  </p>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="bg-secondary/40">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Sensitive & Strategic Legal Support</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Domestic violence matters involve sensitive personal and family issues that
                  require careful, confidential, and considered legal handling. At Practic Legal, we
                  recognize that every case presents unique facts and circumstances. Our approach
                  combines client-focused legal advice, thorough assessment of facts and evidence,
                  and strategic litigation or negotiation to develop practical solutions tailored to
                  each client's objectives, while providing strong advocacy before the competent
                  courts.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Confidential Advice & Case Assessment",
                    desc: "Providing confidential, client-focused legal advice and carefully examining the facts, available evidence, and individual circumstances to identify appropriate legal options and remedies.",
                  },
                  {
                    no: "02",
                    title: "Strategic Litigation & Negotiation",
                    desc: "Developing tailored legal strategies and pursuing appropriate litigation, negotiation, or settlement options based on the circumstances of each matter and the client's objectives.",
                  },
                  {
                    no: "03",
                    title: "Courtroom Advocacy & Practical Solutions",
                    desc: "Providing effective representation before competent courts and pursuing practical legal remedies that safeguard clients' rights and address their specific legal and personal concerns.",
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

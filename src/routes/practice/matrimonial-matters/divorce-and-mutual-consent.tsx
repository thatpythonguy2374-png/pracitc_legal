import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/matrimonial-matters/divorce-and-mutual-consent")({
  head: () => ({
    meta: [
      { title: "Divorce & Mutual Consent — Matrimonial Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Contested and mutual-consent divorce petitions handled with discretion and a focus on settlement.",
      },
      {
        property: "og:title",
        content: "Divorce & Mutual Consent — Matrimonial Matters | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Contested and mutual-consent divorce petitions handled with discretion and a focus on settlement.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonialMattersDivorceAndMutualConsentPage,
});

function MatrimonialMattersDivorceAndMutualConsentPage() {
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
              Divorce &
              <br />
              Mutual Consent
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              The breakdown of a marriage is often one of the most emotionally and legally
              challenging experiences an individual can face.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Divorce & Mutual Consent
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  The breakdown of a marriage is often one of the most emotionally and legally
                  challenging experiences an individual can face. Whether both spouses have mutually
                  decided to part ways or the relationship has become irretrievably strained,
                  understanding the legal process is essential to protecting your rights and
                  interests.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-black">
                  Divorce under Indian Law
                </h3>
                <p className="text-[19px]">
                  The procedure for divorce depends upon the personal law applicable to the parties
                  and the facts of each case. Broadly, divorce proceedings fall into two categories:
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {["Mutual Consent Divorce", "Contested Divorce"].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className="text-[19px] pt-5">
                  Choosing the appropriate legal course depends upon whether both the spouses agree
                  to dissolve the marriage and settle their rights with mutual consent or whether
                  the disputes require adjudication by the Family Court.
                </p>
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
                <p className="eyebrow">Why Timely</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Legal Action Matters</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Municipal proceedings are often time-sensitive. Delays in responding to notices or
                  challenging adverse orders may result in demolition, sealing, penalties, or other
                  enforcement measures. Obtaining legal advice at an early stage can help:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Preserve property rights",
                    "Prevent coercive municipal action",
                    "Identify procedural irregularities",
                    "Improve prospects of obtaining relief",
                    "Minimize financial and legal risks",
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
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Matters We Handle</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Demolition Orders</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Municipal authorities may issue demolition orders in respect of alleged
                  unauthorized constructions or violations of building regulations. We assist
                  clients in challenging such orders and protecting their rights before the
                  Tribunal.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Sealing Orders</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Commercial establishments and properties may be sealed for alleged violations of
                  municipal laws. We provide legal representation for seeking relief against sealing
                  actions and pursuing de-sealing of premises.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Unauthorized Construction Proceedings
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Disputes often arise concerning allegations of unauthorized construction,
                  deviations from sanctioned plans and building regulation violations. We advise and
                  represent clients throughout the adjudicatory process
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Show Cause Notices</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Property owners frequently receive notices requiring them to explain alleged
                  violations. Early legal intervention can significantly impact the outcome of
                  proceedings.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Property and Building Regulation Disputes
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We assist clients in matters concerning:
                </p>

                <Stagger className="mt-6 space-y-3 text-muted-foreground">
                  {[
                    "Building bye-law compliance",
                    "Property usage disputes",
                    "Municipal sanctions and permissions",
                    "Breach of lease or tenancy agreements",
                    "Structural modification issues",
                    "Municipal enforcement actions",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <div className="flex flex-col justify-center rounded-sm bg-primary p-8 text-center text-primary-foreground ">
                <p className="text-lg italic">
                  "Defending your financial interests against unjust claim denials and delays"
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
                  We provide end-to-end legal assistance in matters before the MCS Tribunal. From
                  reviewing society records and issuing legal notices to representing clients in
                  disputes before cooperative authorities and tribunals, our team focuses on
                  protecting your rights and securing effective legal remedies.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Review & Legal Advisory",
                    desc: "Review of municipal notices and orders, Legal opinions on building and property compliance issues, and legal risks before initiating proceedings.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation during hearings, Drafting and filing appeals before the MCD Tribunal, Applications for interim protection and stay orders, Challenges to demolition and sealing actions, and contractual disputes.",
                  },
                  {
                    no: "03",
                    title: "Negotiation & Settlement",
                    desc: "Strategic settlement discussions and mediation aimed at resolving disputes efficiently while protecting your legal interests.",
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

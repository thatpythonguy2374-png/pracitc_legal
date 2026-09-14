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
              Domestic violence extends beyond physical abuse.
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
                </p>

                <h3 className="font-display text-xl font-bold pt-5 text-black">
                  Domestic violence may include:
                </h3>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Physical abuse",
                    "Emotional and verbal abuse",
                    "Psychological abuse",
                    "Sexual abuse",
                    "Economic abuse",
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
            <p className="eyebrow">Protection</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Legal Remedies Available</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Enforcement of Builder Obligations
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We assist clients in enforcing contractual and statutory obligations, seeking
                  injunctions where necessary, and ensuring compliance with commitments made by
                  builders and developers.
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Enforcement of Builder-Buyer Agreement obligations</li>
                  <li>• Injunctions against unlawful construction or transfers</li>
                  <li>• Execution of orders passed by RERA and Consumer Commissions</li>
                  <li>• Legal notices and settlement negotiations</li>
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

      <section className="bg-secondary/40 py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left */}
              <div className="lg:col-span-4">
                <p className="eyebrow">Consumer Protection</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Consumer Complaints</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </div>

              {/* Right */}
              <Stagger className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
                {/* Paragraph */}
                <StaggerItem>
                  <p className="text-[19px]">
                    Builders who fail to fulfill their obligations may be held liable under consumer
                    protection laws. Homebuyers can approach the appropriate Consumer Commission for
                    relief in cases involving:
                  </p>
                </StaggerItem>

                {/* List */}
                <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8 pb-6">
                  {[
                    "Deficiency in service",
                    "Unfair trade practices",
                    "Delay in possession",
                    "Failure to deliver promised facilities",
                    "Construction and quality-related defects",
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
        <section className=" mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Comprehensive Assistance</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Services</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  We provide end-to-end legal assistance to homebuyers facing disputes with builders
                  and developers. From reviewing agreements and issuing legal notices to
                  representing clients before RERA Authorities, Consumer Commissions, and Civil
                  Courts, our team focuses on protecting your investment and securing timely legal
                  remedies.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Review & Legal Advisory",
                    desc: "Detailed examination of Builder-Buyer Agreements, project documentation, and legal risks before initiating proceedings.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation before RERA Authorities, Consumer Commissions, and Civil Courts for possession, refund, compensation, and contractual disputes.",
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

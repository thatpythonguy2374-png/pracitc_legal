import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/ni-act/")({
  head: () => ({
    meta: [
      { title: "Negotiable Instruments Act — Negotiable Instruments Act | Practic Legal" },
      {
        name: "description",
        content:
          "A cheque is one of the most widely accepted modes of payment in commercial and personal transactions.",
      },
      {
        property: "og:title",
        content: "Negotiable Instruments Act — Negotiable Instruments Act | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "A cheque is one of the most widely accepted modes of payment in commercial and personal transactions.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
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
            <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">NI Act</p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Negotiable
              <br />
              Instruments Act
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A cheque is one of the most widely accepted modes of payment in commercial and
              personal transactions.
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
                  Negotiable Instruments Act
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A cheque is one of the most widely accepted modes of payment in commercial and
                  personal transactions. When a cheque is dishonoured due to insufficient funds or
                  other legally recognized reasons, the payee may seek legal remedies under the
                  Negotiable Instruments Act, 1881. Likewise, a person accused in a cheque dishonour
                  case is entitled to defend the proceedings and rebut the statutory presumptions
                  available under the law.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-foreground">
                  Cheque dishonour case under Section 138 of NI Act
                </h3>
                <p className="text-[19px]">
                  Section 138 of The Negotiable Instruments Act provides a legal remedy where a
                  cheque issued towards the discharge of a legally enforceable debt or liability is
                  returned unpaid by the bank due to insufficiency of funds or other reasons
                  recognized under law. Although proceedings under Section 138 are quasi- criminal
                  in nature, their primary objective is to ensure the credibility of cheque
                  transactions and provide an effective legal remedy to the payee. Cheque dishonour
                  litigation frequently may arise from
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Supply of goods",
                    "Partnership disputes",
                    "Professional services",
                    "Contractual obligations",
                    "Loan and financial arrangements",
                    "Business and commercial transactions",
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
                <h2 className="section-title mt-3 text-3xl md:text-4xl">Nature of Proceedings</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Proceedings under Section 138 are quasi-criminal proceedings and are generally
                  tried through a summary procedure to facilitate expeditious disposal. However,
                  depending upon the complexity of the dispute, courts frequently convert such
                  matters into regular trials where detailed evidence and cross- examination becomes
                  necessary. Whereas upon conviction, the court may impose an imprisonment for a
                  term extending up to two years or fine extending up to twice the amount of the
                  cheque or both.
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
                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Presumptions under The Negotiable Instruments Act in favor of complainant
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  One of the distinguishing features of proceedings under The Negotiable Instruments
                  Act is the statutory presumption in favour of the complainant. Once the execution
                  of the cheque is established, the act mandates raising of presumptions (which are
                  rebuttable but onus lies upon accused to do so) inter alia that the cheque was
                  issued towards a legally enforceable debt or liability. This presumption
                  significantly strengthens the complainant’s case at the initial stage.
                </p>
                <p className="text-[19px] pt-5">
                  However, the accused has the legal right to rebut these presumptions. Unlike the
                  prosecution, the accused is not required to prove the defence beyond reasonable
                  doubt. The presumptions may be rebutted by establishing a probable defence on the
                  preponderance of probabilities, either through documentary evidence,
                  cross-examination of complainant or other admissible facts brought before the
                  court.
                </p>
                <p className="text-[19px] pt-5">
                  An effective defence strategy often depends upon a careful examination of the
                  facts, documentation, and surrounding circumstances of each case.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-secondary/40">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Comprehensive Legal Assistance</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Cheque dishonour proceedings under Section 138 of the Negotiable Instruments Act
                  require careful legal assessment, timely action, and a well-planned litigation
                  strategy. At Practic Legal, we provide comprehensive legal assistance to both
                  complainants and accused persons, from statutory demand notices and complaint
                  proceedings to trial, settlement, appeals, and execution of compensation orders.
                  Our approach focuses on protecting our clients' legal interests through effective
                  representation and practical legal solutions at every stage.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Legal Notices & Complaint Proceedings",
                    desc: "Assistance to complainants in drafting and issuing statutory demand notices, filing complaints under Section 138, and securing effective representation before competent courts. We also advise accused persons immediately upon receipt of legal demand notices and prepare appropriate replies.",
                  },
                  {
                    no: "02",
                    title: "Trial Representation & Legal Defence",
                    desc: "Developing effective legal strategies for both complainants and accused persons, including raising appropriate defences, rebutting statutory presumptions, presenting evidence, and providing representation throughout trial proceedings.",
                  },
                  {
                    no: "03",
                    title: "Appeals, Settlements & Enforcement",
                    desc: "Representation in appellate proceedings, execution of compensation orders, settlement negotiations, and compounding of offences where appropriate, with a focus on achieving practical outcomes and protecting clients' legal interests.",
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

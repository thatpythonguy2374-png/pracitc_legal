import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/criminal-matters/criminal-appeals")({
  head: () => ({
    meta: [
      { title: "Criminal Appeals — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          " A judgment of a criminal court does not entail end of legal proceedings rather the law provides various appellate and revisional remedies to challenge convictions,",
      },
      { property: "og:title", content: "Criminal Appeals — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          " A judgment of a criminal court does not entail end of legal proceedings rather the law provides various appellate and revisional remedies to challenge convictions.",
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
            <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">
              Civil Litigation
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Criminal Appeals
              <br />& Revisions
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A judgment of a criminal court does not entail end of legal proceedings rather the law
              provides various appellate and revisional remedies to challenge convictions,
              acquittals, sentences or other judicial orders where legal or procedural errors have
              occurred.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Criminal Appeals</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A criminal appeal enables a higher court to examine the correctness of a judgment,
                  order, conviction, acquittal or sentence passed by a subordinate criminal court.
                  Depending upon the facts of the case and the applicable law, appeals may arise
                  from
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Acquittal of an accused",
                    "Conviction by a Trial Court",
                    "Orders relating to sentence",
                    "Compensation and fine orders",
                    "Other appealable criminal orders",
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
                <p className="eyebrow">Overview</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Criminal Revision</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A Criminal Revision is a supervisory remedy available to correct jurisdictional
                  errors, procedural irregularities or legal infirmities where an appeal may not be
                  available. Revision proceedings generally focus on the legality, propriety and
                  correctness of judicial orders rather than a complete re-appreciation of evidence.
                  A criminal revision may lie in following incidents
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Jurisdictional errors",
                    "Procedural irregularities",
                    "Other revisable criminal orders",
                    "Improper exercise of judicial discretion",
                    "Legality and propriety of criminal court orders",
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
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Strategic Appellate Advocacy</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Appellate litigation demands a detailed examination of trial court records,
                  careful appreciation of evidence, and identification of legal or procedural errors
                  that may have affected the outcome of a case. At Practic Legal, we develop
                  well-researched appellate strategies focused on protecting our clients' legal
                  rights through effective written submissions, oral advocacy, and meticulous
                  preparation at every stage of the appellate process.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Judgment Review & Error Identification",
                    desc: "Thorough examination of judgments, trial records, evidence, and court proceedings to identify substantial legal, factual, or procedural errors that may form grounds for appeal.",
                  },
                  {
                    no: "02",
                    title: "Research & Appellate Strategy",
                    desc: "Developing a well-researched appellate strategy through detailed legal analysis, examination of relevant precedents, and preparation of appropriate grounds of appeal.",
                  },
                  {
                    no: "03",
                    title: "Courtroom Advocacy & Rights Protection",
                    desc: "Preparing persuasive written submissions and presenting effective oral arguments before appellate courts while safeguarding clients' legal rights throughout the proceedings.",
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

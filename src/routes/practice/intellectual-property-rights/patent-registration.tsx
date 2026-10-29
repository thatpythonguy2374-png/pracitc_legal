import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/intellectual-property-rights/patent-registration")({
  head: () => ({
    meta: [
      { title: "Patent Registration — Intellectual Property Rights | Practic Legal" },
      {
        name: "description",
        content:
          "Innovation is a valuable business asset. Whether you are an inventor, entrepreneur, startup, researcher or company, protecting your invention is essential to preserving your competitive advantage.",
      },
      {
        property: "og:title",
        content: "Patent Registration — Intellectual Property Rights | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Innovation is a valuable business asset. Whether you are an inventor, entrepreneur, startup, researcher or company, protecting your invention is essential to preserving your competitive advantage.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertyRightsPartitionSuitsPage,
});

function PropertyRightsPartitionSuitsPage() {
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
              Intellectual Property Rights
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Patent
              <br />
              Registration
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Innovation is a valuable business asset. Whether you are an inventor, entrepreneur,
              startup, researcher or company, protecting your invention is essential to preserving
              your competitive advantage.
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
                <p className="eyebrow">What is a</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Patent?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A patent is a statutory right granted under the Patents Act, 1970, conferring upon
                  the patentee the exclusive right to prevent others from exploiting the patented
                  invention without consent for a specified period. An invention may relate to:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Products",
                    "Processes",
                    "Machines",
                    "Manufacturing methods",
                    "Mechanical innovations",
                    "Chemical inventions",
                    "Pharmaceutical inventions",
                    "Technological innovations",
                    "Software-related inventions (where patentable under applicable law)",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
                <h3 className="font-display text-xl font-bold pt-5 text-foreground">
                  To qualify for patent protection, an invention must generally be:
                </h3>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Novel",
                    "Involve an inventive step (non-obviousness)",
                    "Capable of industrial application",
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
                <p className="eyebrow">Why</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl"> Register a Patent?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A patent is a statutory right granted under the Patents Act, 1970, conferring upon
                  the patentee the exclusive right to prevent others from exploiting the patented
                  invention without consent for a specified period. An invention may relate to:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Exclusive rights over the invention",
                    " Licensing and royalty opportunities",
                    " Competitive advantage in the marketplace",
                    " Strong legal remedies against infringement",
                    "Enhanced business value and investor confidence",
                    " Creation of valuable intellectual property assets",
                    "Protection against unauthorized commercial exploitation",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className="text-[19px]">
                  Protecting an invention at an early stage helps preserve its commercial value and
                  prevents unauthorized use.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-foreground">
                  Patent Opposition and Disputes
                </h3>
                <p className="text-[19px]">
                  Patent applications and granted patents may be challenged under the provisions of
                  the Patents Act by way of:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Pre-grant opposition",
                    "Post-grant opposition",
                    "Patent validity disputes",
                    " Patent infringement advisory",
                    "Assignment and ownership disputes",
                    "Licensing-related issues",
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
            <h2 className="section-title mt-3 text-3xl md:text-4xl">
              Patent Registration Process{" "}
            </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">1. Patentability Assessment</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Conducting a preliminary evaluation to determine whether the invention appears
                  capable of patent protection under applicable law
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">2. Prior Art Search</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A patent search is undertaken to identify existing inventions and assess the
                  novelty of the proposed invention
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  3. Drafting of Patent Specification
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A carefully drafted patent specification is critical to obtaining meaningful
                  protection. Assistance may be required in preparing and filing provisional and
                  complete specifications in accordance with statutory requirements
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">4. Filing of Patent Application</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Preparing and filing patent applications before the Indian Patent Office and
                  ensure compliance with all procedural requirements
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">5. Examination Proceedings</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Following examination by the Patent Office, objections may be raised. Assistance
                  may be required in preparing responses to examination reports and represent
                  applicants during hearings where required
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">6. Grant of Patent</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Upon satisfaction of the statutory requirements, the Patent Office grants the
                  patent, conferring exclusive rights upon the patentee
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="bg-secondary/40">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Left Content */}
              <div>
                <p className="eyebrow">Strategic Legal Support</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Every intellectual property dispute requires a careful balance between legal
                  rights and commercial objectives. Our approach focuses on protecting intellectual
                  assets, addressing infringement risks, and developing effective legal strategies
                  that safeguard innovation, creativity, and commercial interests.
                </p>
              </div>

              {/* Right Content */}
              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Patent Assessment & Application Filing",
                    desc: "Patentability assessment, prior art searches, drafting of provisional and complete specifications, and filing patent applications to secure appropriate protection for inventions.",
                  },
                  {
                    no: "02",
                    title: "Patent Prosecution & Dispute Resolution",
                    desc: "Responses to examination reports, representation before the Indian Patent Office, and assistance with patent opposition proceedings to safeguard intellectual property rights.",
                  },
                  {
                    no: "03",
                    title: "Patent Portfolio Management & Strategic Advisory",
                    desc: "Assistance with patent assignments, licensing, portfolio management, and strategic advisory on patent protection to maximise the commercial value of intellectual property.",
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/civil-litigation/rwa-election-matters")({
  head: () => ({
    meta: [
      { title: "RWA Election Matters — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:title", content: "RWA Election Matters — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationRwaElectionMatters,
});

function CivilLitigationRwaElectionMatters() {
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
            <p className="text-sm uppercase tracking-widest text-orange-400 mb-4 text-justify">
              Civil Litigation
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              RWA Election
              <br />
              Matters
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify text-justify">
              A legal action filed to challenge electoral irregularities, resolve leadership
              disputes, or enforce compliance with Resident Welfare Association bylaws.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">RWA Elections?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px] text-justify">
                  Resident Welfare Associations (RWAs) play a crucial role in the administration and
                  management of residential communities. However, disputes frequently arise
                  regarding elections, membership rights, voting procedures, management decisions
                  and compliance with governing rules and regulations.
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
                <p className="eyebrow">Reasons for</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">RWA Election Disputes?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Free and fair elections are essential for the effective functioning of any
                  Resident Welfare Association. Election-related disputes can adversely affect the
                  administration of the community and often require prompt legal intervention, where
                  we assist clients in matters involving:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8 text-justify">
                  {[
                    "Challenges to RWA election results",
                    "Disputes regarding voter eligibility",
                    "Membership-related disputes affecting voting rights",
                    "Allegations of election irregularities",
                    "Violations of election rules and bylaws",
                    "Appointment and functioning of election officers",
                    "	Conduct of Annual General Meetings (AGMs) and Special General Meetings (SGMs)",
                    "Challenges to unauthorized office bearer",
                    "Membership and Voting Rights",
                    "Disputes frequently arise regarding the inclusion or exclusion of members from electoral rolls and decision-making processes.",
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
                <h3 className="font-display text-xl font-bold">
                  Mismanagement and abuse of authority
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal proceedings initiated to challenge arbitrary decision-making, power misuse,
                  or unauthorized extension of terms by sitting RWA office bearers during the
                  election process.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Non-compliance with association bylaws
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A suit filed to enforce strict adherence to registered RWA bylaws, governing
                  election timelines, voter eligibility, and prescribed electoral procedures
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Financial transparency and accountability issues
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A civil action seeking audit, full disclosure, and accountability regarding the
                  usage of association funds, membership dues, and election campaign expenditures.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Unauthorized resolutions and decisions
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal challenges directed at invalidating illegal resolutions, unconstitutional
                  executive decisions, or emergency clauses passed without general body approval or
                  proper quorum.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Disputes among office bearers and committee members
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Litigation aimed at resolving internal leadership deadlocks, factional conflicts,
                  and contesting illegal dismissals or appointments within the governing body.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Enforcement of association rules and regulations
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A court petition seeking mandatory injunctions to uphold house rules, protect
                  resident voting rights, and ensure transparent, uncorrupted RWA electoral
                  operations.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Why timely legal intervention matters
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Election disputes and governance issues can significantly impact the functioning
                  of a residential community. Early legal advice can help:
                </p>

                <Stagger className="mt-6 space-y-3 text-muted-foreground">
                  {[
                    " Protect voting and membership rights",
                    "Ensure compliance with applicable laws and bylaws",
                    "Prevent unlawful actions by office bearers",
                    "Preserve transparency and accountability",
                    "Facilitate fair and lawful administration of the association",
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

                <p className="mt-8 leading-relaxed text-muted-foreground text-justify">
                  We provide end-to-end legal assistance in Public Nuisance Litigation involving
                  activities that cause obstruction, inconvenience, or harm to the public. From
                  legal consultation and notices to representing clients before relevant
                  authorities, Consumer Commissions, and Courts, our team focuses on protecting
                  public rights and securing effective legal remedies.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Legal Review & Advisory",
                    desc: "Legal notices and advisory services, along with review of RWA bylaws, governing documents, resolutions, and related records.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation before competent authorities and courts, including election challenges, governance disputes, membership issues, injunctions, and interim relief applications.",
                  },
                  {
                    no: "03",
                    title: "Legal Notices & Resolution",
                    desc: "Representation before competent authorities and courts, including election challenges, governance disputes, membership issues, injunctions, and interim relief applications.",
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

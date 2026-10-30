import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/criminal-matters/white-collar-crimes")({
  head: () => ({
    meta: [
      { title: "White Collar Crimes — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "White Collar Crimes are non-violent offences typically involving financial fraud, breach of trust, forgery, corporate misconduct and economic deception.",
      },
      {
        property: "og:title",
        content: "White Collar Crim — Civil Litigation | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "White Collar Crimes are non-violent offences typically involving financial fraud, breach of trust, forgery, corporate misconduct and economic deception.",
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
              White Collar
              <br />
              Crimes
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              White Collar Crimes are non-violent offences typically involving financial fraud,
              breach of trust, forgery, corporate misconduct and economic deception.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">White Collar Crimes</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  White Collar Crimes are non-violent offences typically involving financial fraud,
                  breach of trust, forgery, corporate misconduct and economic deception. These
                  matters often arise from commercial transactions, business relationships, banking
                  operations, corporate governance, and financial dealings. Given their complexity,
                  such cases frequently involve extensive documentary evidence, digital records,
                  forensic audits and prolonged investigations. White collar crimes can be
                  enumerated as
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Corporate Fraud",
                    "Criminal Conspiracy",
                    "Banking and Loan Fraud",
                    "Criminal Breach of Trust",
                    "Financial Misappropriation",
                    "Forgery and Forged Documents",
                    "Cheating and Dishonest Inducement",
                    "Partnership and Commercial Disputes",
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
            <h2 className="section-title mt-3 text-3xl md:text-4xl"> Legal Assistance </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for Complainants</h3>
                <p className="text-muted-foreground pt-5">
                  Financial crimes often result in substantial monetary loss, breach of commercial
                  confidence, and damage to business reputation. Prompt legal action is essential to
                  preserve evidence and initiate appropriate criminal proceedings. A complainant may
                  seek legal assistance in the form of
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Drafting criminal complaints</li>
                  <li>• Assistance in registration of FIRs</li>
                  <li>• Representation during investigation</li>
                  <li>• Legal consultation and case assessment</li>
                  <li>• Coordination with investigating agencies</li>
                  <li>• Criminal appeals and revision proceedings</li>
                  <li>• Trial representation before criminal courts</li>
                  <li>• Opposing bail applications where appropriate</li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for the Accused</h3>
                <p className="text-muted-foreground pt-5">
                  White Collar Crime investigations often involve businesses, company directors,
                  partners, professionals, and employees. Criminal allegations may arise from
                  commercial disputes, contractual disagreements, accounting practices or business
                  transactions. An accused may seek legal assistance in the form of
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Anticipatory and Regular Bail</li>
                  <li>• Appeals and Revision Petitions</li>
                  <li>• Defence during trial proceedings</li>
                  <li>• Analysis of financial and documentary evidence</li>
                  <li>• Legal consultation before and during investigation</li>
                  <li>• Quashing of criminal proceedings where legally maintainable</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-secondary/40">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Strategic Criminal Defence</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  White-collar crime litigation requires a detailed understanding of criminal law,
                  financial transactions, and complex commercial dealings. At Practic Legal, we
                  adopt a meticulous and strategic approach involving thorough examination of
                  financial records, careful analysis of documentary and electronic evidence, and
                  protection of our clients' legal and commercial interests. Our focus remains on
                  effective courtroom advocacy and practical, business-oriented legal solutions
                  tailored to the complexities of each case.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Financial & Documentary Analysis",
                    desc: "Thorough examination of financial records, commercial transactions, contractual documents, and electronic evidence to assess the facts and identify relevant legal issues.",
                  },
                  {
                    no: "02",
                    title: "Strategic Legal Defence",
                    desc: "Developing tailored legal strategies based on applicable criminal laws, evidentiary requirements, and procedural safeguards to protect clients' legal and commercial interests.",
                  },
                  {
                    no: "03",
                    title: "Courtroom Advocacy & Business-Oriented Solutions",
                    desc: "Providing effective courtroom representation and practical, commercially focused legal advice to address complex white-collar crime allegations and pursue appropriate legal remedies.",
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

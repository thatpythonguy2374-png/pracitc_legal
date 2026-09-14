import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import InsuranceClaimsSection from "@/components/InsuranceClaimsSection";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/civil-litigation/insurance-claims")({
  head: () => ({
    meta: [
      { title: "Insurance Claims — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Urgent applications to preserve the status quo, restrain third parties, and protect assets pending trial.",
      },
      { property: "og:title", content: "Insurance Claims — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          "Urgent applications to preserve the status quo, restrain third parties, and protect assets pending trial.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationInsuranceClaimsPage,
});

function CivilLitigationInsuranceClaimsPage() {
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
              Insurance
              <br />
              Claims
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Protecting policyholders against wrongful claim denials, delays, and unfair settlement
              practices.
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
                  Common Insurance Disputes
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Insurance companies may deny or partially settle claims on various grounds. We
                  assist beneficiaries and policyholders in matters relating to:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Wrongful rejection of claims",
                    "Unreasonable delays in settlement",
                    "Partial payment of admissible claims",
                    "Misinterpretation of policy terms",
                    "Allegations of policy breaches",
                    "Disputes regarding policy exclusions",
                    "Deficiency in service by insurance companies",
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
      <InsuranceClaimsSection />
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">Protection</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Legal Remedies Available</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Recovery Of Insurance Claim Amounts
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ensuring timely recovery of rightful insurance claim amounts through strategic
                  legal action and enforcement of policy terms.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Interest On Delayed Payments</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Pursuing interest and compensation for delays in claim settlements, holding
                  insurers accountable for prolonged timelines.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Compensation For Deficiency In Service
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Taking legal action against insurers for claim delays, wrongful denials, and
                  unfair practices affecting policyholders.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Appropriate relief before Consumer Commissions and Courts
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Seeking appropriate relief before Consumer Commissions and Courts through
                  strategic representation in claim disputes and recovery matters.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Enforcement of policy obligations
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ensuring strict enforcement of policy obligations and insurer liabilities to
                  secure rightful claims and protect policyholder interests.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Compensation For Financial Loss And Mental Harassment
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We assist clients in recovering damages arising from financial setbacks and mental
                  distress caused by unjust claim handling. Our services include:
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Enforcement of policy obligations and insurer liabilities</li>
                  <li>• Filing complaints before Consumer Forums and Regulatory Authorities</li>
                  <li>• Representation in disputes involving claim repudiation or underpayment</li>
                  <li>• Assistance in negotiations and settlements with insurance companies</li>
                </ul>
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
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Comprehensive Assistance</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Services</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  We provide comprehensive legal support to policyholders and beneficiaries in
                  disputes with insurance companies. From policy review and claim assessment to
                  issuing legal notices and representing clients before Consumer Commissions and
                  Courts, we focus on enforcing insurer obligations, securing rightful settlements,
                  and protecting your financial interests from unjust claim denials and delays.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Review & Legal Advisory",
                    desc: "Detailed examination of Insurace Agreements, project documentation, and legal risks before initiating proceedings.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation before Consumer Commissions, Consumer Commissions, and Civil Courts for Claims, Refund, Compensation, and Advisary services.",
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

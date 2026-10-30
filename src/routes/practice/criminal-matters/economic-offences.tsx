import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/criminal-matters/economic-offences")({
  head: () => ({
    meta: [
      { title: "Economic Offences — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Economic offences involve financial misconduct, fraud, misappropriation of funds and violations of laws governing commercial and financial transactions.",
      },
      {
        property: "og:title",
        content: "Economic Offences — Civil Litigation | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Economic offences involve financial misconduct, fraud, misappropriation of funds and violations of laws governing commercial and financial transactions.",
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
              Economic
              <br />
              Offences
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Economic offences involve financial misconduct, fraud, misappropriation of funds and
              violations of laws governing commercial and financial transactions.
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
                  Offences Aganist Property
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Economic offences involve financial misconduct, fraud, misappropriation of funds
                  and violations of laws governing commercial and financial transactions. Such
                  offences often have far-reaching consequences for individuals, businesses,
                  financial institutions and public authorities. These cases typically involve
                  complex investigations, voluminous financial records, electronic evidence and
                  regulatory scrutiny. Most commonly committed Economic offences can be enumerated
                  as
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    " Financial Fraud: Allegations involving fraudulent financial transactions, dishonest inducement and unlawful financial gain",
                    "Forgery and Financial Documentation: Cases involving forged financial instruments, commercial documents, accounting records and electronic financial records",
                    "Misappropriation of Funds: Cases concerning alleged diversion, unauthorized use or wrongful retention of funds belonging to individuals, businesses or institutions",
                    "Corporate and Commercial Fraud: Representation in criminal proceedings arising from corporate misconduct, fraudulent business transactions and commercial deception",
                    "Public Money and Government Fund Misappropriation: Representation in matters involving allegations concerning public funds, grants, subsidies and financial irregularities",
                    "Criminal Breach of Trust and Cheating: Economic offences involving allegations of breach of fiduciary duties, dishonest misappropriation and deception in commercial transactions",
                    "Banking and Loan Related Offences: Cases involving allegations relating to loan fraud, forged financial documents, misuse of banking facilities and other banking-related offences",
                    "Investment and Business Fraud: Representation in disputes arising from investment schemes, business ventures, partnership transactions and commercial arrangements involving criminal allegations",
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
                <p className="eyebrow">Strategic Financial Crime Defence</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Economic offences require an in-depth understanding of criminal law, financial
                  transactions, and documentary evidence. At Practic Legal, we adopt a meticulous
                  and strategic approach involving detailed analysis of financial records,
                  examination of documentary and electronic evidence, and protection of our clients'
                  legal and commercial interests. From investigation and criminal proceedings to
                  trial representation and appellate remedies, we provide practical, commercially
                  focused legal advice tailored to the complexities of each case.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Financial Investigation & Legal Advisory",
                    desc: "Detailed assessment of financial transactions, documentary and electronic evidence, and potential criminal liability, along with legal consultation, case evaluation, strategic advice, and drafting of criminal complaints.",
                  },
                  {
                    no: "02",
                    title: "Investigation & Criminal Litigation",
                    desc: "Assistance with FIR registration, representation during investigations, coordination with investigating agencies, opposing bail applications where appropriate, and effective representation before criminal courts during trial proceedings.",
                  },
                  {
                    no: "03",
                    title: "Bail, Appeals & Strategic Remedies",
                    desc: "Representation in appropriate bail proceedings, criminal appeals, revision petitions, and applications for quashing criminal proceedings where legally maintainable, with a focus on protecting clients' legal and commercial interests.",
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/criminal-matters/offences-against-the-human-body")({
  head: () => ({
    meta: [
      { title: "Offences Aganist The Human Body — Criminal Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Offences against the human body are among the most serious offences under criminal law, as they directly affect an individual’s life, physical integrity, personal liberty and dignity. ",
      },
      {
        property: "og:title",
        content: "Offences Aganist The Human Body — Criminal Matters | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Offences against the human body are among the most serious offences under criminal law, as they directly affect an individual’s life, physical integrity, personal liberty and dignity. ",
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
              Criminal Matters
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Offences Aganist
              <br />
              The Human Body
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Offences against the human body are among the most serious offences under criminal
              law, as they directly affect an individual’s life, physical integrity, personal
              liberty and dignity.
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
                  Offences Aganist The Human Body
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Offences against the human body are among the most serious offences under criminal
                  law, as they directly affect an individual’s life, physical integrity, personal
                  liberty and dignity. Such cases often involve complex questions of fact, medical
                  evidence, eyewitness testimony, forensic material and procedural safeguards. Some
                  of such offences can be enumerated as
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
                <h3 className="font-display text-xl font-bold"> For Victims</h3>
                <p className="text-muted-foreground pt-5">
                  Victims of violent offences have a legal right to seek protection, justice and
                  fair prosecution of offenders. We assist complainants in:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Drafting criminal complaints</li>
                  <li>• Assistance in registration of FIRs</li>
                  <li>• Legal consultation and case assessment</li>
                  <li>• Criminal appeals and revision proceedings</li>
                  <li>• Representation during police investigation</li>
                  <li>• Conducting prosecution before criminal courts</li>
                  <li>• Opposing bail applications where appropriate </li>
                  <li>• Protection of victims’ legal rights throughout the proceedings</li>
                </ul>
                <p className="text-muted-foreground pt-5">
                  Our objective is to ensure that victims receive effective legal assistance while
                  pursuing justice through the criminal justice system.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">For Accused</h3>
                <p className="text-muted-foreground pt-5">
                  Criminal allegations relating to offences against the human body often carry
                  severe legal consequences, including arrest, prolonged trial and significant
                  penalties upon conviction. Every accused person is entitled to a fair
                  investigation, due process and a fair trial. We provide strategic legal
                  representation by:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Representation during trial</li>
                  <li>• Appeals and Revision Petitions</li>
                  <li>• Preparing an effective defence strategy</li>
                  <li>• Cross-examination of prosecution witnesses</li>
                  <li>• Quashing proceedings where legally maintainable</li>
                  <li>• Advising clients before and during investigation</li>
                  <li>• Filing Anticipatory and Regular Bail applications</li>
                </ul>
                <p className="text-muted-foreground pt-5">
                  Our defence strategy is based upon a careful examination of the evidence, medical
                  records, witness testimony, and procedural compliance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">Protection</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Matters We Handle </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Attempt to Murder</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal representation in cases involving allegations of intentional acts aimed at
                  causing death or serious injury.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Culpable Homicide</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Defence and representation in cases involving allegations of causing death with
                  the requisite knowledge or intention.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Assault & Hurt</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal assistance in cases involving assault, voluntarily causing hurt, and
                  grievous hurt resulting in serious injuries.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Kidnapping & Abduction</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Representation in cases involving kidnapping, abduction, unlawful custody, and
                  related offences affecting personal liberty.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Criminal Intimidation</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal representation in cases involving threats intended to cause alarm or compel
                  a person to act against their lawful interests.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Medical Examination Reports</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Analysis and presentation of medical examination reports relevant to injuries,
                  treatment, and alleged offences.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Post-Mortem Reports</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Examination and interpretation of post-mortem findings to assist in establishing
                  the cause and circumstances of death.\
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Distribution or Misuse of Private Digital Content
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Assistance in cases involving unauthorized sharing, publication, circulation, or
                  misuse of private photographs, videos, messages, or other digital content.
                </p>
              </div>

              <div className="flex flex-col justify-center rounded-sm bg-primary p-8 text-center text-primary-foreground">
                <p className="text-lg italic">
                  “Protecting your rights, dignity, and safety through dedicated legal advocacy.”
                </p>

                <Link
                  to="/contact"
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
                <p className="eyebrow">Strategic Criminal Defence</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Every criminal case involving offences against the human body demands meticulous
                  preparation, careful examination of evidence, and a strategic legal approach. At
                  Practic Legal, we focus on analysing the facts, evaluating medical and forensic
                  material, protecting our clients' legal and constitutional rights, and developing
                  effective courtroom strategies. Our approach combines practical legal advice,
                  thorough case assessment, and focused advocacy tailored to the circumstances of
                  each matter.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Factual, Medical & Forensic Analysis",
                    desc: "Conducting a thorough analysis of the facts and available evidence, including medical reports, forensic findings, witness statements, and other relevant case materials.",
                  },
                  {
                    no: "02",
                    title: "Rights Protection & Strategic Advocacy",
                    desc: "Safeguarding applicable legal and constitutional rights while developing a well-prepared litigation strategy and presenting effective arguments before the competent courts.",
                  },
                  {
                    no: "03",
                    title: "Case Assessment & Legal Consultation",
                    desc: "Providing practical, solution-oriented legal advice through detailed case assessment, evaluation of legal options, and guidance tailored to the specific circumstances of each case.",
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

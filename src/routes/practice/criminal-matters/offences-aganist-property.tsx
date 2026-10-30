import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/criminal-matters/offences-aganist-property")({
  head: () => ({
    meta: [
      { title: "Offences Aganist Property — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Property-related offences can have significant financial and legal consequences for individuals, businesses and institutions.",
      },
      {
        property: "og:title",
        content: "Offences Aganist Property — Civil Litigation | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Property-related offences can have significant financial and legal consequences for individuals, businesses and institutions.",
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
              Offences Aganist
              <br />
              Property
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Property-related offences can have significant financial and legal consequences for
              individuals, businesses and institutions.
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
                  Property-related offences can have significant financial and legal consequences
                  for individuals, businesses and institutions. These offences often involve
                  allegations of dishonest misappropriation, theft, trespass, cheating or unlawful
                  interference with another person’s property or possessions. A concise list of
                  property related offences
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Theft: Cases involving dishonest removal of movable property without the owner’s consent",
                    "Robbery and Dacoity: Offences involving theft or extortion accompanied by violence, threat or use of force",
                    "Criminal Misappropriation: Cases relating to unlawful retention or conversion of movable property belonging to another",
                    "Mischief: Offences involving destruction of property, damage to assets or interference with another person’s property rights",
                    "Receiving Stolen Property: Representation in cases involving allegations of receiving or retaining property suspected to be stolen",
                    "Extortion: Cases involving allegations of obtaining property, money, or valuable security through threats, intimidation or coercion",
                    "Cheating and Dishonest Inducement: Criminal proceedings arising from allegations of deception leading to wrongful loss or unlawful gain",
                    "Criminal Trespass: Unauthorized entry into property with intent to commit an offence, intimidate, insult or annoy the person in lawful possession",
                    "House Trespass and House Breaking: Offences involving unlawful entry into residential or commercial premises under circumstances recognized by criminal law",
                    "Criminal Breach of Trust: Disputes arising where property entrusted to a person is alleged to have been dishonestly misappropriated or converted for personal use",
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

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Conducting criminal trials</li>
                  <li>• Drafting criminal complaints</li>
                  <li>• Assistance in registration of FIRs</li>
                  <li>• Representation during investigation</li>
                  <li>• Legal consultation and case assessment</li>
                  <li>• Criminal appeals and revision proceedings</li>
                  <li>• Opposing bail applications where appropriate</li>
                  <li>• Collection and presentation of documentary evidence</li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for the Accused</h3>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Conducting trial defence</li>
                  <li>• Securing anticipatory and regular bail</li>
                  <li>• Evaluating the allegations and evidence</li>
                  <li>• Filing appeals and revisions where required</li>
                  <li>• Legal consultation before and during investigation</li>
                  <li>• Challenging illegal or unwarranted criminal proceedings</li>
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
                <p className="eyebrow">Strategic Legal Guidance</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Property offences often involve extensive documentary evidence, financial records,
                  contractual documents, and complex questions of ownership or possession. At
                  Practic Legal, we adopt a meticulous and strategic approach to evaluating the
                  facts, examining relevant evidence, identifying procedural safeguards, and
                  developing comprehensive litigation strategies to protect our clients' legal and
                  commercial interests.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Factual & Evidentiary Analysis",
                    desc: "Conducting a thorough factual assessment and examining documentary and electronic evidence, financial records, and contractual documents to establish the relevant circumstances of each case.",
                  },
                  {
                    no: "02",
                    title: "Procedural Safeguards & Legal Strategy",
                    desc: "Identifying applicable legal provisions, procedural safeguards, and potential risks while developing a comprehensive litigation strategy tailored to the facts and circumstances of the matter.",
                  },
                  {
                    no: "03",
                    title: "Strategic Representation & Protection",
                    desc: "Providing focused legal representation and pursuing appropriate remedies to protect clients' property rights, financial interests, and broader legal and commercial objectives.",
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

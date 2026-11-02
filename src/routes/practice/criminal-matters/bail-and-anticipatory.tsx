import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/criminal-matters/bail-and-anticipatory")({
  head: () => ({
    meta: [
      { title: "Bail & Anticipatory — Criminal Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Criminal defence, bail and anticipatory bail applications, and representation in criminal proceedings before trial courts, appellate courts, and other competent authorities.",
      },
      { property: "og:title", content: "Bail & Anticipatory — Criminal Matters | Practic Legal" },
      {
        property: "og:description",
        content:
          "Criminal defence, bail and anticipatory bail applications, and representation in criminal proceedings before trial courts, appellate courts, and other competent authorities.",
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
              Bail &
              <br />
              Anticipatory
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              An arrest or an apprehension of arrest can have serious personal, professional and
              legal consequences. The law provides remedies in form of bail and anticipatory bail to
              safeguard an individual’s liberty while ensuring fair administration of justice.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Bail & Anticipatory</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  An arrest or an apprehension of arrest can have serious personal, professional and
                  legal consequences. The law provides remedies in form of bail and anticipatory
                  bail to safeguard an individual’s liberty while ensuring fair administration of
                  justice.
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
                <h3 className="font-display text-xl font-bold"> Representation for the Accused</h3>
                <p className="text-muted-foreground pt-5">
                  We assist accused persons at every stage by providing:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Immediate legal consultation</li>
                  <li>• Case evaluation before arrest </li>
                  <li>• Preparation and filing of bail applications</li>
                  <li>• Representation during bail hearings </li>
                  <li>• Legal assistance during investigation </li>
                  <li>• Advice regarding compliance with bail conditions </li>
                  <li>• Representation before appellate courts where required </li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for Complainants</h3>
                <p className="text-muted-foreground pt-5">
                  We also represent complainants in bail proceedings by:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Opposing anticipatory and regular bail applications </li>
                  <li>• Presenting objections before the court</li>
                  <li>• Protecting the interests of victims</li>
                  <li>• Seeking appropriate conditions on grant of bail</li>
                  <li>• Filing applications for cancellation of bail where legally justified</li>
                </ul>
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
                <h3 className="font-display text-xl font-bold">Bail</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Bail is a legal mechanism through which a person accused of an offence is released
                  from custody upon such conditions as may be imposed by the court. The object of
                  bail is to balance personal liberty of the accused with the interests of justice
                  and the need to ensure accused’s presence during investigation and trial. Every
                  bail application is decided on its own facts, taking into account nature of the
                  offence, evidence available, stage of investigation and other relevant
                  circumstances.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Anticipatory Bail</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Anticipatory Bail is a legal remedy available to a person who has reasonable
                  apprehension to believe that they he may be arrested for a non-bailable offence.
                  If granted, anticipatory bail protects the person from being taken into custody,
                  subject to such conditions as the court may impose. Timely legal advice is
                  crucial, as an application for anticipatory bail should ordinarily be made before
                  arrest.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Regular Bail</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A person who has already been arrested may apply for Regular Bail before the
                  competent court. The court considers various factors while deciding the
                  application.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Interim Bail</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In appropriate circumstances, courts may grant Interim Bail as a temporary measure
                  until the final disposal of bail application or for a limited period based on the
                  facts and circumstances of the case.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Cancellation of Bail</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Where circumstances warrant, a victim or complainant may prefer an application
                  seeking cancellation of bail granted to an accused person. Courts may consider
                  cancellation where there is misuse of liberty, violation of bail conditions,
                  intimidation of witnesses or other legally recognized grounds.
                </p>
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  We provide comprehensive legal assistance in matters relating to:
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Review & Legal Advisory",
                    desc: "Interim custody applications, Documentation, Visitation and access rights.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation before RERA Authorities, Child custody petitions, Child relocation disputes, Modification of custody arrangements, Enforcement of custody and visitation orders, Guardianship petitions",
                  },
                  {
                    no: "03",
                    title: "Negotiation & Settlement",
                    desc: "Permanent custody proceedings, Appeals against custody orders",
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

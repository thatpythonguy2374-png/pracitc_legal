import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/criminal-matters/crimes-against-women")({
  head: () => ({
    meta: [
      { title: "Crimes Aganist Women — Criminal Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Legal assistance in crimes against women, including domestic violence, harassment, cruelty, dowry-related offences, and representation before trial and appellate courts.",
      },
      { property: "og:title", content: "Crimes Aganist Women — Criminal Matters | Practic Legal" },
      {
        property: "og:description",
        content:
          "Legal assistance in crimes against women, including domestic violence, harassment, cruelty, dowry-related offences, and representation before trial and appellate courts.",
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
              Crimes
              <br />
              Aganist Women
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Legal assistance in crimes against women, including domestic violence, harassment,
              cruelty, dowry-related offences, and representation before trial and appellate courts.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Crimes Aganist Women</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Offences against women often involve issues affecting personal safety, dignity,
                  privacy and individual rights. Such matters require not only sound legal
                  representation but also a sensitive and confidential approach that recognizes the
                  emotional and personal circumstances surrounding each case.
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
                  We assist women in seeking appropriate legal remedies in matters involving
                  offences affecting their safety, dignity and personal liberty. Our services
                  include:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Legal consultation and case assessment</li>
                  <li>• Assistance in registration of FIRs and criminal complaints </li>
                  <li>• Criminal appeals and revision proceedings</li>
                  <li>• Opposing bail applications where appropriate </li>
                  <li>• Representation during investigation </li>
                  <li>• Representation before criminal courts</li>
                  <li>• Coordination with other connected legal proceedings, where required</li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">For Accused</h3>
                <p className="text-muted-foreground pt-5">
                  Criminal allegations involving offences against women can have significant legal
                  and personal consequences. Every accused person is entitled to a fair
                  investigation and legal representation in accordance with the principles of
                  natural justice. We provide legal assistance in:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Pre-arrest legal consultation </li>
                  <li>• Appeals and revision proceedings</li>
                  <li>• Defence before criminal courts</li>
                  <li>• Representation during investigation</li>
                  <li>• Anticipatory and Regular Bail</li>
                  <li>• Quashing of criminal proceedings, where legally maintainable</li>
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
                <h3 className="font-display text-xl font-bold">Sexual Harassment</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal assistance in matters involving unwelcome sexual conduct, harassment at the
                  workplace or in public spaces, and related criminal proceedings.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Stalking</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Representation in cases involving persistent following, unwanted contact,
                  monitoring, or other conduct that causes fear, distress, or invasion of privacy.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Voyeurism</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal assistance in cases involving unauthorized viewing, recording, capturing, or
                  sharing of private acts or images without consent.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Criminal Intimidation</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Assistance in cases involving threats, coercion, blackmail, or intimidation
                  intended to cause fear or compel a person to act against their will.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Outraging the Modesty of a Woman</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal representation in cases involving assault, criminal force, or other acts
                  intended to violate or insult the dignity and modesty of a woman.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Sexual Assault and Related Offences
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Defence and representation in matters involving sexual assault, molestation, and
                  other offences of a sexual nature, including proceedings before competent courts.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Online Harassment and Cyber Abuse
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Legal assistance in cases involving cyberstalking, abusive communications, online
                  threats, impersonation, and other forms of digital harassment.
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

      <DisclaimerSection />
      <SiteFooter />
    </div>
  );
}

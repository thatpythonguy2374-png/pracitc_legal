import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute(
  "/practice/criminal-matters/cyber-crimes-legal-representation",
)({
  head: () => ({
    meta: [
      { title: "Cyber Crimes — Criminal Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Legal assistance and representation in cyber crime matters, including online offences, cyber fraud, hacking, identity theft, and other technology-related crimes before competent authorities and courts.",
      },
      { property: "og:title", content: "Cyber Crimes — Criminal Matters | Practic Legal" },
      {
        property: "og:description",
        content:
          "Legal assistance and representation in cyber crime matters, including online offences, cyber fraud, hacking, identity theft, and other technology-related crimes before competent authorities and courts.",
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
              Cyber
              <br />
              Crimes
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Legal assistance and representation in cyber crime matters, including online offences,
              cyber fraud, hacking, identity theft, and other technology-related crimes before
              competent authorities and courts.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Cyber Crimes</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  The rapid growth of technology, online banking, digital payments and social media
                  has transformed the way individuals and businesses communicate and conduct
                  transactions. Unfortunately, it has also led to a significant rise in cyber
                  crimes, resulting in financial loss, identity theft, reputational harm and
                  unauthorized access to sensitive information. Some examples of cyber crimes may
                  include:
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Identity Theft",
                    "Online Financial Fraud",
                    "Email and Account Hacking",
                    "Cyber Extortion and Blackmail",
                    "Cyber Stalking and Online Harassment",
                    "Cases involving repeated online harassment, intimidation, threats or unwanted electronic communication",
                    "Cases involving unauthorized electronic transfers, payment fraud, ATM fraud, card cloning and digital wallet misuse",
                    "Threats to publish private information, ransomware demands, online intimidation and other forms of digital extortion",
                    "Unauthorized use of personal information, identity documents, banking credentials or digital identities for unlawful purposes",
                    "Social Media Offences such as misuse of social media platforms, including fake profiles, impersonation and unlawful online activities",
                    "Data Theft of confidential business information, customer databases, proprietary information and Unauthorized Access to computer systems",
                    "Online Defamation including defamatory publications, false allegations, malicious online content and reputational harm through digital platforms",
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
                <h3 className="font-display text-xl font-bold"> Representation for Victims</h3>
                <p className="text-muted-foreground pt-5">
                  Victims of cyber crimes often face immediate financial losses and misuse of their
                  personal or business information. Prompt legal intervention can play a crucial
                  role in preserving electronic evidence and initiating appropriate legal action. We
                  assist victims in:
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Representation during investigation</li>
                  <li>• Representation before criminal courts</li>
                  <li>• Opposing bail applications where appropriate </li>
                  <li>• Registration of Cyber Crime complaints and FIRs</li>
                  <li>• Recovery-related legal proceedings where available </li>
                  <li>• Assistance in registration of Cyber Crime complaints and FIRs</li>
                  <li>• Coordination with Cyber Crime Cells and investigating agencies</li>
                  <li>• Coordination with Cyber Crime Cells and investigating agencies</li>
                </ul>
                <p className="text-muted-foreground pt-5">
                  Our objective is to ensure that victims receive timely legal assistance while
                  protecting their financial and legal interests.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Representation for the Accused</h3>
                <p className="text-muted-foreground pt-5">
                  Cyber crime allegations often arise from business disputes, online communications,
                  employment relationships, digital transactions and social media activity. Every
                  accused person is entitled to a fair investigation and legal defence. An effective
                  legal representation for accused may include:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Pre-investigation legal advice</li>
                  <li>• Anticipatory Bail and Regular Bail</li>
                  <li>• Defence during investigation</li>
                  <li>• Representation before Cyber Crime Cells</li>
                  <li>• Analysis of digital and electronic evidence</li>
                  <li>• Trial representation</li>
                  <li>• Appeals and Revision Petitions</li>
                  <li>• Quashing of criminal proceedings where legally maintainable</li>
                </ul>
                <p className="text-muted-foreground pt-5">
                  Our defence strategy is built upon a careful examination of electronic evidence,
                  procedural compliance and applicable legal principles.
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

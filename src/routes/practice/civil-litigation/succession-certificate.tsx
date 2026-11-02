import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/civil-litigation/succession-certificate")({
  head: () => ({
    meta: [
      { title: "Succession Certificate — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "The death of a family member often leaves legal and financial matters that require immediate attention",
      },
      {
        property: "og:title",
        content: "Succession Certificate — Civil Litigation | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "The death of a family member often leaves legal and financial matters that require immediate attention",
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
              Succession
              <br />
              Certificate
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              The death of a family member often leaves legal and financial matters that require
              immediate attention. When a person dies without leaving clear arrangements regarding
              certain movable assets, obtaining a Succession Certificate may be necessary to
              establish the legal right of heirs to collect and receive those assets.
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
                <p className="eyebrow">What is </p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Succession Certificate?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A Succession Certificate is a legal document issued by a competent court that
                  authorizes the legal heirs of a deceased person to collect debts and securities
                  owed to the deceased. The certificate provides legal recognition of the holder's
                  right to receive and manage specified movable assets belonging to the deceased.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-foreground">
                  When is a Succession Certificate Required?
                </h3>
                <p className="text-[19px]">
                  A Succession Certificate is commonly required for claiming:
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Bank account balances",
                    " Fixed deposits",
                    "Shares and securities",
                    "Bonds and debentures",
                    " Provident fund dues",
                    " Insurance proceeds (where applicable)",
                    " Other financial assets and receivables",
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
                  Who Can Apply?
                </h3>
                <p className="text-[19px]">
                  Generally, any legal heir entitled to inherit the estate of the deceased may apply
                  for a Succession Certificate.
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Spouse",
                    "Children",
                    "Parents",
                    "Other legal heirs entitled under the applicable succession laws",
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
                <p className="eyebrow">Comprehensive Assistance</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  At Practic Legal, we assist legal heirs and family members in obtaining Succession
                  Certificates efficiently, facilitating the transfer and recovery of financial
                  assets and legal entitlements. Our team provides comprehensive legal assistance
                  throughout the succession process, from preparing and filing petitions to
                  representation before competent courts, ensuring procedural compliance and
                  addressing objections or contested claims.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Petition Drafting & Documentation",
                    desc: "Drafting and filing petitions for the grant of Succession Certificates, identifying legal heirs, and preparing the necessary supporting documentation.",
                  },
                  {
                    no: "02",
                    title: "Court Representation & Proceedings",
                    desc: "Representation before competent courts, managing publication requirements, ensuring procedural compliance, and handling objections or contested succession proceedings.",
                  },
                  {
                    no: "03",
                    title: "Inheritance Advisory & Asset Recovery",
                    desc: "Guidance on inheritance and succession rights, along with assistance in claiming eligible financial assets following the issuance of a Succession Certificate.",
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

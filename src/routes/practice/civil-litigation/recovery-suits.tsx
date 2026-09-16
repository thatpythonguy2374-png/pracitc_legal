import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/civil-litigation/recovery-suits")({
  head: () => ({
    meta: [
      { title: "Recovery Suits — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:title", content: "Recovery Suits — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationRecoverySuits,
});

function CivilLitigationRecoverySuits() {
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
              Recovery
              <br />
              Suits
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify text-justify">
              A Civil Lawsuit filed to reclaim money or property that is legally owed by another
              party.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Recovery Suit?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px] text-justify">
                  A Recovery Suit is a civil proceeding filed before the competent court seeking
                  recovery of money that is legally due and payable. Such claims inter alia may
                  arise from:
                </p>
              </Reveal>
              <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
                <Reveal>
                  <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                    {[
                      "Unpaid invoices and business transactions",
                      "Friendly loans and personal borrowings",
                      "Breach of contractual payment obligations",
                      "Supply of goods and services",
                      "Outstanding professional fees",
                      "Loan and credit disputes",
                      "Cheque dishonour and related commercial transactions",
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
          </div>
        </section>
      </div>

      <div className="bg-secondary/40">
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">When one can prefer a</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Recovery Suit?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">A recovery suit may be initiated when:</p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8 text-justify">
                  {[
                    " A debtor fails or refuses to make payment despite repeated demands",
                    "Subject to the fact that the claim is within the prescribed period of limitation as per applicable law",
                    "The amount due is supported by documents, agreements, invoices, acknowledgments, or other form of evidence (not limited solely to documentary form)",
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
                    desc: "Assessment of nuisance-related issues, evidence, legal rights, and available remedies before initiating proceedings.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Representation before relevant authorities, civil courts, and other legal forums to seek effective relief against public nuisance.",
                  },
                  {
                    no: "03",
                    title: "Legal Notices & Resolution",
                    desc: "Drafting legal notices and pursuing negotiation or appropriate remedies to stop nuisance and protect public rights.",
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
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">
                Summary Suits for Faster Recovery
              </h2>
              <span className="mt-4 block h-1 w-16 bg-primary" />

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                  <h3 className="font-display text-xl font-bold">
                    Under Section 91 of The Code of Civil Procedure
                  </h3>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    In appropriate cases involving written contracts, invoices, bills of exchange,
                    promissory notes and cheques, a Summary Suit under Order XXXVII of The Code of
                    Civil Procedure may provide a faster mechanism for recovery. These proceedings
                    are designed to prevent unnecessary delays and hurdles thereby enabling the
                    creditor to obtain relief much more efficiently where the liability is clear and
                    supported by documentary evidence.
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-sm bg-primary p-8 text-center text-primary-foreground">
                  <p className="text-lg italic">
                    "Protecting your investment through strategic legal advocacy."
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
      </div>

      <DisclaimerSection />
      <SiteFooter />
    </div>
  );
}

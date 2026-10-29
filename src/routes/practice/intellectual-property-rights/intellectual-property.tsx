import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute(
  "/practice/intellectual-property-rights/intellectual-property",
)({
  head: () => ({
    meta: [
      { title: "Intellectual Property — Intellectual Property Rights | Practic Legal" },
      {
        name: "description",
        content:
          "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums.",
      },
      {
        property: "og:title",
        content: "Intellectual Property — Intellectual Property Rights | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums.",
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
              Intellectual Property Rights
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Intellectual
              <br />
              Property
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Intellectual Property (IP) is among the most valuable assets of an individual or
              business. Unauthorized use, copying, imitation or exploitation of intellectual
              property can result in substantial financial loss, dilution of brand value and damage
              to commercial reputation.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Trademark Infringement</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A registered trademark grants its proprietor the exclusive right to use the mark
                  in relation to the registered goods or services. Unauthorized use of an identical
                  or deceptively similar mark may constitute trademark infringement and can also
                  amount to passing off in appropriate cases. Such infringements may consist of (not
                  an exhaustive list):
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Trademark infringement",
                    " Passing off actions",
                    " Unauthorized use of brand names or logos",
                    " Counterfeit products",
                    " Domain name disputes",
                    " Trade dress violations",
                    " Brand protection and enforcement",
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
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Overview</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Copyright Infringement</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Copyright protects original literary, artistic, musical, dramatic,
                  cinematographic, architectural, and software-related works. Unauthorized
                  reproduction, publication, distribution, adaptation, communication to the public
                  or commercial exploitation of copyrighted works may constitute infringement. Some
                  examples of works comprising copyright (not an exhaustive list):
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Literary and artistic works",
                    " Software and computer programs",
                    " Photographs and digital content",
                    " Films, music, and audiovisual works",
                    " Architectural drawings and designs",
                    " Website content and digital media",
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
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Overview</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Patent Infringement</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A granted patent confers exclusive rights upon the patentee to prevent
                  unauthorized manufacture, use, sale, offer for sale or import of the patented
                  invention. Patent infringement disputes often involve complex technical and legal
                  issues requiring careful evaluation. Such infringements may consist of (not an
                  exhaustive list):
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    " Unauthorized manufacture or sale of patented products",
                    " Patent infringement litigation",
                    " Patent validity disputes",
                    " Licensing disagreements",
                    " Technology-related disputes",
                    " Patent ownership conflicts",
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
            <p className="eyebrow">Protection</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Legal Remedies Available</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">
                  Depending upon the facts of each case, the legal remedies available to a person
                  may include
                </h3>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>Temporary and permanent injunctions</li>
                  <li>Cease-and-desist notices</li>
                  <li>Damages and compensation </li>
                  <li>Rendition of accounts</li>
                  <li>Delivery up and destruction of infringing goods</li>
                  <li>Seizure of counterfeit products where permissible </li>
                  <li>Declaration of ownership rights</li>
                  <li>Settlement and licensing arrangements</li>
                </ul>
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

      <div className="bg-secondary/40">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Left Content */}
              <div>
                <p className="eyebrow">Strategic Legal Support</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  Every intellectual property dispute requires a careful balance between legal
                  rights and commercial objectives. Our approach focuses on protecting intellectual
                  assets, addressing infringement risks, and developing effective legal strategies
                  that safeguard innovation, creativity, and commercial interests.
                </p>
              </div>

              {/* Right Content */}
              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Intellectual Property Assessment & Risk Evaluation",
                    desc: "Thorough assessment of intellectual property rights, ownership, registrations, and potential infringement risks to identify appropriate legal remedies.",
                  },
                  {
                    no: "02",
                    title: "Strategic Enforcement & Asset Protection",
                    desc: "Strategic enforcement and defence of intellectual property rights, safeguarding commercial goodwill, brand identity, creative works, and innovation.",
                  },
                  {
                    no: "03",
                    title: "Business-Oriented Legal Solutions",
                    desc: "Practical, commercially focused legal strategies tailored to protect intellectual assets, resolve disputes, and support long-term business objectives.",
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

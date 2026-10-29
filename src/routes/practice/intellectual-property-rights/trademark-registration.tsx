import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute(
  "/practice/intellectual-property-rights/trademark-registration",
)({
  head: () => ({
    meta: [
      { title: "Trademark Registration — Intellectual Property Rights | Practic Legal" },
      {
        name: "description",
        content:
          "A trademark is one of the most valuable assets of any business. It distinguishes your goods or services from those of others and helps build brand recognition, customer trust and commercial goodwill.",
      },
      {
        property: "og:title",
        content: "Trademark Registration — Intellectual Property Rights | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "A trademark is one of the most valuable assets of any business. It distinguishes your goods or services from those of others and helps build brand recognition, customer trust and commercial goodwill.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertyRightsTenancyAndEvictionPage,
});

function PropertyRightsTenancyAndEvictionPage() {
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
              Trademark
              <br />
              Registration
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A trademark is one of the most valuable assets of any business. It distinguishes your
              goods or services from those of others and helps build brand recognition, customer
              trust and commercial goodwill.
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
                <p className="eyebrow">What is a</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Trademark?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  A trademark is a distinctive sign capable of identifying the source of goods or
                  services. It may consist of:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Logos",
                    "Labels",
                    "Symbols",
                    "Signatures",
                    "Brand names",
                    "Device marks",
                    "Business names",
                    "Words and slogans",
                    "Combination of words and graphics",
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
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Why</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl"> Register a Trademark?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Early registration significantly reduces the risk of future disputes and protects
                  the long-term value of your business.
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Nationwide protection throughout India",
                    "Stronger legal remedies against infringers",
                    "Enhancement of brand identity and goodwill",
                    "Creation of a valuable intellectual property asset",
                    "Exclusive statutory rights over the registered mark",
                    "Protection against unauthorized use and infringement",
                    "Easier licensing, assignment and franchising of the brand",
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
                  Trademark Objections and Opposition
                </h3>
                <p className="text-[19px]">
                  A trademark application may face objections from the Trademark Registry or
                  opposition from third parties and assistance may be required for:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-2 ps-8">
                  {[
                    "Examining objections",
                    "Distinctiveness-related objections",
                    "Similarity and deceptively similar mark disputes",
                    "Opposition proceedings",
                    "Rectification and cancellation proceedings",
                    "Appeals against Registry decisions",
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
            <h2 className="section-title mt-3 text-3xl md:text-4xl">
              Trademark Registration Process{" "}
            </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">1. Trademark Search</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Conducting preliminary searches to assess the availability of the proposed
                  trademark and identify any existing identical or deceptively similar marks
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">2. Application Filing</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Preparing and filing trademark applications before the Trademark Registry after
                  identifying the appropriate class or classes of goods and services
                </p>
              </div>

              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">3. Examination Proceedings</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If the Trademark Registry raises objections during examination, preparing and
                  filing appropriate replies and represent applicants during hearings, where
                  required
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">4. Publication and Opposition</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Once accepted, the trademark is advertised in the Trade Marks Journal. If an
                  opposition is filed by a third party, representation may be required in opposition
                  proceedings before the Trademark Registry
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">5. Registration</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Upon successful completion of the statutory process, the trademark proceeds to
                  registration and a Registration Certificate is issued by the Trademark Registry
                </p>
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
                    title: "Trademark Search, Registration & Brand Protection",
                    desc: "Trademark availability searches, classification of goods and services, application filing, and strategic brand protection to establish and safeguard your brand identity.",
                  },
                  {
                    no: "02",
                    title: "Trademark Prosecution & Dispute Resolution",
                    desc: "Drafting replies to examination reports, representation in show-cause hearings, and assistance with opposition and rectification proceedings to protect your trademark rights.",
                  },
                  {
                    no: "03",
                    title: "Trademark Portfolio Management & Advisory",
                    desc: "Assistance with trademark renewals, assignments, transmission, and portfolio management to maintain, strengthen, and maximise the value of your trademark assets.",
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

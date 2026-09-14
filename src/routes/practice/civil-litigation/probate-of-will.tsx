import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/civil-litigation/probate-of-will")({
  head: () => ({
    meta: [
      { title: "Probate of Will — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:title", content: "Probate of Will — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationProbateOfWillPage,
});

function CivilLitigationProbateOfWillPage() {
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
              Probate
              <br />
              Of Will
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Protecting heirs against disputes, delays and challenges in probate proceedings.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">PROBATE OF WILL?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Probate is a judicial certification granted by a competent court confirming the
                  validity and authenticity of a Will. It authorizes the executor named in the Will
                  to administer the estate and distribute the assets in accordance with the wishes
                  of the deceased. A probate order serves as conclusive proof of the executor's
                  authority and facilitates the transfer and management of the deceased's assets.
                </p>
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
                <p className="eyebrow">When is</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">PROBATE Required?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  The requirement of probate depends upon the nature of property, the location of
                  the assets and the applicable legal provisions. Probate is commonly sought where:
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "The deceased had executed and left a valid Will",
                    "The executor seeks legal authority to administer the estate",
                    "Financial institutions or authorities require probate before releasing assets",
                    "The Will is likely to be contested by legal heirs or interested parties",
                    "There are disputes regarding the authenticity or validity of the Will",
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
                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Contested Probate Matters
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Disputes may arise when family members or other interested persons challenge a
                  Will on grounds such as:
                </p>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    " Lack of testamentary capacity",
                    "Undue influence or coercion",
                    "Fraud or forgery",
                    "Improper execution of the Will",
                    "Suspicious circumstances surrounding its preparation",
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

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  We provide end-to-end legal assistance in matters before the MCS Tribunal. From
                  reviewing society records and issuing legal notices to representing clients in
                  disputes before cooperative authorities and tribunals, our team focuses on
                  protecting your rights and securing effective legal remedies.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Review & Legal Advisory",
                    desc: "Legal advice regarding execution and validity of Wills, Filing petitions for grant of Probate, and legal risks before initiating proceedings.",
                  },
                  {
                    no: "02",
                    title: "Litigation & Representation",
                    desc: "Effective representation before competent Courts and authorities, Obtaining Letters of Administration where required, Handling objections and contested probate proceedings, Assistance with estate administration and asset transfer, and Succession and inheritance-related advisory services.",
                  },
                  {
                    no: "03",
                    title: "Negotiation & Settlement",
                    desc: "Strategic settlement discussions and mediation aimed at resolving disputes efficiently while protecting your legal interests.",
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

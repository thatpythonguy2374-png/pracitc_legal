import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/matrimonial-matters/nullity-of-marriage")({
  head: () => ({
    meta: [
      { title: "Nullity Of Marriage — Matrimonial Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Nullity of marriage, or annulment, is a legal declaration by a court stating that a marriage never legally existed.",
      },
      {
        property: "og:title",
        content: "Nullity Of Marriage — Matrimonial Matters | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Nullity of marriage, or annulment, is a legal declaration by a court stating that a marriage never legally existed.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonialMattersNullityOfMarriage,
});

function MatrimonialMattersNullityOfMarriage() {
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
              Matrimonial Matters
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Nullity Of
              <br />
              Marriage
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Nullity of marriage proceedings seek a legal declaration that a marriage is void or
              voidable due to specific grounds recognized under matrimonial law.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl"> Nullity Of Marriage?</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Not every marriage is legally valid merely because a marriage ceremony has taken
                  place. In certain circumstances, the law permits a court to declare a marriage
                  void or voidable, depending upon the facts and the applicable personal law. A
                  decree of nullity legally recognizes that the marriage was either invalid from its
                  inception or is liable to be annulled on legally recognized grounds.
                </p>

                <h3 className="font-display text-xl font-bold pt-5 text-muted-foreground">
                  Connected Matrimonial Proceedings
                </h3>
                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    {
                      label: "Maintenance claims",
                      href: "/practice/matrimonial-matters/maintenance-and-alimony",
                    },
                    {
                      label: "Child custody and guardianship",
                      href: "/practice/matrimonial-matters/child-custody",
                    },
                    {
                      label: "Domestic Violence proceedings",
                      href: "/practice/matrimonial-matters/domestic-violence",
                    },
                    {
                      label: "Criminal matrimonial litigation",
                      href: "/practice/matrimonial-matters/domestic-violence",
                    },
                    {
                      label: "Property and financial disputes",
                      href: "/practice/matrimonial-matters/maintenance-and-alimony",
                    },
                    {
                      label: "Return of stridhan",
                      href: "/practice/matrimonial-matters/maintenance-and-alimony",
                    },
                    { label: "Other matrimonial remedies", href: "/practice/matrimonial-matters" },
                  ].map((item) => (
                    <StaggerItem key={item.label}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <Link
                          to={item.href}
                          className="hover:text-primary hover:underline transition-colors"
                        >
                          {item.label}
                        </Link>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className="text-[19px] pt-6">
                  Our firm adopts a comprehensive approach to ensure that all connected proceedings
                  are effectively coordinated.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="section-title mt-3 text-3xl md:text-4xl"> Decree of Nullity </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <p className="text-[19px] pt-5 text-muted-foreground">
              Void, meaning it was legally invalid from the very beginning or Voidable, meaning it
              remains valid until it is annulled by a competent court. Unlike divorce, which
              dissolves a valid marriage, a decree of nullity determines whether a legally valid
              marriage ever existed or whether it should be annulled under the law.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Void Marriages</h3>
                <p className="mt-6 space-y-3 text-muted-foreground">
                  A marriage may be declared void where it violates mandatory legal requirements
                  prescribed under the applicable matrimonial law. Depending upon the governing
                  personal law, grounds may include:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground fs-4">
                  <li>• A spouse already having a living spouse at the time of marriage</li>
                  <li>• Marriage between parties who are not legally competent to marry</li>
                  <li>• Other grounds recognized under the applicable matrimonial law</li>
                  <li>
                    • Marriage within prohibited degrees of relationship, where not legally
                    permitted
                  </li>
                </ul>
                <p className="mt-6 space-y-3 text-muted-foreground">
                  A void marriage is treated as legally invalid, subject to the provisions of the
                  applicable statute.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Voidable Marriages</h3>
                <p className="mt-6 space-y-3 text-muted-foreground">
                  Certain marriages are legally valid unless and until they are annulled by the
                  court. Depending upon the applicable law, grounds for annulment may include:
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Lack of valid consent due to force or fraud</li>
                  <li>• Concealment of material facts affecting the marriage</li>
                  <li>• Mental incapacity affecting consent </li>
                  <li>• Other statutory grounds available under the relevant personal law</li>
                  <li>
                    • Pregnancy of the wife by another person at the time of marriage, where legally
                    applicable
                  </li>
                  <li>
                    • Each petition is decided on the basis of the evidence produced before the
                    court
                  </li>
                  <li>• Impotency or non-consummation in circumstances recognized by law</li>
                </ul>
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Services</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />

                <p className="mt-8 leading-relaxed text-muted-foreground">
                  We provide comprehensive legal assistance in matters relating to:
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    no: "01",
                    title: "Nullity Petitions & Legal Advisory",
                    desc: "Petitions for declaration of nullity of marriage, defence against annulment proceedings, and legal opinions regarding the validity of marriage.",
                  },
                  {
                    no: "02",
                    title: "Evidence & Court Representation",
                    desc: "Collection and evaluation of documentary evidence, along with representation before Family Courts in nullity and annulment matters.",
                  },
                  {
                    no: "03",
                    title: "Settlement & Appeals",
                    desc: "Settlement discussions where appropriate and appeals against Family Court judgments concerning the validity or nullity of marriage.",
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

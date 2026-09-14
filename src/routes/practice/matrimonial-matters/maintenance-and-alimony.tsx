import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";

export const Route = createFileRoute("/practice/matrimonial-matters/maintenance-and-alimony")({
  head: () => ({
    meta: [
      { title: "Maintenance & Alimony — Matrimonial Matters | Practic Legal" },
      {
        name: "description",
        content:
          "Claims and defences for interim maintenance, permanent alimony, and enforcement of maintenance orders.",
      },
      {
        property: "og:title",
        content: "Maintenance & Alimony — Matrimonial Matters | Practic Legal",
      },
      {
        property: "og:description",
        content:
          "Claims and defences for interim maintenance, permanent alimony, and enforcement of maintenance orders.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonialMattersMaintenanceAndAlimonyPage,
});

function MatrimonialMattersMaintenanceAndAlimonyPage() {
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

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Maintenance</h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Maintenance is a legal right intended to ensure that a spouse, child or parent who is
              unable to maintain themselves is not left without financial support.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">MAINTENANCE</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Maintenance is a legal right intended to ensure that a spouse, child or parent who
                  is unable to maintain themselves is not left without financial support. Disputes
                  relating to maintenance often arise during matrimonial proceedings, separation,
                  divorce or even independent of such proceedings.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-black">
                  Understanding Maintenance
                </h3>
                <p className="text-[19px]">
                  Maintenance is a financial provision granted by a court to enable a dependent
                  spouse, child or parent to meet reasonable living expenses. The amount awarded
                  depends upon various factors, including the income, financial resources, standard
                  of living, liabilities and circumstances of both parties. Maintenance proceedings
                  aim to strike a fair balance between the legitimate needs of the claimant and the
                  financial capacity of the person liable to pay.
                </p>
                <h3 className="font-display text-xl font-bold pt-5 text-black">Our Approach</h3>
                <p className="text-[19px]">
                  Maintenance disputes often involve sensitive personal and financial issues. We
                  approach every matter with professionalism, confidentiality, and a practical
                  understanding of the legal and human aspects involved. Our objective is to protect
                  our client’s rights while pursuing fair, lawful and sustainable outcomes.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-secondary/40 py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left */}
              <div className="lg:col-span-4">
                <p className="eyebrow">Consumer Protection</p>

                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Laws governing Maintenance
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </div>

              {/* Right */}
              <Stagger className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
                {/* Paragraph */}
                <StaggerItem>
                  <p className="text-[19px]">
                    Depending upon the facts of the case, maintenance may be claimed under various
                    legal provisions, including:
                  </p>
                </StaggerItem>

                {/* List */}
                <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8 pb-6">
                  {[
                    "The Hindu Marriage Act, 1955",
                    "The Hindu Adoptions and Maintenance Act, 1956",
                    "	Other applicable personal and matrimonial laws",
                    "	The Protection of Women from Domestic Violence Act, 2005",
                    "                	Section 144 of The Bharatiya Nagarik Suraksha Sanhita (formerly Section 125 of The Code of Criminal Procedure)",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>

                {/* Bottom paragraph */}
                <StaggerItem>
                  <p>
                    Consumer proceedings often provide an effective mechanism for seeking
                    compensation and other reliefs.
                  </p>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">
              {" "}
              FOR Claimants & Respondents{" "}
            </h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">For Claimants</h3>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Legal advice regarding entitlement to maintenance</li>
                  <li>• Drafting and filing maintenance petitions</li>
                  <li>• Applications for interim maintenance</li>
                  <li>• Representation before Family Courts and other competent courts</li>
                  <li>• Enforcement of maintenance orders</li>
                  <li>• Recovery of unpaid maintenance</li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">For Respondents</h3>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Defence against maintenance claims</li>
                  <li>• Assessment of income and financial liabilities</li>
                  <li>• Applications for modification or reduction of maintenance</li>
                  <li>• Representation in contested proceedings</li>
                  <li>• Appeals against maintenance orders where appropriate</li>
                  <li>• Recovery of unpaid maintenance</li>
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
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Legal Remedies Available</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Factors considered by Courts</h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  While deciding maintenance, courts generally consider several relevant factors
                  including:
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Income and earning capacity of both parties</li>
                  <li>• Standard of living enjoyed during the marriage</li>
                  <li>• Reasonable financial needs of the claimant</li>
                  <li>• Dependents and financial obligations</li>
                  <li>• Age and health of the parties</li>
                  <li>• Educational qualifications and employment status</li>
                  <li>• Conduct and other relevant circumstances as permitted by law</li>
                  <li>
                    • Each case is decided on its own facts and there is no fixed formula for
                    determining maintenance.
                  </li>
                </ul>
              </div>
              <div className="rounded-sm border border-border bg-card p-8 md:col-span-2 transition-all hover:-translate-y-1 hover:border-primary">
                <h3 className="font-display text-xl font-bold">Maintenance matters we handle</h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our firm regularly advises and represents clients in matters involving:
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>• Interim maintenance applications</li>
                  <li>• Permanent maintenance and alimony</li>
                  <li>• Maintenance for wives</li>
                  <li>• Maintenance for children</li>
                  <li>• Maintenance for parents</li>
                  <li>• Enhancement or reduction of maintenance</li>
                  <li>• Modification of maintenance orders</li>
                  <li>• Enforcement and execution of maintenance orders</li>
                  <li>• Defence against excessive or unjustified maintenance claims</li>
                </ul>
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

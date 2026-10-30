import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import DisclaimerSection from "@/components/Disclaimer";
import { Stagger, StaggerItem } from "@/components/Stagger";

export const Route = createFileRoute("/practice/civil-litigation/landlord-tenant")({
  head: () => ({
    meta: [
      { title: "Landlord Tenant — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Appellate advocacy before district courts, High Courts, and the Supreme Court on questions of fact and law.",
      },
      { property: "og:title", content: "Landlord Tenant — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          "Appellate advocacy before district courts, High Courts, and the Supreme Court on questions of fact and law.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationLandlordTenantPage,
});

function CivilLitigationLandlordTenantPage() {
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
              Landlord &
              <br />
              Tenant Litigation
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Protecting landlords and tenants against unlawful eviction, rent disputes, and
              breaches of tenancy agreements.
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">
                  Common Landlord Tenant Disputes
                </h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Disputes between landlords and tenants can arise due to non-payment of rent,
                  unlawful eviction, unauthorized occupation, breach of tenancy terms and
                  disagreements regarding possession of premises. Such disputes often require prompt
                  legal intervention to protect respective rights and effective legal remedies as
                  applicable under the relevant laws.
                </p>
                <p className="text-[19px] pt-5">
                  There are common landlord-tenant dispute which may arise between the parties
                  concerning
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Termination of tenancy",
                    "Commercial lease disputes",
                    "Recovery of arrears of rent",
                    " Illegal or forceful eviction",
                    "Recovery of possession of property",
                    "Unauthorized occupation of premises",
                    "Disputes regarding security deposits",
                    "Breach of lease or tenancy agreements",
                    "Rent enhancement and tenancy-related disagreements",
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
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <Reveal>
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Landlord & Tenant Legal Services</h2>
              <span className="mt-4 block h-1 w-16 bg-primary" />
              <p className="mt-4 text-gray-600">
                Comprehensive legal support for landlords and tenants in resolving disputes,
                protecting rights, and securing timely remedies.
              </p>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 - LANDLORDS */}
            <Reveal>
              <Stagger className="border rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4 text-primary">Services for Landlords</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Eviction proceedings",
                    "Claim for Damages to property",
                    "Compensation for mental harassment",
                    "Recovery of possession of property",
                    "Compensation for unauthorized occupation",
                    "Legal notices for termination of tenancy",
                    "Recovery of unpaid rent and mesne profits",
                    "Enforcement of lease and tenancy agreements",
                    "Injunctions against unauthorized use or occupation",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </Reveal>

            {/* CARD 2 - TENANTS */}

            <Reveal>
              <Stagger className="border rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4 text-primary">Services for Tenants</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Recovery of possession",
                    "Damages and mesne profits",
                    "Recovery of security deposits",
                    "Enforcement of tenancy rights",
                    "Protection against unlawful eviction",
                    "Protection from forceful dis-possession",
                    "Compensation for unauthorized occupation",
                    "Challenges to illegal demands and actions",
                    "Resolution of commercial tenancy disputes",
                    "Disputes relating to maintenance and habitability",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </Reveal>

            {/* CARD 3 - DISPUTES & RECOVERY */}
            <Reveal>
              <Stagger className="border rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Commercial Lease Disputes
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Lock-in period disputes",
                    "Commercial rent recovery",
                    "Breach of lease covenants",
                    "Termination and renewal issues",
                    "Possession and occupation disputes",
                    "Lease interpretation and enforcement",
                  ].map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p>{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </Reveal>
          </div>

          {/* Bottom line */}
          <p className="mt-12 max-w-7xl text-gray-600">
            Our team develops effective legal strategies aimed at securing timely relief, enforcing
            rights, and protecting the interests of landlords and tenants in complex property
            disputes.
          </p>
        </div>
      </section>
      <div className="bg-secondary/40">
        <section className=" mx-auto max-w-7xl px-6 py-20 ">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="section-title mt-3 text-3xl md:text-4xl">Our Approach</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Every landlord–tenant dispute presents unique legal and practical challenges. We
                  focus on:
                </p>

                <Stagger className="grid gap-x-10 gap-y-4 md:grid-cols-2 pt-6 ps-8">
                  {[
                    "Thorough review of lease and tenancy documents",
                    "Strategic dispute resolution and settlement opportunities",
                    "Effective representation before courts and authorities",
                    "Rent enhancement and tenancy-related disagreements",
                    "Early assessment of legal remedies",
                    "Practical solutions tailored to client objectives",
                    "Disputes regarding security deposits",
                    "Illegal or forceful eviction",
                    "Termination of tenancy",
                    "Commercial lease disputes",
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
      <DisclaimerSection />
      <SiteFooter />
    </div>
  );
}

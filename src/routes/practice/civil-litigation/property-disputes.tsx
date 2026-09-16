import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import DisclaimerSection from "@/components/Disclaimer";
import PropertySection from "@/components/PropertyDisputesSection";

export const Route = createFileRoute("/practice/civil-litigation/property-disputes")({
  head: () => ({
    meta: [
      { title: "Property Disputes — Civil Litigation | Practic Legal" },
      {
        name: "description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:title", content: "Property Disputes — Civil Litigation | Practic Legal" },
      {
        property: "og:description",
        content:
          "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CivilLitigationPropertyDisputesPage,
});

function CivilLitigationPropertyDisputesPage() {
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
              Property
              <br />
              Disputes
            </h1>

            <div className="w-20 h-[2px] bg-orange-400 my-6" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Protecting Your Rights in Property Matters
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

                <h2 className="section-title mt-3 text-3xl md:text-4xl">Property Disputes</h2>

                <span className="mt-4 block h-1 w-16 bg-primary" />
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:col-span-8">
              <Reveal>
                <p className="text-[19px]">
                  Property disputes can be complex, emotionally challenging and financially
                  significant. Whether arising from family disagreements, ownership conflicts,
                  unlawful occupation or competing claims over title, timely legal intervention is
                  essential to safeguard your rights and interests.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <PropertySection />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-sm border border-border bg-card p-10 lg:p-16">
          <p className="eyebrow">Next step</p>
          <h2 className="section-title mt-3 text-3xl md:text-4xl">Discuss Your Matter</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Share the facts of your case and a member of our team will respond within one business
            day with an honest view of your options.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center rounded-sm bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
            <Link
              to="/practice/civil-litigation"
              className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              Back to Civil Litigation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

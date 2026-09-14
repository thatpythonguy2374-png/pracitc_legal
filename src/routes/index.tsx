import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { practiceNav } from "@/lib/practice-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Practic Legal — Full-Service Law Firm" },
      {
        name: "description",
        content:
          "Practic Legal is a full-service law firm delivering strategic legal counsel across corporate, finance, disputes, and ESG practice areas.",
      },
      { property: "og:title", content: "Practic Legal — Full-Service Law Firm" },
      {
        property: "og:description",
        content:
          "Strategic legal counsel across corporate, finance, disputes, and ESG practice areas.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <Hero />

      <PracticeAreas />

      <WhyChooseUs />

      <AboutFirm />

      <FinalCTA />

      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, oklch(0.66 0.13 55 / .35), transparent 40%),
            radial-gradient(circle at 80% 80%, oklch(0.42 0.05 55 / .35), transparent 45%)
          `,
        }}
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-primary" />

            <p className="eyebrow text-primary">Established Expertise</p>
          </div>

          <h1 className="mt-8 font-display text-2xl font-extrabold uppercase leading-[1.02] tracking-tight md:text-7xl xl:text-5xl">
            Practical Solutions.
            <br />
            Strategic Advocacy.
            <br />
            <span className="text-primary">Real Results.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Specializing in Civil Litigation, Consumer Rights, Corporate Advisory, and Real Estate
            Law while delivering strategic legal solutions with integrity, precision, and commercial
            insight.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:-translate-y-1"
            >
              Consult Our Experts
            </Link>

            <a
              href="#practice"
              className="inline-flex items-center rounded-sm border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-primary hover:bg-white/5"
            >
              View Practice Areas
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}

function PracticeAreas() {
  return (
    <section id="practice" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="eyebrow text-primary">Our Expertise</p>

          <h2 className="section-title mt-4 text-4xl font-bold md:text-6xl">
            Legal Services
            <br />
            Tailored To
            <br />
            Your Needs
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            We advise businesses, institutions and individuals across complex legal matters with
            commercially focused solutions and courtroom excellence.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {practiceNav.map((practice) => (
            <Link
              key={practice.slug}
              to={practice.href}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
            >
              {/* Gold Line */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />

              {/* Number */}

              <div className="font-display text-5xl font-black text-primary/15 transition-all duration-500 group-hover:text-primary">
                0{practiceNav.indexOf(practice) + 1}
              </div>

              {/* Title */}

              <h3 className="mt-8 font-display text-2xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-primary">
                {practice.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-7 text-muted-foreground">{practice.desc}</p>

              {/* Link */}

              <div className="mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-[var(--ink)] py-24 text-[var(--ink-foreground)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our philosophy</p>
            <h2 className="section-title mt-3 text-4xl md:text-5xl">Why Clients Choose Us</h2>
            <span className="mt-4 block h-1 w-16 bg-primary" />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-white/75">
            <p>
              The firm pursues a philosophy of symbiotic relationships with clients and works as an
              integral part of the client's team. Our members inculcate integrity and ethics as the
              guiding principles of their conduct.
            </p>
            <p>
              A highly qualified, innovative, and experienced team of lawyers, chartered
              accountants, and management consultants seek the highest standards of service across
              our diversified client portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Strategic Legal Advice",
      body: "Every matter is approached with commercial awareness and long-term strategy, ensuring practical legal solutions rather than theoretical advice.",
    },
    {
      number: "02",
      title: "Client-Centric Representation",
      body: "We work closely with every client, providing transparent communication, tailored strategies, and dedicated representation throughout the matter.",
    },
    {
      number: "03",
      title: "Cross-Practice Expertise",
      body: "Our integrated approach combines litigation, corporate advisory, real estate, and regulatory expertise to solve complex legal challenges.",
    },
    {
      number: "04",
      title: "Commitment to Excellence",
      body: "Precision, integrity, and meticulous preparation define every stage of our legal services—from consultation to courtroom advocacy.",
    },
  ];

  return (
    <section className="bg-[var(--ink)] py-28 text-[var(--ink-foreground)]">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-start">
        {/* Left */}

        <div className="sticky top-28">
          <p className="eyebrow text-primary">Why Partner With Us</p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            Trusted Legal
            <br />
            Counsel Built
            <br />
            On Experience
          </h2>

          <div className="mt-8 h-1 w-20 bg-primary" />

          <p className="mt-10 text-lg leading-8 text-white/70">
            At Practic Legal, we combine legal excellence with commercial understanding to help
            businesses and individuals navigate complex legal challenges confidently.
          </p>

          <p className="mt-6 text-white/60 leading-8">
            Our lawyers focus on practical outcomes, timely advice, and long-term client
            relationships founded on trust, professionalism, and measurable results.
          </p>
        </div>

        {/* Right */}

        <div className="grid gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-primary hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-6">
                <div className="font-display text-5xl font-black text-primary/30 transition-all duration-500 group-hover:text-primary">
                  {feature.number}
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase">{feature.title}</h3>

                  <p className="mt-5 leading-8 text-white/65">{feature.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutFirm() {
  const stats = [
    {
      value: "30+",
      label: "Years of Legal Excellence",
    },
    {
      value: "500+",
      label: "Matters Successfully Handled",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Dedicated Legal Support",
    },
  ];

  return (
    <section id="about" className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Image */}

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border bg-gradient-to-br from-muted via-secondary to-card shadow-2xl">
              {/* Replace this with an actual office/team image */}

              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary text-4xl font-bold text-primary">
                    PL
                  </div>

                  <p className="uppercase tracking-[0.35em] text-muted-foreground">Practic Legal</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 rounded-sm border border-primary/20 bg-card p-8 shadow-xl">
              <h3 className="font-display text-5xl font-black text-primary">30+</h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <p className="eyebrow text-primary">About Practic Legal</p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Trusted Legal
              <br />
              Advisors For
              <br />
              Modern Businesses
            </h2>

            <div className="mt-8 h-1 w-20 bg-primary" />

            <p className="mt-10 text-lg leading-8 text-muted-foreground">
              Practic Legal is a full-service law firm committed to delivering strategic legal
              solutions for businesses, entrepreneurs, institutions, and individuals.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              We combine deep legal knowledge with commercial insight to help clients navigate
              litigation, corporate transactions, regulatory compliance, real estate matters, and
              dispute resolution.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              Our philosophy is simple—understand the client's objectives, minimize legal risk, and
              deliver practical, commercially effective solutions with integrity and
              professionalism.
            </p>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-2 gap-8">
              {stats.map((item) => (
                <div key={item.label} className="border-l-2 border-primary pl-5">
                  <div className="font-display text-4xl font-black text-primary">{item.value}</div>

                  <div className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--ink)] py-32 text-[var(--ink-foreground)]"
    >
      {/* Background Glow */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at top right, oklch(0.66 0.13 55 / .35), transparent 40%),
            radial-gradient(circle at bottom left, oklch(0.42 0.05 55 / .25), transparent 45%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow text-primary">Let's Discuss Your Matter</p>

        <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
          Trusted Legal Advice
          <br />
          Starts With A
          <br />
          Conversation
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Whether you're facing a complex dispute, planning a business transaction, or seeking
          strategic legal guidance, our team is ready to provide practical advice tailored to your
          objectives.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Schedule Consultation
          </Link>

          <Link
            to="/practice"
            className="rounded-sm border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-primary hover:bg-white/5"
          >
            Explore Practice Areas
          </Link>
        </div>

        {/* Contact Strip */}

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Email</p>

            <p className="mt-3 text-white/80">hello@practiclegal.com</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Call</p>

            <p className="mt-3 text-white/80">+91 11 0000 0000</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Offices</p>

            <p className="mt-3 text-white/80">New Delhi • Mumbai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 rounded-sm border border-border bg-card p-10 lg:grid-cols-2 lg:p-16">
        <div>
          <p className="eyebrow">Reach out</p>
          <h2 className="section-title mt-3 text-4xl md:text-5xl">Get In Touch</h2>
          <span className="mt-4 block h-1 w-16 bg-primary" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Choose to listen to voice and keep aside the noise. Tell us about your matter and a
            member of our team will respond within one business day.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p>
              <span className="font-semibold uppercase tracking-widest text-primary">Office</span>{" "}
              &nbsp; New Delhi · Mumbai · Singapore
            </p>
            <p>
              <span className="font-semibold uppercase tracking-widest text-primary">Email</span>{" "}
              &nbsp; hello@practiclegal.com
            </p>
            <p>
              <span className="font-semibold uppercase tracking-widest text-primary">Phone</span>{" "}
              &nbsp; +91 11 0000 0000
            </p>
          </div>
        </div>
        <form className="space-y-5">
          {["Full Name", "Email", "Subject"].map((label) => (
            <div key={label}>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {label}
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          ))}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Practice Area
            </label>
            <select className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
              {practiceNav.map((p) => (
                <option key={p.slug}>{p.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Practic Legal | Speak With Our Legal Experts",
      },
      {
        name: "description",
        content:
          "Contact Practic Legal for expert legal advice across litigation, corporate law, consumer disputes, and real estate matters.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <ContactSection />
      <ValuesSection />
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]"
      style={{
        backgroundImage: `url()`,
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gold Lighting */}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.66 0.135 55 / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.05 60 / 0.4), transparent 55%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-8 h-1 w-20 bg-primary" />

          <p className="eyebrow text-primary">Get In Touch</p>

          <h1 className="mt-6 font-display text-5xl font-black leading-tight md:text-7xl">
            Contact
            <br />
            Our Experts
          </h1>

          <p className="mt-8 text-lg leading-8 text-white/75 md:text-xl">
            Reach out to our legal team for a confidential consultation regarding your matter. We
            combine strategic thinking, legal precision and unwavering advocacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
function ContactSection() {
  function InputField({
    label,
    placeholder,
    type = "text",
  }: {
    label: string;
    placeholder: string;
    type?: string;
  }) {
    return (
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </label>

        <input
          type={type}
          placeholder={placeholder}
          className="h-14 w-full rounded-sm border border-input bg-background px-4 transition-all duration-300 focus:border-primary focus:outline-none"
        />
      </div>
    );
  }

  function InfoCard({
    icon,
    title,
    value,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
  }) {
    return (
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary">
          {icon}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{title}</p>

          <p className="mt-2 leading-7 text-muted-foreground">{value}</p>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="mb-5 h-1 w-16 bg-primary" />

          <p className="eyebrow text-primary">Contact Information</p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Establish A
            <br />
            Professional
            <br />
            Connection
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Whether you're an individual, entrepreneur or business, our lawyers are available to
            discuss your legal concerns with complete confidentiality.
          </p>

          {/* Address */}

          <div className="mt-14 space-y-8">
            <InfoCard icon={<MapPin size={22} />} title="Office Address" value="New Delhi, India" />

            <InfoCard icon={<Phone size={22} />} title="Phone" value="+91 11 0000 0000" />

            <InfoCard icon={<Mail size={22} />} title="Email" value="hello@practiclegal.com" />
          </div>

          {/* Quote */}

          <div className="mt-16 border-l-4 border-primary bg-card p-8">
            <h3 className="font-display text-2xl font-bold">Global Reach.</h3>

            <p className="mt-5 leading-8 text-muted-foreground italic">
              We combine local legal expertise with an international perspective, helping clients
              confidently navigate complex legal matters across jurisdictions.
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="rounded-sm border border-border bg-card p-8 shadow-xl md:p-12">
            <h3 className="font-display text-3xl font-bold">Request A Consultation</h3>

            <p className="mt-3 text-muted-foreground">
              Complete the form below and one of our legal experts will contact you shortly.
            </p>

            <form className="mt-10 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <InputField label="Full Name" placeholder="John Doe" />

                <InputField label="Email" placeholder="john@example.com" type="email" />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <InputField label="Phone Number" placeholder="+91 98765 43210" />

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Practice Area
                  </label>

                  <select className="h-14 w-full rounded-sm border border-input bg-background px-4 transition-all focus:border-primary focus:outline-none">
                    <option>Select Practice Area</option>

                    <option>Civil Litigation</option>

                    <option>Corporate Law</option>

                    <option>Consumer Disputes</option>

                    <option>Real Estate Law</option>

                    <option>Intellectual Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>

                <textarea
                  rows={6}
                  className="w-full rounded-sm border border-input bg-background px-4 py-4 leading-7 transition-all focus:border-primary focus:outline-none"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>

              <button className="group inline-flex items-center gap-4 rounded-sm bg-primary px-10 py-4 font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:-translate-y-1">
                Send Message
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "Rapid Response",
      heading: "Timely Communication",
      body: "Every enquiry is reviewed promptly by our legal team. We understand that legal matters often require immediate attention and clear direction.",
    },
    {
      number: "02",
      title: "Confidential",
      heading: "Strict Confidentiality",
      body: "Your information remains protected under the highest standards of professional ethics. Every consultation is handled with complete discretion.",
    },
    {
      number: "03",
      title: "Professional",
      heading: "Strategic Representation",
      body: "From advisory services to courtroom advocacy, we provide practical legal strategies focused on achieving meaningful commercial and legal outcomes.",
    },
  ];

  return (
    <section className="bg-secondary/20 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mx-auto mb-6 h-1 w-20 bg-primary" />

          <p className="eyebrow text-primary">Why Clients Trust Us</p>

          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Commitment To
            <br />
            Professional Excellence
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Every client relationship is built on integrity, transparency and practical legal advice
            tailored to individual business and personal objectives.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group rounded-sm border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
            >
              <div className="text-6xl font-display font-black text-primary/15 transition-all duration-500 group-hover:text-primary">
                {value.number}
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {value.title}
              </p>

              <h3 className="mt-5 font-display text-2xl font-bold">{value.heading}</h3>

              <p className="mt-6 leading-8 text-muted-foreground">{value.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

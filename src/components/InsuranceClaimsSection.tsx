import Reveal from "@/components/Reveal";

export default function InsuranceClaimsSection() {
  const sections = [
    {
      title: "Life Insurance Claims",
      points: [
        "Wrongful rejection of life insurance claims",
        "Disputes concerning nominee rights",
        "Delayed settlement of claims",
        "Allegations of non-disclosure and misrepresentation",
        "Death benefit disputes",
      ],
    },
    {
      title: "Health Insurance Claims",
      points: [
        "Rejection of hospitalization claims",
        "Cashless treatment disputes",
        "Delay in claim settlement",
        "Disputes regarding policy coverage",
        "Critical illness and mediclaim disputes",
      ],
    },
    {
      title: "Motor Insurance Claims",
      points: [
        "Vehicle accident claims",
        "Total loss claims",
        "Theft claims",
        "Wrongful repudiation of claims",
        "Disputes regarding assessment of damages",
      ],
    },
    {
      title: "Property & Fire Insurance Claims",
      points: [
        "Fire and accidental damage",
        "Natural disasters and calamities",
        "Commercial property losses",
        "Residential property damage",
        "Business interruption claims",
      ],
    },
    {
      title: "Commercial & Business Insurance Claims",
      points: [
        "Industrial and commercial insurance policies",
        "Machinery and equipment claims",
        "Marine and transit insurance",
        "Professional indemnity insurance",
        "Other business-related insurance disputes",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm tracking-widest text-primary uppercase mb-2">Practice Areas</p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Types of Insurance Claims We Handle
            </h2>
            <div className="mt-4 h-1 w-16 bg-primary" />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <Reveal key={i}>
              <div className="border border-white/10 p-6 bg-white/5 hover:border-primary transition">
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 bg-primary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

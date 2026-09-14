import Reveal from "@/components/Reveal";

export default function InsuranceClaimsSection() {
  const sections = [
    {
      title: "Partition Suits",
      points: [
        "Disputes among co-owners, family members or legal heirs often arise regarding the division of jointly owned property. A Partition Suit enables a co-owner/co-sharer to seek effective legal division of property and obtain their rightful share.",
      ],
    },
    {
      title: "Trespassing and Illegal Occupation",
      points: [
        "Unauthorized entry, occupation or interference with property rights can lead to significant legal complications. Property owners have the right to seek legal remedies against trespassers and unlawful occupants.",
      ],
    },
    {
      title: "Title Disputes",
      points: [
        "A title dispute arises when ownership of a property is challenged or when multiple parties simultaneously claim rights over the same property. Such disputes often involve complex questions relating to rival ownership documents, inheritance, transfers and registrations.",
      ],
    },
    {
      title: "Recovery of Possession",
      points: [
        "When a person is unlawfully dispossessed of property or when possession is wrongfully withheld, legal proceedings may be initiated to recover possession through the courts.",
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
              Types of Property Disputes We Handle
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

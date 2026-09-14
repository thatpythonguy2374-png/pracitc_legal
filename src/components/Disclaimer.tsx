import Reveal from "@/components/Reveal";

type DisclaimerSectionProps = {
  title: string;
  disclaimer?: string;
};

export default function DisclaimerSection() {
  return (
    <section className="bg-secondary/30 py-12">
      <div>
        <Reveal>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="disclaimer-copy text-sm italic leading-relaxed text-muted-foreground">
              This page is intended solely for general informational purposes and should not be
              construed as legal advice or as creating an advocate-client relationship.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

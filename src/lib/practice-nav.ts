// Navigation-only lookup used by SiteHeader (menu) and the homepage
// (practice-area cards + contact form dropdown).
//
// This file does NOT hold page content anymore. Each practice area and
// topic now has its own standalone page file under src/routes/, e.g.
//   practice.civil-litigation.tsx
//   practice.civil-litigation.builder-buyer-disputes.tsx
// Edit content directly in those files. Only add/remove/rename entries
// here when you add a brand-new area or topic (so the menu + homepage
// cards + links stay in sync with the pages you create).

export type NavTopic = { slug: string; title: string; href: string };
export type NavArea = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  href: string;
  topics: NavTopic[];
};

export const practiceNav: NavArea[] = [
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    short: "Civil Litigation",
    desc: "Representation before trial courts, tribunals, and appellate forums in civil and commercial disputes.",
    href: "/practice/civil-litigation",
    topics: [
      {
        slug: "builder-buyer-disputes",
        title: "Builder Buyer Disputes",
        href: "/practice/civil-litigation/builder-buyer-disputes",
      },
      {
        slug: "insurance-claims",
        title: "Insurance Claims",
        href: "/practice/civil-litigation/insurance-claims",
      },
      {
        slug: "landlord-tenant",
        title: "Landlord Tenant",
        href: "/practice/civil-litigation/landlord-tenant",
      },
      {
        slug: "mcd-tribunal-matters",
        title: "MCD Tribunal Matters",
        href: "/practice/civil-litigation/mcd-tribunal-matters",
      },
      {
        slug: "probate-of-will",
        title: "Probate of Will",
        href: "/practice/civil-litigation/probate-of-will",
      },
      {
        slug: "property-disputes",
        title: "Property Disputes",
        href: "/practice/civil-litigation/property-disputes",
      },
      {
        slug: "public-nuisance-litigation",
        title: "Public Nuisance Litigation",
        href: "/practice/civil-litigation/public-nuisance-litigation",
      },
      {
        slug: "recovery-suits",
        title: "Recovery Suits",
        href: "/practice/civil-litigation/recovery-suits",
      },
      {
        slug: "rwa-election-matters",
        title: "RWA Election Matters",
        href: "/practice/civil-litigation/rwa-election-matters",
      },
      {
        slug: "succession-certificate",
        title: "Succession Certificate",
        href: "/practice/civil-litigation/succession-certificate",
      },
    
    ],
  },
  {
    slug: "matrimonial-matters",
    title: "Matrimonial Matters",
    short: "Matrimonial",
    desc: "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence.",
    href: "/practice/matrimonial-matters",
    topics: [
      {
        slug: "divorce-and-mutual-consent",
        title: "Divorce & Mutual Consent",
        href: "/practice/matrimonial-matters/divorce-and-mutual-consent",
      },
      {
        slug: "maintenance-and-alimony",
        title: "Maintenance & Alimony",
        href: "/practice/matrimonial-matters/maintenance-and-alimony",
      },
      {
        slug: "child-custody",
        title: "Child Custody",
        href: "/practice/matrimonial-matters/child-custody",
      },
      {
        slug: "domestic-violence",
        title: "Domestic Violence",
        href: "/practice/matrimonial-matters/domestic-violence",
      },
      {
        slug: "restitution-of-conjugal-rights",
        title: "Restitution of Conjugal Rights",
        href: "/practice/matrimonial-matters/restitution-of-conjugal-rights",
      },
      {
        slug: "nullity-of-marriage",
        title: "Nullity Of Marriage",
        href: "/practice/matrimonial-matters/nullity-of-marriage",
      },
    ],
  },
  {
    slug: "criminal-matters",
    title: "Criminal Matters",
    short: "Criminal",
    desc: "Criminal defence and representation in criminal proceedings before trial courts, appellate courts, and other competent judicial authorities.",
    href: "/practice/criminal-matters",
    topics: [
      {
        slug: "bail-and-anticipatory",
        title: "Bail & Anticipatory",
        href: "/practice/criminal-matters/bail-and-anticipatory",
      },
      {
        slug: "crimes-against-women",
        title: "Crimes Against Women",
        href: "/practice/criminal-matters/crimes-against-women",
      },
      {
        slug: "cyber-crimes-legal-representation",
        title: "Cyber Crimes Legal Representation",
        href: "/practice/criminal-matters/cyber-crimes-legal-representation",
      },
      {
        slug: "offence-against-the-human-body",
        title: "Offence Against The Human Body",
        href: "/practice/criminal-matters/offences-against-the-human-body",
      },
      {
        slug: "offences-aganist-property",
        title: "Offences Aganist Property",
        href: "/practice/criminal-matters/offences-aganist-property",
      },
      {
        slug: "criminal-appeals",
        title: "Criminal Appeals",
        href: "/practice/criminal-matters/criminal-appeals",
      },
      {
        slug: "economic-offences",
        title: "Economic Offences",
        href: "/practice/criminal-matters/economic-offences",
      },
      {
        slug: "white-collar-crimes",
        title: "White Collar Crimes",
        href: "/practice/criminal-matters/white-collar-crimes",
      },
    ],
  },
  {
    slug: "intellectual-property-rights",
    title: "Intellectual Property Rights",
    short: "IP",
    desc: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers.",
    href: "/practice/intellectual-property-rights",
    topics: [
      {
        slug: "intellectual-property",
        title: "Intellectual Property",
        href: "/practice/intellectual-property-rights/intellectual-property",
      },
      {
        slug: "patent-registration",
        title: "Patent Registration",
        href: "/practice/intellectual-property-rights/patent-registration",
      },
      {
        slug: "trademark-registration",
        title: "Trademark Registration",
        href: "/practice/intellectual-property-rights/trademark-registration",
      },
    ],
  },
  {
    slug: "ni-act",
    title: "NI Act",
    short: "IP",
    desc: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers.",
    href: "/practice/ni-act",
    topics: [],
  },
];

export const getNavArea = (slug: string) => practiceNav.find((a) => a.slug === slug);

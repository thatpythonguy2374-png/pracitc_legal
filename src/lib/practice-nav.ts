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
      { slug: "builder-buyer-disputes", title: "Builder Buyer Disputes", href: "/practice/civil-litigation/builder-buyer-disputes" },
      { slug: "insurance-claims", title: "Insurance Claims", href: "/practice/civil-litigation/insurance-claims" },
      { slug: "landlord-tenant", title: "Landlord Tenant", href: "/practice/civil-litigation/landlord-tenant" },
      { slug: "mcd-tribunal-matters", title: "MCD Tribunal Matters", href: "/practice/civil-litigation/mcd-tribunal-matters" },
      { slug: "probate-of-will", title: "Probate of Will", href: "/practice/civil-litigation/probate-of-will" },
      { slug: "property-disputes", title: "Property Disputes", href: "/practice/civil-litigation/property-disputes" },
      { slug: "public-nuisance-litigation", title: "Public Nuisance Litigation", href: "/practice/civil-litigation/public-nuisance-litigation" },
      { slug: "recovery-suits", title: "Recovery Suits", href: "/practice/civil-litigation/recovery-suits" },
      { slug: "rwa-election-matters", title: "RWA Election Matters", href: "/practice/civil-litigation/rwa-election-matters" },
      { slug: "probate-of-will-5", title: "Probate of Will", href: "/practice/civil-litigation/probate-of-will-5" }
    ],
  },
  {
    slug: "matrimonial-matters",
    title: "Matrimonial Matters",
    short: "Matrimonial",
    desc: "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence.",
    href: "/practice/matrimonial-matters",
    topics: [
      { slug: "divorce-and-mutual-consent", title: "Divorce & Mutual Consent", href: "/practice/matrimonial-matters/divorce-and-mutual-consent" },
      { slug: "maintenance-and-alimony", title: "Maintenance & Alimony", href: "/practice/matrimonial-matters/maintenance-and-alimony" },
      { slug: "child-custody", title: "Child Custody", href: "/practice/matrimonial-matters/child-custody" },
      { slug: "domestic-violence", title: "Domestic Violence", href: "/practice/matrimonial-matters/domestic-violence" }
    ],
  },
  {
    slug: "motor-accident-claims",
    title: "Motor Accident Claims",
    short: "Motor Accident",
    desc: "Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts.",
    href: "/practice/motor-accident-claims",
    topics: [
      { slug: "compensation-claims", title: "Compensation Claims", href: "/practice/motor-accident-claims/compensation-claims" },
      { slug: "insurance-disputes", title: "Insurance Disputes", href: "/practice/motor-accident-claims/insurance-disputes" },
      { slug: "hit-and-run-cases", title: "Hit & Run Cases", href: "/practice/motor-accident-claims/hit-and-run-cases" },
      { slug: "mact-appeals", title: "MACT Appeals", href: "/practice/motor-accident-claims/mact-appeals" }
    ],
  },
  {
    slug: "property-rights",
    title: "Property Rights",
    short: "Property",
    desc: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers.",
    href: "/practice/property-rights",
    topics: [
      { slug: "title-and-ownership-disputes", title: "Title & Ownership Disputes", href: "/practice/property-rights/title-and-ownership-disputes" },
      { slug: "partition-suits", title: "Partition Suits", href: "/practice/property-rights/partition-suits" },
      { slug: "tenancy-and-eviction", title: "Tenancy & Eviction", href: "/practice/property-rights/tenancy-and-eviction" },
      { slug: "land-acquisition", title: "Land Acquisition", href: "/practice/property-rights/land-acquisition" }
    ],
  }
];

export const getNavArea = (slug: string) =>
  practiceNav.find((a) => a.slug === slug);

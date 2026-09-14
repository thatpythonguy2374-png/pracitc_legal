import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-lBYwhizs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DisclaimerModal() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const lastSeen = localStorage.getItem("disclaimerTime");
		if (!lastSeen || Date.now() - lastSeen > 1440 * 60 * 1e3) setTimeout(() => setOpen(true), 400);
	}, []);
	const handleAccept = () => {
		localStorage.setItem("disclaimerTime", Date.now());
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 z-50 flex items-center justify-center px-4",
		initial: {
			opacity: 0,
			scale: .95,
			y: 40
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 40
		},
		transition: { duration: .4 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl w-full bg-[var(--ink)] border border-white/10 p-8 shadow-xl rounded-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold mb-4 text-white",
					children: "Disclaimer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-white/70 text-sm leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In accordance with the rules and regulations prescribed by the Bar Council of India, advocates and law firms are prohibited from soliciting work or advertising their services." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By accessing this website, you acknowledge and confirm that:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal pl-5 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "You are accessing this website voluntarily and solely for the purpose of obtaining information about our practice, areas of expertise, and legal services." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Neither this website nor any of its contents constitutes an advertisement, solicitation, invitation, inducement, or personal communication intended to attract clients or legal work." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No lawyer, partner, associate, employee, or representative of this firm has approached, contacted, or otherwise encouraged you to visit this website for the purpose of seeking legal services." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Any information made available on this website is provided exclusively for general informational purposes and should not be construed as legal advice." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your use of this website, including any communication through it, does not create an advocate-client, attorney-client, or fiduciary relationship between you and the firm." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Any materials, documents, publications, or resources downloaded from this website are obtained at your own discretion and initiative." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "While reasonable efforts are made to ensure the accuracy and currency of the information provided, we do not warrant its completeness, reliability, or suitability for any specific purpose." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We shall not be responsible for any loss, damage, or consequences arising from reliance upon the information contained on this website." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pt-2",
							children: [
								"By clicking ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white font-medium",
									children: "\"I Agree\""
								}),
								" or continuing to access this website, you confirm that you have read, understood, and accepted the terms of this disclaimer."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleAccept,
						className: "bg-primary text-primary-foreground px-5 py-2 text-sm hover:opacity-90 transition",
						children: "I Agree"
					})
				})
			]
		})
	})] }) });
}
var styles_default = "/assets/styles-DAh1ZsKL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$29 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclaimerModal, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$29.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$28 = () => import("./routes-Bt-3r9xp.mjs");
var Route$28 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Practic Legal — Full-Service Law Firm" },
		{
			name: "description",
			content: "Practic Legal is a full-service law firm delivering strategic legal counsel across corporate, finance, disputes, and ESG practice areas."
		},
		{
			property: "og:title",
			content: "Practic Legal — Full-Service Law Firm"
		},
		{
			property: "og:description",
			content: "Strategic legal counsel across corporate, finance, disputes, and ESG practice areas."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./about-BC_4G29u.mjs");
var Route$27 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Practic Legal" },
		{
			name: "description",
			content: "Learn about Practic Legal — our story, values, leadership, and three decades of full-service legal counsel."
		},
		{
			property: "og:title",
			content: "About Us — Practic Legal"
		},
		{
			property: "og:description",
			content: "Our story, values, and leadership across three decades of full-service legal counsel."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./contact-CsE0vNSn.mjs");
var Route$26 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Practic Legal | Speak With Our Legal Experts" }, {
		name: "description",
		content: "Contact Practic Legal for expert legal advice across litigation, corporate law, consumer disputes, and real estate matters."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./civil-litigation-DneUorFw.mjs");
var Route$25 = createFileRoute("/practice/civil-litigation/")({
	head: () => ({ meta: [
		{ title: "Civil Litigation — Practic Legal" },
		{
			name: "description",
			content: "Representation before trial courts, tribunals, and appellate forums in civil and commercial disputes."
		},
		{
			property: "og:title",
			content: "Civil Litigation — Practic Legal"
		},
		{
			property: "og:description",
			content: "Representation before trial courts, tribunals, and appellate forums in civil and commercial disputes."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./builder-buyer-disputes-BoTELl2p.mjs");
var Route$24 = createFileRoute("/practice/civil-litigation/builder-buyer-disputes")({
	head: () => ({ meta: [
		{ title: "Builder Buyer Disputes — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Protecting homebuyers from delays in possession, construction defects, builder misconduct, contractual disputes, and unfair trade practices through effective legal representation and consumer rights enforcement"
		},
		{
			property: "og:title",
			content: "Builder Buyer Disputes — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Protecting homebuyers from delays in possession, construction defects, builder misconduct, contractual disputes, and unfair trade practices through effective legal representation and consumer rights enforcement"
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./insurance-claims-Cvj2dyRp.mjs");
var Route$23 = createFileRoute("/practice/civil-litigation/insurance-claims")({
	head: () => ({ meta: [
		{ title: "Insurance Claims — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Urgent applications to preserve the status quo, restrain third parties, and protect assets pending trial."
		},
		{
			property: "og:title",
			content: "Insurance Claims — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Urgent applications to preserve the status quo, restrain third parties, and protect assets pending trial."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./landlord-tenant-Dy_HOoio.mjs");
var Route$22 = createFileRoute("/practice/civil-litigation/landlord-tenant")({
	head: () => ({ meta: [
		{ title: "Landlord Tenant — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Appellate advocacy before district courts, High Courts, and the Supreme Court on questions of fact and law."
		},
		{
			property: "og:title",
			content: "Landlord Tenant — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Appellate advocacy before district courts, High Courts, and the Supreme Court on questions of fact and law."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./mcd-tribunal-matters-uLV_UpQd.mjs");
var Route$21 = createFileRoute("/practice/civil-litigation/mcd-tribunal-matters")({
	head: () => ({ meta: [
		{ title: "MCD Tribunal Matters — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "MCD Tribunal Matters — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./probate-of-will-DrjZ4oXc.mjs");
var Route$20 = createFileRoute("/practice/civil-litigation/probate-of-will")({
	head: () => ({ meta: [
		{ title: "Probate of Will — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "Probate of Will — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./probate-of-will-4-B5-yZLSf.mjs");
var Route$19 = createFileRoute("/practice/civil-litigation/probate-of-will-4")({
	head: () => ({ meta: [
		{ title: "Probate of Will — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "Probate of Will — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./probate-of-will-5-B8E1QaMx.mjs");
var Route$18 = createFileRoute("/practice/civil-litigation/probate-of-will-5")({
	head: () => ({ meta: [
		{ title: "Probate of Will — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "Probate of Will — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./property-disputes-C4B8DdQ8.mjs");
var Route$17 = createFileRoute("/practice/civil-litigation/property-disputes")({
	head: () => ({ meta: [
		{ title: "Property Disputes — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "Property Disputes — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./public-nuisance-litigation-cr9Bnyb5.mjs");
var Route$16 = createFileRoute("/practice/civil-litigation/public-nuisance-litigation")({
	head: () => ({ meta: [
		{ title: "Public Nuisance Litigation — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "Public Nuisance Litigation — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./recovery-suits-BuP1H_5B.mjs");
var Route$15 = createFileRoute("/practice/civil-litigation/recovery-suits")({
	head: () => ({ meta: [
		{ title: "Recovery Suits — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "Recovery Suits — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./matrimonial-matters-BUFgZbNR.mjs");
var Route$14 = createFileRoute("/practice/matrimonial-matters/")({
	head: () => ({ meta: [
		{ title: "Matrimonial Matters — Practic Legal" },
		{
			name: "description",
			content: "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence."
		},
		{
			property: "og:title",
			content: "Matrimonial Matters — Practic Legal"
		},
		{
			property: "og:description",
			content: "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./child-custody-QPUyQHDh.mjs");
var Route$13 = createFileRoute("/practice/matrimonial-matters/child-custody")({
	head: () => ({ meta: [
		{ title: "Child Custody — Matrimonial Matters | Practic Legal" },
		{
			name: "description",
			content: "Custody, guardianship, and visitation matters guided always by the welfare of the child."
		},
		{
			property: "og:title",
			content: "Child Custody — Matrimonial Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Custody, guardianship, and visitation matters guided always by the welfare of the child."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./divorce-and-mutual-consent-CpCpLzTm.mjs");
var Route$12 = createFileRoute("/practice/matrimonial-matters/divorce-and-mutual-consent")({
	head: () => ({ meta: [
		{ title: "Divorce & Mutual Consent — Matrimonial Matters | Practic Legal" },
		{
			name: "description",
			content: "Contested and mutual-consent divorce petitions handled with discretion and a focus on settlement."
		},
		{
			property: "og:title",
			content: "Divorce & Mutual Consent — Matrimonial Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Contested and mutual-consent divorce petitions handled with discretion and a focus on settlement."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./domestic-violence-DHcc6ScY.mjs");
var Route$11 = createFileRoute("/practice/matrimonial-matters/domestic-violence")({
	head: () => ({ meta: [
		{ title: "Domestic Violence — Matrimonial Matters | Practic Legal" },
		{
			name: "description",
			content: "Protection, residence, and monetary relief under the Protection of Women from Domestic Violence Act."
		},
		{
			property: "og:title",
			content: "Domestic Violence — Matrimonial Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Protection, residence, and monetary relief under the Protection of Women from Domestic Violence Act."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./maintenance-and-alimony-CpVeFGfI.mjs");
var Route$10 = createFileRoute("/practice/matrimonial-matters/maintenance-and-alimony")({
	head: () => ({ meta: [
		{ title: "Maintenance & Alimony — Matrimonial Matters | Practic Legal" },
		{
			name: "description",
			content: "Claims and defences for interim maintenance, permanent alimony, and enforcement of maintenance orders."
		},
		{
			property: "og:title",
			content: "Maintenance & Alimony — Matrimonial Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Claims and defences for interim maintenance, permanent alimony, and enforcement of maintenance orders."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./motor-accident-claims-tyPCIaPQ.mjs");
var Route$9 = createFileRoute("/practice/motor-accident-claims/")({
	head: () => ({ meta: [
		{ title: "Motor Accident Claims — Practic Legal" },
		{
			name: "description",
			content: "Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts."
		},
		{
			property: "og:title",
			content: "Motor Accident Claims — Practic Legal"
		},
		{
			property: "og:description",
			content: "Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./compensation-claims-DVK-iVlr.mjs");
var Route$8 = createFileRoute("/practice/motor-accident-claims/compensation-claims")({
	head: () => ({ meta: [
		{ title: "Compensation Claims — Motor Accident Claims | Practic Legal" },
		{
			name: "description",
			content: "End-to-end handling of MACT claims for injury, disability, and loss of life."
		},
		{
			property: "og:title",
			content: "Compensation Claims — Motor Accident Claims | Practic Legal"
		},
		{
			property: "og:description",
			content: "End-to-end handling of MACT claims for injury, disability, and loss of life."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./hit-and-run-cases-DvtKMmPt.mjs");
var Route$7 = createFileRoute("/practice/motor-accident-claims/hit-and-run-cases")({
	head: () => ({ meta: [
		{ title: "Hit & Run Cases — Motor Accident Claims | Practic Legal" },
		{
			name: "description",
			content: "Solatium fund claims and investigation support where the offending vehicle is untraced."
		},
		{
			property: "og:title",
			content: "Hit & Run Cases — Motor Accident Claims | Practic Legal"
		},
		{
			property: "og:description",
			content: "Solatium fund claims and investigation support where the offending vehicle is untraced."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./insurance-disputes-CF67dOFs.mjs");
var Route$6 = createFileRoute("/practice/motor-accident-claims/insurance-disputes")({
	head: () => ({ meta: [
		{ title: "Insurance Disputes — Motor Accident Claims | Practic Legal" },
		{
			name: "description",
			content: "Contesting repudiation, policy exclusions, and delay in settlement by insurers."
		},
		{
			property: "og:title",
			content: "Insurance Disputes — Motor Accident Claims | Practic Legal"
		},
		{
			property: "og:description",
			content: "Contesting repudiation, policy exclusions, and delay in settlement by insurers."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./mact-appeals-CQ4pTLTq.mjs");
var Route$5 = createFileRoute("/practice/motor-accident-claims/mact-appeals")({
	head: () => ({ meta: [
		{ title: "MACT Appeals — Motor Accident Claims | Practic Legal" },
		{
			name: "description",
			content: "Appeals for enhancement of awards, and defence of appeals filed by insurers."
		},
		{
			property: "og:title",
			content: "MACT Appeals — Motor Accident Claims | Practic Legal"
		},
		{
			property: "og:description",
			content: "Appeals for enhancement of awards, and defence of appeals filed by insurers."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./property-rights-B85nzVkS.mjs");
var Route$4 = createFileRoute("/practice/property-rights/")({
	head: () => ({ meta: [
		{ title: "Property Rights — Practic Legal" },
		{
			name: "description",
			content: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers."
		},
		{
			property: "og:title",
			content: "Property Rights — Practic Legal"
		},
		{
			property: "og:description",
			content: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./land-acquisition-Raq-2wdJ.mjs");
var Route$3 = createFileRoute("/practice/property-rights/land-acquisition")({
	head: () => ({ meta: [
		{ title: "Land Acquisition — Property Rights | Practic Legal" },
		{
			name: "description",
			content: "Challenging acquisition proceedings and pursuing fair, enhanced compensation."
		},
		{
			property: "og:title",
			content: "Land Acquisition — Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "Challenging acquisition proceedings and pursuing fair, enhanced compensation."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./partition-suits-CrlB4NEj.mjs");
var Route$2 = createFileRoute("/practice/property-rights/partition-suits")({
	head: () => ({ meta: [
		{ title: "Partition Suits — Property Rights | Practic Legal" },
		{
			name: "description",
			content: "Division of ancestral and jointly held property, including succession and inheritance disputes."
		},
		{
			property: "og:title",
			content: "Partition Suits — Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "Division of ancestral and jointly held property, including succession and inheritance disputes."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tenancy-and-eviction-C6b1TuOP.mjs");
var Route$1 = createFileRoute("/practice/property-rights/tenancy-and-eviction")({
	head: () => ({ meta: [
		{ title: "Tenancy & Eviction — Property Rights | Practic Legal" },
		{
			name: "description",
			content: "Landlord and tenant disputes under rent control statutes and lease agreements."
		},
		{
			property: "og:title",
			content: "Tenancy & Eviction — Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "Landlord and tenant disputes under rent control statutes and lease agreements."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./title-and-ownership-disputes-Dt2ZVfhx.mjs");
var Route = createFileRoute("/practice/property-rights/title-and-ownership-disputes")({
	head: () => ({ meta: [
		{ title: "Title & Ownership Disputes — Property Rights | Practic Legal" },
		{
			name: "description",
			content: "Establishing and defending title, and clearing encumbrances on immovable property."
		},
		{
			property: "og:title",
			content: "Title & Ownership Disputes — Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "Establishing and defending title, and clearing encumbrances on immovable property."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$29
});
var AboutRoute = Route$27.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$29
});
var ContactRoute = Route$26.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationIndexRoute = Route$25.update({
	id: "/practice/civil-litigation/",
	path: "/practice/civil-litigation/",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationBuilderBuyerDisputesRoute = Route$24.update({
	id: "/practice/civil-litigation/builder-buyer-disputes",
	path: "/practice/civil-litigation/builder-buyer-disputes",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationInsuranceClaimsRoute = Route$23.update({
	id: "/practice/civil-litigation/insurance-claims",
	path: "/practice/civil-litigation/insurance-claims",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationLandlordTenantRoute = Route$22.update({
	id: "/practice/civil-litigation/landlord-tenant",
	path: "/practice/civil-litigation/landlord-tenant",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationMcdTribunalMattersRoute = Route$21.update({
	id: "/practice/civil-litigation/mcd-tribunal-matters",
	path: "/practice/civil-litigation/mcd-tribunal-matters",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationProbateOfWillRoute = Route$20.update({
	id: "/practice/civil-litigation/probate-of-will",
	path: "/practice/civil-litigation/probate-of-will",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationProbateOfWill4Route = Route$19.update({
	id: "/practice/civil-litigation/probate-of-will-4",
	path: "/practice/civil-litigation/probate-of-will-4",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationProbateOfWill5Route = Route$18.update({
	id: "/practice/civil-litigation/probate-of-will-5",
	path: "/practice/civil-litigation/probate-of-will-5",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationPropertyDisputesRoute = Route$17.update({
	id: "/practice/civil-litigation/property-disputes",
	path: "/practice/civil-litigation/property-disputes",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationPublicNuisanceLitigationRoute = Route$16.update({
	id: "/practice/civil-litigation/public-nuisance-litigation",
	path: "/practice/civil-litigation/public-nuisance-litigation",
	getParentRoute: () => Route$29
});
var PracticeCivilLitigationRecoverySuitsRoute = Route$15.update({
	id: "/practice/civil-litigation/recovery-suits",
	path: "/practice/civil-litigation/recovery-suits",
	getParentRoute: () => Route$29
});
var PracticeMatrimonialMattersIndexRoute = Route$14.update({
	id: "/practice/matrimonial-matters/",
	path: "/practice/matrimonial-matters/",
	getParentRoute: () => Route$29
});
var PracticeMatrimonialMattersChildCustodyRoute = Route$13.update({
	id: "/practice/matrimonial-matters/child-custody",
	path: "/practice/matrimonial-matters/child-custody",
	getParentRoute: () => Route$29
});
var PracticeMatrimonialMattersDivorceAndMutualConsentRoute = Route$12.update({
	id: "/practice/matrimonial-matters/divorce-and-mutual-consent",
	path: "/practice/matrimonial-matters/divorce-and-mutual-consent",
	getParentRoute: () => Route$29
});
var PracticeMatrimonialMattersDomesticViolenceRoute = Route$11.update({
	id: "/practice/matrimonial-matters/domestic-violence",
	path: "/practice/matrimonial-matters/domestic-violence",
	getParentRoute: () => Route$29
});
var PracticeMatrimonialMattersMaintenanceAndAlimonyRoute = Route$10.update({
	id: "/practice/matrimonial-matters/maintenance-and-alimony",
	path: "/practice/matrimonial-matters/maintenance-and-alimony",
	getParentRoute: () => Route$29
});
var PracticeMotorAccidentClaimsIndexRoute = Route$9.update({
	id: "/practice/motor-accident-claims/",
	path: "/practice/motor-accident-claims/",
	getParentRoute: () => Route$29
});
var PracticeMotorAccidentClaimsCompensationClaimsRoute = Route$8.update({
	id: "/practice/motor-accident-claims/compensation-claims",
	path: "/practice/motor-accident-claims/compensation-claims",
	getParentRoute: () => Route$29
});
var PracticeMotorAccidentClaimsHitAndRunCasesRoute = Route$7.update({
	id: "/practice/motor-accident-claims/hit-and-run-cases",
	path: "/practice/motor-accident-claims/hit-and-run-cases",
	getParentRoute: () => Route$29
});
var PracticeMotorAccidentClaimsInsuranceDisputesRoute = Route$6.update({
	id: "/practice/motor-accident-claims/insurance-disputes",
	path: "/practice/motor-accident-claims/insurance-disputes",
	getParentRoute: () => Route$29
});
var PracticeMotorAccidentClaimsMactAppealsRoute = Route$5.update({
	id: "/practice/motor-accident-claims/mact-appeals",
	path: "/practice/motor-accident-claims/mact-appeals",
	getParentRoute: () => Route$29
});
var PracticePropertyRightsIndexRoute = Route$4.update({
	id: "/practice/property-rights/",
	path: "/practice/property-rights/",
	getParentRoute: () => Route$29
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PracticeCivilLitigationBuilderBuyerDisputesRoute,
	PracticeCivilLitigationInsuranceClaimsRoute,
	PracticeCivilLitigationLandlordTenantRoute,
	PracticeCivilLitigationMcdTribunalMattersRoute,
	PracticeCivilLitigationProbateOfWillRoute,
	PracticeCivilLitigationProbateOfWill4Route,
	PracticeCivilLitigationProbateOfWill5Route,
	PracticeCivilLitigationPropertyDisputesRoute,
	PracticeCivilLitigationPublicNuisanceLitigationRoute,
	PracticeCivilLitigationRecoverySuitsRoute,
	PracticeMatrimonialMattersChildCustodyRoute,
	PracticeMatrimonialMattersDivorceAndMutualConsentRoute,
	PracticeMatrimonialMattersDomesticViolenceRoute,
	PracticeMatrimonialMattersMaintenanceAndAlimonyRoute,
	PracticeMotorAccidentClaimsCompensationClaimsRoute,
	PracticeMotorAccidentClaimsHitAndRunCasesRoute,
	PracticeMotorAccidentClaimsInsuranceDisputesRoute,
	PracticeMotorAccidentClaimsMactAppealsRoute,
	PracticePropertyRightsLandAcquisitionRoute: Route$3.update({
		id: "/practice/property-rights/land-acquisition",
		path: "/practice/property-rights/land-acquisition",
		getParentRoute: () => Route$29
	}),
	PracticePropertyRightsPartitionSuitsRoute: Route$2.update({
		id: "/practice/property-rights/partition-suits",
		path: "/practice/property-rights/partition-suits",
		getParentRoute: () => Route$29
	}),
	PracticePropertyRightsTenancyAndEvictionRoute: Route$1.update({
		id: "/practice/property-rights/tenancy-and-eviction",
		path: "/practice/property-rights/tenancy-and-eviction",
		getParentRoute: () => Route$29
	}),
	PracticePropertyRightsTitleAndOwnershipDisputesRoute: Route.update({
		id: "/practice/property-rights/title-and-ownership-disputes",
		path: "/practice/property-rights/title-and-ownership-disputes",
		getParentRoute: () => Route$29
	}),
	PracticeCivilLitigationIndexRoute,
	PracticeMatrimonialMattersIndexRoute,
	PracticeMotorAccidentClaimsIndexRoute,
	PracticePropertyRightsIndexRoute
};
var routeTree = Route$29._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

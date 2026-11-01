import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BiIv43oi.js
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
		className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 z-[100] flex items-center justify-center px-3 py-4 sm:px-4",
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
			className: "flex max-h-[90svh] w-full max-w-xl flex-col bg-[var(--ink)] border border-white/10 p-5 shadow-xl rounded-md sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg sm:text-xl font-bold mb-4 text-white",
					children: "Disclaimer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 text-white/70 text-sm leading-relaxed space-y-4 overflow-y-auto overscroll-contain pr-2",
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
					className: "mt-5 flex shrink-0 justify-end sm:mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleAccept,
						className: "w-full bg-primary text-primary-foreground px-5 py-3 text-sm hover:opacity-90 transition sm:w-auto sm:py-2",
						children: "I Agree"
					})
				})
			]
		})
	})] }) });
}
var styles_default = "/assets/styles-BRGCxvbS.css";
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
var Route$35 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Practic Legal — Full-Service Law Firm" },
			{
				name: "description",
				content: "Practic Legal is a full-service law firm delivering strategic legal counsel across corporate, finance, disputes, and ESG practice areas."
			},
			{
				name: "author",
				content: "Practic Legal"
			},
			{
				property: "og:title",
				content: "Practic Legal — Full-Service Law Firm"
			},
			{
				property: "og:description",
				content: "Strategic legal counsel across corporate, finance, disputes, and ESG practice areas."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "https://yourdomain.com/og-image.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
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
	const { queryClient } = Route$35.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$34 = () => import("./routes-BzsAVzfV.mjs");
var Route$34 = createFileRoute("/")({
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
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./about-CA3WMB3K.mjs");
var Route$33 = createFileRoute("/about")({
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
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./contact-Co5uI6cj.mjs");
var Route$32 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Practic Legal | Speak With Our Legal Experts" }, {
		name: "description",
		content: "Contact Practic Legal for expert legal advice across litigation, corporate law, consumer disputes, and real estate matters."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./civil-litigation-C3DMn0g_.mjs");
var Route$31 = createFileRoute("/practice/civil-litigation/")({
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
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./builder-buyer-disputes-D2ffy_4H.mjs");
var Route$30 = createFileRoute("/practice/civil-litigation/builder-buyer-disputes")({
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
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./insurance-claims-Dujt02fc.mjs");
var Route$29 = createFileRoute("/practice/civil-litigation/insurance-claims")({
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
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./landlord-tenant-D9-i0FcE.mjs");
var Route$28 = createFileRoute("/practice/civil-litigation/landlord-tenant")({
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
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./mcd-tribunal-matters-CgNIDFfW.mjs");
var Route$27 = createFileRoute("/practice/civil-litigation/mcd-tribunal-matters")({
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
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./probate-of-will-BA4RKqTP.mjs");
var Route$26 = createFileRoute("/practice/civil-litigation/probate-of-will")({
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
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./property-disputes-Bmm-HY6e.mjs");
var Route$25 = createFileRoute("/practice/civil-litigation/property-disputes")({
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
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./public-nuisance-litigation-GebpVPXn.mjs");
var Route$24 = createFileRoute("/practice/civil-litigation/public-nuisance-litigation")({
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
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./recovery-suits-DjBNNo_z.mjs");
var Route$23 = createFileRoute("/practice/civil-litigation/recovery-suits")({
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
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./rwa-election-matters-7aEEoKQz.mjs");
var Route$22 = createFileRoute("/practice/civil-litigation/rwa-election-matters")({
	head: () => ({ meta: [
		{ title: "RWA Election Matters — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Turning decrees into results through attachment, sale, garnishee, and enforcement strategy."
		},
		{
			property: "og:title",
			content: "RWA Election Matters — Civil Litigation | Practic Legal"
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
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./succession-certificate-I2_Y607l.mjs");
var Route$21 = createFileRoute("/practice/civil-litigation/succession-certificate")({
	head: () => ({ meta: [
		{ title: "Succession Certificate — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "The death of a family member often leaves legal and financial matters that require immediate attention"
		},
		{
			property: "og:title",
			content: "Succession Certificate — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "The death of a family member often leaves legal and financial matters that require immediate attention"
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
var $$splitComponentImporter$20 = () => import("./criminal-matters-DOui6NYC.mjs");
var Route$20 = createFileRoute("/practice/criminal-matters/")({
	head: () => ({ meta: [
		{ title: "Criminal Matters — Practic Legal" },
		{
			name: "description",
			content: "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence."
		},
		{
			property: "og:title",
			content: "Criminal Matters — Practic Legal"
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
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./bail-and-anticipatory-C1v9OKMH.mjs");
var Route$19 = createFileRoute("/practice/criminal-matters/bail-and-anticipatory")({
	head: () => ({ meta: [
		{ title: "Bail & Anticipatory — Criminal Matters | Practic Legal" },
		{
			name: "description",
			content: "Criminal defence, bail and anticipatory bail applications, and representation in criminal proceedings before trial courts, appellate courts, and other competent authorities."
		},
		{
			property: "og:title",
			content: "Bail & Anticipatory — Criminal Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Criminal defence, bail and anticipatory bail applications, and representation in criminal proceedings before trial courts, appellate courts, and other competent authorities."
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
var $$splitComponentImporter$18 = () => import("./crimes-against-women-BeBmZLXT.mjs");
var Route$18 = createFileRoute("/practice/criminal-matters/crimes-against-women")({
	head: () => ({ meta: [
		{ title: "Crimes Aganist Women — Criminal Matters | Practic Legal" },
		{
			name: "description",
			content: "Legal assistance in crimes against women, including domestic violence, harassment, cruelty, dowry-related offences, and representation before trial and appellate courts."
		},
		{
			property: "og:title",
			content: "Crimes Aganist Women — Criminal Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Legal assistance in crimes against women, including domestic violence, harassment, cruelty, dowry-related offences, and representation before trial and appellate courts."
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
var $$splitComponentImporter$17 = () => import("./criminal-appeals-unPtalSC.mjs");
var Route$17 = createFileRoute("/practice/criminal-matters/criminal-appeals")({
	head: () => ({ meta: [
		{ title: "Criminal Appeals — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: " A judgment of a criminal court does not entail end of legal proceedings rather the law provides various appellate and revisional remedies to challenge convictions,"
		},
		{
			property: "og:title",
			content: "Criminal Appeals — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: " A judgment of a criminal court does not entail end of legal proceedings rather the law provides various appellate and revisional remedies to challenge convictions."
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
var $$splitComponentImporter$16 = () => import("./cyber-crimes-legal-representation-vlLl3zdS.mjs");
var Route$16 = createFileRoute("/practice/criminal-matters/cyber-crimes-legal-representation")({
	head: () => ({ meta: [
		{ title: "Cyber Crimes — Criminal Matters | Practic Legal" },
		{
			name: "description",
			content: "Legal assistance and representation in cyber crime matters, including online offences, cyber fraud, hacking, identity theft, and other technology-related crimes before competent authorities and courts."
		},
		{
			property: "og:title",
			content: "Cyber Crimes — Criminal Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Legal assistance and representation in cyber crime matters, including online offences, cyber fraud, hacking, identity theft, and other technology-related crimes before competent authorities and courts."
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
var $$splitComponentImporter$15 = () => import("./economic-offences-XHRCx_Wh.mjs");
var Route$15 = createFileRoute("/practice/criminal-matters/economic-offences")({
	head: () => ({ meta: [
		{ title: "Economic Offences — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Economic offences involve financial misconduct, fraud, misappropriation of funds and violations of laws governing commercial and financial transactions."
		},
		{
			property: "og:title",
			content: "Economic Offences — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Economic offences involve financial misconduct, fraud, misappropriation of funds and violations of laws governing commercial and financial transactions."
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
var $$splitComponentImporter$14 = () => import("./offences-against-the-human-body-D5vmMYWe.mjs");
var Route$14 = createFileRoute("/practice/criminal-matters/offences-against-the-human-body")({
	head: () => ({ meta: [
		{ title: "Offences Aganist The Human Body — Criminal Matters | Practic Legal" },
		{
			name: "description",
			content: "Offences against the human body are among the most serious offences under criminal law, as they directly affect an individual’s life, physical integrity, personal liberty and dignity. "
		},
		{
			property: "og:title",
			content: "Offences Aganist The Human Body — Criminal Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Offences against the human body are among the most serious offences under criminal law, as they directly affect an individual’s life, physical integrity, personal liberty and dignity. "
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
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./offences-aganist-property-rJwmyfM4.mjs");
var Route$13 = createFileRoute("/practice/criminal-matters/offences-aganist-property")({
	head: () => ({ meta: [
		{ title: "Offences Aganist Property — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "Property-related offences can have significant financial and legal consequences for individuals, businesses and institutions."
		},
		{
			property: "og:title",
			content: "Offences Aganist Property — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "Property-related offences can have significant financial and legal consequences for individuals, businesses and institutions."
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
var $$splitComponentImporter$12 = () => import("./white-collar-crimes-BGL8Vzzd.mjs");
var Route$12 = createFileRoute("/practice/criminal-matters/white-collar-crimes")({
	head: () => ({ meta: [
		{ title: "White Collar Crimes — Civil Litigation | Practic Legal" },
		{
			name: "description",
			content: "White Collar Crimes are non-violent offences typically involving financial fraud, breach of trust, forgery, corporate misconduct and economic deception."
		},
		{
			property: "og:title",
			content: "White Collar Crim — Civil Litigation | Practic Legal"
		},
		{
			property: "og:description",
			content: "White Collar Crimes are non-violent offences typically involving financial fraud, breach of trust, forgery, corporate misconduct and economic deception."
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
var $$splitComponentImporter$11 = () => import("./intellectual-property-rights-D4p1UJI5.mjs");
var Route$11 = createFileRoute("/practice/intellectual-property-rights/")({
	head: () => ({ meta: [
		{ title: " Intellectual Property Rights — Practic Legal" },
		{
			name: "description",
			content: "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums."
		},
		{
			property: "og:title",
			content: "Property Rights — Practic Legal"
		},
		{
			property: "og:description",
			content: "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums."
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
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./intellectual-property-C7UqbHhA.mjs");
var Route$10 = createFileRoute("/practice/intellectual-property-rights/intellectual-property")({
	head: () => ({ meta: [
		{ title: "Intellectual Property — Intellectual Property Rights | Practic Legal" },
		{
			name: "description",
			content: "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums."
		},
		{
			property: "og:title",
			content: "Intellectual Property — Intellectual Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums."
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
var $$splitComponentImporter$9 = () => import("./patent-registration-BPvBLSeF.mjs");
var Route$9 = createFileRoute("/practice/intellectual-property-rights/patent-registration")({
	head: () => ({ meta: [
		{ title: "Patent Registration — Intellectual Property Rights | Practic Legal" },
		{
			name: "description",
			content: "Innovation is a valuable business asset. Whether you are an inventor, entrepreneur, startup, researcher or company, protecting your invention is essential to preserving your competitive advantage."
		},
		{
			property: "og:title",
			content: "Patent Registration — Intellectual Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "Innovation is a valuable business asset. Whether you are an inventor, entrepreneur, startup, researcher or company, protecting your invention is essential to preserving your competitive advantage."
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
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./trademark-registration-IUB3m6Mv.mjs");
var Route$8 = createFileRoute("/practice/intellectual-property-rights/trademark-registration")({
	head: () => ({ meta: [
		{ title: "Trademark Registration — Intellectual Property Rights | Practic Legal" },
		{
			name: "description",
			content: "A trademark is one of the most valuable assets of any business. It distinguishes your goods or services from those of others and helps build brand recognition, customer trust and commercial goodwill."
		},
		{
			property: "og:title",
			content: "Trademark Registration — Intellectual Property Rights | Practic Legal"
		},
		{
			property: "og:description",
			content: "A trademark is one of the most valuable assets of any business. It distinguishes your goods or services from those of others and helps build brand recognition, customer trust and commercial goodwill."
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
var $$splitComponentImporter$7 = () => import("./matrimonial-matters-C0a22h2b.mjs");
var Route$7 = createFileRoute("/practice/matrimonial-matters/")({
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
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./child-custody-CrmVgI5J.mjs");
var Route$6 = createFileRoute("/practice/matrimonial-matters/child-custody")({
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
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./divorce-and-mutual-consent-F0CpWqbn.mjs");
var Route$5 = createFileRoute("/practice/matrimonial-matters/divorce-and-mutual-consent")({
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./domestic-violence-BlXu2Mc2.mjs");
var Route$4 = createFileRoute("/practice/matrimonial-matters/domestic-violence")({
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./maintenance-and-alimony-D8Lk_X3Y.mjs");
var Route$3 = createFileRoute("/practice/matrimonial-matters/maintenance-and-alimony")({
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
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./nullity-of-marriage-BNSJjcPX.mjs");
var Route$2 = createFileRoute("/practice/matrimonial-matters/nullity-of-marriage")({
	head: () => ({ meta: [
		{ title: "Nullity Of Marriage — Matrimonial Matters | Practic Legal" },
		{
			name: "description",
			content: "Nullity of marriage, or annulment, is a legal declaration by a court stating that a marriage never legally existed."
		},
		{
			property: "og:title",
			content: "Nullity Of Marriage — Matrimonial Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Nullity of marriage, or annulment, is a legal declaration by a court stating that a marriage never legally existed."
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
var $$splitComponentImporter$1 = () => import("./restitution-of-conjugal-rights-Bbv5U6rm.mjs");
var Route$1 = createFileRoute("/practice/matrimonial-matters/restitution-of-conjugal-rights")({
	head: () => ({ meta: [
		{ title: "Restitution of Conjugal Rights — Matrimonial Matters | Practic Legal" },
		{
			name: "description",
			content: "Restitution of conjugal rights is a legal remedy that orders a deserting spouse to return to the matrimonial home and resume cohabitation"
		},
		{
			property: "og:title",
			content: "Restitution of Conjugal Rights — Matrimonial Matters | Practic Legal"
		},
		{
			property: "og:description",
			content: "Restitution of conjugal rights is a legal remedy that orders a deserting spouse to return to the matrimonial home and resume cohabitation"
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
var $$splitComponentImporter = () => import("./ni-act-DLGw8V62.mjs");
var Route = createFileRoute("/practice/ni-act/")({
	head: () => ({ meta: [
		{ title: "Negotiable Instruments Act — Negotiable Instruments Act | Practic Legal" },
		{
			name: "description",
			content: "A cheque is one of the most widely accepted modes of payment in commercial and personal transactions."
		},
		{
			property: "og:title",
			content: "Negotiable Instruments Act — Negotiable Instruments Act | Practic Legal"
		},
		{
			property: "og:description",
			content: "A cheque is one of the most widely accepted modes of payment in commercial and personal transactions."
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
var IndexRoute = Route$34.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$35
});
var AboutRoute = Route$33.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$35
});
var ContactRoute = Route$32.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationIndexRoute = Route$31.update({
	id: "/practice/civil-litigation/",
	path: "/practice/civil-litigation/",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationBuilderBuyerDisputesRoute = Route$30.update({
	id: "/practice/civil-litigation/builder-buyer-disputes",
	path: "/practice/civil-litigation/builder-buyer-disputes",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationInsuranceClaimsRoute = Route$29.update({
	id: "/practice/civil-litigation/insurance-claims",
	path: "/practice/civil-litigation/insurance-claims",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationLandlordTenantRoute = Route$28.update({
	id: "/practice/civil-litigation/landlord-tenant",
	path: "/practice/civil-litigation/landlord-tenant",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationMcdTribunalMattersRoute = Route$27.update({
	id: "/practice/civil-litigation/mcd-tribunal-matters",
	path: "/practice/civil-litigation/mcd-tribunal-matters",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationProbateOfWillRoute = Route$26.update({
	id: "/practice/civil-litigation/probate-of-will",
	path: "/practice/civil-litigation/probate-of-will",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationPropertyDisputesRoute = Route$25.update({
	id: "/practice/civil-litigation/property-disputes",
	path: "/practice/civil-litigation/property-disputes",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationPublicNuisanceLitigationRoute = Route$24.update({
	id: "/practice/civil-litigation/public-nuisance-litigation",
	path: "/practice/civil-litigation/public-nuisance-litigation",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationRecoverySuitsRoute = Route$23.update({
	id: "/practice/civil-litigation/recovery-suits",
	path: "/practice/civil-litigation/recovery-suits",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationRwaElectionMattersRoute = Route$22.update({
	id: "/practice/civil-litigation/rwa-election-matters",
	path: "/practice/civil-litigation/rwa-election-matters",
	getParentRoute: () => Route$35
});
var PracticeCivilLitigationSuccessionCertificateRoute = Route$21.update({
	id: "/practice/civil-litigation/succession-certificate",
	path: "/practice/civil-litigation/succession-certificate",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersIndexRoute = Route$20.update({
	id: "/practice/criminal-matters/",
	path: "/practice/criminal-matters/",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersBailAndAnticipatoryRoute = Route$19.update({
	id: "/practice/criminal-matters/bail-and-anticipatory",
	path: "/practice/criminal-matters/bail-and-anticipatory",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersCrimesAgainstWomenRoute = Route$18.update({
	id: "/practice/criminal-matters/crimes-against-women",
	path: "/practice/criminal-matters/crimes-against-women",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersCriminalAppealsRoute = Route$17.update({
	id: "/practice/criminal-matters/criminal-appeals",
	path: "/practice/criminal-matters/criminal-appeals",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersCyberCrimesLegalRepresentationRoute = Route$16.update({
	id: "/practice/criminal-matters/cyber-crimes-legal-representation",
	path: "/practice/criminal-matters/cyber-crimes-legal-representation",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersEconomicOffencesRoute = Route$15.update({
	id: "/practice/criminal-matters/economic-offences",
	path: "/practice/criminal-matters/economic-offences",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersOffencesAgainstTheHumanBodyRoute = Route$14.update({
	id: "/practice/criminal-matters/offences-against-the-human-body",
	path: "/practice/criminal-matters/offences-against-the-human-body",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersOffencesAganistPropertyRoute = Route$13.update({
	id: "/practice/criminal-matters/offences-aganist-property",
	path: "/practice/criminal-matters/offences-aganist-property",
	getParentRoute: () => Route$35
});
var PracticeCriminalMattersWhiteCollarCrimesRoute = Route$12.update({
	id: "/practice/criminal-matters/white-collar-crimes",
	path: "/practice/criminal-matters/white-collar-crimes",
	getParentRoute: () => Route$35
});
var PracticeIntellectualPropertyRightsIndexRoute = Route$11.update({
	id: "/practice/intellectual-property-rights/",
	path: "/practice/intellectual-property-rights/",
	getParentRoute: () => Route$35
});
var PracticeIntellectualPropertyRightsIntellectualPropertyRoute = Route$10.update({
	id: "/practice/intellectual-property-rights/intellectual-property",
	path: "/practice/intellectual-property-rights/intellectual-property",
	getParentRoute: () => Route$35
});
var PracticeIntellectualPropertyRightsPatentRegistrationRoute = Route$9.update({
	id: "/practice/intellectual-property-rights/patent-registration",
	path: "/practice/intellectual-property-rights/patent-registration",
	getParentRoute: () => Route$35
});
var PracticeIntellectualPropertyRightsTrademarkRegistrationRoute = Route$8.update({
	id: "/practice/intellectual-property-rights/trademark-registration",
	path: "/practice/intellectual-property-rights/trademark-registration",
	getParentRoute: () => Route$35
});
var PracticeMatrimonialMattersIndexRoute = Route$7.update({
	id: "/practice/matrimonial-matters/",
	path: "/practice/matrimonial-matters/",
	getParentRoute: () => Route$35
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
	PracticeCivilLitigationPropertyDisputesRoute,
	PracticeCivilLitigationPublicNuisanceLitigationRoute,
	PracticeCivilLitigationRecoverySuitsRoute,
	PracticeCivilLitigationRwaElectionMattersRoute,
	PracticeCivilLitigationSuccessionCertificateRoute,
	PracticeCriminalMattersBailAndAnticipatoryRoute,
	PracticeCriminalMattersCrimesAgainstWomenRoute,
	PracticeCriminalMattersCriminalAppealsRoute,
	PracticeCriminalMattersCyberCrimesLegalRepresentationRoute,
	PracticeCriminalMattersEconomicOffencesRoute,
	PracticeCriminalMattersOffencesAgainstTheHumanBodyRoute,
	PracticeCriminalMattersOffencesAganistPropertyRoute,
	PracticeCriminalMattersWhiteCollarCrimesRoute,
	PracticeIntellectualPropertyRightsIntellectualPropertyRoute,
	PracticeIntellectualPropertyRightsPatentRegistrationRoute,
	PracticeIntellectualPropertyRightsTrademarkRegistrationRoute,
	PracticeMatrimonialMattersChildCustodyRoute: Route$6.update({
		id: "/practice/matrimonial-matters/child-custody",
		path: "/practice/matrimonial-matters/child-custody",
		getParentRoute: () => Route$35
	}),
	PracticeMatrimonialMattersDivorceAndMutualConsentRoute: Route$5.update({
		id: "/practice/matrimonial-matters/divorce-and-mutual-consent",
		path: "/practice/matrimonial-matters/divorce-and-mutual-consent",
		getParentRoute: () => Route$35
	}),
	PracticeMatrimonialMattersDomesticViolenceRoute: Route$4.update({
		id: "/practice/matrimonial-matters/domestic-violence",
		path: "/practice/matrimonial-matters/domestic-violence",
		getParentRoute: () => Route$35
	}),
	PracticeMatrimonialMattersMaintenanceAndAlimonyRoute: Route$3.update({
		id: "/practice/matrimonial-matters/maintenance-and-alimony",
		path: "/practice/matrimonial-matters/maintenance-and-alimony",
		getParentRoute: () => Route$35
	}),
	PracticeMatrimonialMattersNullityOfMarriageRoute: Route$2.update({
		id: "/practice/matrimonial-matters/nullity-of-marriage",
		path: "/practice/matrimonial-matters/nullity-of-marriage",
		getParentRoute: () => Route$35
	}),
	PracticeMatrimonialMattersRestitutionOfConjugalRightsRoute: Route$1.update({
		id: "/practice/matrimonial-matters/restitution-of-conjugal-rights",
		path: "/practice/matrimonial-matters/restitution-of-conjugal-rights",
		getParentRoute: () => Route$35
	}),
	PracticeCivilLitigationIndexRoute,
	PracticeCriminalMattersIndexRoute,
	PracticeIntellectualPropertyRightsIndexRoute,
	PracticeMatrimonialMattersIndexRoute,
	PracticeNiActIndexRoute: Route.update({
		id: "/practice/ni-act/",
		path: "/practice/ni-act/",
		getParentRoute: () => Route$35
	})
};
var routeTree = Route$35._addFileChildren(rootRouteChildren)._addFileTypes();
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

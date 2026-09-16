import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ChevronDown, r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-Cn9Tqplx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var practiceNav = [
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
				href: "/practice/civil-litigation/builder-buyer-disputes"
			},
			{
				slug: "insurance-claims",
				title: "Insurance Claims",
				href: "/practice/civil-litigation/insurance-claims"
			},
			{
				slug: "landlord-tenant",
				title: "Landlord Tenant",
				href: "/practice/civil-litigation/landlord-tenant"
			},
			{
				slug: "mcd-tribunal-matters",
				title: "MCD Tribunal Matters",
				href: "/practice/civil-litigation/mcd-tribunal-matters"
			},
			{
				slug: "probate-of-will",
				title: "Probate of Will",
				href: "/practice/civil-litigation/probate-of-will"
			},
			{
				slug: "property-disputes",
				title: "Property Disputes",
				href: "/practice/civil-litigation/property-disputes"
			},
			{
				slug: "public-nuisance-litigation",
				title: "Public Nuisance Litigation",
				href: "/practice/civil-litigation/public-nuisance-litigation"
			},
			{
				slug: "recovery-suits",
				title: "Recovery Suits",
				href: "/practice/civil-litigation/recovery-suits"
			},
			{
				slug: "probate-of-will-4",
				title: "Probate of Will",
				href: "/practice/civil-litigation/probate-of-will-4"
			},
			{
				slug: "probate-of-will-5",
				title: "Probate of Will",
				href: "/practice/civil-litigation/probate-of-will-5"
			}
		]
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
				href: "/practice/matrimonial-matters/divorce-and-mutual-consent"
			},
			{
				slug: "maintenance-and-alimony",
				title: "Maintenance & Alimony",
				href: "/practice/matrimonial-matters/maintenance-and-alimony"
			},
			{
				slug: "child-custody",
				title: "Child Custody",
				href: "/practice/matrimonial-matters/child-custody"
			},
			{
				slug: "domestic-violence",
				title: "Domestic Violence",
				href: "/practice/matrimonial-matters/domestic-violence"
			}
		]
	},
	{
		slug: "motor-accident-claims",
		title: "Motor Accident Claims",
		short: "Motor Accident",
		desc: "Compensation claims and insurance disputes before Motor Accident Claims Tribunals and appellate courts.",
		href: "/practice/motor-accident-claims",
		topics: [
			{
				slug: "compensation-claims",
				title: "Compensation Claims",
				href: "/practice/motor-accident-claims/compensation-claims"
			},
			{
				slug: "insurance-disputes",
				title: "Insurance Disputes",
				href: "/practice/motor-accident-claims/insurance-disputes"
			},
			{
				slug: "hit-and-run-cases",
				title: "Hit & Run Cases",
				href: "/practice/motor-accident-claims/hit-and-run-cases"
			},
			{
				slug: "mact-appeals",
				title: "MACT Appeals",
				href: "/practice/motor-accident-claims/mact-appeals"
			}
		]
	},
	{
		slug: "property-rights",
		title: "Property Rights",
		short: "Property",
		desc: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers.",
		href: "/practice/property-rights",
		topics: [
			{
				slug: "title-and-ownership-disputes",
				title: "Title & Ownership Disputes",
				href: "/practice/property-rights/title-and-ownership-disputes"
			},
			{
				slug: "partition-suits",
				title: "Partition Suits",
				href: "/practice/property-rights/partition-suits"
			},
			{
				slug: "tenancy-and-eviction",
				title: "Tenancy & Eviction",
				href: "/practice/property-rights/tenancy-and-eviction"
			},
			{
				slug: "land-acquisition",
				title: "Land Acquisition",
				href: "/practice/property-rights/land-acquisition"
			}
		]
	}
];
function SiteHeader() {
	const [practiceOpen, setPracticeOpen] = (0, import_react.useState)(false);
	const [openGroup, setOpenGroup] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [mobileExpanded, setMobileExpanded] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (mobileOpen) document.body.style.overflow = "hidden";
		else {
			document.body.style.overflow = "";
			setMobileExpanded(null);
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);
	const closeMobile = () => setMobileOpen(false);
	const mobilePanel = mobileOpen ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-border bg-background md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "block border-b border-border/40 py-3 text-sm font-semibold uppercase tracking-wider text-primary",
					onClick: closeMobile,
					children: "Home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "block border-b border-border/40 py-3 text-sm font-semibold uppercase tracking-wider text-primary",
					onClick: closeMobile,
					children: "About"
				}),
				practiceNav.map((area) => {
					const isExpanded = mobileExpanded === area.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border/40 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: area.href,
								className: "block text-sm font-semibold uppercase tracking-wider text-primary",
								onClick: closeMobile,
								children: area.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Toggle ${area.title} submenu`,
								"aria-expanded": isExpanded,
								className: "p-2",
								onClick: () => setMobileExpanded((prev) => prev === area.slug ? null : area.slug),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}` })
							})]
						}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-1 pl-4",
							children: area.topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: t.href,
								className: "block py-1 text-sm text-muted-foreground",
								onClick: closeMobile,
								children: t.title
							}, t.slug))
						})]
					}, area.slug);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "contact",
					className: "block border-b border-border/40 py-3 text-sm font-semibold uppercase tracking-wider text-primary",
					onClick: closeMobile,
					children: "Contact"
				})
			]
		})
	}), document.body) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground font-display font-bold",
						children: "P"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-wide",
						children: ["PRACTIC ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "LEGAL"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setPracticeOpen(true),
							onMouseLeave: () => {
								setPracticeOpen(false);
								setOpenGroup(null);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary",
								"aria-haspopup": "true",
								"aria-expanded": practiceOpen,
								children: ["Practice", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
							}), practiceOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-64 rounded-sm border border-border bg-card shadow-xl",
									children: practiceNav.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										onMouseEnter: () => setOpenGroup(area.slug),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: area.href,
											className: "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
											children: [area.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 -rotate-90" })]
										}), openGroup === area.slug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-full top-0 ml-1 w-72 rounded-sm border border-border bg-card shadow-xl",
											children: area.topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: t.href,
												className: "block px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
												children: t.title
											}, t.slug))
										})]
									}, area.slug))
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "team",
							className: "text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary",
							children: "Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Toggle menu",
					className: "md:hidden",
					onClick: () => setMobileOpen((v) => !v),
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), mobilePanel]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[var(--ink)] text-[var(--ink-foreground)] border-t border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 pt-20 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-primary h-10 w-10 flex items-center justify-center font-bold text-primary-foreground",
								children: "P"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold uppercase tracking-widest",
								children: ["Practic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Legal"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/70 text-sm leading-relaxed mb-8",
							children: "Legal Excellence with Integrity. Representing homebuyers, investors, and property owners in complex disputes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "w-10 h-10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bi bi-envelope-fill" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+15551234567",
								className: "w-10 h-10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "bi bi-telephone-fill" })
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary mb-6",
						children: "Practice Areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm text-white/70",
						children: practiceNav.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: a.href,
							className: "hover:text-primary transition-colors",
							children: a.title
						}) }, a.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary mb-6",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-primary",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/team",
								className: "hover:text-primary",
								children: "Team"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-primary",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary mb-6",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-start gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-primary ",
									children: "Phone:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 85888 36030" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "material-symbols-outlined text-primary",
									children: "Email:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "contact@practiclegal.com" })]
							})
						]
					})] })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center md:text-left",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Practic Legal. All Rights Reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "space-x-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-primary",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/disclaimer",
							className: "hover:text-primary",
							children: "Disclaimer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-primary",
							children: "Terms"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, practiceNav as r, SiteFooter as t };

import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ChevronDown, r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-AHBQpf-W.js
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
				slug: "rwa-election-matters",
				title: "RWA Election Matters",
				href: "/practice/civil-litigation/rwa-election-matters"
			},
			{
				slug: "succession-certificate",
				title: "Succession Certificate",
				href: "/practice/civil-litigation/succession-certificate"
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
			},
			{
				slug: "restitution-of-conjugal-rights",
				title: "Restitution of Conjugal Rights",
				href: "/practice/matrimonial-matters/restitution-of-conjugal-rights"
			},
			{
				slug: "nullity-of-marriage",
				title: "Nullity Of Marriage",
				href: "/practice/matrimonial-matters/nullity-of-marriage"
			}
		]
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
				href: "/practice/criminal-matters/bail-and-anticipatory"
			},
			{
				slug: "crimes-against-women",
				title: "Crimes Against Women",
				href: "/practice/criminal-matters/crimes-against-women"
			},
			{
				slug: "cyber-crimes-legal-representation",
				title: "Cyber Crimes Legal Representation",
				href: "/practice/criminal-matters/cyber-crimes-legal-representation"
			},
			{
				slug: "offence-against-the-human-body",
				title: "Offence Against The Human Body",
				href: "/practice/criminal-matters/offences-against-the-human-body"
			},
			{
				slug: "offences-aganist-property",
				title: "Offences Aganist Property",
				href: "/practice/criminal-matters/offences-aganist-property"
			},
			{
				slug: "criminal-appeals",
				title: "Criminal Appeals",
				href: "/practice/criminal-matters/criminal-appeals"
			},
			{
				slug: "economic-offences",
				title: "Economic Offences",
				href: "/practice/criminal-matters/economic-offences"
			},
			{
				slug: "white-collar-crimes",
				title: "White Collar Crimes",
				href: "/practice/criminal-matters/white-collar-crimes"
			}
		]
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
				href: "/practice/intellectual-property-rights/intellectual-property"
			},
			{
				slug: "patent-registration",
				title: "Patent Registration",
				href: "/practice/intellectual-property-rights/patent-registration"
			},
			{
				slug: "trademark-registration",
				title: "Trademark Registration",
				href: "/practice/intellectual-property-rights/trademark-registration"
			}
		]
	},
	{
		slug: "ni-act",
		title: "NI Act",
		short: "IP",
		desc: "Title, partition, tenancy, and acquisition matters for individuals, families, and developers.",
		href: "/practice/ni-act",
		topics: []
	}
];
var logo_header_default = "/assets/logo-header-dUyXR3kF.png";
var hasTopics = (area) => Array.isArray(area.topics) && area.topics.length > 0;
var mobileLinkClass = "block border-b border-border/40 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/70";
var desktopLinkClass = "whitespace-nowrap text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary";
function SiteHeader() {
	const [practiceOpen, setPracticeOpen] = (0, import_react.useState)(false);
	const [openGroup, setOpenGroup] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [mobileExpanded, setMobileExpanded] = (0, import_react.useState)(null);
	const closeTimeoutRef = (0, import_react.useRef)(null);
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
	(0, import_react.useEffect)(() => {
		return () => {
			if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
		};
	}, []);
	const closeMobile = () => {
		setMobileOpen(false);
	};
	const closePractice = () => {
		setPracticeOpen(false);
		setOpenGroup(null);
	};
	const handlePracticeEnter = () => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
		setPracticeOpen(true);
	};
	const handlePracticeLeave = () => {
		closeTimeoutRef.current = setTimeout(() => {
			closePractice();
		}, 500);
	};
	const mobilePanel = mobileOpen ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto overscroll-contain border-t border-border/60 bg-background md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "Home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "About"
				}),
				practiceNav.map((area) => {
					const hasSub = hasTopics(area);
					const isExpanded = hasSub && mobileExpanded === area.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-[56px] items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: area.href,
								className: "flex-1 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/70",
								onClick: closeMobile,
								children: area.title
							}), hasSub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Toggle ${area.title} submenu`,
								"aria-expanded": isExpanded,
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-secondary",
								onClick: () => setMobileExpanded((prev) => prev === area.slug ? null : area.slug),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}` })
							})]
						}), hasSub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid transition-all duration-200 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 ml-2 space-y-1 border-l border-border/60 pl-4 sm:ml-4",
									children: (area.topics ?? []).map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: topic.href,
										className: "block rounded-sm px-2 py-2.5 text-sm leading-relaxed text-muted-foreground transition-colors hover:bg-secondary hover:text-primary",
										onClick: closeMobile,
										children: topic.title
									}, topic.slug))
								})
							})
						})]
					}, area.slug);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "team",
					className: mobileLinkClass,
					onClick: closeMobile,
					children: "Team"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "block py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/70",
					onClick: closeMobile,
					children: "Contact"
				})
			]
		})
	}), document.body) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 shrink items-center",
					"aria-label": "Practic Legal – Home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_header_default,
						alt: "Practic Legal",
						className: "h-9 w-auto sm:h-10"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-5 md:flex lg:gap-7 xl:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: desktopLinkClass,
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: desktopLinkClass,
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: handlePracticeEnter,
							onMouseLeave: handlePracticeLeave,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: `inline-flex items-center gap-1 ${desktopLinkClass}`,
								"aria-haspopup": "true",
								"aria-expanded": practiceOpen,
								children: ["Practice", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-200 ${practiceOpen ? "rotate-180" : ""}` })]
							}), practiceOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1/2 top-full z-[70] -translate-x-1/2 pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-60 overflow-visible rounded-md border border-border bg-card shadow-xl sm:w-64",
									children: practiceNav.map((area) => {
										const hasSub = hasTopics(area);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											onMouseEnter: () => setOpenGroup(hasSub ? area.slug : null),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: area.href,
												className: "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
												onClick: closePractice,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "min-w-0",
													children: area.title
												}), hasSub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 -rotate-90" })]
											}), hasSub && openGroup === area.slug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-0 left-full ml-1 w-64 overflow-hidden rounded-md border border-border bg-card shadow-xl sm:w-72 max-lg:left-auto max-lg:right-full max-lg:ml-0 max-lg:mr-1",
												children: (area.topics ?? []).map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: topic.href,
													className: "block px-4 py-3 text-sm leading-relaxed text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
													onClick: closePractice,
													children: topic.title
												}, topic.slug))
											})]
										}, area.slug);
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "team",
							className: desktopLinkClass,
							children: "Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: desktopLinkClass,
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": mobileOpen ? "Close menu" : "Open menu",
					"aria-expanded": mobileOpen,
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-secondary md:hidden",
					onClick: () => setMobileOpen((value) => !value),
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		})
	}), mobilePanel] });
}
var logo_default = "/assets/logo-BRAMDSRE.png";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[var(--ink)] text-[var(--ink-foreground)] border-t border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 pt-20 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3 mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 inline-block rounded-sm bg-grey px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Practic Legal",
									className: "h-14 w-auto"
								})
							})
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

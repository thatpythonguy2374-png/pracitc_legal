import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-Cn9Tqplx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/matrimonial-matters-BUFgZbNR.js
var import_jsx_runtime = require_jsx_runtime();
var topics = [
	{
		title: "Divorce & Mutual Consent",
		summary: "Contested and mutual-consent divorce petitions handled with discretion and a focus on settlement.",
		href: "/practice/matrimonial-matters/divorce-and-mutual-consent"
	},
	{
		title: "Maintenance & Alimony",
		summary: "Claims and defences for interim maintenance, permanent alimony, and enforcement of maintenance orders.",
		href: "/practice/matrimonial-matters/maintenance-and-alimony"
	},
	{
		title: "Child Custody",
		summary: "Custody, guardianship, and visitation matters guided always by the welfare of the child.",
		href: "/practice/matrimonial-matters/child-custody"
	},
	{
		title: "Domestic Violence",
		summary: "Protection, residence, and monetary relief under the Protection of Women from Domestic Violence Act.",
		href: "/practice/matrimonial-matters/domestic-violence"
	}
];
function MatrimonialMattersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-30",
					style: { backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.66 0.135 55 / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.05 60 / 0.4), transparent 55%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 py-24 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary",
							children: "Practice Area"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-6xl",
							children: "Matrimonial Matters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg leading-relaxed text-white/75",
							children: "Sensitive, discreet counsel on divorce, maintenance, custody, and protection from domestic violence."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What we handle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-3 text-3xl md:text-4xl",
						children: "Sub-Practices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-4 block h-1 w-16 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2",
						children: topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: t.href,
							className: "group rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold uppercase tracking-wide group-hover:text-primary",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: t.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary",
									children: "Read More →"
								})
							]
						}, t.href))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { MatrimonialMattersPage as component };

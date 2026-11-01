import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-AHBQpf-W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/intellectual-property-rights-D4p1UJI5.js
var import_jsx_runtime = require_jsx_runtime();
var topics = [
	{
		title: "Intellectual Property",
		summary: "Legal assistance in intellectual property matters, including trademark and copyright infringement, patent disputes, brand protection, intellectual property enforcement, and representation before relevant authorities and judicial forums.",
		href: "/practice/intellectual-property-rights/intellectual-property"
	},
	{
		title: "Patent Registration",
		summary: "Whether you are an inventor, entrepreneur, startup, researcher or company, protecting your invention is essential to preserving your competitive advantage.",
		href: "/practice/intellectual-property-rights/patent-registration"
	},
	{
		title: "Trademark Registration",
		summary: "It distinguishes your goods or services from those of others and helps build brand recognition, customer trust and commercial goodwill.",
		href: "/practice/intellectual-property-rights/trademark-registration"
	}
];
function PropertyRightsPage() {
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
							children: "Intellectual Property Rights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg leading-relaxed text-white/75",
							children: "Intellectual Property (IP) is among the most valuable assets of an individual or business."
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
export { PropertyRightsPage as component };

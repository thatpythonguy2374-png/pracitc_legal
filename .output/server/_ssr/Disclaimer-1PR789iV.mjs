import { t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CWlQvr6t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Disclaimer-1PR789iV.js
var import_jsx_runtime = require_jsx_runtime();
var container = {
	hidden: {},
	show: { transition: { staggerChildren: .12 } }
};
var item = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0
	}
};
function Stagger({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: container,
		initial: "hidden",
		whileInView: "show",
		viewport: { once: true },
		className,
		children
	});
}
function StaggerItem({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: item,
		className,
		children
	});
}
function DisclaimerSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/30 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "disclaimer-copy text-sm italic leading-relaxed text-muted-foreground",
				children: "This page is intended solely for general informational purposes and should not be construed as legal advice or as creating an advocate-client relationship."
			})
		}) }) })
	});
}
//#endregion
export { Stagger as n, StaggerItem as r, DisclaimerSection as t };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Stagger-DGnw4umL.js
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
//#endregion
export { StaggerItem as n, Stagger as t };

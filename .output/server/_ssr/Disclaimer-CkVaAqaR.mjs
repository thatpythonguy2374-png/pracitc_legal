import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Disclaimer-CkVaAqaR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, direction = "up" }) {
	const ref = (0, import_react.useRef)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setTimeout(() => setIsVisible(true), delay * 1e3);
				observer.unobserve(el);
			}
		}, {
			threshold: .2,
			rootMargin: "0px 0px -50px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [delay]);
	const getTransform = () => {
		if (isVisible) return "translate(0,0)";
		switch (direction) {
			case "left": return "translateX(-40px)";
			case "right": return "translateX(40px)";
			default: return "translateY(40px)";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: {
			opacity: isVisible ? 1 : 0,
			transform: getTransform(),
			transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
		},
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
export { Reveal as n, DisclaimerSection as t };

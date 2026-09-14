globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-BMHrxGV4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20d8-6mLQgWZ4bvJHp69qBq3Rk6oe+ZA\"",
		"mtime": "2026-09-03T15:04:24.525Z",
		"size": 8408,
		"path": "../public/assets/about-BMHrxGV4.js"
	},
	"/assets/civil-litigation-Rq452xuE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4d-qErZWJ+++1BO1wIoLqYvuf8FgFg\"",
		"mtime": "2026-09-03T15:04:24.526Z",
		"size": 3917,
		"path": "../public/assets/civil-litigation-Rq452xuE.js"
	},
	"/assets/builder-buyer-disputes-C0qkPOAt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27df-9utJ6MqTC7iQrEDrhBQn6F9PCGQ\"",
		"mtime": "2026-09-03T15:04:24.526Z",
		"size": 10207,
		"path": "../public/assets/builder-buyer-disputes-C0qkPOAt.js"
	},
	"/assets/compensation-claims-BeCSQ_6F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1282-I1/SiUasfYZc/v24VjZTsMABH4U\"",
		"mtime": "2026-09-03T15:04:24.527Z",
		"size": 4738,
		"path": "../public/assets/compensation-claims-BeCSQ_6F.js"
	},
	"/assets/child-custody-CfT5zGrm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"126d-t9Vc8XE2s9iWJWlx3QAPLHH1RiU\"",
		"mtime": "2026-09-03T15:04:24.526Z",
		"size": 4717,
		"path": "../public/assets/child-custody-CfT5zGrm.js"
	},
	"/assets/Disclaimer-XZOrbGm1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3db-8V5H9zQpBQXqHYCk6W3RXeOTk6I\"",
		"mtime": "2026-09-03T15:04:24.524Z",
		"size": 987,
		"path": "../public/assets/Disclaimer-XZOrbGm1.js"
	},
	"/assets/bootstrap-icons-mSm7cUeB.woff2": {
		"type": "font/woff2",
		"etag": "\"20b9c-tEH8/5OeJPoJBqN7d4h4i5/du2g\"",
		"mtime": "2026-09-03T15:04:24.539Z",
		"size": 134044,
		"path": "../public/assets/bootstrap-icons-mSm7cUeB.woff2"
	},
	"/assets/divorce-and-mutual-consent-C8qigQL4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1294-l8Es+0EzF2bzlbeXwGTIWAfCD8o\"",
		"mtime": "2026-09-03T15:04:24.527Z",
		"size": 4756,
		"path": "../public/assets/divorce-and-mutual-consent-C8qigQL4.js"
	},
	"/assets/contact-Qq3J8DY0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23d9-gn3uwNvB2UpR2wWsu6hp9/thjes\"",
		"mtime": "2026-09-03T15:04:24.527Z",
		"size": 9177,
		"path": "../public/assets/contact-Qq3J8DY0.js"
	},
	"/assets/hit-and-run-cases-D7ftCrsr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"129a-UxPsHm5k7pH4lGReXY+BhhdNJ8w\"",
		"mtime": "2026-09-03T15:04:24.528Z",
		"size": 4762,
		"path": "../public/assets/hit-and-run-cases-D7ftCrsr.js"
	},
	"/assets/domestic-violence-DaDmRW5G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128b-l/NW3KuJTbO6rJIOrHVUJHcotwk\"",
		"mtime": "2026-09-03T15:04:24.528Z",
		"size": 4747,
		"path": "../public/assets/domestic-violence-DaDmRW5G.js"
	},
	"/assets/insurance-claims-Dv_1bYDq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cfc-ku/KMamNFTbjzX8oZWAZuSTiJL0\"",
		"mtime": "2026-09-03T15:04:24.528Z",
		"size": 11516,
		"path": "../public/assets/insurance-claims-Dv_1bYDq.js"
	},
	"/assets/insurance-disputes-Da35rllO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127a-oRwTqsvKYigP2S3f6sna3xHqWxM\"",
		"mtime": "2026-09-03T15:04:24.529Z",
		"size": 4730,
		"path": "../public/assets/insurance-disputes-Da35rllO.js"
	},
	"/assets/land-acquisition-BXTOzBe2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1272-087v3686xILKPFtCT1m+isEZgR4\"",
		"mtime": "2026-09-03T15:04:24.529Z",
		"size": 4722,
		"path": "../public/assets/land-acquisition-BXTOzBe2.js"
	},
	"/assets/landlord-tenant-D4ZpZe1f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e41-JPLiZ4G9BLYSq65wrqLcssK5eY4\"",
		"mtime": "2026-09-03T15:04:24.530Z",
		"size": 7745,
		"path": "../public/assets/landlord-tenant-D4ZpZe1f.js"
	},
	"/assets/index-CqN5JKXL.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13b94-tWevWVcF1IUlIZWcneU/cGu/+zY\"",
		"mtime": "2026-09-03T15:04:24.540Z",
		"size": 80788,
		"path": "../public/assets/index-CqN5JKXL.css"
	},
	"/assets/bootstrap-icons-BeopsB42.woff": {
		"type": "font/woff",
		"etag": "\"2c040-diAQx5tKBeETH8j7Oxrv8yTYAz8\"",
		"mtime": "2026-09-03T15:04:24.539Z",
		"size": 180288,
		"path": "../public/assets/bootstrap-icons-BeopsB42.woff"
	},
	"/assets/link-BroVZncT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8aab-BDDyRi0xKbzjvx31qX1k7C7cGbw\"",
		"mtime": "2026-09-03T15:04:24.530Z",
		"size": 35499,
		"path": "../public/assets/link-BroVZncT.js"
	},
	"/assets/mact-appeals-Cn55Lmm7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"125f-Rzu4OVzgRC1yZW5GUN+TJUQtg+U\"",
		"mtime": "2026-09-03T15:04:24.530Z",
		"size": 4703,
		"path": "../public/assets/mact-appeals-Cn55Lmm7.js"
	},
	"/assets/maintenance-and-alimony-h05upLM8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1294-SzS2jr/v43vKU1SiyhBBYr994hA\"",
		"mtime": "2026-09-03T15:04:24.531Z",
		"size": 4756,
		"path": "../public/assets/maintenance-and-alimony-h05upLM8.js"
	},
	"/assets/matrimonial-matters-BVJryqlV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b18-tPO567QkOCBOgS2aD02MIXMj2zY\"",
		"mtime": "2026-09-03T15:04:24.531Z",
		"size": 2840,
		"path": "../public/assets/matrimonial-matters-BVJryqlV.js"
	},
	"/assets/mcd-tribunal-matters-C5sIZysh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2794-s5a7CSdTs/29JQw4b8kP7lHG/RA\"",
		"mtime": "2026-09-03T15:04:24.531Z",
		"size": 10132,
		"path": "../public/assets/mcd-tribunal-matters-C5sIZysh.js"
	},
	"/assets/motor-accident-claims-DcBTdCdt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac8-EpOxjJoDud+TbUzNNfMHKAeJDF0\"",
		"mtime": "2026-09-03T15:04:24.532Z",
		"size": 2760,
		"path": "../public/assets/motor-accident-claims-DcBTdCdt.js"
	},
	"/assets/partition-suits-CHn_mpja.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"126f-15LkQLU2k+I0F7ZHmfCvP64DIhA\"",
		"mtime": "2026-09-03T15:04:24.532Z",
		"size": 4719,
		"path": "../public/assets/partition-suits-CHn_mpja.js"
	},
	"/assets/index-CqXPaX_D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"712c8-zuYkV0vQPjprOwfGKHX5pD2/nzA\"",
		"mtime": "2026-09-03T15:04:24.524Z",
		"size": 463560,
		"path": "../public/assets/index-CqXPaX_D.js"
	},
	"/assets/probate-of-will-4-CxV7WekM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1272-n7d6mOrOYWUNAFKoebMvk2Z2+U0\"",
		"mtime": "2026-09-03T15:04:24.533Z",
		"size": 4722,
		"path": "../public/assets/probate-of-will-4-CxV7WekM.js"
	},
	"/assets/property-disputes-SjKUih_y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16d3-aL4w4rLC0dkk7XfUDd6KmOM/0QY\"",
		"mtime": "2026-09-03T15:04:24.534Z",
		"size": 5843,
		"path": "../public/assets/property-disputes-SjKUih_y.js"
	},
	"/assets/probate-of-will-5-CxV7WekM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1272-n7d6mOrOYWUNAFKoebMvk2Z2+U0\"",
		"mtime": "2026-09-03T15:04:24.533Z",
		"size": 4722,
		"path": "../public/assets/probate-of-will-5-CxV7WekM.js"
	},
	"/assets/probate-of-will-LSYmyx-g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d37-Ratmhz6efP01GCfRO8n7GpouIj4\"",
		"mtime": "2026-09-03T15:04:24.533Z",
		"size": 7479,
		"path": "../public/assets/probate-of-will-LSYmyx-g.js"
	},
	"/assets/property-rights-BAk_PPF3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac6-GiaIY1DrU1uwLKwhgKCBsLT295k\"",
		"mtime": "2026-09-03T15:04:24.535Z",
		"size": 2758,
		"path": "../public/assets/property-rights-BAk_PPF3.js"
	},
	"/assets/recovery-suits-DUbErOc1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216a-0hzFdwE/7+D0DBrNJNjKc46BrV8\"",
		"mtime": "2026-09-03T15:04:24.536Z",
		"size": 8554,
		"path": "../public/assets/recovery-suits-DUbErOc1.js"
	},
	"/assets/Reveal-5RLDSBt_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ce-7mzFSuk8ydOobcH4C1bP3UnnNxE\"",
		"mtime": "2026-09-03T15:04:24.525Z",
		"size": 718,
		"path": "../public/assets/Reveal-5RLDSBt_.js"
	},
	"/assets/public-nuisance-litigation-CwvvX9OO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"244d-mJEiSEfACAc55bGcwEHOboB9XBQ\"",
		"mtime": "2026-09-03T15:04:24.536Z",
		"size": 9293,
		"path": "../public/assets/public-nuisance-litigation-CwvvX9OO.js"
	},
	"/assets/SiteFooter-CA08BhHj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3398-otzJX2kIt4/MxXrhFw9xYauFJig\"",
		"mtime": "2026-09-03T15:04:24.525Z",
		"size": 13208,
		"path": "../public/assets/SiteFooter-CA08BhHj.js"
	},
	"/assets/tenancy-and-eviction-sE1zRyLV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1264-mbpTlS3twcdEhovVmCgCLBRvVOs\"",
		"mtime": "2026-09-03T15:04:24.538Z",
		"size": 4708,
		"path": "../public/assets/tenancy-and-eviction-sE1zRyLV.js"
	},
	"/assets/routes-DI05ASut.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2efd-N/7cTsevCDn2PObXHlsHcn1nKMs\"",
		"mtime": "2026-09-03T15:04:24.537Z",
		"size": 12029,
		"path": "../public/assets/routes-DI05ASut.js"
	},
	"/assets/title-and-ownership-disputes-Cjqa4ino.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128d-qKX8KJqch5CKYhLyXyOXqaftauw\"",
		"mtime": "2026-09-03T15:04:24.538Z",
		"size": 4749,
		"path": "../public/assets/title-and-ownership-disputes-Cjqa4ino.js"
	},
	"/assets/styles-DAh1ZsKL.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16423-zZZ7BiZTvhCIRHDz5NkboNLCxeQ\"",
		"mtime": "2026-09-03T15:04:24.540Z",
		"size": 91171,
		"path": "../public/assets/styles-DAh1ZsKL.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_AOo9qg = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_AOo9qg
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

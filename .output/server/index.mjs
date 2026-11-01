globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
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
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-D5ElZzUs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2149-IdZZMhptZ3jO4b2tlTpx+3pWVto\"",
		"mtime": "2026-11-01T07:05:45.284Z",
		"size": 8521,
		"path": "../public/assets/about-D5ElZzUs.js"
	},
	"/assets/bail-and-anticipatory-B9-IH3a4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277e-3OLkrGTS8xFivQldBdUU/6K8qj0\"",
		"mtime": "2026-11-01T07:05:45.284Z",
		"size": 10110,
		"path": "../public/assets/bail-and-anticipatory-B9-IH3a4.js"
	},
	"/assets/builder-buyer-disputes-Du6kYHGE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"239c-L+KE5ElOB0ZZu3HkJ3qxPEzRYAo\"",
		"mtime": "2026-11-01T07:05:45.285Z",
		"size": 9116,
		"path": "../public/assets/builder-buyer-disputes-Du6kYHGE.js"
	},
	"/assets/child-custody-BuKKHMuF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27bb-E+cTiOk7k43II5XRDKa/RwkT0UQ\"",
		"mtime": "2026-11-01T07:05:45.285Z",
		"size": 10171,
		"path": "../public/assets/child-custody-BuKKHMuF.js"
	},
	"/assets/civil-litigation-DMs9AxUB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1041-tCSRhXeTHBLaKktrj5fJndm+k0k\"",
		"mtime": "2026-11-01T07:05:45.285Z",
		"size": 4161,
		"path": "../public/assets/civil-litigation-DMs9AxUB.js"
	},
	"/assets/bootstrap-icons-mSm7cUeB.woff2": {
		"type": "font/woff2",
		"etag": "\"20b9c-tEH8/5OeJPoJBqN7d4h4i5/du2g\"",
		"mtime": "2026-11-01T07:05:45.298Z",
		"size": 134044,
		"path": "../public/assets/bootstrap-icons-mSm7cUeB.woff2"
	},
	"/assets/contact-CFAaqqZP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2510-vNjVVHIDZtCu4hBsseP0YoFrdR8\"",
		"mtime": "2026-11-01T07:05:45.286Z",
		"size": 9488,
		"path": "../public/assets/contact-CFAaqqZP.js"
	},
	"/assets/crimes-against-women-ChG50PPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27d5-oE6fbproWpvPypvfpyzWhaCDqxo\"",
		"mtime": "2026-11-01T07:05:45.286Z",
		"size": 10197,
		"path": "../public/assets/crimes-against-women-ChG50PPC.js"
	},
	"/assets/bootstrap-icons-BeopsB42.woff": {
		"type": "font/woff",
		"etag": "\"2c040-diAQx5tKBeETH8j7Oxrv8yTYAz8\"",
		"mtime": "2026-11-01T07:05:45.298Z",
		"size": 180288,
		"path": "../public/assets/bootstrap-icons-BeopsB42.woff"
	},
	"/assets/criminal-appeals-BjpTNDOx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b17-tlOzb9ckR4J3V4nFRB2EnuJL/bM\"",
		"mtime": "2026-11-01T07:05:45.287Z",
		"size": 6935,
		"path": "../public/assets/criminal-appeals-BjpTNDOx.js"
	},
	"/assets/criminal-matters-CPAGZUtw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104e-f7yxkNOQprVociLign3v4gMUteI\"",
		"mtime": "2026-11-01T07:05:45.287Z",
		"size": 4174,
		"path": "../public/assets/criminal-matters-CPAGZUtw.js"
	},
	"/assets/cyber-crimes-legal-representation-DE3zLV_3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3068-mCB80lqVEE6bXwsiA49a7O17+XU\"",
		"mtime": "2026-11-01T07:05:45.288Z",
		"size": 12392,
		"path": "../public/assets/cyber-crimes-legal-representation-DE3zLV_3.js"
	},
	"/assets/Disclaimer-CbSAYOZh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b0-/wA4BWxEW2ZVZWx/ZvP++7zt8LI\"",
		"mtime": "2026-11-01T07:05:45.283Z",
		"size": 1200,
		"path": "../public/assets/Disclaimer-CbSAYOZh.js"
	},
	"/assets/divorce-and-mutual-consent-Cq2-aPyc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a28-OwIX9wkX5ZyD8ufvEI4Dss7xC54\"",
		"mtime": "2026-11-01T07:05:45.288Z",
		"size": 10792,
		"path": "../public/assets/divorce-and-mutual-consent-Cq2-aPyc.js"
	},
	"/assets/economic-offences-BMnNNbMe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3c-xmmFe/R1ttMJcybug04nZOwKARQ\"",
		"mtime": "2026-11-01T07:05:45.289Z",
		"size": 6972,
		"path": "../public/assets/economic-offences-BMnNNbMe.js"
	},
	"/assets/insurance-claims-DLTOdheZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cfd-pXzX/OPio83xDnjHmx7Swggd3lQ\"",
		"mtime": "2026-11-01T07:05:45.289Z",
		"size": 11517,
		"path": "../public/assets/insurance-claims-DLTOdheZ.js"
	},
	"/assets/domestic-violence-D7bw9PeS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2884-rS0DrCTdz3QzE79bdHdcCLwzwCg\"",
		"mtime": "2026-11-01T07:05:45.288Z",
		"size": 10372,
		"path": "../public/assets/domestic-violence-D7bw9PeS.js"
	},
	"/assets/landlord-tenant-BRVB_q1G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2072-LFq8pPJ1ZR/zfuBh5BtekvFh8Mg\"",
		"mtime": "2026-11-01T07:05:45.290Z",
		"size": 8306,
		"path": "../public/assets/landlord-tenant-BRVB_q1G.js"
	},
	"/assets/intellectual-property-CyIu-jSJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"282f-pK5r1l9yrrf2FFfJmVUxtMOuq+8\"",
		"mtime": "2026-11-01T07:05:45.289Z",
		"size": 10287,
		"path": "../public/assets/intellectual-property-CyIu-jSJ.js"
	},
	"/assets/intellectual-property-rights-RAYQXJjY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b63-9ULCrSFZOcUu9jx5f5QjlmKUZnk\"",
		"mtime": "2026-11-01T07:05:45.290Z",
		"size": 2915,
		"path": "../public/assets/intellectual-property-rights-RAYQXJjY.js"
	},
	"/assets/index-CqN5JKXL.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13b94-tWevWVcF1IUlIZWcneU/cGu/+zY\"",
		"mtime": "2026-11-01T07:05:45.298Z",
		"size": 80788,
		"path": "../public/assets/index-CqN5JKXL.css"
	},
	"/assets/link-BroVZncT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8aab-BDDyRi0xKbzjvx31qX1k7C7cGbw\"",
		"mtime": "2026-11-01T07:05:45.290Z",
		"size": 35499,
		"path": "../public/assets/link-BroVZncT.js"
	},
	"/assets/index-Dsau9vOV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"734fb-BxH000TKCgeNfWTbfdS7I8H+fXU\"",
		"mtime": "2026-11-01T07:05:45.283Z",
		"size": 472315,
		"path": "../public/assets/index-Dsau9vOV.js"
	},
	"/assets/logo-BRAMDSRE.png": {
		"type": "image/png",
		"etag": "\"c027-Qv6lWtTTq4hHzZbI7HLrTuLVkMM\"",
		"mtime": "2026-11-01T07:05:45.299Z",
		"size": 49191,
		"path": "../public/assets/logo-BRAMDSRE.png"
	},
	"/assets/logo-header-dUyXR3kF.png": {
		"type": "image/png",
		"etag": "\"9477-8oqKDy4WfzEm8YxFxpRDSsnR/jE\"",
		"mtime": "2026-11-01T07:05:45.299Z",
		"size": 38007,
		"path": "../public/assets/logo-header-dUyXR3kF.png"
	},
	"/assets/maintenance-and-alimony-BMWGKTs-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278b-EswuDqaVVwKO/WLRaznOLwkWyRc\"",
		"mtime": "2026-11-01T07:05:45.291Z",
		"size": 10123,
		"path": "../public/assets/maintenance-and-alimony-BMWGKTs-.js"
	},
	"/assets/matrimonial-matters-CXfXdymq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cee-H3WlgG1ZRmpHAU2XNoP3dGYlbHc\"",
		"mtime": "2026-11-01T07:05:45.291Z",
		"size": 3310,
		"path": "../public/assets/matrimonial-matters-CXfXdymq.js"
	},
	"/assets/nullity-of-marriage-DXsJ7Cb7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"230b-oN+JLXrPkA90C8l8d98NWPYEmtg\"",
		"mtime": "2026-11-01T07:05:45.292Z",
		"size": 8971,
		"path": "../public/assets/nullity-of-marriage-DXsJ7Cb7.js"
	},
	"/assets/mcd-tribunal-matters-BD-eLCdx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b4f-UVGFgH+FiYaJ0JnDyjNMZav3Ksw\"",
		"mtime": "2026-11-01T07:05:45.291Z",
		"size": 11087,
		"path": "../public/assets/mcd-tribunal-matters-BD-eLCdx.js"
	},
	"/assets/offences-against-the-human-body-C_nKTSug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31d3-zfWfvIGJuRaGbQhOb15F877clws\"",
		"mtime": "2026-11-01T07:05:45.292Z",
		"size": 12755,
		"path": "../public/assets/offences-against-the-human-body-C_nKTSug.js"
	},
	"/assets/ni-act-B2f9ccRO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24df-Pxrq9VEzSC62qd/rREgnsKytyDQ\"",
		"mtime": "2026-11-01T07:05:45.292Z",
		"size": 9439,
		"path": "../public/assets/ni-act-B2f9ccRO.js"
	},
	"/assets/offences-aganist-property-Dq5dVQnb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21b7-zlbr1loKeAcTKNDjXgvZBRvmmOM\"",
		"mtime": "2026-11-01T07:05:45.293Z",
		"size": 8631,
		"path": "../public/assets/offences-aganist-property-Dq5dVQnb.js"
	},
	"/assets/patent-registration-BSfZ8Ixz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d34-KPRAVEDzaRs5x206PCHPsfAEt7c\"",
		"mtime": "2026-11-01T07:05:45.294Z",
		"size": 11572,
		"path": "../public/assets/patent-registration-BSfZ8Ixz.js"
	},
	"/assets/probate-of-will-D9xW9Qld.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d94-1NmXVuBpetoE8IPjXhgmq+fVlVM\"",
		"mtime": "2026-11-01T07:05:45.294Z",
		"size": 7572,
		"path": "../public/assets/probate-of-will-D9xW9Qld.js"
	},
	"/assets/property-disputes-Bn48Vqaa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2449-vexxmOa2edbXOFA9yKCglKWJvqE\"",
		"mtime": "2026-11-01T07:05:45.294Z",
		"size": 9289,
		"path": "../public/assets/property-disputes-Bn48Vqaa.js"
	},
	"/assets/recovery-suits-DHRtgqRv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2069-sJaQP/w8mt2LJ6gWE1ti4g1n26s\"",
		"mtime": "2026-11-01T07:05:45.295Z",
		"size": 8297,
		"path": "../public/assets/recovery-suits-DHRtgqRv.js"
	},
	"/assets/public-nuisance-litigation-7aj_hcEK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2896-xufq4CAfxj4Hfkzd8KJ/6R6u3u0\"",
		"mtime": "2026-11-01T07:05:45.295Z",
		"size": 10390,
		"path": "../public/assets/public-nuisance-litigation-7aj_hcEK.js"
	},
	"/assets/rwa-election-matters-8ucvmB5F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e5b-Z7FtF0z8z8mDt7f6nNZcZglOfiQ\"",
		"mtime": "2026-11-01T07:05:45.296Z",
		"size": 11867,
		"path": "../public/assets/rwa-election-matters-8ucvmB5F.js"
	},
	"/assets/routes-CkKTWsli.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"318a-Xtx2/e/TFHR1o93QOxHJSL+F6u8\"",
		"mtime": "2026-11-01T07:05:45.296Z",
		"size": 12682,
		"path": "../public/assets/routes-CkKTWsli.js"
	},
	"/assets/restitution-of-conjugal-rights-as3WW38r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fa7-E/eLHXFbz60SC4TpeUzeKtNyWjs\"",
		"mtime": "2026-11-01T07:05:45.295Z",
		"size": 8103,
		"path": "../public/assets/restitution-of-conjugal-rights-as3WW38r.js"
	},
	"/assets/SiteFooter-CCtMZZiw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a43-55wM68w07/FhsB7frDSf6xmw0LI\"",
		"mtime": "2026-11-01T07:05:45.283Z",
		"size": 14915,
		"path": "../public/assets/SiteFooter-CCtMZZiw.js"
	},
	"/assets/Stagger-DJj_uV2I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ce-GLojZqKTzQjbXFbzNlb47DZ9A40\"",
		"mtime": "2026-11-01T07:05:45.283Z",
		"size": 462,
		"path": "../public/assets/Stagger-DJj_uV2I.js"
	},
	"/assets/succession-certificate-CgA2dRhQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"190b-89zfvD4vQULuqH8EUjGUdQj6ZQI\"",
		"mtime": "2026-11-01T07:05:45.296Z",
		"size": 6411,
		"path": "../public/assets/succession-certificate-CgA2dRhQ.js"
	},
	"/assets/styles-BRGCxvbS.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"171c5-2116dSZJl4XYnsR8hgJpSgI906o\"",
		"mtime": "2026-11-01T07:05:45.299Z",
		"size": 94661,
		"path": "../public/assets/styles-BRGCxvbS.css"
	},
	"/assets/trademark-registration-DPp7961Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27d4-jUMr3Ge2lwn5520J+9OfAGXsYNk\"",
		"mtime": "2026-11-01T07:05:45.297Z",
		"size": 10196,
		"path": "../public/assets/trademark-registration-DPp7961Z.js"
	},
	"/assets/white-collar-crimes-BTvHLSPr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2127-ET+l8RWJTVmOLbTmzETAMT5/xI0\"",
		"mtime": "2026-11-01T07:05:45.297Z",
		"size": 8487,
		"path": "../public/assets/white-collar-crimes-BTvHLSPr.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
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
var _lazy_ViJLno = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ViJLno
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
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
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
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
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };

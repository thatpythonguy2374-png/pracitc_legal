import { t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, i as MapPin, n as Phone, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-Cn9Tqplx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CsE0vNSn.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValuesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]",
		style: { backgroundImage: `url()` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				style: { backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.66 0.135 55 / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.05 60 / 0.4), transparent 55%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 60
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-8 h-1 w-20 bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary",
							children: "Get In Touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-black leading-tight md:text-7xl",
							children: [
								"Contact",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Our Experts"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg leading-8 text-white/75 md:text-xl",
							children: "Reach out to our legal team for a confidential consultation regarding your matter. We combine strategic thinking, legal precision and unwavering advocacy."
						})
					]
				})
			})
		]
	});
}
function ContactSection() {
	function InputField({ label, placeholder, type = "text" }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			placeholder,
			className: "h-14 w-full rounded-sm border border-input bg-background px-4 transition-all duration-300 focus:border-primary focus:outline-none"
		})] });
	}
	function InfoCard({ icon, title, value }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 leading-7 text-muted-foreground",
				children: value
			})] })]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -40
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-5 h-1 w-16 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "Contact Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl font-bold leading-tight md:text-5xl",
						children: [
							"Establish A",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Professional",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Connection"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg leading-8 text-muted-foreground",
						children: "Whether you're an individual, entrepreneur or business, our lawyers are available to discuss your legal concerns with complete confidentiality."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 22 }),
								title: "Office Address",
								value: "New Delhi, India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 22 }),
								title: "Phone",
								value: "+91 11 0000 0000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 22 }),
								title: "Email",
								value: "hello@practiclegal.com"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-l-4 border-primary bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Global Reach."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-8 text-muted-foreground italic",
							children: "We combine local legal expertise with an international perspective, helping clients confidently navigate complex legal matters across jurisdictions."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: 40
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-border bg-card p-8 shadow-xl md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold",
							children: "Request A Consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Complete the form below and one of our legal experts will contact you shortly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-10 space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-8 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
										label: "Full Name",
										placeholder: "John Doe"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
										label: "Email",
										placeholder: "john@example.com",
										type: "email"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-8 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
										label: "Phone Number",
										placeholder: "+91 98765 43210"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
										children: "Practice Area"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "h-14 w-full rounded-sm border border-input bg-background px-4 transition-all focus:border-primary focus:outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Select Practice Area" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Civil Litigation" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Corporate Law" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consumer Disputes" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Real Estate Law" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Intellectual Property" })
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 6,
									className: "w-full rounded-sm border border-input bg-background px-4 py-4 leading-7 transition-all focus:border-primary focus:outline-none",
									placeholder: "Briefly describe your legal matter..."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "group inline-flex items-center gap-4 rounded-sm bg-primary px-10 py-4 font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:-translate-y-1",
									children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 18,
										className: "transition-transform group-hover:translate-x-1"
									})]
								})
							]
						})
					]
				})
			})]
		})
	});
}
function ValuesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/20 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-6 h-1 w-20 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "Why Clients Trust Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl font-bold md:text-6xl",
						children: [
							"Commitment To",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Professional Excellence"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground",
						children: "Every client relationship is built on integrity, transparency and practical legal advice tailored to individual business and personal objectives."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-8 lg:grid-cols-3",
				children: [
					{
						number: "01",
						title: "Rapid Response",
						heading: "Timely Communication",
						body: "Every enquiry is reviewed promptly by our legal team. We understand that legal matters often require immediate attention and clear direction."
					},
					{
						number: "02",
						title: "Confidential",
						heading: "Strict Confidentiality",
						body: "Your information remains protected under the highest standards of professional ethics. Every consultation is handled with complete discretion."
					},
					{
						number: "03",
						title: "Professional",
						heading: "Strategic Representation",
						body: "From advisory services to courtroom advocacy, we provide practical legal strategies focused on achieving meaningful commercial and legal outcomes."
					}
				].map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 60
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: index * .15
					},
					className: "group rounded-sm border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-6xl font-display font-black text-primary/15 transition-all duration-500 group-hover:text-primary",
							children: value.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-primary",
							children: value.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-2xl font-bold",
							children: value.heading
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 leading-8 text-muted-foreground",
							children: value.body
						})
					]
				}, value.number))
			})]
		})
	});
}
//#endregion
export { ContactPage as component };

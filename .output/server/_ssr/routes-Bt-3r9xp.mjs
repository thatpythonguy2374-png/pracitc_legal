import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, r as practiceNav, t as SiteFooter } from "./SiteFooter-Cn9Tqplx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bt-3r9xp.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticeAreas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutFirm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[92vh] overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				style: { backgroundImage: `
            radial-gradient(circle at 20% 20%, oklch(0.66 0.13 55 / .35), transparent 40%),
            radial-gradient(circle at 80% 80%, oklch(0.42 0.05 55 / .35), transparent 45%)
          ` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-14 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-primary",
								children: "Established Expertise"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-8 font-display text-2xl font-extrabold uppercase leading-[1.02] tracking-tight md:text-7xl xl:text-5xl",
							children: [
								"Practical Solutions.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Strategic Advocacy.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Real Results."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl",
							children: "Specializing in Civil Litigation, Consumer Rights, Corporate Advisory, and Real Estate Law while delivering strategic legal solutions with integrity, precision, and commercial insight."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 flex flex-wrap gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "contact",
								className: "inline-flex items-center rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:-translate-y-1",
								children: "Consult Our Experts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#practice",
								className: "inline-flex items-center rounded-sm border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-primary hover:bg-white/5",
								children: "View Practice Areas"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" })
		]
	});
}
function PracticeAreas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "practice",
		className: "bg-background py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "Our Expertise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title mt-4 text-4xl font-bold md:text-6xl",
						children: [
							"Legal Services",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Tailored To",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Your Needs"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg leading-relaxed text-muted-foreground",
						children: "We advise businesses, institutions and individuals across complex legal matters with commercially focused solutions and courtroom excellence."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4",
				children: practiceNav.map((practice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: practice.href,
					className: "group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-5xl font-black text-primary/15 transition-all duration-500 group-hover:text-primary",
							children: ["0", practiceNav.indexOf(practice) + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-2xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-primary",
							children: practice.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-7 text-muted-foreground",
							children: practice.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary",
							children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform duration-300 group-hover:translate-x-2",
								children: "→"
							})]
						})
					]
				}, practice.slug))
			})]
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[var(--ink)] py-28 text-[var(--ink-foreground)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "Why Partner With Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl font-bold leading-tight md:text-6xl",
						children: [
							"Trusted Legal",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Counsel Built",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"On Experience"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-1 w-20 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-lg leading-8 text-white/70",
						children: "At Practic Legal, we combine legal excellence with commercial understanding to help businesses and individuals navigate complex legal challenges confidently."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/60 leading-8",
						children: "Our lawyers focus on practical outcomes, timely advice, and long-term client relationships founded on trust, professionalism, and measurable results."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8",
				children: [
					{
						number: "01",
						title: "Strategic Legal Advice",
						body: "Every matter is approached with commercial awareness and long-term strategy, ensuring practical legal solutions rather than theoretical advice."
					},
					{
						number: "02",
						title: "Client-Centric Representation",
						body: "We work closely with every client, providing transparent communication, tailored strategies, and dedicated representation throughout the matter."
					},
					{
						number: "03",
						title: "Cross-Practice Expertise",
						body: "Our integrated approach combines litigation, corporate advisory, real estate, and regulatory expertise to solve complex legal challenges."
					},
					{
						number: "04",
						title: "Commitment to Excellence",
						body: "Precision, integrity, and meticulous preparation define every stage of our legal services—from consultation to courtroom advocacy."
					}
				].map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-primary hover:bg-white/[0.05]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl font-black text-primary/30 transition-all duration-500 group-hover:text-primary",
							children: feature.number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold uppercase",
							children: feature.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-8 text-white/65",
							children: feature.body
						})] })]
					})
				}, feature.number))
			})]
		})
	});
}
function AboutFirm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-secondary/30 py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-20 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-sm border border-border bg-gradient-to-br from-muted via-secondary to-card shadow-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary text-4xl font-bold text-primary",
									children: "PL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "uppercase tracking-[0.35em] text-muted-foreground",
									children: "Practic Legal"
								})]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-8 -right-8 rounded-sm border border-primary/20 bg-card p-8 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-5xl font-black text-primary",
							children: "30+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground",
							children: "Years of Experience"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: "About Practic Legal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl font-bold leading-tight md:text-6xl",
						children: [
							"Trusted Legal",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Advisors For",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Modern Businesses"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-1 w-20 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-lg leading-8 text-muted-foreground",
						children: "Practic Legal is a full-service law firm committed to delivering strategic legal solutions for businesses, entrepreneurs, institutions, and individuals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-8 text-muted-foreground",
						children: "We combine deep legal knowledge with commercial insight to help clients navigate litigation, corporate transactions, regulatory compliance, real estate matters, and dispute resolution."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-8 text-muted-foreground",
						children: "Our philosophy is simple—understand the client's objectives, minimize legal risk, and deliver practical, commercially effective solutions with integrity and professionalism."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid grid-cols-2 gap-8",
						children: [
							{
								value: "30+",
								label: "Years of Legal Excellence"
							},
							{
								value: "500+",
								label: "Matters Successfully Handled"
							},
							{
								value: "98%",
								label: "Client Satisfaction"
							},
							{
								value: "24/7",
								label: "Dedicated Legal Support"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-2 border-primary pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl font-black text-primary",
								children: item.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground",
								children: item.label
							})]
						}, item.label))
					})
				] })]
			})
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-[var(--ink)] py-32 text-[var(--ink-foreground)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-20",
			style: { backgroundImage: `
            radial-gradient(circle at top right, oklch(0.66 0.13 55 / .35), transparent 40%),
            radial-gradient(circle at bottom left, oklch(0.42 0.05 55 / .25), transparent 45%)
          ` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary",
					children: "Let's Discuss Your Matter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-4xl font-bold leading-tight md:text-6xl",
					children: [
						"Trusted Legal Advice",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Starts With A",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Conversation"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70",
					children: "Whether you're facing a complex dispute, planning a business transaction, or seeking strategic legal guidance, our team is ready to provide practical advice tailored to your objectives."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-wrap justify-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-sm bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
						children: "Schedule Consultation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/practice",
						className: "rounded-sm border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-primary hover:bg-white/5",
						children: "Explore Practice Areas"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.25em] text-primary",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-white/80",
							children: "hello@practiclegal.com"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.25em] text-primary",
							children: "Call"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-white/80",
							children: "+91 11 0000 0000"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.25em] text-primary",
							children: "Offices"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-white/80",
							children: "New Delhi • Mumbai"
						})] })
					]
				})
			]
		})]
	});
}
//#endregion
export { Home as component };

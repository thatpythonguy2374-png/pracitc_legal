import { Link } from "@tanstack/react-router";
import { practiceNav } from "@/lib/practice-nav";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--ink-foreground)] border-t border-white/5">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary h-10 w-10 flex items-center justify-center font-bold text-primary-foreground">
                P
              </div>

              <span className="font-display text-lg font-bold uppercase tracking-widest">
                Practic <span className="text-primary">Legal</span>
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Legal Excellence with Integrity. Representing homebuyers, investors, and property
              owners in complex disputes.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

              <a
                href="tel:+15551234567"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>

          {/* PRACTICE */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              Practice Areas
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              {practiceNav.map((a) => (
                <li key={a.slug}>
                  <Link to={a.href} className="hover:text-primary transition-colors">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span></span>
              </li>

              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary ">Phone:</span>
                <span>+91 85888 36030</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">Email:</span>
                <span>contact@practiclegal.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Practic Legal. All Rights Reserved.
          </p>

          <p className="space-x-2">
            <Link to="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <span>·</span>
            <Link to="/disclaimer" className="hover:text-primary">
              Disclaimer
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;

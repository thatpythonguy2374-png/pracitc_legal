import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { practiceNav } from "@/lib/practice-nav";
import logoHeader from "./public/logo-header.png";

/* True only when an item actually has submenu topics */
const hasTopics = (area: { topics?: unknown[] }) =>
  Array.isArray(area.topics) && area.topics.length > 0;

const mobileLinkClass =
  "block border-b border-border/40 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/70";

const desktopLinkClass =
  "whitespace-nowrap text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary";

export function SiteHeader() {
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileExpanded(null);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Clear any pending close timeout on unmount */
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  /* Close mobile menu */
  const closeMobile = () => {
    setMobileOpen(false);
  };

  /* Close desktop dropdown */
  const closePractice = () => {
    setPracticeOpen(false);
    setOpenGroup(null);
  };

  /* Cancel any pending close and open immediately */
  const handlePracticeEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setPracticeOpen(true);
  };

  /* Delay closing so the user can move the mouse into the menu */
  const handlePracticeLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      closePractice();
    }, 500);
  };

  const mobilePanel = mobileOpen
    ? createPortal(
        <div className="fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto overscroll-contain border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 sm:py-5">
            {/* HOME */}
            <Link to="/" className={mobileLinkClass} onClick={closeMobile}>
              Home
            </Link>

            {/* ABOUT */}
            <Link to="/about" className={mobileLinkClass} onClick={closeMobile}>
              About
            </Link>

            {/* PRACTICE */}
            {practiceNav.map((area) => {
              const hasSub = hasTopics(area);
              const isExpanded = hasSub && mobileExpanded === area.slug;

              return (
                <div key={area.slug} className="border-b border-border/40">
                  <div className="flex min-h-[56px] items-center justify-between gap-3">
                    {/* Practice category link */}
                    <Link
                      to={area.href}
                      className="flex-1 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/70"
                      onClick={closeMobile}
                    >
                      {area.title}
                    </Link>

                    {/* Expand button: only if there are submenu items */}
                    {hasSub && (
                      <button
                        type="button"
                        aria-label={`Toggle ${area.title} submenu`}
                        aria-expanded={isExpanded}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-secondary"
                        onClick={() =>
                          setMobileExpanded((prev) => (prev === area.slug ? null : area.slug))
                        }
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* MOBILE SUBMENU: only if there are submenu items */}
                  {hasSub && (
                    <div
                      className={`grid transition-all duration-200 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-3 ml-2 space-y-1 border-l border-border/60 pl-4 sm:ml-4">
                          {(area.topics ?? []).map((topic) => (
                            <Link
                              key={topic.slug}
                              to={topic.href}
                              className="block rounded-sm px-2 py-2.5 text-sm leading-relaxed text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                              onClick={closeMobile}
                            >
                              {topic.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* TEAM */}
            <Link to="/" hash="team" className={mobileLinkClass} onClick={closeMobile}>
              Team
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="block py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/70"
              onClick={closeMobile}
            >
              Contact
            </Link>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* LOGO */}
          <Link
            to="/"
            className="flex min-w-0 shrink items-center"
            aria-label="Practic Legal – Home"
          >
            <img src={logoHeader} alt="Practic Legal" className="h-9 w-auto sm:h-10" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-8">
            {/* HOME */}
            <Link to="/" className={desktopLinkClass}>
              Home
            </Link>

            {/* ABOUT */}
            <Link to="/about" className={desktopLinkClass}>
              About
            </Link>

            {/* PRACTICE */}
            <div
              className="relative"
              onMouseEnter={handlePracticeEnter}
              onMouseLeave={handlePracticeLeave}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${desktopLinkClass}`}
                aria-haspopup="true"
                aria-expanded={practiceOpen}
              >
                Practice
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    practiceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* FIRST LEVEL */}
              {practiceOpen && (
                <div className="absolute left-1/2 top-full z-[70] -translate-x-1/2 pt-3">
                  <div className="w-60 overflow-visible rounded-md border border-border bg-card shadow-xl sm:w-64">
                    {practiceNav.map((area) => {
                      const hasSub = hasTopics(area);

                      return (
                        <div
                          key={area.slug}
                          className="relative"
                          onMouseEnter={() => setOpenGroup(hasSub ? area.slug : null)}
                        >
                          <Link
                            to={area.href}
                            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                            onClick={closePractice}
                          >
                            <span className="min-w-0">{area.title}</span>

                            {/* Arrow only if there is a submenu */}
                            {hasSub && <ChevronDown className="h-3.5 w-3.5 shrink-0 -rotate-90" />}
                          </Link>

                          {/* SECOND LEVEL: only if there are submenu items */}
                          {hasSub && openGroup === area.slug && (
                            <div className="absolute top-0 left-full ml-1 w-64 overflow-hidden rounded-md border border-border bg-card shadow-xl sm:w-72 max-lg:left-auto max-lg:right-full max-lg:ml-0 max-lg:mr-1">
                              {(area.topics ?? []).map((topic) => (
                                <Link
                                  key={topic.slug}
                                  to={topic.href}
                                  className="block px-4 py-3 text-sm leading-relaxed text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                                  onClick={closePractice}
                                >
                                  {topic.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* TEAM */}
            <Link to="/" hash="team" className={desktopLinkClass}>
              Team
            </Link>

            {/* CONTACT */}
            <Link to="/contact" className={desktopLinkClass}>
              Contact
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-secondary md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobilePanel}
    </>
  );
}

export default SiteHeader;

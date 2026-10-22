import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const focusMain = () => document.getElementById("main")?.focus({ preventScroll: true });

// On navigation: jump to #hash targets, otherwise reset scroll and move focus to <main>
// so keyboard and screen reader users start at the new page's content.
const useRouteFocus = () => {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

    if (target) {
      target.scrollIntoView({ behavior: isFirstRender.current ? "instant" : "smooth" });
      target.focus({ preventScroll: true });
      // Web fonts swapping in can shift the layout; re-align once they're ready
      if (document.fonts.status !== "loaded") {
        document.fonts.ready.then(() => target.scrollIntoView({ behavior: "instant" }));
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (!isFirstRender.current) focusMain();
    }
    isFirstRender.current = false;
  }, [pathname, hash]);
};

const RootLayout = () => {
  useRouteFocus();

  return (
    <>
      <a
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          focusMain();
          document.getElementById("main")?.scrollIntoView();
        }}
        className="btn-light sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-1 focus:z-[60] focus:min-h-0 focus:py-2 focus:outline-dust"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
};

export default RootLayout;

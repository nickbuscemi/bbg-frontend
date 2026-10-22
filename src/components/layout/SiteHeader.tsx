import { Link } from "react-router-dom";
import { UtilityBar } from "./UtilityBar";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

// Sticky with a negative offset equal to the utility bar's height,
// so the utility bar scrolls away and the main bar stays pinned.
export const SiteHeader = () => (
  <header className="sticky -top-11 z-40 bg-white shadow-[0_1px_0_theme(colors.stone.200)]">
    <UtilityBar />
    <div className="container flex h-20 items-center justify-between gap-4">
      <Logo compactOnLg />
      <DesktopNav />
      <div className="flex items-center gap-2">
        <Link to="/contact" className="btn-primary hidden sm:inline-flex">
          Get a free quote
        </Link>
        <MobileMenu />
      </div>
    </div>
  </header>
);

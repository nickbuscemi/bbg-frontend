import { Link, NavLink, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const tabClass = (highlighted: boolean) =>
  cn(
    "inline-flex h-full items-center px-2.5 text-[0.7rem] font-bold uppercase tracking-wider transition-colors sm:px-5 sm:text-[0.8rem] sm:tracking-button",
    highlighted ? "bg-sage text-ink" : "text-dust hover:bg-white/10 hover:text-white",
  );

// Thin bar above the main header: phone, Residential/Commercial toggle, service area + email
export const UtilityBar = () => {
  const { pathname } = useLocation();
  const isCommercial = pathname.startsWith("/commercial");

  return (
    <div className="on-dark bg-ink text-sm text-dust">
      <div className="container flex h-11 items-center justify-between gap-3 lg:grid lg:grid-cols-3">
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 whitespace-nowrap font-semibold text-white hover:text-sage"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>
            <span className="hidden sm:inline">Call </span>
            {site.phone}
          </span>
        </a>

        <nav aria-label="Service type" className="flex h-full lg:justify-self-center">
          <NavLink to="/residential" className={tabClass(!isCommercial)}>
            Residential
          </NavLink>
          <NavLink to="/commercial" className={tabClass(isCommercial)}>
            Commercial
          </NavLink>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <Link to="/service-areas" className="hidden items-center gap-2 whitespace-nowrap hover:text-white xl:inline-flex">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Long Island &amp; NYC
          </Link>
          <a href={site.emailHref} className="inline-flex items-center gap-2 whitespace-nowrap hover:text-white">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
};

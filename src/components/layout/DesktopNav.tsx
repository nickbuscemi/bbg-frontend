import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { simpleLinks } from "@/data/navigation";
import { servicesByAudience, type Audience } from "@/data/services";
import { cn } from "@/lib/utils";

const megaMenus: { audience: Audience; label: string; title: string; blurb: string }[] = [
  {
    audience: "residential",
    label: "Residential",
    title: "Residential pest control",
    blurb: "Protect your home and family with a plan built around your property.",
  },
  {
    audience: "commercial",
    label: "Commercial",
    title: "Commercial pest control",
    blurb: "Keep your business, staff, and customers protected with service on your schedule.",
  },
];

const itemClass =
  "relative inline-flex h-11 items-center gap-1 px-3 text-[0.95rem] font-semibold text-ink transition-colors hover:text-hunter after:absolute after:inset-x-3 after:bottom-1 after:h-[3px] after:origin-left after:scale-x-0 after:bg-fern after:transition-transform hover:after:scale-x-100";
const activeClass = "text-hunter after:scale-x-100";

// Disclosure-pattern menus: a button with aria-expanded toggles a panel of links.
// Opens on click (and on mouse hover), closes on Escape, outside click, focus leaving, or navigation.
export const DesktopNav = () => {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState<Audience | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<number>();

  useEffect(() => setOpen(null), [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: globalThis.PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const hover = (audience: Audience | null) => (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(audience), audience ? 80 : 200);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && open) {
      document.getElementById(`menu-trigger-${open}`)?.focus();
      setOpen(null);
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="relative hidden lg:block"
      onKeyDown={onKeyDown}
    >
      <ul className="flex items-center gap-1">
        {megaMenus.map(({ audience, label, title, blurb }) => {
          const isOpen = open === audience;
          return (
            <li
              key={audience}
              onPointerEnter={hover(audience)}
              onPointerLeave={hover(null)}
              onBlur={(event) => {
                if (isOpen && !event.currentTarget.contains(event.relatedTarget)) setOpen(null);
              }}
            >
              <button
                type="button"
                id={`menu-trigger-${audience}`}
                aria-expanded={isOpen}
                aria-controls={`menu-panel-${audience}`}
                onClick={() => setOpen(isOpen ? null : audience)}
                className={cn(itemClass, (isOpen || pathname.startsWith(`/${audience}`)) && activeClass)}
              >
                {label}
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`menu-panel-${audience}`}
                hidden={!isOpen}
                className="absolute left-0 top-full z-50 pt-3"
              >
                <div className="grid w-[46rem] grid-cols-[15rem_1fr] border border-t-4 border-stone-200 border-t-fern bg-white shadow-xl">
                  <div className="flex flex-col bg-dust-light p-6">
                    <p className="eyebrow">{label}</p>
                    <p className="mt-2 text-xl font-extrabold leading-tight tracking-tight">{title}</p>
                    <p className="mt-3 text-sm text-stone-700">{blurb}</p>
                    <Link to={`/${audience}`} className="text-link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm">
                      All {label.toLowerCase()} services
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <ul className="grid grid-cols-2 gap-1 p-4">
                    {servicesByAudience[audience].map(({ slug, title, summary, icon: Icon }) => (
                      <li key={slug}>
                        <Link
                          to={`/${audience}#${slug}`}
                          className="group flex gap-3 p-3 transition-colors hover:bg-dust-light"
                        >
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-hunter" aria-hidden="true" />
                          <span>
                            <span className="block text-[0.95rem] font-bold leading-snug group-hover:text-hunter">
                              {title}
                            </span>
                            <span className="mt-1 block text-sm leading-snug text-stone-600">{summary}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}

        {simpleLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => cn(itemClass, isActive && activeClass)}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

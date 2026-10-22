import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { servicesByAudience, type Audience } from "@/data/services";
import { site } from "@/data/site";
import { simpleLinks } from "@/data/navigation";
import { Logo } from "./Logo";

const groups: { audience: Audience; label: string }[] = [
  { audience: "residential", label: "Residential" },
  { audience: "commercial", label: "Commercial" },
];

const rowClass =
  "flex min-h-[3.25rem] w-full items-center justify-between border-b border-stone-200 py-3 text-lg font-bold aria-[current=page]:text-hunter";

// Slide-in menu for small screens. Radix Dialog handles focus trap, Escape, and restoring focus.
export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="inline-flex h-12 items-center gap-2 px-2 text-sm font-bold uppercase tracking-button text-ink lg:hidden">
        <Menu className="h-6 w-6" aria-hidden="true" />
        Menu
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
        >
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-stone-200 px-4">
            <Logo />
            <Dialog.Title className="sr-only">Site menu</Dialog.Title>
            <Dialog.Close className="inline-flex h-12 w-12 items-center justify-center text-ink">
              <X className="h-7 w-7" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </Dialog.Close>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto px-4 pb-6">
            {groups.map(({ audience, label }) => (
              <details key={audience} className="group" open={location.pathname.startsWith(`/${audience}`)}>
                <summary className={`${rowClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                  {label}
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="space-y-1 border-b border-stone-200 py-3 pl-3">
                  <li>
                    <Link to={`/${audience}`} className="block py-2 font-semibold text-hunter underline underline-offset-4">
                      All {label.toLowerCase()} services
                    </Link>
                  </li>
                  {servicesByAudience[audience].map(({ slug, title }) => (
                    <li key={slug}>
                      <Link to={`/${audience}#${slug}`} className="block py-2 text-stone-700 hover:text-hunter">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            {[...simpleLinks, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
              <NavLink key={to} to={to} className={rowClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="shrink-0 space-y-3 border-t border-stone-200 bg-dust-light p-4">
            <Link to="/contact" className="btn-primary w-full">
              Get a free quote
            </Link>
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

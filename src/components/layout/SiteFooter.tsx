import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { commercialServices, residentialServices } from "@/data/services";
import { site } from "@/data/site";
import { Logo } from "./Logo";

const columns = [
  {
    heading: "Residential",
    links: residentialServices.map(({ slug, title }) => ({ to: `/residential#${slug}`, label: title })),
  },
  {
    heading: "Commercial",
    links: commercialServices.map(({ slug, title }) => ({ to: `/commercial#${slug}`, label: title })),
  },
  {
    heading: "Company",
    links: [
      { to: "/about-us", label: "About us" },
      { to: "/pest-library", label: "Pest library" },
      { to: "/service-areas", label: "Service areas" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export const SiteFooter = () => (
  <footer className="on-dark bg-pine text-dust">
    <div className="container grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
      <div className="lg:col-span-4">
        <Logo inverted />
        <p className="mt-6 max-w-xs">
          Safe, effective pest control for homes and businesses across {site.serviceAreaSummary}.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex items-center gap-3 font-display text-3xl font-bold tracking-wide text-white hover:text-sage"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
          {site.phone}
        </a>
        <div className="mt-6">
          <Link to="/contact" className="btn-light">
            Get a free quote
          </Link>
        </div>
      </div>

      <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
        {columns.map(({ heading, links }) => (
          <div key={heading}>
            <h2 className="text-sm font-bold uppercase tracking-eyebrow text-white">{heading}</h2>
            <ul className="mt-5 space-y-3">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white hover:underline hover:underline-offset-4">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>

    <div className="bg-pine-deep">
      <div className="container flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <address className="not-italic">
          {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
          <span aria-hidden="true"> · </span>
          <a href={site.emailHref} className="underline underline-offset-4 hover:text-white">
            {site.email}
          </a>
        </address>
      </div>
    </div>
  </footer>
);

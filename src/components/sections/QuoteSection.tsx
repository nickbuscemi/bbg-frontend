import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { site } from "@/data/site";

export const ContactDetails = () => {
  const items = [
    {
      icon: Phone,
      label: "Call us",
      value: (
        <a href={site.phoneHref} className="text-link">
          {site.phone}
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      value: (
        <a href={site.emailHref} className="text-link break-all">
          {site.email}
        </a>
      ),
    },
    {
      icon: Clock,
      label: "Office hours",
      value: site.hours.map(({ days, time }) => (
        <span key={days} className="block">
          {days}, {time}
        </span>
      )),
    },
    {
      icon: MapPin,
      label: "Office",
      value: (
        <>
          {site.address.street}
          <br />
          {site.address.city}, {site.address.region} {site.address.postalCode}
        </>
      ),
    },
  ];

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      {items.map(({ icon: Icon, label, value }) => (
        <li key={label} className="flex gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-hunter text-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-button text-stone-600">{label}</p>
            <p className="mt-1 text-lg">{value}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

interface QuoteSectionProps {
  title?: ReactNode;
  children?: ReactNode;
}

export const QuoteSection = ({
  title = "Get your free, no-obligation quote.",
  children = "Every property is different, so we build a plan around yours. Tell us what's going on and we'll get back to you as soon as possible.",
}: QuoteSectionProps) => (
  <section id="quote" aria-labelledby="quote-title" className="bg-dust-light py-16 lg:py-24">
    <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionIntro id="quote-title" eyebrow="Free quote" title={title}>
          {children}
        </SectionIntro>
        <div className="mt-10">
          <ContactDetails />
        </div>
      </div>
      <div className="lg:col-span-7">
        <QuoteForm />
      </div>
    </div>
  </section>
);

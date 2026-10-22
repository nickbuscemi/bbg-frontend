import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

interface CtaBandProps {
  title?: ReactNode;
  children?: ReactNode;
}

// Light closing band so it doesn't run into the dark footer below it
export const CtaBand = ({
  title = "Ready for a pest-free property?",
  children = "Tell us what you're seeing and we'll put together a free, no-obligation quote.",
}: CtaBandProps) => (
  <section aria-labelledby="cta-title" className="border-t-4 border-fern bg-dust">
    <div className="container flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
      <div className="max-w-2xl">
        <h2 id="cta-title" className="heading-display text-4xl text-pine sm:text-5xl">
          {title}
        </h2>
        <p className="mt-3 text-lg text-ink">{children}</p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3">
        <Link to="/contact" className="btn-primary">
          Get a free quote
        </Link>
        <a href={site.phoneHref} className="btn-outline">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.phone}
        </a>
      </div>
    </div>
  </section>
);

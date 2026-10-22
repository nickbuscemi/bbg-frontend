import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import heroImage from "@/assets/photos/hero-home-2.webp";
import { site } from "@/data/site";
import { highPriority } from "@/lib/image";

const highlights = ["Free, no-obligation quotes", "100% satisfaction guarantee", "Homes & businesses"];

export const HomeHero = () => (
  <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-ink text-white">
    <img
      src={heroImage}
      alt=""
      width={2400}
      height={1600}
      {...highPriority}
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-ink/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink/90 lg:from-10% lg:via-ink/75 lg:via-55% lg:to-ink/20"
    />

    <div className="container pb-32 pt-16 sm:pt-20 lg:pb-40 lg:pt-28">
      <p className="eyebrow">{site.tagline}</p>
      <h1 id="hero-title" className="heading-display mt-4 text-[3.4rem] sm:text-7xl lg:text-[6.25rem]">
        Pests out.
        <span className="block text-sage">Peace of mind in.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-dust sm:text-xl">
        Safe, effective pest control for Long Island and NYC homes and businesses, from a local team that
        follows up until the job is done.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/contact" className="btn-light">
          Get a free quote
        </Link>
        <a href={site.phoneHref} className="btn-outline-light">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {site.phone}
        </a>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-sage" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

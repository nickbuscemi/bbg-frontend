import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Pest } from "@/data/pest-data";
import { PestIcon } from "@/components/ui/PestIcon";

interface PestCardProps {
  pest: Pest;
  showDescription?: boolean;
  headingLevel?: "h2" | "h3";
}

// Whole card is clickable via a stretched link; the heading is the link's accessible name
export const PestCard = ({ pest, showDescription = false, headingLevel: Heading = "h3" }: PestCardProps) => (
  <article className="group relative flex h-full flex-col border border-stone-300 bg-white transition-colors hover:border-hunter has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-[3px] has-[:focus-visible]:outline-hunter">
    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-dust-light">
      {pest.photo ? (
        <img
          src={pest.photo}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <PestIcon src={pest.icon} className="h-20 w-20 text-pine transition-transform duration-500 group-hover:scale-110" />
      )}
    </div>
    <div className="flex flex-1 flex-col p-5">
      <Heading className="text-xl font-extrabold tracking-tight">
        <Link
          to={`/pest-library/${pest.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-none group-hover:text-hunter"
        >
          {pest.name}
        </Link>
      </Heading>
      <p className="text-sm italic text-stone-600">{pest.latin}</p>
      {showDescription && <p className="mt-3 text-[0.95rem] text-stone-700">{pest.description}</p>}
      <span
        aria-hidden="true"
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-button text-hunter"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </article>
);

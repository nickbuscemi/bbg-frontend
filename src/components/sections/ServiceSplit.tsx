import type { ReactNode } from "react";
import { DiamondList } from "@/components/ui/DiamondList";
import { cn } from "@/lib/utils";

interface ServiceSplitProps {
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  headingLevel?: "h2" | "h3";
  image: string;
  imageAlt: string;
  reverse?: boolean;
  list?: string[];
  listLabel?: string;
  actions?: ReactNode;
  children: ReactNode;
}

// Image + copy side by side, with an offset sage block behind the photo
export const ServiceSplit = ({
  eyebrow,
  title,
  titleId,
  headingLevel: Heading = "h2",
  image,
  imageAlt,
  reverse = false,
  list,
  listLabel,
  actions,
  children,
}: ServiceSplitProps) => (
  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <div className={cn("relative mb-3 ml-3 sm:mb-4 sm:ml-4", reverse && "lg:order-2 lg:ml-0 lg:mr-4")}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute -bottom-3 h-3/4 w-3/4 bg-sage sm:-bottom-4",
          reverse ? "-left-3 sm:-left-4 lg:-right-4 lg:left-auto" : "-left-3 sm:-left-4",
        )}
      />
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={1200}
        height={900}
        className="relative aspect-[4/3] w-full object-cover"
      />
    </div>
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={titleId} className={cn("heading-section", eyebrow && "mt-3")}>
        {title}
      </Heading>
      <div className="mt-5 max-w-prose text-lg text-stone-700">{children}</div>
      {list && (
        <>
          {listLabel && <p className="mt-6 font-bold">{listLabel}</p>}
          <DiamondList items={list} className={listLabel ? "mt-3" : "mt-6"} />
        </>
      )}
      {actions && <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">{actions}</div>}
    </div>
  </div>
);

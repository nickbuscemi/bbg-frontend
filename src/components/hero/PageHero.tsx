import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { highPriority } from "@/lib/image";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Background photo. Without one, the hero renders on a light band. */
  image?: string;
  imagePosition?: string;
  children?: ReactNode;
  above?: ReactNode;
}

export const PageHero = ({ eyebrow, title, intro, image, imagePosition = "center", children, above }: PageHeroProps) => {
  const onPhoto = Boolean(image);

  return (
    <section
      aria-labelledby="page-title"
      className={cn("relative isolate overflow-hidden", onPhoto ? "on-dark bg-ink text-white" : "bg-dust-light")}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            {...highPriority}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/75 lg:to-ink/30" />
        </>
      )}
      <div className={cn("container", onPhoto ? "py-20 lg:py-28" : "py-14 lg:py-20")}>
        {above}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1
            id="page-title"
            className={cn(
              "heading-display mt-3 text-5xl sm:text-6xl lg:text-7xl",
              !onPhoto && "text-pine",
            )}
          >
            {title}
          </h1>
          {intro && (
            <div className={cn("mt-6 max-w-2xl text-lg sm:text-xl", onPhoto ? "text-dust" : "text-stone-700")}>
              {intro}
            </div>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
};

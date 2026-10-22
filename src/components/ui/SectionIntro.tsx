import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export const SectionIntro = ({
  eyebrow,
  title,
  children,
  align = "left",
  as: Heading = "h2",
  id,
  className,
}: SectionIntroProps) => (
  <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <Heading id={id} className={cn("heading-section", eyebrow && "mt-3")}>
      {title}
    </Heading>
    {children && <div className="mt-5 text-lg text-stone-700 [.on-dark_&]:text-dust">{children}</div>}
  </div>
);

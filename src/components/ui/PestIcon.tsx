import { cn } from "@/lib/utils";

interface PestIconProps {
  src: string;
  className?: string;
}

// Paints a black silhouette SVG in the current text color via CSS mask. Decorative only.
export const PestIcon = ({ src, className }: PestIconProps) => (
  <span
    aria-hidden="true"
    className={cn("inline-block bg-current", className)}
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      maskSize: "contain",
      WebkitMaskSize: "contain",
    }}
  />
);

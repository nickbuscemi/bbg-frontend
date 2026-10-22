import { Link } from "react-router-dom";
import logoBadge from "@/assets/logos/logo-badge.webp";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Visually hide the wordmark between lg and xl, where the desktop nav needs the room */
  compactOnLg?: boolean;
  inverted?: boolean;
}

// Link text comes from the wordmark (kept for screen readers even when visually hidden)
export const Logo = ({ className, compactOnLg = false, inverted = false }: LogoProps) => (
  <Link to="/" className={cn("inline-flex items-center gap-3", className)}>
    <img
      src={logoBadge}
      alt=""
      width={128}
      height={128}
      className="h-14 w-14 shrink-0 rounded-full sm:h-16 sm:w-16"
    />
    <span className={cn("leading-none", compactOnLg && "lg:max-xl:sr-only")}>
      <span
        className={cn(
          "block font-display text-[1.65rem] font-extrabold uppercase tracking-[0.01em]",
          inverted ? "text-white" : "text-pine",
        )}
      >
        Bugs B Gone
      </span>
      <span
        className={cn(
          "mt-1 block text-[0.7rem] font-bold uppercase tracking-eyebrow",
          inverted ? "text-dust" : "text-hunter",
        )}
      >
        Pest Control
      </span>
    </span>
  </Link>
);

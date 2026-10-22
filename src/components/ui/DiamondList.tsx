import { cn } from "@/lib/utils";

interface DiamondListProps {
  items: string[];
  className?: string;
}

// Bulleted list with small rotated-square markers
export const DiamondList = ({ items, className }: DiamondListProps) => (
  <ul className={cn("space-y-3", className)}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3.5">
        <span aria-hidden="true" className="mt-[0.55em] h-2 w-2 shrink-0 rotate-45 bg-fern" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

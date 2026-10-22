import { useId } from "react";
import { cn } from "@/lib/utils";

const GuaranteeBadge = ({ className }: { className?: string }) => {
  const ringId = useId();
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <defs>
        <path id={ringId} d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
      </defs>
      <circle cx="100" cy="100" r="99" fill="#344E41" />
      <circle cx="100" cy="100" r="91" fill="none" stroke="#A3B18A" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="59" fill="#DAD7CD" />
      <circle cx="100" cy="100" r="53" fill="none" stroke="#588157" strokeWidth="1.5" />
      {/* textLength = ring circumference (2π × 75) so the phrase wraps the full circle */}
      <text fill="#FFFFFF" fontFamily="'Barlow Condensed', sans-serif" fontSize="16" fontWeight="700">
        <textPath href={`#${ringId}`} textLength="468" lengthAdjust="spacing">
          SATISFACTION GUARANTEED ◆ BUGS B GONE ◆
        </textPath>
      </text>
      <text x="100" y="110" textAnchor="middle" fill="#344E41" fontFamily="'Barlow Condensed', sans-serif" fontSize="46" fontWeight="800">
        100%
      </text>
      <text x="100" y="128" textAnchor="middle" fill="#3A5A40" fontFamily="'Hanken Grotesk', sans-serif" fontSize="9" fontWeight="800" letterSpacing="2.5">
        GUARANTEE
      </text>
    </svg>
  );
};

export const GuaranteeBand = ({ className }: { className?: string }) => (
  <section aria-labelledby="guarantee-title" className={cn("bg-white py-16 lg:py-24", className)}>
    <div className="container grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
      <GuaranteeBadge className="mx-auto h-44 w-44 md:h-56 md:w-56" />
      <div className="border-l-4 border-fern pl-6 md:pl-10">
        <p className="eyebrow">The Bugs B Gone guarantee</p>
        <h2 id="guarantee-title" className="heading-section mt-3">
          We're not finished until you're satisfied.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-stone-700">
          Every service is backed by our <strong className="text-ink">100% satisfaction guarantee</strong>. If
          pests come back between scheduled visits, let us know. We follow up until the problem is solved, and
          emergency visits are available when you need us fast.
        </p>
      </div>
    </div>
  </section>
);

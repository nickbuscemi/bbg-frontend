import { processSteps } from "@/data/services";
import { SectionIntro } from "@/components/ui/SectionIntro";

export const ProcessSteps = () => (
  <section aria-labelledby="process-title" className="on-dark bg-pine py-16 text-white lg:py-24">
    <div className="container">
      <SectionIntro id="process-title" eyebrow="How it works" title="From first call to problem solved.">
        From the first call to the follow-up visit, you'll always know what's happening and why.
      </SectionIntro>
      <ol className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {processSteps.map(({ title, text }, index) => (
          <li key={title} className="bg-pine py-8 sm:p-8">
            <span aria-hidden="true" className="font-display text-6xl font-extrabold leading-none text-sage">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-dust">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

import { PageHero } from '@/components/hero/PageHero';
import { PestCard } from '@/components/sections/PestCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { usePageTitle } from '@/hooks/usePageTitle';
import { insects } from '@/data/pest-data';

export const PestLibrary = () => {
  usePageTitle('Pest Library');

  return (
    <>
      <PageHero
        eyebrow="Pest library"
        title="Know what's bugging you."
        intro="Effective pest control starts with knowing what you're dealing with. Learn how to identify common Long Island and NYC pests, and what you can do about them."
      />

      <section aria-label="Pests" className="bg-white py-16 lg:py-20">
        <div className="container">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {insects.map((pest) => (
              <li key={pest.slug}>
                <PestCard pest={pest} showDescription headingLevel="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Seeing something not on this list?">
        We handle far more than what's listed here. Tell us what you're seeing and we'll identify it for you.
      </CtaBand>
    </>
  );
};

export default PestLibrary;

import { MapPin } from 'lucide-react';
import { PageHero } from '@/components/hero/PageHero';
import { ZipChecker } from '@/components/sections/ZipChecker';
import { CtaBand } from '@/components/sections/CtaBand';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serviceRegions } from '@/lib/service-area';
import { site } from '@/data/site';
import heroImage from '@/assets/photos/tech-fence-spray.webp';
import brooklynImage from '@/assets/photos/area-brooklyn.webp';
import longIslandImage from '@/assets/photos/area-long-island.webp';

const groups = [
  { group: 'Long Island', image: longIslandImage, imageAlt: 'Fire Island Lighthouse at the end of a boardwalk through beach grass' },
  { group: 'New York City', image: brooklynImage, imageAlt: 'Row of Brooklyn brownstones on a tree-lined street' },
].map((item) => ({
  ...item,
  regions: serviceRegions.filter((region) => region.group === item.group),
}));

const ServiceAreas = () => {
  usePageTitle('Service Areas');

  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Long Island and all five boroughs."
        intro={`Based in ${site.address.city}, we provide residential and commercial pest control across Nassau and Suffolk counties and every borough of New York City.`}
        image={heroImage}
        imagePosition="60% center"
      />

      <section aria-labelledby="zip-check-title" className="bg-stone-100 py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-8 border-t-4 border-fern bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 id="zip-check-title" className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                Not sure if we cover your neighborhood?
              </h2>
              <p className="mt-3 text-stone-700">Enter your ZIP code to check.</p>
            </div>
            <ZipChecker />
          </div>
        </div>
      </section>

      <section aria-labelledby="regions-title" className="bg-white py-16 lg:py-24">
        <div className="container">
          <SectionIntro id="regions-title" eyebrow="Where we work" title="Areas we serve">
            Whether you're in a Suffolk County colonial, a Brooklyn brownstone, or a Manhattan storefront,
            our team can get to you.
          </SectionIntro>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {groups.map(({ group, image, imageAlt, regions }) => (
              <div key={group}>
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  width={1600}
                  height={1066}
                  className="mb-6 aspect-[16/9] w-full object-cover"
                />
                <h3 className="border-b-4 border-fern pb-3 text-2xl font-extrabold tracking-tight">{group}</h3>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {regions.map(({ name, note }) => (
                    <li key={name} className="flex gap-3 bg-dust-light p-5">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-hunter" aria-hidden="true" />
                      <span>
                        <span className="block text-lg font-bold">{name}</span>
                        {note && <span className="mt-1 block text-stone-700">{note}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default ServiceAreas;

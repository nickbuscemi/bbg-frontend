import { Link } from 'react-router-dom';
import { HomeHero } from '@/components/hero/HomeHero';
import { ZipBand } from '@/components/sections/ZipChecker';
import { ServiceSplit } from '@/components/sections/ServiceSplit';
import { GuaranteeBand } from '@/components/sections/GuaranteeBand';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { PestCard } from '@/components/sections/PestCard';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { usePageTitle } from '@/hooks/usePageTitle';
import { commercialServices, residentialServices } from '@/data/services';
import { insects } from '@/data/pest-data';
import residentialImage from '@/assets/photos/tech-spraying-patio.webp';
import commercialImage from '@/assets/photos/tech-commercial-treatment.webp';

const featuredPests = ['cockroaches', 'termites', 'ants', 'bed-bugs', 'mosquitoes']
  .map((slug) => insects.find((pest) => pest.slug === slug)!);

const Home = () => {
  usePageTitle();

  return (
    <>
      <HomeHero />
      <ZipBand />

      <section aria-labelledby="services-title" className="bg-dust-light py-16 lg:py-24">
        <div className="container">
          <SectionIntro id="services-title" eyebrow="Our services" title="Targeted treatment. Lasting prevention." align="center">
            Every property is different, so every plan starts with an inspection. We find the source, treat it
            safely, and help keep pests from coming back.
          </SectionIntro>

          <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
            <ServiceSplit
              eyebrow="For your home"
              title="Residential pest control"
              headingLevel="h3"
              image={residentialImage}
              imageAlt="Technician with a backpack sprayer treating plants outside a home"
              list={residentialServices.slice(1).map(({ title }) => title)}
              actions={
                <Link to="/residential" className="btn-primary">
                  Residential services
                </Link>
              }
            >
              From termites in the foundation to ants in the kitchen, we protect your home and family with safe,
              effective treatment and a plan built around your property.
            </ServiceSplit>

            <ServiceSplit
              eyebrow="For your business"
              title="Commercial pest control"
              headingLevel="h3"
              image={commercialImage}
              imageAlt="Technician in protective gear treating an outdoor commercial seating area"
              reverse
              list={commercialServices.map(({ title }) => title)}
              actions={
                <Link to="/commercial" className="btn-primary">
                  Commercial services
                </Link>
              }
            >
              Keep your staff, customers, and reputation protected. We tailor service to your industry and
              schedule visits around your business hours.
            </ServiceSplit>
          </div>
        </div>
      </section>

      <GuaranteeBand />
      <ProcessSteps />

      <section aria-labelledby="pests-title" className="bg-white py-16 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro id="pests-title" eyebrow="Identify and protect" title="Know what's bugging you.">
              Pest control starts with understanding the pest. Learn how to spot common invaders and what you
              can do about them.
            </SectionIntro>
            <Link to="/pest-library" className="btn-outline shrink-0 self-start md:self-auto">
              Browse the pest library
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featuredPests.map((pest) => (
              <li key={pest.slug}>
                <PestCard pest={pest} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteSection />
    </>
  );
};

export default Home;

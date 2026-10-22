import { Link } from 'react-router-dom';
import { ArrowDown, Phone } from 'lucide-react';
import { PageHero } from '@/components/hero/PageHero';
import { ServiceSplit } from '@/components/sections/ServiceSplit';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { GuaranteeBand } from '@/components/sections/GuaranteeBand';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { usePageTitle } from '@/hooks/usePageTitle';
import { serviceOptionValue, servicesByAudience, type Audience } from '@/data/services';
import { site } from '@/data/site';
import residentialHero from '@/assets/photos/tech-spraying-shrubs.webp';
import commercialHero from '@/assets/photos/tech-commercial-treatment.webp';

const content: Record<Audience, {
  pageTitle: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroPosition: string;
  servicesTitle: string;
  servicesIntro: string;
  quoteTitle: string;
}> = {
  residential: {
    pageTitle: 'Residential Pest Control',
    eyebrow: 'Residential pest control',
    title: 'Protect the place you call home.',
    intro: 'Safe, effective treatment for houses, apartments, and condos across Long Island and NYC, built around your home and your family.',
    heroImage: residentialHero,
    heroPosition: '70% center',
    servicesTitle: 'Residential services',
    servicesIntro: 'Not sure which service you need? Start with an inspection and we\'ll tell you exactly what\'s going on.',
    quoteTitle: 'Get a free quote for your home.',
  },
  commercial: {
    pageTitle: 'Commercial Pest Control',
    eyebrow: 'Commercial pest control',
    title: 'Pest control that works on your schedule.',
    intro: 'Protect your staff, customers, and reputation with service tailored to your industry and scheduled around your business hours.',
    heroImage: commercialHero,
    heroPosition: '65% center',
    servicesTitle: 'Industries we serve',
    servicesIntro: 'Every business has different risks. We build a plan around your facility, your inspections, and your hours.',
    quoteTitle: 'Get a free quote for your business.',
  },
};

const ServiceLanding = ({ audience }: { audience: Audience }) => {
  const page = content[audience];
  const services = servicesByAudience[audience];
  usePageTitle(page.pageTitle);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        image={page.heroImage}
        imagePosition={page.heroPosition}
      >
        <Link to="/contact" className="btn-light">Get a free quote</Link>
        <a href={site.phoneHref} className="btn-outline-light">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {site.phone}
        </a>
      </PageHero>

      <section aria-labelledby="service-index-title" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionIntro id="service-index-title" eyebrow="What we do" title={page.servicesTitle}>
            {page.servicesIntro}
          </SectionIntro>
          <ul className="mt-10 grid gap-px border border-stone-300 bg-stone-300 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, summary, icon: Icon }) => (
              <li key={slug} className="bg-white">
                <a href={`#${slug}`} className="group flex h-full gap-4 p-6 transition-colors hover:bg-dust-light">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-dust-light text-hunter transition-colors group-hover:bg-hunter group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="flex items-center gap-2 text-lg font-extrabold tracking-tight group-hover:text-hunter">
                      {title}
                      <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    </span>
                    <span className="mt-1 block text-stone-700">{summary}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          tabIndex={-1}
          aria-labelledby={`${service.slug}-title`}
          className={index % 2 === 0 ? 'bg-dust-light py-16 lg:py-24' : 'bg-white py-16 lg:py-24'}
        >
          <div className="container">
            <ServiceSplit
              eyebrow={page.eyebrow}
              title={service.title}
              titleId={`${service.slug}-title`}
              image={service.image}
              imageAlt={service.imageAlt}
              reverse={index % 2 === 1}
              list={service.included}
              listLabel="What's included"
              actions={
                <>
                  <Link
                    to={`/contact?service=${encodeURIComponent(serviceOptionValue(audience, service.title))}`}
                    className="btn-primary"
                  >
                    Get a quote for {service.title.toLowerCase()}
                  </Link>
                  <a href={site.phoneHref} className="text-link">
                    or call {site.phone}
                  </a>
                </>
              }
            >
              {service.description}
            </ServiceSplit>
          </div>
        </section>
      ))}

      <ProcessSteps />
      <GuaranteeBand />
      <QuoteSection title={page.quoteTitle} />
    </>
  );
};

export default ServiceLanding;

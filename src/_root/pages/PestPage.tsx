import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { PestCard } from '@/components/sections/PestCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { DiamondList } from '@/components/ui/DiamondList';
import { PestIcon } from '@/components/ui/PestIcon';
import { usePageTitle } from '@/hooks/usePageTitle';
import { findPest, insects } from '@/data/pest-data';
import { residentialServices } from '@/data/services';
import { site } from '@/data/site';
import NotFound from './NotFound';

const PestPage = () => {
  const { slug } = useParams();
  const pest = findPest(slug);
  usePageTitle(pest ? `${pest.name} | Pest Library` : 'Page not found');

  if (!pest) return <NotFound />;

  const service = residentialServices.find(({ slug }) => slug === pest.service);
  const related = insects.filter(({ slug }) => slug !== pest.slug).slice(0, 4);

  return (
    <>
      <section aria-labelledby="page-title" className="bg-dust-light">
        <div className="container py-10 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm">
              <li><Link to="/" className="text-link">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4 text-stone-500" /></li>
              <li><Link to="/pest-library" className="text-link">Pest library</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4 text-stone-500" /></li>
              <li aria-current="page" className="font-semibold">{pest.name}</li>
            </ol>
          </nav>
          <div className="mt-8 flex items-center gap-6">
            <span className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white sm:inline-flex">
              <PestIcon src={pest.icon} className="h-14 w-14 text-pine" />
            </span>
            <div>
              <h1 id="page-title" className="heading-display text-6xl text-pine lg:text-7xl">{pest.name}</h1>
              <p className="mt-1 text-lg italic text-stone-700">{pest.latin}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-14 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-7">
            <p className="text-xl font-medium leading-relaxed">{pest.description}</p>
            {pest.photo && (
              <img
                src={pest.photo}
                alt={pest.photoAlt ?? ''}
                width={1200}
                height={800}
                className="mt-10 aspect-[3/2] w-full object-cover"
              />
            )}
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight sm:text-3xl">About {pest.name.toLowerCase()}</h2>
            <p className="mt-4 text-lg text-stone-700">{pest.detail}</p>
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight sm:text-3xl">Did you know?</h2>
            <DiamondList items={pest.facts} className="mt-5 text-lg text-stone-700" />
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight sm:text-3xl">What you can do</h2>
            <p className="mt-4 text-lg text-stone-700">{pest.prevention}</p>
          </article>

          <aside aria-labelledby="help-title" className="lg:col-span-5">
            <div className="on-dark bg-pine p-8 text-white lg:sticky lg:top-28">
              <p className="eyebrow">Need help?</p>
              <h2 id="help-title" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
                Dealing with {pest.name.toLowerCase()}?
              </h2>
              <p className="mt-4 text-dust">
                Our team can identify the problem, treat it at the source, and help keep it from coming back.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link to="/contact" className="btn-light">Get a free quote</Link>
                <a href={site.phoneHref} className="btn-outline-light">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {site.phone}
                </a>
              </div>
              {service && (
                <p className="mt-6 text-dust">
                  Learn more about our{' '}
                  <Link to={`/residential#${service.slug}`} className="text-link">
                    {service.title.toLowerCase()}
                  </Link>
                  .
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>

      <section aria-labelledby="related-title" className="bg-stone-100 py-16 lg:py-20">
        <div className="container">
          <h2 id="related-title" className="heading-section">More pests to know</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <PestCard pest={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default PestPage;

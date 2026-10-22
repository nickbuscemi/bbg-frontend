import { ClipboardList, Leaf, Repeat, SlidersHorizontal } from 'lucide-react';
import { PageHero } from '@/components/hero/PageHero';
import { ServiceSplit } from '@/components/sections/ServiceSplit';
import { GuaranteeBand } from '@/components/sections/GuaranteeBand';
import { CtaBand } from '@/components/sections/CtaBand';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { usePageTitle } from '@/hooks/usePageTitle';
import { processSteps } from '@/data/services';
import heroImage from '@/assets/photos/hero-home-1.webp';
import storyImage from '@/assets/photos/tech-planning-tablet.webp';
import stepContact from '@/assets/photos/customer-phone-call.webp';
import stepInspect from '@/assets/photos/inspection-graphic.webp';
import stepTreat from '@/assets/photos/tech-kitchen-treatment.webp';
import stepFollowUp from '@/assets/photos/tech-baseboard-spray.webp';

const values = [
  {
    icon: Leaf,
    title: 'Safe, eco-conscious methods',
    text: 'We use modern techniques and eco-friendly solutions that protect your family, pets, and the environment.',
  },
  {
    icon: ClipboardList,
    title: 'Thorough inspections',
    text: 'We pinpoint the exact pest and the source of the problem before we treat anything.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Plans built for you',
    text: 'One-time service or ongoing maintenance, every plan is customized to your property and needs.',
  },
  {
    icon: Repeat,
    title: 'Real follow-through',
    text: 'We follow up until the problem is solved and offer emergency visits for urgent situations.',
  },
];

const stepImages = [
  { src: stepContact, alt: 'Customer on the phone scheduling a visit' },
  { src: stepInspect, alt: 'Magnifying glass over a paper house cutout' },
  { src: stepTreat, alt: 'Technician treating beneath kitchen cabinets' },
  { src: stepFollowUp, alt: 'Technician applying follow-up treatment along a baseboard' },
];

const About = () => {
  usePageTitle('About Us');

  return (
    <>
      <PageHero
        eyebrow="About Bugs B Gone"
        title="Local pros. Real follow-through."
        intro="We're a Long Island pest control company dedicated to keeping homes and businesses safe, healthy, and pest-free."
        image={heroImage}
        imagePosition="65% 70%"
      />

      <section aria-labelledby="story-title" className="bg-white py-16 lg:py-24">
        <div className="container">
          <ServiceSplit
            eyebrow="Who we are"
            title="Pest control with a personal touch."
            titleId="story-title"
            image={storyImage}
            imageAlt="Technician reviewing a treatment plan with a homeowner"
          >
            <p>
              At Bugs B Gone, our trained professionals combine the latest techniques with eco-friendly
              solutions to handle any pest problem, big or small. From the moment you contact us, our friendly
              and knowledgeable team guides you through the process and makes sure every concern is addressed.
            </p>
            <p className="mt-4">
              We know every home and business is unique, so we never use a one-size-fits-all approach. Whether
              you need a one-time service or ongoing maintenance, we'll keep your property pest-free year-round
              so you can focus on what matters most.
            </p>
          </ServiceSplit>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-dust-light py-16 lg:py-24">
        <div className="container">
          <SectionIntro id="values-title" eyebrow="Why choose us" title="What sets us apart" align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="border-t-4 border-fern bg-white p-6 lg:p-8">
                <Icon className="h-8 w-8 text-hunter" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-stone-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="expect-title" className="bg-white py-16 lg:py-24">
        <div className="container">
          <SectionIntro id="expect-title" eyebrow="The Bugs B Gone experience" title="What to expect from us">
            Here's how a typical service works, from your first call to the final follow-up.
          </SectionIntro>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ title, text }, index) => (
              <li key={title}>
                <img
                  src={stepImages[index].src}
                  alt={stepImages[index].alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
                <p aria-hidden="true" className="mt-5 font-display text-5xl font-extrabold leading-none text-fern">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-stone-700">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GuaranteeBand className="bg-stone-100" />
      <CtaBand />
    </>
  );
};

export default About;

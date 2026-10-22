import { PageHero } from '@/components/hero/PageHero';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { usePageTitle } from '@/hooks/usePageTitle';

const Contact = () => {
  usePageTitle('Contact & Free Quote');

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's get rid of your pest problem."
        intro="Request a free, no-obligation quote or reach out with a question. We'll get back to you as soon as possible."
      />
      <QuoteSection title="Tell us what's going on.">
        The more you can tell us about what you're seeing, the faster we can help. Prefer to talk? Give us a call
        during office hours.
      </QuoteSection>
    </>
  );
};

export default Contact;

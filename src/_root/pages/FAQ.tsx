import { ChevronDown } from 'lucide-react';
import { PageHero } from '@/components/hero/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { usePageTitle } from '@/hooks/usePageTitle';
import { faqs } from '@/data/faq';

const FaqPage = () => {
  usePageTitle('Frequently Asked Questions');

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Answers to the questions we hear most. Don't see yours? Give us a call or send us a message."
      />

      <section aria-label="Questions and answers" className="bg-white py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="border-t border-stone-300">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border-b border-stone-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold hover:text-hunter sm:text-xl [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-dust-light text-hunter transition-colors group-open:bg-hunter group-open:text-white">
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </span>
                </summary>
                <p className="max-w-prose pb-6 text-lg text-stone-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Still have questions?">
        We're happy to help. Reach out and we'll get back to you as soon as possible.
      </CtaBand>
    </>
  );
};

export default FaqPage;

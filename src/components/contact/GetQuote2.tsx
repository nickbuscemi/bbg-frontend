import React, { useState, useEffect } from 'react';
import { QuoteForm } from '../forms/QuoteForm';
import ContactInfo from '../misc/ContactInfo';

export const GetQuote2: React.FC = () => {
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsMdUp(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-10 bg-logoGreen sm:py-16 lg:py-24 font-helvetica-bold-condensed">
      <div className="px-4 mx-auto sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                Get your free, personalized, no obligation quote today.
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                Our experts are trained to diagnose and treat all types of pest problems. Because every home is different, they work with you to design a unique program for your situation.
              </p>
              {/*<img
                className="hidden w-full pt-10 md:block"
                src={bigbug}
                alt=""
              />*/}
              {isMdUp ? <ContactInfo /> : <QuoteForm />}
            </div>
          </div>

          {isMdUp ? <QuoteForm /> : <ContactInfo />}
        </div>
      </div>
    </section>
  );
};

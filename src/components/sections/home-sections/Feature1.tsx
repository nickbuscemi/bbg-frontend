import { useState, useEffect, useRef } from 'react';
import vertical2 from '../../../assets/images/verticle-crops/vertical2.jpeg';

export default function Feature1() {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" ref={sectionRef}>
            <div className={`max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 ${isInView ? 'animate__animated animate__fadeInUp' : ''}`}>
                <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                    <div className="">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">For your home..</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">Our expert pest control services help safeguard your home from unwanted pests. We use safe and effective methods to ensure your peace of mind.</p>
                        <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-gray-100 transition-all duration-200 bg-logoGreen rounded-md lg:mt-6 hover:bg-emerald-800 focus:bg-emerald-400" role="button">
                            Residential services
                        </a>
                    </div>
                    <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                        <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                            <img className="ml-auto rounded-md" src={vertical2} alt="Pest Control Expert" />
                            <div className="absolute -bottom-10 -left-16">
                                <div className="bg-logoGreen rounded-md">
                                    <div className="px-8 py-10">
                                        <span className="block text-4xl font-bold text-white lg:text-5xl"> 100% </span>
                                        <span className="block mt-2 text-base leading-tight text-gray-100"> Satisfaction Guarantee<br />On All Services </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

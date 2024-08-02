import { useState, useEffect, useRef } from 'react';
import vertical3 from '../../../assets/images/verticle-crops/vertical3.jpeg';
import vertical4 from '../../../assets/images/verticle-crops/vertical4.jpeg';

export default function Feature2() {
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
                threshold: 0.3,
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
        <section className="py-10 bg-logoDarkGray sm:py-16 lg:py-24" ref={sectionRef}>
            <div className={`max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 ${isInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                    <div className="order-2 md:order-1 pr-12 sm:pr-0">
                        <div className="relative max-w-xs mb-12">
                            <img className="object-bottom rounded-md" src={vertical4} alt="Pest Control Technician" />
                            <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src={vertical3} alt="Happy Business Owner" />
                        </div>
                    </div>
                    <div className='order-1 md:order-2'>
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Or your business.</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-300">Our commercial pest control services are designed to keep your business pest-free. We offer tailored solutions to meet the unique needs of your industry and ensure a safe environment for your employees and customers.</p>
                        <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-gray-100 transition-all duration-200 bg-logoGreen rounded-md lg:mt-6 hover:bg-emerald-800 focus:bg-emerald-400" role="button">
                            Commercial
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useEffect, useRef } from 'react';
import phone from '../../../assets/images/aboutImages/phone.jpeg';
import inspection from '../../../assets/images/aboutImages/inspection.jpeg';
import planning from '../../../assets/images/aboutImages/planning.jpeg';
import treatment from '../../../assets/images/aboutImages/treatment.jpeg';
import 'animate.css';

const About1 = () => {
    const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (gridItemsRef.current) {
            gridItemsRef.current.forEach((item, index) => {
                if (item) {
                    observer.observe(item);
                    item.style.animationDelay = `${index * 0.3}s`;
                }
            });
        }
    }, []);

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 font-helvetica-bold-condensed">
                <div className="animate__animated animate__fadeInUp max-w-2xl mx-auto text-center">
                    <p className="text-lg font-medium text-logoGreen font-pj">THE BUGS BE GONE EXPERIENCE</p>
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">What To Expect From Us</h2>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-16 md:text-left">
                    <div ref={(el) => (gridItemsRef.current[0] = el)}>
                        <h3 className="text-2xl font-bold text-logoGreen font-pj">Contact Us</h3>
                        <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Schedule a visit by phone, email, or website.</p>

                        <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src={phone} alt="Contact Us" />
                        <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Reach out to us to discuss your pest issues and schedule a convenient time for an inspection.</p>
                    </div>

                    <div ref={(el) => (gridItemsRef.current[1] = el)}>
                        <h3 className="text-2xl font-bold text-logoGreen font-pj">Inspect and Diagnose</h3>
                        <p className="mt-4 text-base leading-7 text-gray-900 font-pj">We inspect the problem and diagnose the issue.</p>

                        <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src={inspection} alt="Inspect and Diagnose" />
                        <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Our experts will conduct a thorough inspection to identify the type of pest and the extent of the infestation.</p>
                    </div>

                    <div ref={(el) => (gridItemsRef.current[2] = el)}>
                        <h3 className="text-2xl font-bold text-logoGreen font-pj">Initial Treatment</h3>
                        <p className="mt-4 text-base leading-7 text-gray-900 font-pj">We offer an initial treatment and maintenance options.</p>

                        <img className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl" src={planning} alt="Initial Treatment" />
                        <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Based on our diagnosis, we provide an initial treatment plan and discuss options for monthly or quarterly maintenance.</p>
                    </div>

                    <div ref={(el) => (gridItemsRef.current[3] = el)}>
                        <h3 className="text-2xl font-bold text-logoGreen font-pj">Follow Up</h3>
                        <p className="mt-4 text-base leading-7 text-gray-900 font-pj">We follow up on issues and provide emergency visits if needed.</p>

                        <img className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl" src={treatment} alt="Follow Up" />
                        <p className="text-base leading-7 text-gray-700 mt-7 font-pj">We ensure your pest issues are resolved with follow-up visits and offer emergency services for urgent situations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About1;

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { insects } from '../../data/pest-data';
import '../../css/effects.css';
import '../../css/hovers.css';
import 'animate.css';

export const PestLibrary = () => {
    const titleRef = useRef<HTMLDivElement | null>(null);
    const insectItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        if (insectItemsRef.current) {
            insectItemsRef.current.forEach((item, index) => {
                if (item) {
                    observer.observe(item);
                    item.style.animationDelay = `${index * 0.3}s`;
                }
            });
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }

            if (insectItemsRef.current) {
                insectItemsRef.current.forEach((item) => {
                    if (item) {
                        observer.unobserve(item);
                    }
                });
            }
        };
    }, []);

    return (
        <section className="py-12 bg-white sm:py-16 lg:pt-20 font-helvetica-regular">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-0">
                <div ref={titleRef} className="text-center">
                    <p className="text-md font-bold text-logoGreen uppercase">Pest Library</p>
                    <h1 className="mt-2 text-3xl font-bold text-black sm:text-4xl xl:text-5xl">Explore Our Comprehensive Pest Library</h1>
                    <Link to="/" className="inline-block mt-4 text-logoGreen font-semibold hover-effect">
                        Go Back to Home <span className="arrow">&rarr;</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:mt-24">
                    {insects.map((insect, index) => (
                        <div
                            className="hvr-shutter-out-horizontal"
                            ref={(el) => (insectItemsRef.current[index] = el)}
                            key={index}
                        >
                            <Link
                                to={`/${insect.name.toLowerCase()}`}
                                className={`p-4 group`}
                            >
                                <div className="relative">
                                    <img className="mx-auto" src={insect.img} alt={insect.alt} style={{ width: '30%', height: 'auto' }} />
                                </div>
                                <h3 className="mt-6 text-lg font-bold text-gray-900 font-pj">{insect.name} <br /><span className="italic text-sm text-gray-500">{insect.latin}</span></h3>
                                <p className="mt-3 text-sm text-gray-600 font-pj">{insect.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-900">Dealing with pests not on this list?</p>
                    <Link to="/contact" className="inline-block mt-4 text-logoGreen font-semibold hover-effect">
                        Contact Us Today <span className="arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PestLibrary;

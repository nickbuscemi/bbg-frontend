
import { Link } from 'react-router-dom';
import {insects}  from '../../data/pest-data'
import '../../css/effects.css';



export const Pests = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:pt-20 font-helvetica-bold-condensed">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-logoGreen sm:text-4xl xl:text-5xl">PEST LIBRARY</h2>
                    <p className="mt-4 text-base leading-7 text-gray-900 font-pj">We believe pest control begins with a deep understanding of the problem</p>

                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:mt-24">
                    {insects.map((insect, index) => (
                        <div className='hvr-shutter-out-horizontal'>
                            <Link
                                key={index}
                                to={`/${insect.name.toLowerCase()}`}
                                className={`p-4 ${index >= 4 ? 'hidden sm:block' : ''} group`}
                            >
                                <div className="relative">
                                    <img className="mx-auto" src={insect.img} alt={insect.alt} style={{ width: '30%', height: 'auto' }} />
                                </div>
                                <h3 className="mt-6 text-lg font-bold text-gray-900 font-pj">{insect.name} <br /><span className="italic">{insect.latin}</span></h3>
                                <p className="mt-3 text-sm text-gray-600 font-pj">{insect.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="pt-12 text-center">
                    <a href="#" className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-logoGreen rounded hover:bg-green-700 focus:bg-green-800">
                        View Our Entire Pest Library
                    </a>
                </div>
            </div>
        </section>
    );
};

import React, { useState, useEffect } from 'react';
import stock6 from '../../assets/images/stock6.jpg';
import stock3 from '../../assets/images/stock3.jpg';
import stock7 from '../../assets/images/stock7.jpg';
import stock9 from '../../assets/images/stock9.jpg';
import { Link } from 'react-router-dom';
import 'animate.css';


export const Hero: React.FC = () => {
  const pests = ["Bed Bugs", "Termites", "Rodents", "Roaches", "Fruit Flies", "Wasps", "and more.."];
  const images = [stock6, stock3, stock7, stock9];

  const [currentPest, setCurrentPest] = useState(pests[0]);
  const [pestIndex, setPestIndex] = useState(0);

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const pestInterval = setInterval(() => {
      setPestIndex((prevIndex) => (prevIndex + 1) % pests.length);
    }, 5000); // Change pest every 2 seconds
    return () => clearInterval(pestInterval);
  }, [pests.length]);

  useEffect(() => {
    setCurrentPest(pests[pestIndex]);
  }, [pestIndex, pests]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <div className="bg-white">
      <section className="bg-slate-100 bg-opacity-30 py-0 sm:py-0 lg:py-6 lg:pb-32 font-helvetica-bold-condensed">
        <div className="px-4 mx-auto md:pt-12 sm:px-6 lg:px-24">
          <div className="grid items-center grid-cols-1 gap-12 xl:grid-cols-3">
            <div className="text-center md:text-left max-w-2xl">
              <p className="text-base font-semibold tracking-wider text-logoGreen uppercase">Serving Long Island and New York City</p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">PROTECTING YOUR HOME AND BUSINESS FROM <br></br> <span className="text-logoGreen">{currentPest?.toUpperCase()}.</span></h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Using safe & effective pest control solutions.</p>
              {/*<a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-gray-100 transition-all duration-200 bg-logoGreen rounded-md lg:mt-6 hover:bg-emerald-800 focus:bg-emerald-400" role="button">
                Get a Free Estimate
              </a>*/}
              <Link to="/contact" className="inline-block mt-4 md:text-xl text-logoGreen font-semibold hover-effect">
                        Get a Free Estimate <span className="arrow">&rarr;</span>
              </Link>
            </div>
            <div className='xl:col-span-2 flex justify-end'>
              <img className="rounded-sm w-full lg:w-3/4 xl:h-[650px] xl:object-cover animate__animated pb-10" src={currentImage} alt="Hero" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

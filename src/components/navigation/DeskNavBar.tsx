import React, { useState, useEffect } from 'react';
import { DeskNavBarLinks } from './navbarComponents/DeskNavBarLinks';
import { Link } from 'react-router-dom';
import logo4 from '../../assets/logos/4.png';

const DeskNavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section className={`topbar sticky top-0 z-50 page font-helvetica-regular tracking-tight transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="flex justify-between items-center px-0 w-full">
        <div className='flex'>
        <Link to="/" className="flex gap-3 items-center">
          <img src={logo4} alt="logo" width={175} height={135} />
        </Link>
        <DeskNavBarLinks />
        </div>
        <div className='gap-4 flex font-helvetica-regular'>
            <Link to="/contact" className="w-full flex rounded-md items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-logoDarkGray bg-gray-100 hover:bg-emerald-100 md:py-3 md:text-sm md:px-8">
                Contact
            </Link>
            <Link to="/contact" className="w-full flex rounded-md items-center justify-center px-8 py-3 border border-transparent font-medium text-white bg-logoGreen hover:bg-emerald-800 md:py-1 md:text-sm md:px-8">
              QUOTES
            </Link>
        </div>
      </div>
    </section>
  );
};

export default DeskNavBar;

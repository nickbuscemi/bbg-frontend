import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileNavBar from "../components/navigation/MobileNavBar";
import DeskNavBar from "../components/navigation/DeskNavBar";
import Footer from "../components/navigation/Footer";
import NavBarHeader from "@/components/navigation/NavBarHeader";

const RootLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full md:flex">
      <div className={`transition-transform duration-300 ${isScrolled ? '-translate-y-full' : ''}`}>
        <NavBarHeader />
        {isMobile ? <MobileNavBar /> : <DeskNavBar />}
      </div>
      <section className="flex flex-col w-full">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;

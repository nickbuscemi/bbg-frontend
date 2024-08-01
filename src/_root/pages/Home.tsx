import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { GetQuote } from '@/components/contact/GetQuote';
import { Pests } from '@/components/ui/Pests';
import Feature1 from '@/components/sections/home-sections/Feature1';
import Feature2 from '@/components/sections/home-sections/Feature2';
import Feature3 from '@/components/sections/home-sections/Feature3';

const Home: React.FC = () => {
  return (
    <div>
    <Hero />
    <Feature1 />
    <Feature2 />
    <Pests />
    <Feature3 />
    <GetQuote />
    </div>
  );
};

export default Home;

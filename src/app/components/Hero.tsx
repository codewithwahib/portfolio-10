import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg-cover"
      style={{ backgroundSize: '35%', backgroundPosition: 'left 100px top 200px' }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[70px] sm:text-[90px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-left" className="text-orange-500">I&apos;m</p>
            <p data-aos="zoom-in-left" className="text-orange-500">Hassan</p>
            <p data-aos="zoom-in-left" className="text-orange-500">Jaffer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
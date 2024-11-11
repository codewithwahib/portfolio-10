import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='relative min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg-cover'
      style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 200px" }}
      aria-label="Hero section with background image"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <Navbar />

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] relative z-10'>
        <div className='hidden lg:block'></div>
        <div className='text-[70px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-left" aria-label="I am">Im</p>
            <p data-aos="zoom-in-left" aria-label="Hassan">Hassan</p>
            <p data-aos="zoom-in-left" aria-label="Jaffer">Jaffer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

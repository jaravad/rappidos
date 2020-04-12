import React from 'react';
import heroImg from '../assets/images/hero.svg';
import NavBar from './NavBar';

function Hero() {
  return (
    <header>
      <NavBar></NavBar>
      <main className="hero-section w-full h-auto md:h-screen flex flex-col-reverse md:flex-row items-center bg-gray-100 pt-10">
        <div className="w-full md:w-1/2 flex justify-center  items-center">
          <img className="w-3/4" src={heroImg} alt="Food" />
        </div>
        <div className="pt-16 mb-10 md:mb-0 pl-14 md:pl-5 md:pt-0 w-full md:w-1/2 flex flex-col justify-center  text-gray-800">
          <div className="w-4/5">
            <h1 className="text-5xl font-normal leading-tight mb-4">
              Tu hambre de crecer está en <strong>RAPPIdos</strong>
            </h1>
            <p className="text-xl">
              Únete a nuestra comunidad de restaurantes y crece con nosotros
            </p>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Hero;

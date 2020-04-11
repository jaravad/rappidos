import React from 'react';
import heroImg from '../assets/images/hero-image.png';
import NavBar from './NavBar';

function Hero() {
  return (
    <header>
      <NavBar></NavBar>
      <main className="hero-section w-full h-screen flex items-center bg-gray-100">
        <div className="w-1/2 flex justify-center items-center">
          <h1 className="w-3/5 text-5xl font-semibold text-gray-900">
            La manera más facil y rapida de ordenar comida
          </h1>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img className="w-3/5" src={heroImg} alt="Food" />
        </div>
      </main>
    </header>
  );
}

export default Hero;

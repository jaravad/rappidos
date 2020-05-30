import React from 'react';
import heroImg from '../../assets/images/hero.svg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <header>
      <main className="hero-section w-full h-auto md:h-screen flex flex-col-reverse md:flex-row items-center bg-gray-100 pt-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
          <img
            className="w-3/5 md:w-3/4 from-bottom-anim"
            src={heroImg}
            alt="Food"
          />
        </div>
        <div className="pt-16 mb-10 md:mb-0 pl-12 md:pl-5 md:pt-0 w-full md:w-1/2 flex flex-col justify-center">
          <div className="w-4/5 text-gray-800 right-to-left-anim">
            <h1 className="text-5xl font-normal leading-tight mb-4">
              Tu oportunidad de crecer está en <strong>RAPPIdos</strong>
            </h1>
            <p className="leading-tight">
              Únete hoy a nuestra comunidad de restaurantes. Ayudarte a crecer
              como empresa es uno de nuestro principales objetivos.
            </p>
            <Link
              to="/signup-login"
              className="start-btn px-4 py-2 bg-purple-900 border-solid border-2 border-purple-900 text-white rounded-lg mt-5 font-bold inline-flex items-center hover:text-purple-900 hover:bg-transparent transition-colors duration-300 self-start"
            >
              <span className="">Comienza</span>
              <span className="material-icons">chevron_right</span>
            </Link>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Hero;

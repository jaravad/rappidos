import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function NavBar() {
  const toggle = () => {
    const menu = document.getElementById('menu');

    if (menu.classList.contains('block')) {
      menu.classList.replace('block', 'hidden');
    } else {
      menu.classList.replace('hidden', 'block');
    }
  };

  const exit = () => {
    toggle();
    localStorage.clear();
  };

  const signInBtn = (
    <NavLink
      to="/signup-login"
      onClick={toggle}
      className="text-sm px-4 py-2 leading-none rounded text-white font-bold border-white border-2 hover:border-transparent hover:text-purple-800 hover:bg-white lg:mt-0 mx-1 transition-colors duration-300 ease"
    >
      Ingresa
    </NavLink>
  );

  const logOutBtn = (
    <NavLink
      to="/"
      onClick={exit}
      className="text-sm px-4 py-2 leading-none rounded text-white font-bold border-white border-2 hover:border-transparent hover:text-purple-800 hover:bg-white lg:mt-0 mx-1 transition-colors duration-300 ease"
    >
      Salir
    </NavLink>
  );

  const ourService = (
    <NavHashLink
      to="/#about-us"
      onClick={toggle}
      className="nav-btn rounded mt-4 px-4 py-3 text-white hover:text-white font-semibold mx-1 rounded transition-colors duration-300 ease-in-out"
    >
      Nuestro servicio
    </NavHashLink>
  );

  const platesBtn = (
    <>
      <NavLink
        to="/platos"
        onClick={toggle}
        className="nav-btn rounded mt-4 px-4 py-3 text-white hover:text-white font-semibold mx-1 rounded transition-colors duration-300 ease-in-out"
      >
        Mis Platos
      </NavLink>
    </>
  );

  return (
    <nav className="navbar flex items-center justify-between flex-wrap px-6 py-4 fixed w-full shadow-lg fade-anim">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <NavLink
          to="/"
          className="font-semibold text-xl tracking-tight hover:cursor-auto"
        >
          RAPPIdos
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggle}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="menu"
        className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-between"
      >
        <div className="text-sm lg:flex-grow lg:inline-block mt-2 lg:mt-0 py-2 lg:py-0">
          <NavHashLink
            to="/#how-it-works"
            onClick={toggle}
            className="nav-btn rounded mt-4 px-4 py-3 text-white hover:text-white font-semibold mx-1 rounded transition-colors duration-300 ease-in-out"
          >
            Como funciona
          </NavHashLink>
          {localStorage.getItem('restaurante') === null
            ? ourService
            : localStorage.getItem('restaurante') !== 'undefined'
            ? platesBtn
            : ourService}
        </div>
        <div className="flex lg:inline-block py-2 lg:py-0">
          {localStorage.getItem('restaurante') === null
            ? signInBtn
            : localStorage.getItem('restaurante') !== 'undefined'
            ? logOutBtn
            : signInBtn}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

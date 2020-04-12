import React from 'react';

function NavBar() {
  const toggle = () => {
    const navItems = document.querySelectorAll('#menu a');
    navItems.forEach((item) => {
      if (item.classList.contains('block')) {
        item.classList.replace('block', 'hidden');
      } else {
        item.classList.replace('hidden', 'block');
      }
    });
  };
  return (
    <nav className="navbar flex items-center justify-between flex-wrap px-6 py-4 fixed w-full">
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
        <span className="font-semibold text-xl tracking-tight">RAPPIdos</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-between"
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="nav-item hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#"
            className="nav-item hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#"
            className="nav-item hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Blog
          </a>
        </div>
        <a
          href="#"
          className="nav-item hidden lg:inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

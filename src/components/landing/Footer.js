import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className="w-full py-10">
      <article className="w-4/5 mx-auto text-white">
        <Link
          to="/"
          className="block font-semibold text-2xl tracking-tight hover:cursor-auto hover:text-pink-400 mb-8 transition-colors duration-300"
        >
          RAPPIdos
        </Link>
        <HashLink
          to="/#how-it-works"
          className="block font-semibold text-xl tracking-tight hover:cursor-auto hover:text-pink-400 mb-2 transition-colors duration-300"
        >
          Como funciona
        </HashLink>

        <HashLink
          to="/#about-us"
          className="block font-semibold text-xl tracking-tight hover:cursor-auto hover:text-pink-400 mb-6 transition-colors duration-300"
        >
          Nuestro servicio
        </HashLink>
        <hr className="w-full border-top border-solid border-white mb-3 opacity-50" />
        <p>© 2020 RAPPIdos Technologies Inc.</p>
      </article>
    </footer>
  );
}

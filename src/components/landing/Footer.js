import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-10">
      <article className="w-4/5 mx-auto text-white">
        <Link
          to="/"
          className="block font-semibold text-2xl tracking-tight hover:cursor-auto mb-8"
        >
          RAPPIdos
        </Link>

        <hr className="w-full border-top border-solid border-white mb-3 opacity-50" />
        <p>© 2020 RAPPIdos Technologies Inc.</p>
      </article>
    </footer>
  );
}

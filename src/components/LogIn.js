import React from 'react';
import NavBar from './NavBar';

function LogIn() {
  return (
    <header>
      <NavBar></NavBar>
      <main className="h-screen w-screen bg-pink-100 flex items-center justify-center">
        <article className="w-4/5 md:max-w-sm bg-pink-100 h-64 rounded border border-solid border-gray-400 shadow-md"></article>
      </main>
    </header>
  );
}

export default LogIn;

import React from 'react';

function isInputNumber(evt) {
  const ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

function LogIn() {
  return (
    <main className="h-screen w-screen bg-pink-100 flex items-center justify-center">
      <article className="text-gray-800 w-4/5 md:max-w-sm bg-pink-100 h-64 rounded border border-solid border-gray-400 shadow-md p-8">
        <h1 className="text-xl font-bold  text-center mb-4">Inicia sesión</h1>
        <form className="w-full" action="">
          <label htmlFor="phone" className="px-2 text-xs">
            Número de teléfono
          </label>
          <input
            className="w-full border-solid border border-gray-400 rounded-md h-12 px-2"
            type="text"
            id="phone"
            placeholder="Número de teléfono"
            onKeyPress={isInputNumber}
            autoComplete="off"
          />
        </form>
      </article>
    </main>
  );
}

export default LogIn;

import React from 'react';
import { Link } from 'react-router-dom';
//international phone codes
const countryTelData = require('country-telephone-data');

function isInputNumber(evt) {
  const ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '+57' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const options = countryTelData.allCountries.map((country, key) => {
      return (
        <option value={'+' + country.dialCode} key={key}>
          {country.name}
        </option>
      );
    });
    return (
      <main className="food-back h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom pt-32">
        <article className="text-gray-800 w-4/5 md:max-w-sm bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-8 mx-auto">
          <h1 className="text-xl font-bold  text-center mb-4">Inicia sesión</h1>
          <form className="w-full" action="" onSubmit={this.handleSubmit}>
            <label
              htmlFor="countries"
              className="text-xs block mb-1 font-semibold"
            >
              País/Región
            </label>
            <select
              value={this.state.value}
              onChange={this.handleChange}
              className=" bg-white w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3"
              id="countries"
            >
              {options}
            </select>
            <label htmlFor="phone" className="text-xs block mb-1 font-semibold">
              Número de teléfono
            </label>
            <input
              className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
              type="text"
              id="phone"
              placeholder="Número de teléfono"
              onKeyPress={isInputNumber}
              autoComplete="off"
            />
            <p className="text-xs mb-5">
              Te vamos a confirmar el número por teléfono o mensaje de texto.
              Sujeto a las tarifas estándar para mensajes y datos.
            </p>

            <input
              type="submit"
              value="Continúa"
              className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3"
            />

            <p className="text-xs">
              No tienes una cuenta?
              <Link>
                <strong className="underline ml-1">Regístrate</strong>
              </Link>
            </p>
          </form>
        </article>
      </main>
    );
  }
}

export default LogIn;

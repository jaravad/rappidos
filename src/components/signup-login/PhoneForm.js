import React from 'react';
import api from '../../api';
import { isInputNumber } from '../../App';
//international phone codes
const countryTelData = require('country-telephone-data');

class PhoneForm extends React.Component {
  state = {
    loading: false,
  };
  continue = async (phone) => {
    this.setState({ loading: true });
    let r = await api.pedirCodigo(phone);
    this.setState({ loading: false });
    this.props.nextStepSpecial(r.body.nuevo);
  };

  render() {
    const { values, handleChange } = this.props;
    const options = countryTelData.allCountries.map((country, key) => {
      return (
        <option value={'+' + country.dialCode} key={key}>
          {country.name.split(' ')[0]}
        </option>
      );
    });

    return (
      <main className="fade-anim food-back h-screen w-full bg-pink-100 bg-cover bg-no-repeat bg-bottom pt-32">
        <article className="flex flex-col items-center text-gray-800 w-4/5 md:max-w-sm bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-8 mx-auto">
          <h1 className="text-xl font-bold text-center mb-4">Ingresa</h1>
          {this.state.loading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="w-full">
              <label
                htmlFor="countries"
                className="text-xs block mb-1 font-semibold"
              >
                País/Región
              </label>
              <select
                defaultValue={values.phonecode}
                onChange={handleChange('phonecode')}
                className=" bg-white w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3"
                id="countries"
              >
                {options}
              </select>
              <label
                htmlFor="phone"
                className="text-xs block mb-1 font-semibold"
              >
                Número de teléfono
              </label>
              <input
                className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
                type="text"
                id="phone"
                placeholder="Número de teléfono"
                onChange={handleChange('phone')}
                onKeyPress={isInputNumber}
                defaultValue={values.phone}
                autoComplete="off"
                required
              />
              <p className="text-xs mb-5">
                Te vamos a confirmar el número por teléfono o mensaje de texto.
                Sujeto a las tarifas estándar para mensajes y datos.
              </p>

              <input
                type="submit"
                value="Continúa"
                className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3 cursor-pointer"
                onClick={() => this.continue(values.phonecode + values.phone)}
              />
            </div>
          )}
        </article>
      </main>
    );
  }
}

export default PhoneForm;

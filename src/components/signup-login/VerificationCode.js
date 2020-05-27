import React from 'react';
import { isInputNumber } from './PhoneForm';

class VerificationCode extends React.Component {
  state = {
    value: '',
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { values, handleChange } = this.props;

    console.log(values);
    return (
      <main className="food-back h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom pt-32">
        <article className="text-gray-800 w-4/5 md:max-w-md bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-12 mx-auto flex flex-col items-center">
          <h1 className="text-xl font-bold text-center mb-4">
            Confirma tu número de teléfono
          </h1>
          <p className="w-full mb-5">
            Ingresa el código que se acaba de enviar a {values.phone}:
          </p>
          <input
            className="bg-white block w-4/5 border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600 text-2xl text-center tracking-widest"
            type="text"
            id="code"
            onChange={handleChange('code')}
            maxLength={6}
            onKeyPress={isInputNumber}
            defaultValue={values.code}
            autoComplete="off"
          />
          <div>{`Phone: ${values.phone}`}</div>
          <div>{`Phone code: ${values.phonecode}`}</div>
          <div>{`Code: ${values.code}`}</div>

          <input
            type="submit"
            value="Continúa"
            className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3"
            onClick={this.continue}
          />
        </article>
      </main>
    );
  }
}

export default VerificationCode;

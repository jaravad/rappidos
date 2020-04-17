import React from 'react';
import ReactCodeInput from 'react-verification-code-input';

class VerificationCode extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <main className="food-back h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom pt-32">
        <article className="text-gray-800 w-4/5 md:max-w-md bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-12 mx-auto ">
          <h1 className="text-xl font-bold text-center mb-4">
            Confirma tu número de teléfono
          </h1>
          <p className="w-full mb-5">
            Ingresa el código que se acaba de enviar a 3183519851:
          </p>

          <ReactCodeInput
            autoFocus={true}
            className=""
            defaultValue={values.code}
            onChange={handleChange('code')}
            disabled={false}
            fieldHeight={54}
            fieldWidth={58}
            fields={4}
            type="number"
          />
        </article>
      </main>
    );
  }
}

export default VerificationCode;

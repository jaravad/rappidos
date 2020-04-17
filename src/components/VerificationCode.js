import React from 'react';
import ReactCodeInput from 'react-verification-code-input';

class VerificationCode extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {}

  handleSubmit(event) {}

  render() {
    return (
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
          disabled={false}
          fieldHeight={54}
          fieldWidth={58}
          fields={4}
          type="number"
        />
      </article>
    );
  }
}

export default VerificationCode;

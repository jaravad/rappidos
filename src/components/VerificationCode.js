import React from 'react';
import PinInput from 'react-pin-input';

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
    // this should be uncommented
    // const { values, handleChange } = this.props;
    const { values } = this.props;
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
          <PinInput
            length={5}
            focus
            // disabled
            className="mx-auto"
            ref={(p) => (this.pin = p)}
            type="numeric"
            onChange={this.onChange}
          />
          <div>{this.state.value}</div>
        </article>
      </main>
    );
  }
}

export default VerificationCode;

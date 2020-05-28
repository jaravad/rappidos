import React from 'react';
import { isInputNumber } from '../../App';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api';
class VerificationCode extends React.Component {
  state = {
    value: '',
    loading: false,
    navigate: false,
  };

  handler = async (phone, code, nuevo) => {
    this.setState({ loading: true });
    let r = await api.verificarCodigo(phone, code);
    this.setState({ loading: false });
    if (r.body.verified) {
      if (nuevo) {
        this.props.nextStep();
      } else {
        this.setState({ navigate: true });
      }
    } else {
      toast('El código de verificación no es válido');
    }
  };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    if (this.state.navigate === true) {
      return <Redirect to="/platos"></Redirect>;
    }
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <main className="fade-anim food-back h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom pt-32">
          <article className="text-gray-800 w-4/5 md:max-w-md bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-12 mx-auto flex flex-col items-center">
            <ToastContainer />
            <h1 className="text-xl font-bold text-center mb-4">
              Confirma tu número de teléfono
            </h1>
            {this.state.loading ? (
              <div className="lds-hourglass"></div>
            ) : (
              <>
                <p className="w-full mb-5">
                  Ingresa el código que se acaba de enviar a {values.phone}:
                </p>
                <input
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600 text-2xl text-center tracking-widest mb-8"
                  type="text"
                  id="code"
                  onChange={handleChange('code')}
                  maxLength={6}
                  onKeyPress={isInputNumber}
                  defaultValue={values.code}
                  autoComplete="off"
                  required
                />

                <input
                  type="submit"
                  value="Continúa"
                  className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3 cursor-pointer"
                  onClick={() =>
                    this.handler(
                      values.phonecode + values.phone,
                      values.code,
                      values.nuevo
                    )
                  }
                />
              </>
            )}
          </article>
        </main>
      </React.Fragment>
    );
  }
}

export default VerificationCode;

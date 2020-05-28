import React from "react";
import api from "../../api";
import "../../assets/css/myStyles.css";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
class SignUpInfo extends React.Component {
  state = {
    loading: false,
    navigate: false,
  };
  handleSubmit = async (name, category, address, avgTime, phone) => {
    this.setState({ loading: true });
    console.log(phone);
    let r = await api.register(name, category, address, avgTime, phone);
    this.setState({ loading: false });
    if (!r.error) {
      this.setState({ navigate: true });
    } else {
      toast("¡Ocurrió un error!");
    }
  };
  render() {
    const { values, handleChange } = this.props;
    if (this.state.navigate) {
      return <Redirect to="/platos"></Redirect>;
    }
    return (
      <main className="food-back min-h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom py-32">
        <ToastContainer />
        <article className="text-gray-800 w-4/5 md:max-w-sm bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-8 mx-auto ">
          <h1 className="text-xl font-bold  text-center mb-4">
            Terminar de registrarme
          </h1>
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
                htmlFor="name"
                className="text-xs block mb-1 font-semibold"
              >
                Nombre del restaurante
              </label>
              <input
                className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
                type="text"
                id="name"
                placeholder="Nombre"
                onChange={handleChange("name")}
                defaultValue={values.name}
                autoComplete="off"
                required
              />

              <label
                htmlFor="address"
                className="text-xs block mb-1 font-semibold"
              >
                Dirección del restaurante
              </label>
              <input
                className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
                type="text"
                id="address"
                placeholder="Dirección"
                onChange={handleChange("address")}
                defaultValue={values.address}
                autoComplete="off"
                required
              />

              <label
                htmlFor="category"
                className="text-xs block mb-1 font-semibold"
              >
                Categoría
              </label>
              <input
                className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
                type="text"
                id="category"
                placeholder="Categoría"
                onChange={handleChange("category")}
                defaultValue={values.category}
                autoComplete="off"
                required
              />

              <label
                htmlFor="avgTime"
                className="text-xs block mb-1 font-semibold"
              >
                Tiempo promedio
              </label>
              <input
                className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-5 placeholder-gray-600"
                type="text"
                id="avgTime"
                placeholder="Tiempo"
                onChange={handleChange("avgTime")}
                defaultValue={values.avgTime}
                autoComplete="off"
                required
              />

              <input
                type="submit"
                value="Continúa"
                className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3"
                onClick={() =>
                  this.handleSubmit(
                    values.name,
                    values.category,
                    values.address,
                    values.avgTime,
                    values.phonecode + values.phone
                  )
                }
              />
            </div>
          )}
        </article>
      </main>
    );
  }
}

export default SignUpInfo;

import React from 'react';
import { isInputNumber } from '../../App';
import plate from '../../assets/images/plate.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/myStyles.css';
import api from '../../api/';
class AddPlate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: '',
      calories: '',
      people: '',
      price: '',
      image: '',
      description: '',
      selectedFile: null,
      loaded: null,
      loading: false,
    };
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  onClickHandler = async () => {
    this.setState({ loading: true });
    let r = await api.addMeal(
      this.state.selectedFile,
      localStorage.getItem('restaurante'),
      this.state.name,
      this.state.weight,
      this.state.calories,
      this.state.people,
      this.state.price,
      this.state.description
    );
    if (r.error) {
      toast('Ocurrió un error, intentalo más tarde. ');
    } else {
      toast('Se ha agregado el plato exitosamente.');
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <main className="w-full min-h-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom flex fade-anim">
        <div className="w-full sm:w-7/12 py-24">
          <ToastContainer />
          <article className="flex flex-col items-start text-gray-800 w-4/5 lg:w-8/12 h-auto rounded border border-solid border-gray-400 shadow p-8 mx-auto">
            <h1 className="text-3xl font-bold ">Añadir Plato</h1>
            <hr className="w-full border-solid border-top border-gray-400 mb-4" />
            <p className=" leading-tight font-normal mb-5">
              Añade platos para que tus clientes puedan luego ordenarlos usando
              la app <strong>RAPPIdos</strong>
            </p>

            {this.state.loading ? (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <div className="w-full">
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Nombre del plato
                </label>
                <input
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-10 px-2 mb-3 placeholder-gray-600"
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  onChange={this.handleChange('name')}
                  defaultValue={this.state.name}
                  autoComplete="off"
                  required
                />

                <label htmlFor="weight" className="block mb-1 font-semibold">
                  Peso
                </label>
                <input
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-10 px-2 mb-3 placeholder-gray-600"
                  type="text"
                  id="weight"
                  placeholder="Peso"
                  onChange={this.handleChange('weight')}
                  onKeyPress={isInputNumber}
                  defaultValue={this.state.weight}
                  autoComplete="off"
                  required
                />

                <label htmlFor="calories" className=" block mb-1 font-semibold">
                  Calorias
                </label>
                <input
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-10 px-2 mb-3 placeholder-gray-600"
                  type="text"
                  id="calories"
                  placeholder="Calorias"
                  onChange={this.handleChange('calories')}
                  onKeyPress={isInputNumber}
                  defaultValue={this.state.calories}
                  autoComplete="off"
                  required
                />

                <label htmlFor="people" className=" block mb-1 font-semibold">
                  Número de personas
                </label>
                <input
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-10 px-2 mb-3 placeholder-gray-600"
                  type="text"
                  id="people"
                  placeholder="Personas"
                  onChange={this.handleChange('people')}
                  onKeyPress={isInputNumber}
                  defaultValue={this.state.people}
                  autoComplete="off"
                  required
                />

                <label htmlFor="price" className=" block mb-1 font-semibold">
                  Precio
                </label>
                <input
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-10 px-2 mb-3 placeholder-gray-600"
                  type="text"
                  id="price"
                  placeholder="Precio"
                  onChange={this.handleChange('price')}
                  onKeyPress={isInputNumber}
                  defaultValue={this.state.price}
                  autoComplete="off"
                  required
                />

                <label htmlFor="image" className=" block mb-1 font-semibold">
                  Imagen del plato
                </label>
                <input
                  className=" block w-full border-solid border border-gray-400 rounded-md h-12  mb-3 p-2 placeholder-gray-600"
                  type="file"
                  id="image"
                  name=""
                  onChange={this.onChangeHandler}
                  defaultValue={this.state.image}
                  autoComplete="off"
                  required
                />

                <label
                  htmlFor="description"
                  className=" block mb-1 font-semibold"
                >
                  Descripción
                </label>
                <textarea
                  className="bg-white block w-full border-solid border border-gray-400 rounded-md h-20 p-2 mb-3 placeholder-gray-600"
                  id="description"
                  placeholder="Escriba descripción"
                  onChange={this.handleChange('description')}
                  defaultValue={this.state.description}
                  autoComplete="off"
                  required
                />

                <input
                  type="submit"
                  value="Añadir"
                  className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3 cursor-pointer"
                  onClick={this.onClickHandler}
                />
              </div>
            )}
          </article>
        </div>
        <div className="w-5/12 h-screen pt-24 pb-12 hidden sm:flex justify-center sm:fixed md:justify-start align-middle right-0 upper-corner-anim">
          <img src={plate} alt="A chef" className="h-full" />
        </div>
      </main>
    );
  }
}

export default AddPlate;

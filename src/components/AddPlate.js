import React from 'react';
import isInputNumber from '../App';
class AddPlate extends React.Component {
  state = {
    name: '',
    weight: '',
    calories: '',
    people: '',
    price: '',
    image: '',
    description: '',
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      <main className="w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom py-32">
        <article className="flex flex-col items-center text-gray-800 w-4/5 md:max-w-sm bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-8 mx-auto">
          <h1 className="text-xl font-bold text-center mb-4">Añadir Plato</h1>

          <div className="w-full">
            <label htmlFor="name" className="text-xs block mb-1 font-semibold">
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

            <label
              htmlFor="weight"
              className="text-xs block mb-1 font-semibold"
            >
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

            <label
              htmlFor="calories"
              className="text-xs block mb-1 font-semibold"
            >
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

            <label
              htmlFor="people"
              className="text-xs block mb-1 font-semibold"
            >
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

            <label htmlFor="price" className="text-xs block mb-1 font-semibold">
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

            <label htmlFor="image" className="text-xs block mb-1 font-semibold">
              Imagen del plato
            </label>
            <input
              className=" block w-full border-solid border border-gray-400 rounded-md h-12  mb-3 p-2 placeholder-gray-600"
              type="file"
              id="image"
              onChange={this.handleChange('image')}
              defaultValue={this.state.image}
              autoComplete="off"
              required
            />

            <label
              htmlFor="description"
              className="text-xs block mb-1 font-semibold"
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

            <p className="text-xs mb-5">
              Te vamos a confirmar el número por teléfono o mensaje de texto.
              Sujeto a las tarifas estándar para mensajes y datos.
            </p>

            <input
              type="submit"
              value="Añadir"
              className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3 cursor-pointer"
            />
          </div>
        </article>
      </main>
    );
  }
}

export default AddPlate;

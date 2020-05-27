import React from 'react';

class SignUpInfo extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <main className="food-back min-h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom py-32">
        <article className="text-gray-800 w-4/5 md:max-w-sm bg-pink-100 h-auto rounded border border-solid border-gray-400 shadow-md p-8 mx-auto ">
          <h1 className="text-xl font-bold  text-center mb-4">
            Terminar de registrarme
          </h1>
          <form className="w-full" action="" onSubmit={this.handleSubmit}>
            <label htmlFor="name" className="text-xs block mb-1 font-semibold">
              Nombre del restaurante
            </label>
            <input
              className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
              type="text"
              id="name"
              placeholder="Nombre"
              onChange={handleChange('name')}
              defaultValue={values.name}
              autoComplete="off"
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
              onChange={handleChange('address')}
              defaultValue={values.address}
              autoComplete="off"
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
              onChange={handleChange('category')}
              defaultValue={values.category}
              autoComplete="off"
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
              onChange={handleChange('avgTime')}
              defaultValue={values.avgTime}
              autoComplete="off"
            />

            <input
              type="submit"
              value="Continúa"
              className="w-full submit-btn py-3 font-bold text-white rounded-lg mb-3"
              onClick={this.continue}
            />
          </form>
        </article>
      </main>
    );
  }
}

export default SignUpInfo;

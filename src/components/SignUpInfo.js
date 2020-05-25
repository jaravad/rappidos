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
              htmlFor="ownerName"
              className="text-xs block mb-1 font-semibold"
            >
              Nombre del representante
            </label>
            <input
              className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
              type="text"
              id="ownerName"
              placeholder="Nombre"
              onChange={handleChange('ownerName')}
              defaultValue={values.ownerName}
              autoComplete="off"
            />

            <label
              htmlFor="ownerLastName"
              className="text-xs block mb-1 font-semibold"
            >
              Apellido del representante
            </label>
            <input
              className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-3 placeholder-gray-600"
              type="text"
              id="ownerLastName"
              placeholder="Apellido"
              onChange={handleChange('ownerLastName')}
              defaultValue={values.ownerLastName}
              autoComplete="off"
            />

            <label htmlFor="email" className="text-xs block mb-1 font-semibold">
              Correo electrónico
            </label>
            <input
              className="bg-white block w-full border-solid border border-gray-400 rounded-md h-12 px-2 mb-5 placeholder-gray-600"
              type="email"
              id="email"
              placeholder="Correo"
              onChange={handleChange('email')}
              defaultValue={values.email}
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

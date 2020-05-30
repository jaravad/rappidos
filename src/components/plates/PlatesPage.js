import React from 'react';
import Plate from './Plate';
import chef from '../../assets/images/chef.svg';
import { Link } from 'react-router-dom';
import api from '../../api';
import { HashLink } from 'react-router-hash-link';

class PlatesPage extends React.Component {
  async componentDidMount() {
    let r = await api.traerPlatos();
    this.setState({ arreglo: r.body });
  }
  state = {
    arreglo: [],
  };

  updateArray = (id) => {
    let arr = [];
    for (let i = 0; i < this.state.arreglo.length; i++) {
      if (this.state.arreglo[i]._id !== id) {
        arr.push(this.state.arreglo[i]);
      }
    }
    this.setState({ arreglo: arr });
  };

  render() {
    return (
      <div className="fade-anim">
        <div className="container mx-auto py-24">
          <div className="w-11/12 mx-auto">
            <div className="px-3">
              <article className="flex flex-col md:flex-row w-full rounded-lg plates-section pt-4 pb-6 md:py-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
                  <div className="w-4/5 my-12 md:my-0 text-gray-800 left-to-right-anim">
                    <h2 className="text-5xl font-semibold leading-tight mb-4">
                      Bienvenido!
                    </h2>
                    <p className="leading-relaxed ">
                      Con la ayuda de <strong>RAPPIdos</strong> puedes aumentar
                      el alcance de tu restaurante, aumentar las ganancias y
                      satisfacer a tus clientes a través de una agradable
                      experiencia de delivery.
                    </p>
                    <HashLink
                      to="/#how-it-works"
                      className="start-btn font-semibold text-gray-900 mt-3 inline-block flex items-center"
                    >
                      <span className="mr-1 underline">
                        Como funciona RAPPIdos?
                      </span>
                      <span className="material-icons">arrow_right_alt</span>
                    </HashLink>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img
                    className="w-7/12 md:w-6/12 upper-corner-anim"
                    src={chef}
                    alt="A chef"
                  />
                </div>
              </article>
            </div>
            <section>
              <Link
                to="/plato"
                className="inline-flex items-center text-gray-700 hover:bg-gray-700 hover:text-white rounded px-3 py-2 mt-8 transition-colors duration-300 mb-4 ml-3"
              >
                <span className="material-icons mr-3">add_circle_outline</span>
                <span className="font-semibold">Añadir Plato</span>
              </Link>
              {this.state.arreglo.length > 0 ? (
                <h2 className="text-2xl font-bold pl-3">Platos</h2>
              ) : (
                <h2 className="text-xl pl-3">
                  Parece que aún no has añadido platos
                </h2>
              )}
              <div className="flex flex-wrap">
                {this.state.arreglo.length > 0
                  ? this.state.arreglo.map((meal) => {
                      return (
                        <Plate
                          name={meal.nombre}
                          description={meal.descripcion}
                          calories={meal.calorias}
                          people={meal.numPersonas}
                          weight={meal.peso}
                          price={meal.precio}
                          image={meal.uri}
                          id={meal._id}
                          key={meal._id}
                          update={this.updateArray}
                        />
                      );
                    })
                  : null}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default PlatesPage;

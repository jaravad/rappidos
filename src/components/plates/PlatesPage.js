import React from 'react';
import Plate from './Plate';
import image from '../../assets/images/mittagessen.jpg';
import chef from '../../assets/images/chef.svg';
function PlatesPage() {
  return (
    <div>
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
                    Con la ayuda de <strong>RAPPIdos</strong> puedes aumentar el
                    alcance de tu restaurante, aumentar las ganancias y
                    satisfacer a tus clientes a través de una agradable
                    experiencia de delivery.
                  </p>
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
          <section className="fade-anim">
            <h2 className="text-2xl font-bold pl-3 mt-10">Platos</h2>
            <div className="flex flex-wrap">
              <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
              {/* <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} /> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default PlatesPage;

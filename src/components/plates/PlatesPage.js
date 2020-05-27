import React from 'react';
import Plate from './Plate';
import image from '../../assets/images/mittagessen.jpg';
import chef from '../../assets/images/chef.svg';
function PlatesPage() {
  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="w-11/12 mx-auto">
          <article className="flex flex-col md:flex-row w-full rounded-lg plates-section pt-4 pb-6 md:py-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
              <div className="w-4/5 my-12 md:my-0 text-gray-800 relative left-to-right-anim">
                <h2 className="text-5xl font-semibold leading-tight mb-4 relative">
                  Bienvenido
                </h2>
                <p className="leading-tight relative">
                  Gestiona tu restaurante desde un solo lugar.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                className="w-7/12 md:w-6/12 relative img-animation"
                src={chef}
                alt="A chef"
              />
            </div>
          </article>
          <h2 className="text-2xl font-bold pl-3 mt-10">Plates</h2>
          <div className="flex flex-wrap">
            <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
            {/* <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlatesPage;

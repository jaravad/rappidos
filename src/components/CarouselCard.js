import React from 'react';
import customers from '../assets/images/customers.jpg';
function CarouselCard() {
  return (
    <article className="carousel-card w-full p-10 flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 text-gray-900 flex items-center justify-center">
        <div className="w-4/5">
          <h3 className="text-2xl font-semibold mb-4">
            Complace a tus clientes
          </h3>
          <p>
            Con las entregas confiables de los Socios Repartidores que usan la
            plataforma RAPPIdos, podrás deleitar a los clientes con su comida
            preferida, cuándo y dónde la quieran.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <img src={customers} alt="" className=" object-cover" />
      </div>
    </article>
  );
}
export default CarouselCard;

{
  /*  */
}

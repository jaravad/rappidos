import React from 'react';

function CarouselCard(props) {
  return (
    <article className="h-auto carousel-card w-full p-10 flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full md:w-4/5">
          <h3 className="text-2xl font-semibold mb-4">{props.title}</h3>
          <p className="text-gray-700">{props.p}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={props.image}
          alt=""
          className="object-cover rounded shadow-lg"
        />
      </div>
    </article>
  );
}
export default CarouselCard;

{
  /*  */
}

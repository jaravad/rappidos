import React from 'react';

function Card(props) {
  return (
    <article className="p-3 w-full md:w-1/3">
      <div className="w-full rounded-md overflow-hidden shadow-md bg-white h-full">
        <div className="w-full h-48 p-5 bg-orange-100">
          <img
            className="w-full h-full object-contain"
            src={props.img}
            alt={props.title}
          />
        </div>
        <div className="px-8 py-6">
          <h3 className="font-bold mb-3">{props.title}</h3>
          <p className="text-gray-700 text-base">{props.p}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;

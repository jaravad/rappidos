import React from 'react';

function Platillo(props) {
  return (
    <article className="p-3 w-full md:w-1/2 lg:w-1/3">
      <div className="w-full rounded-md overflow-hidden shadow-md bg-white">
        <img
          className="w-full object-contain"
          src={props.img}
          alt={props.title}
        />
        <div className="px-8 py-6">
          <h3 className="font-bold mb-3 text-xl">{props.title}</h3>
          <p className="text-gray-700 text-base">{props.p}</p>
        </div>
      </div>
    </article>
  );
}
export default Platillo;

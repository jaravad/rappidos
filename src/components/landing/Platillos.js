import React from 'react';

function Platillo(props) {
  return (
    <article className="p-3 w-4/5 md:w-1/3">
      <div className="w-4/5 rounded-md overflow-hidden shadow-md bg-white h-full">
        <img
            className="w-full h-full object-contain"
            src={props.img}
            alt={props.title}
          />
        <div className="px-8 py-6">
          <h3 className="font-bold mb-3">{props.title}</h3>
          <p className="text-gray-700 text-base">{props.p}</p>
        </div>
      </div>
    </article>
  );
}
export default Platillo;

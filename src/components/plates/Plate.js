import React from 'react';

function Plate(props) {
  return (
    <article className="p-3 w-1/2 md:w-1/3 lg:w-1/4 ">
      <div className="w-full rounded-md overflow-hidden shadow-md bg-white relative">
        <img
          className="w-full object-contain"
          src={props.image}
          alt={props.title}
        />
        <div className="px-6 pt-5 pb-3">
          <h3 className="font-bold mb-2 text-xl">{props.name}</h3>
          <p className="text-gray-600 text-xs tracking-wide mb-1">
            {props.description}
          </p>
          <span className="flex items-center mb-1 text-orange-600">
            <span className="material-icons mr-1">whatshot</span>
            <span className="pt-1">{`${props.calories} ${
              parseInt(props.calories) > 1 ? 'calorias' : 'caloría'
            }`}</span>
          </span>

          <span className="flex items-center mb-1">
            <span className="material-icons mr-1">people</span>
            <span className="pt-1">{`${props.people} ${
              parseInt(props.people) > 1 ? 'personas' : 'persona'
            }`}</span>
          </span>

          <span className="flex items-center mb-1">
            <span className="material-icons mr-1">fastfood</span>
            <span className="pt-1">{`${props.weight} ${
              parseInt(props.weight) > 1 ? 'gramos' : 'gramo'
            }`}</span>
          </span>

          <span className="flex items-baseline">
            <span className="mr-1 font-semibold">$</span>
            <strong className="pt-1 text-3xl">{`${props.price}`}</strong>
          </span>
          {/*  */}
        </div>
        <button className="p-1 rounded flex justify-center items-center absolute plates__delete transition-colors duration-300 ease hover:bg-red-500 text-red-500 hover:text-white">
          <span className="material-icons">delete</span>
        </button>
      </div>
    </article>
  );
}
export default Plate;

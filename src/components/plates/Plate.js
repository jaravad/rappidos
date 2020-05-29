import React from 'react';
import Swal from 'sweetalert2';

function Plate(props) {
  const deleteMeal = () => {
    Swal.fire({
      title: 'Eliminar plato?',
      text: 'No podrás revertir esta acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cancelar',
      cancelButtonText: 'Borrar plato',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Plato borrado!', 'El plato ha sido borrado.', 'success');
      }
    });
  };

  return (
    <article className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 fade-anim">
      <div className="w-full h-full rounded-md overflow-hidden shadow-md bg-white relative">
        <div className="w-full h-48">
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt={props.title}
          />
        </div>

        <div className="px-6 pt-5 pb-3">
          <h3 className="font-bold text-xl">{props.name}</h3>

          <hr className="w-full border-top border-solid border-gray-300 mt-1 mb-2" />

          <p className="text-gray-600 text-xs tracking-wide">
            {props.description}
          </p>

          <hr className="w-full border-top border-solid border-gray-200 mt-2 mb-1" />

          <span className="flex items-center text-orange-600">
            <span className="material-icons mr-1">whatshot</span>
            <span className="pt-1 flex items-center">
              <strong className="text-xl mr-1">{props.calories} </strong>
              <span className="text-xs">{`${
                parseInt(props.calories) > 1 ? 'calorias' : 'caloría'
              }`}</span>
            </span>
          </span>

          <span className="flex items-center">
            <span className="material-icons mr-1">people</span>
            <span className="pt-1 flex items-center">
              <strong className="text-xl mr-1">{props.people} </strong>
              <span className="text-xs">{`${
                parseInt(props.people) > 1 ? 'personas' : 'persona'
              }`}</span>
            </span>
          </span>

          <span className="flex items-center">
            <span className="material-icons mr-1">fastfood</span>
            <span className="pt-1 flex items-center">
              <strong className="text-xl mr-1">{props.weight} </strong>
              <span className="text-xs">{`${
                parseInt(props.weight) > 1 ? 'gramos' : 'gramo'
              }`}</span>
            </span>
          </span>

          <span className="flex items-baseline">
            <span className="mr-1 font-semibold">$</span>
            <strong className="pt-1 text-3xl">{`${props.price}`}</strong>
          </span>
        </div>
        <button
          className="p-1 rounded flex justify-center items-center absolute plates__delete transition-colors duration-300 ease hover:bg-red-500 text-red-500 hover:text-white"
          onClick={deleteMeal}
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
    </article>
  );
}
export default Plate;

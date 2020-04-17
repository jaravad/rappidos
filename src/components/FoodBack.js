import React from 'react';
import LogInForm from './LogInForm';

function FoodBack(props) {
  return (
    <main className="food-back h-screen w-screen bg-pink-100 bg-cover bg-no-repeat bg-bottom pt-32">
      {props.form === 'login' ? <LogInForm></LogInForm> : 'hola'}
    </main>
  );
}

export default FoodBack;

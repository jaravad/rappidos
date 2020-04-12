import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import customers from '../assets/images/customers.jpg';
import food from '../assets/images/food.jpg';
import admin from '../assets/images/admin.jpg';
import CarouselCard from './CarouselCard';
const info = [
  {
    title: 'Complace a tus clientes',
    p:
      'Con las entregas confiables de los Socios Repartidores que usan la plataforma RAPPIdos, podrás deleitar a los clientes con su comida preferida, cuándo y dónde la quieran.',
    image: customers,
  },
  {
    title: 'Abre la puerta al crecimiento',
    p:
      'Miles de usuarios de la app RAPPIdos pueden estar buscando comida en tu área. Al asociarte con RAPPIdos y agregar tu restaurante a la plataforma, podemos ayudarte a llegar a ellos.',
    image: food,
  },
  {
    title: 'Administra todo con facilidad',
    p:
      'Los pedidos circulan sin problemas con el software para restaurantes de Uber Eats, que brinda opciones de integración flexibles y ofrece soporte cuando lo necesitas.',
    image: admin,
  },
];
function LandingCarousel() {
  const cards = info.map(function (text, index) {
    return (
      <CarouselCard
        title={text.title}
        p={text.p}
        image={text.image}
        key={index}
      ></CarouselCard>
    );
  });

  return (
    <section className="w-4/5 mx-auto">
      <Carousel className="w-full my-8" centered infinite arrows>
        {cards}
      </Carousel>
    </section>
  );
}

export default LandingCarousel;

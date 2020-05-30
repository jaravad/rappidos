import React from 'react';
import Card from './Card';
import clients from '../../assets/images/clients.svg';
import cook from '../../assets/images/cook.svg';
import delivery from '../../assets/images/delivery.svg';
const info = [
  {
    title: 'Los clientes hacen un pedido',
    p:
      'Un cliente encuentra tu restaurante y realiza un pedido a través de la app RAPPIdos.',
    img: clients,
  },
  {
    title: 'Tú lo preparas',
    p: 'El restaurante acepta el pedido y lo prepara.',
    img: cook,
  },
  {
    title: 'Llegan los Socios Repartidores',
    p:
      'Los socios repartidores recogen el pedido en el restaurante y se lo entregan al cliente.',
    img: delivery,
  },
];
function HowItWorks(props) {
  const cards = info.map(function (text, index) {
    return (
      <Card title={text.title} p={text.p} img={text.img} key={index}></Card>
    );
  });
  return (
    <section className="w-full pt-24 pb-24 bg-pink-100" id="how-it-works">
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl font-normal leading-tight mb-8">
          Como funciona <strong>RAPPIdos</strong> para restaurantes socios
        </h2>
        <div className="flex flex-wrap">{cards}</div>
      </div>
    </section>
  );
}
export default HowItWorks;

import React from 'react';
import Plate from './Plate';
import image from '../assets/images/mittagessen.jpg';
import banner from '../assets/images/banner.jpg';
function PlatesPage() {
  return (
    <div>
      <img alt="banner" src={banner}></img>
      <div className="pt-24 w-4/5 mx-auto">
        <h2 className="text-2xl font-bold pl-3">Plates</h2>
        <div className="flex flex-wrap">
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Plate title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
        </div>
      </div>
    </div>
  );
}
export default PlatesPage;

import React from 'react';
import Platillo from './Platillo';
import image from '../assets/images/mittagessen.jpg';
import banner from '../assets/images/banner.jpg';
function Products() {
  return (
    <div>
      <img alt="banner" src={banner}></img>
      <div className="pt-24 w-4/5 mx-auto">
        <h2 className="text-2xl font-bold pl-3">Platillos</h2>
        <div className="flex flex-wrap">
          <Platillo title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Platillo title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Platillo title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Platillo title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Platillo title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
          <Platillo title={'Spaguetti'} p={'Disfrutalo'} img={image} key={1} />
        </div>
      </div>
    </div>
  );
}
export default Products;

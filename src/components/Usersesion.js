import React from 'react';
import Platillo from '../components/landing/Platillos'
import image from '../assets/images/mittagessen.jpg'
import banner from '../assets/images/banner.jpg'
function Usersesion(){
return(
    <div>
<img alt="banner" src={banner}></img>
<div className="Pedidos pt-24 pl-8 text-2xl font-bold">
    
    <h2>Platillos</h2> 
    <Platillo title={"Spaguetti"} p={"Disfrutalo"} img={image} key={1}></Platillo>
    </div>
    </div>

);
}
export default Usersesion;
import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image from '../assets/images/hero-image.png';
import CarouselCard from './CarouselCard';

function LandingCarousel() {
  return (
    <section className="w-4/5 mx-auto">
      <Carousel className="w-full" centered infinite arrows>
        <CarouselCard></CarouselCard>
      </Carousel>
    </section>
  );
}

export default LandingCarousel;

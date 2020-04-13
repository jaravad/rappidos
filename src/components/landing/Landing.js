import React from 'react';

import Hero from './Hero';
import LandingCarousel from './LandingCarousel';
import HowItWorks from './HowItWorks';
function Landing() {
  return (
    <div>
      <Hero></Hero>
      <LandingCarousel></LandingCarousel>
      <HowItWorks></HowItWorks>
    </div>
  );
}
export default Landing;

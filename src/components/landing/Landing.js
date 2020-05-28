import React from 'react';

import Hero from './Hero';
import LandingCarousel from './LandingCarousel';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

function Landing() {
  return (
    <div>
      <Hero />
      <LandingCarousel />
      <HowItWorks />
      <Footer />
    </div>
  );
}
export default Landing;

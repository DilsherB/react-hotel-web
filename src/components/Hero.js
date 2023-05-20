import React from 'react';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="https://img.freepik.com/free-photo/swimming-pool_74190-2104.jpg?size=626&ext=jpg"
        alt="hotel view"
        style={{ width: "100vw", height: "30vw" }}
      />
      <HeroText />
    </div>
  );
};

export default Hero;

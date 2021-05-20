import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-4.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const ThreeCards = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero
        image={Image}
        title="Three Cards"
        desc="React, Conditional Rendering"
        desc2="API Simulation, Props"
        github="https://github.com/Jared-P-111/three-card-display-reactjs"
        ghPages="https://jared-p-111.github.io/three-card-display-reactjs/"
      />
    </motion.div>
  );
};

export default ThreeCards;

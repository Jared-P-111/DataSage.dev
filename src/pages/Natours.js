import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const Natours = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero
        image={Image}
        title="Natours"
        desc="Built with: Vanilla Javascript & Sass"
        desc2="This was a great project and gave me a solid foundation in Javascript, before I broke into
        the wonderful world of React.js."
        desc3="Please Note due to Gh-Pages image link changing on load, some images will not appear"
        github="https://github.com/Jared-P-111/Advanced_Sass_Natours_Site"
        ghPages="https://jared-p-111.github.io/Advanced_Sass_Natours_Site/"
      />
    </motion.div>
  );
};

export default Natours;
